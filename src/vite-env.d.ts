/// <reference types="vite/client" />

declare module 'virtual:writing-posts' {
  import type { WritingPost } from './declarations';

  export const posts: readonly WritingPost[];
}
