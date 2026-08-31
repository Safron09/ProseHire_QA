# yuriysafron.com QA Framework

 **Portfolio project.** Built to demonstrate SDET and DevOps skills across the full
 quality-engineering stack. The framework intentionally layers in tools like Docker,
 Kubernetes, and GitHub Actions — not because every project needs all of them, but
 to show hands-on experience with each technology in a realistic, production-like context.

Test suite for yuriysafron.com — a personal portfolio site with a live QA sandbox
(vulnerability playground), profile card, and quiz modules.

Covers UI and security validation layers using Playwright and TypeScript. The site's
`/qa-sandbox/` exposes dozens of intentional vulnerability scenarios (SQLi, XSS, IDOR,
SSRF, XXE, CSRF, broken auth, mass assignment, and more) purpose-built for exercising
a security automation suite against.

## Stack
Playwright · TypeScript · Node.js

## Test Coverage
- UI flows — profile card, projects, quizzes navigation via Playwright
- Security — scenarios against the `/qa-sandbox/` vulnerability playground

## Environments

Configured via `BASE_URL` environment variable. See `.env.example` for required variables.
No dedicated test/staging environment exists yet — tests currently target local dev only.

## To Do

**Infrastructure**
- [ ] GitHub Actions — CI pipeline running smoke tests on every push
- [ ] GitHub Actions — scheduled weekly full regression run
- [ ] Docker — containerize test runner using official Playwright image
- [ ] Docker Compose — single command local test execution
- [ ] Kubernetes — Job manifest to trigger test container on demand
- [ ] Allure Report — publish HTML test results to GitHub Pages (considering)

**UI Tests**
- [ ] Home page — hero, skills, projects, principles, recommendations render correctly
- [ ] Navigation — all section anchors and nav links resolve, no broken routes
- [ ] Quizzes — ISTQB practice exam flow

**Security Tests** (against `/qa-sandbox/`)
- [ ] SQL injection
- [ ] XSS — reflected, DOM-based, script/CSS injection
- [ ] CSRF
- [ ] Broken auth / access control / IDOR
- [ ] SSRF / XXE
- [ ] Open redirect / CORS misconfiguration
- [ ] File upload validation
- [ ] Security headers — CSP, X-Frame-Options, HSTS present on all pages

**Auth Tests**
On hold — no dedicated test/staging environment exists yet, so flows that create
real accounts (signup/login) shouldn't run against production until one is set up.

**DB Tests**
On hold — app currently runs on local SQLite during development, and the whole
application is planned to migrate to AWS. DB test tooling will be revisited after
that migration lands.
