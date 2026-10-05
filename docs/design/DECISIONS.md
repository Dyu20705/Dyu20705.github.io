# Implementation decisions

- Branch: `redesign/editorial-portfolio`. The final owner-requested release
  sequence authorizes a merge commit after the CV sync and successful PR CI;
  merging to main triggers the existing GitHub Pages workflow.
- Baseline: locked install succeeds; build and validation pass for 19 pages when
  run outside the port-restricted sandbox. Astro telemetry is disabled locally.
  Initial sandbox failures were configuration-directory access and local-port
  restrictions, not repository regressions. npm reports 9 existing advisories
  (1 moderate, 7 high, 1 critical); dependency upgrades are outside this redesign.
- Dark-only: existing light mode leaves fixed dark backgrounds and hardcoded
  colors. It is not stable enough to preserve cheaply. A coherent light theme
  is a future enhancement, not a partially working control.
- Current source snapshots: SITES `0a85363` (`master`), openDownloader `1759301`
  (`main`). SITES currently has documentation and research-entry preparation,
  no current product code/tests. M1 is 17 September–17 October 2026; provider,
  corpus, signals and stack are not accepted implementation choices.
- openDownloader has public non-prerelease v1.0.0/v1.0.1 releases with assets.
  Default-branch contract/security checks pass. A recent signed release workflow
  failed. Current package version differs from the latest published tag; do not
  present the source as the next successfully verified release. Current intended
  production target is Linux x86_64; Windows/macOS portability checks do not
  establish production support. Tests inspected, not rerun for this portfolio.
- Old featured projects are no longer promoted without fresh verification.
  Their existing detail URLs receive a factual archive notice with no stale
  capability claims. Withdrawn generated article URLs receive a noindex notice;
  neither notices nor removed writing appear in RSS/sitemap.
- Owner confirmed Vietnamese static default during review. No bilingual URL
  migration: a small head bootstrap restores the saved locale and metadata
  before body copy paints; CSS chooses the visible language immediately. One
  storage-backed controller handles subsequent switches and utilities.
- Owner confirmed expected graduation 2028. HTML Resume and the updated
  owner-provided CV PDF both state this. The public PDF is copied to the retained
  source asset so both PDF copies are byte-identical.
- A temporary publication test using shared node_modules exposed Astro's empty
  glob behavior: the loader returns without clearing stored entries. The new
  writing loader explicitly clears an empty collection, and cacheDir is local to
  `.astro/cache` instead of shared dependency directories. Validation rejects
  writing routes without approved source and requires empty RSS/Blog when no
  approved posts exist. The warm-cache last-post-removal regression is tested.
- Automatic review rejected cleanup of the duplicate source PDF and other
  remaining assets because CV preservation is required. Both PDF copies and the
  remaining assets are preserved; only references actually used enter the page
  bundles. At the initial review, public/source PDFs matched the original Git
  bytes. The final release batch synchronizes both to the owner's updated PDF.
- Bounded review polish: current focus is one hero link; Selected Work contains
  one listing each for SITES/openDownloader. Public SITES summary omits internal
  Month-1 wording; research gates remain in the detailed case study. Desktop
  avatar is 64px with a slightly larger name; compact mobile identity is retained.
- Social preview is a 1200×630 PNG exported from the original local SVG. Metadata
  includes PNG MIME type and dimensions; no reference assets were introduced.
- Publication regression runs in CI after verify. Contact/identity validation
  imports the same public profile as pages; career wording in an owner article
  is permitted. Markdown/MDX case-study body migration is deferred until richer
  owner-authored content warrants it; no schema migration in this polish.
- Dependency audit triage confirms the same nine affected packages. This site
  deploys static files, not a Node server or runtime image-optimization endpoint.
  Build tooling remains affected (Astro, sharp and transitive parsing/processing
  libraries); static deployment does not resolve those advisories. Package/lock
  upgrades are separate follow-up work, not silently combined with this polish.
