import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import ValueCard from "../components/sections/ValueCard";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import ConstatSection from "../components/sections/ConstatSection";
import LeviersSection from "../components/sections/LeviersSection";
import AuditForm from "../components/sections/AuditForm";
import FAQAccordion from "../components/sections/FAQAccordion";
import CTASection from "../components/sections/CTASection";
import { siteConfig } from "../data/siteConfig";
import {
  constat,
  piliers,
  methodQuote,
  leviers,
  reassuranceCards,
  bb90Faq,
} from "../data/businessBooster";
import { buildBreadcrumbSchema, buildFaqSchema } from "../lib/structuredData";
import "./BusinessBooster90.css";

export default function BusinessBooster90() {
  return (
    <>
      <SEO
        title="Business Booster 90 — Programme d'accompagnement sur 90 jours"
        description="Business Booster 90, le programme DBC pour les artisans, commerçants, TPE et PME de Montargis, du Loiret et d'Orléans : visibilité digitale, acquisition, fidélisation et gestion administrative, en 90 jours."
        path="/business-booster-90"
        jsonLd={[
          buildBreadcrumbSchema([{ label: "Accueil", to: "/" }, { label: "Business Booster 90" }]),
          buildFaqSchema(bb90Faq),
        ]}
      />

      {/* HERO */}
      <section className="hero bb90-hero">
        <span className="ring-decoration hero__ring hero__ring--1" aria-hidden="true" />
        <span className="ring-decoration ring-decoration--terracotta hero__ring hero__ring--2" aria-hidden="true" />
        <div className="container hero__inner">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Business Booster 90" }]} />
          <Reveal delay={1}>
            <span className="eyebrow hero__eyebrow">Business Booster 90</span>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="hero__title">
              Une stratégie sur-mesure pour <span className="accent">attirer des clients</span>,
              sans y consacrer vos journées.
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="hero__lead text-lead">
              DBC accompagne les {siteConfig.audience} dans la mise en place d'une stratégie
              d'acquisition adaptée à leur activité — avec des résultats visibles en 3 mois,
              pendant que vous restez concentré sur votre métier.
            </p>
          </Reveal>
          <Reveal delay={4} className="hero__actions">
            <Button to="#audit-gratuit" as="a" href="#audit-gratuit" variant="accent" size="lg">
              Je réserve mon audit gratuit
            </Button>
            <Button to="#methode" as="a" href="#methode" variant="outline" size="lg" icon={false}>
              Découvrir la méthode
            </Button>
          </Reveal>
        </div>
      </section>

      {/* LE CONSTAT */}
      <ConstatSection constat={constat} />

      {/* LA MÉTHODE — 3 PILIERS */}
      <section className="section" id="methode">
        <div className="container">
          <SectionTitle
            eyebrow="La méthode"
            title="Business Booster 90 : trois piliers, un seul objectif"
            lead="Un accompagnement structuré sur 90 jours, adapté à votre activité et à vos objectifs — pas une prestation standardisée."
          />
          <ProcessTimeline steps={piliers} />
          <Reveal delay={2} className="bb90-quote">
            <p>« {methodQuote} »</p>
          </Reveal>
        </div>
      </section>

      {/* LES LEVIERS ACTIVÉS */}
      <LeviersSection leviers={leviers} bgAlt />

      {/* QUI SUIS-JE (condensé) */}
      <section className="section bb90-founder">
        <div className="container bb90-founder__grid">
          <Reveal>
            <div className="bb90-founder__photo">
              <img
                src="https://res.cloudinary.com/jqfwkgp1/image/upload/v1789401854/WhatsApp_Image_2026-09-14_at_18.03.02.jpg"
                alt={`Photo de ${siteConfig.founder.name}`}
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow">Qui suis-je ?</span>
            <h2>
              {siteConfig.founder.name}, {siteConfig.founder.role.toLowerCase()}
            </h2>
            <p className="text-lead">{siteConfig.founder.bio[1]}</p>
            <Link to="/a-propos" className="btn btn--ghost bb90-founder__link">
              En savoir plus sur DBC →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* POURQUOI ME FAIRE CONFIANCE */}
      <section className="section section--bg-alt">
        <div className="container">
          <SectionTitle eyebrow="Réassurance" title="Pourquoi me faire confiance ?" align="center" />
          <div className="grid grid-4 bb90-reassurance">
            {reassuranceCards.map((card, index) => (
              <ValueCard key={card.title} value={card} index={index + 1} delay={Math.min(index + 1, 5)} />
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT GRATUIT */}
      <section className="section bb90-audit" id="audit-gratuit">
        <div className="container bb90-audit__grid">
          <Reveal>
            <span className="eyebrow">Prendre contact</span>
            <h2>Un audit gratuit, sans engagement.</h2>
            <p className="text-lead">
              En 30 minutes, on analyse ensemble votre visibilité actuelle et on identifie les
              leviers prioritaires pour votre activité.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <AuditForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ SPÉCIFIQUE */}
      <section className="section">
        <div className="container">
          <div className="bb90-faq">
            <SectionTitle eyebrow="Questions fréquentes" title="Vos questions, nos réponses" align="center" />
            <FAQAccordion items={bb90Faq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à gagner du temps et des clients ?"
        text="Réservez votre audit gratuit dès aujourd'hui — sans engagement."
        primaryLabel="Je réserve mon audit gratuit"
        primaryTo="/contact"
      />
    </>
  );
}
