import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localizedText = z.object({
	vi: z.string(),
	en: z.string(),
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
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
		failureModes: z.array(localizedText).default([]),
		results: z.array(localizedText).default([]),
		learned: z.array(localizedText).default([]),
		next: z.array(localizedText).default([]),
		stack: z.array(z.string()).min(1),
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
