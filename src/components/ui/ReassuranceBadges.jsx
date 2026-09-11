import "./ReassuranceBadges.css";

export default function ReassuranceBadges({ items }) {
  return (
    <ul className="reassurance-badges">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
