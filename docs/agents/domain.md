# Domain Docs

How engineering skills consume this repository’s domain documentation.

## Before exploring, read these

- `CONTEXT.md` at the repository root.
- `CONTEXT-MAP.md` instead, if one is introduced later.
- Relevant decisions under `docs/adr/`.

If these files do not exist, proceed silently. Domain-modeling workflows create them lazily when terminology or architectural decisions are actually resolved.

## File structure

This repository uses a single-context layout:

    /
    ├── CONTEXT.md
    ├── docs/
    │   └── adr/
    └── src/

## Use the glossary’s vocabulary

When naming a domain concept in issues, implementation, tests, or documentation, use the term defined in `CONTEXT.md`.

If a required concept is absent, reconsider whether new terminology is necessary or record the gap for a domain-modeling workflow.

## Flag ADR conflicts

If proposed work conflicts with an accepted ADR, identify the conflict explicitly instead of silently overriding the decision.
