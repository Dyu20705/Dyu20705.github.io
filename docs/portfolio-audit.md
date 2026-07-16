# Portfolio audit — Nguyễn Văn Duy

Audit date: 2026-07-16  
Repository: `Dyu20705/Dyu20705.github.io`  
Baseline commit: `30c5a5b41ca7695741aa2204f5b68b80cfb4a6ea`

## Executive summary

The portfolio already has a distinctive **MLOps Control Room** identity, clear primary calls to action, local fonts, optimized Astro images, sitemap/RSS support, and a static GitHub Pages deployment. It is not yet a strong recruiter-facing MLOps portfolio because the visible project set is dominated by generic apps/games, project cards do not lead to deep evidence, and the main layout combines layout, navigation, styling, translation data, theme/motion/sound controls, command-palette behavior, and personal contact data in one 1,500+ line file.

The recommended direction is **Calm Control Room**: preserve the technical identity while reducing dashboard decoration, making project evidence the visual focus, and treating every claim as something that must link to source, a report, a test, or an explicitly marked plan.

### Most important baseline findings

1. `src/layouts/ProfileShell.astro` is a god layout: approximately 1,500 lines with layout CSS, navigation, sidebar, i18n dictionaries, theme, sound, motion, pointer effects, command palette, and page shell behavior.
2. `src/data/site.ts` exposes a phone number and birthday, while `ProfileShell.astro` also hard-codes the telephone URI. This is unnecessary public PII.
3. The baseline portfolio list contains `SmartSpender`, `myNote`, `color-wars`, and `SQUAREXO`, which weakens the MLOps/Platform narrative.
4. Project cards use the same shared cover at low opacity with a decorative architecture SVG, so the visual does not provide project-specific evidence.
5. The three-column project grid allocates too little width for problem, role, status, tags, metadata, and details.
6. Project filters add JavaScript but provide little value for only six projects.
7. The deployment workflow uses `npm install`, grants deploy permissions at workflow scope, and has no pull-request quality gate.
8. `BaseHead.astro` uses a generic blog fallback image for social previews and lacks `og:site_name`, locale metadata, image alt metadata, and structured data.
9. Baseline content collections validate blog posts only; project content is a single unvalidated array.
10. The current heading model puts the global profile name in an `h1` inside the sidebar. This prevents each page from having a clear page-specific `h1` without duplication.

## Validation status and limitations

### Completed from source and repository evidence

- Read package manifest, lockfile metadata, Astro config, core pages/components/data/styles, metadata component, content config, workflow, README, recent commits, and all current open issues.
- Inspected the public reference repositories and their documented stacks/architecture.
- Verified repository permissions and created a separate implementation branch.
- Verified that Data Pipeline is currently private/WIP and that RunSift and Personal Internet Simulator are public repositories.

### Not yet independently measured

The execution environment could not clone the repository or launch Playwright because direct network access from the runtime was unavailable. Therefore this audit does **not** claim:

- Lighthouse scores.
- Browser screenshots.
- Firefox parity.
- CPU/network-throttled measurements.
- Real LCP, INP, CLS, or JavaScript byte totals.
- Manual keyboard/200% zoom results.

These remain explicit validation tasks. GitHub Actions is used as the available clean-checkout build signal after the pull request is opened.

## Baseline scorecard

Scores are 0–5 and represent the baseline before this branch.

### Product and content

| Area | Score | Evidence |
| --- | ---: | --- |
| Career positioning in five seconds | 3 | Hero says MLOps Engineer and lists AI systems/cloud/automation, but it does not clearly state student/intern status. |
| Hero quality | 3 | Strong name, role and CTAs; portrait, pipeline map, status panel and metadata compete for attention. |
| Information architecture | 3 | Core pages exist, but gallery/CV/system labels add navigation density. |
| Navigation clarity | 2 | Each nav item includes index and system metadata; useful labels are visually diluted. |
| Project discoverability | 2 | Portfolio is one click away, but no detail route or selected-work evidence hierarchy exists. |
| Project case-study quality | 1 | Cards contain problem and role only; no architecture, constraints, validation, failure modes or results. |
| Evidence credibility | 2 | Status labels are honest, but claims rarely link to tests/reports/diagrams. |
| CTA clarity | 4 | Projects, resume and contact are clearly exposed in the hero. |
| Resume/CV discoverability | 4 | Resume and CV are separate nav/hero links. |
| Contact friction | 3 | Email/social links are easy to find, but public phone/birthday add privacy cost. |
| Bilingual VI/EN | 2 | Translation infrastructure exists, but large inline dictionaries are hard to keep synchronized and dynamic project content is not schema-driven. |
| Cross-page consistency | 2 | Visual shell is consistent; content depth and language quality vary by page. |

