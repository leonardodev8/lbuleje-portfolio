import { profile } from "../../data/profile";
import { cn } from "../../lib/cn";

interface BrandProps {
  // Tamaño compacto para el footer
  compact?: boolean;
  className?: string;
}

// Logotipo "LB" + nombre (header y footer)
export function Brand({ compact = false, className }: BrandProps) {
  return (
    <span className={cn("flex items-center gap-2.75", className)}>
      <span
        className={cn(
          "grid place-items-center rounded-[9px] bg-brand font-display font-bold tracking-[-0.5px] text-bg",
          compact ? "h-7 w-7 text-xs" : "h-8.5 w-8.5 text-sm",
        )}
        aria-hidden="true"
      >
        {profile.initials}
      </span>
      {!compact ? (
        <span className="font-display text-[15px] font-semibold tracking-[-0.2px] text-text">
          {profile.name}
        </span>
      ) : null}
    </span>
  );
}
