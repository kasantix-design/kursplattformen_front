// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true  // Sikrer at Vite feiler hvis port 3000 er opptatt
  },
  build: {
    outDir: 'dist',
    sourcemap: true   // Nyttig for debugging i prod
  }
})
