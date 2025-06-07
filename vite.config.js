import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: `/pablocatret`,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
