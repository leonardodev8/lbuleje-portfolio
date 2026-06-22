import type { Localized } from "../i18n/locale";

// Métrica destacada del hero (ej. "+8 años en software")
export interface Stat {
  value: string;
  label: Localized;
}