import type { StackCategory } from "../types";

export const stackCopy = {
  heading: { es: "Herramientas", en: "Toolbox" },
  title: { es: "Stack técnico", en: "Technical stack" },
} as const;

const plain = (labels: string[]) => labels.map((label) => ({ label }));

export const stackCategories: StackCategory[] = [
  {
    id: "mobile",
    title: { es: "Mobile", en: "Mobile" },
    items: plain([
      "React Native",
      "Expo",
      "TypeScript",
      "Reanimated",
      "Expo Router",
      "NativeWind",
      "Zustand",
      "TanStack Query",
      "Zod",
      "expo-task-manager",
      "Kotlin",
      "Xcode",
      "Ionic",
      "Flutter"
    ]),
  },
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    items: plain(["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"]),
  },
  {
    id: "architecture",
    title: { es: "Arquitectura", en: "Architecture" },
    items: [
      ...plain(["Clean Architecture", "MVVM", "SOLID", "REST APIs"]),
      { label: "Component-driven", localizedLabel: { es: "Component-driven", en: "Component-driven" } },
    ],
  },
  {
    id: "backend",
    title: { es: "Backend & Cloud", en: "Backend & Cloud" },
    items: [
      ...plain([
        "Node.js",
        "Express",
        "Socket.IO",
        "JWT",
        "OAuth",
        "Firebase",
        "AWS SES",
        "ASP.NET",
        "C# / .NET",
        "SQL Server",
      ]),
      {
        label: "Azure",
        localizedLabel: { es: "Azure aprendiendo", en: "Azure learning" },
        learning: true,
      },
    ],
  },
  {
    id: "testing",
    title: { es: "Testing & Tooling", en: "Testing & Tooling" },
    items: plain(["Git", "GitHub", "Expo EAS", "Jest", "npm"]),
  },
  {
    id: "product",
    title: { es: "Otros & Producto", en: "Other & Product" },
    items: [
      ...plain(["SAP ABAP", "S/4 HANA", "Flutter", "WordPress"]),
      { label: "Product design", localizedLabel: { es: "Diseño de producto", en: "Product design" } },
      ...plain(["Wireframing"]),
      { label: "Technical PRDs", localizedLabel: { es: "PRDs técnicos", en: "Technical PRDs" } },
    ],
  },
];
