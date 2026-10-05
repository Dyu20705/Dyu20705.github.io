import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const text = z.string().trim().min(1);
const localized = z.object({ vi: text, en: text });
const markdownPosts = glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' });
const blog = defineCollection({
  loader: {
    name: 'owner-writing',
    async load(context) {
      const base = new URL('./src/content/blog/', context.config.root);
      const files = await readdir(base, { recursive: true });
      if (files.some(file => /\.mdx?$/.test(file))) return markdownPosts.load(context);
      // Astro's glob loader returns early for an empty directory without clearing
      // stored entries. Removing the last post must also remove cached writing.
      context.store.clear();
      if (context.watcher) {
        const watcher = context.watcher;
        const onAdd = async (file: string) => {
          if (!file.startsWith(fileURLToPath(base)) || !/\.mdx?$/.test(file)) return;
          watcher.off('add', onAdd);
          await markdownPosts.load(context);
        };
        watcher.add(fileURLToPath(base));
        watcher.on('add', onAdd);
      }
    },
  },
  schema: z.object({
    title: text, description: text, titleEn: text.optional(), descriptionEn: text.optional(),
    lang: z.enum(['vi', 'en']).default('vi'), pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(), draft: z.boolean().default(true),
    ownerWritten: z.boolean().default(false),
  }),
});
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: text, slug: text.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    priority: z.number().int().positive(), featured: z.boolean().default(false),
    year: z.number().int(), status: localized, domain: localized, summary: localized,
    stack: z.array(text), repoUrl: z.string().url(), revision: text,
    verifiedOn: text.regex(/^\d{4}-\d{2}-\d{2}$/),
    sections: z.array(z.object({ heading: localized, paragraphs: z.array(localized).min(1) })).min(1),
    evidence: z.array(z.object({ label: localized, href: z.string().url() })).min(1),
  }),
});
export const collections = { blog, projects };
