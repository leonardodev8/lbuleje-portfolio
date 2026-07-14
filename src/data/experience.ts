import type { Certification, EducationItem, ExperienceItem, Honor, LanguageSkill } from "../types";

export const experienceCopy = {
  eyebrow: { es: "Trayectoria", en: "Career" },
  title: { es: "Experiencia profesional", en: "Professional experience" },
  sidebar: {
    education: { es: "Educación", en: "Education" },
    certifications: { es: "Certificaciones", en: "Certifications" },
    honors: { es: "Reconocimientos", en: "Honors" },
    languages: { es: "Idiomas", en: "Languages" },
  },
} as const;

export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    current: true,
    tone: "accent",
    period: { es: "01/2022 - Actualidad | Remoto", en: "01/2022 - Present | Remote" },
    role: {
      es: "Mobile Developer (React Native | Android)",
      en: "Mobile Developer (React Native | Android)",
    },
    company: {
      es: "Freelance: Proyectos para clientes como Clara OM (Basilea, Suiza) y Colectyred (Chile)",
      en: "Freelance: Projects for clients such as Clara OM (Basel, Switzerland) and Colectyred (Chile)",
    },
    bullets: [
      {
        es: "Colaboración continua de varios años con Clara OM (Suiza): desarrollo de las aplicaciones del ecosistema Método Om; OmMyWay, CIAMO Postures y OmMyLife.",
        en: "Ongoing multi-year collaboration with Clara OM (Switzerland): development of the Método Om ecosystem apps; OmMyWay, CIAMO Postures and OmMyLife.",
      },
      {
        es: "Desarrollo end-to-end de aplicaciones publicadas en App Store y Google Play, cubriendo definición de producto, arquitectura, código y despliegue.",
        en: "End-to-end development of apps published on the App Store and Google Play, covering product definition, architecture, code and deployment.",
      },
      {
        es: "Arquitectura mobile (Clean Architecture, MVVM, Expo Router) e integración de módulos nativos, hardware externo, AR/VR e IA en dispositivo.",
        en: "Mobile architecture (Clean Architecture, MVVM, Expo Router) and integration of native modules, external hardware, AR/VR and on-device AI.",
      },
      {
        es: "Integración de pagos y suscripciones (Mercado Pago, RevenueCat) y autenticación segura (OAuth, JWT, expo-secure-store).",
        en: "Payments and subscriptions integration (Mercado Pago, RevenueCat) and secure authentication (OAuth, JWT, expo-secure-store).",
      },
      {
        es: "Despliegue end-to-end en Expo (managed/EAS) y flujo nativo (Xcode, Android Studio), incluyendo migraciones críticas a New Architecture y resolución de incompatibilidades en Reanimated y librerías AR/VR.",
        en: "End-to-end deployment across Expo (managed/EAS) and native workflows (Xcode, Android Studio), including critical migrations to the New Architecture and resolution of incompatibilities in Reanimated and AR/VR libraries.",
      },
      {
        es: "Documentación técnica reutilizada en múltiples proyectos.",
        en: "Technical documentation reused across multiple projects.",
      },
    ],
  },
  {
    id: "viru",
    tone: "cyan",
    period: { es: "03/2018 - 02/2022 | Presencial", en: "03/2018 - 02/2022 | On-site" },
    role: { es: "Analista de Programación", en: "Programming Analyst" },
    company: {
      es: "Viru Group: Una de las principales agroexportadoras del Perú",
      en: "Viru Group: One of Peru's leading agro-exporters",
    },
    bullets: [
      {
        es: "Desarrollo de apps móviles Android nativas (Kotlin, MVVM) para captura de datos en campo, integradas con backends ASP.NET Web API y sistemas SAP.",
        en: "Native Android mobile apps (Kotlin, MVVM) for field data capture, integrated with ASP.NET Web API backends and SAP systems.",
      },
      {
        es: "Diseño e implementación de dashboards y reportería gerencial que apoyaron la toma de decisiones operativas en planta y campo.",
        en: "Design and implementation of dashboards and managerial reporting supporting operational decisions in plant and field.",
      },
      {
        es: "Mantenimiento evolutivo de sistemas legacy con foco en estabilidad, continuidad operativa y optimización de queries en SQL Server.",
        en: "Evolutionary maintenance of legacy systems focused on stability, operational continuity and SQL Server query optimization.",
      },
    ],
  },
  {
    id: "css",
    tone: "muted",
    period: { es: "02/2017 - 09/2017 | Presencial", en: "Feb - Sep 2017 | On-site" },
    role: { es: "Desarrollador Front-end (Training)", en: "Front-end Developer (Training)" },
    company: {
      es: "Computer System Solutions: Primer rol profesional",
      en: "Computer System Solutions: First professional role",
    },
    bullets: [
      {
        es: "Desarrollo de páginas web responsivas (HTML, CSS, JavaScript) y plugins personalizados en WordPress; mantenimiento de sitios corporativos.",
        en: "Responsive websites (HTML, CSS, JavaScript), custom WordPress plugins and maintenance of corporate sites.",
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: {
      es: "Diplomado en Gestión de Sistemas Empresariales con SAP",
      en: "Diploma in Enterprise Systems Management with SAP",
    },
    institution: "TECH SENATI",
    period: "2021",
  },
  {
    degree: {
      es: "Tecnicatura en Desarrollo de Software",
      en: "Software Development Technical Degree",
    },
    institution: "SENATI",
    period: "2015 - 2017",
  },
];

export const certifications: Certification[] = [
  {
    text: {
      es: "Desarrollo de Apps Móviles - Google Actívate (2023)",
      en: "Mobile App Development - Google Actívate (2023)",
    },
  },
  {
    text: {
      es: "Modelamiento de Datos - Universidad Nacional de Ingeniería (2022)",
      en: "Data Modeling - Universidad Nacional de Ingeniería (2022)",
    },
  },
  {
    text: {
      es: "Master en Programación ABAP OO - CVOSOFT (2021)",
      en: "Master in Object-Oriented ABAP - CVOSOFT (2021)",
    },
  },
];


export const honors: Honor[] = [
  {
    title: {
      es: "Revista SENATI - Edición 105",
      en: "SENATI Magazine - Issue 105",
    },
    description: {
      es: "Entrevistado en la publicación oficial de la institución, páginas 34 a 37.",
      en: "Interviewed in the institution's official publication, pages 34-37.",
    },
    period: "2023",
    href: "https://issuu.com/senati1/docs/revista_105_-_2023/35",
  },
  {
    title: {
      es: "Olimpiadas Nacionales SENATI",
      en: "SENATI National Olympics",
    },
    description: {
      es: "2° puesto nacional (medalla de plata) y 1° puesto regional.",
      en: "2nd place nationwide (silver medal) and 1st place at regional level.",
    },
    period: "2017",
  },
];

export const languageSkills: LanguageSkill[] = [
  {
    name: { es: "Español", en: "Spanish" },
    level: { es: "Nativo", en: "Native" },
    value: 100,
  },
  {
    name: { es: "Inglés", en: "English" },
    level: { es: "A2-B1", en: "A2-B1" },
    value: 48,
  },
];
