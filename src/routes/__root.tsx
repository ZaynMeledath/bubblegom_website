import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent px-4 relative z-10">
      <div className="max-w-md w-full text-center border border-glass-border bg-card p-8 rounded-2xl shadow-glass backdrop-blur-xl">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-luminous transition-all hover:bg-primary-strong active:scale-[0.97]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent px-4 relative z-10">
      <div className="max-w-md w-full text-center border border-glass-border bg-card p-8 rounded-2xl shadow-glass backdrop-blur-xl">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-luminous transition-all hover:bg-primary-strong active:scale-[0.97]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-glass-border bg-glass px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-glass-strong hover:border-glass-border-highlight"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#050508" },
        {
          title: "Bubblegom — Web Development & Digital Product Studio",
        },
        {
          name: "description",
          content:
            "Bubblegom is a modern web development studio. We design and build custom websites, web applications, mobile apps, and digital solutions engineered to scale.",
        },
        { name: "author", content: "Bubblegom" },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        {
          property: "og:site_name",
          content: "Bubblegom",
        },
        {
          property: "og:title",
          content: "Bubblegom — Web Development & Digital Product Studio",
        },
        {
          property: "og:description",
          content:
            "Bubblegom is a modern web development studio. We design and build custom websites, web applications, mobile apps, and digital solutions engineered to scale.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://bubblegom.in/" },
        { property: "og:locale", content: "en_US" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: "https://bubblegom.in/bubblegom.png" },
        { property: "og:image:width", content: "1536" },
        { property: "og:image:height", content: "1024" },
        {
          property: "og:image:alt",
          content: "Bubblegom — Digital Products, Built Right",
        },
        {
          name: "twitter:image",
          content: "https://bubblegom.in/bubblegom.png",
        },
        {
          name: "twitter:image:alt",
          content: "Bubblegom — Digital Products, Built Right",
        },
      ],
      links: [
        {
          rel: "canonical",
          href: "https://bubblegom.in/",
        },
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous" as const,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500;600;700&family=Manrope:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap",
        },
        { rel: "icon", href: "/bubblegom_logo.png", type: "image/png" },
        { rel: "apple-touch-icon", href: "/bubblegom_logo.png" },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="site-ambient-backdrop" aria-hidden="true" />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
