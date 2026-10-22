import { createFileRoute } from "@tanstack/react-router";
import { BubblegomSite } from "@/components/bubblegom/BubblegomSite";
import { bubblegomJsonLd } from "@/lib/seo-schema";

export const Route = createFileRoute("/")({
  ssr: true,
  head: () => ({
    meta: [
      {
        title: "Bubblegom — Web Development & Digital Product Studio",
      },
      {
        name: "description",
        content:
          "Bubblegom is a modern web development studio. We design and build custom websites, web applications, mobile apps, and digital solutions engineered to scale.",
      },
      {
        name: "keywords",
        content:
          "website development company, web development services, custom website development, business website development, web applications, UI/UX design, digital products",
      },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
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
      {
        property: "og:image",
        content: "https://bubblegom.in/bubblegom.png",
      },
      {
        property: "og:image:secure_url",
        content: "https://bubblegom.in/bubblegom.png",
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        property: "og:image:width",
        content: "1536",
      },
      {
        property: "og:image:height",
        content: "1024",
      },
      {
        property: "og:image:alt",
        content: "Bubblegom — Digital Products, Built Right",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Bubblegom — Web Development & Digital Product Studio",
      },
      {
        name: "twitter:description",
        content:
          "Bubblegom is a modern web development studio. We design and build custom websites, web applications, mobile apps, and digital solutions engineered to scale.",
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
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(bubblegomJsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <BubblegomSite />;
}
