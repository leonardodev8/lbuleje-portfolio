import { navLinks, sectionIds } from "../../data/navigation";
import { CV_URL } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useLanguage } from "../../i18n/useLanguage";
import { cn } from "../../lib/cn";
import { LanguageToggle } from "../ui/LanguageToggle";
import { Brand } from "./Brand";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const { t } = useLanguage();
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-bg/60 backdrop-blur-xl">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-[1180px] items-center gap-[18px] px-6 py-3.5"
      >
        <a href="#inicio" className="rounded-md" aria-label="Leonardo Buleje - inicio">
          <Brand />
        </a>

        <div className="flex-1" />

        <LanguageToggle />

        <ul className="hidden items-center gap-[26px] md:flex">
          {navLinks.map((link) => {
            const active = `#${activeId}` === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active ? "text-text" : "text-muted hover:text-text",
                  )}
                >
                  {t(link.label)}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={CV_URL}
          download
          className="hidden rounded-[9px] border border-border2 bg-panel2 px-[15px] py-2 text-[13px] font-semibold text-text transition-[transform,background] duration-150 hover:-translate-y-px hover:bg-panel3 sm:inline-flex"
        >
          CV
        </a>

        <MobileMenu activeId={activeId} />
      </nav>
    </header>
  );
}
