import { Link, useParams } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import Icon from "../components/ui/Icon";
import FAQAccordion from "../components/sections/FAQAccordion";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import CTASection from "../components/sections/CTASection";
import NotFound from "./NotFound";
import { getServiceBySlug, services } from "../data/services";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "../lib/structuredData";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        jsonLd={[
          buildBreadcrumbSchema([
            { label: "Accueil", to: "/" },
            { label: "Services", to: "/services" },
            { label: service.title },
          ]),
          buildServiceSchema(service),
          buildFaqSchema(service.faqs),
        ]}
      />

      {/* HERO */}
      <section className="section service-detail-hero">
        <div className="container">
          <Breadcrumb
            items={[{ label: "Accueil", to: "/" }, { label: "Services", to: "/services" }, { label: service.title }]}
          />
          <Reveal delay={1} className="service-detail-hero__content">
            <span className="eyebrow">{service.heroKicker}</span>
            <h1>{service.heroTitle}</h1>
            <p className="text-lead">{service.heroLead}</p>
            <div className="service-detail-hero__actions">
              <a href="#contact-cta-service" className="btn btn--accent">
                <span>Je réserve mon audit gratuit</span>
                <Icon name="arrowRight" size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="section section--bg-alt">
        <div className="container service-detail-grid">
          <Reveal>
            <span className="eyebrow">Présentation</span>
            <h2>Comprendre {service.title.toLowerCase()}</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-lead">{service.presentation}</p>
          </Reveal>
        </div>
      </section>

      {/* PROBLÉMATIQUE */}
      <section className="section">
        <div className="container service-detail-grid">
          <Reveal>
            <span className="eyebrow">La problématique</span>
            <h2>Un constat que beaucoup d'entreprises partagent.</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-lead">{service.problematique}</p>
          </Reveal>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section className="section section--bg-alt">
        <div className="container">
          <Reveal className="service-detail-heading">
            <span className="eyebrow">Notre approche</span>
            <h2>Comment nous procédons</h2>
          </Reveal>
          <div className="grid grid-2 service-detail-list">
            {service.approche.map((item, index) => (
              <Reveal as="div" key={item} delay={Math.min(index + 1, 5)} className="service-detail-list__item">
                <Icon name="check" size={18} />
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUE COMPREND L'ACCOMPAGNEMENT */}
      <section className="section">
        <div className="container">
          <Reveal className="service-detail-heading">
            <span className="eyebrow">Contenu de l'accompagnement</span>
            <h2>Ce que comprend notre accompagnement</h2>
          </Reveal>
          <ul className="grid grid-2 service-detail-comprend">
            {service.comprend.map((item, index) => (
              <Reveal as="li" key={item} delay={Math.min((index % 4) + 1, 5)} className="service-detail-comprend__item">
                <Icon name="check" size={16} />
                <span>{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="section section--bg-dark">
        <div className="container">
          <Reveal className="service-detail-heading">
            <span className="eyebrow">Bénéfices</span>
            <h2>Ce que cela change concrètement pour vous</h2>
          </Reveal>
          <div className="grid grid-2 service-detail-benefits">
            {service.benefices.map((item, index) => (
              <Reveal as="div" key={item} delay={Math.min(index + 1, 5)} className="service-detail-benefits__item">
                <span className="service-detail-benefits__index">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="section">
        <div className="container">
          <Reveal className="service-detail-heading">
            <span className="eyebrow">Processus</span>
            <h2>Comment se déroule l'accompagnement</h2>
          </Reveal>
          <ProcessTimeline steps={service.processus} />
        </div>
      </section>

      {/* FAQ SPÉCIFIQUE */}
      <section className="section section--bg-alt">
        <div className="container">
          <div className="service-detail-faq">
            <Reveal className="service-detail-heading">
              <span className="eyebrow">Questions fréquentes</span>
              <h2>Vos questions sur {service.title.toLowerCase()}</h2>
            </Reveal>
            <FAQAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="section">
        <div className="container">
          <Reveal className="service-detail-heading">
            <span className="eyebrow">Aller plus loin</span>
            <h2>Découvrir nos autres expertises</h2>
          </Reveal>
          <div className="grid grid-3">
            {otherServices.map((other) => (
              <Link key={other.slug} to={`/services/${other.slug}`} className="service-detail-related">
                <Icon name={other.icon} size={22} />
                <span>{other.title}</span>
                <Icon name="arrowRight" size={16} className="service-detail-related__arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div id="contact-cta-service">
        <CTASection
          eyebrow="Prêt à en discuter ?"
          title={`Échangeons sur votre besoin en ${service.shortTitle.toLowerCase()}.`}
          text="Le premier échange est gratuit et sans engagement. Nous prenons le temps de comprendre votre activité avant de vous proposer un accompagnement sur mesure."
          primaryLabel="Je réserve mon audit gratuit"
          primaryTo="/contact"
          secondaryLabel="Voir tous nos services"
          secondaryTo="/services"
        />
      </div>
    </>
  );
}
