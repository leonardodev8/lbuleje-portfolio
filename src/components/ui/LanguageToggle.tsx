import { useLanguage } from "../../i18n/useLanguage";
import { LOCALES } from "../../i18n/locale";
import { cn } from "../../lib/cn";

// Conmutador de idioma ES/EN accesible
export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="flex overflow-hidden rounded-[9px] border border-border font-mono text-xs font-medium"
    >
      {LOCALES.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={cn(
              "cursor-pointer px-[11px] py-[7px] uppercase transition-colors",
              active ? "text-text" : "text-muted hover:text-text",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
