// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { archivedProjectSlugs, withdrawnPostSlugs } from './src/data/archive.js';

// https://astro.build/config
export default defineConfig({
	site: 'https://dyu20705.github.io',
	cacheDir: './.astro/cache',
	integrations: [mdx(), sitemap({
		filter: (page) => {
			const route = new URL(page).pathname.replace(/\/$/, '');
			return route !== '/404' &&
				!archivedProjectSlugs.some((slug) => route === `/projects/${slug}`) &&
				!withdrawnPostSlugs.some((slug) => route === `/blog/${slug}`);
		},
	})],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
