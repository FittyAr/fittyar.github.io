import type { Project } from './types';

/**
 * Pairee - File manager TUI en Rust.
 * Tuvo su primera release como producto propio y luego se publico
 * en la Microsoft Store.
 */
export const pairee: Project = {
  slug: 'pairee',
  title: { es: 'Pairee', en: 'Pairee' },
  role: {
    es: 'File manager TUI en Rust',
    en: 'TUI file manager in Rust',
  },
  category: 'rust',
  categoryLabel: { es: 'rust', en: 'rust' },
  desc: {
    es: 'Gestor de archivos dual-panel para terminal, rápido y moderno. Diseñado para gente que vive en la consola.',
    en: 'A fast, modern dual-panel file manager for the terminal. Built for people who live in the shell.',
  },
  long: {
    es: 'Construido con Rust, Ratatui y Tokio. Event loop asíncrono, keybindings personalizables y vista previa de archivos. Pensado para rendimiento y portabilidad.',
    en: 'Built with Rust, Ratatui and Tokio. Async event loop, customizable keybindings and file preview. Designed for performance and portability.',
  },
  tags: [
    { es: 'rust', en: 'rust' },
    { es: 'ratatui', en: 'ratatui' },
    { es: 'tokio', en: 'tokio' },
    { es: 'tui', en: 'tui' },
  ],
  href: 'https://pairee.fitty.ar',
  external: true,
  status: 'producto',
  storeUrl: 'https://apps.microsoft.com/detail/9PBSDNBTP2JZ',
  highlight: 'rust',
  stack: [
    { es: 'ratatui · tui', en: 'ratatui · tui' },
    { es: 'tokio · async', en: 'tokio · async' },
    { es: 'rust 1.75+', en: 'rust 1.75+' },
    { es: 'dual-panel', en: 'dual-panel' },
  ],
};
