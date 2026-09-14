import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import ValueCard from "../components/sections/ValueCard";
import CTASection from "../components/sections/CTASection";
import Icon from "../components/ui/Icon";
import ReassuranceBadges from "../components/ui/ReassuranceBadges";
import { values, reassuranceBadges } from "../data/values";
import { siteConfig } from "../data/siteConfig";
import { buildBreadcrumbSchema } from "../lib/structuredData";
import "./About.css";

const PILLARS = ["Proximité", "Écoute", "Stratégie", "Transparence", "Accompagnement", "Résultats"];

export default function About() {
  return (
    <>
      <SEO
        title="À propos — L'agence DBC à Montargis"
        description="Découvrez DBC, agence de consulting basée à Montargis : notre vision, nos valeurs et notre manière d'accompagner les entreprises du Loiret et d'Orléans."
        path="/a-propos"
        jsonLd={buildBreadcrumbSchema([{ label: "Accueil", to: "/" }, { label: "À propos" }])}
      />

      <section className="section about-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "À propos" }]} />
          <Reveal delay={1} className="about-hero__content">
            <span className="eyebrow">À propos de DBC</span>
            <h1>Comprendre votre activité pour mieux la faire grandir.</h1>
            <p className="text-lead">
              DBC est né d'une conviction simple : chaque entreprise mérite un accompagnement
              digital et commercial exigeant, sans jargon inutile ni promesses excessives.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--bg-alt about-story">
        <div className="container about-story__grid">
          <Reveal>
            <div className="about-story__photo">
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
            {siteConfig.founder.bio.map((paragraph, index) => (
              <p key={paragraph.slice(0, 24)} className={index === 0 ? "text-lead" : "text-muted"}>
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="about-pillars-heading">
            <span className="eyebrow">Notre manière de travailler</span>
            <h2>Une méthode fondée sur la confiance</h2>
          </Reveal>
          <ul className="about-pillars">
            {PILLARS.map((pillar) => (
              <li key={pillar} className="about-pillars__item">
                <Icon name="check" size={16} />
                <span>{pillar}</span>
              </li>
            ))}
          </ul>
          <Reveal delay={1} className="about-pillars-badges">
            <ReassuranceBadges items={reassuranceBadges} />
          </Reveal>
        </div>
      </section>

      <section className="section section--bg-alt">
        <div className="container">
          <Reveal className="about-pillars-heading">
            <span className="eyebrow">Nos valeurs</span>
            <h2>Ce qui guide chacun de nos accompagnements</h2>
          </Reveal>
          <div className="grid grid-4 about-values">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index + 1} delay={Math.min(index + 1, 5)} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Faisons connaissance"
        title="Discutons de votre activité et de vos objectifs."
        text="Le premier échange est gratuit et sans engagement : l'occasion idéale de voir si DBC est le bon partenaire pour vous."
        primaryLabel="Je réserve mon audit gratuit"
        primaryTo="/contact"
      />
    </>
  );
}
