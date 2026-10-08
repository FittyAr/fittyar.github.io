// Textos de la página de Cardscape.
// `en` se tipa contra `es`: si falta una clave en un idioma, no compila.
// Los strings con HTML (<code>, <strong>, <em>) se renderizan con set:html.

const es = {
  meta: {
    description: 'Cardscape: kanban self-hosted que tu IA puede manejar. Servidor MCP propio, .NET 10 + Blazor, SQLite / PostgreSQL / MySQL / MariaDB.',
  },
  hero: {
    subtitle: 'El kanban self-hosted que tu IA puede manejar. Tableros, calendario, planner y automatizaciones, más un servidor MCP propio para que cualquier cliente de IA lea, cree y mueva tarjetas por vos. Los datos quedan en tu hardware.',
  },
  screenshots: {
    title: 'Cómo se ve Cardscape.',
    subtitle: 'Capturado de una instancia local en Docker con el dataset de demo: tablero, detalle de tarjeta, inicio, calendario, Inbox y API tokens para clientes MCP.',
  },
  features: {
    title: 'Características principales.',
    subtitle: 'Un kanban completo, pensado para durar, con integración de IA que no está pegada con cinta.',
    // Dos filas de tres tarjetas cada una
    rows: [
      [
        {
          title: 'Servidor MCP propio',
          body: 'El servidor MCP es par de la API REST, no un wrapper: cada tool mapea a un comando o query existente, con la misma validación, autorización e idempotencia. Lo que escribe la IA aparece en vivo en la UI web.',
        },
        {
          title: 'Kanban completo',
          body: 'Workspaces, tableros, listas y tarjetas con miembros, etiquetas, vencimientos, checklists, adjuntos, campos custom, votos y tarjetas recurrentes. Búsqueda full-text y feed de actividad por tablero y tarjeta.',
        },
        {
          title: 'Multi base de datos',
          body: 'SQLite para uso individual y desarrollo; PostgreSQL, MySQL o MariaDB para producción. El provider es configuración, no código: una variable de entorno y su propio set de migraciones.',
        },
      ],
      [
        {
          title: 'Calendario, planner e inbox',
          body: 'Vista mensual y swimlanes sobre las tarjetas con vencimiento, más un Inbox in-app que avisa cuando te asignan algo. Tableros en tiempo real vía SignalR.',
        },
        {
          title: 'Automatizaciones y webhooks',
          body: 'Reglas por tablero que reaccionan a eventos de tarjetas y ejecutan acciones del lado del server. Webhooks firmados con HMAC-SHA256 y reintentos con backoff exponencial.',
        },
        {
          title: 'API tokens con scopes',
          body: 'Tokens por usuario con scopes read / write y rate limit propio. Revocar uno corta el siguiente request, sin reiniciar. La config de producción no tiene secretos hard-codeados.',
        },
      ],
    ],
  },
  architecture: {
    title: 'Una capa Application, dos puertas de entrada.',
    subtitle: 'Las personas entran por la API REST y el cliente Blazor; los clientes de IA, por MCP. Las dos llegan a los mismos comandos y queries.',
  },
  deploy: {
    eyebrow: 'Despliegue',
    title: 'Arriba con docker compose.',
    subtitle: 'El repo trae archivos compose para PostgreSQL y para los otros providers. La imagen aplica migraciones al arrancar y sirve la SPA en el puerto 8080.',
    selfHost: {
      title: '1. Self-host con Docker',
      intro: 'Generá una clave JWT real y levantá el stack:',
      copyLabel: 'Copiar setup de docker compose al portapapeles',
      outro: 'En el primer arranque la UI te lleva a <code>/setup</code> para crear la cuenta de administrador.',
    },
    mcp: {
      title: '2. Conectar tu cliente de IA',
      intro: 'Creá un token desde <strong>Settings → API tokens</strong> con los scopes mínimos <code>read</code> / <code>write</code>, y apuntá cualquier cliente con soporte de MCP remoto al server:',
      copyLabel: 'Copiar configuración de conexión MCP al portapapeles',
      outro: 'Después, pedile: <em>"Listá mis workspaces de Cardscape y abrí el primer tablero."</em>',
    },
  },
  status: {
    eyebrow: 'Estado',
    title: 'Desarrollo abierto.',
    body: 'La v1.0 llegó con paridad completa de kanban; la v1.1 cerró los gaps de auditoría. Roadmap público, cada decisión de arquitectura escrita como ADR y cientos de tests unitarios, de arquitectura e integración en CI. Licencia RPL-1.5.',
  },
};

