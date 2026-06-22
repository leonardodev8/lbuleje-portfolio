import { heroStats } from "../../../data/profile";
import { useLanguage } from "../../../i18n/useLanguage";

// Métricas inline del hero (+8 años, +4 RN, 4 apps). */
export function HeroStats() {
  const { t } = useLanguage();
  return (
    <dl className="mt-2 flex gap-7">
      {heroStats.map((stat) => (
        <div key={stat.value} className="flex flex-col-reverse">
          <dt className="text-[12.5px] text-muted2">{t(stat.label)}</dt>
          <dd className="font-display text-[26px] font-bold text-text">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
