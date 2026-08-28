import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import "./ProjectCard.css";

const CATEGORY_ICONS = {
  "Site web": "monitor",
  SEO: "search",
  "Identité visuelle": "palette",
  "Réseaux sociaux": "chat",
  "Développement commercial": "trend",
};

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal as="article" delay={delay} className="project-card">
      <div className="project-card__media" role="img" aria-label={`Visuel du projet : ${project.title}`}>
        <Icon name={CATEGORY_ICONS[project.category] || "monitor"} size={30} strokeWidth={1.2} />
        {project.placeholder && <span className="project-card__badge">Visuel à venir</span>}
      </div>
      <div className="project-card__body">
        <span className="eyebrow">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="text-muted">{project.description}</p>
      </div>
    </Reveal>
  );
}
