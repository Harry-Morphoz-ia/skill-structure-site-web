---
name: site-construire
description: Troisième skill du kit de création de sites web. Assemble le site réel à partir du brief.md (/site-start) et des design tokens validés (/site-style) - remplit la config centrale, crée les pages selon l'arborescence décidée (landing 1 page ou vitrine multi-pages), rédige les contenus orientés conversion, branche formulaire et animations, puis vérifie que le build passe. Route ensuite vers /site-seo. Utiliser après /site-style. Ne PAS utiliser sans brief.md ni tokens validés.
---

# Skill /site-construire — assembler le site depuis le brief

## Pour quoi faire

Troisième étape du workflow. Tout a été décidé (`brief.md`) et validé visuellement
(`design-tokens.md`) : ce skill **construit**. Il transforme les décisions en un site Astro
qui compile et qui pousse le visiteur vers l'objectif de conversion.

Sortie : un site complet qui build sans erreur + la liste des fichiers médias à déposer
+ suggestion de lancer `/site-seo`.

## Règles d'or

1. **Rien n'est inventé.** Les faits (coordonnées, services, chiffres, promesses) viennent du
   brief. Ce qui manque est marqué `[À VALIDER]` dans le texte, jamais du lorem ipsum,
   jamais un fait fabriqué.
2. **Un seul `<h1>` par page**, hiérarchie H2/H3 respectée, `alt` sur chaque image.
3. **La conversion guide tout** : chaque page ramène vers l'objectif principal du brief
   (bouton CTA visible sans scroller et en fin de page).
4. **Le build doit passer.** On ne termine jamais sur un site qui ne compile pas.
5. Jamais de tiret cadratin ( — ) dans les contenus produits.
6. **Jamais un « site IA ».** Pas d'emojis en icônes, pas de phrases creuses
   interchangeables, pas de structure clonée du template à l'identique : l'ordre et le
   type des sections s'adaptent au secteur et aux références du brief (voir la règle
   anti « site IA » de `webmaster-html.md`).

## Comment procéder

### Étape 1 — Charger les décisions

Lire `brief.md` et `design-tokens.md` du site. S'il en manque un : renvoyer vers
`/site-start` ou `/site-style` et s'arrêter là.

### Étape 2 — Préparer le projet

- Vérifier que le dossier du site contient le template Astro (`package.json`, `src/`).
  S'il a été créé avant la version Astro du template : recopier `template/` et re-migrer.
- `npm install` si `node_modules/` est absent.

### Étape 3 — Remplir la configuration centrale (`src/config/site.js`)

Depuis le brief :
- `name` (section A), `tagline` = proposition de valeur (section B)
- `phone`, `email`, `address`, `area` (section A)
- `nav` = l'arborescence décidée (section C) — pour une landing : des ancres (`/#services`)
- `cta` = l'objectif principal de conversion (section B), libellé orienté action
- `socials` = les URL des réseaux (section D) — vide = icône masquée

### Étape 4 — Aligner le layout sur l'identité visuelle

- `theme-color` du `BaseLayout.astro` = la couleur `--c-primary` validée
- Le `<link>` Google Fonts = la ou les polices choisies dans `design-tokens.md`

### Étape 5 — Créer les pages selon l'arborescence (section C du brief)

- **Landing** → UNE page `index.astro` : blocs dans l'ordre décidé (hero, bénéfices,
  preuve, offre, CTA final). Supprimer les autres pages du template. Nav = ancres.
- **Vitrine** → une page `.astro` par entrée (nom de fichier en kebab-case). Pour chaque
  page : un seul H1 = le titre décidé, contenu selon le rôle décrit dans le brief, CTA vers
  la conversion. Supprimer les pages d'exemple non retenues. La nav (`site.js`) liste
  exactement ces pages.
- Composants disponibles : `Hero`, `Card`, `MediaBox`, `ContactForm`, sections
  `.section` / `.section-alt` / `.split` (voir les pages d'exemple du template).
- **Pages système (dans tous les cas, ne jamais les supprimer)** :
  - `404.astro` : adapter le ton au client.
  - `mentions-legales.astro` : remplir TOUS les `[À VALIDER]` avec les infos réelles du
    brief (sections A et I : forme juridique, SIRET, directeur de publication, hébergeur).
    **Obligation légale pour un site professionnel en France.**
  - `public/favicon.svg` : personnaliser (initiale de la société + la couleur `--c-primary`
    validée). C'est l'icône de l'onglet du navigateur.

### Étape 6 — Rédiger les contenus

- Ton et vocabulaire adaptés à la cible (section B) et au secteur (section A).
- Bénéfices avant caractéristiques ; phrases courtes ; preuve (réassurance section A,
  témoignages section C) près des CTA.
- Contenus fournis par le client → les utiliser tels quels (corriger l'orthographe).
- Contenus manquants → texte provisoire pertinent marqué `[À VALIDER]`.
- **Densité obligatoire : un vrai site, pas le squelette de démo.** Chaque page clé doit
  avoir un contenu complet et substantiel (viser 300 mots minimum sur les pages qui doivent
  se référencer : accueil, services, à propos). Plusieurs sections par page, développées à
  partir de la matière du brief. Une page de 2 phrases = travail non terminé. Le template
  n'est pas une limite : dupliquer sections, cartes et paragraphes autant que nécessaire.

### Étape 7 — Fonctionnalités de conversion (section G)

- `ContactForm action=...` : brancher l'URL réelle (Formspree, webhook n8n, Brevo).
  Si aucune : laisser le placeholder et le signaler dans le récap.
- Prise de RDV : intégrer le lien/widget de l'outil choisi (Calendly...).
- Téléphone cliquable (`tel:`), WhatsApp, carte Google Maps si demandés.

### Étape 8 — Animations (section J)

- **Très animé** → `<Hero animated ... />` + proposer 1-2 composants complémentaires
  (voir `docs/animations.md`). Ne pas surcharger : hero + un effet maximum.
- **Discrètes** → pas d'îlot React ; transitions CSS existantes seulement.
- **Quasi statique** → rien.

### Étape 9 — Médias

Lister à l'utilisateur les fichiers à déposer, avec les noms exacts attendus
(`public/assets/images/hero/hero.jpg`, `galerie/01.jpg`...) et les formats/poids
(voir les README des dossiers). Les emplacements vides affichent « Déposez ... » en attendant.

### Étape 10 — Vérifier avant de rendre la main

```bash
npm run build     # DOIT passer sans erreur
npm run dev       # aperçu local à montrer
```

Contrôles : chaque page a un seul H1 ; chaque lien de nav pointe vers une page existante ;
le CTA principal est présent sur chaque page ; les `alt` sont remplis.

### Étape 11 — Récapituler et router

Récap en quelques lignes : pages créées, contenus `[À VALIDER]`, médias à déposer,
formulaire branché ou non. Puis :

> Site assemblé et build vérifié. Prochaine étape : `/site-seo` pour le référencement
> (balises, sitemap, données structurées), puis `/site-verifier` avant mise en ligne.

## Ce que /site-construire ne fait pas

- Le SEO avancé (balises fines, sitemap, JSON-LD) : c'est `/site-seo`.
- Le contrôle qualité final (responsive, contraste, Lighthouse) : c'est `/site-verifier`.
- La mise en ligne.
