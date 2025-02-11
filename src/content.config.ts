import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/experience" }),
  schema: z.object({
    company: z.string(),
    position: z.string(),
    description: z.string().optional(),
    website: z.string().optional(),
    logo: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    location: z.object({
      city: z.string(),
      country: z.string()
    }),
    skills: z.array(z.string())
  })
});

export const collections = { experience };