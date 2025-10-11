import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(400),
    date: z.date(),
    tags: z.array(z.string()),
    type: z.string(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(400),
    date: z.date(),
    tags: z.array(z.string()),
    type: z.string(),
  }),
});

const playground = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/playground" }),
  schema: z.object({
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { blog, notes, playground };
