import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import Icon from "../components/ui/Icon";
import { siteConfig } from "../data/siteConfig";
import { auditChecklist } from "../data/businessBooster";
import { sendContactRequest } from "../lib/contactService";
import { buildBreadcrumbSchema } from "../lib/structuredData";
import "./Contact.css";

const PROJECT_TYPES = [
  "Référencement naturel",
  "Création de site web",
  "Google Business Profile",
  "Community management",
  "Charte graphique",
  "Développement commercial",
  "Autre / plusieurs besoins",
];

const BUDGETS = [
  "Moins de 1 000 €",
  "1 000 € — 3 000 €",
  "3 000 € — 6 000 €",
  "Plus de 6 000 €",
  "Je ne sais pas encore",
];

const INITIAL_FORM = {
  lastName: "",
  firstName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
  consent: false,
  honeypot: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+().\s-]{6,20}$/;

function validate(form) {
  const errors = {};
  if (!form.lastName.trim()) errors.lastName = "Merci d'indiquer votre nom.";
  if (!form.firstName.trim()) errors.firstName = "Merci d'indiquer votre prénom.";
  if (!form.email.trim()) {
    errors.email = "Merci d'indiquer votre adresse email.";
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Cette adresse email ne semble pas valide.";
  }
  if (form.phone.trim() && !PHONE_REGEX.test(form.phone.trim())) {
    errors.phone = "Ce numéro de téléphone ne semble pas valide.";
  }
  if (!form.message.trim()) {
    errors.message = "Merci de décrire votre projet en quelques mots.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Votre message est un peu court, dites-nous en un peu plus.";
  }
  if (!form.consent) {
    errors.consent = "Merci d'accepter l'utilisation de vos données pour être recontacté.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const updateField = (field) => (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    try {
      await sendContactRequest(form);
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SEO
        title="Contact — Réservez votre audit gratuit Business Booster 90"
        description="Réservez votre audit gratuit et sans engagement avec DBC, agence de consulting basée à Montargis, pour échanger sur votre développement digital et commercial à Montargis, dans son agglomération, à Orléans et dans le Loiret."
        path="/contact"
        jsonLd={buildBreadcrumbSchema([{ label: "Accueil", to: "/" }, { label: "Contact" }])}
      />

      <section className="section contact-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Contact" }]} />
          <Reveal delay={1} className="contact-hero__content">
            <span className="eyebrow">Contact</span>
            <h1>Réservez votre audit gratuit.</h1>
            <p className="text-lead">
              En 30 minutes, on analyse ensemble votre visibilité actuelle et on identifie les
              leviers prioritaires pour votre activité — sans engagement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <h2>Nos coordonnées</h2>
            <ul className="contact-info__checklist">
              {auditChecklist.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="contact-info__list">
              <li>
                <Icon name="mail" size={20} />
                <div>
                  <span className="contact-info__label">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="link-underline">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li>
                <Icon name="phone" size={20} />
                <div>
                  <span className="contact-info__label">Téléphone</span>
                  <a href={`tel:${siteConfig.phoneHref}`} className="link-underline">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </li>
              <li>
                <Icon name="location" size={20} />
                <div>
                  <span className="contact-info__label">Zone d'intervention</span>
                  <span>{siteConfig.serviceAreaShort}</span>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={1} className="contact-form-wrap">
            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              {/* Honeypot anti-spam — champ invisible pour les humains */}
              <div className="contact-form__honeypot" aria-hidden="true">
                <label htmlFor="website">Ne pas remplir ce champ</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.honeypot}
                  onChange={updateField("honeypot")}
                />
              </div>

              <div className="contact-form__row">
                <Field
                  id="lastName"
                  label="Nom"
                  required
                  value={form.lastName}
                  onChange={updateField("lastName")}
                  error={errors.lastName}
                  autoComplete="family-name"
                />
                <Field
                  id="firstName"
                  label="Prénom"
                  required
                  value={form.firstName}
                  onChange={updateField("firstName")}
                  error={errors.firstName}
                  autoComplete="given-name"
                />
              </div>

              <div className="contact-form__row">
                <Field
                  id="company"
                  label="Entreprise"
                  value={form.company}
                  onChange={updateField("company")}
                  autoComplete="organization"
                />
                <Field
                  id="phone"
                  label="Téléphone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField("phone")}
                  error={errors.phone}
                  autoComplete="tel"
                />
              </div>

              <Field
                id="email"
                label="Email"
                type="email"
                required
                value={form.email}
                onChange={updateField("email")}
                error={errors.email}
                autoComplete="email"
              />

              <div className="contact-form__row">
                <SelectField
                  id="projectType"
                  label="Type de projet"
                  value={form.projectType}
                  onChange={updateField("projectType")}
                  options={PROJECT_TYPES}
                  placeholder="Sélectionnez une option"
                />
                <SelectField
                  id="budget"
                  label="Budget indicatif"
                  value={form.budget}
                  onChange={updateField("budget")}
                  options={BUDGETS}
                  placeholder="Sélectionnez une option"
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={updateField("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Décrivez votre projet et vos objectifs en quelques lignes..."
                />
                {errors.message && (
                  <p className="contact-form__error" id="message-error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="contact-form__field contact-form__consent">
                <label className="contact-form__checkbox">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={updateField("consent")}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                  />
                  <span>
                    J'accepte que mes données soient utilisées afin d'être recontacté dans le
                    cadre de ma demande. Pour en savoir plus, consultez notre{" "}
                    <Link to="/politique-confidentialite" className="link-underline">
                      politique de confidentialité
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p className="contact-form__error" id="consent-error" role="alert">
                    {errors.consent}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn--accent btn--lg contact-form__submit" disabled={status === "loading"}>
                <span>{status === "loading" ? "Envoi en cours..." : "Je réserve mon audit gratuit"}</span>
                {status !== "loading" && <Icon name="arrowRight" size={16} />}
              </button>

              <p className="contact-form__note text-muted">Réponse sous 48h ouvrées.</p>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="contact-form__status contact-form__status--success">
                    Merci, votre demande a bien été envoyée. Nous revenons vers vous rapidement.
                  </p>
                )}
                {status === "error" && (
                  <p className="contact-form__status contact-form__status--error">
                    Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous
                    contacter directement par email.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, required, error, type = "text", ...rest }) {
  return (
    <div className="contact-form__field">
      <label htmlFor={id}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p className="contact-form__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ id, label, options, placeholder, ...rest }) {
  return (
    <div className="contact-form__field">
      <label htmlFor={id}>{label}</label>
      <select id={id} {...rest}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
