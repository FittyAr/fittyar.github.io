import type { Project } from './types';

/**
 * Flota-HAS - Gestion de flotas de ride-hailing.
 * Producto comercial local-first, .NET MAUI + EF Core + SQLite.
 */
export const flotaHas: Project = {
  slug: 'flota-has',
  title: { es: 'Flota-HAS', en: 'Flota-HAS' },
  role: {
    es: 'Gestión de flotas ride-hailing',
    en: 'Ride-hailing fleet management',
  },
  category: 'dotnet',
  categoryLabel: { es: 'comercial', en: 'commercial' },
  desc: {
    es: 'Aplicación multiplataforma para control de flotas, choferes y recaudación.',
    en: 'Cross-platform application for fleet, driver and revenue control.',
  },
  long: {
    es: 'Local-first con .NET MAUI, EF Core y SQLite. Funciona sin servidor. Producto comercial en uso.',
    en: 'Local-first with .NET MAUI, EF Core and SQLite. Runs without a server. Commercial product in use.',
  },
  tags: [
    { es: '.net maui', en: '.net maui' },
    { es: 'ef core', en: 'ef core' },
    { es: 'sqlite', en: 'sqlite' },
    { es: 'local-first', en: 'local-first' },
  ],
  href: '/pages/flota-has.html',
  external: false,
  status: 'comercial',
};
