# yuriysafron.com QA Framework
 
Test suite and infrastructure for [yuriysafron.com](https://yuriysafron.com), a personal
portfolio site with a live QA sandbox, profile card, and quiz modules.
 
This repository is the public half of a two-repo project. The Django application lives in
a private repo. Everything about how it is tested, containerized, deployed, and reasoned
about lives here.
 
---
 
## Project context
 
| Repo | Visibility | Holds |
|---|---|---|
| `yuriy_safronnynov_webapp` | Private | Django application source |
| `YuriySafron_QA` | Public | Test framework, infrastructure, pipeline, project docs |
 
The site is currently a Django app on Heroku with Postgres. It is being migrated to AWS,
containerized, and put behind a pipeline where a QA run gates every deploy. That work is
in progress and none of it is built yet.
 
---
 
## What exists today

Nothing. I'll update as I go (still hosted on heroku and app is running, but no QA part yet)

---

## Stack
 
Playwright · TypeScript · Node.js

---

## Documentation
 
| Document | Contents |
|---|---|
| [`PLAN.md`](PLAN.md) | Roadmap, phase status, tool decisions, and what is deliberately not being built |
| [`JOURNAL.md`](JOURNAL.md) | Dated decision log, appended as the work happens |
| [`docs/architecture.md`](docs/architecture.md) | Target AWS architecture and the cost reasoning behind it |
| [`docs/starting-stack.md`](docs/starting-stack.md) | Why the pre-migration stack was chosen |
 
---

## About this project
 
Built to demonstrate SDET and DevOps skills across the full quality-engineering stack.
Some tooling here is deliberately more than a site this size needs, because the point is
hands-on experience in a realistic context rather than a minimal solution.
 
Where that trade is made, it is stated. `PLAN.md` has a section on what is deliberately
not being built and why, including the parts where the impressive-looking option was the
wrong one. If you have anyquestions, send me a message on Linkedin (https://www.linkedin.com/in/yuriy-safronnynov/)