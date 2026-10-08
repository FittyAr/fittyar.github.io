import type { Project } from './types';

/**
 * ElectroObra - Gestión operativa para pymes de construcción (legacy).
 * Producto comercial en Avalonia UI / .NET que estuvo en uso con clientes
 * reales. Descatalogado: sus instalaciones se migraron a Certaro.
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
    es: 'Gestión operativa y flujo de caja para pymes de construcción. Estuvo en producción con clientes reales y fue reemplazado por Certaro.',
    en: 'Operations and cash flow management for construction SMEs. It ran in production with real clients and was superseded by Certaro.',
  },
  long: {
    es: 'Avalonia UI + .NET con SQLite. Descatalogado: sus datos y flujos de trabajo se migraron a Certaro, una plataforma ERP y CRM mucho más completa.',
    en: 'Avalonia UI + .NET with SQLite. Discontinued: its data and workflows were migrated to Certaro, a far more complete ERP and CRM platform.',
  },
  tags: [
    { es: 'legacy', en: 'legacy' },
    { es: 'avalonia', en: 'avalonia' },
    { es: '.net', en: '.net' },
    { es: 'sqlite', en: 'sqlite' },
  ],
  href: '/pages/electro-obra.html',
  external: false,
  status: 'legacy',
};
