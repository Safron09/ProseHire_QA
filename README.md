# ProseHire QA Framework

 **Portfolio project.** Built to demonstrate SDET and DevOps skills across the full
 quality-engineering stack. The framework intentionally layers in tools like Docker,
 Kubernetes, and GitHub Actions — not because every project needs all of them, but
 to show hands-on experience with each technology in a realistic, production-like context.

Production test suite for ProseHire — a live Django SaaS application.

Covers UI, API, and database validation layers using Python, Playwright, and PyTest. 
Includes security-focused test scenarios: input validation, prompt injection, file 
injection, and vulnerability testing across all user-facing surfaces.

Integrated into GitHub Actions CI/CD with weekly scheduled runs and merge-triggered 
runs against the staging environment before every release.

## Stack
Python · Playwright · PyTest · Requests · GitHub Actions

## Test Coverage
- UI flows — end-to-end user journeys via Playwright
- API layer — endpoint validation, schema checks, authentication flows
- Database — data integrity validation across operations
- Security — prompt injection, file injection, input boundary testing, 
  vulnerability scenarios

## Environments

Configured via `BASE_URL` environment variable. See `.env.example` for required variables.

## To Do

**Infrastructure**
- [ ] GitHub Actions — CI pipeline running smoke tests on every push
- [ ] GitHub Actions — scheduled weekly full regression run
- [ ] Docker — containerize test runner using official Playwright image
- [ ] Docker Compose — single command local test execution
- [ ] Kubernetes — Job manifest to trigger test container on demand
- [ ] Allure Report — publish HTML test results to GitHub Pages (considering)

**UI Tests**
- [ ] Registration — full form validation (invalid email, weak password, duplicate account)
- [ ] Login — valid credentials, invalid credentials, locked account
- [ ] Dashboard — loads correctly after login, key elements visible
- [ ] Navigation — all nav links resolve, no broken routes

**API Tests**
- [ ] Auth endpoints — register, login, token refresh, logout
- [ ] Protected routes — return 401 without token, 403 with wrong role
- [ ] Job listings — GET returns correct schema, pagination works
- [ ] Error responses — correct status codes and error message format

**Security Tests**
- [ ] Security headers — CSP, X-Frame-Options, HSTS present on all pages
- [ ] Auth enforcement — protected pages redirect unauthenticated users
- [ ] Input validation — XSS, SQL injection attempts handled safely
- [ ] Rate limiting — login endpoint blocks brute force attempts
- [ ] Prompt Ijections
- [ ] SQLi
 
**DB Tests**
Current project has hard delete. Meaning every user can register same email and credentials
- [ ] User creation — record persists correctly after registration
- [ ] Data cleanup — test data teardown after each run