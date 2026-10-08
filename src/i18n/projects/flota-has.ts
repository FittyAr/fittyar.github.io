// Textos de la página de Flota-HAS.
// `en` se tipa contra `es`: si falta una clave en un idioma, no compila.

const es = {
  meta: {
    description: 'Detalles del proyecto Flota-HAS: Aplicación multiplataforma (.NET MAUI) y local-first para la gestión de vehículos y choferes de ride-hailing.',
  },
  hero: {
    eyebrow: 'Gestión de flotas',
    subtitle: 'Aplicación local-first para la gestión integral de vehículos, choferes, mantenimientos, recaudaciones y balances individuales de ride-hailing. Desarrollada con .NET MAUI.',
  },
  screenshots: {
    title: 'Cómo se ve Flota-HAS.',
    subtitle: 'Panel de gestión de flota y seguimiento de balances individuales por chofer.',
  },
  scope: {
    eyebrow: 'Alcance',
    title: 'Qué cubre Flota-HAS.',
    subtitle: 'Un alcance operativo completo para flotas de ride-hailing pequeñas y medianas.',
    items: [
      {
        title: 'Vehículos y choferes',
        body: 'Alta, edición y vínculo entre choferes y vehículos, con estados activo/inactivo, vencimientos y datos de contacto clave.',
      },
      {
        title: 'Recaudaciones',
        body: 'Seguimiento de recaudaciones diarias y semanales por chofer, con historial claro y saldo individual.',
      },
      {
        title: 'Mantenimientos',
        body: 'Bitácora de service por vehículo, con avisos por kilometraje o fecha. Evitar sorpresas de último momento.',
      },
    ],
  },
};

const en: typeof es = {
  meta: {
    description: 'Details of Flota-HAS: cross-platform (.NET MAUI) and local-first application for managing vehicles and drivers in ride-hailing fleets.',
  },
  hero: {
    eyebrow: 'Fleet management',
    subtitle: 'Local-first application for the comprehensive management of vehicles, drivers, maintenance, collections and individual ride-hailing balances. Built with .NET MAUI.',
  },
  screenshots: {
    title: 'How Flota-HAS looks.',
    subtitle: 'Fleet management panel and individual driver balance tracking.',
  },
  scope: {
    eyebrow: 'Scope',
    title: 'What Flota-HAS covers.',
    subtitle: 'A complete operational scope for small and mid-size ride-hailing fleets.',
    items: [
      {
        title: 'Vehicles & drivers',
        body: 'Register, edit and link drivers to vehicles, with active/inactive status, expiry dates and key contact info.',
      },
      {
        title: 'Collections',
        body: 'Track daily and weekly collections per driver, with a clear history and individual balance.',
      },
      {
        title: 'Maintenance',
        body: 'Service log per vehicle, with reminders by mileage or date. Avoid last-minute surprises.',
      },
    ],
  },
};

export default { es, en };
