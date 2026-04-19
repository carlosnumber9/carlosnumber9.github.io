import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: /\.[jt]sx?$/,
      babel: {
        plugins: ['styled-components'],
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
