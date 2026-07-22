# Créer un site de A à Z avec le kit

Ce guide déroule la création complète d'un site professionnel, de l'installation du kit
jusqu'à la mise en ligne. Aucune connaissance en code n'est nécessaire : le kit pose les
questions, applique les bonnes pratiques de webmaster, et vérifie le résultat.

---

## Prérequis (une fois par machine)

| Outil | Pourquoi | Où |
|-------|----------|-----|
| Claude Code | C'est lui qui exécute les skills du kit | claude.com/claude-code |
| Node.js (v20+) | Fait tourner le site en local et le compile | nodejs.org |
| Git | Récupère le kit et versionne ton travail | git-scm.com |

---

## Installation du kit (une fois)

```bash
git clone https://github.com/<compte>/skill-structure-site-web.git
cd skill-structure-site-web
cp -r .claude/skills/* <ton-dossier-de-travail>/.claude/skills/
cp -r .claude/rules/*  <ton-dossier-de-travail>/.claude/rules/
```

Ouvre ensuite Claude Code dans ton dossier de travail : les commandes `/site-*` sont disponibles.

**Si tu utilises les animations 21st.dev** : lis `docs/animations.md` pour brancher **ta propre**
clé API (jamais celle de quelqu'un d'autre, jamais dans git).

---

## Les 6 étapes de création

### Étape 1 : `/site-start` (le cahier des charges)

Le kit t'interroge comme un vrai chef de projet web : nature du site (landing = 1 page,
vitrine = plusieurs pages dont on définit le titre et le rôle de chacune), objectif de
conversion, cible, réseaux sociaux, palette existante ou non, contenus disponibles,
mots-clés Google, niveau d'animation.

**Ce que tu obtiens** : un dossier de site créé depuis le template + un `brief.md` complet.
C'est LE document de référence : tout le reste en découle.

### Étape 2 : `/site-style` (l'identité visuelle, prouvée)

Le kit propose une palette cohérente avec ton secteur et ton style (ou reprend tes couleurs),
puis la **teste réellement** : chaque couleur de texte est vérifiée lisible sur son fond
(norme d'accessibilité WCAG, outil `tools/contrast.mjs`). Une couleur qui échoue est ajustée.
Il choisit aussi la typographie et planifie les animations.

**Ce que tu obtiens** : les « design tokens » du site (ses variables de couleurs et polices)
+ un `design-tokens.md` avec les preuves de contraste.

### Étape 3 : `/site-construire` (l'assemblage)

Le kit construit le site : il remplit la configuration centrale (nom, coordonnées, réseaux,
menu), crée une page par entrée de ton arborescence, **rédige les contenus** à partir de ton
brief (ton adapté à ta cible, bénéfices avant caractéristiques, preuves près des boutons),
branche le formulaire et active les animations si demandées.

Règles strictes : rien d'inventé (une info manquante est marquée `[À VALIDER]`), pas de
page maigre (300 mots minimum sur les pages importantes), un seul H1 par page.

**Ce que tu obtiens** : un site complet qui compile, visible en local (`npm run dev`).

### Étape 4 : `/site-seo` (le référencement)

À partir des mots-clés et de la zone géographique de ton brief : une intention de recherche
par page, un titre et une description uniques par page, le mot-clé placé naturellement
(jamais de bourrage), la « carte d'identité » Google (données structurées) remplie, le
sitemap activé.

**Tu n'as pas besoin de connaître les « balises »** : pour chaque page, le kit te montre un
aperçu de ce que les gens verront dans Google et te le fait valider avant de l'appliquer :

```
🔵 Traiteur mariage à Melun · TonEntreprise      ← le lien bleu cliquable (le « titre »)
🟢 https://ton-site.fr › services                 ← l'adresse
   Recevez vos invités sans stress. Devis         ← le texte sous le lien
   gratuit sous 24h.                                 (la « description »)
```

Pour le modifier plus tard : demande simplement (« change le titre Google de ma page
contact »), le kit te remontre l'aperçu avant d'appliquer.

**Ce que tu obtiens** : un site que Google comprend, avec un tableau mot-clé ↔ page.

### Étape 5 : `/site-verifier` (le contrôle qualité)

Le gendarme du kit. Il exécute pour de vrai : compilation, inspection automatique du site
final (H1, titres, descriptions, alt, liens morts, placeholders oubliés, poids des images),
contraste, responsive aux 4 tailles d'écran, Lighthouse.

**Verdict GO ou NO-GO.** Un site NO-GO ne part pas en ligne : le kit te dit quoi corriger
et avec quel skill.

### Étape 6 : la mise en ligne

```bash
npm run build     # génère le dossier dist/ (les fichiers finaux)
```

Publie le contenu de `dist/` sur ton hébergement (Hostinger, Netlify, Vercel, OVH...),
en upload direct ou via un déploiement automatique.

**Puis déclare le site à Google** (il n'apparaît pas tout seul) : suis le tuto pas à pas
`docs/indexation-google.md` (Search Console, sitemap, demande d'indexation, fiche Google
Business, délais réalistes).

---

## Déposer tes images (à tout moment)

| Fichier à déposer | Où | Résultat |
|---|---|---|
| `hero.jpg` (1920x1080, < 300 Ko) | `public/assets/images/hero/` | Fond de la section d'accueil |
| `apropos.jpg`, `01.jpg`, `02.jpg`... | `public/assets/images/galerie/` | Section à propos + galerie |

Tant qu'une image n'est pas déposée, un cadre « Déposez ... » propre s'affiche à sa place.
Compresse tes images sur squoosh.app avant de les déposer.

---

## Questions fréquentes

**Modifier un texte après coup ?** Dis-le simplement à Claude (« change le titre de la page
services en ... »). Les règles webmaster restent appliquées automatiquement.

**Changer une couleur ?** Demande la modification : la nouvelle couleur repasse par le test
de contraste avant d'être acceptée.

**Ajouter une page ?** Demande-la : elle est créée avec la structure du kit (H1 unique,
titre SEO, ajout au menu).

**Ajouter un effet « wow » ?** L'effet aurora du kit s'active en un mot sur le hero. Pour
d'autres composants animés, voir `docs/animations.md`.

**Faut-il un bandeau cookies ?** Par défaut, non : les sites du kit ne déposent aucun cookie
de suivi, donc pas de bandeau obligatoire. Si tu ajoutes un outil de mesure d'audience
(Google Analytics...), le bandeau devient nécessaire ; préfère un outil sans cookie
(ex : Plausible) pour t'en passer.

**Et les mentions légales ?** Chaque site du kit embarque une page mentions légales
(obligation légale en France), remplie avec les informations du cahier des charges et liée
depuis le pied de page. Le contrôle qualité vérifie sa présence.

**Reprendre un site existant dans le kit ?** Voir le guide de migration (`docs/migration.md`,
à venir).
