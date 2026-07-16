import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const nonEmptyText = z.string().trim().min(1);

const localizedText = z.object({
	vi: nonEmptyText,
	en: nonEmptyText,
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: nonEmptyText,
			description: nonEmptyText,
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: nonEmptyText,
		slug: nonEmptyText.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase kebab-case route slug.'),
		featured: z.boolean().default(false),
		priority: z.number().int().min(1),
		status: z.enum(['work-in-progress', 'prototype', 'research', 'completed']),
		statusLabel: localizedText,
		domain: localizedText,
		value: localizedText,
		problem: localizedText,
		context: localizedText,
		constraints: z.array(localizedText).min(1),
		role: localizedText,
		architecture: z.array(localizedText).min(1),
		decisions: z.array(localizedText).min(1),
		validation: z.array(localizedText).min(1),
		observability: z.array(localizedText).default([]),
		security: z.array(localizedText).default([]),
		failureModes: z.array(localizedText).min(1),
		results: z.array(localizedText).min(1),
		learned: z.array(localizedText).min(1),
		next: z.array(localizedText).min(1),
		stack: z.array(nonEmptyText).min(1),
		repoUrl: z.string().url().optional(),
		demoUrl: z.string().url().optional(),
		evidence: z
			.array(
				z.object({
					label: localizedText,
					href: z.string().url().optional(),
				}),
			)
			.default([]),
		updated: z.coerce.date(),
	}),
});

export const collections = { blog, projects };
