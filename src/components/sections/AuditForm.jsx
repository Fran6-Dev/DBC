import { useState } from "react";
import Icon from "../ui/Icon";
import { sendContactRequest } from "../../lib/contactService";
import { auditChecklist } from "../../data/businessBooster";
import "./AuditForm.css";

const INITIAL_FORM = { name: "", company: "", email: "", phone: "", honeypot: "" };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Merci d'indiquer votre nom.";
  if (!form.email.trim()) {
    errors.email = "Merci d'indiquer votre adresse email.";
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Cette adresse email ne semble pas valide.";
  }
  return errors;
}

/**
 * Formulaire court de demande d'audit gratuit — pensé pour être déposé
 * directement dans une section de page (pas de redirection nécessaire).
 * Utilise le même service d'envoi que la page Contact.
 */
export default function AuditForm({ id }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      await sendContactRequest({ ...form, source: "audit-gratuit-business-booster-90" });
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="audit-form-card" id={id}>
      <ul className="audit-form-card__checklist">
        {auditChecklist.map((item) => (
          <li key={item}>
            <Icon name="check" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <form className="audit-form" noValidate onSubmit={handleSubmit}>
        <div className="audit-form__honeypot" aria-hidden="true">
          <label htmlFor="audit-website">Ne pas remplir ce champ</label>
          <input
            type="text"
            id="audit-website"
            tabIndex={-1}
            autoComplete="off"
            value={form.honeypot}
            onChange={updateField("honeypot")}
          />
        </div>

        <div className="audit-form__field">
          <label htmlFor="audit-name" className="visually-hidden">
            Nom
          </label>
          <input
            id="audit-name"
            type="text"
            placeholder="Nom"
            required
            value={form.name}
            onChange={updateField("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "audit-name-error" : undefined}
          />
          {errors.name && (
            <p className="audit-form__error" id="audit-name-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="audit-form__field">
          <label htmlFor="audit-company" className="visually-hidden">
            Entreprise
          </label>
          <input
            id="audit-company"
            type="text"
            placeholder="Entreprise"
            value={form.company}
            onChange={updateField("company")}
          />
        </div>

        <div className="audit-form__field">
          <label htmlFor="audit-email" className="visually-hidden">
            Email
          </label>
          <input
            id="audit-email"
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={updateField("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "audit-email-error" : undefined}
          />
          {errors.email && (
            <p className="audit-form__error" id="audit-email-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className="audit-form__field">
          <label htmlFor="audit-phone" className="visually-hidden">
            Téléphone (facultatif)
          </label>
          <input
            id="audit-phone"
            type="tel"
            placeholder="Téléphone (facultatif)"
            value={form.phone}
            onChange={updateField("phone")}
          />
        </div>

        <button type="submit" className="btn btn--accent btn--lg audit-form__submit" disabled={status === "loading"}>
          <span>{status === "loading" ? "Envoi en cours..." : "Je réserve mon audit gratuit"}</span>
        </button>

        <p className="audit-form__note text-muted">Réponse sous 48h ouvrées.</p>

        <div aria-live="polite">
          {status === "success" && (
            <p className="audit-form__status audit-form__status--success">
              Merci ! Votre demande d'audit a bien été envoyée, nous revenons vers vous rapidement.
            </p>
          )}
          {status === "error" && (
            <p className="audit-form__status audit-form__status--error">
              Une erreur est survenue. Merci de réessayer ou de nous contacter directement par email.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
