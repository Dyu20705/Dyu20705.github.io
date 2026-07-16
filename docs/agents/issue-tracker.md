# Issue tracker: GitHub

Issues and PRDs for this repo live as GitHub issues. Use the `gh` CLI for all operations.

## Conventions

- **Create an issue**: `gh issue create --title "..." --body "..."`
- **Read an issue**: `gh issue view <number> --comments`, including labels and all comments.
- **List issues**: `gh issue list --state open --json number,title,body,labels,comments`
- **Comment on an issue**: `gh issue comment <number> --body "..."`
- **Apply or remove labels**: `gh issue edit <number> --add-label "..."` or `--remove-label "..."`
- **Close an issue**: `gh issue close <number> --comment "..."`

Infer the repository from `git remote -v`; `gh` does this automatically when run inside the clone.

## Pull requests as a triage surface

**PRs as a request surface: no.**

If this is changed to `yes`, external PRs run through the same labels and states as issues:

- **Read a PR**: `gh pr view <number> --comments` and `gh pr diff <number>`.
- **List external PRs**: use `gh pr list`, retaining authors whose association is `CONTRIBUTOR`, `FIRST_TIME_CONTRIBUTOR`, or `NONE`.
- **Comment, label, or close**: use `gh pr comment`, `gh pr edit`, and `gh pr close`.

GitHub shares one number space across issues and PRs. Resolve an ambiguous `#42` with `gh pr view 42`, then fall back to `gh issue view 42`.

## When a skill says “publish to the issue tracker”

Create a GitHub issue.

## When a skill says “fetch the relevant ticket”

Run `gh issue view <number> --comments`.

## Wayfinding operations

Used by `/wayfinder`. The map is one issue with child issues as tickets.

- **Map**: label it `wayfinder:map` and maintain its Notes, Decisions-so-far, and Fog sections.
- **Child ticket**: link it as a GitHub sub-issue. If sub-issues are unavailable, add it to the map task list and put `Part of #<map>` at the top. Apply a `wayfinder:<type>` label.
- **Blocking**: use GitHub’s native issue dependencies. If unavailable, put `Blocked by: #<n>` at the top of the child issue.
- **Frontier query**: select the first open, unassigned child whose blockers are all closed.
- **Claim**: `gh issue edit <n> --add-assignee @me`.
- **Resolve**: publish the result as an issue comment, close the ticket, and add its context pointer to the map’s Decisions-so-far section.
