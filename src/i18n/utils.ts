import es from './ui/es.json';
import en from './ui/en.json';

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

/** Tipo para strings localizados. Re-exportado por conveniencia. */
export type Localized<T = string> = { es: T; en: T };

const dictionaries = { es, en } as const;

type Dict = Record<string, unknown>;

/**
 * Lookup recursivo con notación de puntos: `t('home.hero.title')`.
 * Devuelve la clave completa si no se encuentra, para que los faltantes
 * sean visibles en consola en vez de romper la página.
 */
function lookup(dict: Dict, key: string): string | undefined {
  const parts = key.split('.');
  let cur: unknown = dict;
  for (const part of parts) {
    if (cur && typeof cur === 'object' && part in (cur as Dict)) {
      cur = (cur as Dict)[part];
    } else {
      return undefined;
    }
  }
  return typeof cur === 'string' ? cur : undefined;
}

/**
 * Devuelve un traductor `t(key)` para el locale dado.
 * - Si el locale no es soportado, cae al default (es).
 * - Si la key no existe, cae al default. Si tampoco existe, devuelve la key.
 */
export function useTranslations(locale: string | undefined) {
  const dict = dictionaries[(locale as Locale) ?? DEFAULT_LOCALE] ?? dictionaries[DEFAULT_LOCALE];

  return function t(key: string): string {
    const value = lookup(dict, key);
    if (value !== undefined) return value;
    // Fallback al default si la key no está en este locale.
    const fallback = lookup(dictionaries[DEFAULT_LOCALE], key);
    if (fallback !== undefined) return fallback;
    return key;
  };
}

/** Type-safe helper para chequear si un string es un locale soportado. */
export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Devuelve la ruta localizada a partir de una ruta sin prefijo.
 *  - `localizeHref('/pages/about.html', 'en')` → `/en/pages/about.html`
 *  - `localizeHref('/', 'es')` → `/es.html`
 *  (El root es `.html` por la config `trailingSlash: 'never'` del sitio.)
 */
export function localizeHref(href: string, locale: Locale): string {
  if (href === '/' || href === '') return `/${locale}.html`;
  for (const l of LOCALES) {
    if (href === `/${l}` || href === `/${l}.html` || href.startsWith(`/${l}/`)) return href;
  }
  return `/${locale}${href.startsWith('/') ? '' : '/'}${href}`;
}

/** Devuelve la ruta al locale alternativo (para el switcher).
 *  - `swapLocaleInPath('/es/pages/about.html', 'en')` → `/en/pages/about.html`
 *  - `swapLocaleInPath('/es.html', 'en')` → `/en.html`
 *  - `swapLocaleInPath('/en/', 'es')` → `/es.html`
 */
export function swapLocaleInPath(pathname: string, target: Locale): string {
  for (const l of LOCALES) {
    if (
      pathname === `/${l}` ||
      pathname === `/${l}/` ||
      pathname === `/${l}.html`
    ) {
      return `/${target}.html`;
    }
    if (pathname.startsWith(`/${l}/`)) {
      return `/${target}/${pathname.slice(l.length + 2)}`;
    }
  }
  return `/${target}${pathname.startsWith('/') ? '' : '/'}${pathname}`;
}

/** Versión localizada de un campo `Localized<T>`. */
export function pickLocale<T>(value: Localized<T>, locale: string | undefined): T {
  if (isLocale(locale)) return value[locale];
  return value[DEFAULT_LOCALE];
}

/**
 * Extrae el locale del primer segmento de una URL.
 * Usado por el layout para detectar el locale sin depender de la
 * config `i18n` de Astro (que duplicaba las rutas y producía warnings
 * junto con el directorio `[lang]/`).
 *  - `getLocaleFromPath('/es/pages/about')` → 'es'
 *  - `getLocaleFromPath('/en.html')`         → 'en'
 *  - `getLocaleFromPath('/')`                → DEFAULT_LOCALE
 */
export function getLocaleFromPath(pathname: string): Locale {
  for (const l of LOCALES) {
    if (
      pathname === `/${l}` ||
      pathname === `/${l}/` ||
      pathname === `/${l}.html` ||
      pathname.startsWith(`/${l}/`)
    ) {
      return l;
    }
  }
  return DEFAULT_LOCALE;
}
