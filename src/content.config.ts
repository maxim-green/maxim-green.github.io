import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/experience" })
});

export const collections = { experience };