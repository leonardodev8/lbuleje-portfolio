import { contactCopy } from "../../../data/contact";
import { contactChannels, CV_URL, EMAIL } from "../../../data/profile";
import { useLanguage } from "../../../i18n/useLanguage";
import { Button } from "../../ui/Button";
import { Reveal } from "../../ui/Reveal";
import { Section } from "../../ui/Section";

// CTA final de contacto
export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contacto" labelledBy="contacto-title" container={false} className="scroll-mt-20">
      <div className="mx-auto w-full max-w-[1180px] px-6 pb-28 pt-16 max-[560px]:px-[18px]">
        <Reveal className="relative overflow-hidden rounded-[28px] border border-border2 bg-[linear-gradient(160deg,rgba(59,130,246,.10),rgba(34,211,238,.05))]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-40%] h-[120%] w-[70%] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,.25),transparent_60%)] blur-[50px]"
          />
          <div className="relative flex flex-col items-center gap-6 px-10 py-16 text-center">
            <p className="font-mono text-[13px] uppercase tracking-[2px] text-cyan">
              04. {t(contactCopy.eyebrow)}
            </p>
            <h2
              id="contacto-title"
              className="max-w-[16ch] font-display text-[clamp(34px,5.4vw,64px)] font-bold leading-[1.02] tracking-[-0.02em] text-text"
            >
              {t(contactCopy.title)}
            </h2>
            <p className="max-w-[540px] text-base leading-relaxed text-muted">{t(contactCopy.description)}</p>

            <div className="mt-1.5 flex flex-wrap justify-center gap-3">
              <Button href={`mailto:${EMAIL}`} variant="primary">
                {t(contactCopy.sendEmail)}
              </Button>
              <Button href={CV_URL} download variant="secondary">
                {t(contactCopy.downloadCv)}
              </Button>
            </div>

            <ul className="mt-3.5 flex flex-wrap justify-center gap-x-[26px] gap-y-2 font-mono text-[13px]">
              {contactChannels.map((channel) => (
                <li key={channel.href}>
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="text-muted transition-colors hover:text-text"
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
