import { Link } from "react-router-dom";
import { useCookieConsent } from "../../context/CookieConsentContext";
import "./Cookies.css";

export default function CookieBanner() {
  const { hasHydrated, hasResponded, isPreferencesOpen, acceptAll, rejectAll, openPreferences } =
    useCookieConsent();

  if (!hasHydrated || hasResponded || isPreferencesOpen) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Gestion des cookies">
      <div className="cookie-banner__content">
        <p>
          Nous utilisons des cookies pour améliorer votre expérience et mesurer l'audience du site.
          Les cookies non essentiels ne sont déposés qu'avec votre accord. Consultez notre{" "}
          <Link to="/gestion-cookies" className="link-underline">
            politique de gestion des cookies
          </Link>
          .
        </p>
        <div className="cookie-banner__actions">
          <button type="button" className="btn btn--outline btn--sm" onClick={openPreferences}>
            Personnaliser
          </button>
          <button type="button" className="btn btn--outline btn--sm" onClick={rejectAll}>
            Tout refuser
          </button>
          <button type="button" className="btn btn--accent btn--sm" onClick={acceptAll}>
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
