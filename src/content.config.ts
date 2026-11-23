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
    // Teinte (0-360) de la couverture générée. Change-la pour changer la couleur.
    hue: z.number().min(0).max(360).default(250),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { projets };
