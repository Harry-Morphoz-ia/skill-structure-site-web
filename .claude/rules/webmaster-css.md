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

## Animations

- Toute animation respecte `prefers-reduced-motion: reduce` (le reset du kit s'en charge :
  ne pas le contourner).
- Transitions courtes (`var(--transition)`, ~200ms) pour les survols ; les effets riches
  passent par les composants de `src/components/animated/`.

## Interdits

- Pas de framework CSS (Bootstrap, Tailwind...) dans les sites du kit, sauf décision explicite.
- Pas de `!important`, sauf le bloc accessibilité `prefers-reduced-motion` du kit.
- Pas de styles inline dans les pages pour ce que les classes du kit savent déjà faire.
