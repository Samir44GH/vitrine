---
title: "Quelle Luciole es-tu ?"
summary: "Une date de naissance, et la page révèle votre Luciole — en montrant son calcul et sans rien envoyer nulle part."
year: 2026
category: web
status: en-ligne
stack: [HTML, CSS, JavaScript, Chiromancie]
sigil: lueur
order: 9
links:
  - { label: Essayer la page, url: "https://claude.ai/artifact/SbAcEr5B6xDRm8p1CcXzaN" }
---
J'écris un roman. Plutôt que d'en parler, j'ai construit une porte d'entrée : une page qui transforme une date de naissance en personnage de son univers.

> Dans la nuit, certaines personnes brillent. On les appelle les Lucioles. Elles se reconnaissent à un point de lumière dorée au creux de la paume, et elles sont douze : une par signe du zodiaque.

Le visiteur donne sa date, et reçoit sa carte : sa Luciole, sa pierre, sa lumière, son ombre, son chemin de vie. La carte se télécharge en image et le résultat se copie en texte.

## La page montre son calcul

C'est le détail dont je suis le plus content, et il n'allait pas de soi sur un sujet pareil.

Le chemin de vie n'est pas annoncé comme une révélation : **l'addition est affichée en clair**, chiffre par chiffre, jusqu'au résultat. On voit les chiffres de sa date s'additionner, puis la somme se réduire. La règle est écrite au bas de la page, avec les nombres maîtres qu'elle conserve.

Une page d'astrologie qui pose son arithmétique sur la table ne demande pas qu'on la croie : elle montre ce qu'elle fait. Le lecteur peut refaire le calcul.

## La date ne quitte pas le navigateur

La page le dit elle-même, sous le bouton, avant même qu'on ait cliqué :

> Ta date reste dans ton navigateur. Rien n'est envoyé.

Et c'est vrai : tout le calcul se fait sur la machine du visiteur. Aucun serveur ne reçoit quoi que ce soit, rien n'est conservé. Une date de naissance n'est pas une donnée anodine, et il n'y a aucune raison de la collecter pour afficher un résultat qu'on sait calculer sur place.

## Ce que la lecture déroule

Au-delà de la carte, la page développe le portrait du personnage correspondant, ses deux visages — une lumière et une ombre —, sa pierre, son chemin de vie et l'accord entre les deux lectures. Un cercle des douze permet de rencontrer les autres Lucioles, et une section sur la paume reprend les monts et les lignes telles que la saga les emploie.

Le résultat s'inscrit dans l'adresse de la page : un lien partagé rouvre la même Luciole.

## Vérification

1 134 contrôles automatiques : chacun des 366 jours tombe sur un seul signe, toutes les bornes de dates sont justes, toutes les dates de 1920 à 2026 donnent un chemin connu, et les dates impossibles sont refusées. Un visiteur né un jour de changement de signe voit une note l'invitant à regarder aussi le signe voisin.

## Rien de l'intrigue

Les douze personnages donnent leur signe, leur âge, leur métier et leur caractère. Les retournements du roman, eux, restent dehors : la page est une entrée dans l'univers, pas un résumé du livre, qui est toujours en cours d'écriture.
