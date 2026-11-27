// Fabrique l'image de partage (public/og.png), celle qui s'affiche quand on
// envoie le lien du site sur une messagerie ou un réseau social.
//
// Elle est refaite à chaque construction du site, pour une seule raison : le
// nombre de projets y figure, et il doit suivre le contenu sans que personne
// n'y pense. Ajouter ou retirer une fiche dans src/content/projets/ suffit.
//
// Le rendu passe par resvg, qui lit des polices TTF et non des WOFF2 : les
// fichiers de scripts/polices/ sont les mêmes polices que celles du site,
// simplement converties. Ils ne sont jamais envoyés au navigateur.
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const ici = dirname(fileURLToPath(import.meta.url));
const racine = join(ici, '..');
const police = (f) => join(ici, 'polices', f);

const n = readdirSync(join(racine, 'src/content/projets')).filter((f) => f.endsWith('.md')).length;
const compte = `${n} projet${n > 1 ? 's' : ''}, avec leurs garde-fous`;

const ENCRE = '#16130e';
const PAPIER = '#efe9db';
const DOUX = '#6a6153';

// Les carrés emboîtés du site, dessinés dans leur repère d'origine (200 × 200)
// puis agrandis — le trait s'épaissit avec eux, comme dans le navigateur.
const marque = `
  <g transform="translate(750 15) scale(3)" opacity="0.1">
    <g fill="none" stroke="${ENCRE}" stroke-width="1.6">
      <rect x="40" y="40" width="120" height="120" transform="rotate(13 100 100)"/>
      <rect x="63" y="63" width="74" height="74" transform="rotate(-8 100 100)"/>
    </g>
    <rect x="87" y="87" width="26" height="26" transform="rotate(13 100 100)" fill="${ENCRE}" opacity="0.5"/>
  </g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPIER}"/>
  ${marque}
  <text x="72" y="128" font-family="Great Vibes" font-size="62" fill="${ENCRE}">Samir</text>
  <text font-family="Source Serif 4" font-size="60" fill="${ENCRE}">
    <tspan x="72" y="300">Mes machines ont le</tspan>
    <tspan x="72" y="374">droit de se tromper.</tspan>
    <tspan x="72" y="448">Pas de <tspan font-style="italic">me le cacher</tspan>.</tspan>
  </text>
  <text x="72" y="560" font-family="Source Serif 4" font-size="23" fill="${ENCRE}">Workflows n8n reliés à des modèles d'IA<tspan fill="${DOUX}">&#160;&#160;·&#160;&#160;${compte}</tspan></text>
</svg>`;

const rendu = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: {
    fontFiles: [police('titre.ttf'), police('titre-italique.ttf'), police('signature.ttf')],
    loadSystemFonts: false,
    defaultFontFamily: 'Source Serif 4',
  },
});

mkdirSync(join(racine, 'public'), { recursive: true });
writeFileSync(join(racine, 'public/og.png'), rendu.render().asPng());
console.log(`og.png — ${n} projets`);
