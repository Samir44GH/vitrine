---
title: "Quelle Luciole es-tu ?"
summary: "Une page où une date de naissance révèle sa Luciole : l'univers des Sept Lumières, tiré du roman que j'écris."
year: 2026
category: web
status: en-cours
stack: [HTML, CSS, JavaScript, Chiromancie]
sigil: lueur
order: 8
---
J'écris un roman. Plutôt que d'en parler, j'ai construit une porte d'entrée : une page qui transforme une date de naissance en personnage de son univers.

## Ce que donne la page

Le visiteur entre sa date, et reçoit sa carte : sa Luciole, sa pierre, sa lumière, son ombre et son chemin de vie. La carte se télécharge en image et se partage.

La lecture complète détaille les deux visages de chaque Luciole, ce que le Murmure lui souffle, le calcul du chemin de vie posé en clair, et l'accord entre la Luciole du signe et celle du chemin. Un Cercle des Douze permet de rencontrer les autres, et une section reprend les sept monts et les quatre lignes de la paume.

## Les règles de construction

**La date ne quitte pas le navigateur.** Aucun calcul n'est envoyé ailleurs, aucune donnée n'est conservée.

**Un résultat se partage par son adresse.** La page inscrit la Luciole obtenue dans le lien : rouvert ailleurs, il montre la même.

**Rien de l'intrigue n'est dévoilé.** Les douze personnages donnent leur signe, leur pierre et leur caractère, mais les retournements du roman restent dehors.

**Les bascules sont signalées.** Un visiteur né un jour de changement de signe voit une note l'invitant à regarder aussi le signe voisin.

## Vérification

1 134 contrôles automatiques : chacun des 366 jours tombe sur un seul signe, toutes les bornes sont justes, toutes les dates de 1920 à 2026 donnent un chemin connu, et les dates impossibles sont refusées.
