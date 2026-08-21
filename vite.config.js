import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/comrade_website/',
  plugins: [react()],
  server: {
    port: 5173,
  },
});
