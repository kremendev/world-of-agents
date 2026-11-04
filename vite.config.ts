/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Only this machine can open the dev server. Don't pass --host unless you mean to share it on your network.
    host: 'localhost',
    port: 5173,
    // Vite's default lets any localhost origin read responses, and through the proxy that includes the hall's feed.
    cors: false,
    proxy: {
      '/api': {
        // The hall server. changeOrigin rewrites Host, so the hall's Host check passes.
        target: 'http://127.0.0.1:4319',
        changeOrigin: true,
        // If the hall dies mid-stream the proxy leaves the browser's side open, and the page never finds out.
        configure: (proxy) =>
          proxy.on('proxyRes', (proxyRes, _req, res) =>
            proxyRes.on('close', () => {
              if (!res.writableEnded) res.destroy();
            }),
          ),
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
});
