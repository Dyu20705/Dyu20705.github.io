# Nguyễn Văn Duy — personal portfolio

Astro static site for a Computer Science student: current research, verified
software projects, resume, owner-written notes, photographs and contact.

```sh
npm ci
npm run dev
npm run verify
npm run test:publication
```

`verify` builds the site and checks generated routes, links, landmarks, content
ownership and removed legacy controls. Node.js 22.12+ is required. In constrained
local environments, `ASTRO_TELEMETRY_DISABLED=1 npm run verify` avoids telemetry
configuration writes; Astro's font build also requires a local port.

Design/content decisions: [docs/design](docs/design/MASTER_DESIGN.md).
Featured-project evidence: SITES and openDownloader records in
`src/content/projects`, with inspected revisions and verification dates.

Blog is initially empty. New posts stay unpublished unless explicitly marked
`ownerWritten: true` and `draft: false`. Portfolio pages contain six projects;
Blog pages contain eight posts. Pagination only appears when needed. Old
withdrawn article and archived project addresses have noindex notices and are
excluded from RSS/sitemap.

Vietnamese is the static default. The language utility updates visible copy,
document language and metadata without changing canonical URLs. A small head
bootstrap restores saved English before body copy paints. Browser checks
can be run with `node scripts/review-browser.mjs` when Playwright and Chrome are
available externally; no browser dependency is included in production.
For example: `PORTFOLIO_PLAYWRIGHT_PATH=/tmp/portfolio-browser/node_modules/playwright node scripts/review-browser.mjs`.
The publication regression test uses an isolated temporary copy and checks
owner/draft exclusion, pagination and last-post removal with a populated cache;
it runs as a separate CI step after build validation.

GitHub Pages publishing remains managed by the existing quality-gated workflow.
The redesign branch is reviewed without merging or deploying.
