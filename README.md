# Kit Site Web Morphoz IA

L'usine à sites de Morphoz IA. On le met au point une seule fois, puis chaque nouveau site
client se fabrique en suivant toujours les mêmes étapes, avec les bonnes pratiques déjà intégrées.

C'est le pendant, côté sites vitrines, du kit IAPreneurs (`/start`, `/architect`…) qui, lui,
sert à construire des applications.

---

## Ce que le kit garantit sur chaque site

- **Cahier des charges** clair : objectif business, cible, action de conversion voulue.
- **Palette de couleurs testée** : contraste vérifié (norme d'accessibilité WCAG), texte toujours lisible.
- **Responsive cohérent** : mobile-first, validé sur 320 / 480 / 768 / 1280 px.
- **Structure webmaster propre** : un seul H1, hiérarchie H2/H3, typo en `clamp()`, boutons calibrés.
- **SEO Google** : title, meta, Open Graph, sitemap, robots.txt, données structurées JSON-LD.
- **Emplacements médias normés** : tu déposes `hero.jpg` au bon endroit, le site l'affiche déjà.
- **Animations distinctives** : jamais le rendu « template IA générique ».
- **Contrôle qualité automatique** avant livraison (responsive, contraste, Lighthouse, liens morts).

---

## Structure

```
kit-site-web/
├── README.md            ← ce fichier (manifeste + feuille de route)
├── CLAUDE.md            ← contexte pour Claude Code quand il travaille dans le kit
├── template/            ← le squelette de site à copier pour démarrer (zéro-config)
│   ├── index.html
│   └── assets/
│       ├── css/  js/
│       ├── images/hero/     ← dépose hero.jpg ici
│       ├── images/galerie/  ← dépose tes photos ici
│       └── videos/          ← dépose tes vidéos ici
├── .claude/
│   ├── skills/          ← les commandes /site-cadrer, /site-style, /site-construire…
│   └── rules/           ← bonnes pratiques webmaster auto-chargées sur les fichiers HTML/CSS
└── docs/                ← guides (créer un site en 6 étapes, specs formats médias…)
```

---

## Le workflow (une fois le kit terminé)

```
/site-cadrer  →  /site-style  →  /site-construire  →  /site-seo  →  /site-animer  →  /site-verifier  →  livraison Hostinger
   brief         palette+typo      HTML responsive      référencement   animations      contrôle qualité
```

---

## Feuille de route de construction du kit

| Phase | Objet | État |
|-------|-------|------|
| 0 | Fondations git + structure du kit | ✅ fait |
| 1 | Squelette de site (template zéro-config) | ✅ fait |
| 2 | Règles webmaster auto-chargées (Hn, typo, boutons, contraste, images) | ⬜ |
| 3 | Skills de méthode (`/site-cadrer`, `/site-style`, `/site-construire`) | ⬜ |
| 4 | SEO Google (meta, sitemap, JSON-LD) | ⬜ |
| 5 | Animations non-génériques | ⬜ |
| 6 | Vérification automatique (Playwright + contraste + Lighthouse) | ⬜ |
| 7 | Migration des sites existants (morphoz-ia, elie-chouraqui, france-prestige) | ⬜ |
| 8 | Documentation finale | ⬜ |

**Option remise à plus tard :** référencement sur les IA (llms.txt + données structurées enrichies
pour être cité par ChatGPT / Claude). À intégrer après le SEO Google classique.

---

Morphoz IA · morphoz.io · harry@morphoz.io
