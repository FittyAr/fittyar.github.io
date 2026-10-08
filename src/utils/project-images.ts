// Resolución de capturas de proyectos para astro:assets.
// Las imágenes viven en src/assets/projects/<slug>/ y las páginas las
// referencian con la ruta relativa a esa carpeta ('umbral/01.png').
// Astro las procesa en el build (AVIF/WebP, srcset, dimensiones).

import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/**/*.{png,jpg,jpeg,webp}',
  { eager: true },
);

const PREFIX = '/src/assets/projects/';

/** Devuelve la imagen para 'slug/archivo.ext'. Falla el build si no existe. */
export function projectImage(path: string): ImageMetadata {
  const mod = modules[PREFIX + path];
  if (!mod) {
    throw new Error(`Imagen de proyecto inexistente: src/assets/projects/${path}`);
  }
  return mod.default;
}
