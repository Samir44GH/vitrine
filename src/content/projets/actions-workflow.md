---
title: "Actions Workflow"
summary: "Un outil personnel de surveillance d'actions qui note la force de ses propres preuves, et signe chaque alerte d'une piste d'audit."
year: 2026
category: automatisation
status: en-ligne
stack: [n8n, Données de marché, DeepSeek, Telegram]
sigil: trame
featured: true
order: 3
---
Le pendant du bot crypto, pour les actions cotées. Même principe, **même usage strictement personnel** : il surveille une liste de titres, repère les mouvements anormaux, et envoie une fiche d'analyse sur Telegram. Il ne passe aucun ordre et n'est proposé à personne.

Chaque alerte passe par la même grille : valorisation, croissance, contexte macro, indicateurs quantitatifs, comparaison à l'indice, adéquation au profil, score de risque, conformité réglementaire.

## Trois choses qu'il fait et que les autres ne font pas

**Il note la force de ses propres preuves.** En tête de chaque alerte, à côté du verdict, figure un niveau de preuve. « À surveiller — preuve faible » n'est pas la même information que le même verdict appuyé sur des données complètes. L'outil dit donc deux choses à la fois : ce qu'il pense, et à quel point il est fondé à le penser.

**Il rend à la main ce qu'il ne sait pas faire.** Une rubrique « à vérifier à la main » liste ce qu'il laisse à l'humain : l'impact d'un rachat, l'état de la dette après une acquisition. Plutôt que de produire une estimation faible, il désigne le travail qui reste.

**Il signe ce qu'il envoie.** Chaque alerte porte un numéro de piste d'audit et une empreinte. Deux analyses contradictoires sur le même titre peuvent donc être retrouvées et comparées. C'est ce qui distingue un outil d'un oracle : on peut revenir sur ce qu'il a dit.

## Une alerte réelle

Voici, sans retouche, une alerte reçue le 26 novembre 2026.

<figure class="recu">
<figcaption><b>Actions Workflow v11 Pro · alerte de surveillance</b> <span>reçue le 26 novembre 2026, sur Telegram — outil personnel</span></figcaption>
<div class="recu-corps">

<div class="recu-actif">
<div class="recu-tick"><b>SAN.PA — Sanofi — 98,16 EUR</b> <span>jour +15,13 % · écart +15,88 pts</span> <span class="recu-verdict">À surveiller · preuve faible</span></div>
<dl class="recu-dl">
<dt>Pourquoi</dt><dd>Précédent « à surveiller » maintenu ; fondamentaux toujours indisponibles ; mode test, choc de prix, gap, volume, plus haut 52 semaines, mouvement spécifique au titre — cause probable : rachat d'Insmed, actualité non fiable</dd>
<dt>Valeur</dt><dd>fondamentaux indisponibles, pas de marge de sécurité</dd>
<dt>Croissance</dt><dd>non disponible</dd>
<dt>Macro</dt><dd>stress, VIX 28,29, beta 0,41, corrélation 0,23</dd>
<dt>Quantitatif</dt><dd>volatilité 25,28 %, RSI 77, bruit probable</dd>
<dt>Indice</dt><dd>surperforme le CAC 40 sur 1 an, +16,79 pts</dd>
<dt>Adéquation</dt><dd>non évaluée, profil non renseigné</dd>
<dt>Score de risque</dt><dd>28 / 100, faible — composante macro 53</dd>
<dt>Conformité</dt><dd>réserves : pays du siège non vérifié</dd>
<dt>Pour</dt><dd>surperformance durable face à l'indice ; beta faible à 0,41</dd>
<dt>Contre</dt><dd>fondamentaux indisponibles ; RSI 77, zone de surachat</dd>
<dt>Changerait d'avis</dt><dd>une clôture sous la moyenne 200 jours, à 77,2, invalide la thèse</dd>
<dt>Risque</dt><dd>plafond 5 % ; stop sur clôture sous 77,2</dd>
<dt>À vérifier</dt><dd>l'impact du rachat d'Insmed ; la dette après acquisition</dd>
<dt>Manquant</dt><dd>source de données indisponible, fondamentaux indisponibles, pays du siège non vérifié, actualité non fiable</dd>
</dl>
</div>

<p class="recu-coulisses">🔏 Piste d'audit n° 36 · 170c096b314f</p>

<p class="recu-avert">Analyse automatisée à titre informatif. Ce n'est pas un conseil en investissement.</p>
</div>
</figure>

Sur cette alerte, l'outil énumère **quatre données manquantes** et termine malgré tout par un verdict prudent. C'est exactement le comportement recherché : il n'invente pas les fondamentaux absents, il ne tait pas leur absence, et il ne laisse pas un silence passer pour une approbation.

Cette alerte est un instantané daté : le cours qu'elle cite était celui du 26 novembre 2026. Elle est ici pour montrer la forme du raisonnement, pas son contenu.
