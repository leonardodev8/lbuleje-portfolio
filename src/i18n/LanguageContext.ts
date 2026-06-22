import { createContext } from "react";

import type { Locale, Localized } from "./locale";

export interface LanguageContextValue {
  // Idioma activo
  locale: Locale;
  // Cambia el idioma activo(se persiste en localStorage)
  setLocale: (locale: Locale) => void;
  // Resuelve un valor localizado al idioma activo
  t: <T>(value: Localized<T>) => T;
}

// Context nulo por defecto: `useLanguage` lanza si se usa fuera del provider, lo que evita estados silenciosamente incorrectos
export const LanguageContext = createContext<LanguageContextValue | null>(null);
