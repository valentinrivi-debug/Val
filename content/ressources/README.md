# Ressources

Dossier de stockage durable pour les fichiers envoyés par Val (PDF, images, zips...)
qui doivent rester accessibles d'une session à l'autre — contrairement au dossier
d'upload temporaire de l'environnement, qui est effacé à chaque redémarrage du
conteneur, ce dossier est versionné avec le reste du repo et persiste.

Dès qu'un fichier est envoyé, il est copié ici puis commité, pour rester disponible
dans toutes les sessions futures.
