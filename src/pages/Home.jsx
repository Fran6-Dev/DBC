import { Link } from "react-router-dom";
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
import { values } from "../data/values";
import { piliers } from "../data/businessBooster";
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import { siteConfig } from "../data/siteConfig";
import { buildLocalBusinessSchema } from "../lib/structuredData";
import "./Home.css";

export default function Home() {
  return (
    <>
      <SEO
        title="DBC — Business Booster 90, votre stratégie de développement à Montargis et Orléans"
        description="DBC accompagne les artisans, commerçants, TPE et PME de Montargis, Amilly, Châlette-sur-Loing, Orléans, Olivet et de tout le Loiret avec Business Booster 90 : visibilité digitale, acquisition de clients et gestion administrative, en 90 jours."
        path="/"
        jsonLd={buildLocalBusinessSchema()}
      />

      {/* HERO */}
      <section className="hero">
        <span className="ring-decoration hero__ring hero__ring--1" aria-hidden="true" />
        <span className="ring-decoration ring-decoration--terracotta hero__ring hero__ring--2" aria-hidden="true" />
        <div className="container hero__inner">
          <Reveal>
            <span className="eyebrow hero__eyebrow">Business Booster 90</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="hero__title">
              Développez votre activité,{" "}
              <span className="accent">sans y consacrer vos journées</span>.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="hero__lead text-lead">
              DBC accompagne les {siteConfig.audience} de Montargis et du Loiret avec Business
              Booster 90, un programme sur 90 jours pour gagner en visibilité, trouver de
              nouveaux clients et alléger votre gestion administrative.
            </p>
          </Reveal>
          <Reveal delay={3} className="hero__actions">
            <Button to="/business-booster-90#audit-gratuit" variant="accent" size="lg">
              Je réserve mon audit gratuit
            </Button>
            <Button to="/business-booster-90" variant="outline" size="lg" icon={false}>
              Découvrir Business Booster 90
            </Button>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMME — 3 PILIERS */}
      <section className="section" id="programme-apercu">
        <div className="container">
          <SectionTitle
            eyebrow="Le programme"
            title="Business Booster 90 : trois piliers, un seul objectif."
            lead="Un accompagnement structuré sur 90 jours, adapté à votre activité — pas une prestation standardisée."
          />
          <ProcessTimeline steps={piliers} />
          <Reveal delay={2} className="home__realisations-cta">
            <Link to="/business-booster-90" className="btn btn--ghost">
              Découvrir le programme en détail →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--bg-alt" id="services-apercu">
        <div className="container">
          <SectionTitle
            eyebrow="Nos expertises"
            title="Les leviers activés selon vos besoins."
            lead="Visibilité digitale, acquisition, gestion administrative : chaque levier de Business Booster 90 s'appuie sur une expertise dédiée."
          />
          <div className="grid grid-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} delay={Math.min((index % 3) + 1, 5)} />
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI DBC */}
      <section className="section">
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
