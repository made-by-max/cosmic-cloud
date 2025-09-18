import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(400),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});


// Expose your defined collection to Astro
// with the `collections` export
export const collections = { writing };