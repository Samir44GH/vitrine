import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Une fiche = un fichier Markdown dans src/content/projets/.
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(220),
    year: z.number(),
    category: z.enum(['automatisation', 'web', 'conception']),
    status: z.enum(['en-ligne', 'en-cours', 'archive']).default('en-ligne'),
    stack: z.array(z.string()).default([]),
    // Signe gravé du projet — voir src/components/Sigil.astro
    sigil: z.enum(['barres', 'cercles', 'rayons', 'vague', 'trame', 'chevrons', 'losange', 'grille', 'lueur', 'refuge', 'aube', 'boucle', 'faisceau']).default('grille'),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { projets };
