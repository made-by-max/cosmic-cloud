import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

const playground = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/playground" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { blog, notes, playground };
