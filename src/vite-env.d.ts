/// <reference types="vite/client" />

declare module 'virtual:writing-posts' {
  import type { WritingPost } from './declarations';

  export const posts: readonly WritingPost[];
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
