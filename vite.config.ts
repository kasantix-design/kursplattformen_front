// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 🔥 viktig for Netlify slik at paths til /assets fungerer
  server: {
    port: 3000,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
