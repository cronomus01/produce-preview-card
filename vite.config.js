import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    cors: {
        origin: false
    }
  },
  preview: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    cors: {
       origin: ['localhost:3000']
    }
  },
})