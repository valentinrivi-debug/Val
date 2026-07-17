---
description: Génère des stories Instagram (vente ou nurturing) pour Val, à partir d'un des 17 templates Stories Pro, personnalisées avec son profil business.
---

# /story — Générateur de Stories Instagram (Val — Force Athlétique)

Demande de l'utilisateur : $ARGUMENTS

## Étape 0 — Lire le profil business

**Lis `.claude/context/story-profil.md` avant toute chose.** Il contient le créneau,
l'audience, les douleurs/désirs, l'histoire de Val, l'offre (suivi mensuel 140€/mois),
le ton (professionnel mais naturel, jamais corporate), le mot-clé DM (**COACHING**) et
le prénom (**Val**). N'invente jamais un chiffre, un témoignage ou un détail d'offre
qui n'y figure pas — si une info manque (ex. preuve sociale), laisse un trou `[...]` à
remplir plutôt que de fabriquer un exemple.

## Règle absolue : toujours clarifier avant d'écrire

Ne devine jamais silencieusement. Avant de générer, demande si besoin :
- **Quel(s) template(s)** parmi les 17 ci-dessous (ou "propose-moi le plus adapté à
  [contexte donné]").
- **Le contexte du moment** : promo en cours, place dispo dans le suivi, retour d'un
  élève, simple contenu de lien, saison de compétition qui approche, etc.
- **CTA** : mot-clé DM (COACHING, par défaut) ou sticker lien — Stories Pro recommande
  le mot-clé DM en priorité (plus chaud, relançable, fait remonter la story dans l'algo).
- Si le template demande une preuve sociale et qu'aucune n'est fournie dans le profil
  ni dans la demande, demande à Val s'il a un exemple à donner, sinon laisse un trou.

## Les 8 règles avant de toucher aux templates

1. **Vraies photos.** Bureau, café, séance, un athlète en train de bosser — jamais un
   shooting préparé. Une story doit sentir le "là, maintenant".
2. **Police lisible.** Polices basiques d'Insta ; surligne le texte si le fond est chargé.
3. **Texte minimal.** Phrases courtes réparties sur plusieurs slides, jamais un pavé.
4. **Mot-clé DM par défaut** (COACHING) plutôt qu'un sticker lien, ou alterne les deux —
   message perso plus chaud, relançable, et chaque réponse pousse la story à plus de monde.
5. **Sous-titres dès que Val parle.** Une slide-résumé pour ceux qui tapent vite.
6. **Time les stories de vente** : postées quand les précédentes ont expiré, rien
   d'autre publié tant qu'elles ne sont pas tombées (24h).
7. **Les 3 premières stories comptent le plus** (chute des vues après). Stories de
   vente en tête.
8. **Résultats avant fonctionnalités.** Jamais "un suivi avec programmation
   individualisée" seul → toujours "si tu stagnes depuis des mois sans structure,
   voilà ce qui va changer."

## Les 17 templates (gabarits fidèles au document source)

*(S1, S2... = slide 1, slide 2... Ces gabarits sont volontairement bruts, avec leurs
crochets `[...]` d'origine — c'est à l'étape de génération que tu les remplis avec le
profil de Val (`.claude/context/story-profil.md`) et le contexte donné. Ne simplifie
jamais un gabarit en un seul paragraphe : respecte le découpage slide par slide, il
est pensé pour le rythme de lecture d'une story. `MOT-CLÉ` = toujours **COACHING**
pour Val, sauf demande contraire.)*

### Templates de vente

**1. Template 1 : La transformation client**
*Le parcours d'un élève : d'où il partait, ce que tu as changé, le résultat. Prouve
que ta méthode marche.*
```
S1 : [Prénom] est venu me voir en [mois/année], il galérait avec [problème] et
voulait juste [résultat] 👉
S2 : Pour te situer : il [action typique] depuis [durée], [galère 1], [galère 2],
[galère 3].
S3 : Je lui ai fait lâcher [l'approche qui ne marchait pas] pour passer sur [ta
méthode]… 👀
S4 : Et en [délai], il [résultat] 😌 [preuve/capture]
S5 : Si t'es coincé dans la même boucle ([action] sans jamais [résultat]), je peux
régler ça.
S6 : Réponds « MOT-CLÉ » et je t'envoie le lien vers [offre] ✨
```

**2. Template 2 : Le témoignage flash (1 slide)**
*Une capture de win + un CTA. Imparable pour la preuve.*
```
S1 : Recevoir des messages comme ça, c'est… 🥹 [capture]
Réponds « MOT-CLÉ » et je t'envoie exactement ce qu'il/elle a utilisé.
```

**3. Template 3 : L'erreur qui coûte cher**
*Tu pointes une erreur, tu positionnes ton offre comme la sortie.*
```
S1 : Si tu [approche inefficace]… tu perds [perte 1], [perte 2], [perte 3] 😕👉
S2 : Réponds « MOT-CLÉ » et je te montre comment [résultat].
```

**4. Template 4 : Coulisses + offre**
*Tu montres ta journée, tu glisses ton offre naturellement.*
```
S1 : J'ai passé [la matinée] à [action], là je [prochaine action] 🥵
S2 : Mais d'abord, les messages tombés ces derniers jours : [1-2 captures]
S3 : Si [résultat] te semble galère en ce moment, je te couvre. Réponds « MOT-CLÉ »
```

**5. Template 5 : « Imagine si… »**
*Tu relies le plus gros désir à ton offre.*
```
S1 : Imagine si quelqu'un [gérait la partie galère], te disait quoi [faire], et que
t'avais juste à [action simple]… 😏
S2 : Bah c'est littéralement ce que je fais 🥵 J'ai passé [durée] à construire [offre]
qui te donne [bénéfices] pour enlever le flou sur [résultat].
S3 : Réponds « MOT-CLÉ » et je t'envoie le lien !
```

**6. Template 6 : La petite claque (1 slide)**
```
S1 : Me dis pas que tu sais pas [quoi faire] quand j'ai littéralement créé [offre]
qui te donne [la solution]… Réponds juste « MOT-CLÉ »
```

**7. Template 7 : La motivation**
```
S1 : Je viens de [gros résultat]… c'est le genre de [liberté/vie] dont je rêvais. En
[délai], ta [vie] pourrait changer si tu te mettais à fond sur [sujet]. Arrête de [ce
qui te freine] et fais-le pour toi 🤝
S2 : Réponds « MOT-CLÉ » si tu veux les étapes exactes.
```

**8. Template 8 : Bonjour + pitch (story longue)**
```
S1 : Salut la team 🥵 J'ai passé [la matinée] à [action], là je [prochaine action] !
[sticker sondage]
S2 : Sur un autre sujet : beaucoup me demandent comment [résultat]… je te partage
tout 👉
S3 : Le moyen le plus simple, c'est [ce que tu enseignes] 🥵 [explique en 1 phrase]
S4 : Et le plus fou, c'est que t'as pas besoin de [ce qu'on croit nécessaire]. T'as
juste à : [étape 1], [étape 2], [étape 3]
S5 : C'est comme ça que [moi/mon élève] [résultat]. [preuve]
S6 : Donc si tu débutes sur [sujet] et que t'es prêt, [offre] te couvre. Réponds
« MOT-CLÉ », on se voit dedans !
```

**9. Template 9 : L'urgence (1 slide)**
*Place limitée ou deadline réelle uniquement — jamais une fausse urgence.*
```
Version A : Je [tâche banale], mais je voulais vite te rappeler que [offre limitée] !
👀 [détail] Réponds « MOT-CLÉ ».
Version B (sticker compte à rebours) : Si t'as envie de [transfo]… c'est maintenant
👀 T'as jusqu'à [deadline] pour choper [offre]. On se voit dedans !
```

**10. Template 10 : « Fatigué de… ? »**
```
S1 : Si t'en as marre de [galère précise]…
S2 : Et que tu veux la [méthode] que j'ai utilisée pour [résultat]… 👉
S3 : Faut que tu sois dans [offre] 🫶 C'est comme ça que [mon élève] a [résultat] 🥹
[capture]
S4 : Réponds « MOT-CLÉ » et je t'envoie le lien 🥵
```

### Templates de lien (nurturing — ne vendent pas directement)

**11. Template 11 : Le Q/R**
```
S1 : Bon [jour] ! Petit Q/R 🥳 pose-moi tes questions sur [sujet] 👇 [sticker
Questions]
```
*Slides suivantes : tu affiches la question reçue + ta réponse, et quand c'est
pertinent tu glisses ton offre ou ta ressource gratuite comme solution.*

**12. Template 12 : Coulisses / teaser**
```
S1 : J'ai passé [la matinée] sur [projet/ressource] qui va t'aider à [résultat] !
Dernières retouches et c'est à toi ✨ [sondage]
S2 (une fois en ligne) : Comme promis, c'est dispo ici 👇 [lien/reel]
```

**13. Template 13 : Le sondage**
*Fais voter ton audience. Chaque tap = de l'engagement, donc plus de portée.*
*Ex. FA : « Ta plus grosse galère en ce moment ? » (Stagnation vs Douleurs). « Tu
commences ta séance par quoi ? » (Échauffement structuré vs direct sur la barre).*

**14. Template 14 : Le feedback**
```
S1 : Aide-moi à t'aider ! Tu galères le plus sur quoi côté [sujet] ? 👇 [sticker
Questions]
```

**15. Template 15 : La présentation** (à mettre en « À la Une »)
```
S1 : Plein de nouvelles têtes cette semaine, on fait connaissance 👋
S2 : Bienvenue dans mon coin d'internet, moi c'est [prénom] ! Ce compte t'aide à
[résultat], même en étant [audience] 🥵
S3 : En [mois/année] je me suis lancé dans [ce que tu fais] parce que [ton pourquoi].
S4 : Depuis, j'ai [résultats] 🔥
S5 : Le moyen le plus simple d'[atteindre le résultat], c'est [ta solution] 🥳
S6 : Si tu débutes et que t'es prêt, [ressource/offre] te couvre 💗 Réponds
« MOT-CLÉ »
S7 : Quelques fun facts 😆 : [fait 1], [fait 2], [fait 3]
```

**16. Template 16 : Le déclic**
```
S1 : Je viens de [gros résultat]… c'est ça, la puissance de [sujet]. Arrête de
[frein] et [action].
S2 : Te fais pas avoir : j'ai passé [période] bloqué à [point bas]. Ce qui a changé ?
[ce que tu as modifié].
S3 : Mon meilleur conseil ? [conseil]. On m'a dit « [conseil bidon] » et ça m'a
laissé [galère]. À la place : [ce que tu appliques].
```

**17. Template 17 : Le quotidien**
*Pas de règle. Un café, ton setup, un trajet, une galère du jour. Les humains se
connectent à des humains. Plus tu es vrai, plus le lien est fort.*

## Format de sortie

```
📱 TEMPLATE : [nom du template]
🎯 CONTEXTE : [pourquoi celui-ci maintenant — promo/place dispo/témoignage/lien]
🔑 CTA : [COACHING en DM / sticker lien / question d'engagement]

--- STORY (slide par slide) ---
S1 : "..."
[visuel/photo suggérée]

S2 : "..."
[visuel/photo suggérée]

[...]

--- NOTE ---
[si un trou reste à remplir par Val — preuve sociale, chiffre précis — le signaler ici]
```
