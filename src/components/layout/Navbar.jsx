import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { primaryNav } from "../../data/nav";
import Icon from "../ui/Icon";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isServicesOpen) return undefined;
    const onClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isServicesOpen]);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="DBC — Développement Business Consulting, retour à l'accueil">
          <img src="/logo-mark.png" alt="" className="navbar__logo-img" width="56" height="47" />
          <span className="navbar__logo-sub">Développement Business Consulting</span>
        </Link>

        <nav className="navbar__nav" aria-label="Navigation principale">
          <ul>
            {primaryNav.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className="navbar__dropdown"
                  ref={servicesRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className="navbar__link navbar__dropdown-trigger"
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {item.label}
                    <Icon name="chevronDown" size={14} />
                  </button>
                  <div className={`navbar__dropdown-panel ${isServicesOpen ? "is-open" : ""}`}>
                    <div className="navbar__dropdown-panel-inner">
                      <Link to="/services" className="navbar__dropdown-all link-underline">
                        Toutes nos expertises
                      </Link>
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink to={child.to} className="navbar__dropdown-link">
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `navbar__link${isActive ? " is-active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="navbar__actions">
          <Link to="/contact" className="btn btn--accent btn--sm navbar__cta">
            <span>Je réserve mon audit gratuit</span>
            <Icon name="arrowRight" size={16} />
          </Link>
          <button
            type="button"
            className="navbar__burger"
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={isMobileOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      {createPortal(
        <div id="mobile-menu" className={`navbar__mobile ${isMobileOpen ? "is-open" : ""}`}>
          <nav aria-label="Navigation mobile">
            <ul>
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `navbar__mobile-link${isActive ? " is-active" : ""}`}
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <ul className="navbar__mobile-sublist">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink to={child.to} className="navbar__mobile-sublink">
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn--accent navbar__mobile-cta">
              <span>Je réserve mon audit gratuit</span>
              <Icon name="arrowRight" size={16} />
            </Link>
          </nav>
        </div>,
        document.body
      )}
    </header>
  );
}
