import type { Project } from './types';

/**
 * ElectroObra - Gestión operativa para pymes de construcción (legacy).
 * Producto comercial en Avalonia UI / .NET que estuvo en uso con clientes
 * reales, bajo Business Source License 1.1. Descatalogado; Certaro es otro
 * producto, escrito desde cero.
 */
export const electroObra: Project = {
  slug: 'electro-obra',
  title: { es: 'ElectroObra', en: 'ElectroObra' },
  role: {
    es: 'Gestión para construcción (descatalogado)',
    en: 'Construction management (discontinued)',
  },
  category: 'legacy',
  categoryLabel: { es: 'comercial', en: 'commercial' },
  desc: {
    es: 'Gestión operativa y flujo de caja para pymes de construcción. Estuvo en producción con clientes reales hasta que se descatalogó.',
    en: 'Operations and cash flow management for construction SMEs. It ran in production with real clients until it was discontinued.',
  },
  long: {
    es: 'Avalonia UI + .NET con SQLite, bajo Business Source License 1.1. Descatalogado; el desarrollo continúa en Certaro, un producto distinto escrito desde cero.',
    en: 'Avalonia UI + .NET with SQLite, under the Business Source License 1.1. Discontinued; development continues in Certaro, a different product written from scratch.',
  },
  tags: [
    { es: 'legacy', en: 'legacy' },
    { es: 'avalonia', en: 'avalonia' },
    { es: '.net', en: '.net' },
    { es: 'sqlite', en: 'sqlite' },
    { es: 'bsl 1.1', en: 'bsl 1.1' },
  ],
  href: '/pages/electro-obra.html',
  external: false,
  status: 'legacy',
};
