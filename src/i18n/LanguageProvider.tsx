import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";

import { LanguageContext, type LanguageContextValue } from "./LanguageContext";
import { DEFAULT_LOCALE, isLocale, type Locale, type Localized } from "./locale";
import {
  buildLocalePath,
  detectNavigatorLocale,
  getLocaleFromPath,
} from "./routing";
import { useLocalizedHead } from "./useLocalizedHead";

const STORAGE_KEY = "lb_portfolio_locale";

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

// Resuelve el idioma inicial con prioridad: ruta explícita (/en) > preferencia guardada > idioma del navegador > por defecto
function resolveInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const fromPath = getLocaleFromPath(window.location.pathname);
  if (fromPath) return fromPath;
  return readStoredLocale() ?? detectNavigatorLocale();
}

interface LanguageProviderProps {
  children: ReactNode;
}

// Provee el idioma activo(con la URL como fuente de verdad) y el resolvedor `t`. El valor del context se memoiza
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(resolveInitialLocale);

  useLocalizedHead(locale);

  // Sincroniza el documento y normaliza el pathname con el idioma activo
  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // persistencia best-effort
    }
    const target = buildLocalePath(locale);
    if (window.location.pathname !== target) {
      const { search, hash } = window.location;
      window.history.replaceState(null, "", `${target}${search}${hash}`);
    }
  }, [locale]);

  // Botón atrás/adelante: re-resolver el idioma desde la URL
  useEffect(() => {
    const onPopState = () => {
      setLocaleState(getLocaleFromPath(window.location.pathname) ?? DEFAULT_LOCALE);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState((current) => {
      if (current === next) return current;
      const { search, hash } = window.location;
      window.history.pushState(null, "", `${buildLocalePath(next)}${search}${hash}`);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: <T,>(localized: Localized<T>): T => localized[locale],
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
