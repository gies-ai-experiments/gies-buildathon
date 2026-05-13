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
- Completed: Verified impact-report URL live + 8→14 survey responses in. Two report fixes pushed in `f317b8a`: Adam King's affiliation "in Finance" → "from Gies Innovation & Transformation"; "Disruption Lab at Gies" → "Gies Disruption Lab"; judges credit line now carries titles + companies (Kinsey/Illinois Ventures, Chakravarty/Synchrony VP Performance Insights, Bolat/KPMG Ignition, Moran/Bayer); Sid's reflection attribution updated to match. Sent reminder email to 72 students via Outlook (BCC, Ash CC'd at ashleyn4@) with stronger hook (digital LinkedIn badge incentive). Locked down PII: added `docs/impact-report/*.csv` to `.gitignore` so the raw form export stays out of git. Folded survey data into the report — new "What Students Told Us Privately" section (6 headline stats incl. 9.0/10 recommend, 85% understand AI agents for real workflows, 78% prepared for AI in work/coursework) + 3 anonymized pull-quotes (only from the 13/14 who consented in q22) + new "What We'll Change" section calling out overnight mentor coverage, foundational Copilot Studio onboarding, and start-time format. Pushed in `ef05be8`. AGENTS.md confirmed already tracked (stale note in last session log was wrong).
- Next: Re-run survey numbers + refresh the section after the May 15 close. Decide how to address the diversity comment in q13 (#12) — deserves an action, not just a bullet, before going on a public page. Champions/mentors+judges feedback bot still on the table (likely fork of `champion-chat`); paused this session per user.

*Older entries archived to `docs/session-archive.md`*
