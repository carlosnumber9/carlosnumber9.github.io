# Publishing to Writing

Writing is generated from Markdown files during development and production builds. There is no CMS, draft state, or scheduled publication: every valid `.md` file in `src/content/blog` is published by the next deployment.

## Create a post

1. Copy `docs/writing-post.md.example` to `src/content/blog/<slug>.md`.
2. Use a lowercase kebab-case filename, such as `learning-in-public.md`.
3. Fill every frontmatter field:
   - `title`: article title.
   - `summary`: short description shown in the Writing list.
   - `date`: publication metadata in `YYYY-MM-DD` format. It does not delay publication.
   - `language`: `en` or `es`.
4. Write the body with GitHub Flavored Markdown.
5. Run `npm run build` before pushing.

The build rejects missing or unknown frontmatter fields, invalid dates, invalid slugs, duplicate slugs, and empty bodies. Raw HTML and images are not supported in v1. External links open in a new tab. Fenced code blocks are highlighted when they declare a supported language.

When no publishable Markdown files exist, the Writing navbar entry stays hidden.
