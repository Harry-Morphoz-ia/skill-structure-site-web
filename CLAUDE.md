# CLAUDE.md — Kit Site Web

Ce dépôt est **un kit de création de sites web**. Il ne contient aucun site client : il contient
la méthode, le squelette et les règles qui servent à en fabriquer.

## Nature du kit

C'est de la **méthode + un squelette réutilisable**, pas un site.
- `template/` : le point de départ qu'on copie pour chaque nouveau site.
- `.claude/skills/` : les étapes guidées (`/site-start`, `/site-style`…).
- `.claude/rules/` : les bonnes pratiques webmaster auto-chargées quand on édite du HTML/CSS.

Quand on améliore le kit, on le fait **ici**, une seule fois. Tous les futurs sites en profitent.

---

## Règles absolues (à respecter sur tout site produit)

- Jamais de tiret cadratin ( — ) dans un fichier produit. Utiliser un tiret demi-cadratin ( – ), une virgule, ou reformuler.
- Jamais de site « standard générique ». Chaque site doit avoir une direction visuelle distinctive.
- Mobile-first obligatoire, testé sur 320 / 480 / 768 / 1280 px.
- Tailles de police en `clamp()` ou `rem`, jamais en `px` fixe.
- Un seul `<h1>` par page, hiérarchie `<h2>`/`<h3>` respectée.
- Contraste couleur vérifié (WCAG AA minimum) avant de valider une palette.
- Le template reste **neutre** : aucune donnée réelle, aucune marque en dur. Tout se personnalise
  via le cahier des charges (`brief.md`) et les design tokens.
- Zéro dépendance npm côté site final sauf nécessité (les animations React passent par Astro).

---

## Comment le kit est installé pour être utilisé

Ce dossier est la **source**. Les skills `/site-*` deviennent invocables en copiant `.claude/skills/`
dans le `.claude/` du projet où l'on lance Claude Code (voir la section Installation du README).
On développe ici, on installe là-bas.

---

## État d'avancement

Voir la feuille de route dans `README.md`.
