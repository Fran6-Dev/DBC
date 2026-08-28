import Reveal from "../ui/Reveal";
import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <Reveal as="figure" delay={delay} className="testimonial-card">
      <span className="testimonial-card__mark" aria-hidden="true">
        “
      </span>
      <blockquote>
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption>
        <span className="testimonial-card__author">{testimonial.author}</span>
        <span className="testimonial-card__role text-muted">{testimonial.role}</span>
        {testimonial.placeholder && (
          <span className="testimonial-card__placeholder">Témoignage temporaire</span>
        )}
      </figcaption>
    </Reveal>
  );
}
