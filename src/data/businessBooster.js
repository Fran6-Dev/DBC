// Contenu du programme phare de DBC : Business Booster 90.
// Source : document fourni par la cliente (brief + maquette de landing page).

export const constat = {
  eyebrow: "Le constat",
  title: "Vous reconnaissez-vous dans l'une de ces situations ?",
  lead: "Passionné par votre métier, difficile de trouver le temps de structurer une vraie stratégie de développement.",
  challenges: [
    "Vous manquez de temps pour prospecter",
    "Vos réseaux sociaux sont peu actifs",
    "Votre administratif s'accumule",
    "Vos factures restent impayées",
    "Vous manquez d'organisation",
  ],
  support: [
    "Développer votre clientèle",
    "Gagner en visibilité",
    "Optimiser votre organisation",
    "Sécuriser votre trésorerie",
    "Vous faire gagner du temps",
  ],
};

export const piliers = [
  {
    step: "01",
    title: "Visibilité digitale",
    description:
      "Être trouvé au bon moment, par les bonnes personnes : site web, fiche Google, campagnes Ads, réseaux sociaux.",
  },
  {
    step: "02",
    title: "Acquisition & fidélisation",
    description:
      "Transformer la visibilité en clients, et les clients en clients réguliers : prospection ciblée, cartes NFC, fidélité.",
  },
  {
    step: "03",
    title: "Gestion & administratif",
    description:
      "Libérer du temps sur ce qui ne crée pas de valeur : gestion administrative, relances amiables des créances.",
  },
];

export const methodQuote = "Une acquisition client régulière, sans que cela vous prenne du temps.";

export const leviers = [
  {
    category: "Développement commercial",
    items: [
      "Prospection & identification de clients potentiels",
      "Fidélisation de votre clientèle existante",
      "Stratégie commerciale & plan d'action",
      "Développement du portefeuille clients",
      "Accompagnement personnalisé et suivi sur mesure",
    ],
  },
  {
    category: "Visibilité & communication",
    items: [
      "Création et refonte de site internet",
      "Référencement naturel (SEO)",
      "Optimisation de votre fiche Google (GMB)",
      "Stratégie de contenu & animation des réseaux sociaux",
      "Charte graphique et identité visuelle",
    ],
  },
  {
    category: "Gestion administrative",
    items: ["Organisation et suivi administratif", "Classement et gestion documentaire"],
  },
  {
    category: "Recouvrement de créances",
    items: [
      "Relances amiables",
      "Suivi des créances",
      "Préservation de la relation client",
      "Amélioration de la trésorerie",
    ],
  },
];

// Les 4 cartes de réassurance et le bandeau de mots-clés vivent dans
// data/values.js (source unique, réutilisée par la page À propos).
export { values as reassuranceCards, reassuranceBadges } from "./values";

export const auditChecklist = [
  "Diagnostic de votre présence en ligne actuelle",
  "Identification des leviers prioritaires pour votre activité",
  "Aucun engagement de votre part",
];

export const bb90Faq = [
  {
    q: "Combien ça coûte ?",
    a: "Chaque accompagnement est différent car chaque activité est différente. L'audit gratuit permet d'établir une proposition claire et adaptée à votre budget.",
  },
  {
    q: "Je n'ai pas le temps de m'en occuper.",
    a: "C'est justement pour ça que DBC existe : je prends en charge la mise en œuvre pour que vous restiez concentré sur votre métier.",
  },
  {
    q: "Est-ce que ça marche pour mon secteur d'activité ?",
    a: "La méthode s'adapte à votre activité, votre zone de chalandise et votre clientèle : artisan, commerçant, TPE ou PME.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Le programme est structuré sur 90 jours, avec des actions concrètes dès les premières semaines.",
  },
];
