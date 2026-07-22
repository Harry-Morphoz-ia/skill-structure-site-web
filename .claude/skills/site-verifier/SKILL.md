---
name: site-verifier
description: Dernier skill du kit avant mise en ligne. Contrôle qualité complet et RÉEL du site : build, inspection automatique du site généré (tools/verifier.mjs - H1, titles, descriptions, alt, liens morts, placeholders, poids images), contraste de la palette (tools/contrast.mjs), responsive aux 4 tailles (Playwright), Lighthouse en option. Verdict GO/NO-GO : un site ne part en ligne que s'il passe tout. Utiliser après /site-seo. Ne jamais déclarer un site vérifié sans avoir exécuté les contrôles.
---

# Skill /site-verifier — contrôle qualité avant mise en ligne

## Pour quoi faire

Dernière étape avant la mise en ligne. Ce skill ne fait confiance à personne, pas même aux
skills précédents : il **exécute** des contrôles réels sur le site généré et rend un verdict
**GO / NO-GO**. Un site NO-GO ne part pas en ligne, point.

Sortie : rapport de contrôle + captures responsive + verdict.

## Règles d'or

1. **On n'affirme que ce qu'on a exécuté.** Jamais de « ça devrait être bon » : chaque
   contrôle est lancé pour de vrai et son résultat est montré.
2. **Une erreur bloquante = NO-GO**, et on renvoie vers le skill responsable
   (contenu → `/site-construire`, couleurs → `/site-style`, balises → `/site-seo`).
3. Les avertissements ne bloquent pas mais sont tous listés à l'utilisateur.

## Comment procéder

### Contrôle 1 — Le build passe

```bash
npm run build
```
Échec = NO-GO immédiat, corriger avant tout le reste.

### Contrôle 2 — Inspection du site généré

```bash
node <kit>/tools/verifier.mjs dist
```
Vérifie automatiquement : un seul H1 par page, titles uniques et de bonne longueur,
meta descriptions présentes et uniques, alt des images, liens internes morts,
placeholders oubliés (`REMPLACER_PAR`, `[À VALIDER]`), tirets cadratins, images > 300 Ko.
Code retour 2 = erreurs bloquantes → NO-GO.

### Contrôle 3 — Contraste de la palette (preuve, pas impression)

Reprendre les couleurs réelles du `:root` du site et relancer :

```bash
node <kit>/tools/contrast.mjs "<c-text>,<c-bg>" "<c-text-soft>,<c-bg>" "<c-on-primary>,<c-primary>" "<c-text>,<c-surface>"
```
Une paire sous 4.5:1 pour du texte courant = NO-GO → retour `/site-style`.

### Contrôle 4 — Responsive réel (4 tailles)

Avec Playwright (`npm i -D @playwright/test && npx playwright install chromium` si absent),
sur le site servi en local (`npm run dev` ou `npm run preview`) :

- Viewports : **320**, **480**, **768**, **1280** px de large.
- À chaque taille : capture d'écran pleine page de chaque route.
- Vérifier : pas de défilement horizontal, en-tête et pied de page visibles,
  menu burger fonctionnel sous 1024 px (ouvre, liens cliquables, referme).

Si Playwright n'est pas installable : contrôle manuel DevTools aux 4 tailles,
en le disant explicitement dans le rapport (« contrôle manuel, non automatisé »).

### Contrôle 5 — Lighthouse (recommandé)

```bash
npx lighthouse http://localhost:4321 --quiet --chrome-flags="--headless"
```
Cibles : Performance ≥ 90, SEO ≥ 90, Accessibilité ≥ 90 (site statique Astro : atteignable).
En dessous : lister les causes principales. Bloquant seulement si Performance < 70.

### Contrôle 6 — Revue humaine express

Trois questions à poser à l'utilisateur avec l'aperçu sous les yeux :
1. Les textes sont-ils justes (pas de `[À VALIDER]` oublié, faits exacts) ?
2. L'action principale (bouton) est-elle évidente sur chaque page ?
3. Les images déposées sont-elles les bonnes ?

### Verdict

Rendre un tableau : contrôle → résultat (✅ / ⚠️ / ❌) → action si échec. Puis :

- **GO** : tous les contrôles passent →
  > Site vérifié. Prêt pour la mise en ligne : `npm run build` puis publier `dist/`
  > sur l'hébergement. Après mise en ligne : soumettre le sitemap dans Google Search Console.
- **NO-GO** : lister les bloquants et le skill vers lequel retourner. Ne pas discuter.

## Ce que /site-verifier ne fait pas

- Corriger lui-même les erreurs (chaque correction retourne au skill responsable).
- La mise en ligne.
