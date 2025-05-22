import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/good-vibrations/', // Use repository name for GitHub Pages without custom domain
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
