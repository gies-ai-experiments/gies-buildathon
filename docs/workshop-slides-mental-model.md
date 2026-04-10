# Deck 1: Copilot Studio Mental Model (7 slides, ~10 min)

Target: Students at tonight's 7:30 PM workshop + reusable for hackathon day

---

## Slide 1: What is Copilot Studio?

**Title:** Microsoft Copilot Studio — Your Agent Builder

- Microsoft's low-code platform to build AI agents and automations
- You describe what you want in plain language, AI helps build it
- Already connected to your Microsoft 365 data (Outlook, Teams, SharePoint, Excel)
- Access at: copilotstudio.microsoft.com

**Visual:** Screenshot of Copilot Studio home page showing "What would you like to build?" with Agent | Workflow tabs

---

## Slide 2: Two Things You Can Build

**Title:** Agent or Workflow — Pick Your Path

| | Agent | Workflow (Agent Flow) |
|---|---|---|
| **What** | Chat interface that knows things and does things | Automation that runs on a trigger |
| **Trigger** | User asks a question | Schedule, event, manual, or called by an agent |
| **Think of it as** | A smart assistant you talk to | A recipe that runs automatically |
| **Example** | "What's our PTO policy?" → answers from HR docs | Every Monday 8am → summarize my unread emails |

**Key insight:** An agent can trigger a workflow mid-conversation. That's where it gets powerful.

---

## Slide 3: Inside an Agent — The Building Blocks

**Title:** What Makes an Agent Smart?

```
YOUR AGENT
│
├── Instructions    → "You are a helpful Gies advisor. Be professional."
│                     (personality, rules, guardrails — up to 8,000 chars)
│
├── Knowledge       → Websites, SharePoint, uploaded files
│                     (the agent reads these to answer questions)
│
├── Topics          → Structured conversation paths
│                     (if user says X → ask Y → branch on answer)
│
├── Tools           → Single-step connectors to other systems
│                     (send email, read Excel row, post to Teams)
│
└── Agent Flows     → Multi-step automations the agent can trigger
                      (collect info → look up data → create task → notify)
```

**You don't need all of these.** Knowledge alone gets you a working chatbot in 10 minutes.

---

## Slide 4: What Can Connect?

**Title:** The Microsoft Ecosystem — What Works

**Works out of the box (Power Platform connectors):**
- Outlook (send/read email)
- Teams (post messages, read channels)
- Planner (create/update tasks)
- Excel (read/write rows)
- SharePoint (read files, lists)
- OneDrive (read files)
- Word (read documents)
- Forms (read responses)

**Needs admin approval:**
- Asana, ServiceNow, Salesforce, custom APIs

**For the hackathon:** Stick to Microsoft-native connectors. They just work.

---

## Slide 5: The 10-Minute Chatbot (Low Floor)

**Title:** Your First Agent — Done in 10 Minutes

1. Go to copilotstudio.microsoft.com
2. Click "Create an agent"
3. Describe what you want: "Help Gies students find information about career services"
4. AI generates: name, description, instructions, suggested knowledge sources
5. Add a knowledge source (paste a website URL or upload a file)
6. Click "Test" → ask it a question
7. Done. You have a working chatbot.

**This is your baseline.** Everyone should have this in hour 1 of the hackathon.

---

## Slide 6: Going Further (High Ceiling)

**Title:** From Chatbot to Agent — Adding Superpowers

| Level | What to Add | Example | Time |
|---|---|---|---|
| 1. Chatbot | Knowledge only | "Ask me about Gies programs" | 10 min |
| 2. Structured | + Topics with branching | "Which program? → MBA / MSBA / undergrad → specific info" | 30 min |
| 3. Connected | + Tools (connectors) | "I'll create a Planner task for your advising appointment" | 1-2 hr |
| 4. Automated | + Agent Flows | "When you submit, I'll email the advisor, log it in Excel, and post to Teams" | 2-4 hr |
| 5. Multi-agent | + Sub-agents | "Let me hand you to our financial aid specialist agent" | 4+ hr |

**Hackathon tip:** Aim for Level 3-4. Level 5 is the moon shot.

---

## Slide 7: Where to Get Help

**Title:** You're Not Alone

1. **Copilot inside Studio** — Click the Copilot button to ask it how to do things
2. **MS Learn docs bot** — The documentation page has a built-in chat assistant
3. **Ask ChatGPT or Claude** — "How do I connect Excel to my Copilot Studio agent?" works surprisingly well
4. **Tonight's mentors** — Brian & James from the campus CIO AI team
5. **Your teammates** — Pair up. One person builds, one researches.

**Docs:** The full Copilot Studio documentation is available as a reference PDF in the hackathon resources.
