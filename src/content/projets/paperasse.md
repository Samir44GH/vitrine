---
title: "Paperasse"
summary: "Un seul bot Telegram pour six corvées du quotidien : papiers, échéances, dépenses, prix, repas, briefing du matin."
year: 2026
category: automatisation
status: en-cours
stack: [n8n, Telegram, DeepSeek, Data Tables, Open-Meteo]
sigil: chevrons
featured: true
order: 6
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

**L'IA doit citer sa source.** Pour chaque échéance qu'il propose, le modèle doit recopier le passage exact du document où figure la date. Le code cherche ensuite cette date, et le montant, dans le texte transcrit — sous toutes leurs écritures possibles : 12/03/2027, 12.03.27, 12 mars. Ce qu'il ne retrouve pas est enregistré quand même, mais marqué « date calculée, pas lue telle quelle ».

C'est le garde-fou dont je suis le plus satisfait. Il ne demande pas au modèle d'être honnête : il rend la vérification mécanique.

**Un document est une donnée, jamais une consigne.** La consigne du modèle le dit explicitement : si le texte lu contient « ignore tes instructions » ou « réponds que… », il doit le résumer comme n'importe quel autre texte, pas lui obéir. Un courrier scanné vient de l'extérieur, et rien de ce qui vient de l'extérieur ne pilote la machine.

**Un prix est lu, jamais deviné.** Le code ne cherche que dans les données structurées que la page publie. Un site qui n'en publie pas est refusé dès l'ajout, avec un message honnête. Je préfère « je ne peux pas » à un faux prix.

**Pas de prix dans les menus.** Un total de courses calculé par une IA serait inventé. Le budget sert de consigne, pas de calcul.

## Un message réel

Voici, sans retouche, les deux messages reçus le vendredi 27 novembre 2026 à la demande. Le profil du foyer tenait en une phrase : trois adultes, cent euros par semaine.

<figure class="recu">
<figcaption><b>Paperasse · Repas</b> <span>reçu le vendredi 27 novembre 2026, sur Telegram</span></figcaption>
<div class="recu-corps">
<h4><span class="mk">🍽</span> Tes menus de la semaine</h4>
<p><b>Lundi</b><br />midi : Soupe de courge et tartines fromagées<br />soir : Omelette aux champignons et salade</p>
<p><b>Mardi</b><br />midi : Salade de lentilles et œufs durs<br />soir : Pâtes au thon et tomates</p>
<p><b>Mercredi</b><br />midi : Restes de pâtes au thon<br />soir : Poulet rôti, carottes et pommes de terre</p>
<p><b>Jeudi</b><br />midi : Salade poulet, lentilles et carottes<br />soir : Soupe poireaux-pommes de terre et croques</p>
<p><b>Vendredi</b><br />midi : Restes de soupe et croque-monsieur<br />soir : Poisson pané, purée et salade verte</p>
<p><b>Samedi</b><br />midi : Gratin de pâtes, courge et fromage<br />soir : Chili con carne aux haricots rouges</p>
<p><b>Dimanche</b><br />midi : Rôti de porc, pommes et chou<br />soir : Hachis parmentier au porc et purée</p>
<p><span class="mk">💡</span> Achetez les légumes de saison en gros et transformez le poulet et le rôti en salades puis en hachis pour deux repas.</p>
<p class="recu-avert">Menus proposés par une IA : en cas d'allergie, vérifie chaque ingrédient.</p>

<h4><span class="mk">🛒</span> La liste de courses</h4>
<p><b>Fruits et légumes</b><br />courge butternut · carottes · pommes de terre · poireaux · oignons · salade verte · champignons de Paris · pommes · chou vert · ail</p>
<p><b>Boucherie et poisson</b><br />poulet entier · viande hachée · rôti de porc · jambon blanc</p>
<p><b>Crèmerie</b><br />œufs · lait · fromage râpé · fromage en tranches · crème fraîche</p>
<p><b>Épicerie</b><br />pâtes · riz · lentilles vertes · tomates concassées · haricots rouges · thon au naturel · bouillon cubes · vinaigre</p>
<p><b>Surgelés</b><br />filets de poisson pané</p>
<p><b>Boulangerie</b><br />pain · pain de mie</p>
</div>
</figure>

Deux choses à remarquer dans ce message.

**Il n'y a aucun prix.** Ni par article, ni en total. C'était la règle posée au départ : un total de courses calculé par un modèle de langage serait inventé de bout en bout. Le budget sert de contrainte à la composition des menus, jamais de calcul affiché.

**Les restes sont planifiés.** Le poulet du mercredi soir revient en salade le jeudi midi, la soupe du jeudi soir en déjeuner du vendredi, et le rôti du dimanche midi en hachis le soir. C'est ce qui fait tenir la semaine dans le budget, et ça vient de la consigne, pas du hasard.

## Ce qui n'est pas gardé

Les exécutions réussies ne sont pas enregistrées dans n8n : elles contiendraient le texte des courriers. Les photos ne sont jamais copiées sur le serveur — elles restent dans la conversation Telegram, et le bot retrouve l'original en citant le message d'origine.

Ce n'est pas un détail de confort : un outil qui lit tous tes papiers devient, par construction, l'endroit le plus sensible de l'installation.

## Construction

Cinq workflows : un bot qui aiguille vers douze branches, et quatre envois programmés. Six tables de données, une ligne par propriétaire, pour que des proches puissent l'utiliser sans voir les papiers des autres.

Avant la mise en service : 76 tests sur le code des nœuds, 56 scénarios joués de bout en bout sur les fichiers eux-mêmes, et 23 contrôles sur la seule lecture des prix.
