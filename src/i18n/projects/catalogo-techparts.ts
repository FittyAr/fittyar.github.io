// Textos de la página de Catálogo Techparts.
// `en` se tipa contra `es`: si falta una clave en un idioma, no compila.

const es = {
  meta: {
    title: 'fitty.ar | Catálogo Techparts',
    description: 'Detalles de Catálogo Techparts: mi primer catálogo comercial de autopartes con pedido por email y sincronización offline.',
  },
  hero: {
    eyebrow: 'Catálogo comercial (legacy)',
    title: 'Catálogo Techparts',
    subtitle: "Catálogo digital de autopartes con pedido por email y sincronización offline. Mi primer proyecto comercial, en producción desde 2016 hasta 2024 para Tech Part's, distribuidora mayorista. Hoy deprecado.",
  },
  context: {
    eyebrow: 'Contexto',
    title: 'El mundo para el que se construyó.',
    subtitle: 'Muchos talleres y locales de la época no contaban con conexión estable. La app asumía eso desde el día uno.',
    items: [
      {
        title: 'Dos formas de pedir',
        body: 'El pedido podía salir por email cuando había conexión, o imprimirse como una hoja limpia para que el cliente llamara por teléfono y pasara el listado. Misma fuente de datos, dos canales.',
      },
      {
        title: 'Base de datos local',
        body: 'Todo el catálogo y los pedidos vivían en una base SQLite local. Los datos de envío y facturación del cliente se precargaban al instalar la app para que el pedido saliera completo sin pasos extra.',
      },
      {
        title: 'Distribución en CD',
        body: 'Para los clientes que directamente no tenían internet, se les hacía llegar una copia actualizada de la base de datos en CD, lista para reemplazar la anterior.',
      },
    ],
  },
  sync: {
    eyebrow: 'Sincronización',
    title: 'Actualización automática.',
    subtitle: 'La app se actualizaba sola: base de datos e imágenes.',
    paragraphs: [
      'La aplicación incluía actualización y sincronización automática de la base de datos SQLite y de las imágenes. Cuando había conexión, el cliente descargaba los cambios sin tener que hacer nada. Esto era crítico porque el catálogo de autopartes cambia seguido: nuevos códigos, precios actualizados, modelos nuevos.',
    ],
  },
  pipeline: {
    eyebrow: 'Pipeline de datos',
    title: "Tool a medida para Tech Part's.",
    subtitle: 'La carga del catálogo no la hacía el cliente: la hacía la empresa.',
    paragraphs: [
      "La actualización de la base de datos la realizaba directamente la empresa Tech Part's mediante una herramienta a medida que les desarrollé. Tomaba un Excel que ellos mantenían como fuente única de verdad (códigos, descripciones, marcas, modelos, proveedores, precios, stock) y lo importaba a SQLite. Las imágenes de los artículos se importaban desde una carpeta del disco. Datos y archivos quedaban consolidados y listos para distribuir.",
      "El resultado era un proceso controlado: Tech Part's editaba su Excel como siempre, corría la tool y empaquetaba la actualización que la app de cada cliente bajaba sola.",
    ],
  },
  screenshots: {
    title: 'Evolución de la app.',
    subtitle: 'Cinco momentos del proyecto: la versión original, la intermedia con búsqueda simple y compleja, el prototipo del rediseño, el rediseño final, y una versión posterior con más iteraciones.',
    carouselLabel: 'Catálogo Techparts',
  },
  status: {
    eyebrow: 'Estado',
    body: 'El proyecto se vendió y estuvo en producción desde 2016 hasta 2024. Hoy está deprecado: el cliente migró a un sistema más grande. Queda como muestra temprana de un flujo completo de catálogo + pedido offline-first.',
  },
};

const en: typeof es = {
  meta: {
    title: 'fitty.ar | Techparts Catalog',
    description: 'Details of Techparts Catalog: my first commercial auto parts catalog with email orders and offline sync.',
  },
  hero: {
    eyebrow: 'Commercial catalog (legacy)',
    title: 'Techparts Catalog',
    subtitle: "Digital auto parts catalog with email orders and offline sync. My first commercial project, in production from 2016 to 2024 for Tech Part's, a wholesale distributor. Now deprecated.",
  },
  context: {
    eyebrow: 'Context',
    title: 'The world it was built for.',
    subtitle: 'Many workshops and stores at the time had no stable connection. The app assumed that from day one.',
    items: [
      {
        title: 'Two ways to order',
        body: 'Orders could go out by email when there was a connection, or print as a clean sheet for the client to call in and pass the list. Same data source, two channels.',
      },
      {
        title: 'Local database',
        body: "The full catalog and orders lived in a local SQLite DB. The client's shipping and billing data were preloaded at install time, so the order went out complete with no extra steps.",
      },
      {
        title: 'CD distribution',
        body: 'For clients who simply had no internet, an updated copy of the database was sent on CD, ready to replace the previous one.',
      },
    ],
  },
  sync: {
    eyebrow: 'Sync',
    title: 'Automatic update.',
    subtitle: 'The app updated itself: database and images.',
    paragraphs: [
      'The app included automatic update and sync of the SQLite database and the images. When there was a connection, the client downloaded the changes without having to do anything. This was critical because the auto parts catalog changes often: new codes, updated prices, new models.',
    ],
  },
  pipeline: {
    eyebrow: 'Data pipeline',
    title: "Custom tool for Tech Part's.",
    subtitle: 'The client did not do the catalog load. The company did.',
    paragraphs: [
      "The database update was done directly by Tech Part's through a custom tool I developed for them. It took an Excel they maintained as their single source of truth (codes, descriptions, brands, models, suppliers, prices, stock) and imported it into SQLite. Item images were imported from a folder on disk. Data and files were consolidated and ready to distribute.",
      "The result was a controlled process: Tech Part's edited their Excel as always, ran the tool and packaged the update that each client's app downloaded on its own.",
    ],
  },
  screenshots: {
    title: 'Evolution of the app.',
    subtitle: 'Five moments of the project: the original version, the intermediate one with simple and complex search, the redesign prototype, the final redesign, and a later version with more iterations.',
    carouselLabel: 'Techparts Catalog',
  },
  status: {
    eyebrow: 'Status',
    body: 'The project was sold and was in production from 2016 to 2024. Today it is deprecated: the client migrated to a bigger system. It stands as an early sample of a full catalog + offline-first ordering flow.',
  },
};

export default { es, en };
