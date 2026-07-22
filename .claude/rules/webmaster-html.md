---
paths: ["**/*.astro"]
---

# Règles webmaster — pages et composants

Chargées automatiquement dès qu'un fichier de page ou composant est édité.
Elles s'appliquent à tout site produit avec le kit, sans exception.

## Structure

- **Un seul `<h1>` par page**, jamais zéro, jamais deux. Les sections utilisent `<h2>`,
  leurs sous-parties `<h3>`. Pas de saut de niveau (h1 → h3 interdit).
- Chaque page passe par `BaseLayout` avec ses props `title` et `description` propres
  (uniques dans tout le site).
- Les données réelles (nom, téléphone, réseaux, navigation) vivent dans
  `src/config/site.js`, jamais en dur dans une page.
- **Permaliens** : noms de fichiers de pages en kebab-case, sans accents ni majuscules,
  courts, avec le mot-clé. Une URL publiée ne change jamais (sinon redirection 301).
- **Pages système intouchables** : `404.astro` et `mentions-legales.astro` (obligation
  légale en France) existent sur tout site, avec le lien mentions légales dans le pied de page.

## Contenus

- Jamais de tiret cadratin dans un contenu produit : tiret demi-cadratin ( – ), virgule,
  ou reformuler.
- Jamais de lorem ipsum. Information manquante = `[À VALIDER]`. Aucun fait inventé
  (chiffres, promesses, avis).
- Pages destinées au référencement : contenu substantiel (viser 300 mots minimum).
- Bénéfice avant caractéristique ; preuves (chiffres, avis) près des boutons d'action.

## Images & médias

- Chaque `<img>` a un `alt` qui décrit réellement l'image.
- Les emplacements d'images passent par le composant `MediaBox` (placeholder propre si le
  fichier n'est pas déposé). Fichiers dans `public/assets/images/` avec les noms conventionnés.

## Conversion

- Le bouton d'action principal (`site.cta`) est visible sans défiler ET présent en fin de page.
- Libellés de boutons orientés action (« Prendre rendez-vous », pas « Cliquez ici »).
- Boutons = classes du kit (`.btn .btn-primary` / `.btn-ghost`), jamais un lien nu stylisé à la main.
- Liens externes : `target="_blank" rel="noopener"`.

## Formulaires

- Chaque champ a un `<label>`. Le formulaire pointe vers un service réel (Formspree, webhook
  n8n, Brevo) : un `action` placeholder restant = site non livrable (détecté par /site-verifier).
