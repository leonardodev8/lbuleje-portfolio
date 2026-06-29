import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  // Numeral del heading, ej. "01"
  index: string;
  heading: string;
  title: string;
  // Id para enlazar con aria-labelledby de la sección
  titleId: string;
  aside?: ReactNode;
}

// Encabezado para todas las secciones (heading numerado + h2)
export function SectionHeading({ index, heading, title, titleId, aside }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="mb-3 font-mono text-[13px] uppercase tracking-[2px] text-accent">
          {index}. {heading}
        </p>
        <h2
          id={titleId}
          className="font-display text-[clamp(32px,4.4vw,52px)] font-bold tracking-[-0.02em] text-text"
        >
          {title}
        </h2>
      </div>
      {aside ? <div className="max-w-[380px] text-[15px] leading-relaxed text-muted">{aside}</div> : null}
    </Reveal>
  );
}
