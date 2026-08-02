import type { Project } from './types';

/**
 * Catalogo Techparts - Catalogo digital de autopartes (legacy).
 * Mi primer proyecto comercial. Estuvo en produccion 2016-2024.
 * Hoy deprecado: el cliente migro a un sistema mas grande.
 */
export const catalogoTechparts: Project = {
  slug: 'catalogo-techparts',
  title: 'Catálogo Techparts',
  role: 'Catálogo comercial (legacy)',
  category: 'legacy',
  categoryLabel: 'comercial',
  desc: 'Catálogo digital de autopartes con pedido por email y sincronización offline. Mi primer proyecto comercial.',
  long: "Desarrollado para Tech Part's, distribuidora mayorista. Incluía una tool a medida para importar su Excel a SQLite. Estuvo en producción desde 2016 hasta 2024; hoy deprecado.",
  tags: ['legacy', 'comercial', 'offline-first', 'sqlite'],
  href: '/pages/catalogo-techparts.html',
  external: false,
  status: 'legacy',
};
