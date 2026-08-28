import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import { useCookieConsent } from "../context/CookieConsentContext";
import { buildBreadcrumbSchema } from "../lib/structuredData";
import "./LegalPage.css";

export default function GestionCookies() {
  const { openPreferences } = useCookieConsent();

  return (
    <>
      <SEO
        title="Gestion des cookies"
        description="Comprendre et gérer les cookies utilisés sur le site DBC — Développement Business Consulting."
        path="/gestion-cookies"
        jsonLd={buildBreadcrumbSchema([{ label: "Accueil", to: "/" }, { label: "Gestion des cookies" }])}
      />

      <section className="section legal-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Gestion des cookies" }]} />
          <Reveal delay={1} className="legal-hero__content">
            <span className="eyebrow">Vos préférences</span>
            <h1>Gestion des cookies</h1>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal as="div" className="legal-content">
            <p>
              Ce site utilise des cookies afin d'assurer son bon fonctionnement, d'analyser son
              audience et, le cas échéant, d'améliorer son contenu. Conformément à la
              réglementation en vigueur, les cookies non essentiels ne sont déposés qu'après avoir
              recueilli votre consentement.
            </p>

            <button type="button" className="btn btn--accent" onClick={openPreferences} style={{ marginBlock: "1rem" }}>
              <span>Gérer mes préférences cookies</span>
            </button>

            <h2>Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre appareil lors de la
              consultation d'un site internet. Il permet de conserver certaines informations
              relatives à votre navigation, comme vos préférences ou votre consentement.
            </p>

            <h2>Les catégories de cookies utilisées</h2>
            <h3>Cookies nécessaires</h3>
            <p>
              Ces cookies sont indispensables au fonctionnement du site : ils permettent
              notamment de mémoriser vos choix en matière de cookies. Ils ne peuvent pas être
              désactivés et ne nécessitent pas de consentement préalable.
            </p>

            <h3>Cookies analytiques</h3>
            <p>
              Ces cookies permettent de mesurer l'audience du site de façon anonyme (nombre de
              visiteurs, pages consultées) afin d'en améliorer le contenu et l'ergonomie. Ils ne
              sont déposés qu'avec votre consentement. Un outil de mesure d'audience compatible
              RGPD pourra être intégré ultérieurement.
            </p>

            <h3>Cookies marketing</h3>
            <p>
              Ces cookies pourraient être utilisés, à l'avenir, pour proposer des contenus ou
              publicités adaptés à votre navigation. Ils ne sont déposés qu'avec votre
              consentement explicite.
            </p>

            <h2>Comment modifier vos préférences ?</h2>
            <p>
              Vous pouvez à tout moment modifier vos préférences en cliquant sur le bouton
              « Gérer mes préférences cookies » ci-dessus, ou via le lien « Gérer mes cookies »
              disponible en bas de chaque page du site.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
