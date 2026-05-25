# My my

This is my my, uses [Astro](https://astro.build/)

## Deploy

Push to `main` will deploy automatically to GitHub Pages via `.github/workflows/deploy.yml`.
The site is configured for the root domain `https://dyu20705.github.io`.
In repo settings, GitHub Pages should use `GitHub Actions` as the source, not `Deploy from a branch`.

## Optimization Notes

- Keep the site static-first: Astro renders the pages at build time, and interactive JS stays local to the few behaviors that need it.
- Prefer shared tokens and layout-level primitives for accessibility, motion, and spacing instead of repeating per-page overrides.
- Use optimized image delivery and lazy loading for secondary media while keeping the first viewport fast and stable.
