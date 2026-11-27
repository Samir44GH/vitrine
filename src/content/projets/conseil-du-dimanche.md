---
title: "Le Conseil du dimanche"
summary: "Un message par semaine qui rassemble les chiffres de tous les autres workflows, propose trois décisions au plus, et n'écrit nulle part."
year: 2026
category: automatisation
status: en-ligne
stack: [n8n, DeepSeek, Data Tables]
sigil: faisceau
order: 12
---
Une dizaine de workflows tournent en parallèle, chacun avec ses propres compteurs. Au bout de quelques semaines, personne ne sait plus où en est l'ensemble : il faudrait ouvrir cinq tableaux pour s'en faire une idée.

Ce workflow est la réponse à ce problème. Un dimanche soir, un message. Il interroge les autres systèmes un par un, rassemble leurs chiffres de la semaine, et propose au plus trois décisions, dont une priorité.

## Trois décisions, pas trente

La contrainte est volontaire et elle est la raison d'être du projet.

Un rapport exhaustif ne sert à rien : il se lit une fois, puis on l'ignore. En forçant la synthèse à tenir dans trois décisions, on oblige la hiérarchisation à se produire quelque part. Si tout est important, rien ne l'est.

Chaque décision doit venir avec un **premier pas faisable en trente minutes**. Une recommandation sans première marche n'est pas une décision, c'est un souhait. Et le message se termine par une chose à **ne pas** faire cette semaine — parce que choisir, c'est aussi écarter.

Dernière règle, la plus difficile à tenir : si la semaine a été calme, le Conseil doit le dire et proposer moins de trois décisions. Il lui est explicitement interdit d'inventer un problème pour remplir le format.

## Ce qu'il n'a pas le droit de conclure

En dessous de trente signaux mesurés, le Conseil ne peut rien conclure sur la qualité du bot d'analyse, et ne peut pas proposer de le modifier sur cette base. Il doit dire combien de signaux il manque.

C'est une barrière statistique posée dans la consigne, parce qu'un modèle de langage commentera volontiers une série de six résultats comme si elle prouvait quelque chose. Elle ne prouve rien.

Les chiffres de l'en-tête, eux, sont écrits par le code et jamais par le modèle. Il les lit, il ne les recalcule pas, et il lui est interdit d'en citer un qui ne figure pas dans le dossier qu'on lui remet.

## Il ne touche à rien

Le Conseil est en lecture seule, de bout en bout. Il n'écrit dans aucune table, ne modifie aucun workflow, ne déclenche aucune action. Il regarde et il rend compte.

C'est ce qui permet de le lancer à tout moment sans aucun risque, et ce qui fait qu'une erreur de sa part ne coûte jamais qu'une lecture inutile.

## Quand une source ne répond pas

Chaque chiffre vient d'un workflow distinct, et chacun peut être en panne. Plutôt que d'afficher un zéro — qui se lirait comme un vrai zéro — la ligne concernée affiche **« indisponible »**, et l'erreur reste consultable dans l'exécution.

La distinction compte : « zéro erreur cette semaine » et « je n'ai pas réussi à compter les erreurs » sont deux informations opposées, et une synthèse qui les confondrait serait pire que pas de synthèse du tout.
