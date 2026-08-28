# DBC — Développement Business Consulting

Site vitrine premium pour l'agence de consulting DBC, construit avec React (Vite) et React Router.

## Démarrer le projet

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:5173.

Pour générer la version de production :

```bash
npm run build
npm run preview   # pour prévisualiser le build de production
```

## Structure du projet

```
src/
  components/
    layout/    Navbar, Footer, Layout, ScrollToTop
    ui/        Button, SectionTitle, Breadcrumb, Reveal, Icon
    sections/  ServiceCard, ValueCard, ProcessTimeline, ProjectCard,
               TestimonialCard, FAQAccordion, CTASection, LocalAreaSection
    cookies/   CookieBanner, CookiePreferencesModal
    seo/       SEO (balises meta + JSON-LD par page)
  context/     CookieConsentContext (gestion RGPD des cookies)
  data/        Contenu du site (services, FAQ, témoignages, réalisations,
               coordonnées, navigation) — à modifier pour mettre à jour le contenu
  lib/         structuredData.js (Schema.org), contactService.js (envoi du formulaire)
  pages/       Une page par route
  styles/      tokens.css (charte graphique), global.css, animations.css
public/
  sitemap.xml, robots.txt, favicon.svg
```

## Avant la mise en production — à compléter impérativement

Le site utilise volontairement des **placeholders** à la place d'informations
officielles que nous n'avons pas inventées :

- **`src/data/siteConfig.js`** : email, téléphone, adresse, informations légales
  (SIREN/SIRET, forme juridique, hébergeur...).
- **`src/pages/MentionsLegales.jsx`** et **`PolitiqueConfidentialite.jsx`** :
  relisent `siteConfig.legal`, à vérifier avec un professionnel du droit avant
  publication.
- **`src/lib/contactService.js`** : le formulaire de contact simule
  actuellement l'envoi. Il faut y brancher un service réel (API interne,
  Formspree, EmailJS, fonction serverless...).
- **`src/data/testimonials.js`** et **`src/data/projects.js`** : contenus
  temporaires clairement identifiés (`placeholder: true`), à remplacer par de
  vrais témoignages clients et réalisations (avec de vraies photos).
- **Photos** : les visuels de réalisations et la photo d'équipe (page « À
  propos ») sont pour l'instant des blocs graphiques abstraits, à remplacer
  par de vraies photos éditoriales.
- **`index.html`** : mettre à jour `siteConfig.siteUrl` (nom de domaine
  définitif) et l'URL correspondante dans `public/sitemap.xml` et
  `public/robots.txt`.
- **Analytics** : un outil de mesure d'audience compatible RGPD peut être
  branché ultérieurement ; le système de consentement cookies (catégorie
  « analytique ») est déjà prêt à l'accueillir.

## Ajouter du contenu

Tout le contenu éditorial (services, FAQ, témoignages, réalisations,
valeurs, méthode) est centralisé dans `src/data/`, sous forme de tableaux
JavaScript simples : il suffit de modifier ces fichiers pour mettre à jour le
site, sans toucher aux composants.
