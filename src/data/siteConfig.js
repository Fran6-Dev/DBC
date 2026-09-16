// Informations générales de l'agence.
// Email et téléphone : coordonnées réelles communiquées par la cliente.
// Les informations légales (legal.*) restent des placeholders à compléter avant mise en production.
export const siteConfig = {
  name: "DBC",
  legalTradeName: "Développement Business Consulting",
  tagline: "Votre partenaire de confiance pour développer votre activité",
  audience: "artisans, commerçants, TPE et PME",
  siteUrl: "https://www.dbc-conseil.fr", // Placeholder — à remplacer par le nom de domaine définitif
  email: "contact.dbc.pro@gmail.com",
  phoneDisplay: "07 66 98 20 40",
  phoneHref: "+33766982040",
  founder: {
    name: "Djamila Bekkouche",
    role: "Fondatrice de DBC",
    bio: [
      "Au cours de mon parcours professionnel, j'ai évolué dans des secteurs variés, à des postes à responsabilités. Ces expériences m'ont permis de développer une vision globale de l'entreprise : administrative, organisationnelle, commerciale et relationnelle.",
      "En observant le quotidien des dirigeants de TPE, PME, artisans et commerçants, un constat s'est imposé : passionnés par leur métier, ils manquent souvent de temps pour développer leur activité. C'est de ce constat qu'est née DBC.",
      "Parce que chaque entreprise est unique, je privilégie une approche sur-mesure, pragmatique et opérationnelle. Je ne me contente pas de conseiller : je m'implique à vos côtés pour transformer les idées en actions.",
    ],
  },
  address: {
    city: "Montargis",
    postalCode: "45200", // Placeholder
    region: "Loiret, Centre-Val de Loire",
    country: "France",
  },
  // Résumé court, non redondant — utilisé dans le footer, la page contact, etc.
  serviceArea: ["Montargis", "Orléans", "Loiret (45)"],
  serviceAreaShort: "Montargis, Orléans et tout le Loiret (45)",
  // Détail par bassin — utilisé sur la page d'accueil (zone d'intervention) et
  // pour enrichir le SEO local (areaServed). Communes des agglomérations
  // montargoise (AME) et orléanaise (Orléans Métropole).
  serviceAreaGroups: [
    {
      label: "Agglomération montargoise",
      towns: [
        "Montargis",
        "Amilly",
        "Châlette-sur-Loing",
        "Cepoy",
        "Chevillon-sur-Huillard",
        "Villemandeur",
        "Corquilleroy",
        "Pannes",
        "Paucourt",
        "Conflans-sur-Loing",
        "Mormant-sur-Vernisson",
        "Lombreuil",
        "Saint-Maurice-sur-Fessard",
        "Solterre",
        "Vimory",
      ],
    },
    {
      label: "Agglomération orléanaise",
      towns: [
        "Orléans",
        "Olivet",
        "Fleury-les-Aubrais",
        "Saint-Jean-de-Braye",
        "Saran",
        "Ingré",
        "La Chapelle-Saint-Mesmin",
        "Saint-Jean-de-la-Ruelle",
        "Saint-Pryvé-Saint-Mesmin",
        "Ormes",
        "Chécy",
        "Saint-Cyr-en-Val",
        "Saint-Denis-en-Val",
        "Saint-Jean-le-Blanc",
        "Saint-Hilaire-Saint-Mesmin",
        "Marigny-les-Usages",
        "Semoy",
        "Combleux",
        "Bou",
        "Boigny-sur-Bionne",
        "Mardié",
        "Chanteau",
      ],
    },
  ],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/", icon: "instagram" },
    { name: "Facebook", url: "https://www.facebook.com/", icon: "facebook" },
  ],
  legal: {
    legalName: "DBC — Développement Business Consulting", // Placeholder
    legalForm: "Entreprise Individuelle / SASU", // Placeholder — forme juridique à confirmer
    capital: "À compléter", // Placeholder
    siren: "000 000 000", // Placeholder
    siret: "000 000 000 00000", // Placeholder
    headOfficeAddress: "Adresse du siège social à compléter — Montargis (45200)", // Placeholder
    publicationDirector: "À compléter", // Placeholder
    host: {
      name: "Nom de l'hébergeur à compléter", // Placeholder
      address: "Adresse de l'hébergeur à compléter", // Placeholder
      phone: "Téléphone de l'hébergeur à compléter", // Placeholder
    },
  },
};
