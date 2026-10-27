export const bubblegomJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bubblegom.in/#organization",
      name: "Bubblegom",
      url: "https://bubblegom.in/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://bubblegom.in/#logo",
        url: "https://bubblegom.in/bubblegom_logo.png",
        contentUrl: "https://bubblegom.in/bubblegom_logo.png",
        caption: "Bubblegom Logo",
        width: 760,
        height: 760,
      },
      image: "https://bubblegom.in/bubblegom.png",
      email: "hello@bubblegom.in",
      sameAs: ["https://www.instagram.com/bubblegom.in"],
      description:
        "Bubblegom is a modern software and web development studio. We design and build custom websites, web applications, mobile apps, desktop software, and digital solutions.",
    },
    {
      "@type": "WebSite",
      "@id": "https://bubblegom.in/#website",
      url: "https://bubblegom.in/",
      name: "Bubblegom",
      description:
        "Digital products, built right. Modern software and web development studio.",
      publisher: {
        "@id": "https://bubblegom.in/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://bubblegom.in/#webpage",
      url: "https://bubblegom.in/",
      name: "Bubblegom — Web Development & Digital Product Studio",
      isPartOf: {
        "@id": "https://bubblegom.in/#website",
      },
      about: {
        "@id": "https://bubblegom.in/#organization",
      },
      description:
        "Bubblegom is a modern web development studio. We design and build custom websites, web applications, mobile apps, and digital solutions engineered to scale.",
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@id": "https://bubblegom.in/#logo",
      },
    },
    {
      "@type": "Service",
      "@id": "https://bubblegom.in/#service-websites",
      name: "Website Development Services",
      serviceType: "Web Development",
      description:
        "High-quality marketing websites, corporate websites, interactive landing pages, portfolios, and custom web experiences designed to engage and convert.",
      provider: {
        "@id": "https://bubblegom.in/#organization",
      },
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      "@id": "https://bubblegom.in/#service-web-apps",
      name: "Web Application Development",
      serviceType: "Web Application Development",
      description:
        "Scalable web applications built around specific business requirements, complex data workflows, multi-tenant architectures, and real-time collaboration.",
      provider: {
        "@id": "https://bubblegom.in/#organization",
      },
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      "@id": "https://bubblegom.in/#service-mobile-apps",
      name: "Mobile Application Development",
      serviceType: "Mobile Application Development",
      description:
        "Cross-platform mobile applications for iOS and Android built for smooth performance, offline capabilities, and native-grade user experiences.",
      provider: {
        "@id": "https://bubblegom.in/#organization",
      },
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      "@id": "https://bubblegom.in/#service-desktop-software",
      name: "Desktop Application Development",
      serviceType: "Desktop Software Development",
      description:
        "Cross-platform desktop tools, productivity utilities, and offline-capable software tailored for business workflows.",
      provider: {
        "@id": "https://bubblegom.in/#organization",
      },
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      "@id": "https://bubblegom.in/#service-custom-software",
      name: "Custom Software Engineering",
      serviceType: "Custom Software Development",
      description:
        "Bespoke digital systems, workflow automation, secure backend APIs, and microservice architectures built for reliability and scale.",
      provider: {
        "@id": "https://bubblegom.in/#organization",
      },
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      "@id": "https://bubblegom.in/#service-uiux-design",
      name: "UI/UX & Product Design",
      serviceType: "UI/UX Design",
      description:
        "Interactive prototypes, design systems, design tokens, and user experience research tailored for modern digital products.",
      provider: {
        "@id": "https://bubblegom.in/#organization",
      },
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      "@id": "https://bubblegom.in/#service-ai-automation",
      name: "AI & Automation",
      serviceType: "AI Integration & Workflow Automation",
      description:
        "AI-powered features, intelligent workflows, and custom automation that reduce repetitive manual work and improve business processes.",
      provider: {
        "@id": "https://bubblegom.in/#organization",
      },
      areaServed: "Worldwide",
    },
  ],
};
