import { useScrollProgress } from "../../hooks/useScrollProgress";

// Barra de progreso de lectura fija en la parte superior
export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[200] h-0.5 w-full origin-left bg-brand"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
