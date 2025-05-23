import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // Using custom domain goodvibrationsspeech.net
  build: {
    outDir: 'docs', // Output to docs directory for GitHub Pages
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
