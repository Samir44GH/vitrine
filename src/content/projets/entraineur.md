---
title: "L'Entraîneur"
summary: "Chaque dimanche, une machine relit le travail d'une autre, cherche l'erreur qui se répète — et demande l'autorisation avant de corriger quoi que ce soit."
year: 2026
category: automatisation
status: en-cours
stack: [n8n, DeepSeek, API n8n]
sigil: boucle
order: 11
---
Le bot d'analyse crypto produit des rapports. Certains se révèlent faux. La question naturelle est : *pourquoi*, et surtout, *est-ce toujours la même raison* ?

Chaque dimanche en fin d'après-midi, ce workflow relit les signaux arrivés à terme, recalcule lui-même qui avait raison à partir des prix réels, et cherche dans les rapports erronés une erreur de méthode qui revient. S'il en trouve une, il propose **une seule** modification du texte qui pilote l'autre machine.

## Il ne corrige rien tout seul

C'est le point central, et il est inscrit dans le code, pas dans une bonne intention.

L'Entraîneur lit le prompt de l'Agent 2 par l'interface de programmation de n8n, **en lecture seule**. Il ne peut pas l'écrire. Sa proposition part sur Telegram et attend un ✅ ou un ❌. Sans réponse sous vingt-quatre heures, elle est classée « sans réponse » et rien n'est modifié.

Une machine qui corrigerait une autre machine sans surveillance serait une très mauvaise idée. Elle dériverait sans que personne s'en aperçoive, et chaque dérive servirait de base à la suivante.

## Quatre refus écrits dans le code

Avant même d'arriver sur Telegram, une proposition est rejetée si elle touche au bloc de mise en forme du rapport, si elle modifie les intitulés de rubriques, si elle dépasse 450 caractères, ou — le plus utile — si le « texte actuel » qu'elle prétend remplacer **n'existe pas mot pour mot** dans le prompt.

Ce dernier contrôle attrape le défaut typique d'un modèle de langage : citer de mémoire un texte qu'il croit avoir lu, et proposer de corriger une phrase qui n'a jamais existé.

## Ce qu'il ne sait pas faire

Il ne voit pas les données que l'autre machine avait sous les yeux, seulement ce qu'elle en a écrit. Il cherche donc des erreurs visibles dans le raisonnement lui-même : une confiance élevée malgré un argument contraire sérieux, une conclusion sans cause identifiée là où l'abstention s'imposait.

Il ne mesure pas non plus si sa proposition améliore réellement le bot. Ça, c'est le travail d'un banc d'essai séparé, où la proposition retenue devient une version B comparée à l'existante.

## Le silence est le cas normal

En dessous de deux signaux faux sur vingt-huit jours, aucun appel au modèle n'est déclenché : un message court suffit. Beaucoup de dimanches passeront sans aucune proposition, et c'est le comportement attendu.

Un outil de ce genre qui trouverait quelque chose à corriger chaque semaine ne serait pas vigilant : il serait bavard.
