import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fitty.ar',
  base: '/',
  trailingSlash: 'never',
  build: {
    format: 'file',
    assets: 'assets',
  },
  compressHTML: true,
  prefetch: {
    // Prefetch on hover/tap only. prefetchAll lanzaba requests a URLs que
    // se estaban armando mal durante la navegación con View Transitions.
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
});
