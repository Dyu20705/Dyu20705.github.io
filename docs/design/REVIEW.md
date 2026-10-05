# Browser review — 5 October 2026

Original Astro/CSS implementation; no reference source/assets reused. The local
HOLOLIVE mirror was used for shell research. No new HTTrack crawl was needed.

Retained reference artifacts: [Home desktop](review/home-1440.png),
[Home mobile](review/home-390.png). The other seven requested screenshots and
machine-readable results are local review artifacts in `/tmp/portfolio-review`.

## Validation

- Baseline: npm ci and npm run verify, 19 pages passed.
- Final: clean npm ci and npm run verify, 21 pages passed; links, one h1/main,
  header/footer, noindex archives, source ownership, empty RSS and removed UI.
- Browser: 176 combinations (11 representative routes × 8 requested widths ×
  VI/EN), no horizontal overflow or script errors. Both featured project details
  were included. Menu/Tab/Escape/focus return, resize reset, locale persistence,
  localized metadata, email clipboard, no-JS navigation, blocked storage and
  reduced motion passed. Tests used installed Chrome with viewport emulation.
- Text contrast against background and input surface: primary 15.15:1, body
  9.78:1, muted 6.27:1, accent 9.41:1 (all above 4.5:1). Focus ring exceeds 3:1.
  Shared controls meet 44px targets; gallery alt text follows inspected photos.
- Contact: required fields and email-application feedback tested in VI/EN;
  no message was sent. PDF returns HTTP 200 and matches the original Git bytes.
- Publication regression: isolated 7-project/9-post fixture passes pagination;
  generated, draft and unclassified posts do not publish. Removing the final
  post with warm cache clears stored writing, generated routes and RSS.
- Review polish: npm scripts/CI now run publication regression after verify;
  package dependencies and lockfile remain unchanged. The profile contract is
  shared with validators, and a valid article may discuss an MLOps Engineer.
- A returning EN visitor shows EN copy/metadata with all module scripts removed
  and external JS blocked: the head bootstrap runs before body content. No-JS
  still renders static VI and accessible navigation.
- Social preview: original SVG exported to PNG, verified 1200×630; OG/Twitter
  metadata points to the PNG. Desktop avatar is 64px; mobile remains compact.
- Homepage now has current-focus hero link and one Selected Work list. Internal
  Month-1 terminology stays in the case study. No framework hydration or new
  runtime dependency.

## Remaining boundaries

Chrome checks do not substitute for physical-device/Safari testing. Dark-only
is deliberate; a coherent light theme is deferred. English copy and metadata
are selected client-side; Vietnamese remains static default without URL migration.
The existing dependency lockfile reports 9 advisories; upgrades are separate work.

OWNER MUST WRITE: genuine future articles and optional personal narrative.
Owner confirmed expected graduation 2028; HTML Resume is updated. The owner
will edit the PDF later; the preserved document still says 2027 and must be
synchronized before public release.

No merge, deployment, DNS change or destructive remote operation is part of this
redesign. Only the redesign branch is pushed once after successful validation in each
authorized implementation batch. Review requests a draft PR to main for a
clean-checkout CI run; PR checks do not deploy. Remote CI results are reported
with the PR, separately from the local evidence documented here.
