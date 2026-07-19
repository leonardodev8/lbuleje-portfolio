import type { NavLink } from "../types";

export const navLinks: NavLink[] = [
  { href: "#proyectos", label: { es: "Proyectos", en: "Projects" } },
  { href: "#stack", label: { es: "Stack", en: "Stack" } },
  { href: "#experiencia", label: { es: "Experiencia", en: "Experience" } },
  { href: "#contacto", label: { es: "Contacto", en: "Contact" } },
];

// Ids de sección para el highlight de navegación
export const sectionIds = ["inicio", "proyectos", "stack", "experiencia", "contacto"] as const;
