// Textos de la página de Umbral.
// `en` se tipa contra `es`: si falta una clave en un idioma, no compila.
// Los strings con HTML (<code>, <strong>) se renderizan con set:html.

const es = {
  meta: {
    description: 'Umbral: portal self-hosted que centraliza accesos a herramientas internas detrás de la VPN. Astro SSR + Alpine.js, sin base de datos, con panel admin.',
  },
  hero: {
    subtitle: 'Portal self-hosted que centraliza accesos a herramientas internas detrás de la VPN. Astro SSR + Alpine.js, sin base de datos, editable desde un panel admin simple.',
  },
  screenshots: {
    title: 'Cómo se ve Umbral.',
    subtitle: 'Portada pública y panel admin: tabs Tarjetas, Categorías y Avanzado (features opt-in).',
  },
  features: {
    title: 'Características principales.',
    subtitle: 'Diseñado para intranets self-hosted: simple, auditable y en manos del equipo que lo opera.',
    items: [
      {
        title: 'Sin base de datos',
        body: 'Toda la configuración vive en data/config.json y los archivos en data/uploads/. Trivial de inspeccionar, backupear y versionar. Un solo volumen Docker, sin migrations, sin servicios extra que mantener.',
      },
      {
        title: 'Panel admin',
        body: 'Editar branding, tema, layout, categorías, tarjetas y assets desde el navegador. Drag-and-drop, vista previa en vivo, audit log. Guardar recarga la portada pública en el próximo request — sin reiniciar.',
      },
      {
        title: 'Endurecido por defecto',
        body: 'bcrypt cost 12, invalidación por epoch de sesión, tokens CSRF, rate limit en login, whitelist MIME con magic-numbers, DOMPurify para SVG, CSP y headers de seguridad configurables desde el admin.',
      },
      {
        title: 'Edición en caliente',
        body: 'Guardar recarga la portada sin reiniciar el server. El flujo de edición usa un único PUT a /api/config que re-valida con Zod y escribe atómicamente (.tmp + rename).',
      },
      {
        title: 'Subida de assets',
        body: 'Drag-and-drop para logos, favicons, íconos y fondos. Valida con file-type sobre magic-numbers reales, redimensiona con sharp, sanitiza SVG con DOMPurify y lista los assets existentes para reutilizar.',
      },
      {
        title: 'Tema e iconos',
        body: 'Fondo custom (imagen/gradiente/color), blur, overlay, color de acento, tipografía (whitelist de Google Fonts), modo claro/oscuro/auto. Set de íconos Lucide incluidos + posibilidad de subir SVGs propios.',
      },
    ],
  },
  architecture: {
    title: 'Arquitectura del sistema.',
    subtitle: 'Un solo proceso Astro SSR que lee y escribe sobre un volumen Docker. Sin otras piezas en movimiento.',
    diagram: `┌──────────────────────────────────────────────┐
│           Browser del usuario                │
│   · Lee portada pública (sin auth)           │
│   · Lee /admin (con cookie de sesión)        │
└────────────────┬─────────────────────────────┘
                 │ HTTP
                 ▼
┌──────────────────────────────────────────────┐
│         Astro SSR (Node standalone)          │
│  ┌────────────┐  ┌────────────────────────┐  │
│  │  Páginas   │  │  API Routes            │  │
│  │  /         │  │  login / logout        │  │
│  │  /admin    │  │  config (GET/PUT)      │  │
│  │            │  │  upload / assets/[n]   │  │
│  └────────────┘  └────────────────────────┘  │
│       Middleware: auth + CSRF + body caps    │
└────────────────┬─────────────────────────────┘
                 │ fs (read / write)
                 ▼
┌──────────────────────────────────────────────┐
│  /app/data  (volumen Docker)                 │
│   ├─ config.json                             │
│   ├─ uploads/                                │
│   │    ├─ logo.webp                          │
│   │    ├─ bg.jpg                             │
│   │    └─ icons/                             │
│   └─ audit.log                               │
└──────────────────────────────────────────────┘`,
  },
  deploy: {
    eyebrow: 'Despliegue',
    title: 'Single container, on-prem.',
    subtitle: 'La imagen oficial es multi-arch (amd64 + arm64) y pesa ~80 MB. Detrás de un reverse proxy y listo.',
    run: {
      title: '1. Docker run (arranque rápido)',
      intro: 'Lo mínimo para tener un portal arriba en el puerto 3000 con un password seed por defecto y un session secret random:',
      copyLabel: 'Copiar comando docker run al portapapeles',
      outro: 'Portada en <code>http://localhost:3000</code>, admin en <code>http://localhost:3000/admin</code>. Cambiá la password desde el panel apenas entres.',
    },
    compose: {
      title: '2. Docker compose (producción)',
      intro: 'El repo trae un compose con healthcheck, usuario no-root, cap_drop=ALL y un servicio opcional de Caddy para HTTPS automático. Para Nginx o Traefik hay docs en el repo.',
      copyLabel: 'Copiar setup de docker compose al portapapeles',
    },
    backup: {
      title: '3. Backups',
      intro: 'Lo único que vale la pena backupear es la carpeta data/. Un one-liner off-site:',
      copyLabel: 'Copiar comando de backup al portapapeles',
    },
    update: {
      title: '4. Actualizar a la última versión',
      intro: 'Toda la configuración y los uploads persisten en el volumen <code>umbral-data</code>. Para actualizar a la última imagen sin perder datos:',
      copyLabel: 'Copiar comando de actualización al portapapeles',
    },
  },
  status: {
    eyebrow: 'Estado',
    title: 'Demo en vivo.',
    body: 'Hay una instancia de demo corriendo en umbral.fitty.ar, servida desde una rama huérfana con GitHub Actions. Podés recorrer la portada, editar tarjetas desde el admin (login con admin / admin) y ver cómo funciona la vista previa en vivo.',
  },
};

