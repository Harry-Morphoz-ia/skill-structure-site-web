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

## Le principe : des skills qui posent les bonnes questions

Le kit n'est pas un template figé. C'est une **méthode guidée** : la personne lance `/site-start`,
le kit lui pose les bonnes questions (type de site, société, objectif, palette, style, animations),
et il en déduit le site. Le template n'est que le point d'arrivée que ces skills remplissent.

```
/site-start   →   /site-style   →   /site-construire   →   /site-seo   →   /site-verifier   →   livraison
 questionnaire     palette+typo       génère le site        référencement    contrôle qualité
 cadrage+design    +contraste         Astro + animations
```

## Stack cible des sites

**Astro** (validé le 22/07/2026) : produit du HTML statique rapide, publiable sur Hostinger,
mais permet d'injecter des composants animés React là où il faut un effet fort.

- **Animations 21st.dev** : connecteur officiel « Magic MCP » + clé API → génération à la demande.
- **Animations Aceternity UI** : composants React piochés et intégrés en îlots Astro (Pro 199 $ optionnel).

---

## Feuille de route de construction du kit

| Phase | Objet | État |
|-------|-------|------|
| 0 | Fondations git + structure du kit | ✅ fait |
| 1 | Squelette de base HTML/CSS (sert de base au template Astro) | ✅ fait |
| 2 | Skill `/site-start` : questionnaire de cadrage (business + design) | 🟡 en cours |
| 3 | Skill `/site-style` : palette + typo + test de contraste + choix animations | ⬜ |
| 4 | Passage du template en Astro + connecteurs d'animations (21st.dev / Aceternity) | ⬜ |
| 5 | Skill `/site-construire` : génère le site Astro depuis brief + tokens | ⬜ |
| 6 | Règles webmaster auto-chargées (Hn, typo, boutons, contraste, images) | ⬜ |
| 7 | SEO Google (meta, sitemap, JSON-LD) | ⬜ |
| 8 | Vérification automatique (Playwright + contraste + Lighthouse) | ⬜ |
| 9 | Migration des sites existants (morphoz-ia, elie-chouraqui, france-prestige) | ⬜ |
| 10 | Documentation finale | ⬜ |

**Option remise à plus tard :** référencement sur les IA (llms.txt + données structurées enrichies
pour être cité par ChatGPT / Claude). À intégrer après le SEO Google classique.

---

Morphoz IA · morphoz.io · harry@morphoz.io
