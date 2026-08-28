import { Link } from "react-router-dom";
import "./Breadcrumb.css";

/**
 * items: [{ label, to }] — le dernier élément est la page courante (pas de lien).
 */
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Fil d'Ariane" className="breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label}>
              {isLast || !item.to ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link to={item.to} className="link-underline">
                  {item.label}
                </Link>
              )}
              {!isLast && <span className="breadcrumb__sep" aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
