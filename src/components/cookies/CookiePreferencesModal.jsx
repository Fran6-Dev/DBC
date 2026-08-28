import { useEffect, useRef, useState } from "react";
import { useCookieConsent } from "../../context/CookieConsentContext";
import Icon from "../ui/Icon";
import "./Cookies.css";

const CATEGORIES = [
  {
    key: "necessary",
    title: "Cookies nécessaires",
    description:
      "Indispensables au fonctionnement du site (navigation, sécurité, mémorisation de vos préférences de cookies). Ils ne peuvent pas être désactivés.",
    locked: true,
  },
  {
    key: "analytics",
    title: "Cookies analytiques",
    description:
      "Nous permettent de mesurer l'audience du site de façon anonyme afin d'améliorer son contenu et son ergonomie.",
  },
  {
    key: "marketing",
    title: "Cookies marketing",
    description:
      "Utilisés pour proposer des contenus ou publicités plus pertinents en fonction de votre navigation.",
  },
];

export default function CookiePreferencesModal() {
  const { consent, isPreferencesOpen, closePreferences, acceptAll, rejectAll, savePreferences } =
    useCookieConsent();
  const [draft, setDraft] = useState({ analytics: false, marketing: false });
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isPreferencesOpen) {
      setDraft({
        analytics: consent?.analytics ?? false,
        marketing: consent?.marketing ?? false,
      });
    }
  }, [isPreferencesOpen, consent]);

  useEffect(() => {
    if (!isPreferencesOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closePreferences();
    };
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isPreferencesOpen, closePreferences]);

  if (!isPreferencesOpen) return null;

  return (
    <div className="cookie-modal__overlay" onMouseDown={closePreferences}>
      <div
        className="cookie-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
        ref={dialogRef}
        tabIndex={-1}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="cookie-modal__header">
          <h2 id="cookie-modal-title">Centre de préférences cookies</h2>
          <button
            type="button"
            className="cookie-modal__close"
            onClick={closePreferences}
            aria-label="Fermer la fenêtre de préférences cookies"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <p className="text-muted">
          Choisissez les catégories de cookies que vous autorisez. Les cookies nécessaires sont
          toujours actifs afin de garantir le bon fonctionnement du site.
        </p>

        <ul className="cookie-modal__list">
          {CATEGORIES.map((category) => (
            <li key={category.key} className="cookie-modal__item">
              <div className="cookie-modal__item-header">
                <span className="cookie-modal__item-title">{category.title}</span>
                <label className="cookie-switch">
                  <span className="visually-hidden">
                    Activer les {category.title.toLowerCase()}
                  </span>
                  <input
                    type="checkbox"
                    checked={category.locked ? true : draft[category.key]}
                    disabled={category.locked}
                    onChange={(e) =>
                      setDraft((prev) => ({ ...prev, [category.key]: e.target.checked }))
                    }
                  />
                  <span className="cookie-switch__track" aria-hidden="true">
                    <span className="cookie-switch__thumb" />
                  </span>
                </label>
              </div>
              <p className="text-muted">{category.description}</p>
            </li>
          ))}
        </ul>

        <div className="cookie-modal__actions">
          <button type="button" className="btn btn--outline btn--sm" onClick={rejectAll}>
            Tout refuser
          </button>
          <button type="button" className="btn btn--outline btn--sm" onClick={acceptAll}>
            Tout accepter
          </button>
          <button
            type="button"
            className="btn btn--accent btn--sm"
            onClick={() => savePreferences(draft)}
          >
            Enregistrer mes préférences
          </button>
        </div>
      </div>
    </div>
  );
}