### Visual design

| Area | Score | Evidence |
| --- | ---: | --- |
| Visual hierarchy | 3 | Strong headings and surfaces, but many panels/labels have similar emphasis. |
| Typography | 3 | Readable Atkinson body font; monospace is overused for metadata and controls. |
| Spacing rhythm | 3 | Generally consistent, though dense cards and nav reduce scan speed. |
| Color system | 2 | Tokens exist, but many components repeat cyan/glow values directly. |
| Contrast | 3 | Core text appears strong; muted metadata and low-opacity imagery need browser validation. |
| Grid/alignment | 3 | Structured two-column shell, but three-column project cards are too narrow. |
| Consistency | 3 | Shared surfaces and rounded panels are coherent. |
| Density | 2 | Sidebar, control cluster, nav metadata, hero visual and status panel create high first-screen density. |
| Mobile composition | 2 | Responsive rules exist, but sticky sidebar/control cluster and dense card metadata need device testing. |
| Distinctive identity | 4 | Control-room concept is recognizable and relevant to systems work. |
| Template-like risk | 3 | Identity is personal, but generic glow/grid/glass patterns can resemble a tech template. |
| Decoration/value ratio | 2 | Animated background, repeated grid/glow, status panel and architecture overlays often exceed informational value. |

### Interaction

| Area | Score | Evidence |
| --- | ---: | --- |
| Hover/focus/active states | 3 | Most controls define focus-visible and hover states. |
| Navigation transitions | 3 | Transitions are short, but benefit has not been measured. |
| Button feedback | 3 | Clear hover/focus treatment. |
| Filter behavior | 2 | Accessible pressed state exists, but JS is unnecessary for a very small project set. |
| Theme/language controls | 2 | Functional intent is good; inline state logic is large and coupled to the layout. |
| Motion purpose | 2 | Some data-flow framing is relevant; continuous background/pointer effects are primarily decorative. |
| Reduced-motion support | 3 | Media-query and manual controls exist; complete coverage needs runtime validation. |
| Touch targets | 3 | Most buttons target roughly 42–46 px; full mobile review pending. |
| Scroll behavior | 3 | Smooth scroll and scroll margins exist; browser review pending. |
| Keyboard behavior | 3 | Focus styling and command/dialog behavior exist; manual walkthrough pending. |

### Engineering

| Area | Score | Evidence |
| --- | ---: | --- |
| Astro architecture | 3 | Static-first and minimal dependencies, but shell responsibilities are heavily coupled. |
| Component boundaries | 2 | `ProfileShell.astro` and `AboutContent.astro` are too large. |
| Design tokens | 3 | Global tokens exist, but page CSS repeats colors/radii/motion values. |
| CSS maintainability | 2 | Large scoped style blocks and repeated magic values make changes risky. |
| Data/content schema | 1 | Blog is validated; project data is an unvalidated array. |
| Type safety | 2 | TypeScript-compatible Astro is used, but project objects lack a schema. |
| Script organization | 2 | Small filter script is reasonable; layout scripts are monolithic. |
| Dependency health | 4 | Very small Astro-first dependency set with no client framework. |
| Build reproducibility | 2 | Lockfile exists, but deployment uses `npm install` instead of `npm ci`. |
| GitHub Actions quality gate | 2 | Build/deploy works conceptually, but PRs are not gated and no generated-route validation exists. |
| Deployment reliability | 3 | Official GitHub Pages actions and concurrency are present. |
| Appropriate test coverage | 0 | No internal-link, smoke, accessibility, or content-contract tests. |

