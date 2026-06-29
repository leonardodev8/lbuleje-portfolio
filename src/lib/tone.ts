import type { Tone } from "../types";

// Color de las viñetas/iconos
export const bulletColor: Record<Tone, string> = {
  emerald: "text-emerald",
  lime: "text-lime",
  redbright: "text-redbright",
  muted: "text-muted2",
};

// Estilos del badge de categoría
export const badgeTone: Record<Tone, string> = {
  lime: "bg-lime/15 text-lime border-lime/30",
  emerald: "bg-emerald/15 text-emerald border-emerald/30",
  redbright: "bg-redbright/15 text-redbright border-redbright/30",
  muted: "bg-panel2 text-muted border-border2",
};
