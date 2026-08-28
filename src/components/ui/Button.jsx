import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./Button.css";

/**
 * Bouton premium.
 * variant: "primary" (navy) | "accent" (terracotta) | "outline" | "outline-light" | "ghost"
 * as: "link" (react-router) | "a" (lien externe) | "button"
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  as = "link",
  to,
  href,
  icon = true,
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name="arrowRight" size={16} className="btn__icon" />}
    </>
  );

  if (as === "link" && to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (as === "a" || href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