### Quality attributes

| Area | Score | Evidence |
| --- | ---: | --- |
| Performance | 3 | Static Astro, local fonts and `astro:assets` are strengths; continuous fixed effects/backdrop filters and image strategy need measurement. |
| Accessibility | 3 | Skip link/focus/reduced-motion work exists; page-specific heading semantics and runtime keyboard review remain. |
| SEO | 3 | Canonical, sitemap, RSS and descriptions exist; social image and structured data are generic/incomplete. |
| Social preview | 2 | Generic fallback image rather than a portfolio-specific default. |
| Security | 2 | Static hosting and safe external-link attributes are positives; workflow permissions/pinning and source PII need work. |
| Privacy | 1 | Public phone and birthday are unnecessary and present in source. |
| Resilience | 2 | Static pages are resilient, but generated routes/links are not validated. |
| Browser compatibility | 2 | Modern CSS is used; no recorded cross-browser matrix. |
| Maintainability | 2 | Small dependency surface, but large multi-responsibility files dominate change risk. |

## Hypothesis checks

| Hypothesis | Conclusion | Evidence / impact |
| --- | --- | --- |
| `ProfileShell.astro` owns too much | Confirmed | 1,500+ lines spanning shell, CSS, i18n, controls, audio, motion, pointer tracking and command palette. |
| `AboutContent.astro` should be split | Confirmed, P1 | Hero, system visual, status panel, about copy, capabilities and ~450 lines of CSS live together. |
| CSS is becoming monolithic | Confirmed | Global tokens help, but major pages carry hundreds of scoped lines and repeated cyan/glass values. |
| Too much cyan/glow/grid/glass | Confirmed | Multiple fixed gradients, animated grids, blurred surfaces and card sweeps compete with content. |
| Sidebar consumes too much space | Partially confirmed | Useful identity/contact anchor on desktop; 270 px plus content gap is costly on laptop widths. |
| Navigation metadata is excessive | Confirmed | Index + system label + human label makes simple navigation harder to scan. |
| Hero has competing layers | Confirmed | Name, role, subtitle, track, CTAs, shortcuts, portrait, pipeline map and status panel appear together. |
| System status is useful | Partially | Current focus is useful; `ONLINE` and static system labels are decoration rather than live status. |
| Cards scan well in 10–20 seconds | Not sufficiently | Three-column cards contain dossier metadata, description, problem, details, stack, status and link. |
| Images are too obscured | Confirmed | Shared image opacity is 0.18 and overlaid by generic SVG; it cannot act as evidence. |
| Three columns fit the content | Rejected | Card content requires at least two-column or single-column widths. |
| Filters justify JavaScript | Rejected | Six projects do not need category filtering; prioritization is more useful. |
| Projects over-focus on stack | Partially | Problem/role exist, but architecture, constraints, validation and results are missing. |
| Bilingual system is complete | Rejected | Large inline dictionaries are fragile and project content is not localized by schema. |
| Theme controls risk flash/inconsistency | Needs runtime validation | State is applied client-side from local storage; no measured flash data. |
| OG image is portfolio-specific | Rejected | Generic blog placeholder is the default metadata image. |
| Font preload is excessive | Not proven | One configured local family is preloaded; network waterfall is required before changing. |
| Background animation can cost CPU | Plausible, unmeasured | Fixed animated backgrounds, pointer gradients and backdrop filters are present. |
| View transitions add unnecessary complexity | Not found as a primary baseline issue | No evidence justifies adding more transition machinery. |
| Dead assets/code exist | Likely, not fully inventoried | Shared cover is reused generically and large interaction code has multiple low-value features; full bundle/source map analysis pending. |
| Actions use `npm ci` | Rejected | Baseline uses `npm install`. |
| Quality gate precedes deploy | Rejected | Baseline build only runs Astro build. |
| Action pinning can improve | Confirmed as follow-up | Major-version tags are used; exact SHA pinning should be performed with a documented update process. |

