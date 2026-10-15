import type { Project } from './types';

/**
 * Pairee - File manager TUI dual-panel en Rust (beta pública, GPL-3.0).
 * Publicado también en la Microsoft Store.
 * Tiene su propio sitio en pairee.fitty.ar.
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
    es: 'Rust, Ratatui y Tokio, inspirado en Norton Commander y Far Manager. Operaciones en segundo plano, atajos de Norton/Far, VS Code, Neovim o yazi, plugins en Lua y actualizaciones firmadas. Windows, Linux y macOS.',
    en: 'Rust, Ratatui and Tokio, inspired by Norton Commander and Far Manager. Background file operations, Norton/Far, VS Code, Neovim or yazi keys, Lua plugins and signed updates. Windows, Linux and macOS.',
  },
  tags: [
    { es: 'rust', en: 'rust' },
    { es: 'ratatui', en: 'ratatui' },
    { es: 'tokio', en: 'tokio' },
    { es: 'lua', en: 'lua' },
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
    { es: 'lua · plugins', en: 'lua · plugins' },
    { es: 'dual-panel', en: 'dual-panel' },
  ],
};
