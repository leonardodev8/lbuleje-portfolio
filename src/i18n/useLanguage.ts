import { useContext } from "react";
import { LanguageContext, type LanguageContextValue } from "./LanguageContext";

// Acceso tipado al idioma activo y al resolvedor `t`
export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return context;
}
