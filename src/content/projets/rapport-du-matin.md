---
title: "Rapport du matin"
summary: "Un point quotidien sur les marchés — qui se termine en donnant le bilan du bot lui-même, chiffré et recalculé chaque jour."
year: 2026
category: automatisation
status: en-ligne
stack: [n8n, Données de marché, Telegram]
sigil: aube
order: 4
---
Les autres outils réagissent à un événement : un décrochage, un mouvement anormal. Celui-ci parle tous les matins, qu'il se passe quelque chose ou non, et tient en une minute de lecture.

Il rassemble en un seul message ce qui était éparpillé : les cryptomonnaies, les indices, une sélection d'actions, l'indice de sentiment — et, à la fin, le bilan du bot lui-même.

## Il se termine par son propre bulletin

C'est le détail qui le distingue. La dernière ligne du rapport n'est pas une donnée de marché, c'est une note que l'outil se donne : combien de signaux il a émis, combien étaient des abstentions, et son taux de réussite mesuré face au BTC.

Autrement dit, chaque matin, avant même d'avoir lu le marché, je sais **à quel point croire ce que je vais lire**.

## Trois choix de présentation

**La mesure d'ampleur plutôt que le titre.** « 7 % des 15 actifs liquides en hausse » dit bien plus qu'un cours en vedette : un marché où une seule valeur monte n'est pas un marché qui monte.

**La position dans l'année plutôt que la variation du jour.** Chaque action est donnée avec son rang dans sa plage de 52 semaines. Une baisse de 5,9 % n'a pas le même sens selon qu'on se situe au quart ou aux neuf dixièmes de l'année écoulée.

**Les abstentions comptées comme un résultat.** Quatre signaux sur huit sans direction, et c'est écrit. Un outil qui ne mentionnerait que ses prises de position laisserait croire qu'il tranche plus souvent qu'il ne le fait.

## Un rapport réel

Voici un extrait de celui du mercredi 25 novembre 2026.

<figure class="recu">
<figcaption><b>Rapport du matin</b> <span>mercredi 25 novembre 2026, sur Telegram — extrait</span></figcaption>
<div class="recu-corps">

<h4>🧠 À retenir</h4>
<ul>
<li>BTC et ETH chutent respectivement de 8,8 % et 9 % sur 7 jours.</li>
<li>L'indice de peur et d'avidité tombe à 13, en zone de peur extrême.</li>
<li>Le Nasdaq 100 recule de 2 % sur la séance.</li>
<li>Signal directionnel du bot : ZEC baissier, confiance moyenne.</li>
</ul>

<h4>₿ Crypto</h4>
<dl class="recu-dl">
<dt>BTC</dt><dd>59 242 $ · 24 h −2 % · 7 j −8,8 %</dd>
<dt>ETH</dt><dd>1 661 $ · 24 h −2,3 % · 7 j −9 %</dd>
<dt>Peur et avidité</dt><dd>13 / 100 — peur extrême</dd>
<dt>Ampleur</dt><dd>7 % des 15 actifs liquides en hausse sur 24 h</dd>
</dl>

<h4>📈 Actions · dernière séance</h4>
<dl class="recu-dl">
<dt>Indices</dt><dd>S&amp;P 500 −0,5 % · Nasdaq 100 −2 % · Stoxx 50 0 % · France +0,9 %</dd>
<dt>Nvidia</dt><dd>155,38 $ · −5,9 % · à 26 % de sa plage 52 semaines</dd>
<dt>Eli Lilly</dt><dd>1 407,59 $ · +3,2 % · à 89 % de sa plage 52 semaines</dd>
<dt>LVMH</dt><dd>87,34 $ · +2,6 % · à 7 % de sa plage 52 semaines</dd>
</dl>

<h4>🤖 Le bot crypto sur 48 h</h4>
<p>8 signaux, dont <b>4 abstentions</b>. Directionnel : ZEC baissier, confiance moyenne.</p>
<p class="recu-demande">Réussite à 7 jours, écart au BTC : 80 % sur 10 signaux notés</p>

<p class="recu-avert">Information, pas un conseil d'investissement.</p>
</div>
</figure>

## Un chiffre qui bouge

Ce rapport du 25 novembre annonce 80 % sur dix signaux notés. L'autocontrôle de la nuit suivante, visible sur la fiche du bot crypto, affiche 83 % sur douze. Ce n'est pas une contradiction : deux signaux de plus sont arrivés à maturité entre-temps et ont été jugés.

Un taux qui se recalcule tous les jours est un taux vivant. C'est aussi ce qui le rend fragile, et c'est très bien ainsi : il peut baisser demain.

Les cours cités sont un instantané du 25 novembre 2026, sans valeur aujourd'hui. Ils sont ici pour montrer la forme du rapport, pas son contenu.
