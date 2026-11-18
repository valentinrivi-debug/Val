# Brief motion design — Lara, séquence « Spoto press » (lundi)

Séquence d'un Yap en green screen : Val parle face caméra, détouré, et l'animation
passe derrière lui en fond. Elle illustre ce qu'il dit, au même rythme que sa voix.

## Format

- Vertical 1080 × 1920, 30 images/s.
- Durée : **11 secondes** (le temps de la phrase de Val, voir le texte plus bas).
- **Zone réservée à Val** : tout le tiers bas de l'écran (de y = 1250 à 1920) et une
  bande centrale de 500 px de large en dessous de y = 1000. Rien d'important à cet endroit,
  il sera devant.
- Zone utile pour l'animation : de y = 120 à y = 1200, marges latérales de 80 px.

## Identité visuelle

- Fond : noir profond #0D0D0D, avec un grain très léger (texture, opacité 5 %).
- Jaune d'accent : #FFDE32, réservé aux éléments les plus importants.
- Texte principal : blanc cassé #FAF4E6. Texte secondaire : gris #8A8A8A.
- Typo des titres : **Anton** (Google Fonts), en majuscules.
- Typo des textes et des chiffres : **Inter** Medium / Bold.
- Style : sobre, plat, pas d'illustration cartoon, pas de 3D. Animations rapides et
  nettes (easing « ease-out », 0,3 à 0,5 s par apparition).

## Texte dit par Val (à caler sur la voix)

> « Le lundi, du lourd en spoto press. Elle marque deux secondes de pause juste au-dessus
> de la poitrine, sans la toucher. Elle apprend à garder toute sa tension là où elle la
> perdait. »

## Déroulé seconde par seconde

### 0,0 → 1,5 s — « Le lundi, du lourd en spoto press. »
- Petite étiquette **LUNDI** en jaune (Inter Bold, 40 px), qui glisse depuis la gauche
  en haut (y ≈ 160).
- Titre **SPOTO PRESS** (Anton, 150 px, blanc cassé) qui apparaît juste en dessous,
  en montant de 40 px avec un fondu.
- Le titre reste affiché en haut pendant toute la séquence, réduit à 90 px à partir de
  1,5 s pour libérer de la place.

### 1,5 → 5,5 s — « Elle marque deux secondes de pause juste au-dessus de la poitrine, sans la toucher. »
- Schéma de profil, au centre de la zone utile, en traits simples :
  - une **ligne horizontale** blanc cassé = la poitrine ;
  - une **barre** (trait épais blanc cassé avec deux disques ronds aux extrémités) qui
    descend depuis le haut vers la poitrine (1,5 → 2,5 s).
- La barre **s'arrête à quelques centimètres au-dessus** de la ligne de la poitrine,
  sans la toucher.
- Pendant l'arrêt (2,5 → 4,5 s) :
  - un **chrono circulaire jaune** à côté de la barre se remplit en 2 secondes, avec
    « 2 S » au centre ;
  - l'**espace vide** entre la barre et la poitrine est souligné par deux petits traits
    jaunes et le texte **« PAS DE CONTACT »** (Inter Bold, 36 px, jaune).
- 4,5 → 5,5 s : la barre remonte, puis le schéma rétrécit et glisse vers le haut à
  droite (il reste en petit, comme rappel).

### 5,5 → 11 s — « Elle apprend à garder toute sa tension là où elle la perdait. »
Graphique de progression sur les 4 semaines du bloc, au centre de la zone utile.

- 4 colonnes alignées, de gauche à droite : **S1, S2, S3, S4**. Sous chaque colonne,
  l'étiquette de la semaine (Inter Bold, 40 px) et le schéma en dessous
  (Inter Medium, 34 px, gris).
- Chaque **série** = une barre verticale fine. La **hauteur** de chaque barre représente
  l'intensité relative (pas de kilos affichés).
- Une flèche verticale discrète à gauche, avec le mot « INTENSITÉ » écrit verticalement
  (gris, 28 px).
- Les colonnes apparaissent l'une après l'autre, les barres poussent depuis le bas avec
  un petit décalage entre chaque (0,08 s).

| Semaine | Apparition | Schéma (sous la colonne) | Barres | Hauteurs relatives | Couleur |
|---|---|---|---|---|---|
| S1 | 5,5 s | 5×2 | 5 barres | toutes à 60 % | blanc cassé |
| S2 | 6,7 s | 5×2 | 5 barres | toutes à 66 % | blanc cassé |
| S3 | 7,9 s | 2×2 + 3×2 | 2 + 3 barres | 2 barres à 82 %, puis 3 barres à 72 % | les 2 hautes en **jaune**, les 3 autres en blanc cassé |
| S4 | 9,1 s | 1×2 + 3×2 | 1 + 3 barres | 1 barre à 84 %, puis 3 barres à 74 % | la haute en **jaune**, les 3 autres en blanc cassé |

- À 8,2 s, au-dessus des 2 barres jaunes de S3, une petite étiquette **« SÉRIES
  LOURDES »** (jaune, 28 px).
- À 9,4 s, sous la colonne S4, l'étiquette **« SEMAINE DE COMPÈTE »** (jaune, 28 px), et
  au-dessus de la colonne une mention **« − DE SÉRIES, MÊME INTENSITÉ »** (blanc cassé,
  30 px).
- 10 → 11 s : tout reste affiché, léger zoom avant de 3 % sur le graphique pour finir.

## Règles à respecter

- **Aucun kilo affiché** sur cette séquence : les hauteurs sont relatives, les charges du
  spoto press n'ont pas été données.
- Les seuls chiffres autorisés : 5×2, 2×2 + 3×2, 1×2 + 3×2, 2 S, S1 à S4.
- Pas de texte dans le tiers bas (zone de Val).
- Une seule couleur d'accent : le jaune, seulement pour les séries lourdes, le chrono
  et « PAS DE CONTACT ».

## Exports attendus

- MP4 1080 × 1920, 30 images/s, fond noir (pas de transparence), 11 s.
- Optionnel : une version sans le titre du haut, pour réutiliser le graphique seul.
