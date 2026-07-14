import { certifications, education, experienceCopy, honors, languageSkills } from "../../../data/experience";
import { useLanguage } from "../../../i18n/useLanguage";
import { InfoCard } from "./InfoCard";

const labels = experienceCopy.sidebar;

// Columna lateral de la experiencia: educación, certificaciones, reconocimientos e idiomas
export function ExperienceSidebar() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-[18px]">
      <InfoCard title={t(labels.education)}>
        <div className="flex flex-col gap-3.5">
          {education.map((item, i) => (
            <div key={i}>
              <p className="text-[14.5px] font-semibold text-text">{t(item.degree)}</p>
              <p className="mt-0.5 font-mono text-[12.5px] text-muted2">{item.institution}</p>
              <p className="mt-0.5 font-mono text-[12.5px] text-muted2">{item.period}</p>
              {i < education.length - 1 ? <div className="mt-3.5 h-px bg-border" /> : null}
            </div>
          ))}
        </div>
      </InfoCard>

      <InfoCard title={t(labels.certifications)} delay={80}>
        <ul className="flex flex-col gap-[11px]">
          {certifications.map((cert, i) => (
            <li key={i} className="flex gap-2.5 text-[13.5px] leading-snug text-muted">
              <span className="shrink-0 text-cyan" aria-hidden="true">
                ◆
              </span>
              <span>{t(cert.text)}</span>
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard title={t(labels.honors)} delay={160}>
        <div className="flex flex-col gap-3.5">
          {honors.map((honor, i) => (
            <div key={i}>
              <div className="flex items-baseline justify-between gap-3">
                {honor.href ? (
                  <a
                    href={honor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-md text-[14.5px] font-semibold text-text transition-colors hover:text-accent"
                  >
                    {t(honor.title)}
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block text-xs text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                ) : (
                  <p className="text-[14.5px] font-semibold text-text">{t(honor.title)}</p>
                )}
                <span className="shrink-0 font-mono text-xs text-muted2">{honor.period}</span>
              </div>
              <p className="mt-0.5 text-[13px] leading-snug text-muted">{t(honor.description)}</p>
              {i < honors.length - 1 ? <div className="mt-3.5 h-px bg-border" /> : null}
            </div>
          ))}
        </div>
      </InfoCard>

      <InfoCard title={t(labels.languages)} delay={240}>
        <div className="flex flex-col gap-3">
          {languageSkills.map((lang, i) => (
            <div key={i}>
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="text-text">{t(lang.name)}</span>
                <span className="font-mono text-xs text-muted2">{t(lang.level)}</span>
              </div>
              <div
                className="h-[5px] overflow-hidden rounded-[3px] bg-white/[0.06]"
                role="meter"
                aria-label={t(lang.name)}
                aria-valuenow={lang.value}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="h-full rounded-[3px] bg-brand" style={{ width: `${lang.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </InfoCard>
    </div>
  );
}
