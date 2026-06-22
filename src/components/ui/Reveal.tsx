import type { ElementType, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface RevealProps {
  children: ReactNode;
  // Retraso en ms para escalonar la aparición (stagger)
  delay?: number;
  className?: string;
  // Etiqueta HTML a renderizar (composición flexible)
  as?: ElementType;
}

// Envuelve contenido y lo revela (fade-in + translateY) al entrar en viewport
// La animación se desactiva automáticamente con prefers-reduced-motion
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  return (
    <Tag
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(.22,.61,.36,1)] will-change-[opacity,transform] motion-reduce:transition-none translate-y-0 opacity-100",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
