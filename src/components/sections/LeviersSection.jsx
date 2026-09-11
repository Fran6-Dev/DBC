import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import Icon from "../ui/Icon";
import "./LeviersSection.css";

/**
 * Grille des leviers activables, regroupés par catégorie — reflète le
 * contenu réel fourni par la cliente (chaque levier est activé selon un
 * diagnostic initial, pas une prestation à la carte figée).
 */
export default function LeviersSection({ leviers, bgAlt = false }) {
  return (
    <section className={`section leviers-section ${bgAlt ? "section--bg-alt" : ""}`}>
      <div className="container">
        <SectionTitle
          eyebrow="Les leviers activés"
          title="Ce que ça inclut concrètement"
          lead="Chaque levier est activé selon un diagnostic initial — une stratégie qui correspond à votre activité, pas une prestation à la carte."
        />
        <div className="grid grid-2 leviers-grid">
          {leviers.map((group, index) => (
            <Reveal key={group.category} delay={Math.min(index + 1, 5)} className="leviers-card">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
