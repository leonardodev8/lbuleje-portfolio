import { memo } from "react";

import { useLanguage } from "../../../i18n/useLanguage";
import type { StackCategory as StackCategoryType } from "../../../types";
import { Reveal } from "../../ui/Reveal";
import { TechChip } from "../../ui/TechChip";

interface StackCategoryProps {
  category: StackCategoryType;
  delay?: number;
}

export const StackCategory = memo(function StackCategory({ category, delay }: StackCategoryProps) {
  const { t } = useLanguage();

  return (
    <Reveal delay={delay} className="rounded-[18px] border border-border bg-panel p-[26px]">
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[1.5px] text-cyan">
        {t(category.title)}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {category.items.map((item) => {
          const label = item.localizedLabel ? t(item.localizedLabel) : item.label;
          return (
            <li key={item.label} className="my-1">
              <TechChip variant="stack" dashed={item.learning}>
                {label}
              </TechChip>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
});
