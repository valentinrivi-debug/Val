---
description: Questionnaire sur les cas concrets récents des athlètes de Val, pour en tirer du contenu qui montre son coaching et donne envie de prendre un suivi.
---

# /debrief — Les cas concrets du moment

Demande de l'utilisateur : $ARGUMENTS

## Pourquoi cette commande

Val est fort en contenu éducatif, mais il parle trop peu de son coaching. Ce
questionnaire sert à faire remonter ce qui s'est passé récemment avec ses athlètes,
pour montrer en contenu les problèmes que la plupart des pratiquants rencontrent, et
comment lui y répond. Le but est de vendre son suivi en montrant le travail réel,
jamais en vantant l'offre.

`/idees` extrait ses opinions et ses histoires. `/debrief` extrait ses cas athlètes
récents. `/cas-athlete` transforme ensuite un cas en carrousel ou en réel.

## Règles de l'interview

- **Une question à la fois.** Attendre la réponse avant la suivante.
- Encourager la dictée vocale : plus c'est brut, mieux c'est.
- Creuser quand une réponse est vague : demander le chiffre, le délai, la phrase exacte
  de l'athlète, ce qui s'est vraiment passé.
- **Ne jamais inventer** un chiffre, un résultat ou une citation. Un trou reste un trou.
- Demander si l'athlète **peut être nommé**. Sinon, on parle "d'un de mes athlètes".
- Un cas peut être petit (une séance, une douleur réglée, un déclic technique) : pas
  besoin d'une transformation spectaculaire pour faire un bon contenu.

## Les questions, pour chaque cas

1. **Qui et quoi** : quel athlète, et qu'est-ce qui s'est passé avec lui ces dernières
   semaines ? On peut le nommer ?
2. **Le point de départ** : son niveau, ses perfs, ce qu'il cherchait en arrivant.
3. **Le problème** : ce qui coinçait exactement (technique, douleur, stagnation, vie
   perso, mental, organisation de la semaine…).
4. **Ses mots** : comment il en parlait, ce qu'il te disait. Ses phrases exactes valent
   de l'or pour les hooks.
5. **Ce qu'il avait déjà essayé** seul, avant ou pendant le suivi.
6. **Ce que toi tu as vu** et que lui ne voyait pas.
7. **Ce que tu as mis en place**, concrètement (consignes, prog, échanges, appels).
8. **Le résultat** : chiffres, sensations, délai. Est-ce que c'est fini ou en cours ?
9. **Les preuves disponibles** : vidéo avant/après, capture de message (avec son accord),
   chiffre précis.

Puis : "Un autre cas ?" Quand Val n'en a plus, passer à la sortie.

## La sortie

Pour chaque cas, une fiche courte :

- **Le problème universel** que ce cas illustre, formulé comme le vivent les gens
  (ex. "je stagne depuis des mois", "j'ai mal au dos dès que je tire").
- **L'objection de vente** à laquelle il répond (ex. "je débute, c'est trop tôt",
  "j'ai mal, j'attends que ça passe", "j'ai pas le temps", "je peux le faire seul").
- **La phrase de l'athlète** à réutiliser en hook.
- **Le levier de Val** en une phrase.
- **Le résultat et la preuve** disponible.
- **2 ou 3 contenus possibles**, en choisissant parmi les formats déjà utilisés :
  `/cas-athlete` (carrousel ou réel), hook conditionnel, clones "douleur" ou discussion,
  format objection, story de vente (template 1 de `/story`, transformation client).

Terminer par un top 3 des cas les plus vendeurs, avec une ligne d'explication chacun.

## Après le debrief

Ajouter chaque nouveau cas dans `CLAUDE.md`, section "Cas athlètes" (en notant s'il peut
être nommé), ajouter sa ligne dans `.claude/context/problematiques.md` (problème
vécu dans les mots du prospect, croyance, cas preuve), puis commit + push.
