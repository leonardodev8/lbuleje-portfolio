import { memo } from "react";

import { projectsCopy } from "../../../data/projects";
import { useLanguage } from "../../../i18n/useLanguage";
import { cn } from "../../../lib/cn";
import { bulletColor } from "../../../lib/tone";
import type { Project } from "../../../types";
import { Badge } from "../../ui/Badge";
import { Reveal } from "../../ui/Reveal";

interface ProjectCardProps {
  project: Project;
}

// Tarjeta de proyecto con media lateral, highlights, stack y enlaces
export const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();
  const mediaLeft = project.mediaSide === "left";

  return (
    <Reveal
      as="article"
      className="group overflow-hidden rounded-[22px] border border-border bg-panel transition-colors duration-300 hover:border-border2 hover:bg-panel2"
    >
      <div
        className={cn(
          "grid grid-cols-1",
          mediaLeft
            ? "min-[881px]:grid-cols-[340px_1fr]"
            : "min-[881px]:grid-cols-[1fr_340px]",
        )}
      >
        <div className={cn(mediaLeft ? "" : "min-[881px]:order-2")}>
          {/* TODO: agregar media */}
        </div>

        <div
          className={cn(
            "flex flex-col gap-4 p-8",
            mediaLeft ? "" : "min-[881px]:order-1",
          )}
        >
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-[26px] font-bold tracking-[-0.01em] text-text">
              {t(project.name)}
            </h3>
            <Badge tone={project.tone}>{t(project.category)}</Badge>
          </div>

          <p className="text-[15px] leading-relaxed text-muted">{t(project.description)}</p>

          <ul className="flex flex-col gap-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-snug text-muted">
                <span className={cn("shrink-0", bulletColor[project.tone])} aria-hidden="true">
                  ▹
                </span>
                <span>{t(highlight)}</span>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech}>
                <span className="rounded-[7px] border border-border px-[10px] py-[5px] font-mono text-[11.5px] text-muted">
                  {tech}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-1.5 flex flex-wrap gap-2.5">
            {project.links.map((link) => {
              const text = t(link.label);
              if (link.href && !link.disabled) {
                return (
                  <a
                    key={text}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="rounded-[9px] border border-border2 bg-panel2 px-3.5 py-2 text-[13px] font-semibold text-text transition-colors hover:bg-panel3"
                  >
                    {text}
                  </a>
                );
              }
              return (
                <span
                  key={text}
                  className="rounded-[9px] border border-border px-3.5 py-2 text-[13px] font-semibold text-muted"
                  aria-label={`${text} ${t(projectsCopy.comingSoon)}`}
                >
                  {text}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
});
