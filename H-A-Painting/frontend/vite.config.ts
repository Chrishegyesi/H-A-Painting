import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: { 
    port: 5173,
    allowedHosts: [
      'penny-strengthening-sugar-asia.trycloudflare.com',
      '.trycloudflare.com',
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});