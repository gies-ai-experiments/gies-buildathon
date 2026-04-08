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

## Session Log

### 2026-04-08
- Completed: Reframed April 10 kickoff as info session — "AI Agents: What's Possible and How You Can Get Involved." Updated agenda: Adam/Vishal 15min, Jake Myers 30min, Q&A 15min. Less committal framing given short lead time.
- Completed: Added champion sign-up Google Form link (replaced CHAMPION_FORM_URL placeholder).
- Completed: Generated HTML email version of invite for Outlook paste (docs/invite-project-champions.html).
- Completed: Branding fixes — replaced UIUC with "University of Illinois" / "U of I" throughout site and meta tags.
- Completed: Removed custom circle cursor entirely for accessibility (standard arrow now).
- Completed: Clarified ownership in footer — "An initiative of DSRS at Gies College of Business" with partner attributions.
- Completed: Added contact email (vishal@illinois.edu) to footer.
- Completed: Updated Zoom registration description for info session framing.
- Next: Send champion invites. Fill Project Champion names by track. Add workshop materials as sessions happen.

### 2026-04-07 (session 2)
- Completed: Added keynote section to website — Paul Hsu (Decasonic), "The Modern VC Firm: AI Teammates, Augmentation, and Why Builders Win," headshot, LinkedIn link, 6:15-7:00 PM Thu April 23. Updated schedule with keynote details, 4:30 PM faculty session, and Decasonic contacts.
- Completed: Updated champion invite — short URL (go.gies.illinois.edu/ai-challenge), dates in Meals section, champion form CTA placeholder (CHAMPION_FORM_URL).
- Completed: Page load optimization — converted all images to WebP (2.3MB → 280KB, 88% reduction), added lazy loading, preloaded hero image.
- Completed: Fixed 15 UI/UX issues from frontend audit — duplicate workshop card, WCAG contrast (white-50→white-65), cursor:none safety, FAQ truncation, focus-visible outlines, consolidated scroll handlers, particle system mobile optimization, CSS Grid for tracks, mobile menu Escape key, dead code removal.
- Carry-forward: Champion form URL placeholder (CHAMPION_FORM_URL) needs real Google Form link once branching is set up.
- Next: Send champion invites. Fill Project Champion names by track. Add workshop materials as sessions happen.

### 2026-04-07 (session 1)
- Completed: Revised project champion invitation — renamed orientation to "Shape the Challenge — Champion Kickoff," added two-part agenda (Vishal overview + Jake demo), reframed Copilot Studio as student-built prototypes that help staff evaluate whether to pursue broader access, added Zoom registration link, shared champion role pitch, and website link.
- Completed: Added Workshop 06 (Build-a-Thon Info Night, Wed April 22) to landing page with Luma RSVP link, synced from live site at build-a-thon.dsrs.illinois.edu.
- Website URL: https://build-a-thon.dsrs.illinois.edu/

### 2026-04-04
- Completed: Set up Google Doc → GitHub markdown sync workflow. Pulled full event schedule via Chrome browser automation (published URL + read_page). Created `docs/` folder with schedule.md, invite-project-champions.md, and resources.md.
- Completed: Reviewed event schedule for coherence issues. Fixed 6 items across Google Doc and schedule.md: Room TBD → Deloitte, 6→5 finalists, 3→5 tracks in judges section, removed stale Day 2 room note, restructured Opening Ceremony timing, assigned Day 2 rooms (BIF 1049 for champions, 3001/3003 for hacking).
- Completed: Created project champion invitation with 3 participation options (propose challenge, mentor, or both), April 10 orientation with Jake Myers (CIO), no-commitment framing, Copilot Studio value prop, and clear "no real data" messaging.
- Completed: Removed judge appreciation from budget (staff judges), updated subtotals ($850→$600 misc, $2350→$2600 reserve), total stays $15K.
- Completed: Created resources page with all 5 workshop topics, Luma RSVP links, and Microsoft Copilot Studio playlist.
- Next: Fill Project Champion names by track. Confirm keynote speaker. Add workshop materials as sessions happen. Update landing page with schedule details if needed.
