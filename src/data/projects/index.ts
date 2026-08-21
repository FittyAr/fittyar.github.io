// Re-exports centralizados de la data de proyectos.
// Las paginas (projects.astro, index.astro) importan desde aca
// en vez de tener arrays inline.

import { pairee } from './pairee';
import { polyglotCli } from './polyglot-cli';
import { electroObra } from './electro-obra';
import { flotaHas } from './flota-has';
import { cardfile } from './cardfile';
import { ecosDelObelisco } from './ecos-del-obelisco';
import { catalogoTechparts } from './catalogo-techparts';
import { umbral } from './umbral';

import type { Project } from './types';

export type { Project } from './types';
export type { ProjectCategory, ProjectStatus, ProjectHighlight } from './types';

/** Array completo de proyectos, en el orden en que aparecen en la lista. */
export const projects: readonly Project[] = [
  pairee,
  polyglotCli,
  umbral,
  electroObra,
  flotaHas,
  cardfile,
  ecosDelObelisco,
  catalogoTechparts,
] as const;

/** Proyectos destacados para el home. Solo los que tienen highlight definido. */
export const featured: readonly Project[] = projects.filter(
  (p): p is Project => Boolean(p.highlight),
);

/** Re-exports individuales por si alguna pagina necesita uno puntual. */
export {
  pairee,
  polyglotCli,
  umbral,
  electroObra,
  flotaHas,
  cardfile,
  ecosDelObelisco,
  catalogoTechparts,
};
