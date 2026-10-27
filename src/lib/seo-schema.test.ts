import { describe, expect, it } from "vitest";
import { bubblegomJsonLd } from "./seo-schema";

describe("bubblegomJsonLd Schema", () => {
  it("should have correct schema context and graph", () => {
    expect(bubblegomJsonLd["@context"]).toBe("https://schema.org");
    expect(Array.isArray(bubblegomJsonLd["@graph"])).toBe(true);
    expect(bubblegomJsonLd["@graph"].length).toBeGreaterThanOrEqual(4);
  });

  it("should declare Organization entity with logo and social links", () => {
    const org = bubblegomJsonLd["@graph"].find(
      (item) => item["@type"] === "Organization",
    );
    expect(org).toBeDefined();
    expect(org?.name).toBe("Bubblegom");
    expect(org?.url).toBe("https://bubblegom.in/");
    expect(org?.email).toBe("hello@bubblegom.in");
    expect(org?.sameAs).toContain("https://www.instagram.com/bubblegom.in");
  });

  it("should declare WebSite and WebPage entities", () => {
    const website = bubblegomJsonLd["@graph"].find(
      (item) => item["@type"] === "WebSite",
    );
    const webpage = bubblegomJsonLd["@graph"].find(
      (item) => item["@type"] === "WebPage",
    );

    expect(website).toBeDefined();
    expect(webpage).toBeDefined();
    expect(webpage?.url).toBe("https://bubblegom.in/");
  });

  it("should declare all primary development services", () => {
    const services = bubblegomJsonLd["@graph"].filter(
      (item) => item["@type"] === "Service",
    );
    expect(services.length).toBeGreaterThanOrEqual(6);

    const serviceNames = services.map((s) => s.name);
    expect(serviceNames).toContain("Website Development Services");
    expect(serviceNames).toContain("Web Application Development");
    expect(serviceNames).toContain("Mobile Application Development");
  });
});
