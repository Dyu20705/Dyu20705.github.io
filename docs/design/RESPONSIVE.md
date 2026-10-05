# Responsive contract

- 1200px and above: avatar/identity, seven text links and locale share one row.
- 768–1199px: identity/locale first row, navigation on a deliberate second row.
- Below 768px: compact identity, locale and Menu; expanded links form a list.
- Without JavaScript all navigation remains visible. Hidden links are removed
  from focus order only after successful enhancement.
- Menu uses aria-expanded/controls; Escape closes and returns focus. Selecting a
  destination closes it. Crossing the desktop breakpoint resets expanded state.
- Shell max-width 1360px; gutters 48px desktop, 32px tablet, 16px mobile. Reading
  content is narrower. Footer email stays intact on desktop and gets its own
  contact row on mobile. Touch targets are at least 44px.
- Review widths: 1440, 1280, 1200, 1199, 1024, 768, 390, 360, both locales.
- Keep one meaningful h1, visible focus, logical heading order, reduced-motion
  support, no hover-only information, and no horizontal page overflow.
