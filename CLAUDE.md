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

## Session Log

### 2026-04-10
- Completed: Extracted Granola transcript from 2 PM staff meeting with CIO AI team (Jake Myers, Paul Traska). Saved to `transcripts/`.
- Completed: Researched and validated Copilot Studio mental model (Agent vs Workflow vs Agent Flow, building blocks: Knowledge, Topics, Tools, Flows). Indexed full 1,778-page MS Learn PDF with 4 subagents.
- Completed: Created two Slidev workshop decks — Mental Model (7 slides) + I Do / You Do Activity (10 slides). Deployed to GitHub Pages.
- Completed: Enabled GitHub Pages on repo (static deploy workflow). Created editor guide for Jeremy.
- Completed: Ingested 6 champion challenge submissions (Vishal, Charlie Farhoodi, Andrew Allen, Lindsey Halfar x2, Martin Maurer).
- Next: Scope champion challenges into hackathon-ready briefs with low floor / high ceiling tiers. Build rubric. Test Copilot Studio demo in browser. Get Magelli logo if available.

*Older entries archived to `docs/session-archive.md`*
