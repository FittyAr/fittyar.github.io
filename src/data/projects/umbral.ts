import type { Project } from './types';

/**
 * Umbral - Portal interno self-hosted para centralizar accesos a
 * herramientas detrás de la VPN. Astro SSR + Alpine.js, sin base de
 * datos, configurable desde un panel admin protegido.
 */
export const umbral: Project = {
  slug: 'umbral',
  title: { es: 'Umbral', en: 'Umbral' },
  role: {
    es: 'Portal interno self-hosted',
    en: 'Self-hosted internal portal',
  },
  category: 'web',
  categoryLabel: { es: 'astro', en: 'astro' },
  desc: {
    es: 'Portal interno que centraliza accesos a herramientas detrás de la VPN. Astro SSR + Alpine.js, sin base de datos, editable desde un panel admin.',
    en: 'Internal portal that centralizes access to tools behind the VPN. Astro SSR + Alpine.js, no database, editable from an admin panel.',
  },
  long: {
    es: 'Single container de ~80 MB. Configuración en data/config.json, assets en disco. Pensado para intranets chicas que quieren poseer su infra.',
    en: 'Single container ~80 MB. Configuration in data/config.json, assets on disk. Built for small intranets that want to own their infra.',
  },
  tags: [
    { es: 'astro', en: 'astro' },
    { es: 'alpine.js', en: 'alpine.js' },
    { es: 'tailwind', en: 'tailwind' },
    { es: 'docker', en: 'docker' },
    { es: 'self-hosted', en: 'self-hosted' },
  ],
  href: '/pages/umbral.html',
  external: false,
  status: 'producto',
  highlight: 'web',
  stack: [
    { es: 'astro 7 · ssr', en: 'astro 7 · ssr' },
    { es: 'alpine.js · tailwind', en: 'alpine.js · tailwind' },
    { es: 'node 24 · standalone', en: 'node 24 · standalone' },
    { es: '~80 mb · single container', en: '~80 mb · single container' },
  ],
};
