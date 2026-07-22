---
name: site-start
description: Point d'entrée du kit de création de sites web. Mène un cahier des charges complet comme un vrai webmaster (entreprise, objectif de conversion, structure, contenus, réseaux sociaux, identité visuelle, médias, fonctionnalités, SEO local, légal, animations) et écrit un brief.md riche dans le dossier du site. Route ensuite vers /site-style. Utiliser au tout début d'un nouveau site. Ne PAS utiliser pour un site déjà cadré (éditer le brief.md directement).
---

# Skill /site-start — cahier des charges guidé d'un nouveau site

## Pour quoi faire

Première chose lancée pour un nouveau site. Le skill joue le rôle d'un chef de projet web
expérimenté : il pose, section par section, toutes les questions qu'un vrai webmaster pose avant
de construire, et transforme les réponses en un **brief.md complet** qui pilotera toute la
fabrication. Rien n'est construit ici : on collecte le maximum d'informations utiles.

Sortie : `site-[nom-client]/brief.md` rempli + suggestion de lancer `/site-style`.

## Règles d'or

1. **Par sections, pas en vrac.** Annoncer chaque section, poser ses questions groupées (2 à 4),
   expliquer brièvement le pourquoi. L'utilisateur n'est pas technique.
2. **Ne jamais bloquer.** Si une réponse manque, écrire « à définir » dans le brief et continuer.
   Toujours proposer « je ne sais pas encore / on verra plus tard ».
3. **Cohérence.** Les options proposées s'adaptent aux réponses précédentes (voir Section B).
4. **Choix fermés via l'outil de questions interactives ; infos factuelles (coordonnées, liens,
   mots-clés) en texte libre.**
5. Jamais de tiret cadratin ( — ) dans le brief produit.

## Comment procéder

### Étape 1 — Créer le dossier du site

