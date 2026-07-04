import { cn } from "../../lib/cn";

interface TechChipProps {
  children: string;
  // "tech" = chip de tecnología (proyecto) | "stack" = chip de stack
  variant?: "tech" | "stack";
  dashed?: boolean;
}

export function TechChip({ children, variant = "tech", dashed = false }: TechChipProps) {
  if (variant === "stack") {
    return (
      <span
        className={cn(
          "rounded-lg border px-3 py-1.5 text-[13px]",
          dashed
            ? "border-dashed border-border2 bg-transparent text-muted"
            : "border-border bg-panel2 text-text",
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span className="rounded-[7px] border border-border px-[10px] py-[5px] font-mono text-[11.5px] text-muted">
      {children}
    </span>
  );
}
