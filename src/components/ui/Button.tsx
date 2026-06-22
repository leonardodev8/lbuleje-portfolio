import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[11px] text-[15px] font-semibold transition-[transform,background,box-shadow] duration-150 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 motion-reduce:hover:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand px-6 py-[13px] text-bg shadow-[0_8px_30px_-8px_rgba(59,130,246,.55)] hover:shadow-[0_14px_40px_-8px_rgba(59,130,246,.7)]",
  secondary:
    "border border-border2 bg-panel2 px-6 py-[13px] text-text hover:bg-panel3",
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; download?: boolean | string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

// Botón polimórfico: se renderiza como <a> cuando recibe `href`, si no como <button>
export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ("href" in rest && rest.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal = anchorProps.target === "_blank";
    return (
      <a
        {...anchorProps}
        rel={isExternal ? cn("noopener noreferrer", anchorProps.rel) : anchorProps.rel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} type={buttonProps.type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
