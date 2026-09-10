# Journal
 
Dated record of decisions made during this project, in the order they were made.
 
`README.md` is the present, what the system is. `PLAN.md` is the future, what is coming.
This is the past.
 
---
 
## Rules
 
**Append only.** Entries are never edited after the fact, and including the one that turn
out to be wrong. When a decision is reversed, a new entry says so and links back to the
original. A history containing only correct decisions is either fiction or hindsight, and
it teaches nobody anything, including me. No exceptions
 
**Written when the decision is made,** not at the end of the week. (I'll try to keep them up
to the date) The reasoning is vivid for about an hour and then compresses into "I picked X." 
The part worth keeping is the alternative I rejected and the thing I was unsure about, and 
that is what evaporates first. I'll try to keep it clean
 
**Not a diary.** An entry is worth writing when:
 
- a decision closes off an alternative that was genuinely open
- something breaks and the fix is not obvious
- a previous decision turns out to be wrong
- a cost or a measurement comes in different from the estimate
- I feel like writing one
- I didn't forget
Routine work that went as planned does not get an entry. Padding makes the real ones
harder to find.
 
---

## Entries
09/07/2026 - Documentation and planning. Strategy over Tactics. I already know which AWS tools 
I want to use, for now.  EC2, IAM, CloudFront, S3, SES, Lmbda, Stepfunction, Budgets, Terraform, 
EventBridge, security groups, logs

09/08/2026 - Chose IAM Identity Center over a plain IAM user for admin access. Both work, but a plain IAM user means permanent access keys sitting in ~/.aws/credentials, and Terraform runs with whatever credentials it finds. Identity Center gives an 8 hour session instead, refreshed with
`aws sso login`. Nothing long-lived on the laptop. Of course added groups and users. Gotta share
that root.

09/10/2026 - Hiccup with old user for aws, since I am using sso, just simply deleted all old 
credentials and set up SSN for anomaly detection