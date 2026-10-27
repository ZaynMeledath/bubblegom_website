# Bubblegom Website

The official website for **Bubblegom** (`https://bubblegom.in`), a modern web development and digital product studio.

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4** featuring interactive 3D WebGL scenes powered by Three.js & React Three Fiber, static build-time pre-rendering (SSG) for search engine indexing, and deployment configured for Vercel.

---

## Architecture Overview

- **Frontend Core**: React 19 (`react` 19.2.0, `react-dom` 19.2.0) with strict TypeScript.
- **Bundler & Dev Server**: Vite 8 with `@vitejs/plugin-react` and Rolldown chunking.
- **Routing**: `react-router-dom` v7 with route code-splitting, scroll restoration, and 404 handling.
- **SEO & Structured Data**: React 19 native document metadata hoisting, static build-time prerendering (`scripts/prerender.js`), and schema.org JSON-LD graph.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), `tw-animate-css`, and curated OKLCH design tokens.
- **3D & Animation**: Three.js, React Three Fiber v9, React Three Drei v10 with custom extruded lowercase 'b' geometry (`bubblegom-geometry.ts`).
- **Testing**: Vitest + React Testing Library + jsdom.
- **Deployment**: Vercel static hosting with clean URLs, host redirection (`www.bubblegom.in` -> `bubblegom.in`), and asset caching headers.

---

## Project Structure

```
bubblegom_website/
├── public/                 # Static public assets (images, icons, robots.txt, sitemap.xml)
├── scripts/
│   └── prerender.js        # Static build-time prerendering (SSG) script
├── src/
│   ├── components/
│   │   ├── bubblegom/      # Core hero, 3D Canvas, services, portfolio, contact
│   │   ├── common/         # ErrorBoundary, ScrollToTop
│   │   └── ui/             # Radix UI and Tailwind component primitives
│   ├── hooks/              # Custom hooks (e.g. useIsMobile)
│   ├── lib/                # Utilities, 3D geometry generator, SEO JSON-LD schema
│   ├── pages/              # Route pages (HomePage, PrivacyPolicyPage, TermsOfServicePage, NotFoundPage)
│   ├── test/               # Vitest test setup and mocks
│   ├── types/              # Ambient declarations (e.g. r3f.d.ts)
│   ├── App.tsx             # Root component with routing and error handling
│   ├── main.tsx            # Client mount entry point
│   ├── prerender-entry.tsx # Prerender entry point for static HTML generation
│   └── styles.css          # Design system, typography, and Tailwind CSS rules
├── vercel.json             # Vercel deployment configuration
├── vite.config.ts          # Vite build and server configuration
├── vitest.config.ts        # Vitest test runner configuration
└── tsconfig.json           # Strict TypeScript configuration
```

---

## Available Scripts

### Development Server
```bash
npm run dev
```
Starts the Vite dev server at `http://localhost:8080` with Instant HMR.

### Production Build & SSG
```bash
npm run build
```
Executes TypeScript type check, builds the client bundle, builds the SSR prerender bundle, generates pre-rendered HTML for all routes into `dist/`, and cleans up temporary build files.

### Preview Production Build
```bash
npm run preview
```
Spins up a local HTTP server serving the production `dist/` directory.

### Run Tests
```bash
npm test
```
Runs the Vitest test suite in CI mode.

### Type Checking
```bash
npm run typecheck
```
Runs `tsc --noEmit` to verify type safety without producing build artifacts.

### Linting
```bash
npm run lint
```
Lints all TypeScript and React files with ESLint.
