import type { ReactNode } from "react";

import { Reveal } from "../../ui/Reveal";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

// Tarjeta del sidebar de experiencia
export function InfoCard({ title, children, delay }: InfoCardProps) {
  return (
    <Reveal delay={delay} className="rounded-[18px] border border-border bg-panel p-6">
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[1.5px] text-accent">{title}</h3>
      {children}
    </Reveal>
  );
}
