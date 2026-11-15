import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writingManifestPlugin } from './build/writingManifestPlugin';

export default defineConfig({
  plugins: [
    writingManifestPlugin(),
    react({
      include: /\.[jt]sx?$/,
      babel: {
        babelrc: false,
        configFile: false,
      },
    }),
  ],
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
});
