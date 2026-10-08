// Textos de la página de ElectroObra (legacy, página menor).
// `en` se tipa contra `es`: si falta una clave en un idioma, no compila.
// El nombre del sucesor sale de la data de Certaro (puede renombrarse):
// se recibe como parámetro en vez de quedar escrito acá.

const es = (successor: string) => ({
  meta: {
    title: 'fitty.ar | ElectroObra',
    description: `ElectroObra: sistema de gestión operativa y flujo de caja para pymes de construcción, en Avalonia UI y .NET. Estuvo en producción con clientes reales; hoy está descatalogado y migrado a ${successor}.`,
  },
  hero: {
    eyebrow: 'Legacy · descatalogado',
    subtitle: `Sistema de gestión operativa y flujo de caja para pymes de construcción y mantenimiento. Estuvo en producción con clientes reales hasta su descatalogación; sus instalaciones se migraron a <strong>${successor}</strong>, una plataforma ERP y CRM mucho más completa y compleja.`,
    successorCta: `Ver ${successor}`,
  },
  context: {
    eyebrow: 'Contexto',
    title: 'Un producto que cumplió su ciclo.',
    subtitle: 'Se conserva como registro del producto original, no como línea activa.',
    items: [
      {
        title: 'En producción',
        body: 'Producto comercial entregado y usado a diario por pymes de construcción: efectivo, bancos, monotributo, obras y cuadrillas. Validó el dominio con usuarios reales.',
      },
      {
        title: 'Descatalogado',
        body: `El modelo de escritorio sobre Avalonia y .NET llegó a su techo. En lugar de seguir extendiéndolo, se discontinuó y el desarrollo pasó por completo a ${successor}.`,
      },
      {
        title: `Migrado a ${successor}`,
        body: `Los datos y flujos de trabajo de cada instalación se migraron a ${successor}, reescrito en Rust + Tauri y en evolución hacia un ERP y CRM integral.`,
      },
    ],
  },
  screenshots: {
    eyebrow: 'Capturas · Archivo',
    title: 'Cómo se veía ElectroObra.',
    subtitle: 'Versión histórica en Avalonia UI / .NET, previa a la reescritura.',
    label: 'ElectroObra — archivo',
  },
});

const en: (successor: string) => ReturnType<typeof es> = (successor) => ({
  meta: {
    title: 'fitty.ar | ElectroObra',
    description: `ElectroObra: operations and cash flow management system for construction SMEs, built with Avalonia UI and .NET. It ran in production with real clients; it is now discontinued and migrated to ${successor}.`,
  },
  hero: {
    eyebrow: 'Legacy · discontinued',
    subtitle: `Operations and cash flow management system for construction and maintenance SMEs. It ran in production with real clients until it was discontinued; its installations were migrated to <strong>${successor}</strong>, a far more complete and complex ERP and CRM platform.`,
    successorCta: `See ${successor}`,
  },
  context: {
    eyebrow: 'Context',
    title: 'A product that completed its lifecycle.',
    subtitle: 'Kept as a record of the original product, not as an active line.',
    items: [
      {
        title: 'In production',
        body: 'Commercial product shipped and used daily by construction SMEs: cash, banks, monotax, works and crews. It validated the domain with real users.',
      },
      {
        title: 'Discontinued',
        body: `The desktop model on Avalonia and .NET reached its ceiling. Instead of extending it further, it was discontinued and development moved entirely to ${successor}.`,
      },
      {
        title: `Migrated to ${successor}`,
        body: `Each installation's data and workflows were migrated to ${successor}, rewritten in Rust + Tauri and evolving into a full ERP and CRM.`,
      },
    ],
  },
  screenshots: {
    eyebrow: 'Screenshots · Archive',
    title: 'How ElectroObra looked.',
    subtitle: 'Historical Avalonia UI / .NET version, before the rewrite.',
    label: 'ElectroObra — archive',
  },
});

export default { es, en };
