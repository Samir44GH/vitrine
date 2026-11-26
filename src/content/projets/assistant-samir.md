---
title: "Assistant Samir"
summary: "Un assistant Telegram qui lit mon système d'automatisations — et qui refuse de répondre à tout ce qu'il ne peut pas vérifier."
year: 2026
category: automatisation
status: en-ligne
stack: [n8n, Telegram, DeepSeek, Agent IA]
sigil: barres
featured: true
order: 1
---
Quand on fait tourner une vingtaine de workflows, on ne sait plus lequel a planté, ni ce qu'on avait prévu de corriger. Cet assistant répond à ces questions sur Telegram.

## Ce qu'il sait faire

Il tient le registre des corrections en attente et peut en clore une sur ordre. Il liste les pannes du jour avec, pour chacune, le nœud fautif et une cause probable. Il déroule le plan d'un workflow, étape par étape, y compris pour les plus gros — celui qui compte soixante-treize nœuds s'affiche en une poignée de branches lisibles. Il rend compte des signaux émis et de ce qu'ils ont donné.

## Ce qu'il refuse de faire

C'est la partie intéressante, et je ne l'avais pas prévue aussi nette en le construisant.

Chaque fois qu'on lui demande quelque chose qu'aucun de ses outils ne couvre, il le dit, nomme l'outil qui manque, et s'arrête là.

<figure class="recu breve">
<figcaption><b>Assistant Samir</b> <span>extraits, novembre 2026</span></figcaption>
<div class="recu-corps">

<dl class="echange">
<dt>Demande</dt>
<dd class="q"><p>Montre-moi le code d'un nœud dans le workflow crypto.</p></dd>
<dt class="echange-r">Réponse</dt>
<dd class="r"><p>Je n'ai pas encore d'outil pour lire le code d'un nœud dans n8n. Je peux seulement voir les erreurs, le registre, les signaux, la veille et les dépenses.</p></dd>
</dl>

<dl class="echange">
<dt>Demande</dt>
<dd class="q"><p>Préviens-moi à la prochaine vraie erreur d'un workflow.</p></dd>
<dt class="echange-r">Réponse</dt>
<dd class="r"><p>Je ne peux pas me réveiller tout seul pour te prévenir : je ne fonctionne qu'à la demande, sans système d'alerte automatique. Il faudra me relancer pour que je vérifie.</p></dd>
</dl>

</div>
</figure>

Un jour, je lui ai posé cinq questions de configuration à la suite, en exigeant un oui ou un non pour chacune. Il a répondu qu'aucun de ses outils ne permettait de les vérifier, a listé ce qui manquait pour chaque question, et a terminé par une phrase que je garde :

> Je ne vais pas inventer de réponses.

C'est le comportement exact que je cherchais. Un assistant qui aurait deviné cinq fois « oui » aurait paru plus utile pendant trente secondes, et m'aurait fait perdre une soirée à chercher une panne ailleurs.

## Il me contredit

Quand je lui demande de clore une correction qui n'existe pas sous ce nom, il ne fait pas semblant : il répond que rien n'a été fermé, explique pourquoi, et propose le nom exact qu'il a trouvé dans le registre. Quand je lui demande de supprimer des lignes, il rappelle que son seul outil d'écriture marque une tâche comme faite, et ne supprime rien.

## Faits, puis analyse

Ses réponses séparent deux choses, et le disent explicitement : d'abord les **faits** relevés par l'outil, ensuite son **analyse**. On sait donc toujours ce qui vient de la machine et ce qui vient de son interprétation.

Il applique cette prudence à ses propres résultats. Devant un taux de réussite parfait calculé sur une poignée de cas, il ne s'en félicite pas : il signale que l'échantillon est trop petit pour conclure, et que le calcul écarte certaines catégories. Un outil qui commente ses propres chiffres sans les flatter est un outil avec lequel on peut travailler.
