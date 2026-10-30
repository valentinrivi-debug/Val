# Mémoire du projet — Val, coach Force Athlétique

Ce fichier est lu automatiquement au début de chaque session. Il contient tout ce qui
n'est pas déjà dans les commandes (`.claude/commands/`) : comment on travaille avec Val,
ses préférences, ses athlètes, les stats de ses vidéos et ce qui reste à faire.
**Mets-le à jour à chaque fois qu'une info durable apparaît** (nouvelle stat, nouveau cas
athlète, nouvelle préférence, idée produite), puis commit + push.

## Le projet

Val (Valentin), coach de force athlétique (SBD). Ce dépôt sert à produire son contenu
Instagram : scripts de réels, carrousels, stories, threads format tweet. Profil business
détaillé (offre 140€/mois, mot-clé DM COACHING, ton) : `.claude/context/story-profil.md`.

Commandes disponibles :
- `/script` : réels (Talking Head, One Shot, Vlog, Yap) + toutes les règles de hooks
  validées par les stats réelles (hook texte mystère, pastille clones, gabarit B-roll…).
- `/carrousel` : carrousels (7 familles, ROT, AIDA).
- `/story` : stories (17 templates Stories Pro).
- `/idees` : interview d'extraction d'idées en 2 phases.
- `/cas-athlete` : cas client avant/stratégie/après/projection, en carrousel ou en réel.

Sources de formation (14 PDF) : `content/ressources/`.

## Règles de travail (techniques)

- **Branche** : développer et pousser sur `claude/scripts-hooks-file-access-8fqcq9`.
- **Désynchronisation récurrente** : la copie locale perd souvent ses fichiers (dossier
  quasi vide, 1 seul commit). Diagnostic : `git fetch origin <branche>` puis
  `git merge-base --is-ancestor HEAD origin/<branche>` ; correction :
  `git merge --ff-only origin/<branche>`. Le dire à Val en une phrase, rien n'est perdu.
- **Fichiers envoyés par Val** : le dossier d'upload est effacé à chaque redémarrage.
  Copier tout fichier utile dans `content/ressources/` puis commit + push aussitôt.
  Les brouillons et extractions temporaires vont dans le scratchpad, jamais dans le dépôt.
- **Google Drive** connecté au compte `valentinrivi@gmail.com` (un seul compte possible,
  changement uniquement via les réglages de connecteurs claude.ai). Val y a un dossier
  **CLAUDE** pour m'envoyer les gros fichiers. Limite de téléchargement : **10 Mo**.
- **Vidéo** : `ffmpeg` est disponible pour extraire des images d'une vidéo < 10 Mo.
  Impossible de transcrire l'audio : toujours demander le texte du script à Val.
- **Pas d'accès au Mac de Val** (session cloud). Instagram est bloqué par le proxy réseau
  (pas de téléchargement de réels par lien) : passer par enregistrement d'écran + compression.
- **Compression iPhone** : raccourci "Encoder la vidéo", taille 640, qualité Faible.
  Sur Mac : clic droit → "Encoder les fichiers vidéo sélectionnés" → 480p.
- **Données personnelles** : Val a déjà envoyé par erreur un document fiscal (Urssaf).
  Ne jamais traiter ni recopier ce genre de document ; le signaler et l'ignorer.
- **Graphiques/schémas** : publiés en Artifact (lien), palette dataviz validée, sobres,
  mode clair/sombre. Pas de bouton d'export : pour un PDF, Safari → Partager → Imprimer
  → pincer l'aperçu → Enregistrer dans Fichiers.

## Comment travailler avec Val

