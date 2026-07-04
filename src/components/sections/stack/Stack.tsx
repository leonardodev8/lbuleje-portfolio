import { stackCategories, stackCopy } from "../../../data/stack";
import { useLanguage } from "../../../i18n/useLanguage";
import { Section } from "../../ui/Section";
import { SectionHeading } from "../../ui/SectionHeading";
import { StackCategory } from "./StackCategory";

// Sección de stack técnico agrupado por categorías
export function Stack() {
  const { t } = useLanguage();

  return (
    <Section
      id="stack"
      labelledBy="stack-title"
      container={false}
      className="border-y border-border bg-gradient-to-b from-white/[0.012] to-transparent"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 py-24 max-[560px]:px-[18px]">
        <SectionHeading
          index="02"
          heading={t(stackCopy.heading)}
          title={t(stackCopy.title)}
          titleId="stack-title"
        />
        <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {stackCategories.map((category, i) => (
            <StackCategory key={category.id} category={category} delay={(i % 3) * 60} />
          ))}
        </div>
      </div>
    </Section>
  );
}
