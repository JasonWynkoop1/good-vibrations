import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Using root path for custom domain goodvibrationsspeech.net
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
