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
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  devToolbar: {
    enabled: false,
  },
});
