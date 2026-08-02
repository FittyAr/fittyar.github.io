import type { Project } from './types';

/**
 * Pairee - File manager TUI en Rust.
 * Tuvo su primera release como producto propio y luego se publico
 * en la Microsoft Store.
 */
export const pairee: Project = {
  slug: 'pairee',
  title: 'Pairee',
  role: 'File manager TUI en Rust',
  category: 'rust',
  categoryLabel: 'rust',
  desc: 'Gestor de archivos dual-panel para terminal, rápido y moderno. Diseñado para gente que vive en la consola.',
  long: 'Construido con Rust, Ratatui y Tokio. Event loop asíncrono, keybindings personalizables y vista previa de archivos. Pensado para rendimiento y portabilidad.',
  tags: ['rust', 'ratatui', 'tokio', 'tui'],
  href: 'https://pairee.fitty.ar',
  external: true,
  status: 'producto',
  storeUrl: 'https://apps.microsoft.com/detail/9PBSDNBTP2JZ',
  highlight: 'rust',
  stack: ['ratatui · tui', 'tokio · async', 'rust 1.75+', 'dual-panel'],
};
