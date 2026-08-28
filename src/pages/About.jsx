import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import ValueCard from "../components/sections/ValueCard";
import CTASection from "../components/sections/CTASection";
import Icon from "../components/ui/Icon";
import { values } from "../data/values";
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
            <div className="about-story__photo" role="img" aria-label="Espace réservé à une photo du fondateur ou de l'équipe DBC">
              <span>Photo de l'équipe</span>
              <span className="text-muted">à venir</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow">Notre vision</span>
            <h2>Une agence à taille humaine, un niveau d'exigence premium.</h2>
            <p className="text-lead">
              Basée à Montargis, DBC accompagne les entreprises, indépendants et entrepreneurs du
              Loiret, d'Orléans et de la région Centre-Val de Loire dans leur développement digital
              et commercial.
            </p>
            <p className="text-muted">
              Nous croyons en une approche proche de nos clients, où chaque stratégie est construite
              sur mesure plutôt que dupliquée d'un client à l'autre. Notre rôle : comprendre
              réellement votre activité, avant de proposer la moindre solution.
            </p>
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
        primaryLabel="Parlons de votre projet"
        primaryTo="/contact"
        secondaryLabel="Voir nos réalisations"
        secondaryTo="/realisations"
      />
    </>
  );
}
