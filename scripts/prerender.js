import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const ssrDir = path.join(rootDir, "dist-ssr");

async function prerender() {
  console.log("Starting static pre-rendering (SSG)...");

  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}`);
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  const ssrEntryPath = path.join(ssrDir, "prerender-entry.js");
  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error(`SSR entry not found at ${ssrEntryPath}`);
  }
  const { render } = await import(`file://${ssrEntryPath}`);

  const routes = [
    {
      path: "/",
      file: "index.html",
      title: "Bubblegom — Web Development & Digital Product Studio",
      description:
        "Bubblegom is a modern web development studio. We design and build custom websites, web applications, mobile apps, and digital solutions engineered to scale.",
      canonical: "https://bubblegom.in/",
      robots:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      path: "/privacy-policy",
      dir: "privacy-policy",
      file: "index.html",
      title: "Privacy Policy — Bubblegom",
      description:
        "Privacy Policy for Bubblegom. Learn how we collect, use, and protect your information when you use our website and services.",
      canonical: "https://bubblegom.in/privacy-policy",
      robots: "index, follow",
    },
    {
      path: "/terms-of-service",
      dir: "terms-of-service",
      file: "index.html",
      title: "Terms of Service — Bubblegom",
      description:
        "Terms of Service for Bubblegom. Read the terms governing use of our website and engagement with our web development and digital product services.",
      canonical: "https://bubblegom.in/terms-of-service",
      robots: "index, follow",
    },
  ];

  for (const route of routes) {
    const renderedApp = render(route.path);

    // Replace the root container
    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`,
    );

    // Update title
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`,
    );

    // Update meta description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`,
    );

    // Update canonical link
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${route.canonical}" />`,
    );

    // Update robots if different
    if (route.robots) {
      html = html.replace(
        /<meta\s+name="robots"\s+content=".*?"\s*\/?>/,
        `<meta name="robots" content="${route.robots}" />`,
      );
    }

    if (route.dir) {
      const outDir = path.join(distDir, route.dir);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, route.file), html, "utf-8");
      // Also write clean html file for direct server matching
      fs.writeFileSync(path.join(distDir, `${route.dir}.html`), html, "utf-8");
      console.log(`✓ Pre-rendered ${route.path} -> dist/${route.dir}/index.html`);
    } else {
      fs.writeFileSync(path.join(distDir, route.file), html, "utf-8");
      console.log(`✓ Pre-rendered ${route.path} -> dist/${route.file}`);
    }
  }

  // Remove temporary SSR directory
  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log("Static pre-rendering completed successfully.");
}

prerender().catch((error) => {
  console.error("Prerender failed:", error);
  process.exit(1);
});