const en: typeof es = {
  meta: {
    description: 'Cardscape: self-hosted kanban your AI can drive. First-party MCP server, .NET 10 + Blazor, SQLite / PostgreSQL / MySQL / MariaDB.',
  },
  hero: {
    subtitle: 'The self-hostable kanban your AI can drive. Boards, calendar, planner and automations, plus a first-party MCP server so any AI client can read, create and move cards on your behalf. Your data stays on your hardware.',
  },
  screenshots: {
    title: 'How Cardscape looks.',
    subtitle: 'Captured from a local Docker instance loaded with the demo dataset: board, card detail, home, calendar, Inbox and API tokens for MCP clients.',
  },
  features: {
    title: 'Main features.',
    subtitle: 'A complete kanban, built for the long run, with AI integration that is not bolted on.',
    rows: [
      [
        {
          title: 'First-party MCP server',
          body: 'The MCP server is a peer to the REST API, not a wrapper: every tool maps to an existing command or query, with the same validation, authorization and idempotency. Writes made by the AI show up live in the web UI.',
        },
        {
          title: 'Full kanban surface',
          body: 'Workspaces, boards, lists and cards with members, labels, due dates, checklists, attachments, custom fields, voting and recurring cards. Full-text search and activity feed per board and card.',
        },
        {
          title: 'Multi-database',
          body: 'SQLite for solo use and development; PostgreSQL, MySQL or MariaDB for production. The provider is configuration, not code: one environment variable and its own migration set.',
        },
      ],
      [
        {
          title: 'Calendar, planner & inbox',
          body: 'Month grid and swimlane views over cards with due dates, plus an in-app Inbox that notifies you on assignment. Real-time board updates via SignalR.',
        },
        {
          title: 'Automations & webhooks',
          body: 'Per-board rules that react to card events and run server-side actions. Webhooks signed with HMAC-SHA256 and retried with exponential backoff.',
        },
        {
          title: 'API tokens with scopes',
          body: 'Per-user tokens with read / write scopes and their own rate limit. Revoking one takes effect on the next request, no restart. Production config has zero hard-coded secrets.',
        },
      ],
    ],
  },
  architecture: {
    title: 'One Application layer, two front doors.',
    subtitle: 'Humans go through the REST API and the Blazor client; AI clients go through MCP. Both land on the same commands and queries.',
  },
  deploy: {
    eyebrow: 'Deploy',
    title: 'Up with docker compose.',
    subtitle: 'The repo ships compose files for PostgreSQL and for the other providers. The image applies migrations on boot and serves the SPA on port 8080.',
    selfHost: {
      title: '1. Self-host with Docker',
      intro: 'Generate a real JWT signing key and bring the stack up:',
      copyLabel: 'Copy docker compose setup to clipboard',
      outro: 'On first launch the UI walks you through <code>/setup</code> to create the admin account.',
    },
    mcp: {
      title: '2. Connect your AI client',
      intro: 'Mint a token from <strong>Settings → API tokens</strong> with the minimum <code>read</code> / <code>write</code> scopes, then point any client that supports remote MCP at the server:',
      copyLabel: 'Copy MCP connection settings to clipboard',
      outro: 'Then just ask: <em>"List my Cardscape workspaces and open the first board."</em>',
    },
  },
  status: {
    eyebrow: 'Status',
    title: 'Open development.',
    body: 'v1.0 shipped full kanban parity; v1.1 closed the audit gaps. Public roadmap, every architectural decision written as an ADR, and hundreds of unit, architecture and integration tests in CI. Licensed under RPL-1.5.',
  },
};

export default { es, en };
