---
name: site-modification
description: Skill de maintenance du kit de création de sites web. Modifier un site déjà construit ou en ligne SANS le casser - filet de sécurité git avant toute modification, bonnes méthodes par type de changement (texte, page, couleur, balises Google, médias, navigation), interdiction de casser une URL publiée (redirection 301), et vérification obligatoire (build + verifier.mjs) avant republication. Utiliser pour toute évolution d'un site existant. Ne PAS utiliser pour créer un site (c'est /site-start) ni pour une refonte complète (repasser par le workflow).
---

# Skill /site-modification — faire évoluer un site sans le casser

## Pour quoi faire

Un site vit : nouveaux tarifs, nouvelle prestation, nouvelle photo, changement de texte.
Ce skill encadre **toute modification d'un site existant** pour qu'elle se fasse avec les
mêmes standards que la création, et qu'une erreur soit toujours réversible.

Sortie : la modification appliquée, vérifiée, prête à republier + un point de restauration git.

## Règles d'or

1. **Jamais de modification sans filet.** Avant de toucher quoi que ce soit : un commit git
   de l'état actuel. Si tout casse, on revient en arrière en une commande.
2. **Une URL publiée ne change jamais.** Renommer ou supprimer une page en ligne casse le
   référencement et les liens partagés : redirection 301 obligatoire (voir Étape 3, cas D).
3. **Toute modification finit par une vérification.** Build + `verifier.mjs` avant de
   republier. Pas d'exception, même pour « juste une virgule ».
4. Les standards de création s'appliquent (un seul H1, alt, tokens, densité, pas de fait inventé).

## Comment procéder

### Étape 1 — Le filet de sécurité (AVANT tout)

```bash
cd mon-site
git rev-parse --git-dir 2>/dev/null || git init   # initialiser git si absent
git add -A && git commit -m "sauvegarde avant modification : <description>"
```

Si le site n'était pas encore versionné, recommander de créer un dépôt distant
(GitHub privé) dans la foulée : c'est la sauvegarde ET la base du déploiement automatique.

### Étape 2 — Qualifier la demande

Identifier le type de modification pour appliquer la bonne méthode :

| Type | Exemples |
|------|----------|
| A. Texte / contenu | changer un prix, un paragraphe, un témoignage |
| B. Coordonnées / navigation / réseaux | nouveau téléphone, nouveau réseau social |
| C. Nouvelle page | nouvelle prestation, page FAQ |
| D. Suppression / renommage de page | prestation arrêtée |
| E. Visuel | couleur, police, animation |
| F. Balises Google | titre ou description dans les résultats de recherche |
| G. Médias | nouvelles photos, nouvelle vidéo |

### Étape 3 — Appliquer avec la bonne méthode

- **A. Texte** : modifier dans la page concernée. Garder le ton du site, l'orthographe,
  la densité (ne pas vider une page), et les règles de contenu (pas de fait inventé).
- **B. Coordonnées / nav / réseaux / CTA** : UNIQUEMENT dans `src/config/site.js`
  (tout le site suit automatiquement). Jamais en dur dans une page.
- **C. Nouvelle page** : nom de fichier kebab-case sans accents avec le mot-clé ;
  un seul H1 ; title + description uniques présentés en **aperçu « comme sur Google »**
  avant application ; ajouter au menu (`site.js`) ; le sitemap se met à jour tout seul
  au build.
- **D. Suppression / renommage** : ne JAMAIS laisser une URL publiée mourir.
  1. Créer la nouvelle page (si renommage) ;
  2. Mettre en place la **redirection 301** de l'ancienne adresse vers la nouvelle
     (selon l'hébergement : voir `docs/mise-en-ligne.md`) ;
  3. Retirer l'ancienne page du menu et du contenu.
- **E. Visuel** : une nouvelle couleur passe par le **test de contraste**
  (`node <kit>/tools/contrast.mjs`) AVANT d'être appliquée dans les tokens. Une animation
  respecte le niveau décidé dans le brief (ne pas transformer un site sobre en sapin de Noël).
- **F. Balises Google** : reprendre la méthode de `/site-seo` : aperçu simulé du résultat
  de recherche, validation, puis écriture. Jamais deux pages avec le même titre.
- **G. Médias** : mêmes noms conventionnés, compresser avant dépôt (< 300 Ko),
  renseigner le `alt` de toute nouvelle image.

### Étape 4 — Vérifier (obligatoire)

```bash
npm run build
node <kit>/tools/verifier.mjs dist
```

Verdict NO-GO = on corrige avant de republier. Contrôler visuellement les pages modifiées
en local (`npm run dev`).

### Étape 5 — Publier et tracer

```bash
git add -A && git commit -m "modif : <description claire>"
```

Republier selon l'hébergement du site (`docs/mise-en-ligne.md`) :
- **Vercel / Netlify** : `git push` suffit, le site se met à jour tout seul.
- **Hostinger / OVH via déploiement automatique** : `git push` déclenche l'action.
- **FTP manuel** : re-envoyer le contenu de `dist/`.

Vérifier la page modifiée sur l'URL de production après publication.

### En cas de problème : revenir en arrière

```bash
git log --oneline          # repérer la sauvegarde d'avant
git revert <commit>        # ou : git checkout <commit> -- <fichier> pour un seul fichier
```

Puis rebuild + republication. C'est exactement pour ça qu'on fait l'Étape 1.

## Ce que /site-modification ne fait pas

- Créer un site (c'est `/site-start`).
- Une refonte complète ou un changement d'objectif du site : on repasse par le brief
  (`/site-start` en mode mise à jour du `brief.md`), sinon le site perd sa cohérence.
