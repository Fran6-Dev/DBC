import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/sections/ServiceCard";
import ValueCard from "../components/sections/ValueCard";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import ProjectCard from "../components/sections/ProjectCard";
import TestimonialCard from "../components/sections/TestimonialCard";
import CTASection from "../components/sections/CTASection";
import LocalAreaSection from "../components/sections/LocalAreaSection";
import { services } from "../data/services";
import { values, processSteps } from "../data/values";
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import { buildLocalBusinessSchema } from "../lib/structuredData";
import "./Home.css";

export default function Home() {
  return (
    <>
      <SEO
        title="Agence de consulting à Montargis — SEO, site web, développement commercial"
        description="DBC est une agence de consulting basée à Montargis qui accompagne les entreprises du Loiret, d'Orléans et de la région Centre-Val de Loire : SEO, création de site web, Google Business, community management, identité visuelle et développement commercial."
        path="/"
        jsonLd={buildLocalBusinessSchema()}
      />

      {/* HERO */}
      <section className="hero">
        <span className="ring-decoration hero__ring hero__ring--1" aria-hidden="true" />
        <span className="ring-decoration ring-decoration--terracotta hero__ring hero__ring--2" aria-hidden="true" />
        <div className="container hero__inner">
          <Reveal>
            <span className="eyebrow hero__eyebrow">Développement Business Consulting</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="hero__title">
              Votre <span className="accent">partenaire de confiance</span> pour développer
              votre activité.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="hero__lead text-lead">
              Nous accompagnons les entreprises, indépendants et entrepreneurs dans leur
              développement digital et commercial.
            </p>
          </Reveal>
          <Reveal delay={3} className="hero__actions">
            <Button to="/contact" variant="accent" size="lg">
              Parlons de votre projet
            </Button>
            <Button to="/services" variant="outline" size="lg" icon={false}>
              Découvrir nos expertises
            </Button>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services-apercu">
        <div className="container">
          <SectionTitle
            eyebrow="Nos expertises"
            title="Des expertises pensées pour faire grandir votre activité."
            lead="DBC accompagne ses clients de leur visibilité en ligne jusqu'à leur développement commercial, avec une approche claire et sur mesure."
          />
          <div className="grid grid-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} delay={Math.min((index % 3) + 1, 5)} />
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI DBC */}
      <section className="section section--bg-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Pourquoi DBC"
            title="Plus qu'un prestataire, un véritable partenaire."
            lead="Notre approche repose sur quatre principes simples, qui guident chacun de nos accompagnements."
          />
          <div className="grid grid-4 values-grid">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index + 1} delay={Math.min(index + 1, 5)} />
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Notre méthode"
            title="Une méthode simple, pensée pour des résultats concrets."
            lead="Chaque accompagnement suit un processus clair, pour avancer avec vous en toute transparence."
          />
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <LocalAreaSection />

      {/* RÉALISATIONS */}
      <section className="section section--bg-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Réalisations"
            title="Des projets pensés pour faire la différence."
            lead="Un aperçu de nos accompagnements. Cet espace est amené à évoluer avec de nouveaux projets clients."
          />
          <div className="grid grid-3">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={Math.min(index + 1, 5)} />
            ))}
          </div>
          <Reveal className="home__realisations-cta">
            <Button to="/realisations" variant="outline" icon={false}>
              Voir toutes nos réalisations
            </Button>
          </Reveal>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Témoignages"
            title="La confiance de nos clients, notre meilleure motivation."
          />
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.author + index} testimonial={testimonial} delay={Math.min(index + 1, 5)} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
