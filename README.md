# Leonardo Buleje | Portfolio 👨‍💻

Welcome, I am Mobile Developer(React Native + Expo) and Frontend Architect. This is my personal portfolio, where I share more about myself: my projects, work experience, knowledge, and achievements.

## Architecture and Tech Stack

The project is a **single-page application (SPA)** built with React and Vite. There is no
backend; all the content lives in the frontend as typed data.

- **React 19**: the UI library that renders the components.
- **TypeScript**: adds static types to make the code safer.
- **Vite 8**: the build tool and dev server (fast start and hot reload).
- **Tailwind CSS v4**: utility-first styling. The design tokens (colors, fonts, and
  animations) are defined in `src/index.css` with the `@theme` block.
- **ESLint**: checks the code style and finds common mistakes.
- **pnpm**: the package manager.

### How it works

- `src/main.tsx` is the entry point. It mounts the app and wraps it with
  `LanguageProvider`, so every component can read the current language.
- `src/App.tsx` composes the page: `Header` → `Hero` → `Projects` → `Footer`.
- The language system (i18n) supports `es` (default) and `en`. The chosen language is
  saved in `localStorage`.
- The content (profile, stats, navigation, and projects) is kept in `src/data` as typed
  objects, so the text is separate from the components. All copy is bilingual via the
  `Localized` type (`{ es, en }`).
- Shared helpers and hooks live in `src/lib` and `src/hooks`.

## Project Structure

```
lbuleje-portfolio/
├── index.html              # HTML entry, meta tags, and fonts
├── src/
│   ├── main.tsx            # App entry point (mounts React + providers)
│   ├── App.tsx             # Page layout: Header + Hero + Projects + Stack + Footer
│   ├── index.css           # Tailwind import, design tokens, base styles
│   ├── assets/
│   │   └── projects/       # Project mockup images (.webp)
│   ├── components/
│   │   ├── layout/         # Header, Footer, Brand
│   │   ├── sections/       # Page sections (hero, projects, stack)
│   │   └── ui/             # Reusable UI (Button, Badge, TechChip, Section, SectionHeading, LanguageToggle, Reveal)
│   ├── data/               # Static content (profile, projects, stack)
│   ├── i18n/               # Language context, provider, locale routing, and SEO head helpers
│   ├── lib/                # Small utilities (cn, tone)
│   └── types/              # Shared TypeScript types (Project, ProjectMedia, Stat, Tone, StackCategory)
├── vite.config.ts          # Vite + React + Tailwind plugins
├── eslint.config.js        # ESLint rules
└── tsconfig*.json          # TypeScript config
```

## Getting Started

You need **Node.js** and **pnpm** installed.

### 1. Install the dependencies

```bash
pnpm install
```

### 2. Start the dev server

```bash
pnpm dev
```

This opens the site in development mode with hot reload (usually at
`http://localhost:5173`).

### 3. Build for production

```bash
pnpm build
```

This checks the types and creates the optimized files in the `dist/` folder.

### 4. Preview the production build

```bash
pnpm preview
```

This serves the files from `dist/` so you can test the final result.

### Other commands

```bash
pnpm lint     # check the code with ESLint
```
