# Indexer son site sur Google, pas à pas

Un site mis en ligne n'apparaît **pas automatiquement** sur Google. Il faut le déclarer à
Google via la **Search Console** : le tableau de bord officiel et gratuit qui relie ton site
au moteur de recherche. Ce guide déroule tout, de zéro.

**Prérequis** : ton site est en ligne sur son domaine définitif, et il a passé le
`/site-verifier` (verdict GO). On n'indexe jamais un site pas fini.

---

## Étape 1 : ouvrir la Search Console

1. Va sur <https://search.google.com/search-console>
2. Connecte-toi avec un compte Google (idéalement celui de la société, pas un compte perso).
3. Clique sur « Ajouter une propriété ».

## Étape 2 : prouver que le site est à toi (la « vérification »)

Google propose deux façons de déclarer ton site. Choisis selon ton aisance :

### Option A (recommandée) : propriété « Domaine »
Couvre le site en entier (avec et sans www, http et https).
1. Choisis « Domaine », saisis ton domaine nu : `lumen-archi.fr`
2. Google te donne un code qui ressemble à `google-site-verification=xxxx`
3. Va chez le fournisseur de ton domaine (Hostinger, OVH...) : **Zone DNS** →
   « Ajouter un enregistrement » → type **TXT** → colle le code → enregistre.
4. Reviens dans la Search Console → « Vérifier ». Si ça échoue, attends 1 h et réessaie
   (la mise à jour DNS n'est pas instantanée).

### Option B (plus simple) : propriété « Préfixe d'URL »
1. Choisis « Préfixe d'URL », saisis l'adresse complète : `https://www.lumen-archi.fr`
2. Méthode « Fichier HTML » : télécharge le fichier `googlexxxxxxxx.html`
3. Dépose-le dans le dossier `public/` de ton site, puis :
   ```bash
   npm run build
   ```
   et republie `dist/` sur ton hébergement (le fichier sera servi à la racine du site).
4. Reviens dans la Search Console → « Vérifier ».

## Étape 3 : soumettre le sitemap (le plan du site)

Le kit génère le sitemap automatiquement (`/sitemap-index.xml`).
1. Dans la Search Console : menu **Sitemaps**
2. Saisis : `sitemap-index.xml`
3. Clique « Envoyer ». Statut attendu sous quelques jours : « Opération réussie ».

## Étape 4 : demander l'indexation de la page d'accueil

Pour accélérer la découverte :
1. Barre du haut → **Inspection d'URL** → colle l'adresse de ta page d'accueil
2. Clique « **Demander une indexation** »
3. Répète pour 1 ou 2 pages importantes (services, contact). Inutile de le faire pour tout :
   le sitemap s'en charge.

## Étape 5 : la fiche Google Business (indispensable en local)

C'est elle qui te fait apparaître sur Google Maps et dans le bloc local des résultats.
1. Va sur <https://www.google.com/business/> → « Gérer ma fiche »
2. Renseigne **exactement** les mêmes nom, adresse et téléphone que sur le site
   (règle NAP : la moindre différence brouille Google).
3. Ajoute le lien vers ton site, les horaires, des photos.
4. Google envoie souvent un code de validation (courrier ou téléphone) : valide-le.

## Étape 6 : suivre les résultats

Dans la Search Console, deux menus à regarder chaque semaine :
- **Pages** (ou « Couverture ») : combien de pages Google a indexées, et les erreurs éventuelles.
- **Performances** : les mots que les gens tapent, combien te voient (impressions) et
  combien cliquent.

---

## Les délais, honnêtement

| Événement | Délai réaliste |
|---|---|
| Google découvre le site | quelques heures à quelques jours après l'Étape 3-4 |
| Pages indexées (visibles avec `site:tondomaine.fr`) | quelques jours à 2-3 semaines |
| Positionnement stable sur tes mots-clés | plusieurs semaines à plusieurs mois |

Le référencement est une course de fond : le kit te donne des fondations propres
(vitesse, structure, balises, données locales), le contenu et la régularité font le reste.

## Pièges à éviter

- Indexer un site **pas terminé** : Google mémorise une mauvaise première impression.
  D'où la règle : verdict **GO** de `/site-verifier` d'abord.
- Un `robots.txt` qui bloque tout (`Disallow: /`) : celui du kit est correct, ne pas le durcir.
- S'impatienter et re-soumettre 10 fois : ça n'accélère rien.
- Nom/adresse/téléphone différents entre le site et la fiche Google Business.

## Checklist finale

- [ ] Site en ligne + verdict GO de `/site-verifier`
- [ ] Propriété vérifiée dans la Search Console
- [ ] Sitemap `sitemap-index.xml` soumis
- [ ] Indexation demandée pour l'accueil
- [ ] Fiche Google Business créée/liée, NAP identique
- [ ] Suivi hebdo : Pages + Performances
