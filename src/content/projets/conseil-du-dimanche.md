---
title: "Le Conseil du dimanche"
summary: "Un message par semaine qui rassemble les chiffres de tous les autres workflows, propose trois décisions au plus, et n'écrit nulle part."
year: 2026
category: automatisation
status: en-cours
stack: [n8n, DeepSeek, Data Tables]
sigil: faisceau
order: 12
---
Une dizaine de workflows tournent en parallèle, chacun avec ses propres compteurs. Au bout de quelques semaines, personne ne sait plus où en est l'ensemble : il faudrait ouvrir cinq tableaux pour s'en faire une idée.

Ce workflow est la réponse à ce problème. Un dimanche soir, un message. Il interroge les autres systèmes un par un, rassemble leurs chiffres de la semaine, et propose au plus trois décisions, dont une priorité.

## Trois décisions, pas trente

La contrainte est volontaire et elle est la raison d'être du projet.

Un rapport exhaustif ne sert à rien : il se lit une fois, puis on l'ignore. En forçant la synthèse à tenir dans trois décisions, on oblige la hiérarchisation à se produire quelque part. Si tout est important, rien ne l'est.

## Il ne touche à rien

Le Conseil est en lecture seule, de bout en bout. Il n'écrit dans aucune table, ne modifie aucun workflow, ne déclenche aucune action. Il regarde et il rend compte.

C'est ce qui permet de le lancer à tout moment sans aucun risque, et ce qui fait qu'une erreur de sa part ne coûte jamais qu'une lecture inutile.

## Quand une source ne répond pas

Chaque chiffre vient d'un workflow distinct, et chacun peut être en panne. Plutôt que d'afficher un zéro — qui se lirait comme un vrai zéro — la ligne concernée affiche **« indisponible »**, et l'erreur reste consultable dans l'exécution.

La distinction compte : « zéro erreur cette semaine » et « je n'ai pas réussi à compter les erreurs » sont deux informations opposées, et une synthèse qui les confondrait serait pire que pas de synthèse du tout.
