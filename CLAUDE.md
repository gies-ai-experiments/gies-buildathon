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

### 2026-06-02
- Completed (public reframe, survey now closed — no more responses expected): flipped both public surfaces to post-event for a Gies Marcom story that will link the impact report.
  - `b64fba7` `index.html` — hero now "EVENT COMPLETE" eyebrow + 72/22/24/5 stat band (was live time window + $500 scholarship CTA); primary button "Read the Impact Report"; nav (desktop + mobile) leads with an Impact Report link; meta/OG rewritten past-tense + stats-forward; How It Works → past tense; Workshops "RSVP on Luma" → "View on Luma"; FAQ future-tense promises neutralized. `docs/impact-report/index.html` — added "EVENT COMPLETE · April 23–24, 2026" eyebrow + navy stat band under the title.
- Corrected the 2026-05-13 DSRS mirror discovery (it was wrong): `build-a-thon.dsrs.illinois.edu` **auto-syncs fine** — it picked up the push within minutes (last-modified matched). The real problem: the mirror builds from this repo's **`Dockerfile`**, which only copies `index.html`, `champion-chat.html`, `assets/` — never `docs/`. Combined with `nginx.conf`'s `try_files … /index.html` fallback, every deeper path (incl. `/docs/impact-report/`) silently served the **homepage**. So the "Read the Impact Report" link is broken on the DSRS domain.
  - `44e2088` Fix: Dockerfile now `COPY docs/impact-report/index.html ./docs/impact-report/` — only that one self-contained HTML file, deliberately leaving the gitignored PII feedback CSV, the PDFs, and `teams.xlsx` out of the public image. **Not build-tested** (no Docker runtime on this machine); asked Matias to `docker build` + verify `/docs/impact-report/` serves the report (title "Build to Learn, Learn to Build") before the mirror redeploys.
- Next: Confirm Matias rebuilt/redeployed the mirror and `build-a-thon.dsrs.illinois.edu/docs/impact-report/` now serves the report (Marcom will link this exact URL — blocking on it before they publish). Get the Marcom story publish date to gauge urgency. Decide how to address the q13 #12 diversity comment — needs an action, not just a bullet, before any public mention. Champions / mentors+judges feedback bot still on the table (likely fork of `champion-chat`); paused per user. BuildIllinois canonical URL still TBD.

*Older entries archived to `docs/session-archive.md`*
