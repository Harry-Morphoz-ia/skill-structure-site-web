# Brancher le formulaire de contact

Les sites du kit sont statiques : ils n'ont pas de serveur pour recevoir les messages du
formulaire. On branche donc le formulaire sur un service qui reçoit les messages et te les
transmet. Sans ce branchement, le bouton « Envoyer » ne fait rien, et `/site-verifier`
bloque la mise en ligne (placeholder détecté).

## Option A : Formspree (le plus simple)

Formspree est une « boîte aux lettres » pour formulaires : chaque message rempli sur ton
site arrive dans ta boîte mail. Gratuit jusqu'à ~50 messages par mois.

1. Crée un compte sur <https://formspree.io> (avec l'email où tu veux recevoir les messages).
2. « New Form » → donne un nom (ex : « Contact mon-site ») → Formspree te donne une adresse :
   `https://formspree.io/f/abcd1234`
3. Donne cette adresse au kit (ou remplace-la toi-même dans la page contact) :

```astro
<ContactForm action="https://formspree.io/f/abcd1234" />
```

4. Rebuild, republie, et fais un envoi de test depuis ton site : le message doit arriver
   dans ta boîte (vérifie les spams la première fois, et confirme l'email d'activation
   que Formspree envoie au premier message).

## Option B : webhook n8n (si tu utilises n8n)

Si tu as une instance n8n : crée un workflow avec un déclencheur **Webhook** (méthode POST),
copie l'URL de production du webhook, et branche-la comme `action` du formulaire. Tu peux
ensuite faire suivre le message où tu veux (email, Telegram, Google Sheets, CRM...).

## Option C : Brevo (si tu utilises déjà Brevo)

Brevo permet de créer des formulaires dont les soumissions alimentent tes contacts.
Récupère l'URL du formulaire créé dans Brevo et branche-la en `action`.

## Rappel

- Le placeholder `REMPLACER_PAR_URL_FORMSPREE_OU_N8N` doit avoir disparu avant la mise en
  ligne : le contrôle qualité le vérifie automatiquement.
- Fais TOUJOURS un envoi de test réel après la mise en ligne.
