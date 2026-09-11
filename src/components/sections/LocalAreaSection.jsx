import Reveal from "../ui/Reveal";
import { siteConfig } from "../../data/siteConfig";
import "./LocalAreaSection.css";

export default function LocalAreaSection() {
  return (
    <section className="section local-area">
      <div className="container">
        <Reveal className="local-area__heading">
          <span className="eyebrow">Zone d'intervention</span>
          <h2>Un accompagnement local, sur deux bassins d'activité.</h2>
          <p className="text-lead">
            Basée à Montargis, DBC accompagne artisans, commerçants, TPE et PME sur l'agglomération
            montargoise et l'agglomération orléanaise, ainsi que plus largement dans le Loiret et la
            région Centre-Val de Loire.
          </p>
        </Reveal>
        <div className="local-area__groups">
          {siteConfig.serviceAreaGroups.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex + 1} className="local-area__group">
              <h3 className="local-area__group-label">{group.label}</h3>
              <ul className="local-area__towns">
                {group.towns.map((town) => (
                  <li key={town}>{town}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
