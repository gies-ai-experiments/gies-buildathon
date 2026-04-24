# Challenge: Campaign Ops Agent

**Champion:** Lindsey Halfar (Marcom) · lsavoie@illinois.edu
**Submitted:** 2026-04-09
**Suggested track:** Marketing & Sales
**Build platform:** Microsoft Copilot Studio

---

## Pain point

A marketing team manages multiple paid media campaigns at once, each tied to a different program or product, each with its own budget, timeline, channels, and creative specs. Two steps eat the most time:

1. **Translating agency media plans into internal tasks.** Plans arrive from an external agency as docs/spreadsheets. Someone on the team manually re-keys tactics, deadlines, and asset specs into Asana, Airtable, and a budget sheet.
2. **Keeping tabs on dozens of in-flight assets.** Each campaign has 5-25 tactics. Across several campaigns that's hundreds of active assets. Status tracking, deadline reminders, and "what's at risk?" checks are all manual.

Today's tools: Asana, Airtable, budget spreadsheets, email, agency-provided plans.

**Cost:** Several hours per week *per campaign* on coordination alone. Missed deadlines delay launches and waste ad spend.

---

## Build in Copilot Studio

A single campaign operations agent that handles **both the intake of new campaigns and the ongoing monitoring** of work already in flight.

### MVP (must ship)

- [ ] **Intake**: paste or upload an agency media plan → agent extracts campaigns, tactics, asset specs, and deadlines
- [ ] **Task creation**: agent writes structured tasks into Asana (or Airtable) with owners, due dates, and asset requirements
- [ ] **Status check**: user asks "what's the state of the Spring MBA campaign?" → agent queries Asana and summarizes in-progress / blocked / approved assets

### Stretch goals (pick 1-2)

1. **Deadline nudges** — agent DMs or emails asset owners when an item is X days from due and not yet "approved"
2. **Risk digest** — weekly "what's at risk this week" summary: overdue assets, blocked approvals, campaigns without creative ready for launch
3. **Smart intake** — handle messy inputs (PDF, email thread, Word doc) not just clean tables
4. **Approval routing** — agent owns the "ping stakeholder for approval" loop end-to-end

---

## Why this is a good hackathon challenge

- **Single agent, full loop**: intake flows into the same data the agent later monitors — natural demo arc
- **Lindsey flagged "translating agency plans into internal tasks" as the #1 time sink** — MVP targets that directly
- **Real integrations with reachable APIs**: Asana has a mature REST API; Airtable has a native Copilot Studio connector
- **Stretch goals visibly elevate it** from "task creator" to "campaign operations agent"

## Judging angle

- **MVP demo:** uploaded a real agency media plan → fully populated Asana project in under 2 minutes
- **Stretch:** showed the agent operating on its own data afterward — closing the loop from intake → ongoing ops → risk surfacing

## Out of scope / watch-outs

- **Performance data aggregation** from ad platforms / Google Analytics — originally part of Lindsey's submission but split out; belongs in a separate challenge if there's student appetite
- **Auto-creating creative assets** — different problem (generative design), not this agent
- **Budget reconciliation** — agent can read budgets but shouldn't modify the budget spreadsheet in MVP
