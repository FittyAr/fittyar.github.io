// Tipos compartidos por todos los proyectos del portfolio.
// Cada proyecto tiene su propio archivo .ts con su data; este módulo
// solo define la forma del contrato.

export type ProjectCategory = 'rust' | 'dotnet' | 'python' | 'godot' | 'legacy';

export type ProjectStatus = 'comercial' | 'producto' | 'diseño' | 'legacy' | 'próximamente';

export type ProjectHighlight = 'rust' | 'dotnet' | 'python' | 'godot' | 'legacy';

export interface Project {
  /** Slug estable, usado en rutas y para identificar el archivo .ts. */
  slug: string;

  title: string;
  role: string;

  category: ProjectCategory;
  categoryLabel: string;

  /** Descripcion corta (visible en cards y meta del hero). */
  desc: string;
  /** Descripcion larga (debajo de la corta en cards y meta del proyecto). */
  long: string;

  tags: string[];

  /** Link principal. Apunta a la pagina del proyecto o a un sitio externo. */
  href: string;
  /** True si el link es externo (abre en nueva pestana). */
  external: boolean;

  status: ProjectStatus;

  /** Si el proyecto esta publicado en Microsoft Store, URL del listing. */
  storeUrl?: string;

  /** Si el proyecto aparece como 'destacado' en el home, color del tag. */
  highlight?: ProjectHighlight;
  /** Items del stack que se muestran en la card destacada del home. */
  stack?: string[];
}
