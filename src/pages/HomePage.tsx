import { BubblegomSite } from "@/components/bubblegom/BubblegomSite";
import { bubblegomJsonLd } from "@/lib/seo-schema";

export function HomePage() {
  return (
    <>
      <title>Bubblegom — Web Development & Digital Product Studio</title>
      <meta
        name="description"
        content="Bubblegom is a modern web development studio. We design and build custom websites, web applications, mobile apps, and digital solutions engineered to scale."
      />
      <meta
        name="keywords"
        content="website development company, web development services, custom website development, business website development, web applications, UI/UX design, digital products"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href="https://bubblegom.in/" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Bubblegom" />
      <meta
        property="og:title"
        content="Bubblegom — Web Development & Digital Product Studio"
      />
      <meta
        property="og:description"
        content="Bubblegom is a modern web development studio. We design and build custom websites, web applications, mobile apps, and digital solutions engineered to scale."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bubblegom.in/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://bubblegom.in/bubblegom.png" />
      <meta
        property="og:image:secure_url"
        content="https://bubblegom.in/bubblegom.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1536" />
      <meta property="og:image:height" content="1024" />
      <meta
        property="og:image:alt"
        content="Bubblegom — Digital Products, Built Right"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Bubblegom — Web Development & Digital Product Studio"
      />
      <meta
        name="twitter:description"
        content="Bubblegom is a modern web development studio. We design and build custom websites, web applications, mobile apps, and digital solutions engineered to scale."
      />
      <meta
        name="twitter:image"
        content="https://bubblegom.in/bubblegom.png"
      />
      <meta
        name="twitter:image:alt"
        content="Bubblegom — Digital Products, Built Right"
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bubblegomJsonLd) }}
      />

      <BubblegomSite />
    </>
  );
}
