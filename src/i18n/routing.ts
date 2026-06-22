import { DEFAULT_LOCALE, isLocale, LOCALES, type Locale } from "./locale";

/** Estrategia de rutas: el idioma por defecto (es) vive en la raíz; el resto se sirve bajo un prefijo (`/en`) **/

// Base normalizada con barra final, ej. "/" o "/projects/"
function normalizedBase(): string {
  const base = import.meta.env.BASE_URL || "/";
  return base.endsWith("/") ? base : `${base}/`;
}

// Primer segmento de ruta tras el base
function firstSegment(pathname: string): string {
  const base = normalizedBase();
  const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, "");
  return rest.split("/")[0] ?? "";
}

// Locale explícito en la URL, o `null` si la ruta es la raíz por defecto
export function getLocaleFromPath(pathname: string): Locale | null {
  const seg = firstSegment(pathname);
  // El idioma por defecto no usa prefijo; solo los demás lo llevan
  if (seg !== DEFAULT_LOCALE && isLocale(seg)) return seg;
  return null;
}

// Ruta normalizada(pathname) */
export function buildLocalePath(locale: Locale): string {
  const base = normalizedBase();
  if (locale === DEFAULT_LOCALE) return base.replace(/\/$/, "") || "/";
  return `${base}${locale}`;
}

// URL absoluta de un idioma
export function buildLocaleHref(locale: Locale, origin: string): string {
  return origin + buildLocalePath(locale);
}

// Idioma preferido del navegador
export function detectNavigatorLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of candidates) {
    const primary = tag?.toLowerCase().split("-")[0];
    if (primary && (LOCALES as readonly string[]).includes(primary)) {
      return primary as Locale;
    }
  }
  return DEFAULT_LOCALE;
}
