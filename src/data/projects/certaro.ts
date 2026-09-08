import type { Project } from './types';

/**
 * Certaro - Gestion operativa para pymes de construccion.
 * Producto comercial de codigo cerrado ampliable a ERP (en proceso).
 * Reescrito en Rust + Tauri desde Avalonia UI / .NET.
 * ElectroObra queda como fork comercial en mantenimiento y recibe las mejoras de Certaro.
 */
export const certaro: Project = {
  slug: 'certaro',
  title: { es: 'Certaro', en: 'Certaro' },
  role: {
    es: 'Gestión operativa para construcción',
    en: 'Operations management for construction',
  },
  category: 'rust',
  categoryLabel: { es: 'comercial', en: 'commercial' },
  desc: {
    es: 'Producto comercial y cerrado de gestión operativa para pymes de construcción, ampliable a ERP (en proceso). Reescrito en Rust + Tauri.',
    en: 'Closed-source commercial operations management for construction SMEs, expandable into an ERP (in progress). Rewritten in Rust + Tauri.',
  },
  long: {
    es: 'Producto comercial de código cerrado con Rust, Tauri y SQLite, Clean Architecture. Diseñado para evolucionar a ERP. ElectroObra continúa como fork comercial en mantenimiento.',
    en: 'Closed-source commercial product with Rust, Tauri and SQLite, Clean Architecture. Designed to evolve into an ERP. ElectroObra continues as a maintained commercial fork.',
  },
  tags: [
    { es: 'rust', en: 'rust' },
    { es: 'tauri', en: 'tauri' },
    { es: 'sqlite', en: 'sqlite' },
    { es: 'clean arch', en: 'clean arch' },
  ],
  href: '/pages/certaro.html',
  external: false,
  status: 'comercial',
};
