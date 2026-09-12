import { createFileRoute } from "@tanstack/react-router";
import { BubblegomSite } from "@/components/bubblegom/BubblegomSite";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      {
        title:
          "Bubblegom — Digital Products, Built Right | Software Development Studio",
      },
      {
        name: "description",
        content:
          "Bubblegom is a modern software development studio. We design and build websites, web applications, mobile apps, desktop software, and custom digital solutions for businesses.",
      },
      {
        property: "og:title",
        content:
          "Bubblegom — Digital Products, Built Right | Software Development Studio",
      },
      {
        property: "og:description",
        content:
          "From websites and mobile apps to desktop software and custom digital solutions, Bubblegom helps businesses turn ideas into polished, reliable products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "/bubblegom_logo.png" },
      { name: "twitter:image", content: "/bubblegom_logo.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return <BubblegomSite />;
}
