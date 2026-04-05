import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(['Reforma', 'Patrimonio', 'Interiorismo']),
      cover: image(),
      plan: image().optional(),
      before: image(),
      after: image(),
      gallery: z.array(image()).optional(),
      testimonial: z.string().optional(),
      testimonialAuthor: z.string().optional(),
    }),
});

export const collections = { projects };
