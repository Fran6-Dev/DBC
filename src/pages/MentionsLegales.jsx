import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import { siteConfig } from "../data/siteConfig";
import { buildBreadcrumbSchema } from "../lib/structuredData";
import "./LegalPage.css";

function Placeholder({ children }) {
  return <span className="legal-placeholder">{children}</span>;
}

export default function MentionsLegales() {
  const { legal } = siteConfig;

  return (
    <>
      <SEO
        title="Mentions légales"
        description="Mentions légales du site DBC — Développement Business Consulting."
        path="/mentions-legales"
        jsonLd={buildBreadcrumbSchema([{ label: "Accueil", to: "/" }, { label: "Mentions légales" }])}
      />

      <section className="section legal-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Mentions légales" }]} />
          <Reveal delay={1} className="legal-hero__content">
            <span className="eyebrow">Informations légales</span>
            <h1>Mentions légales</h1>
            <p className="legal-updated">Dernière mise à jour : à compléter avant mise en ligne.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal as="div" className="legal-content">
            <p>
              Conformément aux dispositions des articles 6-III et 19 de la loi n°2004-575 du 21
              juin 2004 pour la confiance dans l'économie numérique, il est précisé aux
              utilisateurs du site DBC l'identité des différents intervenants dans le cadre de sa
              réalisation et de son suivi. Les informations ci-dessous sont fournies à titre
              indicatif et doivent être complétées avec les données officielles de l'entreprise
              avant la mise en production du site.
            </p>

            <h2>Éditeur du site</h2>
            <p>
              Nom légal : <Placeholder>{legal.legalName}</Placeholder>
              <br />
              Forme juridique : <Placeholder>{legal.legalForm}</Placeholder>
              <br />
              Capital social : <Placeholder>{legal.capital}</Placeholder>
              <br />
              SIREN : <Placeholder>{legal.siren}</Placeholder>
              <br />
              SIRET : <Placeholder>{legal.siret}</Placeholder>
              <br />
              Adresse du siège social : <Placeholder>{legal.headOfficeAddress}</Placeholder>
              <br />
              Email : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <br />
              Téléphone : {siteConfig.phoneDisplay}
            </p>

            <h2>Directeur de la publication</h2>
            <p>
              <Placeholder>{legal.publicationDirector}</Placeholder>
            </p>

            <h2>Hébergement</h2>
            <p>
              Le site est hébergé par : <Placeholder>{legal.host.name}</Placeholder>
              <br />
              Adresse : <Placeholder>{legal.host.address}</Placeholder>
              <br />
              Téléphone : <Placeholder>{legal.host.phone}</Placeholder>
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments présents sur ce site (textes, images, logos, identité
              visuelle) est la propriété exclusive de DBC ou de ses partenaires, sauf mention
              contraire. Toute reproduction, représentation, modification ou exploitation, totale
              ou partielle, sans autorisation préalable, est interdite.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              DBC s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur
              ce site, mais ne peut garantir l'exhaustivité des informations. DBC décline toute
              responsabilité pour toute imprécision, inexactitude ou omission portant sur des
              informations disponibles sur le site.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige,
              les tribunaux français seront seuls compétents.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
