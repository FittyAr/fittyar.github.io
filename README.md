# fitty.ar

Portfolio personal de [fitty.ar](https://fitty.ar): software a medida en .NET, tooling en Rust y juegos en Godot. Construido y desplegado desde Buenos Aires, con infraestructura propia.

> Sitio 100% estático, sin backend, sin tracking y sin cookies. El único JS de third-party se carga en la página de contacto.

## Stack

| Capa | Tech |
|---|---|
| Sitio | [Astro 7](https://astro.build/) — SSG, View Transitions, code-splitting por página |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com/) — design system en `@theme`, sin `tailwind.config.js` |
| Animaciones | [GSAP](https://gsap.com/) + ScrollTrigger — reveals, hero entrance, stagger |
| Lenguaje | [TypeScript](https://www.typescriptlang.org/) en modo `strict` |
| Fuentes | JetBrains Mono self-hosted (`/public/fonts/`) |
| Deploy | [GitHub Pages](https://pages.github.com/) + dominio custom (`fitty.ar`) vía GitHub Actions |

## Desarrollo local

Requisitos: **Node 22 LTS** y **pnpm 11**.

```bash
pnpm install --frozen-lockfile
pnpm dev          # http://localhost:4321
pnpm build        # genera dist/
pnpm preview      # sirve dist/ localmente
```

El sitio se regenera en cada cambio. El build final es estático y se puede servir desde cualquier CDN o hosting de archivos.

## Estructura

```
src/
├── components/        # Astro components (Header, Footer, Carousel, ...)
├── data/projects/     # Data de cada proyecto (un .ts por proyecto)
├── layouts/           # Layout.astro (head, meta, JSON-LD, ClientRouter)
├── pages/             # Rutas
│   ├── index.astro
│   └── pages/         # Subpáginas (about, projects, stack, contact, ...)
├── scripts/           # TS de cliente (animations.ts, etc.)
└── styles/global.css  # Design system: tokens, base, componentes
```

Los assets estáticos (imágenes de proyectos, fuentes, favicon, `CNAME`) viven en `public/`.

## Agregar un proyecto

1. Crear `src/data/projects/<slug>.ts` exportando un `Project` (ver `types.ts`).
2. Sumarlo al array `projects` en `src/data/projects/index.ts`.
3. Crear `src/pages/pages/<slug>.astro` con la plantilla del proyecto.
4. Si va al home destacado, setear `highlight` en su data.
5. Si tiene capturas, agregarlas en `public/assets/images/projects/<slug>/`.

## Deploy

Push a `main` triggea `.github/workflows/deploy.yml`:

1. Checkout
2. Setup Node 22 + pnpm 11
3. `pnpm install --frozen-lockfile`
4. `pnpm run build`
5. `actions/upload-pages-artifact` (v3.0.1)
6. `actions/deploy-pages` (v4.0.5)

Las acciones de GitHub están pineadas a SHA con la versión como comentario (`@<sha> # v4.2.2`) para que un tag reasignado no rompa el deploy.

## Convenciones

- Texto en español (es-AR).
- `target="_blank"` siempre con `rel="noopener noreferrer"`.
- Sin TypeScript laxo, sin `console.log`, sin `any` salvo en fronteras de API externas.
- Sin frameworks de UI: HTML + CSS + un poco de JS cuando hace falta.
- Sin tracking, sin analytics, sin cookies.

## Sobre el sitio

Es el código abierto de mi portfolio comercial. La idea: que el repo se vea igual de cuidado que el sitio. Si te sirve de inspiración para armar el tuyo, tomá lo que quieras. Si te copa el estilo, mejor.
