import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset paths so the built game works from any URL path.
  base: './',
  // Phaser alone is ~1.3 MB minified; don't warn about it.
  build: { chunkSizeWarningLimit: 1500 },
});
