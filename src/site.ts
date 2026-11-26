// Textes et réglages généraux : tout se modifie ici.
export const site = {
  name: 'Samir',
  short: 'Samir',
  lang: 'fr',
  description: "Automatisations n8n assistées par IA, bots et sites web : les projets de Samir.",
  github: 'https://github.com/Samir44GH',

  hero: {
    kicker: 'Automatisation & IA — Pornichet',
    title: 'Des machines qui <em>travaillent</em> à ma place.',
    lead: "Workflows n8n reliés à des modèles d'IA, avec les garde-fous qui rendent leurs résultats vérifiables.",
  },

  // Nom tracé à la main au bas du « À propos ».
  signature: 'Samir',

  // La section qui énonce le fil commun, entre l'accroche et les projets.
  these: {
    title: 'Une machine doit pouvoir avoir tort',
    lead: "Un modèle de langage produit des phrases plausibles : c'est son métier, et c'est aussi son danger. Il énonce un chiffre faux avec le même aplomb qu'un chiffre juste. La plupart du travail ci-dessous ne sert pas à rendre ces machines plus intelligentes, mais à les rendre réfutables.",
    preuves: [
      {
        texte: "Chaque soir, une prédiction datée — accompagnée du critère exact que le code viendra compter quelques jours plus tard.",
        projet: 'souffle-du-jour',
        nom: 'Le Souffle du jour',
      },
      {
        texte: "Chaque nuit, le bot ressort ses annonces passées et se note. Ses trois règles de comptage font toutes baisser son propre score.",
        projet: 'crypto-agents',
        nom: 'Analyse crypto à agents IA',
      },
      {
        texte: "Le verdict est donné avec la force de la preuve qui le soutient, et une rubrique désigne ce qui reste à vérifier à la main.",
        projet: 'actions-workflow',
        nom: 'Actions Workflow',
      },
      {
        texte: "L'IA lit les documents et compose les menus ; tout ce qui se mesure est calculé par le code. Un prix est lu sur la page, jamais deviné.",
        projet: 'paperasse',
        nom: 'Paperasse',
      },
    ],
  },

  about: {
    title: 'À propos',
    paragraphs: [
      "J'apprends et je construis en même temps : chaque projet ci-dessus est un chantier réel, mené de l'idée jusqu'à la mise en service.",
      "Mon terrain aujourd'hui, ce sont les workflows automatisés reliés à des modèles d'IA — et surtout les garde-fous qui empêchent une machine bavarde de raconter n'importe quoi.",
      "Tous ces workflows tournent chez moi, pour moi. Aucun n'est un service, aucun n'est proposé à qui que ce soit : ce sont des outils personnels, montrés ici pour ce qu'ils sont.",
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
