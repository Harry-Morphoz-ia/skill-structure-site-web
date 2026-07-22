---
name: site-geo
description: Skill optionnel du kit de création de sites web - référencement sur les IA (GEO). Rend le site lisible et citable par ChatGPT, Claude, Perplexity - enrichit le llms.txt auto-généré (descriptions des pages), rédige une FAQ structurée (composant Faq + données FAQPage) à partir des vraies questions clients, vérifie l'autorisation des robots IA, et rend le contenu factuel citable. Utiliser après /site-seo (le SEO classique d'abord). Attentes honnêtes : levier émergent, pas de garantie de citation.
---

# Skill /site-geo — être trouvé par les IA (référencement génératif)

## Pour quoi faire

De plus en plus de clients demandent à ChatGPT, Claude ou Perplexity « un traiteur vers
Melun » au lieu de chercher sur Google. Le GEO (Generative Engine Optimization) consiste à
rendre le site **lisible, compréhensible et citable** par ces IA. Le kit fournit les briques ;
ce skill les remplit avec la matière du brief.

Sortie : llms.txt enrichi, FAQ structurée en place, robots IA vérifiés, contenu rendu citable.

## Honnêteté d'abord

Le GEO est un levier **émergent** : les pratiques bougent, et personne ne peut garantir
qu'une IA citera le site. Ce qu'on sait : les IA privilégient les sites **rapides, clairs,
factuels et bien structurés**, exactement ce que le kit produit. On maximise les chances,
on ne promet pas un résultat. Le dire tel quel à l'utilisateur.

## Prérequis

`/site-seo` terminé (URL du site renseignée dans `astro.config.mjs` et `site.js`,
balises et données structurées en place). Le SEO classique reste la fondation.

## Comment procéder

### Étape 1 — Enrichir la carte de visite IA (llms.txt)

Le fichier `/llms.txt` est **généré automatiquement** au build depuis `src/config/site.js`
(identité, coordonnées, pages, réseaux). Pour l'enrichir :
- Remplir le champ `description` de chaque entrée `nav` dans `site.js` : une phrase
  factuelle par page (« Les 3 prestations traiteur, avec tarifs indicatifs »).
- Vérifier le rendu après build : `dist/llms.txt` doit se lire comme une fiche claire
  de la société.

### Étape 2 — La FAQ (l'arme n°1 du GEO)

Les IA citent volontiers des questions/réponses nettes. Construire une FAQ de 4 à 8
questions **réellement posées par les clients** (les collecter auprès de l'utilisateur :
« qu'est-ce qu'on vous demande tout le temps au téléphone ? ») :
- Réponses factuelles, complètes en 2-4 phrases, avec zone/chiffres quand c'est vrai.
- Jamais de question inventée pour caser un mot-clé.

Intégrer avec le composant du kit (données structurées FAQPage automatiques) :

```astro
import Faq from '../components/Faq.astro';
<Faq items={[
  { q: 'Intervenez-vous le week-end ?', r: 'Oui, sur réservation au moins 15 jours à l\'avance...' },
]} />
```

Placement : bas de la page d'accueil, ou page FAQ dédiée si prévue dans l'arborescence.

### Étape 3 — Vérifier l'accès des robots IA

Le `robots.txt` du kit autorise déjà explicitement GPTBot, ClaudeBot, PerplexityBot et
Google-Extended. Vérifier qu'il n'a pas été durci. Si l'utilisateur ne VEUT PAS que les IA
lisent son site (choix légitime), inverser en `Disallow: /` sur ces agents et assumer
l'absence de citations.

### Étape 4 — Rendre le contenu citable

Relire l'accueil et l'à-propos avec l'œil d'une IA qui doit résumer :
- La phrase « qui / quoi / où » doit exister telle quelle
  (« [Nom] est [métier] à [ville], spécialisé dans [spécialité] depuis [année] »).
- Les chiffres sont datés et exacts ; les listes de services sont des vraies listes.
- Pas de jargon marketing creux : une IA ne cite pas « l'excellence au service de vos rêves ».

### Étape 5 — Vérifier

```bash
npm run build
```
Contrôles : `dist/llms.txt` présent et complet ; le JSON-LD `FAQPage` apparaît dans la page
qui porte la FAQ ; `robots.txt` contient les agents IA. Puis `/site-verifier` si le site
part en ligne dans la foulée.

### Étape 6 — Mesurer (avec patience)

Quelques semaines après la mise en ligne, tester en conditions réelles : demander à
ChatGPT / Claude / Perplexity « [métier] à [ville] » et voir si le site est mentionné.
Noter les résultats dans le temps ; c'est le seul indicateur honnête aujourd'hui.

## Ce que /site-geo ne fait pas

- Remplacer le SEO classique (c'est la fondation, lui reste prioritaire).
- Garantir une citation par les IA (personne ne le peut).
