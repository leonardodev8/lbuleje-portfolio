import { memo } from "react";

import { useLanguage } from "../../../i18n/useLanguage";
import { cn } from "../../../lib/cn";
import { bulletColor } from "../../../lib/tone";
import type { ExperienceItem } from "../../../types";
import { Reveal } from "../../ui/Reveal";

interface TimelineItemProps {
  item: ExperienceItem;
  last: boolean;
  delay?: number;
}

// Línea de tiempo profesional
export const TimelineItem = memo(function TimelineItem({ item, last, delay }: TimelineItemProps) {
  const { t } = useLanguage();

  return (
    <Reveal delay={delay} className={cn("relative", last ? "" : "pb-[42px]")}>
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-[-37px] top-1 h-[13px] w-[13px] rounded-full",
          item.current
            ? "bg-brand shadow-[0_0_0_4px_var(--color-bg),0_0_0_5px_var(--color-border)]"
            : "border border-border2 bg-[#1a1a24] shadow-[0_0_0_4px_var(--color-bg)]",
        )}
      />
      <p className={cn("mb-2 font-mono text-[12.5px]", item.current ? "text-cyan" : "text-muted")}>
        {t(item.period)}
      </p>
      <h3 className="mb-0.5 font-display text-[21px] font-semibold text-text">{t(item.role)}</h3>
      <p className="mb-3 text-sm text-muted">{t(item.company)}</p>
      <ul className="flex flex-col gap-[7px]">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-snug text-muted">
            <span className={cn("shrink-0", bulletColor[item.tone])} aria-hidden="true">
              ▹
            </span>
            <span>{t(bullet)}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
});
