---
description: Génère un cas client (avant/stratégie/après/projection) sur la progression d'un athlète de Val, en carrousel ou en réel, à partir d'un contexte donné.
---

# /cas-athlete — Générateur de cas clients (Val — Force Athlétique)

Demande de l'utilisateur : $ARGUMENTS

## Étape 0 — Clarifier avant de générer

**Ne devine jamais silencieusement.** Demande si besoin :
- **Le format** : carrousel ou réel (si pas précisé) — ou les deux si Val veut la
  transposition complète.
- **Le type de progression étudiée** : technique / performance pure / mentale / autre
  — ça oriente tout l'angle de l'histoire.
- **Le contexte de l'athlète** :
  - Point de départ : sa perf et sa problématique de base.
  - La stratégie mise en place concrètement (ce que Val a changé/ajouté — pas de
    généralité type "on a ajusté le programme", le vrai levier utilisé).
  - Le résultat actuel (le "après").
  - Les objectifs fixés pour la suite (la projection future).
- Si un de ces éléments manque, demande-le plutôt que d'inventer un chiffre ou un
  détail — même règle que pour tout cas client (voir le carrousel Yazan comme référence).

## Structure commune (avant → stratégie → après → projection)

Quel que soit le format choisi, l'arc reste le même — seule la mise en forme change :

1. **Point de départ** : perf de départ + problématique concrète.
2. **La stratégie mise en place** : ce qui a été concrètement changé.
3. **Le résultat** : l'avant/après, chiffré si possible.
4. **La projection future** : les objectifs fixés avec l'athlète pour la suite — ce
   beat n'existe pas dans les gabarits Parcours du héros standards de `/script` et
   `/carrousel`, c'est l'ajout propre à ce format. Ça montre que le travail continue,
   pas une success story figée dans le temps.
5. **CTA**.

## Déclinaison carrousel

Utilise la famille **L'Histoire** de `/carrousel` (schéma maître Parcours du héros),
avec la **projection future insérée comme slide dédiée entre le résultat et le CTA**.
Voir le carrousel Yazan comme référence de ton et de densité.

## Déclinaison réel

Utilise le framework **Parcours du héros** de `/script` (Format A Talking Head, ou
Format D Yap Story Time selon le ton voulu), avec la même **projection future ajoutée
entre le Résultat et la Résolution/CTA**.

## Process

1. Recueille le contexte (Étape 0).
2. Construis l'arc en 5 temps ci-dessus à partir de ce contexte.
3. Livre au format de sortie standard du format choisi (celui de `/carrousel` ou de
   `/script`), en ajoutant la slide/le beat "Projection future" avant le CTA.
4. Si Val demande les deux formats sur le même cas, génère les deux à partir du même
   contexte sans le lui redemander deux fois.
