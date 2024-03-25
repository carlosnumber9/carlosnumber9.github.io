import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: /.(ts|tsx)$/,
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
  server: {
    port: 3001,
    open: '/public/index.html',
  },
  base: '/carlosnumber9.github.io/',
});
