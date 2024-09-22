import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Exemplo: '@' aponta para a pasta 'src'
      // Adicione outros aliases conforme necessário
    },
  },
  plugins: [react()],
});
