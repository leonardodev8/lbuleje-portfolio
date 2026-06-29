import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { badgeTone } from "../../lib/tone";
import type { Tone } from "../../types";

interface BadgeProps {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}

export function Badge({ tone = "accent", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-[10px] py-1 text-xs font-medium",
        badgeTone[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
