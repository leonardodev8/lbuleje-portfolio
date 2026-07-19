import { useEffect, useId, useRef, useState } from "react";
import { navLinks } from "../../data/navigation";
import { useLanguage } from "../../i18n/useLanguage";
import { cn } from "../../lib/cn";

interface MobileMenuProps {
  activeId: string | null;
}

// Menú de navegación accesible para viewports pequeños (disclosure)
export function MobileMenu({ activeId }: MobileMenuProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  // Cerrar con Escape o clic fuera
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-border bg-panel2 text-text transition-colors hover:bg-panel3"
      >
        <span className="relative block h-3 w-4">
          <span
            className={cn(
              "absolute left-0 h-0.5 w-4 bg-current transition-transform duration-200",
              open ? "top-1.5 rotate-45" : "top-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1.5 h-0.5 w-4 bg-current transition-opacity duration-200",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute left-0 h-0.5 w-4 bg-current transition-transform duration-200",
              open ? "top-1.5 -rotate-45" : "top-3",
            )}
          />
        </span>
      </button>

      {open ? (
        <nav
          id={panelId}
          aria-label="Mobile"
          className="absolute right-0 top-12 z-50 flex w-52 flex-col gap-1 rounded-2xl border border-border2 bg-bg2/95 p-2 shadow-[0_24px_50px_-20px_rgba(0,0,0,.8)] backdrop-blur-xl"
        >
          {navLinks.map((link) => {
            const active = `#${activeId}` === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-panel2 text-text" : "text-muted hover:bg-panel hover:text-text",
                )}
              >
                {t(link.label)}
              </a>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
