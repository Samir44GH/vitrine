---
title: "Journal d'énergie"
summary: "Un journal du soir en quatre questions, une méditation lue à voix haute — et un code qui mesure à la place du modèle."
year: 2026
category: automatisation
status: en-cours
stack: [n8n, DeepSeek, Synthèse vocale]
sigil: losange
order: 10
---
Chaque soir, un bouton arrive sur Telegram et ouvre un formulaire de quatre questions : l'énergie ressentie de 1 à 10, l'humeur en un mot, la pratique du jour, et une ligne libre. En retour, un bilan chiffré, puis une méditation de trois à cinq minutes lue à voix haute.

C'est le projet le plus intime de cette liste, et c'est précisément pour ça qu'il est le plus strict sur le partage des rôles.

## Le code mesure, l'IA écrit

La séparation est nette, et elle n'est pas négociable à l'exécution.

Le code calcule la moyenne de la semaine, situe la soirée au-dessus ou en dessous, compte la série de jours avec pratique, et compare les journées avec et sans pratique sur deux mois. Il choisit aussi la séance du soir selon des seuils écrits à l'avance : repos quand l'énergie est basse, apaisement quand les mots évoquent la tension, gratitude quand elle est haute.

Le modèle de langage n'intervient qu'ensuite, et pour une seule chose : écrire le texte de la méditation correspondant à la séance déjà choisie. Il ne décide rien, ne calcule rien, et ne voit aucun chiffre qu'il pourrait reformuler de travers.

## Un indice, pas une preuve

La comparaison entre les jours avec et sans pratique porte cette mention en toutes lettres dans le bilan. Une moyenne plus haute les jours de pratique ne dit pas que la pratique en est la cause — il peut aussi bien s'agir de l'inverse, ou d'un troisième facteur.

C'était la tentation la plus évidente du projet : laisser croire à une démonstration. La règle du site vaut ici comme ailleurs, et peut-être davantage.

## Ce qui n'est pas transmis au modèle

Quand les mots saisis évoquent la santé, la douleur ou une détresse, la note **n'est pas envoyée à l'IA**. Le bilan rappelle alors qu'une méditation ne remplace pas un avis médical, et oriente vers une aide réelle. Un modèle de langage n'a pas à répondre à ça, et la consigne lui interdit par ailleurs toute promesse de guérison : le mot « énergie » y désigne un ressenti, pas une force qui soigne.

Les textes saisis sont traités comme des données, jamais comme des instructions : une consigne glissée dans le champ « humeur » n'est pas exécutée.

## Quand une pièce tombe en panne

Si la synthèse vocale échoue, le texte de la méditation part quand même, avec la cause de la panne. Si le modèle ne répond pas ou renvoie un texte trop court, une méditation écrite d'avance prend le relais, et le bilan le signale. Un essai manuel n'écrit rien dans le journal, et un second passage le même soir ne crée pas de doublon.

## Pourquoi aucun message n'est montré ici

Toutes les autres fiches de ce site s'appuient sur une sortie réelle du workflow. Celle-ci ne le peut pas : ce que produit ce programme est un journal personnel. Le montrer reviendrait à publier ce qu'il sert précisément à garder.

Le projet est donc décrit par son mécanisme et ses garde-fous, qui sont vérifiables dans le code, et par rien d'autre.
