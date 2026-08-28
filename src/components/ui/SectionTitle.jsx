import Reveal from "./Reveal";
import "./SectionTitle.css";

export default function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
}) {
  return (
    <Reveal className={`section-title section-title--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="section-title__heading">{title}</Tag>
      {lead && <p className="section-title__lead text-lead">{lead}</p>}
    </Reveal>
  );
}
