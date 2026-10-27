import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <title>404 — Page Not Found | Bubblegom</title>
      <meta name="robots" content="noindex, nofollow" />

      <main className="flex min-h-screen items-center justify-center bg-transparent px-4 relative z-10">
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
      </main>
    </>
  );
}
