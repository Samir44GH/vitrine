---
title: "Analyse crypto à agents IA"
summary: "Un outil personnel de surveillance du marché : plusieurs agents IA analysent, et un contrôle traque les chiffres inventés."
year: 2026
category: automatisation
status: en-ligne
stack: [n8n, Binance, DefiLlama, DeepSeek, Claude, Telegram]
sigil: cercles
featured: true
order: 2
---
Un outil que j'ai construit **pour mon usage personnel**, pour suivre le marché des cryptomonnaies sans y passer mes journées. Ce n'est pas un service, il n'est proposé à personne, et il ne passe aucun ordre : il lit des données, les confronte, et m'envoie une synthèse sur Telegram.

## Les sources

Prix et carnets d'ordres de Binance, indicateurs de liquidité de DefiLlama, taux de financement des marchés dérivés, indice de sentiment du marché.

## Le « contrôle des chiffres »

Les modèles d'IA ont tendance à inventer des chiffres qui sonnent juste. J'ai donc ajouté une étape qui **compare chaque chiffre cité par l'agent aux données réelles** et signale ceux qui n'existent dans aucune source.

## Ce que l'outil s'interdit

C'est le point sur lequel j'ai le plus travaillé, et celui dont je suis le plus satisfait.

- **Il ne recommande pas d'acheter.** Ses verdicts sont des abstentions, des positions neutres ou des mises en garde. Sur l'alerte reproduite ci-dessous : deux actifs à éviter, un à surveiller, aucun à acheter.
- **Il dit ce qui lui manque.** Chaque fiche se termine par une ligne « données manquantes » — la cause d'un mouvement qu'il n'a pas identifiée, un profil client qu'il n'a pas.
- **Il refuse de juger ce qu'il ne peut pas juger.** Sans juridiction renseignée, il écrit que l'évaluation réglementaire européenne est impossible, plutôt que d'en bâcler une.
- **Il dit ce qui le ferait mentir.** Chaque analyse porte un seuil d'invalidation : le prix à partir duquel son scénario est démenti. Comme le pari du soir de mon autre workflow, c'est une façon de rendre une machine réfutable.

## Une alerte réelle

Voici, sans retouche, une alerte de surveillance reçue le 26 novembre 2026.

<figure class="recu">
<figcaption><b>Crypto Workflow v5 · alerte de surveillance</b> <span>reçue le 26 novembre 2026, sur Telegram — outil personnel</span></figcaption>
<div class="recu-corps">

<div class="recu-actif">
<div class="recu-tick"><b>MANTRAUSDT — 0,00282</b> <span>24 h +31,16 % · 1 h +1,81 % · 7 j +31,16 %</span> <span class="recu-verdict">Abstention · à éviter</span></div>
<dl class="recu-dl">
<dt>Type</dt><dd>Illiquide ou suspect — vol. 21,2 M$, carnet ±1 % 0,01 M$, capi 0,019 Md$</dd>
<dt>Historique</dt><dd>z-score 2,86, volatilité annualisée 352 %, perte maximale sur 1 an −93,1 %</dd>
<dt>Dérivés</dt><dd>funding −0,57 % (−620 % annualisé), positions ouvertes +214 %, shorts en surchauffe</dd>
<dt>Macro</dt><dd>risk-off, Fear &amp; Greed 11, stablecoins −5,7 % sur 30 j ; cause non identifiée, titres évoquant un exploit Keplr et un délistage</dd>
<dt>Fondamentaux</dt><dd>Mcap/FDV 0,818, dilution faible, TVL 0,4 M$ −21,6 % sur 7 j, prix et TVL divergents</dd>
<dt>Pour</dt><dd>squeeze des shorts possible vu le funding ; pression acheteuse au carnet 0,72</dd>
<dt>Contre</dt><dd>micro-capitalisation illiquide ; exploit de sécurité et délistage selon les titres ; TVL en baisse</dd>
<dt>Invalidation</dt><dd>une clôture sous 0,00164 ou au-dessus 0,00372 trancherait</dd>
<dt>Risque</dt><dd>aucune position</dd>
<dt>Manquant</dt><dd>la cause du choc, le profil client</dd>
</dl>
</div>

