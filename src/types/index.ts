import type { Localized } from "../i18n/locale";

// Métrica destacada del hero (ej. "+8 años en software")
export interface Stat {
  value: string;
  label: Localized;
}

// Enlace de un proyecto (ej. "Ver en GitHub", "Ver en App Store", "Ver en Google Play")
export interface ProjectLink {
  label: Localized;
  href?: string;
  external?: boolean;
  disabled?: boolean;
}

// Tono de acento usado en badges y viñetas
export type Tone = "emerald" | "lime" | "redbright" | "muted";

// Mockup del proyecto: src resuelto por Vite + alt localizado
export interface ProjectMedia {
  src: string;
  alt: Localized;
}

export interface Project {
  id: string;
  name: Localized;
  category: Localized;
  tone: Tone;
  description: Localized;
  highlights: Localized[];
  tech: string[];
  links: ProjectLink[];
  media: ProjectMedia;
  mediaSide: "left" | "right";
}

// Item dentro de una categoría
export interface StackItem {
  // Etiqueta no traducible
  label: string;
  // Etiqueta alternativa traducible
  localizedLabel?: Localized;
  learning?: boolean;
}

export interface StackCategory {
  id: string;
  title: Localized;
  items: StackItem[];
}