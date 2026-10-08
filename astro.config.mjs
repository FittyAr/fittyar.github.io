import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** 'https://fitty.ar/es/pages/about' -> '.../about.html' */
const withHtml = (url) => (url.endsWith('.html') || url.endsWith('/') ? url : `${url}.html`);

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
  integrations: [
    sitemap({
      // `/` solo redirige y la 404 no se indexa.
      filter: (page) => page !== 'https://fitty.ar/' && !page.includes('/404'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-AR', en: 'en-US' },
      },
      // build.format 'file' genera .html: las URLs del sitemap tienen que
      // coincidir con los canonical del Layout.
      serialize: (item) => ({
        ...item,
        url: withHtml(item.url),
        links: item.links?.map((l) => ({ ...l, url: withHtml(l.url) })),
      }),
    }),
  ],
  prefetch: {
    // Prefetch on hover/tap only. prefetchAll lanzaba requests a URLs que
    // se estaban armando mal durante la navegación con View Transitions.
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
