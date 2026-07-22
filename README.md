# Kit Site Web

Une usine à sites : un ensemble de skills et un squelette réutilisable pour construire des sites
vitrines professionnels, toujours avec les mêmes bonnes pratiques de webmaster. On met le kit au
point une fois, puis chaque nouveau site se fabrique en suivant la même méthode guidée.

Le kit n'est pas un template figé : c'est une **méthode qui pose les bonnes questions** (via
`/site-start`), en déduit un cahier des charges, puis construit le site à partir de ce cahier.

---

## Ce que le kit garantit sur chaque site

- **Cahier des charges** complet façon webmaster (entreprise, objectif, structure, réseaux, SEO, légal).
- **Palette de couleurs testée** : contraste vérifié (norme d'accessibilité WCAG), texte toujours lisible.
- **Responsive cohérent** : mobile-first, validé sur 320 / 480 / 768 / 1280 px.
- **Structure webmaster propre** : un seul H1, hiérarchie H2/H3, typo en `clamp()`, boutons calibrés.
- **SEO** : title, meta, Open Graph, sitemap, robots.txt, données structurées JSON-LD.
- **Réseaux sociaux** : icônes cliquables qui prennent automatiquement la couleur de la palette.
- **Emplacements médias normés** : on dépose `hero.jpg` au bon endroit, le site l'affiche.
- **Animations distinctives** : jamais le rendu « template générique ».
- **Contrôle qualité automatique** avant livraison (responsive, contraste, Lighthouse, liens morts).

---

## Structure

```
kit-site-web/
├── README.md            ← ce fichier
├── CLAUDE.md            ← contexte pour l'assistant IA quand il travaille dans le kit
├── template/            ← projet Astro à copier pour démarrer un site
│   ├── package.json  astro.config.mjs
│   ├── src/
│   │   ├── config/site.js      ← nom, coordonnées, réseaux (à remplir une fois)
│   │   ├── styles/global.css   ← les design tokens (palette, typo)
│   │   ├── layouts/            ← squelette de page commun (SEO, en-tête, pied de page)
│   │   ├── components/         ← en-tête, pied de page, hero, cartes, formulaire, réseaux
│   │   └── pages/              ← une page = une route (index, services, a-propos, contact)
│   └── public/assets/          ← images (hero, galerie), vidéos, robots.txt
├── tools/contrast.mjs   ← test de lisibilité WCAG (utilisé par /site-style)
├── .claude/
│   ├── skills/          ← les commandes /site-start, /site-style, /site-construire…
│   └── rules/           ← bonnes pratiques webmaster auto-chargées sur les fichiers HTML/CSS
└── docs/                ← guides
```

---

## Installation

Le kit s'utilise avec Claude Code. Après avoir cloné ce dépôt :

```bash
git clone https://github.com/<compte>/skill-structure-site-web.git
cd skill-structure-site-web
```

Pour rendre les skills invocables (`/site-start`, etc.) et activer les règles webmaster
auto-chargées, copie les dossiers `.claude/skills/` et `.claude/rules/` dans le `.claude/`
de ton projet (ou à la racine où tu lances Claude Code) :

```bash
cp -r .claude/skills/* <ton-projet>/.claude/skills/
cp -r .claude/rules/*  <ton-projet>/.claude/rules/
```

Puis lance `/site-start` pour cadrer ton premier site.
**Guide pas à pas complet** (de zéro à la mise en ligne) : `docs/guide-creation-site.md`.

### Lancer un site (template Astro)

```bash
cp -r template ../mon-site && cd ../mon-site
npm install        # une seule fois
npm run dev        # aperçu local sur http://localhost:4321
npm run build      # génère dist/ : les fichiers statiques à mettre en ligne
```

Pour publier : envoyer le contenu de `dist/` sur l'hébergement (Hostinger, Netlify, Vercel…),
ou brancher un déploiement automatique.

---

## Le workflow

```
/site-start   →   /site-style   →   /site-construire   →   /site-seo   →   /site-verifier   →   mise en ligne
 cahier des        palette+typo       génère le site        référencement    contrôle qualité
 charges           +contraste         Astro + animations
```

Après la mise en ligne, le site vit avec **`/site-modification`** : toute évolution passe
par une sauvegarde git, les bonnes méthodes, et une re-vérification avant republication.

## Stack cible des sites

**Astro** : produit du HTML statique rapide, publiable sur n'importe quel hébergement statique
(Hostinger, Netlify, Vercel, OVH, GitHub Pages…), tout en permettant d'injecter des composants
animés React là où il faut un effet fort.

- **Animations 21st.dev** : connecteur officiel « Magic MCP » + clé API → génération à la demande.
- **Animations Aceternity UI** : composants React piochés et intégrés en îlots Astro.

---

## Feuille de route de construction du kit

| Phase | Objet | État |
|-------|-------|------|
| 0 | Fondations git + structure du kit | ✅ fait |
| 1 | Squelette de base HTML/CSS (sert de base au template Astro) | ✅ fait |
| 2 | Skill `/site-start` : cahier des charges webmaster complet | ✅ fait |
| 3 | Skill `/site-style` : palette + typo + test de contraste + choix animations | ✅ fait |
| 4 | Template Astro multi-pages + React + effet aurora fourni (21st/Aceternity en copier-coller, voir docs/animations.md) | ✅ fait |
| 5 | Skill `/site-construire` : génère le site Astro depuis brief + tokens | ✅ fait |
| 6 | Règles webmaster auto-chargées (webmaster-html.md, webmaster-css.md) | ✅ fait |
| 7 | SEO : skill `/site-seo` + JSON-LD auto (SeoSchema) + sitemap intégré | ✅ fait |
| 8 | Vérification : skill `/site-verifier` + outil verifier.mjs (GO/NO-GO) | ✅ fait |
| 9 | Guide de migration d'un site existant vers le kit | ⬜ |
| 10 | Documentation finale (`docs/guide-creation-site.md`) | ✅ fait |
| 11 | Cycle de vie : `/site-modification` + mise en ligne multi-hébergeurs + tuto formulaire | ✅ fait |

**Option plus tard :** référencement sur les IA (llms.txt + données structurées enrichies pour
être cité par les assistants IA), après le SEO classique.

---

## Licence

Distribué sous licence **MIT** (voir le fichier `LICENSE`) : libre d'utilisation, de modification
et de revente. Dans `LICENSE`, remplace **« votre société »** par le nom sous lequel tu veux
apparaître comme auteur (ton nom ou celui de ton agence).
