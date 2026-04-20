# Gies AI for Impact Challenge

**Agentic AI Build-a-Thon** — A 24-hour innovation competition for Gies College of Business students at the University of Illinois Urbana-Champaign.

**Live site:** [landing-page-woad-pi-94.vercel.app](https://landing-page-woad-pi-94.vercel.app)
**Champion Chat:** [champion-chat-swart.vercel.app](https://champion-chat-swart.vercel.app)

---

## About

The Gies AI for Impact Challenge brings together undergraduate and graduate students from Gies College of Business to build AI-powered solutions to real business problems. Over 24 hours, teams compete across five focused tracks, working alongside industry mentors and presenting to expert judges.

### Competition Tracks

| Track | Description |
|-------|-------------|
| Finance & Accounting | Reimagine financial workflows and automate accounting processes |
| HR | Solutions for talent acquisition, employee experience, and workforce analytics |
| Marketing & Sales | Tools for customer engagement, analytics, and go-to-market strategies |
| Business Technology | Infrastructure, automation, and enterprise solutions |
| General Innovation | Open track for bold ideas that defy categories |

---

## Repository Layout

```
gies-buildathon/
├── index.html                  # Main landing page (single-file HTML + CSS + JS)
├── champion-chat.html          # Standalone champion-chat page (static)
├── champion-chat/              # Next.js app for the Champion Chat bot
│   ├── app/
│   │   ├── api/                # Chat, lookup, submit, rate-limit routes
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── public/
│   └── package.json
├── api/                        # Express/Node API (server.js, system-prompt.js)
├── assets/
│   ├── images/                 # Hero/background images (.png, .jpg, .webp)
│   └── logos/                  # Sponsor/partner logos (.png, .webp)
├── docs/                       # Event docs, schedules, and slide decks
│   ├── schedule.md             # Full event schedule (synced from Google Doc)
│   ├── resources.md            # Workshop materials and rubric
│   ├── invite-project-champions.md
│   ├── communication-templates.md
│   ├── workshop-activity-i-do-you-do.md
│   ├── slides-mental-model/    # Slidev deck: Copilot Studio mental model
│   └── slides-workshop-activity/  # Slidev deck: Workshop activity
├── reference_material/         # Microsoft Copilot Studio PDF + champion submissions
├── transcripts/                # Planning meeting transcripts
├── .github/workflows/pages.yml # GitHub Pages deploy workflow
├── Dockerfile                  # Container image for the API/landing
├── nginx.conf                  # Nginx config used inside the container
├── entrypoint.sh
└── CLAUDE.md                   # Project context for Claude Code sessions
```

---

## Components

### 1. Landing Page (`index.html`)
Single-file HTML with inline CSS and JavaScript. No build step. Features:
- Animated hero with typewriter effect and parallax
- Scroll-triggered reveal animations and card tilt effects
- Custom cursor glow trail and particle-system background
- Responsive, mobile-first layout
- Accessible FAQ accordion
- Nav + mobile Apply CTAs wired to the unified Google Forms application link

### 2. Champion Chat (`champion-chat/`)
A Next.js 15 / React 19 app that lets project champions describe challenges through a guided chat, validates submissions, and emails results to organizers.
- `app/api/chat` — streaming chat with the champion-intake system prompt
- `app/api/lookup` — looks up prior submissions
- `app/api/submit` — logs submissions and triggers email notifications via Resend
- `app/api/rate-limit.ts` — simple per-IP rate limiting

### 3. API (`api/`)
A lightweight Node/Express server (`server.js`) that mirrors the champion-chat behavior for non-Next deployments, using the shared system prompt in `api/system-prompt.js`.

### 4. Workshop Slide Decks (`docs/slides-*`)
Two Slidev decks built from `slides.md` and published to GitHub Pages:
- **Mental Model** — [gies-ai-experiments.github.io/gies-buildathon/docs/slides-mental-model/dist/](https://gies-ai-experiments.github.io/gies-buildathon/docs/slides-mental-model/dist/index.html)
- **Workshop Activity** — [gies-ai-experiments.github.io/gies-buildathon/docs/slides-workshop-activity/dist/](https://gies-ai-experiments.github.io/gies-buildathon/docs/slides-workshop-activity/dist/index.html)

---

## Tech Stack

- **Landing page:** Plain HTML + CSS + JS (no framework)
- **Champion Chat:** Next.js 15, React 19, TypeScript 5, OpenAI SDK
- **API:** Node.js (ESM), Express-style handlers, OpenAI SDK
- **Slides:** Slidev (Vue-based)
- **Hosting:** Vercel (landing + champion-chat), GitHub Pages (slides), Docker/Nginx (optional self-host)
- **Branding:** Illini Navy `#13294B` + Illini Orange `#E84A27`; Source Sans 3, Montserrat, Open Sans Condensed

---

## Local Development

### Landing page
No build step required.
```bash
python3 -m http.server 8000
# or
npx serve .
```
Open <http://localhost:8000>.

### Champion Chat (Next.js)
```bash
cd champion-chat
npm install
cp .env.example .env.local   # if provided; otherwise create one
# Required env vars:
#   OPENAI_API_KEY=sk-...
#   RESEND_API_KEY=...        # optional, for email notifications
#   NOTIFY_EMAIL=you@example.com
npm run dev                   # runs on port 3001
```

### Standalone API
```bash
cd api
npm install
OPENAI_API_KEY=sk-... node server.js
```

### Slidev decks
```bash
cd docs/slides-mental-model        # or slides-workshop-activity
npm install
npx slidev                         # dev server
npx slidev build --base /gies-buildathon/docs/slides-mental-model/dist/
```

---

## Deployment

### Landing page → Vercel
```bash
vercel --prod
```

### Champion Chat → Vercel
```bash
cd champion-chat
npx vercel --prod
```
Set `OPENAI_API_KEY`, `RESEND_API_KEY`, and `NOTIFY_EMAIL` in the Vercel project settings.

### Slides → GitHub Pages
Pushed via `.github/workflows/pages.yml`. The built `dist/` directories under `docs/slides-*/` are served from the `gh-pages` site at `gies-ai-experiments.github.io/gies-buildathon/`.

### Self-host → Docker
```bash
docker build -t gies-buildathon .
docker run -p 8080:80 gies-buildathon
```
Uses `nginx.conf` + `entrypoint.sh`.

---

## Environment Variables

| Variable | Where | Purpose |
|----------|-------|---------|
| `OPENAI_API_KEY` | `champion-chat`, `api` | LLM calls for champion intake |
| `RESEND_API_KEY` | `champion-chat` | Email notifications for new submissions |
| `NOTIFY_EMAIL` | `champion-chat` | Destination for submission alerts |

Never commit `.env`, `.env.local`, or any file containing these values.

---

## Event Docs

- `docs/schedule.md` — Full event schedule, rooms, budget, judging criteria (synced from the source Google Doc)
- `docs/invite-project-champions.md` — Staff invitation for project champions
- `docs/resources.md` — Workshop materials, Copilot Studio playlist, rubric
- `docs/communication-templates.md` — Email/message templates for participants
- `docs/workshop-activity-i-do-you-do.md` — Facilitator script for the I-Do/You-Do workshop
- `reference_material/PDF-INDEX.md` — Indexed sections of the Microsoft Copilot Studio PDF

---

## Sponsors & Partners

- **Gies College of Business** — [giesbusiness.illinois.edu](https://giesbusiness.illinois.edu/)
- **Google** — [home.google.com](https://home.google.com/welcome/)
- **Agentic AI @ UIUC**
- **Disruption Lab**
- **DSRS**

---

## Contributing

This repository is maintained by the Gies AI for Impact organizing team. For content updates (schedule, resources), edit the source Google Doc and re-sync `docs/schedule.md`. For landing page or champion-chat changes, open a pull request against `main`.

---

## License

All rights reserved. Gies College of Business, University of Illinois Urbana-Champaign.
