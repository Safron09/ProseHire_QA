# ProseHire QA Framework

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
- Staging: https://prosehire-secret.com
- Production: https://prosehire.com