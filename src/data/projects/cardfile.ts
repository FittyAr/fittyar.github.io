import type { Project } from './types';

/**
 * Cardfile - Gestor de tarjetas multiplataforma.
 * Estetica retro Windows 3.1, escrito en Python con Flet.
 */
export const cardfile: Project = {
  slug: 'cardfile',
  title: { es: 'Cardfile', en: 'Cardfile' },
  role: {
    es: 'Gestor de tarjetas multiplataforma',
    en: 'Cross-platform card manager',
  },
  category: 'python',
  categoryLabel: { es: 'python', en: 'python' },
  desc: {
    es: 'Organizador de tarjetas y notas con estética retro Windows 3.1.',
    en: 'Card and note organizer with retro Windows 3.1 aesthetic.',
  },
  long: {
    es: 'Python + Flet. Multiidioma, base relacional, look CRT.',
    en: 'Python + Flet. Multilanguage, relational DB, CRT look.',
  },
  tags: [
    { es: 'python', en: 'python' },
    { es: 'flet', en: 'flet' },
    { es: 'markdown', en: 'markdown' },
  ],
  href: '/pages/cardfile.html',
  external: false,
  status: 'producto',
};