- Val dicte beaucoup à la voix : coquilles fréquentes ("PDC" = PDF, "Kaizen" = ok…).
  Interpréter le sens ; si une phrase est ambiguë sur un point technique réel
  (programme d'un athlète), demander plutôt que deviner.
- Deux règles absolues déjà dans `/script` : **la voix de Val, jamais IA** et
  **posture directeur marketing + scripteur pro** (proposer, signaler les points faibles).
- Quand il demande une correction ("tu peux corriger"), ne corriger que la grammaire et
  signaler ce qui a changé, sans réécrire son style.
- Il aime : les hooks qui gardent le mystère, les analogies universelles (partir du grand
  public pour descendre vers la niche), les threads au registre réfléchi et profond,
  les incrustations texte qui portent la notation technique pendant que la voix vulgarise.
- Il n'aime pas : annoncer "3 points" d'entrée, comparer son offre à "un programme à 30€",
  l'idée que l'athlète "n'aura plus besoin du coach" (il croit au suivi long terme),
  les textes qui sonnent victime ou trop personnels, l'analogie avec la course à pied.

### Formats préférés

- **Carrousel classique** : TITRE EN MAJUSCULES + sous-titre en minuscules + mots
  surlignés en jaune.
- **Carrousel format tweet** : 1 à 2 phrases par slide, ton réfléchi, souvent une
  question en commentaire comme CTA.
- **Yap green screen** : notation de prog brute à l'écran, explication claire à l'oral.

## Journal des stats vidéo (données réelles)

Rétention = durée moyenne / durée totale.

| Vidéo | Format | Hook texte | Vues | Rétention | Followers |
|---|---|---|---|---|---|
| Dérack squat | 3 clones | "3 niveaux, 1 seul dérack efficace" | 17K | 41% | +18 |
| Mal au dos | 3 clones | "Ce que tu dois faire si t'as mal au dos" (déclaratif) | 3,3K | 28% | 0 |
| Hanche deadlift | 2 clones | "La solution pour ancrer ta hanche au deadlift" (déclaratif) | 6,8K | 30% | +4 |
| Dérack bench (nuque) | 3 clones | "3 niveaux, 1 seul dérack efficace" | 23,7K | 47% | +34 |
| Tension bench (pause) | 3 clones **sans pastille** | "3 niveaux, 1 seul détail les sépare" | 2K | 30% | +1 |
| **Poignet bench** | 3 clones + pastilles 90/120/180 kg | "3 NIVEAUX, 1 SEULE TECHNIQUE EFFICACE (tuto fin de vidéo)" | **77,7K** | **53%** | **+208** |
| Nuque bench | B-roll "Est-ce que tu savais que…" | "TA NUQUE : LE DÉTAIL QUI CHANGE TOUT (EN 30 SECONDES)" | 28,1K | 50% | +58 |

Détails du record (poignet bench) : 3K likes (4,8%), 1,1K enregistrements, 53 republications,
17 commentaires, abandon 27,5%, toutes les métriques au-dessus de sa moyenne.
Le script de cette vidéo n'a pas encore été transmis.

Leçons déjà intégrées dans `/script` : hook texte mystère > déclaratif (portée, rétention
et followers), pastille de charge obligatoire sur chaque clone, hook verbal plus tolérant en
B-roll, gabarit "Est-ce que tu savais que…". Le nombre de clones (2 ou 3) n'a pas montré
d'effet propre ; Val préfère 3.

Vidéos tournées dont les stats manquent encore : deadlift clones (hinge / se grandir),
genoux qui rentrent (clones + Yap), hanche low bar (B-roll), pied au deadlift (B-roll),
sortie de barre squat en A/B test ("je t'explique" vs sans), "Si j'avais une seule vidéo
pour faire exploser ton dérack" (a bien marché selon Val).

## Cas athlètes (données réelles données par Val)

**Louis** : bench 193 kg, soit 0,5 kg au-dessus du record de France. Athlète qui se
challenge beaucoup.
- Semaine : lundi Bench CG (quaternaire), mercredi Bench 2CT (principal), jeudi Bench
  Larsen (secondaire), samedi Bench 2CT (ternaire, charges indiquées pour ne pas pousser trop).
- Larsen par bloc : B1 1x1 + 3x5, B2 1x2 + 3x4, B3 1x3 + 3x3. Dans un bloc : S1 RPE 6,
  S2 RPE 7, S3 RPE 8 (pic), S4 charge indiquée 1x2x150 + 2x4x130.
- CG : S1 3x6 RPE 6, S2 3x6 RPE 7, S3 3x6 CAP 8, S4 2x6 CAP 7.
- À confirmer avec Val : 2CT = pause 2 temps ? CG = prise serrée ? Son script parlait
  de "deux formats challenge" mais n'en détaillait qu'un.
- Schémas publiés : répartition hebdo https://claude.ai/artifact/YaSShFrFiq5nJntVaPiTbS ,
  Larsen par bloc https://claude.ai/artifact/Q3VUK4G7vE9CVgdmoLKe8y ,
  Larsen par semaine https://claude.ai/artifact/7XhfeztfAG8tYFW3xVmh6g ,
  CG https://claude.ai/artifact/TRPGk2nhWgouQW1k9L5vmT .

**Léa** : a commencé en deadlift tradi avec de grosses douleurs de dos, max 80 kg →
sumo, 130 kg (+50). Transition progressive (1 sumo / 1 tradi), RDL pour le hinge,
back extension iso/dynamique + Pallof press. Principal 3-2-1 en top set + back-off
de 5 à 3 reps ; secondaire en cluster 8-10 reps ; incrémentation linéaire ; dernière
semaine du bloc le secondaire passe en 1x1 + 4-5x1. Suite : continuer le linéaire,
baisser l'intensité sur le volume (récup plus dure), gros changements pro à anticiper.

**Yazan** : squat 250, bench 155, deadlift 265 → 320. Problème de placement de hanche /
compréhension du hinge / répartition dans la semaine. Straight sets, retrait de la
variation pause (gênait le fessier), gros travail fessier sur 2 blocs. Deadlift primaire
en compétition (top set + back-off), secondaire en pause ; loin des compétitions on inverse.
En ce moment : phase de vie très stressante, performances qui se dégradaient →
**bloc pivot** (une séance en moins, exercices inhabituels, moins spécifique, plus de récup).
Athlète discipliné qui communique beaucoup.

**Axel** : au squat, initiait la descente par les genoux (descente en deux temps, pas
de tension en bas, extension thoracique). Consigne : laisser la hanche reculer comme
pour s'asseoir sur une chaise, accepter un buste un peu plus incliné. Tempo excentrique
+ pause isométrique en bas, RDL tempo pour les fessiers. Bloc en cours, gros progrès
en contrôle moteur.

**Christophe** (coaché en présentiel) : au bench, en reculant dans le banc, la nuque
décollait (on voyait le jour entre nuque et banc) et il perdait sa dépression scapulaire
dès qu'il tenait la barre. Correction : se placer et reculer **sans toucher la barre**
jusqu'à l'avoir au niveau des yeux (double menton, nuque enfoncée), saisir la barre sans
décrocher les épaules, reculer les derniers centimètres jusqu'à la barre au niveau de la
bouche, puis ouvrir les coudes et sortir. Résultat (vidéo avant/après) : épaules loin des
oreilles, beaucoup plus stable. On peut le nommer dans le contenu. Sur la vidéo avant,
l'espace nuque/banc ne se voit pas : ce qui se voit, ce sont les épaules collées aux
oreilles (manque de dépression scapulaire), c'est donc ça qu'il faut montrer en hook.

**Val lui-même** : blessure au dos sur un deadlift (surcharge sacrum/lombaire), plus
d'un an à un an et demi pour revenir, causée par une progression trop rapide (trop de
volume, de fréquence, d'intensité). Origine de sa philosophie santé + long terme.

## Idées en réserve (pas encore produites)

- **Interview `/idees`** : histoire de sa blessure ; hyperfréquence SBD ("300 au squat,
  pas capable d'un squat à vide") ; le sous-maximal (60-85%) qui transfère au 1RM,
  vu chez ses athlètes revenus de blessure ; le cardio négligé en power ; l'éthique
  (coachs qui démarchent des athlètes déjà suivis) ; programmation simple (à développer) ;
  sa passion cartes Pokémon (One Shot autodérision).
- **Clones écrits et validés, à tourner** : regard au squat (plafond → pieds → regard
  neutre fixé au sol 1-2 m devant, hook "3 niveaux, 1 seul regard efficace") ; rebond sur
  la poitrine au bench (rebond → descente contrôlée mais relâchement au contact → pousser
  contre la barre même au contact, hook identique au record "3 niveaux, 1 seule technique
  efficace"). Le bench reprend le fond de la vidéo "tension bench" qui avait floppé sans
  pastille : bon test de la règle des pastilles.
- **Clones non techniques** : **format discussion** à table, sans "ça ressemble à quoi"
  ni démo (la démo tombe à plat hors technique). Hook texte "3 niveaux…" gardé sans
  "(tuto fin de vidéo)", tension gardée par une dernière réplique qui fait sourire.
  **Toujours 3 athlètes qui incarnent un problème courant, jamais 3 coachs** (Val a
  refusé le format "3 niveaux de coaching"). Validé : séance compliquée (forcer coûte que
  coûte → couper la séance → ajuster la charge pour rester dans le RPE, chute "Je vais
  peut-être enlever 20 kilos alors" / "Commence par 10"). Écrit, en attente de
  validation : la douleur en séance (forcer dans la douleur → tout arrêter → adapter
  amplitude/variante/charge pour rester dans l'indolore, prévenir le coach, kiné si ça
  persiste ; chute sur le "no pain no gain" de la bio).
- **Clones** : clones non techniques sur la stagnation, la douleur, le test du max, le
  retour au coach, la nutrition, le mental pré-compétition ; dos qui s'arrondit au
  deadlift.
- **B-roll "Est-ce que tu savais que…"** : le grip (irradiation, déclinable sur les 3
  mouvements), le regard au squat, la respiration avant le décollage au deadlift.
- **Psycho / threads** : syndrome de l'imposteur du lifteur intermédiaire, le contrôle
  comme refuge (brouillon écrit), la dépendance à la sensation de "forcer", le coach
  qui ne doit pas rassurer en permanence, le coach miroir plutôt que sauveur.
- Carrousel du cas Louis (famille L'Histoire).
- **Format "objection"** (sans clones, inspiré d'un autre créateur) : objection → réponse
  courte → insistance ("mais…") → recadrage en une phrase → etc. Val le veut un peu plus
  long, sans "ok, et…" à la fin. Écrit, en attente : "Je débute, un coach c'est pas trop
  tôt ?" (pas lourd → apprendre seul avec Insta → je progresse déjà → je verrai quand je
  stagnerai ; chute possible sur sa propre blessure). Tournage : en réponse à un
  commentaire, ou voix hors champ qui pose les questions.
- **Format "hook conditionnel"** (inspiré d'une vidéo running à 253K likes) : "Si tu
  [action difficile] et que tu [étape]…" → une phrase par étape, un plan par phrase →
  "…voilà ce que tu verras" → résultat montré en grand, plus un mot. Écrit, en attente :
  le bench de Louis (sa semaine décrite sans les sigles CG/2CT, non confirmés → payoff le
  193 kg). Alternative proposée : journée de compétition vue par le coach.
- **Sketch "le cue incompris"** (à tester au tournage, PAS encore dans `/script` tant que
  Val n'a pas ses propres stats) : inspiré d'une vidéo performante d'un autre créateur
  ("bend the bar" → pression des auriculaires). 5 temps : cue répété en boucle, l'athlète
  craque → "explique-moi ce que tu fais" (mauvaise interprétation révélée) → "Voilà",
  recadrage partie du corps + direction, "essaie" → l'athlète reformule et commente en
  direct → mécanisme en une phrase, le coach assume ("j'ai mal expliqué, celle-là je la
  prends pour moi"), relance sur le défaut suivant. Scripts écrits : "éloigne tes épaules
  de tes oreilles" (bench, validé par Val : le twist révèle que ses épaules ne touchent
  pas le banc quand il recule ; nouveau cue = enfoncer la nuque dans le banc et l'allonger
  en reculant, le plus relâché possible) et "gaine-toi" (squat, validé par Val : il rentre le ventre au lieu de le gonfler à 360°).
  Aussi "remonte tes fesses" (deadlift, validé : part trop assis, en remontant les
  fesses son dos perd sa position ; twist = descendre vers la barre hanche en arrière,
  épaules légèrement devant ; relance finale "pourquoi tu l'arraches" → partie 2 possible
  sur "mets-toi en tension"). Hook texte commun conseillé pour la série : "Le cue que tout
  le monde comprend de travers". Candidats restants : "plie la barre", "genoux dehors",
  "pousse avec les talons", "mets-toi en tension", "garde le dos droit".

## Déjà produit ou publié (ne pas refaire)

- Threads tweet : attachement émotionnel à l'échec ; total ≠ identité ; la négativité
  sur les réseaux ; la performance est contextuelle ; réagir à une séance ratée (publié) ;
  la proactivité de l'athlète et les clés données par le coach (prêt, dernière version :
  S9 "La proactivité, c'est ce qui peut vraiment faire décoller ta progression. Alors
  deviens acteur de celle-ci.").
- Carrousels : ce qui se passe derrière un retour technique de 24h ; 5 erreurs de
  programmation (format tweet) ; checklist dérack bench ; Yazan ; jeu de cartes.
- Vidéo épinglée de présentation de l'offre (script final validé).
- Graphique de progression en fourchette de reps :
  https://claude.ai/artifact/2mVBrUJG8tf6vVbDw5qnBQ

## Chantiers en cours

1. **Analyser la vidéo record (poignet bench)** : elle est dans le dossier Drive CLAUDE
   mais fait 58 Mo. Il faut une version < 10 Mo + le texte du script, puis en faire la
   référence du format clones dans `/script`.
2. **Yap "garde les mêmes exercices d'assistance"** : script écrit (fourchettes de reps,
   3x8-12), il reste à choisir l'analogie d'ouverture (piano, régime, jeu vidéo, recette).
3. **Yap record de Louis** : script réécrit, attend la confirmation de 2CT / CG.
4. **PDF force athlétique de 147 pages** jamais reçu (échecs d'envoi) : passer par le
   dossier Drive CLAUDE.
5. Récupérer les stats manquantes listées plus haut et compléter le journal.
