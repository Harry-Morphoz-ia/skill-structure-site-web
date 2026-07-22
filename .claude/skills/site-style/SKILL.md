---
name: site-style
description: Deuxième skill du kit de création de sites web. Lit le brief.md d'un site et définit son identité visuelle : palette de couleurs testée en contraste (WCAG AA via l'outil contrast.mjs), typographie, et niveau d'animation. Écrit les design tokens dans le CSS du site + un design-tokens.md. Route ensuite vers /site-construire. Utiliser après /site-start. Ne PAS utiliser sans brief.md (lancer /site-start d'abord).
---

# Skill /site-style — identité visuelle testée d'un site

## Pour quoi faire

Deuxième étape, après le cahier des charges. Le skill transforme les intentions du `brief.md`
(style, palette éventuelle, niveau d'animation) en **choix visuels concrets et validés** :
une palette dont la lisibilité est prouvée, une typographie, et un plan d'animation. Il écrit
ces choix dans les « design tokens » (les variables CSS) du site.

Sortie : `site-[nom]/assets/css/style.css` (bloc `:root` rempli) + `site-[nom]/design-tokens.md`
+ suggestion de lancer `/site-construire`.

## Règles d'or

1. **Une palette n'est validée que si elle passe le test de contraste.** Jamais de couleur au jugé.
1bis. **Jamais l'esthétique « IA par défaut ».** Pas de dégradé violet/rose générique sans
   lien avec la marque : la palette se construit depuis le secteur, le style et les
   références du brief. Deux clients différents ne reçoivent jamais la même palette.
2. **Toujours expliquer un choix visuel en langage simple** (l'utilisateur n'est pas designer).
3. Cohérence avec le `brief.md` : style, secteur, objectif de conversion.
4. Jamais de tiret cadratin ( — ) dans les fichiers produits.

## Comment procéder

### Étape 1 — Lire le brief

Ouvrir `site-[nom]/brief.md`. Récupérer : style/ambiance (section E), palette existante ou non
(section E), secteur (section A), objectif de conversion (section B), niveau d'animation (section J).

### Étape 2 — Composer la palette

Définir les 10 rôles de couleur (mêmes noms que les tokens du template) :

| Token | Rôle |
|-------|------|
| `--c-bg` | fond principal |
| `--c-text` | texte principal |
| `--c-text-soft` | texte secondaire |
| `--c-primary` | couleur d'action (boutons, liens, icônes sociales) |
| `--c-primary-soft` | variante claire du primary |
| `--c-surface` | fond des cartes |
| `--c-surface-alt` | fond des sections alternées |
| `--c-border` | bordures |
| `--c-bg-dark` | fond sombre (hero) |
| `--c-on-primary` | texte posé sur le primary |

- **Palette fournie dans le brief** → la reprendre, ajuster seulement si le contraste échoue.
- **À créer** → partir du style/ambiance :
  - Sobre & pro → bleus/gris, primary sobre.
  - Moderne & tech → contrasté, primary vif (indigo, cyan), fond clair ou sombre.
  - Luxe & élégant → neutres profonds + un accent doré/bordeaux, beaucoup de blanc.
  - Chaleureux & humain → tons terre, orangés doux, beige.
- **Extraire du logo** → prélever 1 à 2 couleurs dominantes du logo comme primary.

### Étape 3 — TESTER le contraste (obligatoire)

Lancer l'outil sur les paires critiques :

```bash
node tools/contrast.mjs \
  "<c-text>,<c-bg>" \
  "<c-text-soft>,<c-bg>" \
  "<c-text>,<c-surface>" \
  "<c-on-primary>,<c-primary>" \
  "<c-primary>,<c-bg>"
```

Exigence : **AA texte (>=4.5:1)** pour tout texte courant ; **>=3:1** accepté seulement pour
grand texte et éléments d'interface. Si une paire échoue, **ajuster la couleur et relancer**
jusqu'au vert. Ne jamais passer à l'étape suivante avec un échec.

### Étape 4 — Choisir la typographie

Un couple titre + corps via Google Fonts, cohérent avec le style :
- Sobre/pro → Inter, Work Sans. Moderne/tech → Space Grotesk + Inter. Luxe → Cormorant/Playfair + Inter. Chaleureux → Poppins, Nunito.
- Corps toujours très lisible (16px min, `clamp()`).
Mettre à jour `--font-title` et `--font-body` + le `<link>` Google Fonts dans `index.html`.

### Étape 5 — Écrire les tokens

Remplacer le bloc `:root` de `site-[nom]/assets/css/style.css` avec les valeurs validées.
Créer `site-[nom]/design-tokens.md` récapitulant palette (avec ratios de contraste obtenus),
typo, et justification en une phrase par choix.

### Étape 6 — Plan d'animation (selon brief section J)

- **Quasi statique** → aucune animation ajoutée.
- **Discrètes** → animations CSS (apparition au défilement, survols). Pas de dépendance.
- **Très animé (effet wow)** → prévoir les composants React animés dans la phase Astro :
  - Signaler qu'il faudra activer le connecteur **21st.dev (Magic MCP)** : clé API sur `21st.dev/magic/console`, ajoutée au `.mcp.json`.
  - Et/ou piocher des composants **Aceternity UI** à intégrer en îlots Astro.
  - Lister ici 2 à 3 effets visés (hero animé, cartes au survol, fond en dégradé animé).

### Étape 7 — Router

Récapituler palette + typo + niveau d'animation en quelques lignes, puis :

> Identité visuelle validée (contraste testé). Prochaine étape : `/site-construire` pour générer
> le site à partir du brief et de ces tokens.

## Ce que /site-style ne fait pas

- Ne rédige pas les textes ni ne construit les pages (c'est `/site-construire`).
- Ne déploie rien.
