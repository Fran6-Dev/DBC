import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page introuvable"
        description="Cette page n'existe pas ou plus. Retournez à l'accueil du site DBC."
        path="/404"
      />
      <section className="not-found">
        <div className="container">
          <Reveal className="not-found__content">
            <span className="not-found__code">404</span>
            <h1>Cette page semble avoir pris un autre chemin.</h1>
            <p className="text-lead">Pas d'inquiétude, revenons à l'essentiel.</p>
            <Button to="/" variant="accent" size="lg">
              Retour à l'accueil
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
