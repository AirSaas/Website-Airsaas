# Sections Catalog — AirSaaS

> Enrichi à chaque step. Chaque section = un composant React.

## Layout

### Navbar

**Screenshots** : `screenshots/layout/navbar-desktop-1440.png`, `navbar-tablet-768.png`, `navbar-mobile-375.png`

**Desktop (1440px)** — barre horizontale pleine largeur, fond blanc, sticky top :

| Élément | Détail |
|---------|--------|
| Logo | AirSaaS "A" bleu (lien vers `/fr`) — à gauche |
| Nav links (avec chevron) | Solutions ▾, Produit ▾, Ressources ▾ — dropdowns (hover) |
| Nav links (directs) | Témoignages → `/temoignages`, Intégrations → `/les-integrations`, Nouveautés → `/les-nouveautes-produit`, Le Quarter plan → `/quarter-plan`, Intégration teams → `/microsoft-teams-airsaas` |
| Sélecteur langue | Drapeau + "Français" ▾ — à droite |
| CTA Login | Bouton outline → `https://app.airsaas.io/fr/login` |
| CTA principal | "Demander une démo" — bouton rempli bleu primary → `/meetings-pages` |

**Tablet/Mobile (768px / 375px)** — navbar simplifiée :
- Logo à gauche
- Sélecteur langue au centre
- Hamburger menu (☰) à droite — ouvre probablement un drawer/overlay avec tous les liens

**Comportement scroll** : la navbar reste sticky en haut. Pas de changement transparent → solid observé (fond blanc dès le départ).

**Note** : les dropdowns Solutions/Produit/Ressources ne montrent pas de mega-menu panel visible — ils semblent ne pas avoir de sous-menus visuels actuellement sur le live site. À vérifier si c'est un bug ou si les dropdowns sont désactivés.

### Footer

**Screenshots** : `screenshots/layout/footer-desktop-1440.png`, `footer-mobile-375.png`

**Desktop** — fond bleu primary (#3a51e2), texte blanc, 4 colonnes :

| Colonne | Liens |
|---------|-------|
| **Entreprise** | Pourquoi AirSaas ?, Cookies, Conditions d'utilisation, Mentions légales, Charte de confidentialité, Kit média, API AirSaas, Plan du site |
| **Ressources** | Les Pro. de la Transfo., Le blog d'AirSaas, La conduite de projet, Portfolio project Management, Témoignages clients |
| **Solutions** | Management de portefeuille projet, Flash report automatisé, Flash report projet, Outil PPM, Outil de pilotage projet, Outil de gestion de portefeuille projet, Plan stratégique, Portfolio management, Revue de portefeuille, Tableau de bord portefeuille de projet, Tableau de bord DSI, Tableau de bord de gestion de projet |
| **Alternative à** | Sciforma, Planview Portfolio |

**Barre inférieure** : Logo AirSaaS blanc + "Made with love in France" + drapeau FR

**Mobile** : colonnes empilées verticalement, centrées. Titres de section en blanc bold. Même contenu que desktop.

**Pas de réseaux sociaux** visibles dans le footer.

## Homepage

> Complété au Step 1. Chaque section = un composant React dans `src/components/sections/`.

| # | Composant | Fichier | Heading | Props/Notes |
|---|-----------|---------|---------|-------------|
| S01 | `HeroTabs` | `HeroTabs.tsx` | "La solution de [rotating] pour aligner le top management" | Client component, 6 tabs (Portfolio, Quarter plan, Capacitaire, Priorisation, Roadmap, Reporting), mot animé toutes les 3s |
| S02 | `PressLogos` | `PressLogos.tsx` | "Ils parlent de nous" | 4 cards (Alliancy, JDN, Le Point, LMI) avec citations + logos |
| S03 | `LinkedInTestimonials` | `LinkedInTestimonials.tsx` | — | 3 cards LinkedIn (Sagnimorte, Lhomme, Royer), fond `bg-alt` |
| S04 | `Stats` | `Stats.tsx` | "Les chiffres qui vous feront adopter AirSaas" | 3 stats (80%, 100%, 30K€) |
| S05 | `PlatformIntro` | `PlatformIntro.tsx` | "Une plateforme de gouvernance projet à la hauteur de vos ambitions" | Texte centré, pas d'image |
| S06 | `FeatureSection` | `FeatureSection.tsx` | "Partagez simplement les roadmaps à toute l'organisation" | Réutilisable : heading + description + image, `reversed`, `bgColor` |
| S07 | `FeatureSection` | — | "Un capacity planning par équipe simple et actionnable" | bgColor=lavender, blockquotes |
| S08 | `FeatureSection` | — | "Chaque directeur définit ses prios" | Layout normal |
| S09 | `FeatureSection` | — | "Diffusez un cadrage projet standardisé" | reversed, bgColor=alt |
| S10 | `FeatureNewsletter` | `FeatureNewsletter.tsx` | "Une newsletter sponsor que votre direction va adorer" | Image gauche + 3 features droite (Tendance, Projets, Retard) |
| S11 | `FeatureSection` | — | "Votre reporting projet en un clic" | Layout normal |
| S12 | `FeatureSection` | — | "Fluidifiez votre prise de décisions importantes et urgentes" | reversed, bgColor=alt |
| S13 | `CtaMidpage` | `CtaMidpage.tsx` | "Et si vous repreniez le contrôle de votre portefeuille de projets ?" | CTA "Réservez une démo" |
| S14 | `IntegrationsCarousel` | `IntegrationsCarousel.tsx` | "Grâce à sa marketplace AirSaas s'intègre nativement..." | Texte gauche + image droite |
| S15 | `SansAvecComparison` | `SansAvecComparison.tsx` | "Nos clients ne peuvent plus imaginer leurs vies sans AirSaas" | 7 lignes Sans/Avec + CTA |
| S16 | `CustomerStories` | `CustomerStories.tsx` | "Laissez nos clients vous parler d'AirSaas" | 9 cartes (3×3 grid), lien /temoignages |

### Composants UI réutilisables

| Composant | Fichier | Usage |
|-----------|---------|-------|
| `Container` | `ui/Container.tsx` | Max-width 1200px + padding |
| `Button` | `ui/Button.tsx` | Variants: primary, secondary, tertiary, outline. Sizes: sm, default, lg |

### Layout

| Composant | Fichier | Usage |
|-----------|---------|-------|
| `Navbar` | `layout/Navbar.tsx` | Sticky, logo + 3 dropdowns + 5 links + langue + Login + CTA demo. Mobile hamburger |
| `Footer` | `layout/Footer.tsx` | Fond bleu #3a51e2, 4 colonnes, bottom bar avec logo + "Made with love in France" |

## Solution Pages

<!-- À remplir au Step 2 -->

## Produit Pages

<!-- À remplir au Step 3 -->

## Équipes Pages

<!-- À remplir au Step 3 -->

## Compare Pages

<!-- À remplir au Step 3 -->

## Landing Pages

<!-- À remplir au Step 4 -->
