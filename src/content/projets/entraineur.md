---
title: "L'Entraîneur"
summary: "Chaque dimanche, une machine relit le travail d'une autre, cherche l'erreur qui se répète — et demande l'autorisation avant de corriger quoi que ce soit."
year: 2026
category: automatisation
status: en-ligne
stack: [n8n, DeepSeek, API n8n]
sigil: boucle
order: 11
---
Le bot d'analyse crypto produit des rapports. Certains se révèlent faux. La question naturelle est : *pourquoi*, et surtout, *est-ce toujours la même raison* ?

Chaque dimanche en fin d'après-midi, ce workflow relit les signaux arrivés à terme, recalcule lui-même qui avait raison à partir des prix réels, et cherche dans les rapports erronés une erreur de méthode qui revient. S'il en trouve une, il propose **une seule** modification du texte qui pilote l'autre machine.

## Il ne croit pas le journal sur parole

Le journal du bot contient déjà une colonne « résultat ». L'Entraîneur ne la lit pas : il recalcule tout à partir des prix relevés, puis **compte combien d'étiquettes changent** une fois recalculées, et l'affiche dans son bilan.

Deux règles de mesure, choisies parce que la version naïve ment :

Un altcoin est jugé **par rapport au Bitcoin**. Une hausse de 3 % pendant que le marché entier montait de 8 % n'est pas une réussite : c'est un retard. Sans cette correction, un bot aurait l'air brillant dans un marché haussier et nul dans l'autre, sans rien avoir appris.

Plusieurs signaux sur le même actif et dans le même sens en moins de vingt-quatre heures comptent pour **un seul**. Sinon un unique mouvement de marché, détecté quatre fois, pèserait quatre fois dans les statistiques.

## Il ne corrige rien tout seul

C'est le point central, et il est inscrit dans le code, pas dans une bonne intention.

L'Entraîneur lit le prompt de l'Agent 2 par l'interface de programmation de n8n, **en lecture seule**. Il ne peut pas l'écrire. Sa proposition part sur Telegram et attend un ✅ ou un ❌. Sans réponse sous vingt-quatre heures, elle est classée « sans réponse » et rien n'est modifié.

Une machine qui corrigerait une autre machine sans surveillance serait une très mauvaise idée. Elle dériverait sans que personne s'en aperçoive, et chaque dérive servirait de base à la suivante.

## Huit refus écrits dans le code

Avant même d'arriver sur Telegram, une proposition est rejetée si elle touche au bloc de mise en forme du rapport, si elle modifie les intitulés lus par d'autres programmes, si elle dépasse 450 caractères, si elle contient du Markdown, si elle vise une section non autorisée, si elle répète une règle déjà présente — et sur deux contrôles qui valent d'être détaillés.

Le « texte actuel » qu'elle prétend remplacer doit **exister mot pour mot** dans le prompt. Ça attrape le défaut typique d'un modèle de langage : citer de mémoire un passage qu'il croit avoir lu, et proposer de corriger une phrase qui n'a jamais existé.

Et ce texte ne doit s'y trouver qu'**une seule fois**. S'il apparaît deux fois, la proposition est ambiguë : personne ne sait laquelle des deux occurrences serait modifiée. Mieux vaut refuser que deviner.

## Un groupe témoin

Une cause ne compte que si elle apparaît dans au moins deux rapports faux. Mais le contrôle décisif vient après : le même trait est recherché dans les rapports **justes**. S'il y est aussi fréquent, ce n'est pas une cause d'erreur — c'est une habitude de l'agent, et la piste est abandonnée.

Sans cette étape, on trouve toujours quelque chose dans les échecs. C'est ce qui sépare une cause d'une coïncidence.

## Ce qu'il ne sait pas faire

Il ne voit pas les données que l'autre machine avait sous les yeux, seulement ce qu'elle en a écrit. Il cherche donc des erreurs visibles dans le raisonnement lui-même : une confiance élevée malgré un argument contraire sérieux, une conclusion sans cause identifiée là où l'abstention s'imposait.

