# Bubblegom Website

The official website and interactive showcase for Bubblegom — a digital product studio building websites, web applications, mobile apps, desktop software, and custom digital solutions.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- **UI Library**: React 19, Tailwind CSS v4, Radix UI primitives
- **3D & Graphics**: Three.js, React Three Fiber, Drei
- **Icons**: Lucide React
- **Server / Deployment**: Nitro (Vercel, Node, or Cloudflare via auto-detection)

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm

### Installation

```sh
npm install
```

### Development

Start the local development server:

```sh
npm run dev
```

The site will be available at `http://localhost:8080`.

### Building for Production

Build the production bundle:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Project Structure

```
├── public/              # Static assets (logos, icons, robots.txt)
├── src/
│   ├── components/      # UI components and Bubblegom sections
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and helpers
│   ├── routes/          # TanStack Start file-based routes
│   ├── router.tsx       # Router configuration
│   ├── server.ts        # Server entry handler
│   ├── start.ts         # TanStack Start instance configuration
│   └── styles.css       # Global styles & Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```
