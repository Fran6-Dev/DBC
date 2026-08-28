import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import FAQAccordion from "../components/sections/FAQAccordion";
import CTASection from "../components/sections/CTASection";
import { generalFaq } from "../data/faq";
import { buildBreadcrumbSchema, buildFaqSchema } from "../lib/structuredData";
import "./FAQ.css";

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ — Vos questions sur nos accompagnements"
        description="Retrouvez les réponses aux questions les plus fréquentes sur les accompagnements DBC : tarifs, délais, zone d'intervention, référencement, site web et devis."
        path="/faq"
        jsonLd={[
          buildBreadcrumbSchema([{ label: "Accueil", to: "/" }, { label: "FAQ" }]),
          buildFaqSchema(generalFaq),
        ]}
      />

      <section className="section faq-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "FAQ" }]} />
          <Reveal delay={1} className="faq-hero__content">
            <span className="eyebrow">Questions fréquentes</span>
            <h1>Des réponses claires à vos questions.</h1>
            <p className="text-lead">
              Vous ne trouvez pas la réponse à votre question ? Contactez-nous directement, nous
              vous répondrons rapidement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="faq-content">
            <FAQAccordion items={generalFaq} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Une autre question ?"
        title="Échangeons directement sur votre projet."
        text="Le premier échange est gratuit et sans engagement."
        primaryLabel="Prendre contact"
        primaryTo="/contact"
      />
    </>
  );
}
