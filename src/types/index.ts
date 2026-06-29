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

export interface Project {
  id: string;
  name: Localized;
  category: Localized;
  tone: Tone;
  description: Localized;
  highlights: Localized[];
  tech: string[];
  links: ProjectLink[];
  // media: ;
  mediaSide: "left" | "right";
}