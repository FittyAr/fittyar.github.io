import type { Project } from './types';

/**
 * ElectroObra - Gestion operativa para pymes de construccion.
 * Producto comercial en uso, desarrollado con Avalonia UI y .NET 10.
 */
export const electroObra: Project = {
  slug: 'electro-obra',
  title: { es: 'ElectroObra', en: 'ElectroObra' },
  role: {
    es: 'Gestión operativa para construcción',
    en: 'Operations management for construction',
  },
  category: 'dotnet',
  categoryLabel: { es: 'comercial', en: 'commercial' },
  desc: {
    es: 'Sistema de gestión y flujo de caja para pymes de construcción y mantenimiento.',
    en: 'Management and cash flow system for small construction and maintenance businesses.',
  },
  long: {
    es: 'Multiplataforma con Avalonia UI y SQLite, Clean Architecture. Producto comercial en uso.',
    en: 'Cross-platform with Avalonia UI and SQLite, Clean Architecture. Commercial product in use.',
  },
  tags: [
    { es: '.net 10', en: '.net 10' },
    { es: 'avalonia', en: 'avalonia' },
    { es: 'sqlite', en: 'sqlite' },
    { es: 'clean arch', en: 'clean arch' },
  ],
  href: '/pages/electro-obra.html',
  external: false,
  status: 'comercial',
};
