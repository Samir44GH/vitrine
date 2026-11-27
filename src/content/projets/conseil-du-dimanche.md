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

## Un extrait réel

Contrairement aux autres fiches de ce site, ce message est **un extrait, pas le message entier**. Le Conseil rassemble l'état de toute l'installation : son message contient des dépenses, le contenu du registre d'actions et l'avancement d'un travail d'écriture. Rien de tout cela n'a sa place sur une page publique. Ce qui suit est le reste, mot pour mot.

<figure class="recu">
<figcaption><b>Le Conseil du dimanche</b> <span>extrait du message reçu le vendredi 27 novembre 2026</span></figcaption>
<div class="recu-corps">
<h4><span class="mk">🏛️</span> Le Conseil du dimanche</h4>
<p>📈 Bot crypto : 24 signaux · ✅ 0 ❌ 0 ➖ 0<br />
🛠️ Système : 0 alerte d'erreur<br />
📰 Veille : 7 nouveautés</p>

<p><b>Ce que la semaine a appris</b></p>
<ul>
<li>Le bot crypto a émis 24 signaux cette semaine, sans bilan 7 j encore disponible ; il manque 6 signaux mesurés pour atteindre le seuil de 30 et pouvoir juger.</li>
</ul>

<p><span class="mk">🚫</span> <b>À laisser de côté</b> : ne pas modifier le prompt du bot crypto sur la base des 24 signaux de la semaine : il manque 6 signaux mesurés pour atteindre le seuil de 30.</p>
</div>
</figure>

C'est la barrière statistique en train de fonctionner, et c'est pour cette raison que je montre cet extrait plutôt qu'un autre.

Vingt-quatre signaux, c'est largement assez pour qu'un modèle de langage trouve une tendance, la commente avec aplomb et recommande une correction. La consigne le lui interdit en dessous de trente. Alors il ne conclut pas, il **dit combien il en manque**, et il consacre son unique conseil négatif à prévenir qu'il ne faut rien changer cette semaine.

Une machine qui réclame plus de données avant de se prononcer est plus utile qu'une machine qui a toujours un avis.
