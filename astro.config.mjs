import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

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
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // Ambas locales con prefijo. /es/ y /en/ son URLs explícitas.
      prefixDefaultLocale: true,
      // Visitar / redirige a /es/.
      redirectToDefaultLocale: true,
    },
    // En → es como fallback de páginas aún no traducidas (defensa inicial).
    fallback: { en: 'es' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
