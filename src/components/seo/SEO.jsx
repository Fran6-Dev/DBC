import { useEffect } from "react";
import { siteConfig } from "../../data/siteConfig";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Gère les balises meta, le canonical et les données structurées de chaque page.
 * Pas de dépendance externe : manipulation directe et légère du <head>.
 */
export default function SEO({ title, description, path = "/", jsonLd }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | DBC — Développement Business Consulting` : siteConfig.tagline;
    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", `${siteConfig.siteUrl}${path}`);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);

    upsertLink("canonical", `${siteConfig.siteUrl}${path}`);

    const list = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    list.forEach((data, index) => upsertJsonLd(`ld-json-${index}`, data));

    // Nettoyage des anciens scripts JSON-LD au-delà du nombre courant.
    let i = list.length;
    while (document.getElementById(`ld-json-${i}`)) {
      document.getElementById(`ld-json-${i}`).remove();
      i += 1;
    }
  }, [title, description, path, jsonLd]);

  return null;
}
