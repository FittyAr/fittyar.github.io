import type { Project } from './types';

/**
 * PolyglotCLI - Traductor incremental de PDFs en .NET 10.
 * Procesa pagina por pagina para no reventar la RAM. Soporta
 * OCR local con modelos de vision.
 */
export const polyglotCli: Project = {
  slug: 'polyglot-cli',
  title: { es: 'PolyglotCLI', en: 'PolyglotCLI' },
  role: {
    es: 'Traductor de PDFs en .NET 10',
    en: 'PDF translator in .NET 10',
  },
  category: 'dotnet',
  categoryLabel: { es: '.net 10', en: '.net 10' },
  desc: {
    es: 'Traducción incremental página por página, con extracción nativa o OCR con modelos de visión locales.',
    en: 'Incremental translation page by page, with native extraction or OCR using local vision models.',
  },
  long: {
    es: '.NET 10 y C#. Pensado para traducciones largas sin reventar la memoria. Compatible con LM Studio y Ollama para el modo OCR.',
    en: '.NET 10 and C#. Designed for long translations without blowing up memory. Compatible with LM Studio and Ollama for OCR mode.',
  },
  tags: [
    { es: '.net 10', en: '.net 10' },
    { es: 'csharp', en: 'csharp' },
    { es: 'ocr', en: 'ocr' },
    { es: 'llm local', en: 'local llm' },
  ],
  href: '/pages/polyglot-cli.html',
  external: false,
  status: 'producto',
  highlight: 'dotnet',
  stack: [
    { es: '.NET 10 · C#', en: '.NET 10 · C#' },
    { es: 'PdfPig + Skia', en: 'PdfPig + Skia' },
    { es: 'OCR · LM Studio', en: 'OCR · LM Studio' },
    { es: 'streaming write', en: 'streaming write' },
  ],
};
