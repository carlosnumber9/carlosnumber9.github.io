import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { Plugin, ResolvedConfig, ViteDevServer } from 'vite';
import { toString } from 'mdast-util-to-string';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { parseDocument } from 'yaml';

const VIRTUAL_MODULE_ID = 'virtual:writing-posts';
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`;
const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const WORDS_PER_MINUTE = 200;
const REQUIRED_FIELDS = ['title', 'summary', 'date', 'language'] as const;

interface WritingFrontmatter {
  title: string;
  summary: string;
  date: string;
  language: 'en' | 'es';
}

interface GeneratedWritingPost extends WritingFrontmatter {
  slug: string;
  readingMinutes: number;
  html: string;
}

interface WritingManifest {
  files: string[];
  posts: GeneratedWritingPost[];
}

const writingSanitizeSchema: typeof defaultSchema = {
  ...defaultSchema,
  tagNames: defaultSchema.tagNames?.filter((tagName) => tagName !== 'img'),
  attributes: {
    ...defaultSchema.attributes,
    code: [
      ...(defaultSchema.attributes?.code ?? []),
      ['className', 'hljs', /^language-/],
    ],
    span: [
      ...(defaultSchema.attributes?.span ?? []),
      ['className', /^hljs-/],
    ],
    ul: [
      ...(defaultSchema.attributes?.ul ?? []),
      ['className', 'contains-task-list'],
    ],
    li: [
      ...(defaultSchema.attributes?.li ?? []),
      ['className', 'task-list-item'],
    ],
  },
};

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeHighlight, { detect: false })
  .use(rehypeSanitize, writingSanitizeSchema)
  .use(rehypeExternalLinks, {
    rel: ['noopener', 'noreferrer'],
    target: '_blank',
  })
  .use(rehypeStringify);

const getRelativeFileName = (root: string, filePath: string) =>
  path.relative(root, filePath) || filePath;

const fail = (root: string, filePath: string, message: string): never => {
  throw new Error(`[writing] ${getRelativeFileName(root, filePath)}: ${message}`);
};

const isPlainRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const readRequiredString = (
  root: string,
  filePath: string,
  frontmatter: Record<string, unknown>,
  field: 'title' | 'summary' | 'date',
) => {
  const value = frontmatter[field];

  if (typeof value !== 'string' || value.trim().length === 0) {
    return fail(
      root,
      filePath,
      `frontmatter field "${field}" must be a non-empty string`,
    );
  }

  return value.trim();
};

const assertValidDate = (root: string, filePath: string, value: string) => {
  const match = ISO_DATE_PATTERN.exec(value);

  if (!match) {
    return fail(root, filePath, 'frontmatter field "date" must use YYYY-MM-DD');
  }

  const [, year, month, day] = match;
  const parsedDate = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

  if (
    parsedDate.getUTCFullYear() !== Number(year) ||
    parsedDate.getUTCMonth() !== Number(month) - 1 ||
    parsedDate.getUTCDate() !== Number(day)
  ) {
    fail(root, filePath, `frontmatter field "date" is not a valid date: ${value}`);
  }
};

const parseFrontmatter = (
  root: string,
  filePath: string,
  source: string,
): { body: string; frontmatter: WritingFrontmatter } => {
  const match = FRONTMATTER_PATTERN.exec(source);

  if (!match) {
    return fail(root, filePath, 'missing frontmatter delimited by --- lines');
  }

  const document = parseDocument(match[1], { uniqueKeys: true });

  if (document.errors.length > 0) {
    fail(root, filePath, `invalid frontmatter: ${document.errors[0].message}`);
  }

  const value = document.toJS() as unknown;

  if (!isPlainRecord(value)) {
    return fail(root, filePath, 'frontmatter must be a YAML object');
  }

  const unknownFields = Object.keys(value).filter(
    (field) => !REQUIRED_FIELDS.includes(field as (typeof REQUIRED_FIELDS)[number]),
  );

  if (unknownFields.length > 0) {
    fail(root, filePath, `unsupported frontmatter field: ${unknownFields.join(', ')}`);
  }

  const title = readRequiredString(root, filePath, value, 'title');
  const summary = readRequiredString(root, filePath, value, 'summary');
  const date = readRequiredString(root, filePath, value, 'date');
  const language = value.language;

  assertValidDate(root, filePath, date);

  if (language !== 'en' && language !== 'es') {
    return fail(
      root,
      filePath,
      'frontmatter field "language" must be "en" or "es"',
    );
  }

  const body = source.slice(match[0].length).trim();

  if (body.length === 0) {
    fail(root, filePath, 'article body must not be empty');
  }

  return {
    body,
    frontmatter: { title, summary, date, language },
  };
};

const compilePost = async (
  root: string,
  filePath: string,
): Promise<GeneratedWritingPost> => {
  const slug = path.basename(filePath, '.md');

  if (!SLUG_PATTERN.test(slug)) {
    fail(root, filePath, 'filename must be a lowercase kebab-case slug');
  }

  const source = await fs.readFile(filePath, 'utf8');
  const { body, frontmatter } = parseFrontmatter(root, filePath, source);
  const markdownTree = markdownProcessor.parse(body);
  const wordCount = toString(markdownTree).trim().split(/\s+/u).filter(Boolean).length;
  const transformedTree = await markdownProcessor.run(markdownTree);
  const html = markdownProcessor.stringify(transformedTree);

  return {
    slug,
    ...frontmatter,
    readingMinutes: Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE)),
    html,
  };
};

const buildWritingManifest = async (
  root: string,
  contentDirectory: string,
): Promise<WritingManifest> => {
  const directoryEntries = await fs.readdir(contentDirectory, { withFileTypes: true });
  const files = directoryEntries
    .filter((entry) => entry.isFile() && path.extname(entry.name) === '.md')
    .map((entry) => path.join(contentDirectory, entry.name))
    .sort();
  const posts = await Promise.all(files.map((filePath) => compilePost(root, filePath)));
  const seenSlugs = new Map<string, string>();

  posts.forEach((post, index) => {
    const normalizedSlug = post.slug.toLocaleLowerCase('en');
    const duplicateFile = seenSlugs.get(normalizedSlug);

    if (duplicateFile) {
      fail(
        root,
        files[index],
        `slug duplicates ${getRelativeFileName(root, duplicateFile)}`,
      );
    }

    seenSlugs.set(normalizedSlug, files[index]);
  });

  posts.sort((left, right) =>
    right.date.localeCompare(left.date) || left.slug.localeCompare(right.slug),
  );

  return { files, posts };
};

const isWritingMarkdownFile = (contentDirectory: string, filePath: string) =>
  path.dirname(filePath) === contentDirectory && path.extname(filePath) === '.md';

const registerContentReload = (
  server: ViteDevServer,
  contentDirectory: string,
) => {
  const reload = (filePath: string) => {
    if (!isWritingMarkdownFile(contentDirectory, filePath)) return;

    const virtualModule = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID);
    if (virtualModule) server.moduleGraph.invalidateModule(virtualModule);

    server.ws.send({ type: 'full-reload', path: '*' });
  };

  server.watcher.add(contentDirectory);
  server.watcher.on('add', reload);
  server.watcher.on('change', reload);
  server.watcher.on('unlink', reload);
};

export const writingManifestPlugin = (): Plugin => {
  let config: ResolvedConfig;
  let contentDirectory: string;

  return {
    name: 'writing-manifest',
    enforce: 'pre',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      contentDirectory = path.resolve(config.root, 'src/content/blog');
    },
    resolveId(id) {
      return id === VIRTUAL_MODULE_ID ? RESOLVED_VIRTUAL_MODULE_ID : undefined;
    },
    async load(id) {
      if (id !== RESOLVED_VIRTUAL_MODULE_ID) return undefined;

      const manifest = await buildWritingManifest(config.root, contentDirectory);
      manifest.files.forEach((filePath) => this.addWatchFile(filePath));

      return `export const posts = ${JSON.stringify(manifest.posts)};`;
    },
    configureServer(server) {
      registerContentReload(server, contentDirectory);
    },
  };
};
