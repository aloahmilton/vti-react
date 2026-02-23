import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libs into separate chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'monaco': ['@monaco-editor/react'],
          'i18n': ['i18next', 'react-i18next'],
          'icons': ['lucide-react'],
        }
      }
    }
  }
})
