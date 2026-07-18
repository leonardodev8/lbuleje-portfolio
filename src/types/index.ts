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
export type Tone = "emerald" | "lime" | "redbright" | "accent" | "cyan" | "muted";

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

// Entrada de la línea de tiempo profesional
export interface ExperienceItem {
  id: string;
  period: Localized;
  role: Localized;
  company: Localized;
  bullets: Localized[];
  tone: Tone;
  // Marca el puesto actual (nodo resaltado)
  current?: boolean;
}

export interface EducationItem {
  degree: Localized;
  institution: string;
  period: string;
}

// Reconocimiento (sidebar de experiencia)
export interface Honor {
  title: Localized;
  description: Localized;
  period: string;
  // Enlace externo opcional; convierte el título en link (nueva pestaña)
  href?: string;
}

export interface Certification {
  text: Localized;
}

export interface LanguageSkill {
  name: Localized;
  level: Localized;
  // Nivel 0 al 100 para la barra de progreso
  value: number;
}

// Datos de contacto en CTA final
export interface ContactChannel {
  label: string;
  href: string;
  external?: boolean;
}
