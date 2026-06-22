import { useEffect } from "react";

import { LOCALES, type Locale } from "./locale";
import { buildLocaleHref } from "./routing";

const OG_LOCALE: Record<Locale, string> = {
  es: "es_PE",
  en: "en_US",
};

function upsertLink(rel: string, hreflang: string | null, href: string): void {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    if (hreflang) el.hreflang = hreflang;
    document.head.appendChild(el);
  }
  el.href = href;
}

function upsertMeta(property: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.content = content;
}

// Mantiene los metadatos del documento sincronizados con el idioma activo
export function useLocalizedHead(locale: Locale): void {
  useEffect(() => {
    const origin = window.location.origin;

    LOCALES.forEach((code) => upsertLink("alternate", code, buildLocaleHref(code, origin)));
    upsertLink("alternate", "x-default", buildLocaleHref("es", origin));
    upsertLink("canonical", null, buildLocaleHref(locale, origin));
    upsertMeta("og:locale", OG_LOCALE[locale]);
  }, [locale]);
}
