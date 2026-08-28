import { Link } from "react-router-dom";
import { footerNavColumns } from "../../data/nav";
import { siteConfig } from "../../data/siteConfig";
import { useCookieConsent } from "../../context/CookieConsentContext";
import Icon from "../ui/Icon";
import "./Footer.css";

export default function Footer() {
  const { openPreferences } = useCookieConsent();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            DBC
          </Link>
          <p className="footer__tagline">« {siteConfig.tagline} »</p>
          <p className="footer__address text-muted">
            <Icon name="location" size={16} /> {siteConfig.address.city} — {siteConfig.address.region}
          </p>
          <ul className="footer__socials" aria-label="Réseaux sociaux DBC">
            {siteConfig.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`DBC sur ${social.name}`}
                  className="footer__social-link"
                >
                  <Icon name={social.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__columns">
          {footerNavColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="link-underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="link-underline">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="link-underline">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <button type="button" className="footer__cookie-link link-underline" onClick={openPreferences}>
                  Gérer mes cookies
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} DBC — Développement Business Consulting. Tous droits réservés.
          </p>
          <p className="footer__area text-muted">
            Intervention à {siteConfig.serviceArea.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
