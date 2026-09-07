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


### The reasoning
Some decidions are not yet complete.

## Why AWS
 
Better pricing and tiering. I pay per resource and size each one myself instead of buying
a bundled dyno tier, and most of what this project needs falls inside always-free
allowances. Beyond price, everything is measurable and attributable, and the service range
covers what I will want to add later without changing platform again.

## Why these tools
 
| Tool | Why |
|---|---|
| EC2 | More control over what I run. I manage the infrastructure. |
| Docker | One artifact across dev, CI, and production. Consistency. |
| Database | Not yet decided. Depends on the features I add. |
| CloudFront + ACM | TLS that renews itself, caching, edge security headers, origin not directly reachable. |
| S3 | Static files, media, backups, test reports. Uploads survive a restart. |
| SSM Parameter Store | Config and secrets. Versioned, IAM-scoped, and every read is auditable. |
| SSM Session Manager | Shell access with no open SSH port, no keys, and sessions logged. |
| GitHub Actions + OIDC | I am familiar with it and I do not need an extra layer |
| Terraform | All infrastructure. Rebuildable from code, reviewable as a diff. |
| SES | Email, with bounce and complaint handling I control. |
| CloudWatch | Host-level metrics, logs, and alarms in one place. |
| Lambda | Small jobs that do not need a server sitting there. Sending the newsletter, handling bounces, scheduled work. |
| EventBridge Scheduler | Runs the newsletter and any other recurring job on a schedule. |
| SQS | Holds newsletter sends in a queue so a big batch does not tie up the web server. |
| SNS | Tells me when mail bounces or gets a complaint, so the list stays clean. |
| ECR | Stores the container image the pipeline builds. |
| IAM | Roles and permissions. |
| CloudTrail | Records every API call, so I can see what changed and when. |
| Budgets + Cost Anomaly Detection | Alerts me on spend before it turns into a surprise. |
| CloudWatch | Runs the login journey every hour and tells me if the site breaks between deploys. |
| Data Lifecycle Manager | Takes EBS snapshots on a schedule. |
| Route 53 | DNS, if I move it off the registrar. Still deciding. |
 
---

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

| Not doing | Why |
|---|---|---|
| EKS in production | $73/month control plane to schedule three containers that never need rescheduling |
| Load balancer | $16/month, more than the instance it would front |
| Heroku as staging | CI provides the same thing free and closer to production |
| Multi-AZ, autoscaling | No availability requirement that justifies the cost |
| AWS WAF | ~$8/month, would nearly double the bill |
 
---
