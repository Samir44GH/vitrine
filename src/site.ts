// Textes et réglages généraux du site : tout ce qui se modifie à un seul endroit.
export const site = {
  name: 'Samir Allaji',
  short: 'Samir',
  lang: 'fr',
  description: 'Vitrine de projets : automatisations n8n assistées par IA et sites web conçus à la main.',
  github: 'https://github.com/Samir44GH',
  hero: {
    eyebrow: 'Portfolio · mis à jour en continu',
    title: 'Des automatisations qui <em>travaillent</em> à ma place.',
    lead: "Workflows n8n assistés par IA, bots, veilles et sites web : voici ce que j'ai construit, et comment.",
  },
  about: {
    title: 'À propos',
    paragraphs: [
      "J'apprends et je construis en même temps : chaque projet ci-dessus est un chantier réel, mené de l'idée jusqu'à la mise en service.",
      "Mon domaine de prédilection aujourd'hui : les workflows automatisés (n8n), reliés à des modèles d'IA, avec des garde-fous pour que les résultats restent vérifiables.",
    ],
    facts: [
      { value: 'n8n', label: "Outil d'automatisation principal" },
      { value: 'IA', label: 'Agents et modèles intégrés aux workflows' },
      { value: 'Web', label: 'HTML, CSS, JavaScript depuis 2019' },
    ],
  },
};

export const categories = {
  automatisation: 'Automatisation',
  web: 'Web',
  conception: 'Conception',
} as const;

export const statuses = {
  'en-ligne': 'En ligne',
  'en-cours': 'En cours',
  archive: 'Archive',
} as const;
