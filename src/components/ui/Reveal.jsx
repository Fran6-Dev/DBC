import { useReveal } from "../../hooks/useReveal";

/**
 * Enveloppe un bloc pour lui appliquer une apparition douce au scroll.
 * `as` permet de choisir la balise du conteneur (div, li, article...).
 * `delay` (0-5) espace l'apparition d'éléments d'une même grille.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const { ref, isVisible } = useReveal();
  const delayClass = delay ? `reveal--delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
