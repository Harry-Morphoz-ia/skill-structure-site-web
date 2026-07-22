---
name: site-start
description: Point d'entrée du kit de création de sites web Morphoz. Pose les bonnes questions de cadrage (type de site, société, objectif de conversion, cible, palette existante, style, animations, contenus) et écrit un brief.md dans le dossier du site. Route ensuite vers /site-style. Utiliser au tout début d'un nouveau site. Ne PAS utiliser pour un site déjà cadré (éditer le brief.md directement) ni pour une app (c'est /start du kit apps).
---

# Skill /site-start — cadrage guidé d'un nouveau site

## Pour quoi faire

C'est la première chose qu'on lance pour un nouveau site. Le skill joue le rôle d'un chef de projet
web : il pose les bonnes questions, une par une, et transforme les réponses en un **brief.md** clair
qui pilotera toute la fabrication du site. Rien n'est construit ici : on décide, on écrit le cahier
des charges.

Sortie : `site-[nom-client]/brief.md` rempli + suggestion de lancer `/site-style`.

## Règle d'or

**Une question à la fois, en langage simple.** L'utilisateur (Harry ou un collaborateur) n'est pas
technique. On explique toujours pourquoi on pose la question. On ne bloque jamais : si une réponse
manque, on note « à définir » dans le brief et on continue. Jamais de tiret cadratin ( — ) dans le
brief produit.

## Comment procéder

### Étape 1 — Créer le dossier du site

Demander le nom du client, puis créer le dossier depuis le template :

```bash
cp -r kit-site-web/template "Site web/site-[nom-kebab]"
```

Le dossier `site-[nom-kebab]/` contient déjà la structure (index, assets, notices médias).

### Étape 2 — Les 6 questions de cadrage (business)

Poser ces questions via l'outil de questions interactives (choix fermés) ou en conversation.
Regrouper par 2 à 4 max pour ne pas noyer la personne.

1. **Nature du site** : vitrine · landing page (une seule action) · e-commerce · portfolio · prise de rendez-vous · autre ?
   *Pourquoi : ça détermine la structure des pages et le type de conversion.*
2. **La société** : quel métier, quel secteur, quelle taille ? En une phrase, que fait-elle ?
   *Pourquoi : le ton et le vocabulaire du site en dépendent.*
3. **Objectif principal** : quelle action UNIQUE le visiteur doit faire ?
   *Pourquoi : c'est le cœur de la conversion. Tout le site doit pousser vers cette action.*
   **Les objectifs proposés doivent être cohérents avec la nature choisie en Q1 :**
   - Vitrine / Landing / Portfolio → demander un devis · prendre RDV ou réserver · appeler · remplir le formulaire de contact. **Jamais « acheter en ligne »** (sinon c'est un e-commerce).
   - E-commerce → acheter un produit · s'inscrire à la newsletter · créer un compte.
   Si l'objectif « acheter » est voulu alors que la nature est « vitrine », signaler la contradiction et reproposer soit un objectif sans achat, soit de repasser en e-commerce.
4. **Cible** : qui sont les visiteurs ? (particuliers, entreprises, tranche d'âge, zone géographique)
   *Pourquoi : on n'écrit pas pareil pour un mariage haut de gamme ou une PME du bâtiment.*
5. **Concurrents / références** : 1 à 3 sites (concurrents ou juste des sites qu'il aime) + ce qui plaît dessus.
   *Pourquoi : ça cadre le niveau d'exigence visuel et évite le « site standard ».*
6. **Contenus disponibles** : a-t-il les textes ? des photos ? une vidéo ? un logo ?
   *Pourquoi : ça dit ce qu'on doit produire vs ce qu'on a déjà.*

### Étape 3 — Les 3 questions de design (identité visuelle)

7. **Palette de couleurs** : « Avez-vous déjà des couleurs de marque ? Si oui, lesquelles (codes ou description) ? Sinon je proposerai une palette. »
   *On note les couleurs exactes si fournies. Le test de contraste se fera dans /site-style.*
8. **Style / ambiance** : sobre & pro · luxe & élégant · moderne & tech · chaleureux & humain · minimaliste · audacieux ?
   *Pourquoi : c'est ce qui oriente typo, espacements et intensité des animations.*
9. **Niveau d'animation** : sites très animés (effets « wow » type 21st.dev / Aceternity) · animations discrètes · quasi statique ?
   *Pourquoi : ça décide si on active les connecteurs d'animations React dans /site-style, et donc la complexité du site.*

### Étape 4 — Écrire le brief.md

Créer `site-[nom-kebab]/brief.md` avec cette trame (remplir avec les réponses, « à définir » si manquant) :

```markdown
# Brief — [Nom client]

## Identité
- Société :
- Secteur :
- Site : morphoz.io / URL client
- Date de cadrage :

## Objectif
- Nature du site :
- Objectif principal (action de conversion) :
- Cible :

## Références
- Sites aimés / concurrents :
- Ce qui plaît :

## Identité visuelle
- Palette (fournie ou à créer) :
- Style / ambiance :
- Niveau d'animation :

## Contenus
- Textes : oui / non / à produire
- Photos : oui / non / à produire
- Vidéo : oui / non
- Logo : oui / non

## Notes
- Contraintes particulières :
```

### Étape 5 — Router

Confirmer le brief à l'utilisateur en 3 lignes, puis proposer :

> Cadrage terminé. Prochaine étape : `/site-style` pour définir la palette (avec test de
> lisibilité) et le style, à partir de ce brief.

## Ce que /site-start ne fait pas

- Ne construit aucun code (c'est `/site-construire`).
- Ne choisit pas les couleurs finales ni ne teste le contraste (c'est `/site-style`).
- Ne déploie rien (c'est la livraison Hostinger).
