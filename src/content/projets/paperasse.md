---
title: "Paperasse"
summary: "Un seul bot Telegram pour six corvées du quotidien : papiers, échéances, dépenses, prix, repas, briefing du matin."
year: 2026
category: automatisation
status: en-cours
stack: [n8n, Telegram, DeepSeek, Data Tables, Open-Meteo]
sigil: chevrons
featured: true
order: 5
---
Les courriers s'empilent, les échéances passent, les abonnements se multiplient. Paperasse est un bot à qui on envoie une photo, un PDF ou une phrase, et qui s'occupe du reste.

## Six fonctions, un seul bot

- **Papiers** : la photo d'une facture ou d'un contrat revient en résumé, avec le montant, ce qu'il faut faire, et un rappel créé s'il y a une date à ne pas manquer.
- **Échéances et abonnements** : « Contrôle technique avant le 14 mars », « Netflix 13,49 € le 5 du mois ». Une liste, un total, des rappels.
- **Dépenses** : la photo d'un ticket de caisse range le ticket *et* note la dépense dans sa catégorie. Bilan le 1er de chaque mois.
- **Veilleur de prix** : une adresse de fiche produit, un seuil, et une alerte quand le prix passe dessous.
- **Repas** : le profil du foyer et un budget donnent, chaque dimanche, sept menus et la liste de courses par rayon.
- **Briefing du matin** : météo, échéances de la semaine, anniversaires et quelques titres.

## Les règles que je me suis données

**L'IA lit ou crée, le code mesure.** Le modèle n'intervient qu'à deux endroits : lire un document, composer des menus. Les rappels, les totaux, les comparaisons de prix et la météo se font sans IA — c'est gratuit, et ça ne peut rien inventer.

**Le code contrôle ce que l'IA a lu.** Une date impossible ou déjà passée est refusée. Une dépense datée dans le futur est ramenée à aujourd'hui et signalée. Un montant introuvable dans le texte d'origine est marqué comme douteux.

**Un prix est lu, jamais deviné.** Le code ne cherche que dans les données structurées que la page publie. Un site qui n'en publie pas est refusé dès l'ajout, avec un message honnête. Je préfère « je ne peux pas » à un faux prix.

**Pas de prix dans les menus.** Un total de courses calculé par une IA serait inventé. Le budget sert de consigne, pas de calcul.

## Construction

Cinq workflows : un bot qui aiguille vers douze branches, et quatre envois programmés. Six tables de données, une ligne par propriétaire, pour que des proches puissent l'utiliser sans voir les papiers des autres.

Avant la mise en service : 76 tests sur le code des nœuds, 56 scénarios joués de bout en bout sur les fichiers eux-mêmes, et 23 contrôles sur la seule lecture des prix.
