# Tests — yuriysafron.com QA Framework

This folder contains all automated tests for [yuriysafron.com](https://yuriysafron.com) — a
personal portfolio site with a built-in QA sandbox. The framework is built with
**Playwright + TypeScript**.

---

## My thought process

When I designed this test suite, the goal was to cover the application across all layers — not
just UI clicks, but also the API contract, database integrity, and security boundaries. Each
layer catches different types of failures:

- **UI tests** catch broken user journeys — things a real user would notice
- **API tests** catch backend contract issues without needing a browser — faster and more precise
- **DB tests** catch data integrity problems that neither the UI nor API expose
- **Security tests** catch auth gaps, injection vectors and header misconfigurations — the site's
  `/qa-sandbox/` is purpose-built with dozens of live vulnerability scenarios for this layer

Tests are organized by type so you can run only what you need depending on the situation (quick
smoke check before a release vs. full regression).

---

## Folder structure
(subject to a change depends on a requirements)
```
tests/
  ui/             → Full user journey tests. Browser-based, end-to-end flows.
  api/            → HTTP-level tests
  db/             → Data integrity checks across create/update/delete operations.
  security/       → Auth enforcement, input validation, injection, header checks, injectios, rate limits.
  fixtures/
    ui/           → Page Object Model classes — all UI locators live here.
    api/          → Shared API helpers — auth headers, request builders.
    db/           → Database client and seed/teardown utilities.
  helpers/        → Shared utility functions used across all test types.
```

---

## Tags

Every test is tagged so you can run a targeted subset.

| Tag | When to use |
|---|---|
| `@smoke` | Quick sanity — run before every deploy |
| `@ui` | Full browser flows |
| `@api` | API contract tests |
| `@db` | Database validation |
| `@security` | Security-focused scenarios |
| `@regression` | Full regression suite |

A test can have multiple tags: `@ui @smoke @regression`

---

## How to run tests

> Make sure you have a `.env` file at the project root with `BASE_URL` set.
> See `.env.example` for the required variables.

```bash
# Run all tests
npm test

# Run only smoke tests (fastest — good for a quick sanity check)
npm run test:smoke

# Run only API tests (no browser needed)
npm run test:api

# Watch the browser while tests run (local debugging)
npm run test:headed

# Slow down each action by 1 second so you can follow what's happening
SLOW_MO=1000 npx playwright test --headed

# Run by tag
npx playwright test --grep @smoke

# Open the HTML report after a run
npm run report
```
