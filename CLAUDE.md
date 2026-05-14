# Gies Buildathon Landing Page

## Project Overview
Landing page for the Gies Buildathon, a 24-hour hackathon for Gies undergrad and grad students at UIUC. April 2026.

## Tech Stack
- Single-file HTML with inline CSS and JS
- Google Fonts: Source Sans 3, Montserrat, Open Sans Condensed (official Gies brand fonts)
- Font roles: Headlines & Body → Source Sans 3, Emphasis → SuperFly/Montserrat, Stats → Chronicle Black/Georgia
- No build tools or frameworks
- UIUC/Gies branding: Illini Navy (#13294B) + Illini Orange (#E84A27)

## Tracks
1. Finance & Accounting (2-3 judges)
2. HR (2-3 judges)
3. Marketing & Sales (2-3 judges)
4. Business Technology (2-3 judges)
5. General Innovation

## Google Doc Sync
- Source of truth: [Google Doc](https://docs.google.com/document/d/1L4nE5Nreyt5blD5H4unl8uO9mWhOZmp7uPNCq6O_5Ec/edit?tab=t.0)
- Published URL (for pulling): [Published](https://docs.google.com/document/d/e/2PACX-1vQA6JPrlzXT9qtSzV9_DMcpuSn2QfCuTSqJtM_mpjvOjf50xKDBYvF0oHauEBgHZEQ_T2o7dKlPUzGZ/pub)
- Workflow: Team edits Google Doc → "pull the schedule" syncs to `docs/schedule.md` via Chrome read_page on published URL
- One-way sync (Doc → repo). Published version auto-updates every 5 minutes.

## Docs
- `docs/schedule.md` — Full event schedule, room bookings, budget, judging criteria (synced from Google Doc)
- `docs/invite-project-champions.md` — Staff invitation for project champions (3 participation options)
- `docs/resources.md` — Workshop materials, Copilot Studio playlist, judging rubric
- `docs/README-workshop-slides.md` — Editor guide for Slidev decks (for Jeremy and organizers)
- `docs/workshop-activity-i-do-you-do.md` — Facilitator script for I Do / You Do workshop
- `docs/slides-mental-model/` — Slidev deck: Copilot Studio mental model (7 slides)
- `docs/slides-workshop-activity/` — Slidev deck: Workshop activity (10 slides)

## Workshop Slide URLs
- Mental Model: https://gies-ai-experiments.github.io/gies-buildathon/docs/slides-mental-model/dist/index.html
- Workshop Activity: https://gies-ai-experiments.github.io/gies-buildathon/docs/slides-workshop-activity/dist/index.html

## Reference Material
- `reference_material/microsoft-copilot-studio.pdf` — Full MS Learn docs (1,778 pages)
- `reference_material/PDF-INDEX.md` — Indexed sections with page ranges and relevance
- `reference_material/Gies AI for Impact_...csv` — Champion challenge submissions

## Champion Chat Bot
- **Live URL:** https://champion-chat-swart.vercel.app
- **Deploy:** `cd champion-chat && npx vercel --prod`
- **Env:** OPENAI_API_KEY set in Vercel production
- **Submissions:** Logged to Vercel function logs (filter `/api/submit`). Google Sheets webhook attempted but university account blocks it.

## Session Log

### 2026-05-13
- Completed (impact report, in `docs/impact-report/`):
  - `f317b8a` Adam King affiliation fix ("in Finance" → "from Gies Innovation & Transformation") and "Disruption Lab at Gies" → "Gies Disruption Lab"; added titles/companies for four judges (Kinsey/Illinois Ventures, Chakravarty/Synchrony VP Performance Insights, Bolat/KPMG Ignition, Moran/Bayer) and updated Sid's reflection attribution.
  - `ef05be8` Locked down PII (`docs/impact-report/*.csv` to `.gitignore`) and folded 14/72 survey responses into a new "What Students Told Us Privately" section (9.0/10 recommend, 85% understand AI agents for real workflows, 78% feel prepared, 78% responsible-AI literacy, 71% no-code/low-code; 3 anonymized pull-quotes from 13/14 who consented) plus a "What We'll Change" section calling out overnight mentor coverage, foundational Copilot Studio onboarding, and start-time format.
  - `82be87d` Amber Glynn credited as Skylar Zhang's co-champion on the General Innovation (Career Navigator) track.
  - `e7ffafe` Faculty & Staff Leadership row: removed Dean Brooke Elliott (still quoted prominently in Strategic Alignment), added Jake Myers + Vishal Sachdev. New "Additional Challenge Submissions" credit + paragraph naming Andrew Allen, Ravi Mehta, Martin Maurer as iteration-#2 backlog.
  - `c469e3a` Ken Magrow credited as Charlie Farhoodi's co-champion at Magelli (Marketing & Sales track).
  - `53472ed` Sponsoring Organizations line now links Agentic AI @ UIUC, Gies Disruption Lab, Magelli Office of Experiential Learning, and DSRS to their canonical home pages.
- Completed (comms): sent reminder email to 72 students via Outlook (BCC, Ash CC'd at `ashleyn4@`) with stronger digital-badge hook; composed leadership impact-report email in Outlook (recipients filled in manually) using github.io URL.
- Completed (infra): promoted `applescript-outlook-bulk-bcc` memory from project scope to **global** (`~/.claude/memory/reference-applescript-outlook-bcc.md`) and extended the global `compose-outlook-email` skill (`~/.claude/skills/compose-outlook-email/skill.md`) with `**Bcc:**` header support, a `bcc_recips` block in the Python helper, and a new "Bulk Bcc" section covering the xlsx-to-emails one-liner.
- Discovery: `build-a-thon.dsrs.illinois.edu` is a separate nginx mirror of the GitHub Pages site, not a CNAME — its impact report is stuck at the May 8 snapshot. Today's edits live only on `gies-ai-experiments.github.io/gies-buildathon/`. No sync command documented; likely needs a manual ping to Matias Carrasco Kind / DSRS to refresh.
- Next: Ping DSRS to refresh the `build-a-thon.dsrs.illinois.edu` mirror so the branded URL stops diverging from the canonical github.io copy. Re-run survey numbers + refresh "What Students Told Us Privately" after the May 15 survey close. Decide how to address the q13 #12 diversity comment — needs an action, not just a bullet, before any public mention. Champions / mentors+judges feedback bot still on the table (likely fork of `champion-chat`); paused per user. BuildIllinois canonical URL still TBD — Sponsoring Organizations line keeps it as plain text until then.

*Older entries archived to `docs/session-archive.md`*
