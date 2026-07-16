# Security policy

## Reporting a vulnerability

Please do not publish a vulnerability, exposed credential, or private personal information in a public issue.

Report it privately through GitHub's security advisory flow when available, or contact the repository owner through the email listed on the portfolio contact page. Include:

- A concise description of the problem.
- The affected route, file, dependency, or workflow.
- Reproduction steps that do not expose real credentials or personal data.
- The likely impact.
- A suggested mitigation when known.

## Scope

This repository is a static Astro site deployed to GitHub Pages. Relevant security concerns include:

- Secrets or personal information committed to source/history.
- Unsafe raw HTML or untrusted content rendering.
- Dependency and GitHub Actions supply-chain risk.
- Excessive workflow permissions.
- Unsafe external links or third-party scripts.
- Privacy issues in contact, analytics, or embedded services.

## Hosting limitations

GitHub Pages does not let this repository configure arbitrary HTTP response headers in the same way as a custom server. The project therefore does not claim a Content Security Policy or other response headers unless they are verified through a supported hosting/proxy configuration.

## Supported version

Only the current default branch and the currently deployed GitHub Pages build are supported.
