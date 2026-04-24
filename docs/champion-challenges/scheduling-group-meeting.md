# Challenge: Group Meeting Scheduler

**Champion:** Andrew Allen (SCC) · andrewa@illinois.edu
**Submitted:** 2026-04-09
**Suggested tracks:** Business Technology, General Innovation
**Build platform:** Microsoft Copilot Studio

---

## Pain point

Scheduling a 45-minute meeting across four or more people is currently a multi-day, manual process. Andrew's team routes requests through administrative assistants, who then coordinate with the admins of other attendees (or the attendees directly) over email. Problems compound when:

- The first shared open slot is 3-4 weeks out
- One attendee doesn't use Outlook
- Calendars don't align and people have to negotiate moving existing meetings

Today's tools: Outlook calendar, email, MS Teams messaging.

**Cost:** Days of admin time per meeting; work blocked 2-3 weeks waiting for a slot.

---

## Build in Copilot Studio

An agent that takes meeting parameters in natural language and **schedules the meeting** — not just reports availability.

### MVP (must ship)

- [ ] Conversational intake: attendees, duration, window (e.g., "next 2 weeks"), in-person vs. virtual
- [ ] Query attendee free/busy via **Microsoft Graph → `findMeetingTimes`**
- [ ] Return top 3 proposed slots, ranked by fit (earliest, most in-person, fewest conflicts)
- [ ] User picks one → agent sends the Outlook invite on their behalf
- [ ] Support the "admin scheduling for their exec" case via delegated permissions

### Stretch goals (pick 1-2)

1. **Non-Outlook attendees** — agent generates a poll link (Forms / Doodle-style) and emails externals, then merges their responses with internal free/busy data.
2. **Conflict negotiation** — when no shared slot exists in the window, agent flags movable meetings (recurring 1:1s, blocks without invitees) and drafts "can we move this?" messages to owners.
3. **Room booking** — add in-person conference-room availability via Graph `places` API.
4. **Priority-aware ranking** — score slots by attendee seniority / meeting criticality.

---

## Why this is a good hackathon challenge

- **Clear pain**, felt by anyone who schedules meetings
- **Real APIs exist** (Microsoft Graph `findMeetingTimes`, calendar events, places)
- **MVP is tight**: ~2-3 Copilot Studio topics + Graph actions
- **Stretch goals are visible** — judges can see the gap between "availability lookup" (what Outlook already does) and "agentic scheduling" (what this builds)

## Judging angle

- **MVP demo:** scheduled a real meeting end-to-end in under 60 seconds
- **Stretch:** demonstrated agentic behavior (external coordination, conflict negotiation) beyond what Outlook's built-in scheduling assistant does today

## Out of scope / watch-outs

- Full multi-tenant external scheduling (would need OAuth flows for Google Calendar etc. — too much for 24 hrs)
- Auto-moving other people's meetings without permission (surface suggestions, don't execute)
- Persistence beyond a single scheduling session (MVP can be stateless)
