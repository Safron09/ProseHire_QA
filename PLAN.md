# Plan
 
Migrating yuriysafron.com from Heroku to AWS, containerizing it, and putting a QA run
between every commit and production.
 
`README.md` describes what exists. This file describes what is coming and why each
choice was made. `JOURNAL.md` records decisions as they happen, including the ones that
turn out to be wrong.
 
**Last updated:** 2026-09-07
**Current state:** live on Heroku, migration not yet started
 
---

## How the two repositories fit together
 
| Repo | Visibility | Owns |
|---|---|---|
| `yuriy_safronnynov_webapp` | Private | Django application, Dockerfile, unit tests |
| `YuriySafron_QA` | Public | Infrastructure, QA framework, delivery pipeline, these docs |
 
The application source is private. This repository holds the infrastructure,
containerization, testing, and delivery layers. I'll add a snapshot of the private repo and 
I'll make it public once all features are added
 
One artifact connects them. The app repo builds a container image tagged with the commit
SHA. This repo pulls that exact image and tests it. Production runs the same image, so
what passes CI is byte-identical to what serves traffic.


### The reasoning, one layer at a time
Some decidions are not yet complete.

**EC2 over a dyno.**

**Containers over buildpacks.**

**Self-hosted Postgres over Heroku Postgres.**
Not sure what DB I want. Project is in dvelopment, maybe it will be object, file or block

**CloudFront over the Heroku router.**

**S3 for static and media over the dyno filesystem.**
Herouks ephemeral filesystem - no, tnx

**Session Manager over `heroku run bash`.**

**Terraform over the console.**

**SES over an email add-on.**

**Ephemeral test environments over a staging server.**


## Approximate Phases
# Subject to edit
 
| # | Scope | Status |
|---|---|---|
| 1 | AWS account, certificates, mail domain | Not started |
| 2 | Containerize the application | Not started |
| 3 | Infrastructure as code | Not started |
| 4 | Cutover from Heroku | Not started |
| 5 | Delivery pipeline | Not started |
| 6 | QA pipeline and deploy gate | Not started |
| 7 | UI test coverage | Blocked on UI work |
| 8 | Observability and extras | Not started |


## Deliberately not doing


