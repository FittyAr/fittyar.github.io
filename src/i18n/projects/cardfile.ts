// Textos de la página de Cardfile.
// `en` se tipa contra `es`: si falta una clave en un idioma, no compila.
// Los strings con HTML (<code>) se renderizan con set:html.

const es = {
  meta: {
    description: 'Detalles del proyecto Cardfile: Gestor de tarjetas y archivos multiplataforma, inspirado en la utilidad clásica de Windows, originalmente creado en VB.NET y ahora reescrito en Python y Flet.',
  },
  hero: {
    eyebrow: 'Utilidad retro',
    subtitle: 'Gestor de tarjetas y archivos multiplataforma inspirado en la clásica utilidad de Windows, originalmente desarrollado en VB.NET y hoy reescrito desde cero con Python 3.10+ y Flet (Flutter para Python).',
    stackI18n: '7 idiomas nativos',
  },
  screenshots: {
    title: 'Cómo se ve Cardfile.',
    subtitle: 'Gestor de tarjetas y notas con estética retro y editor Markdown en vivo.',
  },
  features: {
    title: 'Características principales.',
    subtitle: 'Combina la rapidez del CRUD clásico con la potencia de Markdown y la portabilidad moderna.',
    items: [
      {
        title: 'Inspiración clásica',
        body: 'Inspirado en el objetivo y funcionamiento de la clásica aplicación Cardfile de Windows, pero adaptado a una experiencia de usuario moderna, limpia y fluida.',
      },
      {
        title: 'Editor Markdown',
        body: 'Cargá, editá y gestioná el contenido de tus tarjetas utilizando formato Markdown, con un visualizador interactivo y previsualización en vivo.',
      },
      {
        title: 'Soporte multilingüe',
        body: 'Traducido y localizado nativamente para 7 idiomas: Español, Inglés, Portugués (BR), Francés, Alemán, Ruso y Chino.',
      },
    ],
  },
  advanced: {
    eyebrow: 'Avanzado',
    title: 'Funcionalidades avanzadas.',
    subtitle: 'Detalles técnicos e interactivos pensados para la usabilidad y la seguridad de los datos.',
    items: [
      {
        title: 'Seguridad y privacidad',
        body: 'Acceso protegido mediante autenticación con cifrado y hashing de contraseñas, garantizando que el contenido de las tarjetas esté a salvo.',
      },
      {
        title: 'Papelera de reciclaje',
        body: 'Ciclo de vida completo del contenido con estados de eliminación lógica y un contenedor de recuperación para restaurar tarjetas borradas.',
      },
      {
        title: 'Multiplataforma',
        body: 'Ejecución nativa en escritorio para Windows, macOS y Linux, así como despliegue web interactivo directamente en el navegador.',
      },
    ],
  },
  install: {
    eyebrow: 'Instalación',
    title: 'Instalación y despliegue.',
    subtitle: 'Pasos sencillos para correr Cardfile de forma local o a través de contenedores.',
    local: {
      title: '1. Ejecución local (Python)',
      intro: 'Creá un entorno virtual, instalá las dependencias y lanzá el script principal:',
      copyLabelUnix: 'Copiar comandos de setup para Linux/macOS',
      copyLabelWindows: 'Copiar comandos de setup para Windows',
    },
    docker: {
      title: '2. Ejecución con Docker',
      intro: 'Si preferís correr la aplicación de forma aislada sin configurar Python:',
      copyLabel: 'Copiar comandos de Docker compose',
      outro: 'Una vez iniciado el contenedor, abrí el navegador e ingresá a <code>http://localhost:8550</code>.',
    },
  },
};

const en: typeof es = {
  meta: {
    description: 'Details of Cardfile: cross-platform card and file manager, inspired by the classic Windows utility, originally written in VB.NET and now rewritten in Python and Flet.',
  },
  hero: {
    eyebrow: 'Retro utility',
    subtitle: 'Cross-platform card and file manager inspired by the classic Windows utility, originally developed in VB.NET and now rewritten from scratch with Python 3.10+ and Flet (Flutter for Python).',
    stackI18n: '7 native languages',
  },
  screenshots: {
    title: 'How Cardfile looks.',
    subtitle: 'Card and note manager with retro aesthetic and live Markdown editor.',
  },
  features: {
    title: 'Main features.',
    subtitle: 'Combines the speed of classic CRUD with the power of Markdown and modern portability.',
    items: [
      {
        title: 'Classic inspiration',
        body: 'Inspired by the goal and operation of the classic Windows Cardfile application, but adapted to a modern, clean and fluid user experience.',
      },
      {
        title: 'Markdown editor',
        body: 'Load, edit and manage the content of your cards using Markdown, with an interactive viewer and live preview.',
      },
      {
        title: 'Multilanguage support',
        body: 'Translated and localized natively for 7 languages: Spanish, English, Portuguese (BR), French, German, Russian and Chinese.',
      },
    ],
  },
  advanced: {
    eyebrow: 'Advanced',
    title: 'Advanced functionality.',
    subtitle: 'Technical and interactive details designed for usability and data safety.',
    items: [
      {
        title: 'Security & privacy',
        body: 'Protected access via encrypted authentication and password hashing, ensuring your card content stays safe.',
      },
      {
        title: 'Recycle bin',
        body: 'Full content lifecycle with soft-delete states and a recovery bin to restore deleted cards.',
      },
      {
        title: 'Cross-platform',
        body: 'Native desktop execution on Windows, macOS and Linux, plus interactive web deployment straight in the browser.',
      },
    ],
  },
  install: {
    eyebrow: 'Installation',
    title: 'Installation and deployment.',
    subtitle: 'Simple steps to run Cardfile locally or via containers.',
    local: {
      title: '1. Local run (Python)',
      intro: 'Create a virtual environment, install dependencies and run the main script:',
      copyLabelUnix: 'Copy Linux/macOS setup commands',
      copyLabelWindows: 'Copy Windows setup commands',
    },
    docker: {
      title: '2. Docker run',
      intro: 'If you prefer running the app isolated without setting up Python:',
      copyLabel: 'Copy Docker compose commands',
      outro: 'Once the container is up, open your browser at <code>http://localhost:8550</code>.',
    },
  },
};

export default { es, en };
