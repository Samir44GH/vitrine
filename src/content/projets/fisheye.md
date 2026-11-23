---
title: "Fisheye"
summary: "Site de photographes en JavaScript pur, avec tri, visionneuse d'images et formulaire de contact accessible."
year: 2022
category: web
status: en-ligne
stack: [HTML, CSS, JavaScript, JSON]
sigil: losange
featured: true
order: 10
links:
  - { label: Voir le site, url: "https://samir44gh.github.io/SamirALLAJI_6-27012022/" }
  - { label: Code source, url: "https://github.com/Samir44GH/SamirALLAJI_6-27012022" }
---
Une plateforme où l'on découvre six photographes, puis leur galerie de photos et de vidéos. Le site est entièrement construit sans framework.

## Ce que fait le site

- La page d'accueil charge la liste des photographes depuis un fichier JSON et affiche une carte par profil.
- La page d'un photographe affiche ses médias, triables par **popularité**, **titre** ou **date**.
- Une **visionneuse** (lightbox) permet de parcourir les photos et les vidéos en plein écran.
- Un formulaire de contact s'ouvre dans une fenêtre modale.

## Points techniques

- Code organisé en « fabriques » JavaScript (image, vidéo, média) pour produire chaque élément de la galerie.
- Attention portée à l'accessibilité : langue de la page, étiquettes ARIA, navigation au clavier.
- Environ 1 000 lignes de JavaScript écrites à la main.

> Projet réalisé dans le cadre d'une formation de développeur web. Les photographes et leurs images viennent du jeu d'exercice.
