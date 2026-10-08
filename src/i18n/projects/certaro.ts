// Textos de la página de Certaro.
// `en` se tipa contra `es`: si falta una clave en un idioma, no compila.
// Los strings con HTML (<strong>) se renderizan con set:html.
// El nombre del producto vive solo en NAME: para renombrarlo, cambiar esta constante.

const NAME = 'Certaro';

const es = {
  name: NAME,
  meta: {
    description: `${NAME}: evolución de ElectroObra. Sistema comercial y de código cerrado de gestión operativa y flujo de caja para pymes de construcción, ampliable a ERP (en proceso). Desarrollado en Rust + Tauri con Clean Architecture y SQLite. ElectroObra, su predecesor, fue descatalogado y migrado a ${NAME}.`,
  },
  hero: {
    eyebrow: 'Producto comercial · ERP en proceso',
    subtitle: 'Sistema de gestión y flujo de caja comercial y de código cerrado para pymes de mantenimiento y construcción, diseñado para expandirse hacia un ERP completo (en proceso). Originalmente <strong>ElectroObra</strong> (Avalonia UI + .NET), reescrito en <strong>Rust + Tauri</strong> para mayor rendimiento, binarios livianos y mantenibilidad a largo plazo.',
  },
  terminal: {
    license: 'Propietaria / Código cerrado',
    roadmap: 'ERP modular (en proceso)',
    status: 'producto comercial cerrado · previo: ElectroObra (descatalogado)',
  },
  evolution: {
    eyebrow: 'Evolución',
    title: `De ElectroObra a ${NAME}.`,
    subtitle: 'Mismo producto, nueva base. Una reescritura deliberada para ganar rendimiento, seguridad y portabilidad sin perder el conocimiento del dominio.',
    origin: {
      label: 'Origen',
      body: 'Producto comercial entregado y en uso con clientes hasta su migración. Multiplataforma con Avalonia UI (MVVM) y EF Core sobre SQLite. Validado con pymes reales de construcción: efectivo, bancos, monotributo, obras y cuadrillas.',
    },
    rewrite: {
      label: 'Reescritura',
      badge: 'activo',
      body: 'Reescritura completa preservando dominio y UX. Rust para el núcleo, Tauri para un shell nativo liviano. Binarios más chicos, arranque instantáneo, seguridad de memoria y sin runtime que instalar.',
    },
    present: {
      label: 'Presente',
      meta: 'Producto comercial · Evolución a ERP + CRM',
      body: `${NAME} es la única línea de producto: una plataforma comercial de código cerrado en evolución hacia un ERP y CRM integral (en proceso). Las instalaciones de ElectroObra se migraron a ${NAME} y el producto original fue descatalogado.`,
      tagCommercial: 'comercial',
    },
    bridge: {
      title: 'Ruta de migración',
      body: `<strong>ElectroObra → ${NAME}.</strong> ElectroObra estuvo en producción con clientes reales hasta ser descatalogado. Sus datos y flujos de trabajo se migraron a ${NAME}, que conserva el conocimiento del dominio y lo extiende hacia ERP y CRM. Un solo producto, sin mantenimiento en paralelo.`,
    },
  },
  screenshots: {
    eyebrow: 'Capturas · Actual',
    title: `${NAME} en Rust + Tauri.`,
    subtitle: 'Nuevo shell nativo: Panel, Movimientos, Facturas y Asistencia en la versión reescrita.',
    // El enlace a la página de ElectroObra se arma en la página (depende del locale).
    archive: {
      before: 'Las capturas de la versión original en Avalonia quedan archivadas en la página de ',
      link: 'ElectroObra',
      after: '.',
    },
  },
  philosophy: {
    eyebrow: 'Filosofía',
    title: 'Filosofía del proyecto.',
    subtitle: 'Enfoque centrado en la realidad operativa cotidiana de las empresas del sector. Sin cambios tras la reescritura.',
    items: [
      {
        title: 'Flujo de caja real',
        body: 'Monitorea los movimientos reales de dinero (efectivo, bancos, monotributo, seguros, materiales y herramientas) en lugar de una contabilidad fiscal compleja.',
      },
      {
        title: 'Flexibilidad en el mundo real',
        body: 'Diseñado contemplando inasistencias injustificadas, adelantos de sueldo a empleados, pagos parciales de clientes y saldos pendientes de cobro.',
      },
      {
        title: 'Shell nativo y portable',
        body: 'Tauri ofrece un shell verdaderamente nativo y liviano con UI de calidad web. Arranque rápido, binarios pequeños y sin runtime que instalar — en Windows, Linux y macOS.',
      },
    ],
  },
  architecture: {
    title: 'Arquitectura de software.',
    subtitle: 'Mismos principios, nuevo stack. El dominio sigue puro; la infraestructura ahora es nativa en Rust y los comandos de Tauri reemplazan la capa MVVM.',
    layers: [
      {
        title: 'Core (Dominio)',
        body: 'Entidades puras de dominio (Movement, Client, Job, Employee), enumeraciones, especificaciones y traits de repositorio. Cero dependencias de frameworks.',
      },
      {
        title: 'Application',
        body: `Handlers de casos de uso, DTOs y validación de negocio. Orquestación agnóstica, heredada de ElectroObra y llevada a ${NAME}.`,
      },
      {
        title: 'Infrastructure',
        body: 'Persistencia SQLite (offline-first), sistema de archivos, exportación a PDF/Excel y logging — ahora con crates de Rust en lugar de EF Core.',
      },
    ],
    ui: {
      title: 'UI Layer (Tauri)',
      body: 'Shell nativo con Tauri 2.x. El frontend invoca comandos Rust vía IPC; la UI se mantiene rápida, segura y auto-actualizable sin empaquetar un navegador completo.',
    },
    changes: {
      title: 'Qué cambió',
      body: 'Avalonia / MVVM → comandos Tauri. EF Core → crates SQLite de Rust. Runtime .NET → binario nativo único. Dominio y UX se mantienen.',
    },
  },
};

