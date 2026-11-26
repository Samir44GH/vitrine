---
title: "Les Oubliés du refuge"
summary: "Chaque dimanche, le portrait de l'animal qui attend une famille depuis le plus longtemps au refuge."
year: 2026
category: automatisation
status: en-cours
stack: [n8n, Telegram, DeepSeek, Data Tables]
sigil: refuge
order: 7
---
Dans un refuge, certains animaux attendent des mois sans que personne ne parle d'eux. Ce workflow leur donne un rendez-vous hebdomadaire.

## Ce qu'il fait

Chaque dimanche à 10 h, un message présente l'animal qui attend depuis le plus longtemps. Pour ne pas toujours parler du même, il alterne chaque semaine entre les trois qui attendent le plus.

## Le choix revient au code, pas à l'IA

C'est le code qui calcule les durées d'attente, retient les trois plus anciennes et désigne celui de la semaine. L'IA ne reçoit ensuite que quatre informations : le nom, l'espèce, la durée d'attente et une particularité. Elle écrit un texte chaleureux à partir de ces seuls faits, sans inventer de caractère ni d'histoire, et **sans avoir le droit d'écrire un chiffre**.

C'est la même règle que dans mes autres projets : quand une machine est touchante, il faut qu'elle soit exacte.

## Une contrainte assumée

Aucun refuge ne publie ses pensionnaires par une interface programmable — la plupart passent par leur page Facebook. Les fiches sont donc tenues à la main dans une table, avec une case à décocher le jour de l'adoption plutôt qu'une ligne à supprimer.
