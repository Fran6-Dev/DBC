import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import "./ServiceCard.css";

export default function ServiceCard({ service, delay = 0 }) {
  return (
    <Reveal as="article" delay={delay} className="service-card-wrap">
      <Link to={`/services/${service.slug}`} className="service-card">
        <span className="service-card__icon">
          <Icon name={service.icon} size={26} strokeWidth={1.3} />
        </span>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.cardDescription}</p>
        <span className="service-card__link">
          En savoir plus <Icon name="arrowRight" size={15} />
        </span>
      </Link>
    </Reveal>
  );
}
