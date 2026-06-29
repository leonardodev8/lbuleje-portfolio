import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

interface SectionProps {
  id: string;
  // Id del encabezado que etiqueta la sección (a11y: aria-labelledby)
  labelledBy?: string;
  // Contenido de la sección
  children: ReactNode;  
  className?: string;
  // Limita el ancho e incluye padding estándar de sección
  container?: boolean;
}

// Sección semántica con scroll-margin para el anclado del header fijo y opcionalmente el contenedor centrado estándar
export function Section({ id, labelledBy, children, className, container = true }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-20", className)}
    >
      {container ? (
        <div className="mx-auto w-full max-w-[1180px] px-6 py-24 sm:px-6 max-[560px]:px-[18px]">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
