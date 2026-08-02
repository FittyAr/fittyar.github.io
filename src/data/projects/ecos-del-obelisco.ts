import type { Project } from './types';

/**
 * Ecos del Obelisco - Videojuego en Godot.
 * Narrativas y mecanicas inmersivas, actualmente en fase de diseno.
 */
export const ecosDelObelisco: Project = {
  slug: 'ecos-del-obelisco',
  title: { es: 'Ecos del Obelisco', en: 'Ecos del Obelisco' },
  role: {
    es: 'Videojuego en Godot',
    en: 'Video game in Godot',
  },
  category: 'godot',
  categoryLabel: { es: 'game dev', en: 'game dev' },
  desc: {
    es: 'Narrativas inmersivas y mecánicas diseñadas desde cero.',
    en: 'Immersive narratives and mechanics designed from scratch.',
  },
  long: {
    es: 'Godot 4 + GDScript. Iteración constante, actualmente en fase de diseño.',
    en: 'Godot 4 + GDScript. Constant iteration, currently in design phase.',
  },
  tags: [
    { es: 'godot 4', en: 'godot 4' },
    { es: 'gdscript', en: 'gdscript' },
    { es: 'narrativa', en: 'narrative' },
  ],
  href: '/pages/ecos-del-obelisco.html',
  external: false,
  status: 'diseño',
};
