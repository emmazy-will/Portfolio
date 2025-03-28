import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add this if you want to use @/ prefix
      '@': '/src',
      'src': '/src'
    }
  }
});