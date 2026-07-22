# CLAUDE.md — Kit Site Web Morphoz IA

Ce dépôt est **le kit de création de sites web** de Morphoz IA. Il ne contient aucun site client :
il contient la méthode, le squelette et les règles qui servent à en fabriquer.

Le `CLAUDE.md` racine de Morphoz IA (`../../CLAUDE.md`) et celui du dossier `Site web`
(`../CLAUDE.md`) s'appliquent ici en intégralité (règles Harry, design system, déploiement Hostinger).

---

## Nature du kit

C'est de la **méthode + un squelette réutilisable**, pas un site.
- `template/` : le point de départ qu'on copie pour chaque nouveau site.
- `.claude/skills/` : les étapes guidées (`/site-cadrer`, `/site-style`…).
- `.claude/rules/` : les bonnes pratiques webmaster auto-chargées quand on édite du HTML/CSS.

Quand on améliore le kit, on le fait **ici**, une seule fois. Tous les futurs sites en profitent.

---

## Règles absolues héritées

- Jamais de tiret cadratin ( — ) dans un fichier produit. Utiliser un tiret demi-cadratin ( – ), une virgule, ou reformuler.
- Jamais de site « standard IA générique ». Chaque site doit avoir une direction visuelle distinctive.
- Mobile-first obligatoire, testé sur 320 / 480 / 768 / 1280 px.
- Tailles de police en `clamp()` ou `rem`, jamais en `px` fixe.
- Un seul `<h1>` par page, hiérarchie `<h2>`/`<h3>` respectée.
- Contraste couleur vérifié (WCAG AA minimum) avant de valider une palette.
- Zéro dépendance npm côté site final sauf contrainte client explicite.

---

## Comment le kit est installé pour être utilisé

Ce dossier est la **source** (repo GitHub séparé). Les skills `/site-*` deviennent invocables
en les installant dans le `.claude/` racine de Morphoz IA (même principe que le kit IAPreneurs,
déjà installé à la racine). On développe ici, on installe là-bas.

---

## État d'avancement

Voir la feuille de route dans `README.md`. Phase courante notée `🟡 en cours`.
