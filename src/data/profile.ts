import type { Stat } from "../types";

export const CV_URL = "#"; // TODO: subir cv

export const profile = {
  name: "Leonardo Buleje",
  initials: "LB",
  role: {
    es: "Desarrollador Mobile | Arquitecto Frontend",
    en: "Mobile Developer | Frontend Architect",
  },
  summary: {
    es: "Construyo productos móviles end-to-end, definición de producto, arquitectura, código y despliegue en producción. Módulos nativos, AR y procesamiento de IA en dispositivo incluidos.",
    en: "I build mobile products end-to-end, product definition, architecture, code and production deployment. Native modules, AR and on-device AI included.",
  },
  footerTagline: {
    es: "Desarrollador Mobile - React Native + Expo - Perú",
    en: "Mobile Developer - React Native + Expo - Perú",
  },
} as const;

export const heroCopy = {
  ctaProjects: { es: "Ver proyectos →", en: "View projects →" },
  ctaContact: { es: "Contáctame", en: "Get in touch" },
  screenshotCaption: { es: "app", en: "app" },
} as const;

export const heroStats: Stat[] = [
  { value: "+8", label: { es: "años exp.", en: "years exp." } },
  { value: "+4", label: { es: "React Native", en: "React Native" } },
  { value: "8", label: { es: "apps en stores", en: "apps shipped" } },
];

// Tecnologías que orbitan el dispositivo en el showcase 3D del hero
export const orbitTech: string[] = [
  "React Native",
  "Expo",
  "TypeScript",
  "Socket.IO",
  "ViroReact",
  "Reanimated",
];
