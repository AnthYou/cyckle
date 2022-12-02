import { defineConfig } from 'vitest/config';
import * as path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './app/frontend/tests/setup.ts',
  },
  resolve: {
    alias: [
      {
        find: "@/lib",
        replacement: path.resolve(__dirname, "./app/frontend/components/lib/")
      },
      {
        find: "@/components",
        replacement: path.resolve(__dirname, "./app/frontend/components/")
      },
      {
        find: "@/entrypoints",
        replacement: path.resolve(__dirname, "./app/frontend/entrypoints")
      },
      {
        find: "@/utils",
        replacement: path.resolve(__dirname, "./app/frontend/utils")
      },
      {
        find: "@/store",
        replacement: path.resolve(__dirname, "./app/frontend/store")
      }
    ]
  }
});
