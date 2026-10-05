import { getCollection } from 'astro:content';
export const PROJECTS_PER_PAGE = 6;
export const POSTS_PER_PAGE = 8;
export async function publishedProjects() {
  return (await getCollection('projects')).sort((a, b) => a.data.priority - b.data.priority);
}
export async function publishedPosts() {
  if (!Object.keys(import.meta.glob('../content/blog/**/*.{md,mdx}')).length) return [];
  return (await getCollection('blog', post => post.data.ownerWritten && !post.data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
export { archivedProjectSlugs, withdrawnPostSlugs } from './archive.js';
