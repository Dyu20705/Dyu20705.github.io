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
  the newer owner brief says expected 2028. Resolve HTML date with the owner,
  and report the PDF discrepancy without silently editing the document.
