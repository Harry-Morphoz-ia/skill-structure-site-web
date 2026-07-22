---
paths: ["**/src/styles/**/*.css"]
---

# Règles webmaster — styles

Chargées automatiquement dès qu'une feuille de style d'un site du kit est éditée.

## Design tokens d'abord

- **Toute couleur passe par un token** (`var(--c-...)`). Une couleur en dur dans une règle
  CSS est une erreur : si elle mérite d'exister, elle mérite un token dans `:root`.
- Nouvelle paire texte/fond → **tester le contraste avant de valider** :
  `node tools/contrast.mjs "#texte,#fond"` (WCAG AA : ≥ 4.5:1 texte courant, ≥ 3:1 grand texte/UI).
- Les ombres colorées se dérivent de la palette :
  `color-mix(in srgb, var(--c-primary) 30%, transparent)`.

## Typographie

- Tailles en `clamp()` ou `rem`, **jamais en `px` fixes**.
- Corps de texte : 16px minimum d'équivalent (`--fs-body`).
- Les familles passent par `--font-title` / `--font-body`.

## Responsive

- **Mobile-first** : le CSS de base cible le mobile (320px+), les `@media (min-width: ...)`
  agrandissent. Jamais l'inverse (`max-width` en desktop-first).
- Points de rupture du kit : **768px** (tablette) et **1024px** (desktop). Ne pas en inventer
  d'autres sans raison.
- Images fluides : `max-width: 100%` + `object-fit: cover` + `aspect-ratio`.
- Interdit : un élément qui crée un défilement horizontal sur mobile.

## Langage visuel actuel : jamais un rendu « WordPress »

Le kit fournit des blocs modernes prêts à l'emploi. **Tout site en utilise au moins deux**
(sauf brief très sobre explicite), pour ne jamais ressembler à un thème corporate daté :

- `.text-gradient` : un mot ou groupe de mots clé en dégradé de marque (hero via la prop
  `titleAccent`, ou un titre de section). Un par page suffit, pas partout.
- `.section-dark` : bande sombre à fort impact (chiffres, CTA final) avec halo dérivé
  de la palette.
- `<Stats items={...} />` : chiffres clés avec compteurs animés (chiffres RÉELS du brief
  uniquement, jamais inventés).
- `.card-glass` : cartes en verre dépoli sur fond sombre ou sur image.
- `.bento` + `.bento-lg` : grille asymétrique avec un bloc vedette (réalisations, offres).
- Hero : halos lumineux + trame fine automatiques (aux couleurs du site), pastille
  `eyebrow` au-dessus du titre.

**Garde-fou** : tous ces effets se dérivent des tokens (`--gradient`, `color-mix` sur
`--c-primary`). Le dégradé violet/rose générique « IA » reste interdit : si la palette du
client est verte, les halos et dégradés sont verts.

## Animations : un site vivant par défaut

- **Un site du kit n'est jamais figé.** Le minimum sur tout site (déjà intégré au template,
  ne pas le retirer sauf brief « quasi statique ») : apparition des blocs au défilement
  (système `.reveal` + script du BaseLayout), entrée animée du hero, survols riches sur
  cartes / images / boutons.
- Marqueurs « site daté » interdits : sections qui apparaissent toutes d'un bloc sans
  transition, survols inertes (aucun retour visuel), hero totalement immobile, ombres grises
  par défaut au lieu des ombres dérivées de la palette.
- Toute animation respecte `prefers-reduced-motion: reduce` (le reset du kit s'en charge :
  ne pas le contourner).
- Transitions courtes (`var(--transition)`, ~200ms) pour les survols ; les effets riches
  passent par les composants de `src/components/animated/`.
- Courbe du kit pour les entrées : `cubic-bezier(0.22, 0.61, 0.36, 1)` (déjà utilisée par
  le reveal et le hero), pour garder un mouvement cohérent partout.

## Interdits

- Pas de framework CSS (Bootstrap, Tailwind...) pour le style du site lui-même.
  **Exception îlots animés** : un composant React copié (21st.dev, Aceternity) qui repose
  sur Tailwind peut l'utiliser (`npx astro add tailwind`) ; ses couleurs passent quand même
  par les tokens (`bg-[var(--c-primary)]`), voir `integration-composant.md`.
- Pas de `!important`, sauf le bloc accessibilité `prefers-reduced-motion` du kit.
- Pas de styles inline dans les pages pour ce que les classes du kit savent déjà faire.
