// Textes et réglages généraux : tout se modifie ici.
export const site = {
  name: 'Samir',
  short: 'Samir',
  lang: 'fr',
  description: "Automatisations n8n assistées par IA, bots et sites web : les projets de Samir.",
  github: 'https://github.com/Samir44GH',

  // Moyen de te joindre. Remplace par 'mailto:ton.adresse@exemple.fr' quand tu veux.
  contact: 'https://github.com/Samir44GH',
  contactLabel: 'Me contacter',

  hero: {
    kicker: 'Automatisation & IA — Pornichet',
    title: 'Des machines qui <em>travaillent</em> à ma place.',
    lead: "Workflows n8n reliés à des modèles d'IA, avec les garde-fous qui rendent leurs résultats vérifiables.",
  },

  about: {
    title: 'À propos',
    paragraphs: [
      "J'apprends et je construis en même temps : chaque projet ci-dessus est un chantier réel, mené de l'idée jusqu'à la mise en service.",
      "Mon terrain aujourd'hui, ce sont les workflows automatisés reliés à des modèles d'IA — et surtout les garde-fous qui empêchent une machine bavarde de raconter n'importe quoi.",
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
