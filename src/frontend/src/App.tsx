import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Gauge,
  Globe,
  HeartHandshake,
  Layout,
  Loader2,
  Mail,
  MapPin,
  Menu,
  RefreshCw,
  Search,
  Star,
  Target,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useActor } from "./hooks/useActor";

// ─── Types ───────────────────────────────────────────────────────────────────

type FormState = "idle" | "loading" | "success" | "error";

// ─── Navigation Component ─────────────────────────────────────────────────────

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-[oklch(0.09_0.008_265/0.92)] border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display font-black text-sm tracking-tight shadow-blue-glow-sm">
              SV
            </div>
            <span className="font-display font-bold text-foreground text-base hidden sm:block">
              Sachin<span className="text-[oklch(0.62_0.19_255)]">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-foreground transition-colors rounded-md hover:bg-surface-2"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden md:flex bg-primary hover:bg-[oklch(0.55_0.19_255)] text-primary-foreground font-semibold shadow-blue-glow-sm transition-all hover:shadow-blue-glow"
              onClick={() => handleNavClick("#contact")}
              data-ocid="nav.primary_button"
            >
              Get Free Consultation
            </Button>
            <button
              type="button"
              className="md:hidden p-2 text-text-secondary hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden nav-blur bg-[oklch(0.09_0.008_265/0.97)] border-b border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-foreground transition-colors rounded-lg hover:bg-surface-2"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-3 bg-primary hover:bg-[oklch(0.55_0.19_255)] text-primary-foreground font-semibold"
              onClick={() => {
                handleNavClick("#contact");
              }}
              data-ocid="nav.primary_button"
            >
              Get Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-radial min-h-screen flex items-center pt-20 pb-16 lg:pt-24 relative overflow-hidden"
    >
      {/* Ambient grid */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left — 60% */}
          <div className="lg:col-span-3 flex flex-col gap-6 animate-fade-in-up">
            {/* Badge */}
            <div className="flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.17_145)] animate-pulse" />
              <span className="text-xs font-semibold text-[oklch(0.72_0.17_145)] uppercase tracking-widest">
                Available for US Projects
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.05] text-balance">
              I Build WordPress Websites That{" "}
              <span className="text-gradient-blue">
                Turn Visitors Into Paying Clients
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-text-secondary text-lg lg:text-xl leading-relaxed max-w-xl">
              Helping USA gyms, real estate firms, and businesses get more leads
              with fast, conversion-focused WordPress sites — built by a
              dedicated expert, delivered remotely.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-primary hover:bg-[oklch(0.55_0.19_255)] text-primary-foreground font-bold px-8 shadow-blue-glow transition-all hover:shadow-[0_0_30px_oklch(0.62_0.19_255/0.5)] text-base"
                onClick={() => handleScroll("#portfolio")}
                data-ocid="hero.primary_button"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-[oklch(0.62_0.19_255)] text-foreground hover:text-[oklch(0.75_0.19_255)] font-bold px-8 transition-all bg-transparent text-base"
                onClick={() => handleScroll("#contact")}
                data-ocid="hero.secondary_button"
              >
                Get Free Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-border">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "USA", label: "Clients Served" },
                { value: "3+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-2xl font-black text-[oklch(0.75_0.19_255)]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-text-muted-custom font-medium uppercase tracking-wide mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 40% */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Ambient glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-[oklch(0.62_0.19_255/0.18)] blur-3xl scale-90 pointer-events-none" />

              {/* Photo frame — fixed size, no inline calc */}
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 xl:w-[360px] xl:h-[420px] rounded-2xl overflow-hidden border border-[oklch(0.62_0.19_255/0.5)] shadow-blue-glow">
                <img
                  src="/assets/uploads/IMG_20260306_122647_392-1.webp"
                  alt="Sachin Verma — WordPress Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Subtle gradient overlay at base */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[oklch(0.09_0.008_265/0.7)] to-transparent" />
              </div>

              {/* Corner accent lines */}
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[oklch(0.62_0.19_255)] rounded-tl-lg pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[oklch(0.62_0.19_255)] rounded-br-lg pointer-events-none" />

              {/* Floating "Available" badge */}
              <div className="absolute -bottom-4 -left-4 lg:-left-6 bg-[oklch(0.12_0.01_265)] border border-border rounded-xl px-4 py-2.5 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.17_145)] animate-pulse flex-shrink-0" />
                  <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                    WordPress Expert
                  </span>
                </div>
              </div>

              {/* Floating stats badge */}
              <div className="absolute -top-4 -right-4 lg:-right-6 bg-[oklch(0.12_0.01_265)] border border-border rounded-xl px-4 py-2.5 shadow-xl">
                <div className="text-center">
                  <div className="font-display text-lg font-black text-[oklch(0.75_0.19_255)] leading-none">
                    50+
                  </div>
                  <div className="text-[10px] text-text-muted-custom uppercase tracking-wide mt-0.5">
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

function AboutSection() {
  const skills = [
    "WordPress",
    "Elementor",
    "WooCommerce",
    "SEO",
    "Page Speed",
    "Landing Pages",
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-surface-1"
      data-ocid="about.section"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Profile image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-border shadow-card-hover">
                <img
                  src="/assets/uploads/IMG_20251116_153351_371-1.webp"
                  alt="Sachin Verma"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Accent corner decoration */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[oklch(0.62_0.19_255)] rounded-tl-xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[oklch(0.62_0.19_255)] rounded-br-xl" />
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold text-[oklch(0.62_0.19_255)] uppercase tracking-widest">
                About Me
              </span>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-tight">
                The Developer Behind the Results
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-text-secondary leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Sachin Verma</strong>, a
                WordPress developer based in India with a laser focus on one
                thing: building websites that work hard for your business.
              </p>
              <p>
                Over the past 3+ years, I've helped businesses across the USA —
                especially gyms and real estate firms — launch websites that
                load fast, rank on Google, and convert visitors into leads.
              </p>
              <p>
                I don't just build websites.{" "}
                <strong className="text-foreground">
                  I build growth engines.
                </strong>{" "}
                Every site I deliver is conversion-optimized, mobile-ready, and
                built with a strategy that matches your business goals.
              </p>
              <p>
                I work remotely with USA clients and operate on your timezone
                when needed.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-surface-2 text-[oklch(0.75_0.19_255)] border border-[oklch(0.62_0.19_255/0.3)] hover:border-[oklch(0.62_0.19_255)] transition-colors px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Globe,
    title: "WordPress Website Design",
    description:
      "Get a professional, mobile-first website built to convert. Clean layouts, fast load times, and persuasive copy structure that guides your visitor to take action.",
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    description:
      "High-converting landing pages for your ads and campaigns. Optimized for one goal: turning clicks into leads or sales.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Your old site is costing you clients. I'll rebuild it with a modern design, better UX, and a structure that ranks and converts.",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    description:
      "Slow websites kill conversions. I'll tune your WordPress site for blazing speed — better user experience, better Google rankings.",
  },
  {
    icon: Search,
    title: "SEO Setup",
    description:
      "Start ranking for the keywords that bring buyers. I'll set up your on-page SEO, meta structure, and Google-ready foundation from day one.",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-bold text-[oklch(0.62_0.19_255)] uppercase tracking-widest">
            Services
          </span>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl xl:text-5xl font-black text-foreground">
            What I Can Build For You
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            End-to-end WordPress solutions engineered to generate leads, not
            just look good.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-surface-1 border border-border rounded-xl p-7 flex flex-col gap-5 overflow-hidden transition-all duration-300 hover:border-[oklch(0.62_0.19_255/0.35)] hover:shadow-[0_12px_40px_oklch(0_0_0/0.35),0_0_0_1px_oklch(0.62_0.19_255/0.08)]"
              data-ocid={`services.item.${i + 1}`}
            >
              {/* Left accent line on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-[oklch(0.62_0.19_255)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number + Icon row */}
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl font-black text-[oklch(0.62_0.19_255/0.18)] leading-none select-none group-hover:text-[oklch(0.62_0.19_255/0.3)] transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.62_0.19_255/0.08)] flex items-center justify-center group-hover:bg-[oklch(0.62_0.19_255/0.15)] transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-[oklch(0.75_0.19_255)]" />
                </div>
              </div>

              <div className="flex flex-col gap-2.5 flex-1">
                <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio Section ────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "USA Business Website",
    image: "/assets/generated/project-business.dim_800x500.jpg",
    tags: ["WordPress", "Business"],
    description:
      "A full-service company website built for a US-based consulting firm.",
    problem:
      "They had an outdated site losing credibility with potential clients.",
    result: "40% increase in contact form submissions within 60 days.",
  },
  {
    title: "Gym Website",
    image: "/assets/generated/project-gym.dim_800x500.jpg",
    tags: ["WordPress", "Fitness"],
    description:
      "Performance-focused website for a US gym chain with online class scheduling.",
    problem:
      "No online presence, losing members to competitors with better websites.",
    result: "Membership inquiries tripled after launch with a 2.1s load time.",
  },
  {
    title: "Real Estate Website",
    image: "/assets/generated/project-realestate.dim_800x500.jpg",
    tags: ["WordPress", "Real Estate"],
    description:
      "Property listing site for a US real estate agency with IDX integration.",
    problem:
      "Generic template site that looked untrustworthy to high-end buyers.",
    result: "Agent reported 3x more serious inquiries within the first month.",
  },
];

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-surface-1">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-bold text-[oklch(0.62_0.19_255)] uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl xl:text-5xl font-black text-foreground">
            Work That Delivers Results
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            Real projects. Real outcomes. Built to perform from day one.
          </p>
        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className="bg-background border border-border rounded-2xl overflow-hidden group hover:border-[oklch(0.62_0.19_255/0.5)] transition-all duration-300 hover:shadow-card-hover flex flex-col"
              data-ocid={`portfolio.item.${i + 1}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-[oklch(0.75_0.19_255)] bg-[oklch(0.62_0.19_255/0.1)] px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-border">
                  <div className="flex gap-3 items-start">
                    <span className="text-xs font-bold text-text-muted-custom uppercase tracking-wider min-w-16 pt-0.5">
                      Problem
                    </span>
                    <p className="text-sm text-text-secondary">
                      {project.problem}
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-xs font-bold text-[oklch(0.72_0.17_145)] uppercase tracking-wider min-w-16 pt-0.5">
                      Result
                    </span>
                    <p className="text-sm font-semibold text-foreground">
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Me Section ────────────────────────────────────────────────────

const WHY_FEATURES = [
  {
    icon: Target,
    title: "Conversion-First Design",
    description:
      "Every layout decision I make is backed by conversion principles. Your site will guide visitors to take action — not just browse.",
  },
  {
    icon: Zap,
    title: "Built for Speed",
    description:
      "I optimize every site to load under 2 seconds. Google rewards fast sites. So do customers.",
  },
  {
    icon: Search,
    title: "SEO-Ready From Day One",
    description:
      "No retrofitting. Your site is built with proper heading structure, schema, meta tags, and clean code that search engines love.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "I don't disappear after launch. I'm available for updates, fixes, and growth partnerships long after your site goes live.",
  },
];

function WhyChooseMeSection() {
  return (
    <section
      id="why-choose-me"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      {/* Large decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[oklch(0.62_0.19_255/0.04)] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-bold text-[oklch(0.62_0.19_255)] uppercase tracking-widest">
            Why Me
          </span>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl xl:text-5xl font-black text-foreground">
            Why Businesses Choose Me Over Agencies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {WHY_FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-surface-1 border border-border rounded-2xl p-8 flex gap-5 group hover:border-[oklch(0.62_0.19_255/0.4)] transition-all duration-300"
              data-ocid={`why.item.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[oklch(0.62_0.19_255/0.1)] border border-[oklch(0.62_0.19_255/0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.62_0.19_255/0.15)] transition-colors">
                <feature.icon className="w-5 h-5 text-[oklch(0.75_0.19_255)]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      "Sachin completely transformed our gym's online presence. Within weeks of launching, we saw a surge in membership inquiries. He understood exactly what our business needed.",
    name: "James Whitfield",
    role: "Owner",
    company: "Iron Peak Fitness",
    location: "Texas",
    initials: "JW",
  },
  {
    quote:
      "We needed a real estate site that matched our premium brand. Sachin delivered exactly that — fast, beautiful, and it actually brings in leads. Best investment we made.",
    name: "Sarah Mitchell",
    role: "Broker",
    company: "Cornerstone Realty",
    location: "Florida",
    initials: "SM",
  },
  {
    quote:
      "Professional, fast, and genuinely cares about results. Sachin built our business site and our Google rankings improved significantly within 2 months. Highly recommend.",
    name: "Michael Torres",
    role: "CEO",
    company: "Nexus Consulting",
    location: "New York",
    initials: "MT",
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-surface-1">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-bold text-[oklch(0.62_0.19_255)] uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl xl:text-5xl font-black text-foreground">
            What Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="relative bg-background border border-border rounded-2xl p-8 flex flex-col gap-6 hover:border-[oklch(0.62_0.19_255/0.4)] transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0_0_0/0.3)]"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              {/* Decorative oversized quotation mark */}
              <span
                className="absolute top-5 right-6 font-display text-7xl font-black leading-none text-[oklch(0.62_0.19_255/0.12)] select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 fill-[oklch(0.78_0.18_65)] text-[oklch(0.78_0.18_65)]"
                  />
                ))}
              </div>

              {/* Quote — larger, more weight */}
              <blockquote className="text-foreground/80 text-base leading-relaxed flex-1 relative z-10">
                {t.quote}
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3 pt-5 border-t border-border">
                {/* Gradient-border avatar */}
                <div className="p-[2px] rounded-full bg-gradient-to-br from-[oklch(0.62_0.19_255)] to-[oklch(0.45_0.15_255/0.4)] flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[oklch(0.14_0.012_265)] flex items-center justify-center">
                    <span className="text-xs font-black text-[oklch(0.75_0.19_255)]">
                      {t.initials}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-text-muted-custom mt-0.5">
                    {t.role}, {t.company} · {t.location}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CTASection() {
  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Deep blue gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.12_0.08_265)_0%,oklch(0.10_0.06_255)_50%,oklch(0.08_0.04_265)_100%)]" />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      {/* Central radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[oklch(0.62_0.19_255/0.06)] blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 items-center">
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-tight text-balance">
            Your Competitors Are Already Online.{" "}
            <span className="text-gradient-blue">Are You Keeping Up?</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Every day without a high-performing website is a day your
            competitors win clients that could have been yours. Let's change
            that.
          </p>
          <Button
            size="lg"
            className="mt-4 bg-primary hover:bg-[oklch(0.55_0.19_255)] text-primary-foreground font-bold px-10 py-4 text-base shadow-blue-glow hover:shadow-[0_0_40px_oklch(0.62_0.19_255/0.5)] transition-all"
            onClick={handleScroll}
            data-ocid="cta.primary_button"
          >
            Let's Build Your Website
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const { actor } = useActor();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setFormState("loading");
    try {
      await actor?.submit(
        name.trim(),
        email.trim(),
        message.trim(),
        BigInt(Date.now()),
      );
      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setFormState("error");
    }
  };

  const resetForm = () => setFormState("idle");

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-bold text-[oklch(0.62_0.19_255)] uppercase tracking-widest">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl xl:text-5xl font-black text-foreground">
            Let's Talk Business
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            Ready to launch a website that actually works? Fill out the form and
            I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            {formState === "success" ? (
              <div
                className="flex flex-col items-center justify-center gap-4 py-16 text-center border border-[oklch(0.72_0.17_145/0.3)] bg-[oklch(0.72_0.17_145/0.05)] rounded-2xl"
                data-ocid="contact.success_state"
              >
                <CheckCircle2 className="w-12 h-12 text-[oklch(0.72_0.17_145)]" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Message Sent!
                </h3>
                <p className="text-text-secondary max-w-sm">
                  Thanks for reaching out. I'll review your message and get back
                  to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-2 border-border"
                  onClick={resetForm}
                  data-ocid="contact.secondary_button"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                {formState === "error" && (
                  <div
                    className="flex items-center gap-3 p-4 bg-[oklch(0.65_0.22_25/0.1)] border border-[oklch(0.65_0.22_25/0.3)] rounded-xl text-sm text-[oklch(0.82_0.12_25)]"
                    data-ocid="contact.error_state"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>
                      Something went wrong. Please try again or reach out
                      directly via email.
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-semibold text-foreground"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={formState === "loading"}
                    className="bg-surface-1 border-border focus:border-[oklch(0.62_0.19_255)] text-foreground placeholder:text-text-muted-custom h-11"
                    data-ocid="contact.input"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-semibold text-foreground"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={formState === "loading"}
                    className="bg-surface-1 border-border focus:border-[oklch(0.62_0.19_255)] text-foreground placeholder:text-text-muted-custom h-11"
                    data-ocid="contact.input"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-foreground"
                  >
                    Tell Me About Your Project
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="I need a WordPress website for my gym business in Texas. We want to capture leads and show class schedules..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={formState === "loading"}
                    rows={5}
                    className="bg-surface-1 border-border focus:border-[oklch(0.62_0.19_255)] text-foreground placeholder:text-text-muted-custom resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={
                    formState === "loading" || !name || !email || !message
                  }
                  className="bg-primary hover:bg-[oklch(0.55_0.19_255)] text-primary-foreground font-bold shadow-blue-glow-sm hover:shadow-blue-glow transition-all"
                  data-ocid="contact.submit_button"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a
              href="mailto:sachinverma10x@gmail.com"
              className="flex items-start gap-4 p-5 bg-surface-1 border border-border rounded-xl hover:border-[oklch(0.62_0.19_255/0.5)] transition-all group"
              data-ocid="contact.link"
            >
              <div className="w-10 h-10 rounded-lg bg-[oklch(0.62_0.19_255/0.1)] border border-[oklch(0.62_0.19_255/0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.62_0.19_255/0.2)] transition-colors">
                <Mail className="w-4 h-4 text-[oklch(0.75_0.19_255)]" />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-xs font-semibold text-text-muted-custom uppercase tracking-wide">
                  Email
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-[oklch(0.75_0.19_255)] transition-colors break-all">
                  sachinverma10x@gmail.com
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-text-muted-custom flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://wa.me/918960837816"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-surface-1 border border-border rounded-xl hover:border-[oklch(0.72_0.17_145/0.5)] transition-all group"
              data-ocid="contact.link"
            >
              <div className="w-10 h-10 rounded-lg bg-[oklch(0.72_0.17_145/0.1)] border border-[oklch(0.72_0.17_145/0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.72_0.17_145/0.2)] transition-colors">
                <SiWhatsapp className="w-4 h-4 text-[oklch(0.72_0.17_145)]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-text-muted-custom uppercase tracking-wide">
                  WhatsApp
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-[oklch(0.72_0.17_145)] transition-colors">
                  +91 8960837816
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-text-muted-custom flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="flex items-start gap-4 p-5 bg-surface-1 border border-border rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[oklch(0.62_0.19_255/0.1)] border border-[oklch(0.62_0.19_255/0.2)] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[oklch(0.75_0.19_255)]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-text-muted-custom uppercase tracking-wide">
                  Location
                </span>
                <span className="text-sm font-medium text-foreground">
                  India — Working with USA Clients
                </span>
                <span className="text-xs text-text-muted-custom">
                  Available on US Eastern & Pacific time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const currentYear = new Date().getFullYear();
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-1 border-t border-border py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display font-black text-xs">
              SV
            </div>
            <span className="font-display font-bold text-foreground text-sm">
              Sachin Verma{" "}
              <span className="text-text-muted-custom font-normal">
                — WordPress Developer
              </span>
            </span>
          </div>

          {/* Nav */}
          <nav
            className="flex items-center gap-6"
            aria-label="Footer navigation"
          >
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="text-xs text-text-muted-custom hover:text-foreground transition-colors"
                data-ocid="footer.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Attribution */}
          <p className="text-xs text-text-muted-custom text-center lg:text-right">
            © {currentYear} Sachin Verma. All rights reserved.{" "}
            <span className="block sm:inline">
              Built with{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.62_0.19_255)] hover:text-[oklch(0.75_0.19_255)] transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseMeSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
