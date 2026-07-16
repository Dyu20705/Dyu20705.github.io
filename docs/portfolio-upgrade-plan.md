# Portfolio professional upgrade plan

Branch: `feat/portfolio-professional-upgrade`

## Chosen direction

**Calm Control Room** keeps the existing systems identity while making evidence, readability and recruiter comprehension more important than decorative dashboard behavior.

## Scope for this pull request

### Included

- Add a validated Astro content collection for project case studies.
- Add honest, bilingual case-study data for RunSift, Data Pipeline and Personal Internet Simulator.
- Replace generic project cards and category filters with prioritized evidence cards.
- Add static project detail routes.
- Improve canonical/social metadata and add truthful `Person` structured data.
- Change GitHub Pages deployment to deterministic `npm ci` and a generated-route quality gate.
- Add a dependency-free internal-link/landmark validator.
- Document baseline findings, limitations, trade-offs and remaining work.
- Improve issue backlog for architecture, accessibility/performance, privacy and supply-chain security.

### Explicitly deferred

- Full replacement of `ProfileShell.astro` before browser regression coverage exists.
- Claiming Lighthouse, Web Vitals or accessibility scores without measurement.
- Adding React/Vue/Svelte, analytics, search libraries or animation libraries.
- Publishing Data Pipeline source or pretending that its private/WIP repository is a finished public project.
- Adding a live contact form or third-party tracking.
- Adding a command palette before content volume justifies it.

## File-level plan

| File or area | Change |
| --- | --- |
| `src/content.config.ts` | Add a strict project case-study schema. |
| `src/content/projects/*.md` | Store bilingual, evidence-oriented project records. |
| `src/pages/portfolio.astro` | Render a prioritized, two-column selected-work list without filter JS. |
| `src/pages/projects/[slug].astro` | Generate static detail pages for every validated project. |
| `src/components/BaseHead.astro` | Improve canonical, OG/Twitter metadata and structured data. |
| `scripts/validate-build.mjs` | Validate generated internal links and semantic landmarks. |
| `package.json` | Add `validate:build` and `verify` scripts without new dependencies. |
| `.github/workflows/deploy.yml` | Run on pull requests, install with lockfile, gate deploy and narrow permissions. |
| `docs/portfolio-audit.md` | Record baseline scorecard and evidence. |
| `docs/portfolio-upgrade-plan.md` | Record implementation scope, risks and rollback. |
| `.github/dependabot.yml` | Schedule conservative dependency and Actions update pull requests. |
| `SECURITY.md` | Document responsible reporting and static-hosting limitations. |

## Component plan

### Current risk

`ProfileShell.astro` combines too many responsibilities. Replacing it in the same PR as content/CI changes would make regressions difficult to isolate.

### Follow-up target

```text
src/
  components/
    layout/
      SiteShell.astro
      ProfileSidebar.astro
      SiteNavigation.astro
    controls/
      DisplayControls.astro
    portfolio/
      ProjectCard.astro
      ProjectEvidence.astro
    ui/
      StatusBadge.astro
  i18n/
    en.ts
    vi.ts
  scripts/
    language.ts
    display-preferences.ts
  styles/
    tokens.css
    global.css
    shell.css
```

The split is accepted only when it reduces file responsibility and passes visual/keyboard regression checks; abstractions used once without clarity benefit should not be added.

## Content model

Each project must include:

- Status and honest localized label.
- Value proposition.
- Problem and context.
- Constraints.
- Role.
- Architecture.
- Important decisions.
- Validation.
- Observability and security considerations where relevant.
- Failure modes.
- Current results, including explicit absence of metrics.
- Learnings and next steps.
- Existing evidence links only.

A missing required field fails the Astro build.

## Performance budget

These are targets, not measured results:

- Mobile Lighthouse Performance ≥ 95 in a documented environment.
- Accessibility 100 or a documented exception.
- Best Practices and SEO ≥ 95.
- LCP ≤ 2.5 seconds, INP ≤ 200 ms, CLS ≤ 0.1 when field/lab data is available.
- No client framework hydration for static content.
- No new runtime dependency in this PR.
- Remove the project filter script rather than adding a filtering/search library.
- Keep project imagery absent until real, optimized evidence images exist.

## Testing plan

### Automated in this PR

1. Clean install with `npm ci`.
2. Astro production build.
3. Generated HTML validation:
   - exactly one `<main>` per route;
   - at least one `<h1>` per route;
   - `html[lang]` exists;
   - no `javascript:` or undefined links;
   - all internal links resolve to generated files.

### Required manual follow-up

- Chromium and Firefox.
- 360×800, 390×844, 768×1024, 1024×768, 1440×900 and 1920×1080.
- Keyboard-only walkthrough and visible focus.
- 200% zoom and 320 CSS px reflow.
- `prefers-reduced-motion` and manual reduced-motion control.
- JavaScript disabled and JavaScript-error fallback.
- Console errors, direct deep-link refresh and back/forward navigation.
- Slow network and CPU throttling.
- Lighthouse and axe/Playwright after a minimal, maintainable test setup is selected.

## Migration risks

- Existing language control owns translations in one layout; new project pages use a small event listener that follows the same `siteLang` storage key and `control-room-lang` event.
- The global sidebar currently owns the page `h1`; page-specific heading semantics require a layout refactor before enforcing exactly one meaningful page title.
- Project data intentionally removes generic projects from the primary showcase; they remain available in GitHub rather than being deleted.
- The default OG preview is an SVG. Social-platform rendering should be tested; a generated PNG should replace it if a target crawler does not render SVG reliably.

## Rollback strategy

- The work is isolated on a feature branch and will not auto-merge.
- Revert the project listing and content-schema commits independently if routing/content validation fails.
- Revert the workflow commit independently if GitHub Pages artifact behavior regresses.
- Keep the old `portfolioProjects` data until the new pages are validated, so rollback does not require reconstructing content.

## Definition of done for this PR

- Pull-request workflow completes `npm ci` and `npm run verify`.
- All generated project detail routes exist and internal links resolve.
- No fabricated project result is present.
- Deploy remains restricted to `main` after the quality job succeeds.
- Reviewers can understand why large shell/i18n/security/performance work remains separate.
