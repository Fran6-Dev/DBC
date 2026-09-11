import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import "./ConstatSection.css";

/**
 * Section "Le constat" : deux colonnes en miroir — les défis du quotidien
 * du dirigeant, et comment DBC y répond point par point.
 */
export default function ConstatSection({ constat }) {
  return (
    <section className="section section--bg-dark constat-section">
      <div className="container">
        <Reveal className="constat-section__heading">
          <span className="eyebrow">{constat.eyebrow}</span>
          <h2>{constat.title}</h2>
          <p className="text-lead">{constat.lead}</p>
        </Reveal>

        <div className="constat-section__grid">
          <Reveal delay={1} className="constat-card">
            <span className="constat-card__label">Vos défis au quotidien</span>
            <ul>
              {constat.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={2} className="constat-card constat-card--accent">
            <span className="constat-card__label">DBC vous accompagne</span>
            <ul>
              {constat.support.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
