// Textos de la página de PolyglotCLI.
// `en` se tipa contra `es`: si falta una clave en un idioma, no compila.
// Los strings con HTML (<code>, <strong>, <em>, <br />) se renderizan con set:html.

const es = {
  meta: {
    title: 'fitty.ar | PolyglotCLI',
    description: 'Detalles del proyecto PolyglotCLI: Traductor incremental de PDFs página por página usando LLMs locales de visión y OCR.',
  },
  hero: {
    subtitle: 'Traductor incremental de documentos PDF página por página. Desarrollado en .NET 10 (C#) con soporte para OCR local mediante LLMs de visión en LM Studio.',
  },
  screenshots: {
    title: 'Cómo se ve PolyglotCLI.',
    subtitle: 'CLI de traducción de PDFs en acción: modo text (nativo) y modo image (OCR con visión local).',
  },
  features: {
    title: 'Características principales.',
    subtitle: 'Diseño orientado a la eficiencia, robustez y control local.',
    items: [
      {
        title: 'Arquitectura limpia (SRP)',
        body: 'Código modular y limpio bajo el principio de responsabilidad única (Single Responsibility Principle), facilitando su mantenimiento y extensión.',
      },
      {
        title: 'Doble modo de procesamiento',
        body: '<strong class="text-text">Modo Text:</strong> extrae texto directamente de PDFs editables.<br /><strong class="text-text">Modo Image:</strong> renderiza páginas a PNG para hacer OCR con LLMs de visión locales.',
      },
      {
        title: 'Escritura incremental',
        body: 'Traduce y escribe página por página en tiempo real directo al archivo Markdown resultante, lo que previene el uso excesivo de memoria RAM.',
      },
    ],
  },
  architecture: {
    title: 'Arquitectura del sistema.',
    subtitle: 'Diseño modular y flujo de procesamiento de documentos en PolyglotCLI.',
    image: '/assets/images/architecture_es.svg',
    alt: 'Arquitectura de PolyglotCLI',
  },
  usage: {
    title: 'Modos de uso.',
    subtitle: 'PolyglotCLI se adapta a flujos interactivos rápidos o automatizaciones en consola.',
    interactive: {
      title: '1. Modo interactivo (recomendado)',
      intro: 'Al ejecutar el comando sin parámetros, se despliega un menú interactivo en la terminal que permite escanear servidores locales de LM Studio, listar modelos activos, arrastrar archivos PDF a la ventana y validar los parámetros antes de procesar.',
      copyLabel: 'Copiar comando dotnet run al portapapeles',
    },
    direct: {
      title: '2. Modo CLI directo',
      textIntro: 'Ideal para scripts o procesamiento por lotes. Ejemplo de traducción directa de un PDF editable:',
      textCopyLabel: 'Copiar comando de traducción de texto al portapapeles',
      imageIntro: 'Para traducir un PDF escaneado (usando OCR por imágenes con un LLM de visión local como Qwen2.5-VL):',
      imageCopyLabel: 'Copiar comando de traducción con visión OCR al portapapeles',
    },
  },
  cli: {
    title: 'Opciones de la CLI.',
    subtitle: 'Parámetros soportados para configurar las ejecuciones de forma manual.',
    headers: {
      flag: 'Bandera',
      long: 'Nombre largo',
      description: 'Descripción',
      default: 'Por defecto',
    },
    // `description` y `default` llevan HTML (<code>, <em>).
    options: [
      { flag: '-f', long: '--files', description: 'Ruta(s) al archivo PDF a procesar (permite múltiples).', default: '<em>Requerido</em>' },
      { flag: '-m', long: '--mode', description: 'Modo de lectura: <code>text</code> (nativa) o <code>image</code> (OCR).', default: '<code>text</code>' },
      { flag: '-a', long: '--api', description: 'URL base de la API de LM Studio.', default: 'Cargado de <code>config.json</code>' },
      { flag: '--model', long: '--model', description: 'Nombre del modelo cargado para la traducción.', default: 'Cargado de <code>config.json</code>' },
      { flag: '-vmodel', long: '--vision-model', description: 'Nombre del modelo de visión cargado para OCR.', default: 'Cargado de <code>config.json</code>' },
      { flag: '-t', long: '--target-lang', description: 'Idioma de destino para la traducción.', default: '<code>Spanish</code>' },
      { flag: '-o', long: '--output-dir', description: 'Carpeta destino de los archivos traducidos en Markdown.', default: '<code>output</code>' },
      { flag: '-p', long: '--pages', description: 'Rango de páginas (ej. <code>1-5</code>, <code>12</code>, <code>1,3,5</code> o <code>all</code>).', default: '<code>all</code>' },
      { flag: '-d', long: '--debug', description: 'Modo de depuración rápida (procesa solo las primeras 2 páginas).', default: '<code>false</code>' },
    ],
  },
};

