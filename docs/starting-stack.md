## Before the migration: why I picked what I picked

Before I explain what I am changing, I should explain what I built first and why. Some of
these were real decisions. Some of them were just picking something that works and has a
large knowledge base behind it and I would rather say that than invent a reason after
the fact.

### Heroku

The choice for Heroku was its simplicity. A PaaS, when I was starting, was the best
choice. Easy to set up, easy to access, easy to manage. I did not plan for a big
application, just something that works for me. Scalability, access, and reliability came
out of the box and I did not have to think about any of them.

### Django

Django is based on Python and I have been working with Python since 2017.
I thought it would be the best way to start. Batteries included, so auth, admin, ORM, and
migrations were there on day one instead of things I had to assemble.

### Gunicorn and Whitenoise

Gunicorn 23.0.0 as the WSGI server, Whitenoise 6.11.0 for static files. Industry standard,
and both are in almost every Django deployment guide you will read.

Whitenoise in particular made sense for Heroku specifically. There is no persistent
filesystem and no Nginx to configure, so, obvious, serving static files from the application itself
removed a whole layer I would otherwise have had to run. It is the right answer on a
platform where you do not control the web server.

### SQLite, then Postgres

SQLite was the built-in database with Django. For a small project I thought it would be a
good choice. A small database, no files, only text entries, and a few GB was more than
enough.

I moved to Postgres as practice. 2 GB of free storage was more than enough for what I
have, and connecting to it and managing it was more fun. That is the honest reason. I
wanted the reps.

### Frontend

Server-rendered Django templates, no SPA framework. Vanilla JavaScript, no React or Vue,
no build step. For a site that is mostly pages of text, a frontend build pipeline would
have been more infrastructure than the problem needed. I also had experience writing, 
editing and supporting such apps

Chart.js is vendored, for the progress charts. SortableJS is vendored, for the board's
drag and drop. Neither of those was a real decision. I needed charts and I needed drag
and drop, both libraries do the job, both have enough documentation and enough Stack
Overflow answers that I would not get stuck. That was the whole evaluation.

### Sessions and auth

Django's built-in auth plus a custom `authorization` app for the parts that did not fit.
Signed-cookie sessions better than a server-side session store, so there is no session
table to manage and no extra service to run. At my user count there is nothing to gain
from doing it any other way. Anyway only 3 people using dashboard part of the app

Email is on the console backend. No real SMTP provider is configured yet, so mail prints
to the log instead of being sent. That is fine while nothing needs to send mail, and it
is one of the things the migration changes.

---

None of the above was wrong. It was right for the stage I was at, which was one person
getting a working site online without spending money or time on decisions that did not
matter yet, on a weekends

What changes now, and why, is in [`PLAN.md`](PLAN.md). The short version is that the
constraint has shifted, I want more options. I want to be able to architect the whole cloud
infra. I am no longer optimizing for "get it online fast," I am optimizing for owning the infrastructure and being able to explain every layer of it.