# Mettre son site en ligne (tous hébergeurs)

Le kit produit des sites statiques : après `npm run build`, le dossier `dist/` contient
le site final, publiable **partout**. Ce guide couvre les trois façons de publier, de la
plus simple à la plus manuelle. Choisis selon ton hébergeur.

**Avant tout, quelle que soit l'option : ton site doit être un dépôt git.**
C'est ta sauvegarde, ton historique, et la base du déploiement automatique.

```bash
cd mon-site
git init
git add -A && git commit -m "premier commit du site"
# puis crée un dépôt privé sur github.com et pousse :
git remote add origin https://github.com/<toncompte>/<mon-site>.git
git branch -M main && git push -u origin main
```

---

## Option A : Vercel ou Netlify (recommandé si tu débutes)

Le plus simple : ces hébergeurs se branchent sur ton dépôt GitHub et font tout.

1. Crée un compte sur <https://vercel.com> (ou <https://netlify.com>) avec ton compte GitHub.
2. « Add New Project » → choisis ton dépôt → le framework **Astro est détecté tout seul**.
3. Clique « Deploy ». Deux minutes plus tard, ton site est en ligne sur une adresse provisoire.
4. Ajoute ton domaine : Settings → Domains → suis les instructions DNS.

**Ensuite, chaque `git push` met le site à jour automatiquement.** Rien d'autre à faire.

## Option B : Hostinger, OVH, ou tout hébergement FTP (déploiement automatique)

Ton hébergeur ne construit pas le site lui-même : on utilise GitHub Actions pour le faire.

1. Dans ton site, renomme le fichier fourni par le kit :
   `.github/workflows/deploy.yml.example` → `deploy.yml`
2. Sur GitHub, dans ton dépôt : **Settings → Secrets and variables → Actions** →
   ajoute 3 secrets (valeurs dans l'espace client de ton hébergeur, section FTP) :
   | Secret | Contenu |
   |---|---|
   | `FTP_SERVER` | l'hôte FTP (ex : `ftp.ton-domaine.fr`) |
   | `FTP_USERNAME` | l'identifiant FTP |
   | `FTP_PASSWORD` | le mot de passe FTP |
3. Vérifie dans `deploy.yml` que `server-dir` correspond au dossier public de ton
   hébergeur (`public_html/` chez Hostinger, `www/` chez OVH).
4. `git push` → l'onglet **Actions** de GitHub montre le déploiement → site à jour en 1 à 2 min.

**Les identifiants FTP ne sont JAMAIS écrits dans les fichiers du site.** Uniquement dans
les Secrets GitHub.

## Option C : FTP manuel (dépannage)

```bash
npm run build
```
Puis envoie **le contenu** du dossier `dist/` (pas le dossier lui-même) dans le dossier
public de ton hébergement (via FileZilla ou le gestionnaire de fichiers de l'hébergeur).
À refaire à chaque modification : c'est pour ça que les options A et B sont préférables.

---

## Les redirections 301 (quand une URL change)

Si tu renommes ou supprimes une page déjà en ligne, l'ancienne adresse doit rediriger vers
la nouvelle (sinon : erreur 404 pour les visiteurs et perte du référencement acquis) :
- **Vercel** : fichier `vercel.json`, bloc `"redirects"`.
- **Netlify** : fichier `public/_redirects` (une ligne : `/ancienne /nouvelle 301`).
- **Hostinger / OVH (Apache)** : fichier `public/.htaccess` :
  `Redirect 301 /ancienne-page/ https://ton-domaine.fr/nouvelle-page/`

## Après la première mise en ligne

Suis le tuto `docs/indexation-google.md` : Search Console, sitemap, fiche Google Business.