<div class="recu-actif">
<div class="recu-tick"><b>MMTUSDT — 0,2372</b> <span>24 h +6,13 % · 1 h −1,37 % · 7 j −11,43 %</span> <span class="recu-verdict">Abstention · à éviter</span></div>
<dl class="recu-dl">
<dt>Type</dt><dd>Spécifique à l'actif — vol. 30,3 M$, carnet ±1 % 0,03 M$</dd>
<dt>Historique</dt><dd>12 h −21,51 %, volatilité annualisée 303,7 %, écart au VWAP −13,89 %</dd>
<dt>Dérivés</dt><dd>funding −0,022 % (−23,9 % annualisé), positions ouvertes +2,97 %, gros traders longs 2,33</dd>
<dt>Macro</dt><dd>risk-off, Fear &amp; Greed 11 ; cause non identifiée</dd>
<dt>Fondamentaux</dt><dd>Mcap/FDV 0,204, dilution très élevée, TVL 3,1 M$, revenus 0,25 %</dd>
<dt>Pour</dt><dd>carnet acheteur 0,65 ; +68,47 % sur 30 j</dd>
<dt>Contre</dt><dd>dilution très élevée, 20,4 % en circulation ; capitalisation 0,048 Md$, manipulation possible</dd>
<dt>Invalidation</dt><dd>une clôture sous 0,1861 ou au-dessus 0,3281 trancherait</dd>
<dt>Risque</dt><dd>aucune position</dd>
<dt>Manquant</dt><dd>la cause du mouvement, le profil client</dd>
</dl>
</div>

<div class="recu-actif">
<div class="recu-tick"><b>NEARUSDT — 3,056</b> <span>24 h +7,08 % · 1 h +0,23 % · 7 j −4,77 %</span> <span class="recu-verdict">Neutre · à surveiller</span></div>
<dl class="recu-dl">
<dt>Type</dt><dd>Spécifique à l'actif — vol. 86 M$, carnet ±1 % 1,8 M$</dd>
<dt>Historique</dt><dd>30 j −34,73 %, volatilité annualisée 107 %, écart à la moyenne 50 jours −25,34 %</dd>
<dt>Dérivés</dt><dd>funding −0,0044 % (−4,8 % annualisé), positions ouvertes +6,96 %</dd>
<dt>Macro</dt><dd>risk-off, Fear &amp; Greed 11 ; cause probable : rebond du secteur IA +6,2 %</dd>
<dt>Fondamentaux</dt><dd>Mcap/FDV 1, revenus 0,52 %, TVL 158,2 M$ −5,05 % sur 7 j</dd>
<dt>Scénario</dt><dd>rebond tenu au-dessus de 2,55 depuis le 22/11 — confiance faible</dd>
<dt>Pour</dt><dd>Mcap/FDV 1, donc pas de dilution à venir ; carnet acheteur 0,68</dd>
<dt>Contre</dt><dd>−48,17 % sous le plus haut d'un an ; revenus faibles</dd>
<dt>Invalidation</dt><dd>une clôture sous 2,55 invalide le rebond</dd>
<dt>Risque</dt><dd>ratio gain/risque 0,4, inférieur au seuil de 2 — donc insuffisant ; plafond 0,5 %</dd>
</dl>
</div>

<p class="recu-coulisses"><b>Synthèse :</b> rebond généralisé, 90 % des actifs en hausse et BTC +3 %, mais Fear &amp; Greed à 11 et stablecoins −5,7 % sur 30 jours. Deux micro-capitalisations à éviter, NEAR à surveiller.</p>

<p class="recu-avert">Analyse automatisée à titre informatif. Ce n'est pas un conseil en investissement.</p>
</div>
</figure>

Pour le troisième actif, l'outil calcule un ratio gain/risque de 0,4 alors que son propre seuil est à 2 — et il l'écrit. Autrement dit, il présente l'opération et explique dans la même ligne pourquoi elle ne vaut pas la peine d'être tentée.

## La question qui suit

Juste après l'analyse, un second message arrive.

<figure class="recu breve">
<figcaption><b>Crypto Workflow v5 · signal</b> <span>reçu dans la foulée</span></figcaption>
<div class="recu-corps">
<p><b>🔔 Signal MANTRA, MMT, NEAR</b><br />Analyse complète reçue juste au-dessus.</p>
<p class="recu-demande">Tu suis ce signal ?</p>
</div>
</figure>

Trois mots, et c'est pourtant la partie à laquelle je tiens le plus. Un outil d'analyse qui ne demande jamais ce qu'on a fait de ses conseils ne peut jamais être jugé : il produit des avis dans le vide, et seuls les bons restent en mémoire. En posant la question, celui-ci garde trace de l'écart entre ce qu'il a dit et ce que j'ai fait.

