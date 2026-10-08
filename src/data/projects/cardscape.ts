import type { Project } from './types';

/**
 * Cardscape - Kanban self-hosted con servidor MCP de primera clase.
 * .NET 10 + Blazor WebAssembly (Radzen), multi-DB, licencia RPL-1.5.
 */
export const cardscape: Project = {
  slug: 'cardscape',
  title: { es: 'Cardscape', en: 'Cardscape' },
  role: {
    es: 'Kanban self-hosted con servidor MCP',
    en: 'Self-hosted kanban with an MCP server',
  },
  category: 'dotnet',
  categoryLabel: { es: '.net', en: '.net' },
  desc: {
    es: 'Gestor de proyectos kanban self-hosted que tu IA puede manejar: un servidor MCP propio expone tableros, listas y tarjetas a cualquier cliente de IA.',
    en: 'Self-hosted kanban project manager your AI can drive: a first-party MCP server exposes boards, lists and cards to any AI client.',
  },
  long: {
    es: '.NET 10 LTS, Blazor WebAssembly con Radzen, SignalR en tiempo real. SQLite, PostgreSQL, MySQL o MariaDB por configuración. Calendario, planner, automatizaciones, webhooks y API tokens.',
    en: '.NET 10 LTS, Blazor WebAssembly with Radzen, real-time SignalR. SQLite, PostgreSQL, MySQL or MariaDB by configuration. Calendar, planner, automations, webhooks and API tokens.',
  },
  tags: [
    { es: '.net 10', en: '.net 10' },
    { es: 'blazor', en: 'blazor' },
    { es: 'mcp', en: 'mcp' },
    { es: 'signalr', en: 'signalr' },
    { es: 'docker', en: 'docker' },
    { es: 'self-hosted', en: 'self-hosted' },
  ],
  href: '/pages/cardscape.html',
  external: false,
  status: 'producto',
};
