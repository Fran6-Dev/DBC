import Reveal from "../ui/Reveal";
import "./ValueCard.css";

export default function ValueCard({ value, index, delay = 0 }) {
  return (
    <Reveal as="article" delay={delay} className="value-card">
      <span className="value-card__index">{String(index).padStart(2, "0")}</span>
      <h3 className="value-card__title">{value.title}</h3>
      <p className="text-muted">{value.description}</p>
    </Reveal>
  );
}