const en: typeof es = {
  meta: {
    description: 'Umbral: self-hosted portal that centralizes access to internal tools behind the VPN. Astro SSR + Alpine.js, no database, with admin panel.',
  },
  hero: {
    subtitle: 'Self-hosted portal that centralizes access to internal tools behind the VPN. Astro SSR + Alpine.js, no database, editable from a simple admin panel.',
  },
  screenshots: {
    title: 'How Umbral looks.',
    subtitle: 'Public portal and admin panel: Cards, Categories and Advanced (opt-in features) tabs.',
  },
  features: {
    title: 'Main features.',
    subtitle: 'Built for self-hosted intranets: simple, auditable, and owned by the team that runs it.',
    items: [
      {
        title: 'No database',
        body: 'The whole config lives in data/config.json and uploads in data/uploads/. Trivial to inspect, back up and version. Single Docker volume, no migrations, no separate service to keep up.',
      },
      {
        title: 'Admin panel',
        body: 'Edit branding, theme, layout, categories, cards and assets from the browser. Drag-and-drop reordering, live preview, audit log. Saving reloads the public portal on the next request — no restart needed.',
      },
      {
        title: 'Hardened by default',
        body: 'bcrypt cost 12, session epoch invalidation, CSRF tokens, rate limit on login, MIME allowlist with magic-number checks, DOMPurify for SVG, CSP and security headers configurable from the admin.',
      },
      {
        title: 'Hot reload',
        body: 'Save reloads the public portal without restarting the server. The admin edit flow uses a single PUT to /api/config that re-validates with Zod and writes atomically (.tmp + rename).',
      },
      {
        title: 'Asset uploader',
        body: 'Drag-and-drop for logos, favicons, icons and backgrounds. Validates with file-type on real magic numbers, resizes with sharp, sanitizes SVG with DOMPurify and lists existing assets so you can reuse them.',
      },
      {
        title: 'Theming & icons',
        body: 'Custom background (image/gradient/color), blur, overlay, accent color, font (Google Fonts whitelist), light/dark/auto mode. Built-in Lucide icon set + ability to upload your own SVGs.',
      },
    ],
  },
  architecture: {
    title: 'System architecture.',
    subtitle: 'A single Astro SSR process that reads and writes to a Docker volume. No other moving parts.',
    diagram: `┌──────────────────────────────────────────────┐
│              User's browser                  │
│   · Reads the public portal (no auth)        │
│   · Reads /admin (with session cookie)       │
└────────────────┬─────────────────────────────┘
                 │ HTTP
                 ▼
┌──────────────────────────────────────────────┐
│         Astro SSR (Node standalone)          │
│  ┌────────────┐  ┌────────────────────────┐  │
│  │  Pages     │  │  API Routes            │  │
│  │  /         │  │  login / logout        │  │
│  │  /admin    │  │  config (GET/PUT)      │  │
│  │            │  │  upload / assets/[n]   │  │
│  └────────────┘  └────────────────────────┘  │
│       Middleware: auth + CSRF + body caps    │
└────────────────┬─────────────────────────────┘
                 │ fs (read / write)
                 ▼
┌──────────────────────────────────────────────┐
│  /app/data  (Docker volume)                  │
│   ├─ config.json                             │
│   ├─ uploads/                                │
│   │    ├─ logo.webp                          │
│   │    ├─ bg.jpg                             │
│   │    └─ icons/                             │
│   └─ audit.log                               │
└──────────────────────────────────────────────┘`,
  },
  deploy: {
    eyebrow: 'Deploy',
    title: 'Single container, on-prem.',
    subtitle: 'The official image is multi-arch (amd64 + arm64) and ~80 MB. Drop it behind a reverse proxy and you are done.',
    run: {
      title: '1. Docker run (quickstart)',
      intro: 'The minimum to get a portal up on port 3000 with a default seed password and a random session secret:',
      copyLabel: 'Copy docker run command to clipboard',
      outro: 'Cover at <code>http://localhost:3000</code>, admin at <code>http://localhost:3000/admin</code>. Change the password from the panel right away.',
    },
    compose: {
      title: '2. Docker compose (production)',
      intro: 'The repo ships a compose file with healthcheck, no-root user, cap_drop=ALL and an optional Caddy service for automatic HTTPS. For Nginx or Traefik there are docs in the repo.',
      copyLabel: 'Copy docker compose setup to clipboard',
    },
    backup: {
      title: '3. Backups',
      intro: 'The only thing worth backing up is the data/ folder. One-liner off-site script:',
      copyLabel: 'Copy backup command to clipboard',
    },
    update: {
      title: '4. Update to latest',
      intro: 'All configuration and uploads persist in the <code>umbral-data</code> volume. To update to the latest image without losing data:',
      copyLabel: 'Copy update command to clipboard',
    },
  },
  status: {
    eyebrow: 'Status',
    title: 'Live demo.',
    body: 'There is a demo instance running at umbral.fitty.ar, built from the repo in a GitHub Actions orphan branch. You can walk the portal, edit cards from the admin (login with admin / admin) and see how the live preview works.',
  },
};

export default { es, en };
