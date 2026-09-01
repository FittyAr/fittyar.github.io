import type { Project } from './types';

/**
 * Certaro - Gestion operativa para pymes de construccion.
 * Evolucion de ElectroObra. Reescrito en Rust + Tauri desde Avalonia UI / .NET.
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
    es: 'Sistema de gestión y flujo de caja para pymes de construcción y mantenimiento. Evolución de ElectroObra, reescrito en Rust + Tauri.',
    en: 'Management and cash flow system for small construction and maintenance businesses. Evolution of ElectroObra, rewritten in Rust + Tauri.',
  },
  long: {
    es: 'Multiplataforma con Rust, Tauri y SQLite, Clean Architecture. Evolución de ElectroObra (Avalonia UI / .NET). ElectroObra continúa como fork comercial en mantenimiento.',
    en: 'Cross-platform with Rust, Tauri and SQLite, Clean Architecture. Evolution of ElectroObra (Avalonia UI / .NET). ElectroObra continues as a maintained commercial fork.',
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
