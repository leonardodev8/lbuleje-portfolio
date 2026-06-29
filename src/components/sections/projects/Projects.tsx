import { projects, projectsCopy } from "../../../data/projects";
import { useLanguage } from "../../../i18n/useLanguage";
import { Section } from "../../ui/Section";
import { SectionHeading } from "../../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="proyectos" labelledBy="proyectos-title">
      <SectionHeading
        index="01"
        heading={t(projectsCopy.heading)}
        title={t(projectsCopy.title)}
        titleId="proyectos-title"
        aside={<p>{t(projectsCopy.description)}</p>}
      />
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
