import type { Project } from "../types";

export const projectsCopy = {
  heading: { es: "Trabajo destacado", en: "Selected work" },
  title: { es: "Proyectos en producción", en: "Projects in production" },
  description: {
    es: "Apps reales publicadas para clientes externos en movilidad, bienestar y agroexportación.",
    en: "Real apps shipped for external clients across mobility, well-being and agro-export.",
  },
  comingSoon: { es: "(próximamente)", en: "(coming soon)" },
} as const;

export const projects: Project[] = [
  {
    id: "colectyred",
    name: { es: "Colectyred", en: "Colectyred" },
    category: { es: "Movilidad en Tiempo real", en: "Mobility in Real-time" },
    tone: "redbright",
    mediaSide: "left",
    // media: ,
    description: {
      es: "App dual sincronizada para transporte colectivo: app pasajero (reserva de asientos, pagos in-app, rutas con mapas) + app conductor (gestión de rutas, tracking de ubicación en background).",
      en: "Synchronized dual-app for collective transport: passenger app (seat booking, in-app payments, routes with maps) + driver app (route management, background location tracking).",
    },
    highlights: [
      {
        es: "Capa en tiempo real con Socket.IO: heartbeat, reconexión por backoff exponencial y gestión de presencia para escenarios concurrentes.",
        en: "Real-time layer with Socket.IO: heartbeat, exponential-backoff reconnection and presence for concurrent driver ↔ passengers.",
      },
      {
        es: "Pagos in-app, rutas con HERE Maps y tracking en background con expo-task-manager.",
        en: "In-app payments with Mercado Pago, HERE Maps routing and background tracking via expo-task-manager.",
      },
      {
        es: "Contribuciones al backend (Node.js + Express): endpoints REST, correo con AWS SES y eventos de socket del servidor.",
        en: "Backend contributions (Node.js + Express): REST endpoints, AWS SES email and server socket events.",
      },
    ],
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Socket.IO",
      "Zustand",
      "HERE Maps",
      "Mercado Pago",
      "EAS",
    ],
    links: [
      {
        label: { es: "Landing", en: "Landing" },
        href: "https://colectyred.cl/",
        external: true,
      },
      { label: { es: "Pasajero: App Store", en: "Passenger: App Store" },
        href: "https://apps.apple.com/pe/app/colectyred-pasajero/id6755499645",
        external: true,
      },
      { label: { es: "Pasajero: Google Play", en: "Passenger: Google Play" },
        href: "https://play.google.com/store/apps/details?id=cl.colectyred.pasajeros",
        external: true,
      },
      { label: { es: "Conductor: App Store", en: "Driver: App Store" },
        href: "https://apps.apple.com/pe/app/colectyred-conductor/id6755413439",
        external: true,
      },
      { label: { es: "Conductor: Google Play", en: "Driver: Google Play" },
        href: "https://play.google.com/store/apps/details?id=cl.colectyred.conductor",
        external: true,
      },
    ],
  },
  {
    id: "ciamo",
    name: { es: "CIAMO Postures", en: "CIAMO Postures" },
    category: { es: "Bienestar AR + IA", en: "Well-being AR + AI" },
    tone: "lime",
    mediaSide: "right",
    // media: ,
    description: {
      es: "App de bienestar emocional: detección postural con Realidad Aumentada y clasificación de emociones con IA en dispositivo, sobre una arquitectura modular limpia.",
      en: "Emotional well-being app: postural detection with Augmented Reality and on-device AI emotion classification, on a clean modular architecture.",
    },
    highlights: [
      {
        es: "Detección postural con AR: análisis de simetría de hombros y alineación corporal con tracking en tiempo real.",
        en: "Postural detection with AR: shoulder-symmetry and body-alignment analysis with real-time tracking.",
      },
      {
        es: "Clasificación de emociones con IA: procesamiento de imagen facial para identificar el estado emocional predominante.",
        en: "Emotion classification with AI: facial image processing to identify the user's predominant emotional state.",
      },
      {
        es: "Clean Architecture + MVVM, pruebas unitarias con Jest y migración Expo SDK 51 -> 54 con New Architecture.",
        en: "Clean Architecture + MVVM, Jest unit tests, and an Expo SDK 51 -> 54 migration onto the New Architecture.",
      },
    ],
    tech: [
      "React Native",
      "Expo SDK 54",
      "ViroReact",
      "TanStack Query",
      "Zustand",
      "RevenueCat",
      "Jest",
    ],
    links: [
      {
        label: { es: "Landing", en: "Landing" },
        href: "https://ciamo.claraom.ch/",
        external: true,
      },
      { label: { es: "App Store", en: "App Store" }, 
        href: "https://apps.apple.com/us/app/ciamo-postures-well-being/id6472060319",
        external: true,
      },
      { label: { es: "Google Play", en: "Google Play" }, 
        href: "https://play.google.com/store/apps/details?id=com.claraom.ciamoapp",
        external: true,
      },
    ],
  },
  {
    id: "campo-sanidad",
    name: { es: "Gestión Campo Sanidad", en: "Field Health Management" },
    category: { es: "Agroexportación | Nativo", en: "Agro-export | Native" },
    tone: "emerald",
    mediaSide: "left",
    // media: ,
    description: {
      es: "Proyecto end-to-end (mobile + backend + integración empresarial): digitalización del flujo de órdenes de agroquímicos y fertilizantes desde campo hasta planta/oficina.",
      en: "End-to-end project (mobile + backend + enterprise integration): digitizing the agrochemical and fertilizer order flow from field to plant/office.",
    },
    highlights: [
      {
        es: "App Android nativa (Kotlin, MVVM): formularios dinámicos, validaciones por cultivo y envío de solicitudes en tiempo real.",
        en: "Native Android app (Kotlin, MVVM): dynamic forms, crop-specific validations and real-time request submission.",
      },
      {
        es: "Backend en ASP.NET: web services para gestión de órdenes, integración con sistema legacy SAP y sincronización de datos.",
        en: "ASP.NET backend: web services for order management plus SAP legacy-system integration and data sync.",
      },
      {
        es: "Reducción del procesamiento de órdenes de ~24h (físico) a casi tiempo real, con digitalización offline -> online y dashboards de trazabilidad.",
        en: "Cut order processing from ~24h (paper) to near real-time, with offline -> online digitization and traceability dashboards.",
      },
    ],
    tech: ["Java", "Kotlin", "Android Studio", "ASP.NET", "SAP", "MVVM"],
    links: [
      { label: { es: "Google Play", en: "Google Play" }, 
        href: "https://play.google.com/store/apps/details?id=com.virucorp.aplicacioncampo",
        external: true,
      },
      {
        label: { es: "Plataforma web", en: "Web platform" },
        href: "https://virunet.viru.com.pe",
        external: true,
      },
    ],
  },
];
