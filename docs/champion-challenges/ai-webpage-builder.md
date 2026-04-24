# Challenge: AI-Assisted Webpage Builder

**Champion:** Lindsey Halfar (Marcom) · lsavoie@illinois.edu
**Submitted:** 2026-04-09
**Suggested track:** Marketing & Sales (also viable as Business Technology)
**Build platform:** Microsoft Copilot Studio

---

## Pain point

A marketing + web team builds and maintains pages using a pre-approved set of modular components (hero banners, text blocks, image sections, calls-to-action, cards, etc.). These components keep the brand consistent but every page is assembled by hand.

Two intake scenarios eat the most time:

**Scenario 1 — Copy is fully provided.** A stakeholder hands over finished web copy. The web manager still has to decide which components to use, in what order, and manually map the content into each one.

**Scenario 2 — Only bullet points or notes are provided.** The web team has to expand the inputs into full web copy *and* choose the layout. Multiple rounds of iteration follow.

Today's tools: the CMS + an internal component library + email/docs for intake.

**Cost:** Hours to days per page. Teams manage dozens to hundreds of pages with similar structure, rebuilt manually each time.

---

## Build in Copilot Studio

An agent that takes messy marketing input (copy *or* bullets) and produces a **structured page built from approved components** — plus a handoff artifact the web team can actually use.

### MVP (must ship)

- [ ] Accept both input modes: finished copy **and** bullets/notes
- [ ] Know a catalog of approved components (~8-10) and their required fields
- [ ] For Scenario 1: recommend an ordered component layout and map content into each slot
- [ ] For Scenario 2: expand bullets into on-brand web copy, *then* do the Scenario 1 flow
- [ ] Produce a usable output the web team can hand off (see "Output format" below)

### Stretch goals (pick 1-2)

1. **UX / accessibility / SEO / AEO review pass** (Lindsey flagged as bonus)
2. **Component rule enforcement** — e.g., "hero must be first," "max 2 CTAs per page," required alt text on images
3. **Alt text + imagery suggestions** for image components
4. **Multiple layout variants** for the same content (A/B options)
5. **Direct CMS publish** — only if the CMS exposes a Power Automate connector or API

---

## Output format: pick with the champion

Copilot Studio can't render live HTML in its chat canvas. Before you start building, **talk to Lindsey** about which of these handoff artifacts would actually fit her team's workflow. Ship one as MVP; more as stretch.

1. **Adaptive card mockup in chat** — components stacked visually (hero card → text → CTA button). Strongest in-demo visual, closest to "seeing the page."
2. **Markdown or JSON page spec** shown in chat — structured component + content, copyable.
3. **File written to SharePoint / OneDrive** — JSON or Word doc the web team imports into the CMS.
4. **Email to the web manager** with the structured spec as the body.
5. **Row in a SharePoint list / Excel / Dataverse table** — one row per generated page, becomes the team's build queue.
6. **Task in Asana** with the spec attached, if Marcom already lives in Asana for web work.

A strong judge-facing demo often combines **#1 (visual preview) + one of #3-6 (real handoff artifact)**.

---

## Client-facing questions to resolve first

Before writing any topics, schedule a short conversation with Lindsey to lock these down:

1. **Which CMS** does the team use? Is there an API or Power Automate connector, or should the deliverable stop at an exportable spec?
2. Can she share the **real component catalog** — even a stripped-down list of 8-10 with field specs? Dramatically raises MVP fidelity.
3. Any **brand voice guide or 2-3 example pages** students can use as few-shot prompts?
4. Which **output format** from the list above would actually plug into her team's workflow?

Treat this like a real client engagement — the answers shape the whole build.

---

## Why this is a good hackathon challenge

- Tight scope: the component catalog is a natural guardrail
- Plays to generative AI's strengths (copy expansion, structured mapping to a schema)
- Real handoff artifact — not a toy — because the team already has a workflow waiting for it
- Stretch goals are visibly ambitious (accessibility, rule enforcement, CMS publish) without being mandatory

## Judging angle

- **MVP demo:** fed bullets → watched the agent produce on-brand copy → saw the page laid out visually → handed the judge a real artifact the web team would use
- **Stretch:** showed the agent enforcing rules, flagging accessibility issues, or publishing end-to-end

## Out of scope / watch-outs

- Live responsive HTML preview at multiple breakpoints (needs a companion Power App or web surface — big time sink)
- Generating or editing images
- Full CMS publish unless the CMS has a reachable connector
