import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    dimensions: z.string(),
    grade: z.string(),
    standard: z.string(),
    finish: z.string(),
    image: z.string(),
    order: z.number().default(99),
  })
});

export const collections = {
  products: productsCollection,
};
