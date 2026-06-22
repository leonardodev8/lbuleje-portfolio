import { heroCopy, profile } from "../../../data/profile";
import { useLanguage } from "../../../i18n/useLanguage";
import { Button } from "../../ui/Button";
import { Reveal } from "../../ui/Reveal";
import { HeroStats } from "./HeroStats";

// Columna de texto del hero Split: titulares, descripción, CTAs y métricas
export function HeroIntro() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-[22px]">
      <Reveal delay={60}>
        <p className="font-mono text-[12.5px] uppercase tracking-[2px] text-muted2">
          {t(profile.eyebrow)}
        </p>
        <h1 className="mt-2.5 font-display text-[clamp(44px,6vw,82px)] font-bold leading-none tracking-[-0.03em] text-text">
          Leonardo
          <br />
          Buleje
        </h1>
        <p className="mt-3 font-display text-[clamp(17px,2vw,23px)] font-medium text-brand">
          {t(profile.role)}
        </p>
      </Reveal>

      <Reveal delay={120}>
        <p className="max-w-[480px] text-base leading-relaxed text-muted text-pretty">
          {t(profile.summary)}
        </p>
      </Reveal>

      <Reveal delay={180} className="flex flex-wrap gap-3">
        <Button href="#proyectos" variant="primary">
          {t(heroCopy.ctaProjects)}
        </Button>
        <Button href="#contacto" variant="secondary">
          {t(heroCopy.ctaContact)}
        </Button>
      </Reveal>

      <Reveal delay={240}>
        <HeroStats />
      </Reveal>
    </div>
  );
}
