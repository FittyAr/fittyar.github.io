import type { Project } from './types';

/**
 * Cardfile - Fichero de notas en tarjetas, nativo y privado.
 * Inspirado en el Cardfile de Windows 3.1, reescrito en Rust con GPUI.
 * Tiene su propio sitio en cardfile.fitty.ar.
 */
export const cardfile: Project = {
  slug: 'cardfile',
  title: { es: 'Cardfile', en: 'Cardfile' },
  role: {
    es: 'Notas en tarjetas, nativo y privado',
    en: 'Card-based notes, native and private',
  },
  category: 'rust',
  categoryLabel: { es: 'rust', en: 'rust' },
  desc: {
    es: 'Fichero digital moderno para tus notas, inspirado en el Cardfile de Windows 3.1.',
    en: 'A modern digital card file for your notes, inspired by the Windows 3.1 Cardfile.',
  },
  long: {
    es: 'Rust + GPUI (el motor de interfaz de Zed). Editor tipo Word, búsqueda full-text, tarjetas cifradas, IA opcional y servidor MCP integrado. Windows y Linux.',
    en: 'Rust + GPUI (the UI engine behind Zed). Word-like editor, full-text search, encrypted cards, optional AI and a built-in MCP server. Windows and Linux.',
  },
  tags: [
    { es: 'rust', en: 'rust' },
    { es: 'gpui', en: 'gpui' },
    { es: 'sqlite', en: 'sqlite' },
    { es: 'mcp', en: 'mcp' },
  ],
  href: 'https://cardfile.fitty.ar',
  external: true,
  status: 'producto',
};
