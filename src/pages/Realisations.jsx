import { useMemo, useState } from "react";
import SEO from "../components/seo/SEO";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import ProjectCard from "../components/sections/ProjectCard";
import CTASection from "../components/sections/CTASection";
import { projects, projectCategories } from "../data/projects";
import { buildBreadcrumbSchema } from "../lib/structuredData";
import "./Realisations.css";

export default function Realisations() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const categories = useMemo(() => ["Toutes", ...projectCategories], []);

  const filteredProjects =
    activeCategory === "Toutes" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Réalisations — Nos projets clients"
        description="Découvrez un aperçu des projets menés par DBC pour ses clients de Montargis, du Loiret et d'Orléans : sites web, référencement, identité visuelle, réseaux sociaux et développement commercial."
        path="/realisations"
        jsonLd={buildBreadcrumbSchema([{ label: "Accueil", to: "/" }, { label: "Réalisations" }])}
      />

      <section className="section realisations-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Accueil", to: "/" }, { label: "Réalisations" }]} />
          <Reveal delay={1} className="realisations-hero__content">
            <span className="eyebrow">Réalisations</span>
            <h1>Des projets pensés pour faire la différence.</h1>
            <p className="text-lead">
              Cette galerie présente actuellement des exemples représentatifs de nos
              accompagnements. Elle est amenée à s'enrichir régulièrement de nouveaux projets
              clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section realisations-grid-section">
        <div className="container">
          <div className="realisations-filters" role="group" aria-label="Filtrer les réalisations par catégorie">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`realisations-filter ${activeCategory === category ? "is-active" : ""}`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={Math.min((index % 5) + 1, 5)} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Votre projet, bientôt ici"
        title="Envie de faire partie de nos prochaines réalisations ?"
        text="Parlons de votre activité et de vos objectifs pour construire ensemble un accompagnement sur mesure."
        primaryLabel="Parlons de votre projet"
        primaryTo="/contact"
      />
    </>
  );
}
