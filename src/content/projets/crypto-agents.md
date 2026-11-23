---
title: "Analyse crypto à agents IA"
summary: "Un workflow n8n où plusieurs agents IA analysent le marché des cryptomonnaies, avec un détecteur de chiffres inventés."
year: 2026
category: automatisation
status: en-ligne
stack: [n8n, Binance, DefiLlama, DeepSeek, Claude, Telegram]
sigil: cercles
featured: true
order: 2
---
Un robot d'analyse : il lit les données, les confronte entre elles et m'envoie sa synthèse sur Telegram.

## Les sources

Prix Binance, indicateurs DefiLlama, taux de financement (funding rates) des marchés dérivés.

## Le « contrôle des chiffres »

Les modèles d'IA ont tendance à inventer des chiffres qui sonnent juste. J'ai donc ajouté une étape qui **compare chaque chiffre cité par l'agent aux données réelles** et signale ceux qui n'existent pas dans les sources.

## Points techniques

- Plusieurs agents aux rôles distincts (dont DeepSeek et Claude).
- Alertes envoyées sur Telegram.
- Un banc d'essai pour comparer les agents entre eux.
