import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import "./CTASection.css";

export default function CTASection({
  eyebrow = "Prendre contact",
  title = "Prêt à faire passer votre activité au niveau supérieur ?",
  text = "Parlons de vos objectifs et identifions ensemble les leviers qui peuvent faire la différence.",
  primaryLabel = "Je réserve mon audit gratuit",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
  variant = "dark",
}) {
  return (
    <section className={`cta-section cta-section--${variant} section`}>
      <div className="container">
        <Reveal className="cta-section__inner">
          <span className="ring-decoration cta-section__ring cta-section__ring--1" aria-hidden="true" />
          <span className="ring-decoration ring-decoration--terracotta cta-section__ring cta-section__ring--2" aria-hidden="true" />
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p className="cta-section__text">{text}</p>
          <div className="cta-section__actions">
            <Button to={primaryTo} variant="accent" size="lg">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button to={secondaryTo} variant="outline-light" size="lg" icon={false}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