const en: typeof es = {
  meta: {
    title: 'fitty.ar | PolyglotCLI',
    description: 'Details of PolyglotCLI: incremental PDF translator page by page using local vision LLMs and OCR.',
  },
  hero: {
    subtitle: 'Incremental PDF translator page by page. Built in .NET 10 (C#) with local OCR support using vision LLMs in LM Studio.',
  },
  screenshots: {
    title: 'How PolyglotCLI looks.',
    subtitle: 'PDF translation CLI in action: text mode (native) and image mode (OCR with local vision).',
  },
  features: {
    title: 'Main features.',
    subtitle: 'Designed for efficiency, robustness, and local control.',
    items: [
      {
        title: 'Clean architecture (SRP)',
        body: 'Modular, clean code under the Single Responsibility Principle, easy to maintain and extend.',
      },
      {
        title: 'Dual processing mode',
        body: '<strong class="text-text">Text mode:</strong> extracts text directly from editable PDFs.<br /><strong class="text-text">Image mode:</strong> renders pages to PNG for OCR with local vision LLMs.',
      },
      {
        title: 'Incremental writing',
        body: 'Translates and writes page by page in real time straight to the resulting Markdown file, preventing excessive RAM usage.',
      },
    ],
  },
  architecture: {
    title: 'System architecture.',
    subtitle: 'Modular design and document processing flow in PolyglotCLI.',
    image: '/assets/images/architecture_en.svg',
    alt: 'PolyglotCLI architecture',
  },
  usage: {
    title: 'Usage modes.',
    subtitle: 'PolyglotCLI fits fast interactive flows or console automations.',
    interactive: {
      title: '1. Interactive mode (recommended)',
      intro: 'Running the command without parameters opens an interactive menu in the terminal that lets you scan local LM Studio servers, list active models, drag PDF files into the window, and validate the parameters before processing.',
      copyLabel: 'Copy dotnet run command to clipboard',
    },
    direct: {
      title: '2. Direct CLI mode',
      textIntro: 'Ideal for scripts or batch processing. Example of a direct translation of an editable PDF:',
      textCopyLabel: 'Copy text mode translation command to clipboard',
      imageIntro: 'To translate a scanned PDF (using image OCR with a local vision LLM like Qwen2.5-VL):',
      imageCopyLabel: 'Copy image OCR translation command to clipboard',
    },
  },
  cli: {
    title: 'CLI options.',
    subtitle: 'Supported parameters to configure runs manually.',
    headers: {
      flag: 'Flag',
      long: 'Long name',
      description: 'Description',
      default: 'Default',
    },
    // `description` y `default` llevan HTML (<code>, <em>).
    options: [
      { flag: '-f', long: '--files', description: 'Path(s) to the PDF file(s) to process (multiple allowed).', default: '<em>Required</em>' },
      { flag: '-m', long: '--mode', description: 'Read mode: <code>text</code> (native) or <code>image</code> (OCR).', default: '<code>text</code>' },
      { flag: '-a', long: '--api', description: 'Base URL of the LM Studio API.', default: 'Loaded from <code>config.json</code>' },
      { flag: '--model', long: '--model', description: 'Name of the loaded model for translation.', default: 'Loaded from <code>config.json</code>' },
      { flag: '-vmodel', long: '--vision-model', description: 'Name of the loaded vision model for OCR.', default: 'Loaded from <code>config.json</code>' },
      { flag: '-t', long: '--target-lang', description: 'Target language for the translation.', default: '<code>English</code>' },
      { flag: '-o', long: '--output-dir', description: 'Output folder for the translated Markdown files.', default: '<code>output</code>' },
      { flag: '-p', long: '--pages', description: 'Page range (e.g. <code>1-5</code>, <code>12</code>, <code>1,3,5</code> or <code>all</code>).', default: '<code>all</code>' },
      { flag: '-d', long: '--debug', description: 'Quick debug mode (processes only the first 2 pages).', default: '<code>false</code>' },
    ],
  },
};

export default { es, en };
