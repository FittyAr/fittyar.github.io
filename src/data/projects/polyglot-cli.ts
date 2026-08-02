import type { Project } from './types';

/**
 * PolyglotCLI - Traductor incremental de PDFs en .NET 10.
 * Procesa pagina por pagina para no reventar la RAM. Soporta
 * OCR local con modelos de vision.
 */
export const polyglotCli: Project = {
  slug: 'polyglot-cli',
  title: 'PolyglotCLI',
  role: 'Traductor de PDFs en .NET 10',
  category: 'dotnet',
  categoryLabel: '.net 10',
  desc: 'Traducción incremental página por página, con extracción nativa o OCR con modelos de visión locales.',
  long: '.NET 10 y C#. Pensado para traducciones largas sin reventar la memoria. Compatible con LM Studio y Ollama para el modo OCR.',
  tags: ['.net 10', 'csharp', 'ocr', 'llm local'],
  href: '/pages/polyglot-cli.html',
  external: false,
  status: 'producto',
  highlight: 'dotnet',
  stack: ['.NET 10 · C#', 'PdfPig + Skia', 'OCR · LM Studio', 'streaming write'],
};
