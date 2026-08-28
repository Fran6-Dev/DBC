import Reveal from "../ui/Reveal";
import "./ProcessTimeline.css";

export default function ProcessTimeline({ steps }) {
  return (
    <ol className="process-timeline">
      {steps.map((item, index) => (
        <Reveal as="li" key={item.step} delay={Math.min(index + 1, 5)} className="process-timeline__item">
          <span className="process-timeline__step">{item.step}</span>
          <h3 className="process-timeline__title">{item.title}</h3>
          <p className="text-muted">{item.description || item.desc}</p>
        </Reveal>
      ))}
    </ol>
  );
}
