import type { Project } from './types';

/**
 * Catalogo Techparts - Catalogo digital de autopartes (legacy).
 * Mi primer proyecto comercial. Estuvo en produccion 2016-2024.
 * Hoy deprecado: el cliente migro a un sistema mas grande.
 */
export const catalogoTechparts: Project = {
  slug: 'catalogo-techparts',
  title: { es: 'Catálogo Techparts', en: 'Techparts Catalog' },
  role: {
    es: 'Catálogo comercial (legacy)',
    en: 'Commercial catalog (legacy)',
  },
  category: 'legacy',
  categoryLabel: { es: 'comercial', en: 'commercial' },
  desc: {
    es: 'Catálogo digital de autopartes con pedido por email y sincronización offline. Mi primer proyecto comercial.',
    en: 'Digital auto parts catalog with email ordering and offline sync. My first commercial project.',
  },
  long: {
    es: "Desarrollado para Tech Part's, distribuidora mayorista. Incluía una tool a medida para importar su Excel a SQLite. Estuvo en producción desde 2016 hasta 2024; hoy deprecado.",
    en: "Built for Tech Part's, a wholesale distributor. Included a custom tool to import their Excel into SQLite. Was in production from 2016 to 2024; now deprecated.",
  },
  tags: [
    { es: 'legacy', en: 'legacy' },
    { es: 'comercial', en: 'commercial' },
    { es: 'offline-first', en: 'offline-first' },
    { es: 'sqlite', en: 'sqlite' },
  ],
  href: '/pages/catalogo-techparts.html',
  external: false,
  status: 'legacy',
};