Demander le nom du client, puis copier le squelette vers l'emplacement du nouveau site
(l'emplacement est libre : à côté du kit, dans un dossier `sites/`, etc.) :

```bash
# Depuis la racine du kit
cp -r template "../site-[nom-kebab]"
```

### Étape 2 — Le questionnaire (10 sections)

Dérouler les sections dans l'ordre. Pour chaque section : une phrase d'intro, puis les questions.

---

**Section A — L'entreprise**
- Que fait la société en une phrase ? (métier, secteur)
- Coordonnées : téléphone, email, adresse physique, zone d'intervention
- Horaires d'ouverture (si pertinent)
- Ancienneté / chiffres de réassurance (année de création, nombre de clients, avis Google)
*Pourquoi : ces infos alimentent le footer, la page contact, les mentions de réassurance et le SEO local.*

**Section B — Objectif & audience**
- Nature du site : vitrine · landing page · e-commerce · portfolio · prise de RDV *(choix fermé)*
- Objectif principal de conversion *(choix fermé, COHÉRENT avec la nature)* :
  - Vitrine / Landing / Portfolio → demander un devis · prendre RDV/réserver · appeler · formulaire de contact. **Jamais « acheter en ligne »** (sinon e-commerce).
  - E-commerce → acheter · s'inscrire newsletter · créer un compte.
- Objectifs secondaires éventuels
- Cible / persona : qui sont les visiteurs (particuliers/entreprises, âge, zone, profil) ?
- Proposition de valeur unique : qu'est-ce qui vous différencie des concurrents ?
*Pourquoi : tout le site doit pousser vers l'objectif principal ; la cible fixe le ton.*

**Section C — Structure & pages** *(dépend de la nature choisie en Section B)*

- **Landing page** → site d'UNE seule page. **Ne pas demander de nombre de pages.**
  Déterminer l'ordre des blocs de cette page unique : accroche (hero) · bénéfices · preuve (avis, chiffres, logos) · offre/services · appel à l'action final. Tout converge vers l'objectif unique.

- **Site vitrine** → site MULTI-PAGES. Déterminer :
  1. **Le nombre de pages** (souvent 3 à 6).
  2. **Pour CHAQUE page** : son **titre**, son **rôle / sa valeur** (ce qu'elle apporte au visiteur), et comment elle ramène vers l'objectif de conversion.
  Pages fréquentes : Accueil · À propos · Services (ou une page par service) · Tarifs · Réalisations/Galerie · Prise de RDV · Contact · FAQ · Blog.
  Formaliser une ligne par page, ex : « Services → présente les 3 prestations, chacune avec un bouton Prendre RDV ».

- **E-commerce** → Accueil · Catalogue · Fiche produit · Panier · Contact (+ pages légales).
- **Portfolio** → Accueil · Projets/Réalisations · À propos · Contact.

Dans tous les cas, noter aussi :
- Liste des services/prestations à présenter
- Témoignages / avis clients disponibles ?
- Équipe à présenter (photos, rôles) ?
- Labels, certifications, partenaires, logos clients à afficher ?

*Pourquoi : l'arborescence dicte le nombre de fichiers/pages, la navigation, et où placer les boutons de conversion.*

**Section D — Réseaux sociaux**
- Sur quels réseaux la société est-elle présente, et quel est le lien de chacun ?
  Instagram, LinkedIn, TikTok, YouTube, Facebook, X/Twitter, Pinterest, WhatsApp, autre.
- Ces icônes seront **cliquables, ouvertes dans un nouvel onglet**, et **s'adapteront automatiquement
  à la couleur de la palette** (icônes SVG monochromes en `currentColor`, jamais des logos multicolores
  figés). Placées dans le header et/ou le footer.
*Pourquoi : présence sociale = réassurance + trafic ; l'adaptation couleur garde une identité cohérente.*

**Section E — Identité visuelle**
- Palette : déjà des couleurs de marque · extraire du logo · à créer *(choix fermé)*
- Logo disponible (fichier vectoriel de préférence) ?
- Style / ambiance : sobre & pro · moderne & tech · luxe & élégant · chaleureux & humain *(choix fermé)*
- Typographie souhaitée ou imposée par la charte ?
- Sites de référence / inspirations (1 à 3) et ce qui plaît dessus
*Pourquoi : oriente palette, typo, intensité visuelle ; évite le « site standard ».*

**Section F — Médias**
- Photos : professionnelles dispo · à shooter · banque d'images à prévoir ?
- Vidéo (présentation, fond, témoignage) ?
- Illustrations / pictos spécifiques ?
*Pourquoi : dit ce qu'on a vs ce qu'on doit produire, et le poids à optimiser.*

**Section G — Fonctionnalités & conversion**
- Formulaire de contact : quels champs (nom, email, téléphone, message, autre) ? Où arrivent les messages (email, Brevo, webhook n8n, Formspree) ?
- Prise de RDV : outil externe (Calendly, Google Agenda) ou simple demande ?
- Newsletter (Brevo) ?
- Bouton WhatsApp / chat ?
- Carte Google Maps (adresse) ?
- Bouton d'appel flottant sur mobile ?
*Pourquoi : ce sont les mécaniques qui transforment un visiteur en contact.*

**Section H — SEO & référencement**
- Mots-clés / expressions que les clients tapent sur Google
- Zone géographique à cibler (SEO local : ville, département)
- Fiche Google Business Profile existante ?
- Concurrents à surveiller
*Pourquoi : cadre les titres, textes et données structurées pour être trouvé.*

**Section I — Légal & technique**
- Nom de domaine : déjà acheté ? souhaité ?
- Hébergement (Hostinger, Netlify, Vercel, OVH, GitHub Pages…)
- Multilingue ? Si oui, quelles langues ?
- Mentions légales, politique de confidentialité, bandeau cookies (RGPD) à prévoir ?
- Suivi d'audience (Google Analytics / autre) ?
*Pourquoi : obligations légales + base technique de mise en ligne.*

**Section J — Animations**
- Niveau d'animation : très animé (effet wow) · discrètes · quasi statique *(choix fermé)*
- « Très animé » → on activera les connecteurs React 21st.dev (Magic MCP) et/ou Aceternity dans /site-style.
*Pourquoi : décide de la richesse visuelle et de la complexité de fabrication.*

### Étape 3 — Écrire le brief.md

Créer `site-[nom-kebab]/brief.md` avec la trame ci-dessous (remplir, « à définir » si manquant) :

```markdown
# Brief — [Nom client]

## A. Entreprise
- Activité (1 phrase) :
- Téléphone : / Email : / Adresse :
- Zone d'intervention :
- Horaires :
- Réassurance (ancienneté, nb clients, avis) :

## B. Objectif & audience
- Nature du site :
- Objectif principal (conversion) :
- Objectifs secondaires :
- Cible / persona :
- Proposition de valeur unique :

## C. Structure & pages
- Type : page unique (landing) / multi-pages (vitrine)
- Arborescence (une ligne par page : Titre – rôle/valeur – lien vers la conversion) :
  - Accueil :
- Services / prestations :
- Témoignages : oui / non
- Équipe à présenter : oui / non
- Labels / certifications / partenaires :

## D. Réseaux sociaux
- Instagram : / LinkedIn : / TikTok : / YouTube : / Facebook : / X : / Pinterest : / WhatsApp :
- (Icônes SVG cliquables, couleur = palette, nouvel onglet)

## E. Identité visuelle
- Palette : (fournie / logo / à créer)
- Logo : oui / non (format)
- Style / ambiance :
- Typographie :
- Références / inspirations :

## F. Médias
- Photos : pro / à shooter / banque
- Vidéo : oui / non
- Illustrations / pictos :

## G. Fonctionnalités & conversion
- Formulaire (champs + destination) :
- Prise de RDV (outil) :
- Newsletter (Brevo) : oui / non
- WhatsApp / chat : oui / non
- Carte Google Maps : oui / non
- Bouton d'appel flottant mobile : oui / non

## H. SEO & référencement
- Mots-clés :
- Zone SEO local :
- Google Business Profile : oui / non
- Concurrents :

## I. Légal & technique
- Nom de domaine :
- Hébergement :
- Multilingue :
- Mentions légales / RGPD / cookies :
- Analytics :

## J. Animations
- Niveau d'animation :

## Notes
- Contraintes particulières :
```

### Étape 4 — Router

Récapituler le brief en quelques lignes, signaler ce qui reste « à définir », puis :

> Cadrage terminé. Prochaine étape : `/site-style` pour définir la palette (avec test de
> lisibilité) et le style à partir de ce brief.

## Ce que /site-start ne fait pas

- Ne construit aucun code (c'est `/site-construire`).
- Ne choisit pas les couleurs finales ni ne teste le contraste (c'est `/site-style`).
- Ne déploie rien (c'est l'étape de mise en ligne).
