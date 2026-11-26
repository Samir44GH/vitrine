# Vitrine de projets

Site statique construit avec [Astro](https://astro.build), publié sur GitHub Pages.
**Ajouter un projet = déposer un fichier Markdown.**

## Ajouter un projet

1. Crée un fichier dans `src/content/projets/`, par exemple `mon-projet.md`. Le nom du fichier devient l'adresse : `/projets/mon-projet/`.
2. Copie cet en-tête et remplis-le :

```md
---
title: "Nom du projet"
summary: "Une ou deux phrases (220 caractères maximum)."
year: 2026
category: automatisation   # automatisation | web | conception
status: en-ligne           # en-ligne | en-cours | archive
stack: [n8n, Telegram]
sigil: cercles             # signe gravé : barres, cercles, rayons, vague,
                           #               trame, chevrons, losange, grille
order: 10                  # plus petit = placé plus haut
links:
  - { label: Voir le site, url: "https://exemple.fr" }
---
Ici, le texte de la fiche en Markdown : titres `##`, listes, citations.
```

3. Envoie sur la branche `main` : le site se met à jour tout seul en une minute environ.

> Mets toujours le titre et le résumé **entre guillemets** : un deux-points sans guillemets fait échouer la compilation.

Un en-tête incorrect (catégorie inconnue, année manquante…) est signalé à la compilation avec le nom du fichier fautif.

## Modifier les textes généraux

Tout est dans `src/site.ts` : nom, phrase d'accroche, « À propos », liens. Pour une nouvelle catégorie, ajoute-la aussi dans `src/content.config.ts`.

## Travailler en local

```bash
npm install
npm run dev        # http://localhost:4321/vitrine/
npm run build      # produit le dossier dist/
```

## Publier sur GitHub Pages (une seule fois)

1. Crée un dépôt, par exemple `vitrine`, et envoie-y ce dossier.
2. Dans **Settings → Pages**, choisis la source **GitHub Actions**.
3. Chaque envoi sur `main` publie le site à `https://<ton-compte>.github.io/vitrine/`.

### Adresse courte (`samir44gh.github.io`)

Nomme le dépôt `<ton-compte>.github.io` et remplace dans `.github/workflows/deploy.yml` la ligne `BASE_PATH` par `BASE_PATH: /`. Pour le développement local, lance `BASE_PATH=/ npm run dev`.

### Nom de domaine personnel

Mets le domaine dans `SITE_URL`, `BASE_PATH: /`, et ajoute un fichier `public/CNAME` contenant le domaine.

## La direction visuelle

« Encre » : une seule matière, deux encres. En thème clair, encre noire sur papier crème ; en thème sombre, encre crème sur plaque noire. Le grain est une texture de papier en clair, un grain argentique en sombre. Tout est monochrome : ce sont les signes gravés qui portent l'œil.

### Montrer la sortie d'un workflow

Un workflow ne se voit pas. Le bloc `.recu` compose son **vrai message** dans la matière du site, plutôt que d'en coller une capture d'écran de Telegram — qui jurerait avec le monochrome.

À placer directement dans le Markdown d'une fiche :

```html
<figure class="recu">
<figcaption><b>Nom du workflow</b> <span>reçu le ..., sur Telegram</span></figcaption>
<div class="recu-corps">
  <h4><span class="mk">🎯</span> Un titre de section</h4>
  <p>Le texte du message.</p>
  <p class="recu-pari">Une prédiction.<em>Le critère qui la tranchera.</em></p>
  <p class="recu-coulisses">Coulisses : ce que la machine a lu.</p>
</div>
</figure>
```

Classes disponibles : `recu-src` (mention de source, en petit), `recu-pari` (filet à gauche), `recu-q` (question finale, en sérif), `recu-coulisses` (pied, séparé par un filet), `recu-avert` (avertissement, en italique).

Pour un message qui répète la même grille sur plusieurs objets — une alerte par actif, par exemple — enveloppe chacun dans `recu-actif`, avec `recu-tick` pour sa ligne de titre, `recu-verdict` pour sa pastille et `recu-dl` pour la liste `dt` / `dd` des critères. Voir `crypto-agents.md`.

Le contenu s'écrit en HTML, pas en Markdown.

**Reproduire le message sans le retoucher** : c'est sa valeur de preuve. Un exemple complet se trouve dans `src/content/projets/souffle-du-jour.md`.

### Les matières

Deux textures dans `public/tex/`, en deux versions chacune (claire et sombre) :

| Fichier | Rôle |
|---|---|
| `papier.webp` · `papier-sombre.webp` | La matière de toute la page, en mosaïque de 320 px |
| `encre.webp` · `encre-sombre.webp` | Une passe d'encre sur l'ouverture seulement, qui s'efface vers le bas |

Pour en changer : repasse ton image par `scripts/prep_texture.py` (passe-haut, amplitude douce, raccords fondus), sinon elle assombrira la page et sa mosaïque se verra. Le réglage se fait par les variables `--tex-*` en haut de `global.css`.

### Les étiquettes

`public/fonts/etiquettes-cormorant-sc.woff2` est **Cormorant SC Medium** (9 Ko), utilisée pour les étiquettes qui encadrent la page : navigation, sur-titre, retour, titres de colonne.

Ce sont de **vraies petites capitales** : leur texte s'écrit normalement, en minuscules, et c'est la police qui les dessine. Ne remets donc jamais `text-transform: uppercase` dessus, cela détruirait l'effet.

Le Regular de cette famille casse en 11 px sur fond sombre ; d'où le Medium. Les étiquettes de données — index `01 / 09`, piles techniques, filtres — restent en Inter, en capitales forcées : elles sont fonctionnelles, pas ornementales, et ce contraste entre sérif et sans-sérif est ce qui tient la direction.

### La signature

Deux écritures manuscrites sont installées dans `public/fonts/`, sous-ensemblées aux caractères latins et aux accents français. Licences SIL OFL jointes. Les familles CSS sont renommées, s'agissant de versions modifiées.

| Fichier | Famille CSS | Poids |
|---|---|---|
| `signature-great-vibes.woff2` | `Signature Great Vibes` | 27 Ko — **en service** |
| `signature-alex-brush.woff2` | `Signature Alex Brush` | 21 Ko |

Le navigateur ne télécharge que celle qui sert. Pour changer de main, une seule ligne en haut de `global.css` :

```css
--font-signature: 'Signature Alex Brush';
```

Elle sert à deux endroits : le logotype en haut à gauche (`--font-brand`) et la signature au bas du « À propos » (`--font-signature`). Les deux sont liés par défaut ; pour les séparer, donne une autre valeur à `--font-brand`.

Ailleurs, elle n'apparaît pas : une écriture manuscrite utilisée plus d'une fois cesse d'être une signature. Le nom signé se change dans `src/site.ts` (`signature`).

Les signes vivent dans `src/components/Sigil.astro`. Pour en ajouter un, ajoute son dessin SVG dans ce fichier et son nom dans `src/content.config.ts`.

## Ce qui est inclus

- Thème clair / sombre (suit le système, mémorisé au choix de l'utilisateur)
- Transitions de page natives, animations au défilement, désactivées si « réduire les animations » est actif
- Site adapté au téléphone, navigation au clavier, lien d'évitement, contrastes soignés
- Filtre par catégorie (les projets restent tous visibles sans JavaScript)
- Aucun service externe : polices et styles sont embarqués
