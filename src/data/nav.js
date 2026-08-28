export const primaryNav = [
  { label: "Accueil", to: "/" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Référencement naturel", to: "/services/referencement-naturel" },
      { label: "Création de site web", to: "/services/site-web" },
      { label: "Google Business Profile", to: "/services/google-business" },
      { label: "Community management", to: "/services/community-management" },
      { label: "Charte graphique", to: "/services/charte-graphique" },
      { label: "Développement commercial", to: "/services/developpement-commercial" },
    ],
  },
  { label: "À propos", to: "/a-propos" },
  { label: "Réalisations", to: "/realisations" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const footerNavColumns = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", to: "/" },
      { label: "Services", to: "/services" },
      { label: "À propos", to: "/a-propos" },
      { label: "Réalisations", to: "/realisations" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Référencement naturel", to: "/services/referencement-naturel" },
      { label: "Création de site web", to: "/services/site-web" },
      { label: "Google Business", to: "/services/google-business" },
      { label: "Community management", to: "/services/community-management" },
      { label: "Charte graphique", to: "/services/charte-graphique" },
      { label: "Développement commercial", to: "/services/developpement-commercial" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Mentions légales", to: "/mentions-legales" },
      { label: "Politique de confidentialité", to: "/politique-confidentialite" },
      { label: "Gestion des cookies", to: "/gestion-cookies" },
    ],
  },
];