## Reference analysis

| Reference | Good principle | Why it works | Applicable here? | What must not be copied |
| --- | --- | --- | --- | --- |
| `bchiang7/v4` | Clear role narrative, restrained sections, featured work hierarchy, persistent navigation | Reviewers understand identity and selected work before secondary content | Yes: concise hero, selected-work priority, strong spacing | Exact navy/green palette, layout, typography, component structure, animations, copy or Gatsby implementation |
| `jcserv/portfolio` | Search and keyboard navigation are treated as product features; responsiveness/accessibility are explicit goals | Useful discovery can help when content volume is high | Partially: keep keyboard-first navigation, add search only after enough content exists | React/Vite/Tailwind/shadcn stack, Fuse.js for a tiny site, trendy component styling, certificates as decoration |
| `soumyajit4419/Portfolio` | Broad project/skill presentation and approachable visual storytelling | Demonstrates personality and gives many entry points | Limited: human tone and clear project links are useful | Heavy React animation, generic developer-portfolio sections, template-like visuals, copied hero/illustrations or dependency weight |

## User journeys

### Recruiter, 30–60 seconds

1. Understand student/intern positioning.
2. See three selected MLOps/Platform projects.
3. Open one case study and find problem, constraints, architecture, validation and current evidence.
4. Open resume/CV.
5. Find email/LinkedIn.

### Senior engineer, 3–5 minutes

1. Inspect a technical decision and alternative.
2. Verify repository/report/test evidence.
3. See failure modes, observability and security thinking.
4. Identify what is implemented versus planned.

### Mobile visitor

1. Read positioning without navigating past a large sidebar.
2. Open projects and CV with 44 px targets.
3. Avoid horizontal overflow and animation cost.

## Design directions considered

### 1. Calm Control Room — chosen

- Technical, restrained dark surfaces.
- One cyan primary accent and one warm secondary accent.
- Sans-serif body; monospace only for status/domain/evidence metadata.
- Two-column project cards at most.
- Motion only for feedback or meaningful system flow.
- Strength: preserves identity while improving recruiter comprehension.
- Risk: requires disciplined removal of decorative controls.

### 2. Engineering Notebook

- Editorial layout, strong case-study typography, diagrams and logs.
- Strength: excellent reading and writing experience.
- Risk: loses too much of the existing control-room identity.

### 3. Platform Console

- Dense terminal/dashboard presentation with command navigation.
- Strength: distinctive for infrastructure tooling.
- Risk: strongest chance of becoming a demo UI instead of a portfolio; not chosen.

## Prioritized backlog

### P0

- Remove phone and birthday from rendered source, data and relevant history remediation documentation.
- Replace generic project list with honest MLOps/Platform selected work.
- Add validated project content and detail routes.
- Use `npm ci`; gate deploy behind build and generated-route validation.
- Fix page-specific heading semantics at the layout level.
- Verify mobile overflow, keyboard navigation, 200% zoom and reduced motion.

### P1

- Split `ProfileShell` into shell, sidebar, navigation, controls and scripts.
- Extract i18n dictionaries and define a maintainable localization contract.
- Extract design tokens and reduce duplicated colors/glow/backdrop filters.
- Add portfolio-specific OG artwork and project metadata.
- Add automated accessibility smoke tests after choosing a minimal test dependency strategy.
- Replace generic project visuals with real screenshots/diagrams when available.

### P2

- Add search/command palette only after project/blog volume justifies it.
- Add subtle architecture/data-flow motion with reduced-motion fallback.
- Add `/now` only when updates can be maintained consistently.

## Risks

- Replacing `ProfileShell` wholesale without browser regression tests would risk breaking language, theme, focus, dialog and mobile behavior.
- Publishing private/WIP projects as complete would damage credibility.
- Adding Playwright/Lighthouse/axe without maintaining browser binaries and lockfile updates could create a heavy CI burden for a static portfolio.
- GitHub Pages does not provide repository-controlled arbitrary HTTP response headers, so CSP/security headers must not be claimed unless delivered through a supported proxy/hosting layer.
