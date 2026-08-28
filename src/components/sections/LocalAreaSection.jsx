import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { siteConfig } from "../../data/siteConfig";
import "./LocalAreaSection.css";

export default function LocalAreaSection() {
  return (
    <section className="section local-area">
      <div className="container local-area__grid">
        <Reveal>
          <span className="eyebrow">Zone d'intervention</span>
          <h2>Un accompagnement local, une vision qui va plus loin.</h2>
          <p className="text-lead">
            Basée à Montargis, DBC accompagne les entreprises et entrepreneurs du Loiret et de ses
            alentours dans leur développement digital et commercial. Nous intervenons également à
            Orléans et, plus largement, dans toute la région Centre-Val de Loire.
          </p>
        </Reveal>
        <Reveal delay={1} className="local-area__list" as="ul">
          {siteConfig.serviceArea.map((place) => (
            <li key={place} className="local-area__item">
              <Icon name="location" size={18} />
              <span>{place}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
