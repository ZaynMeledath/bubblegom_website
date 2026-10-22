import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Boxes,
  Check,
  CheckCircle2,
  Code2,
  Compass,
  Copy,
  Globe,
  Layers,
  Mail,
  Menu,
  Palette,
  Scale,
  Smartphone,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { BubblegomScene } from "./BubblegomScene";

interface Capability {
  id: string;
  title: string;
  category: string;
  body: string;
  deliverables: string[];
  techStack: string[];
  form: "capsule" | "lens" | "ring" | "nodes" | "tile" | "stack";
}

const capabilities: Capability[] = [
  {
    id: "01",
    title: "Websites",
    category: "Marketing & Corporate",
    body: "High-quality marketing websites, corporate websites, landing pages, portfolios, and custom web experiences designed to captivate visitors and convert.",
    deliverables: [
      "Marketing & Corporate Sites",
      "Interactive Landing Pages",
      "Portfolios & Showcase Sites",
      "Custom 3D & WebGL Experiences",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    form: "capsule",
  },
  {
    id: "02",
    title: "Web Applications",
    category: "Cloud Platforms & Tools",
    body: "Scalable web applications built around specific business requirements, complex data workflows, multi-tenant architectures, and real-time collaboration.",
    deliverables: [
      "Custom SaaS Platforms",
      "Internal Business Dashboards",
      "Real-Time Data Portals",
      "API Integrations & Cloud Backends",
    ],
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    form: "lens",
  },
  {
    id: "03",
    title: "Mobile Applications",
    category: "iOS & Android",
    body: "iOS and Android applications with polished user experiences, tactile micro-interactions, reliable offline sync, and native performance.",
    deliverables: [
      "iOS & Android Applications",
      "Cross-Platform Codebases",
      "Offline-First Data Sync",
      "App Store & Play Store Deployment",
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin"],
    form: "ring",
  },
  {
    id: "04",
    title: "Desktop Applications",
    category: "macOS & Windows",
    body: "Custom desktop applications designed for business operations, productivity, offline capability, and specialized computational workflows.",
    deliverables: [
      "Cross-Platform Desktop Apps",
      "Local Hardware & OS APIs",
      "Offline-First Architecture",
      "High-Performance Data Processing",
    ],
    techStack: ["Electron", "Tauri", "TypeScript", "Rust"],
    form: "stack",
  },
  {
    id: "05",
    title: "Custom Software",
    category: "Bespoke Solutions",
    body: "Software designed specifically around your unique operational requirements rather than forcing your business into an existing rigid product.",
    deliverables: [
      "Bespoke Business Systems",
      "Workflow Automation Tools",
      "Secure API Architecture",
      "Legacy Software Modernization",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    form: "nodes",
  },
  {
    id: "06",
    title: "UI/UX Design",
    category: "Interface & Experience",
    body: "Thoughtful interfaces and user experiences that make digital products intuitive, attractive, brand-aligned, and effortless to use.",
    deliverables: [
      "User Journey Mapping & Wireframes",
      "High-Fidelity Interface Design",
      "Component Design Systems",
      "Interactive Functional Prototypes",
    ],
    techStack: ["Figma", "Design Tokens", "Prototypes", "User Testing"],
    form: "tile",
  },
  {
    id: "07",
    title: "AI & Automation",
    category: "Intelligent Workflows",
    body: "AI-powered features, intelligent workflows, and custom automation that reduce repetitive manual work and improve business processes.",
    deliverables: [
      "Workflow Automation Pipelines",
      "Intelligent Document Processing",
      "Custom Assistant Integrations",
      "Internal Knowledge Retrieval",
    ],
    techStack: ["Python", "FastAPI", "OpenAI / Claude APIs", "Vector DBs"],
    form: "lens",
  },
];

interface TechItem {
  name: string;
  category: "frontend" | "mobile" | "backend" | "cloud";
  role: string;
  description: string;
}

const techItems: TechItem[] = [
  {
    name: "React & Next.js",
    category: "frontend",
    role: "Modern Web & App Frontends",
    description:
      "Fast, SEO-optimized web applications and sites with server rendering, instant navigation, and modular component architecture.",
  },
  {
    name: "Flutter & React Native",
    category: "mobile",
    role: "Cross-Platform Mobile",
    description:
      "Production-grade mobile apps for iOS and Android with native feel, smooth 60fps animations, and shared codebases.",
  },
  {
    name: "Three.js & WebGL",
    category: "frontend",
    role: "Interactive 3D Graphics",
    description:
      "Hardware-accelerated 3D graphics, interactive canvas experiences, and immersive visual storytelling directly in the browser.",
  },
  {
    name: "Node.js & TypeScript",
    category: "backend",
    role: "Robust Server Runtimes",
    description:
      "Strictly typed backend services, resilient REST & GraphQL APIs, and real-time WebSocket communication channels.",
  },
  {
    name: "Python & FastAPI",
    category: "backend",
    role: "High-Performance Services & AI",
    description:
      "Rapid API development, data processing engines, automation scripts, and custom AI feature integrations.",
  },
  {
    name: "PostgreSQL & Firebase",
    category: "backend",
    role: "Relational & Real-Time Data",
    description:
      "Reliable relational data modeling, ACID transactions, and instant real-time sync for collaborative applications.",
  },
  {
    name: "AWS & Docker",
    category: "cloud",
    role: "Cloud Infrastructure & Scale",
    description:
      "Containerized deployments, automated CI/CD pipelines, and secure cloud environments tailored to client workloads.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    role: "Design Systems & Responsive UI",
    description:
      "Maintainable, consistent design token systems and responsive styling across mobile, tablet, and desktop viewports.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    duration: "Stage 01",
    tagline: "Understand the Business & Goals",
    description:
      "We understand your business, project goals, users, and core technical requirements to establish clear objectives from day one.",
    deliverables: [
      "Project Opportunity Brief",
      "User & Workflow Profiling",
      "Technical Feasibility Study",
      "Key Success Metrics",
    ],
  },
  {
    step: "02",
    title: "Plan",
    duration: "Stage 02",
    tagline: "Define Product, Scope & Architecture",
    description:
      "Define the product features, choose the optimal technology stack, outline the full scope, and create a realistic development roadmap.",
    deliverables: [
      "System Architecture Blueprint",
      "Feature Scope & Requirements",
      "Technology Selection",
      "Milestone Delivery Roadmap",
    ],
  },
  {
    step: "03",
    title: "Design",
    duration: "Stage 03",
    tagline: "Create UX & Visual Direction",
    description:
      "Create intuitive user experiences, interactive prototypes, and a distinctive visual identity that makes your product a joy to use.",
    deliverables: [
      "User Journey Wireframes",
      "High-Fidelity Interface Screens",
      "Interactive Functional Prototypes",
      "Cohesive Design Token System",
    ],
  },
  {
    step: "04",
    title: "Build",
    duration: "Stage 04",
    tagline: "Develop with Scalable Technology",
    description:
      "Develop the product with clean, scalable, maintainable technology, strict type safety, and regular working demos.",
    deliverables: [
      "Clean Production Codebase",
      "API & Third-Party Integrations",
      "Strict End-to-End Type Safety",
      "Continuous Staging Demos",
    ],
  },
  {
    step: "05",
    title: "Test",
    duration: "Stage 05",
    tagline: "Validate Performance & Reliability",
    description:
      "Validate functionality, performance, responsiveness, and reliability across devices and real-world conditions before going live.",
    deliverables: [
      "Cross-Device & Browser QA",
      "Performance & Speed Audits",
      "Security & Load Validation",
      "Comprehensive Bug Remediation",
    ],
  },
  {
    step: "06",
    title: "Launch",
    duration: "Stage 06",
    tagline: "Deploy & Support Real Users",
    description:
      "Deploy the product and help take it from development into the hands of real users with ongoing improvements and support.",
    deliverables: [
      "Production Cloud Deployment",
      "Domain & DNS Configuration",
      "Technical Handoff & Docs",
      "Post-Launch Ongoing Support",
    ],
  },
];

const whyPoints = [
  {
    num: "01",
    title: "Built Around Your Business",
    description:
      "We don't force your requirements into a pre-built product or rigid template. We design and build around what your business actually needs.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Design & Development Under One Roof",
    description:
      "From user experience and interface design to engineering and deployment, our team ensures every layer works together seamlessly.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Modern Technology",
    description:
      "We use modern technologies and proven development practices to build reliable, maintainable, and future-proof software.",
    icon: Code2,
  },
  {
    num: "04",
    title: "Built to Scale",
    description:
      "Projects should never become technical dead ends. We build with clean architecture, future growth, and easy evolution in mind.",
    icon: Scale,
  },
  {
    num: "05",
    title: "Direct Collaboration",
    description:
      "Work closely with the actual engineers and designers building your product instead of getting lost between layers of communication.",
    icon: Users,
  },
];

function BrandMark({
  small = false,
  className = "",
  size,
}: {
  small?: boolean;
  className?: string;
  size?: number;
}) {
  const pixelSize = size ?? (small ? 32 : 54);
  return (
    <img
      src="/bubblegom_logo.png"
      alt="Bubblegom"
      width={pixelSize}
      height={pixelSize}
      className={`brand-logo-img ${small ? "brand-logo-small" : ""} ${className}`.trim()}
      loading="eager"
      decoding="async"
    />
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              node.dataset["visible"] = "true";
            }, delay);
          } else {
            node.dataset["visible"] = "true";
          }
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    if (!heroCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show mobile drawer CTA only if hero CTA is not visible because user scrolled past it
        const isPastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setShowMobileCta(isPastHero);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      ref={navRef}
      className={`site-nav-wrapper ${scrolled ? "site-nav-scrolled" : ""}`}
    >
      <header className="site-nav">
        <a href="#top" className="brand-lockup" aria-label="Bubblegom home">
          <BrandMark small />
          <span>
            bubble<span>gom</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link-item">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <Button asChild variant="luminous" size="sm" className="nav-cta">
            <a href="#contact">
              Start a Project <ArrowUpRight className="ml-1 size-3.5" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </header>

      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <div className="mobile-menu-inner">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {showMobileCta && (
              <a
                href="#contact"
                className="mobile-nav-cta"
                onClick={() => setOpen(false)}
              >
                Start a Project <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}

function CapabilityObject({ form }: { form: Capability["form"] }) {
  return (
    <div className="cap-object-wrap" aria-hidden="true">
      <div className={`cap-object cap-${form}`}>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

interface MinimalServiceItem {
  title: string;
  shortLabel: string;
  icon: typeof Globe;
  accentClass: string;
}

const contactServices: MinimalServiceItem[] = [
  {
    title: "Web Development",
    shortLabel: "Websites & platforms",
    icon: Globe,
    accentClass: "accent-cyan",
  },
  {
    title: "Mobile Applications",
    shortLabel: "iOS & Android apps",
    icon: Smartphone,
    accentClass: "accent-pink",
  },
  {
    title: "Custom Software",
    shortLabel: "Bespoke systems",
    icon: Boxes,
    accentClass: "accent-purple",
  },
  {
    title: "UI/UX Design",
    shortLabel: "Interfaces & prototypes",
    icon: Palette,
    accentClass: "accent-pink-cyan",
  },
];

export function BubblegomSite() {
  const isMobile = useIsMobile();
  const [selectedTech, setSelectedTech] = useState<TechItem>(techItems[0]!);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("hello@bubblegom.in");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <main id="top" className="site-shell">
      <Navigation />

      {/* HERO SECTION */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-ambient" aria-hidden="true" />
        {!isMobile && (
          <div className="hero-scene">
            <BubblegomScene />
          </div>
        )}

        <div className="hero-copy">
          <div className="hero-badge">
            <span className="badge-pulse" />
            <span>DIGITAL PRODUCTS, BUILT RIGHT.</span>
          </div>

          <h1 id="hero-title">
            WE BUILD THE
            <br />
            DIGITAL PRODUCTS
            <br />
            <em>YOUR BUSINESS NEEDS.</em>
          </h1>

          <p className="hero-description">
            From websites and mobile apps to desktop software and custom digital
            solutions, Bubblegom helps businesses turn ideas into polished,
            reliable products.
          </p>

          <div className="hero-actions">
            <Button asChild variant="luminous" size="hero">
              <a href="#contact" id="hero-cta">
                Start a Project <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="hero-metrics-strip">
            <div className="hero-metric">
              <span className="hero-metric-val">Idea → Launch</span>
              <span className="hero-metric-lbl">Full-Lifecycle Delivery</span>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric">
              <span className="hero-metric-val">100% Bespoke</span>
              <span className="hero-metric-lbl">Tailored Architecture</span>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric">
              <span className="hero-metric-val">Multi-Platform</span>
              <span className="hero-metric-lbl">Web · Mobile · Desktop</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section section-pad">
        <Reveal className="about-grid">
          <div>
            <p className="section-index">About Bubblegom</p>
            <h2>
              We build what
              <br />
              businesses <span>need.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              Every business has different challenges, which means off-the-shelf
              software isn&apos;t always the answer. Bubblegom works with
              clients to design and develop digital products tailored to their
              goals, workflows, and customers.
            </p>
            <p>
              Whether you are starting from a raw concept or need to build and
              scale a critical system, we handle the entire journey: from idea
              and planning to design, development, testing, deployment, and
              ongoing improvements.
            </p>
          </div>
        </Reveal>

        {/* Studio Lifecycle Pillars */}
        <Reveal className="pillars-grid" delay={150}>
          <div className="pillar-card">
            <div className="pillar-icon">
              <Compass className="size-6 text-brand-pink" />
            </div>
            <h3>01 / Idea to Deployment</h3>
            <p>
              We guide projects through every phase—discovery, architecture,
              interface design, engineering, testing, and cloud launch—so you
              have a reliable partner every step of the way.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <Code2 className="size-6 text-brand-purple" />
            </div>
            <h3>02 / Bespoke by Design</h3>
            <p>
              No cookie-cutter templates or generic SaaS themes. Every solution
              is purpose-built around your specific business logic, brand
              identity, and operating requirements.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <Zap className="size-6 text-brand-cyan" />
            </div>
            <h3>03 / Engineering Quality</h3>
            <p>
              We use modern technologies and clean development practices to
              deliver fast, secure, maintainable software that scales
              effortlessly as your business grows.
            </p>
          </div>
        </Reveal>

        {/* Impact Numbers */}
        <Reveal className="metrics-bar" delay={250}>
          <div className="metric-box">
            <span className="metric-number">100%</span>
            <span className="metric-label">Custom Codebase Ownership</span>
          </div>
          <div className="metric-box">
            <span className="metric-number">&lt;50ms</span>
            <span className="metric-label">Optimized Edge Performance</span>
          </div>
          <div className="metric-box">
            <span className="metric-number">End-to-End</span>
            <span className="metric-label">Idea to Production Delivery</span>
          </div>
          <div className="metric-box">
            <span className="metric-number">Direct</span>
            <span className="metric-label">Senior Engineer Collaboration</span>
          </div>
        </Reveal>

        <div className="about-object object-one" aria-hidden="true" />
        <div className="about-object object-two" aria-hidden="true" />
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="capabilities-section section-pad">
        <Reveal className="section-heading">
          <p className="section-index">What We Build</p>
          <h2>
            Digital products,
            <br />
            crafted for <span>your business.</span>
          </h2>
          <p className="section-subtitle">
            From high-impact marketing websites to scalable cloud applications
            and mobile apps, we design and develop software tailored to your
            exact needs.
          </p>
        </Reveal>

        <div className="capability-list">
          {capabilities.map((item) => (
            <Reveal className="capability-row" key={item.id}>
              <span className="cap-id">{item.id}</span>
              <CapabilityObject form={item.form} />

              <div className="cap-content">
                <div className="cap-meta-tag">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>

                <div className="cap-details">
                  <div className="cap-deliverables">
                    {item.deliverables.map((d) => (
                      <span key={d} className="detail-tag">
                        <CheckCircle2 className="size-3 text-brand-cyan" /> {d}
                      </span>
                    ))}
                  </div>

                  <div className="cap-stack">
                    {item.techStack.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cap-action">
                <a
                  href="#contact"
                  className="cap-inquire-link"
                  aria-label={`Inquire about ${item.title}`}
                >
                  <ArrowUpRight className="cap-arrow" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="process-section section-pad">
        <Reveal className="section-heading process-heading">
          <p className="section-index">How We Work</p>
          <h2>
            From Idea
            <br />
            to <span>Launch.</span>
          </h2>
          <p className="section-subtitle">
            A structured, transparent 6-stage development process that ensures
            clarity, velocity, and high-quality software delivery at every step.
          </p>
        </Reveal>

        <div className="process-active-panel">
          <div className="process-steps">
            {processSteps.map((p, idx) => (
              <Reveal className="process-step" key={p.step} delay={idx * 60}>
                <div className="step-header">
                  <span className="step-num">{p.step}</span>
                  <span className="step-duration">{p.duration}</span>
                </div>

                <i className="step-marker" />

                <h3>{p.title}</h3>
                <h4 className="step-tagline">{p.tagline}</h4>
                <p>{p.description}</p>

                <div className="step-deliverables-list">
                  {p.deliverables.map((item) => (
                    <span key={item} className="step-deliverable-item">
                      <CheckCircle2 className="size-3 text-brand-purple" />{" "}
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BUBBLEGOM SECTION */}
      <section id="why" className="why-section section-pad">
        <Reveal className="section-heading">
          <p className="section-index">Why Bubblegom</p>
          <h2>
            Why work
            <br />
            with <span>us?</span>
          </h2>
          <p className="section-subtitle">
            We combine the creative craft of a design studio with the rigorous
            depth of an experienced engineering team.
          </p>
        </Reveal>

        <Reveal className="why-grid" delay={150}>
          {whyPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div className="why-card" key={item.num}>
                <div className="why-card-top">
                  <div className="why-icon">
                    <Icon className="size-6" />
                  </div>
                  <span className="why-num">{item.num}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </Reveal>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section id="technology" className="technology-section section-pad">
        <Reveal className="tech-copy">
          <p className="section-index">Technical Expertise</p>
          <h2>
            Built With The
            <br />
            <span>Right Technology.</span>
          </h2>
          <p>
            We choose the technology based on the product — not the other way
            around. We use battle-tested, modern technologies to build reliable,
            scalable, and maintainable software.
          </p>

          <div className="tech-inspector-card">
            <div className="inspector-header">
              <span className="inspector-tag">
                {selectedTech.category.toUpperCase()}
              </span>
              <span className="inspector-role">{selectedTech.role}</span>
            </div>
            <h4 className="inspector-title">{selectedTech.name}</h4>
            <p className="inspector-desc">{selectedTech.description}</p>
          </div>
        </Reveal>

        <Reveal className="tech-network">
          <svg viewBox="0 0 720 520" aria-hidden="true">
            <defs>
              <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  stopColor="var(--brand-pink)"
                  stopOpacity="0.4"
                />
                <stop
                  offset="50%"
                  stopColor="var(--brand-purple)"
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  stopColor="var(--brand-cyan)"
                  stopOpacity="0.5"
                />
              </linearGradient>
            </defs>
            <path d="M100 110 320 80 610 145 560 370 330 445 120 370 100 110M320 80 330 445M100 110 560 370M610 145 120 370M320 80 120 370M610 145 330 445" />
          </svg>

          {techItems.map((item, index) => {
            const isSelected = selectedTech.name === item.name;
            return (
              <button
                key={item.name}
                type="button"
                className={`tech-node node-${index + 1} ${isSelected ? "tech-node-active" : ""}`}
                onClick={() => setSelectedTech(item)}
                onMouseEnter={() => setSelectedTech(item)}
              >
                <span className="node-dot" />
                {item.name}
              </button>
            );
          })}

          <div className="network-core">
            <BrandMark size={46} />
            <div className="core-ping" />
          </div>
        </Reveal>
      </section>

      {/* CTA SECTION */}
      <section
        className="statement-section section-pad"
        aria-label="Project Call to Action"
      >
        <div className="statement-glow" aria-hidden="true" />
        <div className="statement-grid">
          <Reveal className="statement-mark-col">
            <div className="statement-mark">
              <BubblegomScene compact />
            </div>
          </Reveal>

          <Reveal className="statement-copy" delay={120}>
            <p className="statement-eyebrow">Have a project in mind?</p>
            <h2>
              Let&apos;s
              <br />
              <span>build it.</span>
            </h2>
            <p className="statement-manifesto">
              Tell us what you&apos;re working on, what you&apos;re trying to
              solve, or simply share your idea. We&apos;ll figure out the next
              step together.
            </p>
            <div className="statement-action">
              <Button asChild variant="luminous" size="hero">
                <a href="#contact">
                  Start a Project <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section section-pad">
        <div className="contact-ambient" aria-hidden="true" />
        <Reveal className="contact-grid">
          <div className="contact-intro">
            <p className="contact-kicker">
              <span className="kicker-dot" /> START A PROJECT
            </p>
            <h2 className="contact-heading">
              Let&apos;s Build
              <br />
              <span>Something.</span>
            </h2>
            <p className="contact-lead">
              Have an upcoming project, a product to build, or a software
              challenge to solve? Tell us what you&apos;re looking to achieve,
              and we&apos;ll help outline the direct path forward.
            </p>

            <div className="contact-actions">
              <div className="contact-pill contact-email-pill">
                <a
                  href="mailto:hello@bubblegom.in?subject=New%20Project%20Inquiry%20%E2%80%94%20Bubblegom"
                  className="contact-pill-main-link"
                >
                  <Mail className="contact-mail-icon shrink-0" />
                  <span>hello@bubblegom.in</span>
                  <ArrowUpRight className="contact-pill-arrow shrink-0" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="contact-pill-copy-btn"
                  title={copiedEmail ? "Copied to clipboard!" : "Copy email address"}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="size-4 text-emerald-400" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>

              <a
                href="https://www.instagram.com/bubblegom.in"
                target="_blank"
                rel="noreferrer"
                className="contact-pill contact-instagram-pill"
                aria-label="Follow Bubblegom on Instagram"
              >
                <img
                  src="/instagram.svg"
                  alt=""
                  aria-hidden="true"
                  className="contact-ig-icon shrink-0"
                  width={18}
                  height={18}
                />
                <span>@bubblegom.in</span>
                <ArrowUpRight className="contact-pill-arrow shrink-0" />
              </a>
            </div>

            <div className="contact-meta-strip">
              <div className="contact-meta-item">
                <span className="contact-status-dot" aria-hidden="true" />
                <span>Available for new projects</span>
              </div>
              <span className="contact-meta-divider" aria-hidden="true">|</span>
              <div className="contact-meta-item">
                <Globe className="size-3.5 shrink-0 text-muted-foreground/80" />
                <span>Working worldwide</span>
              </div>
            </div>
          </div>

          <div className="contact-services-overview">
            <div className="services-overview-header">
              <span className="services-overview-kicker">
                <span className="header-dot" /> WHAT WE DO
              </span>
              <span className="services-overview-note">
                End-to-end delivery
              </span>
            </div>

            <div className="services-compact-grid">
              {contactServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`service-compact-item ${service.accentClass}`}
                  >
                    <div className="service-compact-icon">
                      <IconComponent className="size-4" />
                    </div>
                    <div className="service-compact-body">
                      <h3 className="service-compact-title">{service.title}</h3>
                      <p className="service-compact-label">
                        {service.shortLabel}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* COMPREHENSIVE STUDIO FOOTER */}
      <footer className="site-footer">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <a href="#top" className="brand-lockup">
              <BrandMark small />
              <span>
                bubble<span>gom</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              Digital products, built right. We design and develop websites, web
              applications, mobile apps, desktop software, and custom digital
              solutions for businesses.
            </p>
            <div className="footer-badge">
              <span className="badge-pulse" />
              <span>Software Development Studio</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4>Navigation</h4>
            <a href="#top">Top</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#why">Why Us</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-nav-col">
            <h4>Services</h4>
            <a href="#services">Websites</a>
            <a href="#services">Web Applications</a>
            <a href="#services">Mobile Applications</a>
            <a href="#services">Desktop Applications</a>
            <a href="#services">Custom Software</a>
            <a href="#services">UI/UX Design</a>
          </div>

          <div className="footer-nav-col">
            <h4>Get in Touch</h4>
            <a href="mailto:hello@bubblegom.in" className="footer-highlight">
              <Mail className="size-3.5 shrink-0" />
              <span>hello@bubblegom.in</span>
            </a>
            <a
              href="https://www.instagram.com/bubblegom.in"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="social-icon-img"
                width={16}
                height={16}
              />
              <span>bubblegom.in</span>
            </a>
            <span className="text-xs text-muted-foreground mt-2">
              Websites · Web Apps · Mobile Apps · Desktop Apps · Custom Software
            </span>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Bubblegom. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#top">Privacy Policy</a>
            <span className="bullet">·</span>
            <a href="#top">Terms of Service</a>
            <span className="bullet">·</span>
            <a href="#contact">Start a Project</a>
          </div>
          <a href="#top" className="back-top" aria-label="Back to top">
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </footer>
    </main>
  );
}
