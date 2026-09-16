import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import { siteConfig } from "../data/siteConfig";
import { buildBreadcrumbSchema } from "../lib/structuredData";
import "./LegalPage.css";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEO
        title="Politique de confidentialité"
        description="Politique de confidentialité du site DBC — Développement Business Consulting : données collectées, finalités et droits des utilisateurs."
        path="/politique-confidentialite"
        jsonLd={buildBreadcrumbSchema([{ label: "Accueil", to: "/" }, { label: "Politique de confidentialité" }])}
      />

      <section className="section legal-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Politique de confidentialité" }]} />
          <Reveal delay={1} className="legal-hero__content">
            <span className="eyebrow">Vos données</span>
            <h1>Politique de confidentialité</h1>
            {/* <p className="legal-updated">Dernière mise à jour : à compléter avant mise en ligne.</p> */}
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal as="div" className="legal-content">
            <p>
              La présente politique de confidentialité a pour objectif de vous informer sur la
              manière dont DBC collecte, utilise et protège vos données personnelles lorsque vous
              utilisez ce site, conformément au Règlement Général sur la Protection des Données
              (RGPD). Les informations ci-dessous sont fournies à titre de trame et doivent être
              vérifiées et complétées avant la mise en production du site.
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées sur ce site est DBC —
              Développement Business Consulting. Pour toute question relative à vos données
              personnelles, vous pouvez nous contacter à l'adresse{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>

            <h2>2. Données collectées</h2>
            <p>Selon vos interactions avec le site, nous pouvons collecter les données suivantes :</p>
            <ul>
              <li>Données d'identification : nom, prénom, entreprise</li>
              <li>Données de contact : email, téléphone</li>
              <li>Données relatives à votre demande : type de projet, budget indicatif, message</li>
              <li>Données de navigation, uniquement avec votre consentement (cookies analytiques)</li>
            </ul>

            <h2>3. Finalités du traitement</h2>
            <p>Vos données sont collectées afin de :</p>
            <ul>
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Assurer le suivi de la relation commerciale</li>
              <li>Améliorer le contenu et le fonctionnement du site (données analytiques anonymisées, sous réserve de consentement)</li>
            </ul>

            <h2>4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur votre consentement (formulaire de contact,
              cookies non essentiels) ainsi que, le cas échéant, sur l'intérêt légitime de DBC à
              répondre à vos demandes et à assurer le bon fonctionnement du site.
            </p>

            <h2>5. Durée de conservation</h2>
            <p>
              Vos données sont conservées pour une durée n'excédant pas celle nécessaire aux
              finalités pour lesquelles elles sont collectées, et conformément aux durées légales
              applicables en matière de prospection commerciale et de preuve comptable.
            </p>

            <h2>6. Destinataires des données</h2>
            <p>
              Vos données sont destinées exclusivement à DBC et, le cas échéant, à ses
              sous-traitants techniques (hébergement, outils d'envoi de formulaire), dans la
              stricte mesure nécessaire à l'exécution de leurs prestations.
            </p>

            <h2>7. Vos droits</h2>
            <p>
              Conformément à la réglementation applicable en matière de protection des données
              personnelles, vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d'accès</strong> : obtenir la confirmation que vos données sont traitées et en obtenir une copie.</li>
              <li><strong>Droit de rectification</strong> : demander la correction de données inexactes ou incomplètes.</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données dans les conditions prévues par la loi.</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données pour des motifs légitimes.</li>
              <li><strong>Droit à la limitation</strong> : demander la limitation du traitement de vos données.</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et couramment utilisé.</li>
            </ul>

            <h2>8. Exercer vos droits</h2>
            <p>
              Pour exercer l'un de ces droits, vous pouvez nous contacter à l'adresse{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Vous disposez
              également du droit d'introduire une réclamation auprès de la CNIL (Commission
              Nationale de l'Informatique et des Libertés).
            </p>

            <h2>9. Cookies</h2>
            <p>
              Le site utilise des cookies dans les conditions décrites dans notre page dédiée{" "}
              <Link to="/gestion-cookies" className="link-underline">Gestion des cookies</Link>. Aucun
              cookie non essentiel n'est déposé avant l'obtention de votre consentement.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