C'est la boucle qui manque à la plupart des outils de ce genre. Sans elle, une machine a toujours raison.

## Quand le marché décroche

Le bot ne surveille pas que les cryptomonnaies : il suit aussi les grands indices, parce que le marché crypto réagit à l'appétit général pour le risque. L'après-midi du 25 novembre 2026, il a envoyé quatre messages en une heure et demie, chacun notant l'intensité du mouvement sur dix.

<figure class="recu breve">
<figcaption><b>Mon robot crypto · alerte marché</b> <span>25 novembre 2026, quatre messages en une heure et demie</span></figcaption>
<div class="recu-corps">
<ol class="cascade">
<li><span class="cascade-h">16 h 06</span><span class="cascade-c">🔻 Nasdaq 100 (QQQ) — <b>8/10</b><br />618,31 $ · <i>indice −3,1 % sur la séance</i></span></li>
<li><span class="cascade-h">16 h 36</span><span class="cascade-c">🔻 Nasdaq 100 (QQQ) — <b>8/10</b><br />613,27 $ · <i>indice −3,9 % sur la séance</i></span></li>
<li><span class="cascade-h">17 h 06</span><span class="cascade-c">🔻 Nasdaq 100 (QQQ) — <b>9/10</b><br />610,67 $ · <i>indice −4,3 % sur la séance</i><br />🔻 Nvidia (NVDA) — <b>8/10</b><br />142,58 $ · <i>−8,2 % sur la séance</i></span></li>
<li><span class="cascade-h">17 h 36</span><span class="cascade-c">🔻 Nasdaq 100 (QQQ) — <b>9/10</b><br />610,33 $ · <i>indice −4,4 % sur la séance</i><br />🔻 Nvidia (NVDA) — <b>8/10</b><br />142,04 $ · <i>−8,6 % sur la séance</i></span></li>
</ol>
<p class="recu-avert">Mouvement mesuré, pas une recommandation. Prochain point dans le rapport du matin.</p>
</div>
</figure>

On voit la journée se dégrader en direct : la note passe de 8 à 9 sur dix, et Nvidia entre dans le message à 17 h 06. Pourtant le ton ne change pas d'un mot. « Mouvement mesuré, pas une recommandation » ferme chaque alerte, y compris la plus grave. Un outil qui s'excite en même temps que le marché serait inutile — c'est précisément dans ces moments qu'il faut une voix plate.

## Il se note lui-même

C'est la partie dont je suis le plus fier. Chaque nuit, le bot ressort ses anciennes annonces, mesure ce qui s'est réellement passé, et se donne une note.

<figure class="recu breve">
<figcaption><b>Autocontrôle du bot crypto</b> <span>26 novembre 2026, 1 h 20</span></figcaption>
<div class="recu-corps">
<p><b>✅ ENA, baissier</b> — confiance moyenne, annoncé le 18 novembre 2026.<br />−8,93 % en 7 jours, BTC −4,14 %, écart −4,79 pt → <b>juste</b></p>
<p class="recu-demande">Réussite à 7 jours : 83 %</p>
<p class="recu-coulisses">10 justes, 2 faux. Neutres exclus, répétitions regroupées, écart mesuré face au BTC.</p>
</div>
</figure>

Les trois précisions de la dernière ligne font tout le travail, et c'est pour elles que ce message mérite d'être lu en entier.

- **L'écart est mesuré face au BTC.** Annoncer une baisse dans un marché qui baisse entièrement n'a aucun mérite. Ici, l'annonce ne compte comme juste que si l'actif a fait pire que le marché.
- **Les neutres sont exclus.** Une machine qui comptabiliserait ses « je ne sais pas » comme des réussites gonflerait son score sans rien prédire.
- **Les répétitions sont regroupées.** Annoncer dix fois la même chose sur le même actif ne vaut qu'une annonce.

Chacune de ces trois règles **fait baisser** le score affiché. Ce sont des précautions contre soi-même, et c'est ce qui rend le chiffre crédible.

Une réserve honnête, dans le même esprit : 83 % porte sur douze annonces. C'est trop peu pour conclure quoi que ce soit. Le chiffre vaut surtout parce qu'il existe et qu'il est tenu.

Cette alerte est un instantané daté : les prix qu'elle contient étaient ceux du 26 novembre 2026 et n'ont plus aucune valeur aujourd'hui. Elle est ici pour montrer la forme du raisonnement, pas son contenu.
