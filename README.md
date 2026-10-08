# fitty.ar

Portfolio personal de [fitty.ar](https://fitty.ar): software a medida en .NET, tooling en Rust y productos web self-hosted. Construido y desplegado desde Buenos Aires, con infraestructura propia.

> Sitio 100% estático, sin backend, sin tracking y sin cookies. El único JS de third-party se carga en la página de contacto.

## Stack

| Capa | Tech |
|---|---|
| Sitio | [Astro 7](https://astro.build/) — SSG, View Transitions, code-splitting por página |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com/) — design system en `@theme`, sin `tailwind.config.js` |
| Animaciones | CSS + un `IntersectionObserver` inline — sin dependencias, el contenido no espera al bundle |
| Imágenes | `astro:assets` — AVIF/WebP con `srcset`, recorte automático para Open Graph |
| SEO | `@astrojs/sitemap` (con alternates es/en), `robots.txt`, 404 propia |
| Lenguaje | [TypeScript](https://www.typescriptlang.org/) en modo `strict` |
| Fuentes | JetBrains Mono self-hosted (`/public/fonts/`) |
| Deploy | [GitHub Pages](https://pages.github.com/) + dominio custom (`fitty.ar`) vía GitHub Actions |

## Desarrollo local

Requisitos: **Node 22 LTS** y **pnpm 11**.

```bash
pnpm install --frozen-lockfile
pnpm dev          # http://localhost:4321
pnpm check        # astro check (tipos)
pnpm build        # genera dist/
pnpm check:links  # verifica links internos en dist/
pnpm preview      # sirve dist/ localmente
```

El sitio se regenera en cada cambio. El build final es estático y se puede servir desde cualquier CDN o hosting de archivos.

## Estructura

```
src/
├── assets/projects/   # Capturas de cada proyecto (procesadas por astro:assets)
├── components/        # Astro components (Header, Footer, Carousel, ...)
├── data/projects/     # Data de cada proyecto (un .ts por proyecto)
├── i18n/
│   ├── ui/            # Diccionarios es/en del sitio (nav, home, about, ...)
│   └── projects/      # Textos es/en de cada página de proyecto
├── layouts/           # Layout.astro (head, meta, OG, reveals, ClientRouter)
├── pages/
│   ├── index.astro    # Redirige a /es.html o /en.html según el idioma
│   ├── 404.astro
│   └── [lang]/        # Home y subpáginas, generadas para cada idioma
├── scripts/site.ts    # JS de cliente (topbar, nav mobile, link activo)
├── utils/             # Helpers (resolución de imágenes de proyectos)
└── styles/global.css  # Design system: tokens, base, componentes
scripts/check-links.mjs  # Chequeo de links internos sobre dist/
```

Los assets estáticos (fuentes, favicon, imagen OG genérica, `robots.txt`, `CNAME`) viven en `public/`.

## Agregar un proyecto

1. Crear `src/data/projects/<slug>.ts` exportando un `Project` (ver `types.ts`).
2. Sumarlo al array `projects` en `src/data/projects/index.ts`.
3. Crear `src/i18n/projects/<slug>.ts` con los textos (`es`, y `en` tipado como `typeof es`).
4. Crear `src/pages/[lang]/pages/<slug>.astro` (tomar `umbral.astro` como plantilla).
5. Si tiene capturas, agregarlas en `src/assets/projects/<slug>/` y referenciarlas como `'<slug>/01.png'` (Carousel y `ogImage` del Layout).
6. Si va al home destacado, setear `highlight` en su data.

## Deploy

Push a `main` triggea `.github/workflows/deploy.yml`:

1. Checkout
2. Setup Node 22 + pnpm 11
3. `pnpm install --frozen-lockfile`
4. `pnpm run check` (astro check)
5. `pnpm run build`
6. `pnpm run check:links` (links internos)
7. `actions/upload-pages-artifact` (v3.0.1)
8. `actions/deploy-pages` (v4.0.5)

Las acciones de GitHub están pineadas a SHA con la versión como comentario (`@<sha> # v4.2.2`) para que un tag reasignado no rompa el deploy.

## Convenciones

- Texto en español (es-AR).
- `target="_blank"` siempre con `rel="noopener noreferrer"`.
- Sin TypeScript laxo, sin `console.log`, sin `any` salvo en fronteras de API externas.
- Sin frameworks de UI: HTML + CSS + un poco de JS cuando hace falta.
- Sin tracking, sin analytics, sin cookies.

## Sobre el sitio

Es el código abierto de mi portfolio comercial. La idea: que el repo se vea igual de cuidado que el sitio. Si te sirve de inspiración para armar el tuyo, tomá lo que quieras. Si te copa el estilo, mejor.
