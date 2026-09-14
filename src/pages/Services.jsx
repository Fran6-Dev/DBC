import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import Icon from "../components/ui/Icon";
import CTASection from "../components/sections/CTASection";
import { services } from "../data/services";
import { buildBreadcrumbSchema } from "../lib/structuredData";
import "./Services.css";

export default function Services() {
  return (
    <>
      <SEO
        title="Nos expertises — SEO, site web, Google Business, développement commercial, administratif"
        description="Découvrez les 8 expertises DBC : référencement naturel, création de site web, Google Business Profile, community management, charte graphique, développement commercial, gestion administrative et recouvrement de créances."
        path="/services"
        jsonLd={buildBreadcrumbSchema([
          { label: "Accueil", to: "/" },
          { label: "Services" },
        ])}
      />

      <section className="section services-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Services" }]} />
          <Reveal delay={1} className="services-hero__content">
            <span className="eyebrow">Nos expertises</span>
            <h1>Des expertises complémentaires, un seul partenaire.</h1>
            <p className="text-lead">
              De votre visibilité en ligne à votre développement commercial, DBC vous accompagne
              avec une approche claire, humaine et exigeante.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section services-list">
        <div className="container">
          {services.map((service, index) => (
            <Reveal as="article" key={service.slug} delay={Math.min((index % 5) + 1, 5)} className="service-row">
              <div className="service-row__number">{String(index + 1).padStart(2, "0")}</div>
              <div className="service-row__icon">
                <Icon name={service.icon} size={28} strokeWidth={1.3} />
              </div>
              <div className="service-row__body">
                <h2>{service.title}</h2>
                <p className="text-muted">{service.presentation}</p>
                <ul className="service-row__benefits">
                  {service.benefices.slice(0, 3).map((b) => (
                    <li key={b}>
                      <Icon name="check" size={15} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${service.slug}`} className="btn btn--outline btn--sm">
                  <span>Découvrir le service</span>
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Un projet en tête ?"
        title="Discutons de l'expertise la plus adaptée à votre activité."
        text="Chaque accompagnement DBC est construit sur mesure. Parlons de vos objectifs pour identifier la meilleure approche."
        primaryLabel="Je réserve mon audit gratuit"
        primaryTo="/contact"
      />
    </>
  );
}
