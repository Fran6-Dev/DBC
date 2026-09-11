import { siteConfig } from "../data/siteConfig";

// Liste complète des communes ciblées pour le SEO local (areaServed) :
// villes principales + communes des agglomérations montargoise et
// orléanaise, en plus du département et de la région.
const allServiceAreaTowns = siteConfig.serviceAreaGroups.flatMap((group) => group.towns);

const areaServedSchema = [
  ...allServiceAreaTowns.map((name) => ({ "@type": "City", name })),
  { "@type": "AdministrativeArea", name: "Loiret" },
  { "@type": "State", name: "Centre-Val de Loire" },
];

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DBC — Développement Business Consulting",
    description:
      "Agence de consulting basée à Montargis, accompagnant les entreprises de l'agglomération montargoise et de l'agglomération orléanaise, du Loiret et de la région Centre-Val de Loire dans leur développement digital et commercial.",
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: "Centre-Val de Loire",
      addressCountry: "FR",
    },
    areaServed: areaServedSchema,
    sameAs: siteConfig.socials.map((s) => s.url),
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items
      .filter((item) => item.to)
      .map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: `${siteConfig.siteUrl}${item.to}`,
      })),
  };
}

export function buildFaqSchema(items) {
  if (!items?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "DBC — Développement Business Consulting",
      url: siteConfig.siteUrl,
    },
    areaServed: areaServedSchema,
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
  };
}