Il ne mesure pas non plus si sa proposition améliore réellement le bot. Ça, c'est le travail d'un banc d'essai séparé, où la proposition retenue devient une version B comparée à l'existante.

## Le silence est le cas normal

En dessous de deux signaux faux sur vingt-huit jours, aucun appel au modèle n'est déclenché : un message court suffit. Beaucoup de dimanches passeront sans aucune proposition, et c'est le comportement attendu.

Un outil de ce genre qui trouverait quelque chose à corriger chaque semaine ne serait pas vigilant : il serait bavard.

## Un message réel

Voici, sans retouche, le bilan reçu le vendredi 27 novembre 2026, lancé à la main hors de son dimanche.

<figure class="recu">
<figcaption><b>L'Entraîneur</b> <span>reçu le vendredi 27 novembre 2026, sur Telegram</span></figcaption>
<div class="recu-corps">
<h4><span class="mk">🏋️</span> Bilan de la semaine</h4>
<p>Période : signaux clos sur 28 jours · règle corrigée du BTC (±2 %)<br />
Signaux : <b>16</b> sur 12 jours distincts · ✅ 12 · ❌ 3 · ➖ 1 · réussite 80 %<br />
Par confiance : moyenne 8✅/1❌ · faible 3✅/2❌ · forte 1✅/0❌</p>

<p><b>Ce que j'ai vu dans les rapports faux</b></p>
<ul>
<li>FAUX 2 et FAUX 3 : type « Marché entier » avec scénario BAISSIER directionnel.</li>
<li>JUSTE 3 : type « Marché entier amplifié » avec bêta 2,12, directionnel justifié, donc le trait n'est pas écarté.</li>
<li>FAUX 3 : la ligne Contre contient des arguments baissiers, pas de contre-arguments.</li>
</ul>

<p><b>Cause qui se répète</b> : scénario directionnel BAISSIER émis alors que la nature du mouvement est « Marché entier » sans bêta marquée, dans FAUX 2 et FAUX 3.</p>

<p><b>Proposition (ajout dans MÉTHODE)</b><br />
<code>Si la nature du mouvement est « Marché entier » et que la bêta fournie est absente ou inférieure à 1,5, le scénario doit être NEUTRE ou ABSTENTION, jamais BAISSIER ni HAUSSIER.</code></p>

<p><b>Pourquoi</b> : empêcher un pari directionnel quand l'actif suit le marché sans amplification marquée.<br />
<b>Risque</b> : avec 3 faux seulement, hypothèse fragile ; la règle pourrait neutraliser des signaux baissiers justes sur marché entier.<br />
<b>À surveiller dans le banc</b> : les prochains rapports de type Marché entier sans bêta ≥ 1,5 devraient afficher NEUTRE ou ABSTENTION ; trop d'abstentions signalerait un excès de prudence.</p>

<p class="recu-avert">Rien n'est modifié dans ton bot. Réponds à la question suivante pour garder ou jeter cette idée.</p>

<h4><span class="mk">✅</span> Après validation</h4>
<p>Proposition gardée. Pour la tester : colle le texte proposé dans la version B du nœud « Prompts à comparer » du banc d'essai, puis lance un rejeu. <b>Elle n'entre dans le bot qu'après un résultat favorable.</b></p>
</div>
</figure>

Trois choses se voient dans ce message.

**Le groupe témoin a fonctionné.** Le deuxième constat ne parle pas d'un rapport faux mais d'un rapport **juste** : le même trait y apparaît, mais avec une bêta de 2,12 qui justifiait le pari directionnel. La piste n'est pas abandonnée pour autant — elle est restreinte aux cas sans amplification. C'est exactement ce que le détour par les réussites sert à produire.

**La machine signale sa propre fragilité.** « Avec 3 faux seulement, hypothèse fragile. » Personne ne lui a demandé cette phrase pour ce cas précis : la consigne lui impose de remplir un champ « risque », et elle y écrit ce qui affaiblit sa propre proposition.

**Et le dernier mot n'est pas le sien.** Proposition gardée, mais gardée pour être testée — pas appliquée. Entre l'idée et la production, il reste un banc d'essai et un résultat à obtenir.