const en: typeof es = {
  name: NAME,
  meta: {
    description: `${NAME}: evolution of ElectroObra. Proprietary operations management and cash flow system for construction SMEs, expandable into an ERP (in progress). Built in Rust + Tauri with Clean Architecture and SQLite. ElectroObra, its predecessor, was discontinued and migrated to ${NAME}.`,
  },
  hero: {
    eyebrow: 'Commercial product · ERP in progress',
    subtitle: 'Proprietary, closed-source management and cash flow system for construction and maintenance SMEs, designed to expand into a complete ERP (in progress). Originally <strong>ElectroObra</strong> (Avalonia UI + .NET), rewritten in <strong>Rust + Tauri</strong> for performance, smaller binaries and long-term maintainability.',
  },
  terminal: {
    license: 'Proprietary / Closed source',
    roadmap: 'Modular ERP (in progress)',
    status: 'commercial closed-source product · prev: ElectroObra (discontinued)',
  },
  evolution: {
    eyebrow: 'Evolution',
    title: `From ElectroObra to ${NAME}.`,
    subtitle: 'Same product, new foundation. A deliberate rewrite to gain performance, security and portability without losing domain knowledge.',
    origin: {
      label: 'Origin',
      body: 'Commercial product shipped and used by clients until its migration. Cross-platform with Avalonia UI (MVVM) and EF Core over SQLite. Validated with real construction SMEs: cash, banks, monotax, works and crews.',
    },
    rewrite: {
      label: 'Rewrite',
      badge: 'active',
      body: 'Full rewrite preserving domain and UX. Rust for the core, Tauri for a lightweight native shell. Smaller binaries, instant startup, memory safety and no runtime to install.',
    },
    present: {
      label: 'Present',
      meta: 'Commercial product · ERP + CRM evolution',
      body: `${NAME} is the single product line: a closed-source commercial platform evolving into a full ERP and CRM (in progress). ElectroObra installations were migrated to it and the original product was discontinued.`,
      tagCommercial: 'commercial',
    },
    bridge: {
      title: 'Migration path',
      body: `<strong>ElectroObra → ${NAME}.</strong> ElectroObra was in production with real clients until it was discontinued. Its data and workflows were migrated to ${NAME}, which keeps the domain knowledge and extends it towards ERP and CRM. One product, no parallel maintenance.`,
    },
  },
  screenshots: {
    eyebrow: 'Screenshots · Current',
    title: `${NAME} in Rust + Tauri.`,
    subtitle: 'New native shell: Panel, Movements, Invoices and Attendance in the rewritten version.',
    archive: {
      before: 'Screenshots of the original Avalonia version are archived on the ',
      link: 'ElectroObra',
      after: ' page.',
    },
  },
  philosophy: {
    eyebrow: 'Philosophy',
    title: 'Project philosophy.',
    subtitle: 'Approach focused on the day-to-day operational reality of businesses in the sector. Unchanged across the rewrite.',
    items: [
      {
        title: 'Real cash flow',
        body: 'Tracks real money movements (cash, banks, monotax, insurance, materials and tools) instead of complex fiscal accounting.',
      },
      {
        title: 'Real-world flexibility',
        body: 'Designed handling unjustified absences, salary advances to employees, partial client payments and outstanding balances.',
      },
      {
        title: 'Native, portable shell',
        body: 'Tauri delivers a truly native, lightweight shell with web-grade UI. Fast startup, tiny binaries and no runtime to install — on Windows, Linux and macOS.',
      },
    ],
  },
  architecture: {
    title: 'Software architecture.',
    subtitle: 'Same principles, new stack. Domain stays pure; infrastructure is now Rust-native and Tauri commands replace the MVVM layer.',
    layers: [
      {
        title: 'Core (Domain)',
        body: 'Pure domain entities (Movement, Client, Job, Employee), enumerations, specifications and repository traits. Zero framework dependencies.',
      },
      {
        title: 'Application',
        body: `Use-case handlers, DTOs and business validation. Framework-agnostic orchestration, carried over from ElectroObra into ${NAME}.`,
      },
      {
        title: 'Infrastructure',
        body: 'SQLite persistence (offline-first), file system, PDF/Excel export and logging — now implemented with Rust crates instead of EF Core.',
      },
    ],
    ui: {
      title: 'UI Layer (Tauri)',
      body: 'Native shell via Tauri 2.x. Frontend invokes Rust commands over IPC; the UI stays fast, secure and auto-updatable without shipping a full browser engine.',
    },
    changes: {
      title: 'What changed',
      body: 'Avalonia / MVVM → Tauri commands. EF Core → Rust SQLite crates. .NET runtime → single native binary. Domain and UX remain.',
    },
  },
};

export default { es, en };
