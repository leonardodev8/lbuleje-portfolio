import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n/useLanguage";
import { Brand } from "./Brand";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-[11px]">
          <Brand compact />
          <span className="text-[13.5px] text-muted">© 2026 {profile.name}</span>
        </div>
        <p className="font-mono text-xs text-muted2">{t(profile.footerTagline)}</p>
      </div>
    </footer>
  );
}
