# Implementation decisions

- Branch: `redesign/editorial-portfolio`; no main edits, merge or deployment.
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
- No bilingual URL migration: Vietnamese static HTML plus one storage-backed
  locale controller updates visible copy, document language and metadata.
  Canonical URLs do not change. No framework/runtime dependency is added.
- PDF CV remains byte-for-byte unchanged. It currently states graduation 2027;
  the newer owner brief says expected 2028. The HTML therefore records the
  supported start date as 2023–present, without asserting a disputed graduation
  year. The owner can confirm the expected year separately; the PDF is not edited.
- A temporary publication test using shared node_modules exposed Astro's empty
  glob behavior: the loader returns without clearing stored entries. The new
  writing loader explicitly clears an empty collection, and cacheDir is local to
  `.astro/cache` instead of shared dependency directories. Validation rejects
  writing routes without approved source and requires empty RSS/Blog when no
  approved posts exist. The warm-cache last-post-removal regression is tested.
- Automatic review rejected cleanup of the duplicate source PDF and other
  remaining assets because CV preservation is required. Both PDF copies and the
  remaining assets are preserved; only references actually used enter the page
  bundles. Public/source PDFs were compared against Git and are byte-identical.
