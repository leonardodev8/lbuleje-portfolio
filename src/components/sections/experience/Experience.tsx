import { experience, experienceCopy } from "../../../data/experience";
import { useLanguage } from "../../../i18n/useLanguage";
import { Section } from "../../ui/Section";
import { SectionHeading } from "../../ui/SectionHeading";
import { ExperienceSidebar } from "./ExperienceSidebar";
import { TimelineItem } from "./TimelineItem";

// Sección de experiencia: timeline + sidebar de formación
export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experiencia" labelledBy="experiencia-title">
      <SectionHeading
        index="03"
        heading={t(experienceCopy.eyebrow)}
        title={t(experienceCopy.title)}
        titleId="experiencia-title"
      />
      <div className="grid items-start gap-y-12 min-[881px]:grid-cols-[1.4fr_1fr] min-[881px]:gap-x-[60px]">
        <ol className="relative border-l border-border pl-[30px]">
          {experience.map((item, i) => (
            <li key={item.id}>
              <TimelineItem
                item={item}
                last={i === experience.length - 1}
                delay={(i % 3) * 80}
              />
            </li>
          ))}
        </ol>
        <ExperienceSidebar />
      </div>
    </Section>
  );
}
