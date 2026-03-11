# Page de Pré-Coaching — Force Athlétique

Page de candidature à mettre en lien dans la bio Instagram.

---

## Mise en ligne gratuite (GitHub Pages)

1. Push ce repo sur GitHub (dépôt public)
2. Va dans **Settings → Pages → Source : main / root**
3. Ton lien sera : `https://TON-PSEUDO.github.io/NOM-DU-REPO`

---

## Configurer la réception des réponses

### A — Email via Formspree (gratuit, 50 soumissions/mois)

1. Crée un compte sur [formspree.io](https://formspree.io)
2. Crée un nouveau formulaire → copie l'ID (ex : `xpwzabcd`)
3. Dans `index.html`, remplace :
   ```
   const FORMSPREE_URL = 'https://formspree.io/f/FORMSPREE_ID';
   ```
   par :
   ```
   const FORMSPREE_URL = 'https://formspree.io/f/xpwzabcd';
   ```

---

### B — Google Sheets via Apps Script (gratuit, illimité)

1. Crée un Google Sheets vierge
2. Dans le menu **Extensions → Apps Script**, colle ce code :

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data  = JSON.parse(e.postData.contents);
  const row   = [
    new Date(),
    data.prenom        || '',
    data.email         || '',
    data.instagram     || '',
    data.niveau        || '',
    data.objectif      || '',
    data.squat_1rm     || '',
    data.bench_1rm     || '',
    data.deadlift_1rm  || '',
    data.poids         || '',
    data.taille        || '',
    data.message       || '',
  ];
  sheet.appendRow(row);
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Clique **Déployer → Nouveau déploiement → Application Web**
   - Accès : **Tout le monde**
   - Copie l'URL générée
4. Dans `index.html`, remplace :
   ```
   const APPS_SCRIPT_URL = 'APPS_SCRIPT_URL';
   ```
   par l'URL copiée.

---

## Personnalisation rapide

| Ce que tu veux changer | Où dans le code |
|------------------------|-----------------|
| Titre principal        | `<h1>` dans la section `.hero` |
| Texte d'intro          | `<p>` sous le `<h1>` |
| Couleur principale     | `--orange: #FF5500` dans `:root` |
| Options du formulaire  | Balises `<option>` dans chaque `<select>` |
| Message de succès      | `<div class="success">` |
