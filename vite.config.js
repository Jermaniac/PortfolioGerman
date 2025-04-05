import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
    plugins: [react(), eslintPlugin()],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    server: {
        open: true
    }
})