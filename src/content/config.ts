import { z, defineCollection } from 'astro:content';

const overlayCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
		description: z.string().optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
    author: z.string().optional(),
    author_link: z.string().url().optional(),
    focus: z.enum(["head", "full", "back"]).default("full") //for later implementation
  }),
});

export const collections = {
  'overlay': overlayCollection,
};