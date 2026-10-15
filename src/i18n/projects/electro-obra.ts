// Textos de la página de ElectroObra (legacy, página menor).
// `en` se tipa contra `es`: si falta una clave en un idioma, no compila.
// El nombre del producto actual sale de la data de Certaro (puede renombrarse):
// se recibe como parámetro en vez de quedar escrito acá.

const es = (successor: string) => ({
  meta: {
    title: 'fitty.ar | ElectroObra',
    description: `ElectroObra: sistema de gestión operativa y flujo de caja para pymes de construcción, en Avalonia UI y .NET, bajo Business Source License 1.1. Estuvo en producción con clientes reales; hoy está descatalogado.`,
  },
  hero: {
    eyebrow: 'Legacy · descatalogado',
    subtitle: `Sistema de gestión operativa y flujo de caja para pymes de construcción y mantenimiento. Estuvo en producción con clientes reales hasta su descatalogación. Hoy el desarrollo está en <strong>${successor}</strong>, un producto distinto escrito desde cero.`,
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
        body: `El modelo de escritorio sobre Avalonia y .NET llegó a su techo. En lugar de seguir extendiéndolo, se discontinuó.`,
      },
      {
        title: `${successor} es otro producto`,
        body: `${successor} no es una versión de ElectroObra: es un producto nuevo, escrito desde cero en Rust + Tauri, con licencia propietaria. ElectroObra se publicó bajo Business Source License 1.1.`,
      },
    ],
  },
  screenshots: {
    eyebrow: 'Capturas · Archivo',
    title: 'Cómo se veía ElectroObra.',
    subtitle: 'Versión histórica en Avalonia UI / .NET.',
    label: 'ElectroObra — archivo',
  },
});

const en: (successor: string) => ReturnType<typeof es> = (successor) => ({
  meta: {
    title: 'fitty.ar | ElectroObra',
    description: `ElectroObra: operations and cash flow management system for construction SMEs, built with Avalonia UI and .NET under the Business Source License 1.1. It ran in production with real clients; it is now discontinued.`,
  },
  hero: {
    eyebrow: 'Legacy · discontinued',
    subtitle: `Operations and cash flow management system for construction and maintenance SMEs. It ran in production with real clients until it was discontinued. Development now happens in <strong>${successor}</strong>, a different product written from scratch.`,
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
        body: `The desktop model on Avalonia and .NET reached its ceiling. Instead of extending it further, it was discontinued.`,
      },
      {
        title: `${successor} is a different product`,
        body: `${successor} is not a version of ElectroObra: it is a new product, written from scratch in Rust + Tauri, under a proprietary license. ElectroObra was released under the Business Source License 1.1.`,
      },
    ],
  },
  screenshots: {
    eyebrow: 'Screenshots · Archive',
    title: 'How ElectroObra looked.',
    subtitle: 'Historical Avalonia UI / .NET version.',
    label: 'ElectroObra — archive',
  },
});

export default { es, en };
