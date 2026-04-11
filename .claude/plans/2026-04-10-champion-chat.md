# Champion Challenge Chat Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a conversational interview bot that helps Gies staff understand Copilot Studio capabilities and brainstorm + articulate hackathon challenges, producing a confirmed challenge submission stored in Google Sheets with full transcript.

**Architecture:** Static HTML chat page served by existing nginx Docker container + a Node.js API sidecar in the same container for OpenAI streaming proxy and Google Sheets writes. On confirmation, the bot presents the structured challenge for the user to review. The client-side code validates required fields, then POSTs both the structured challenge (Tab 1) and full transcript (Tab 2) to Google Sheets via an Apps Script webhook. The Node.js sidecar handles only the OpenAI streaming proxy — Google Sheets writes go directly from the client to the Apps Script URL (no secrets needed, the webhook is public-but-obscure).

**Tech Stack:** Vanilla HTML/CSS/JS (chat page), Node.js + `openai` package (API sidecar), nginx reverse proxy, Docker, Google Apps Script (Sheets webhook), GPT-5.4, Gies branding (Illini Navy/Orange, Source Sans 3)

---

## File Structure

```
# New files in repo root (alongside existing index.html)
champion-chat.html              # Static chat page (served by nginx)
api/
  server.js                     # Node.js OpenAI streaming proxy
  package.json                  # Minimal: just openai dependency
  system-prompt.js              # System prompt with mental model + phases

# Modified files
nginx.conf                      # Add /api/ reverse proxy block
Dockerfile                      # Add Node.js, copy api/, run both processes
entrypoint.sh                   # Start nginx + node
```

**Key design decisions:**
- **No new deployment platform.** Runs in the existing Docker/Harbor/UIUC infra.
- **nginx stays primary.** If Node crashes, nginx still serves the main site. Chat bot breaks; landing page is fine.
- **No database.** Google Sheets is the data store via Apps Script webhook.
- **Client-side validation.** Before submitting, JS checks all required fields are present and email is valid. If validation fails, the bot asks the user to fill in what's missing.
- **Transcript persistence.** Full conversation JSON goes to a second tab in the same Google Sheet.
- **Two-path writes.** OpenAI calls go through the Node sidecar (needs API key). Google Sheets writes go directly from the browser to the Apps Script URL (no secrets).

---

### Task 1: Google Apps Script Webhook

**Files:**
- Create: Google Apps Script (in the Google Sheet, not in the repo)
- Create: `docs/champion-chat-setup.md` (documents the webhook setup)

- [ ] **Step 1: Open the existing Champion responses Google Sheet**

The sheet is at: https://docs.google.com/spreadsheets/d/ (the one backing the Google Form "Gies AI for Impact: Champions")

- [ ] **Step 2: Add a "Transcripts" tab**

Create a new sheet tab called "Transcripts" with columns:
```
A: Session ID | B: Timestamp | C: Name | D: Unit | E: Transcript JSON
```

- [ ] **Step 3: Create the Apps Script webhook**

In the Google Sheet: Extensions → Apps Script. Paste this code:

```javascript
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // Write challenge to Form Responses tab
  if (data.challenge) {
    var challenges = ss.getSheetByName('Form Responses 1');
    var c = data.challenge;
    challenges.appendRow([
      new Date().toLocaleString(),  // Timestamp
      c.name,                       // First and Last Name
      c.unit,                       // Gies Department or Unit
      c.email,                      // Illinois Email address
      c.involvement === 'both' ? "Option C - I'll do both A & B" :
        c.involvement === 'mentor' ? "Option B - I'll provided business context as a mentor" :
        "Option A - I'll propose a challenge",
      c.title,                      // Challenge Title
      c.currentWorkflow,            // Describe the current workflow
      c.impact,                     // What is the impact?
      c.dataAndTools,               // What data and tools are involved?
      c.track                       // Track
    ]);
  }

  // Write transcript to Transcripts tab
  if (data.transcript) {
    var transcripts = ss.getSheetByName('Transcripts');
    transcripts.appendRow([
      data.sessionId,
      new Date().toLocaleString(),
      data.challenge ? data.challenge.name : 'Unknown',
      data.challenge ? data.challenge.unit : 'Unknown',
      JSON.stringify(data.transcript)
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

- [ ] **Step 4: Deploy the Apps Script as a web app**

Click Deploy → New deployment → Web app.
- Execute as: Me
- Who has access: Anyone

Copy the deployment URL (looks like `https://script.google.com/macros/s/.../exec`).

- [ ] **Step 5: Test the webhook**

Run:
```bash
curl -X POST 'YOUR_APPS_SCRIPT_URL' \
  -H 'Content-Type: application/json' \
  -d '{"challenge":{"name":"Test User","unit":"Test Unit","email":"test@illinois.edu","involvement":"propose","title":"Test Challenge","currentWorkflow":"Manual process","impact":"Saves time","dataAndTools":"Excel","track":"General Innovation"},"transcript":[{"role":"assistant","content":"Hello!"},{"role":"user","content":"Hi"}],"sessionId":"test-001"}'
```
Expected: New row in Form Responses 1 tab + new row in Transcripts tab.

- [ ] **Step 6: Document the setup**

Create `docs/champion-chat-setup.md`:

```markdown
# Champion Chat Setup

## Google Sheets Webhook
- Sheet: [link to sheet]
- Apps Script deployment URL: [URL] (set as SHEETS_WEBHOOK_URL in champion-chat.html)
- Tab 1 "Form Responses 1": Structured challenge submissions (same as Google Form)
- Tab 2 "Transcripts": Full conversation JSON per session

## Redeploying
If the webhook needs updating, open the Sheet → Extensions → Apps Script → edit → Deploy → Manage deployments → edit → New version.
```

- [ ] **Step 7: Commit docs**

```bash
git add docs/champion-chat-setup.md
git commit -m "docs: add champion chat Google Sheets webhook setup guide"
```

---

### Task 2: Node.js API Sidecar

**Files:**
- Create: `api/package.json`
- Create: `api/system-prompt.js`
- Create: `api/server.js`

- [ ] **Step 1: Create api/package.json**

```json
{
  "name": "champion-chat-api",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "dependencies": {
    "openai": "^4.86.2"
  }
}
```

- [ ] **Step 2: Create api/system-prompt.js**

```javascript
// api/system-prompt.js

export const SYSTEM_PROMPT = `You are a friendly, knowledgeable assistant helping Gies College of Business staff brainstorm and submit challenges for the Gies AI For Impact Challenge — a 24-hour hackathon (April 23-24, 2026) where students build AI agents using Microsoft Copilot Studio.

Your job is to have a natural conversation that:
1. Learns about the staff member and their work
2. Helps them understand what Copilot Studio can do (so they can imagine realistic challenges)
3. Helps them articulate a challenge that students could tackle
4. Produces a confirmed challenge submission at the end

## CONVERSATION PHASES

### Phase 1: Introduction & Discovery (3-5 exchanges)
- Greet warmly. Explain you're here to help them brainstorm a challenge for the hackathon.
- Ask their name, unit/department, and email.
- Ask them to describe a workflow or process in their area that is repetitive, time-consuming, or frustrating. Probe with follow-ups: who does it, how often, what goes wrong.
- IMPORTANT: Always ask about the specific tools and systems they use in the process. Examples: "When you do this, what tools are you working in — Outlook, Excel, SharePoint, a CRM, something else?" and "Where does the data live? Spreadsheets, a database, email threads?" This helps the organizing team gauge challenge complexity and group similar challenges together. It also tells students what connectors they'll need.

### Phase 2: Copilot Studio Education (2-3 exchanges)
- Based on what they described, explain which Copilot Studio capabilities are relevant. Draw from the mental model below.
- Be concrete: "What you described — pulling data from multiple spreadsheets and emailing a summary — that's a Level 4 automation. An agent flow could read Excel, compile the summary, and send it via Outlook automatically."
- Reference the specific tools they mentioned: if they said "Outlook and Excel," note those have out-of-the-box connectors. If they mentioned Asana or Salesforce, flag that those need admin approval and suggest a Microsoft-native alternative for the hackathon.
- Help them see what's realistic for a 24-hour hackathon vs. what's aspirational. Frame it as "low floor / high ceiling" — a basic version students could build in hours, with stretch goals for ambitious teams.

### Phase 3: Challenge Articulation (2-3 exchanges)
- Propose a draft challenge title and description based on the conversation.
- Ask them to refine: "Does this capture what you had in mind? Anything to add or change?"
- Help them think about impact (time saved, people affected, error reduction).
- Suggest which track fits best (Finance & Accounting, HR, Marketing & Sales, Business Technology, or General Innovation).

### Phase 4: Confirmation & Submission (1-2 exchanges)
- Present the final challenge as a structured summary with ALL of these fields:
  - **Name:** [their name]
  - **Unit:** [their department]
  - **Email:** [their email]
  - **Involvement:** [Propose a challenge / Mentor / Both]
  - **Challenge Title:** [title]
  - **Current Workflow:** [what happens today]
  - **Impact:** [why this matters]
  - **Data & Tools:** [what data and systems are involved]
  - **Track:** [which track]
- Ask: "Does this look right? Say 'confirm' to submit, or tell me what to change."
- When they confirm, respond with EXACTLY this format (the frontend parses it):

\`\`\`CHALLENGE_CONFIRMED
{
  "name": "...",
  "unit": "...",
  "email": "...",
  "involvement": "propose|mentor|both",
  "title": "...",
  "currentWorkflow": "...",
  "impact": "...",
  "dataAndTools": "...",
  "track": "..."
}
\`\`\`

Followed by a warm thank-you message.

## COPILOT STUDIO MENTAL MODEL

Use this knowledge to educate staff about what's possible:

### What is Copilot Studio?
Microsoft's low-code platform to build AI agents and automations. Describe what you want in plain language, AI helps build it. Already connected to Microsoft 365 data. Access at copilotstudio.microsoft.com.

### Two Things You Can Build
1. **Agent** — A chat interface that knows things and does things. Triggered by a user asking a question. Uses AI to understand intent. Answers from knowledge sources. Can take actions (send email, create task). Example: "What's our PTO policy?"
2. **Workflow (Agent Flow)** — An automation that runs on a trigger (schedule, event, or manual). Deterministic: same input = same output. Multi-step: chain actions together. Can be called BY an agent mid-conversation. Example: "Every Monday 8am, summarize my emails."

Key insight: An agent can trigger a workflow mid-conversation. That's the bridge.

### Inside an Agent: Building Blocks
- **Instructions** — personality, rules, guardrails (up to 8,000 chars)
- **Knowledge** — websites, SharePoint, uploaded files (RAG)
- **Topics** — structured conversation paths with branching
- **Tools** — single-step connectors (send email, read Excel)
- **Agent Flows** — multi-step automations the agent can trigger

You don't need all of these. Knowledge alone gets you a working chatbot in 10 minutes.

### What Can Connect (Out of the Box)
Outlook, Teams, Planner, Excel, SharePoint, OneDrive, Word, Forms — these are Power Platform connectors, real-time API calls, no admin approval needed.

Needs admin approval: Asana, ServiceNow, Salesforce, Custom APIs.

For the hackathon: Stick to Microsoft-native connectors.

### Levels of Complexity
| Level | What to Add | Example | Time |
|---|---|---|---|
| 1. Chatbot | Knowledge only | "Ask me about Gies programs" | 10 min |
| 2. Structured | + Topics with branching | "Which program?" → MBA / MSBA | 30 min |
| 3. Connected | + Tools (connectors) | "I'll create a Planner task" | 1-2 hr |
| 4. Automated | + Agent Flows | "Email advisor + log in Excel + post to Teams" | 2-4 hr |
| 5. Multi-agent | + Sub-agents | "Let me hand you to our financial aid agent" | 4+ hr |

Hackathon target: Aim for Level 3-4. Level 5 is the moonshot.

## EXISTING CHALLENGES (for inspiration, share if helpful)

- **Magelli Office (Charlie Farhoodi):** Automate prospect identification for consulting engagements — scan job postings for signals, score fit, surface qualified leads.
- **SCC (Andrew Allen):** Automate scheduling meetings with 4+ people across calendars — reducing days of back-and-forth emails.
- **Marcom (Lindsey Halfar):** (1) Automate multi-campaign paid media management and performance tracking. (2) AI-assisted webpage creation using modular components.
- **Office of the Dean (Martin Maurer):** Transform raw assessment data into decision-ready insights for academic leaders — extract rubric scores, analyze trends, generate accreditation reports.

## TONE & STYLE
- Conversational and warm, not formal or salesy
- Use concrete examples, not abstract descriptions
- Keep responses concise (2-4 paragraphs max)
- If they seem unsure, suggest examples from similar units
- Never pressure — if they just want to mentor without a challenge, that's great too
`;
```

- [ ] **Step 3: Create api/server.js**

```javascript
// api/server.js

import { createServer } from 'node:http';
import OpenAI from 'openai';
import { SYSTEM_PROMPT } from './system-prompt.js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const PORT = 3001;

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(body)); }
      catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

const server = createServer(async (req, res) => {
  // CORS headers for same-origin (nginx proxies, so not strictly needed)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/chat') {
    try {
      const { messages } = await parseBody(req);

      const stream = await openai.chat.completions.create({
        model: 'gpt-5.4',
        stream: true,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
      });

      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      });

      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || '';
        if (text) {
          res.write(text);
        }
      }
      res.end();
    } catch (error) {
      console.error('Chat error:', error);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to process chat' }));
      }
    }
    return;
  }

  // Health check
  if (req.method === 'GET' && req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Champion chat API listening on 127.0.0.1:${PORT}`);
});
```

- [ ] **Step 4: Install dependencies locally and test**

Run: `cd api && npm install`
Run: `OPENAI_API_KEY=sk-your-key node server.js`
Run (separate terminal):
```bash
curl -X POST http://localhost:3001/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"messages":[{"role":"user","content":"Hi, I work in Marcom"}]}'
```
Expected: Streaming text response.

Run: `curl http://localhost:3001/api/health`
Expected: `{"status":"ok"}`

- [ ] **Step 5: Commit API sidecar**

```bash
git add api/
git commit -m "feat: add Node.js OpenAI streaming proxy sidecar"
```

---

### Task 3: Static Chat Page

**Files:**
- Create: `champion-chat.html`

- [ ] **Step 1: Create champion-chat.html**

Single-file HTML with inline CSS and JS. Matches Gies branding. Sends messages to `/api/chat` (proxied by nginx to Node). On confirmation, validates fields and POSTs to Google Sheets webhook.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Champion Challenge Builder | Gies AI For Impact Challenge</title>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Montserrat:wght@600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --navy: #13294B;
      --orange: #E84A27;
      --orange-light: #f4795e;
      --cream: #faf8f5;
      --gray-100: #f3f4f6;
      --gray-200: #e5e7eb;
      --gray-500: #6b7280;
      --gray-700: #374151;
      --gray-900: #111827;
      --green-50: #f0fdf4;
      --green-300: #86efac;
      --green-600: #16a34a;
      --green-700: #15803d;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Source Sans 3', -apple-system, sans-serif;
      background: var(--cream);
      color: var(--gray-900);
      min-height: 100vh;
    }
    .container {
      max-width: 720px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    header {
      background: var(--navy);
      color: white;
      padding: 1.25rem 1.5rem;
    }
    header h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
    }
    header .subtitle {
      font-size: 0.8rem;
      opacity: 0.7;
      margin-top: 0.15rem;
    }
    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .msg {
      max-width: 85%;
      padding: 0.875rem 1.125rem;
      border-radius: 16px;
      line-height: 1.55;
      font-size: 0.95rem;
      animation: fadeIn 0.25s ease-out;
    }
    .msg.assistant {
      align-self: flex-start;
      background: white;
      border: 1px solid var(--gray-200);
      border-bottom-left-radius: 4px;
    }
    .msg.user {
      align-self: flex-end;
      background: var(--navy);
      color: white;
      border-bottom-right-radius: 4px;
    }
    .typing {
      align-self: flex-start;
      padding: 0.875rem 1.125rem;
      background: white;
      border: 1px solid var(--gray-200);
      border-radius: 16px;
      border-bottom-left-radius: 4px;
      display: flex;
      gap: 4px;
    }
    .typing span {
      width: 6px; height: 6px;
      background: var(--gray-500);
      border-radius: 50%;
      animation: bounce 1.2s infinite;
    }
    .typing span:nth-child(2) { animation-delay: 0.15s; }
    .typing span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes bounce {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-4px); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .challenge-card {
      align-self: flex-start;
      max-width: 95%;
      padding: 1.25rem;
      background: var(--green-50);
      border: 2px solid var(--green-300);
      border-radius: 12px;
      animation: fadeIn 0.25s ease-out;
    }
    .challenge-card h3 {
      font-family: 'Montserrat', sans-serif;
      color: var(--navy);
      margin-bottom: 0.75rem;
      font-size: 1rem;
    }
    .challenge-card dl {
      display: grid;
      grid-template-columns: 130px 1fr;
      gap: 0.4rem 1rem;
      font-size: 0.9rem;
    }
    .challenge-card dt { font-weight: 600; color: var(--gray-700); }
    .challenge-card dd { color: var(--gray-900); }
    .challenge-card .status {
      margin-top: 0.75rem;
      padding: 0.5rem 0.75rem;
      background: var(--green-600);
      color: white;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.85rem;
      text-align: center;
    }
    .input-area {
      padding: 1rem 1.5rem;
      border-top: 1px solid var(--gray-200);
      background: white;
      display: flex;
      gap: 0.75rem;
    }
    .input-area input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 1px solid var(--gray-200);
      border-radius: 12px;
      font-family: inherit;
      font-size: 0.95rem;
      outline: none;
    }
    .input-area input:focus { border-color: var(--navy); }
    .input-area button {
      padding: 0.75rem 1.5rem;
      background: var(--orange);
      color: white;
      border: none;
      border-radius: 12px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
    }
    .input-area button:hover { background: var(--orange-light); }
    .input-area button:disabled { opacity: 0.5; cursor: not-allowed; }
    .welcome {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
    }
    .welcome h2 {
      font-family: 'Montserrat', sans-serif;
      color: var(--navy);
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }
    .welcome p {
      color: var(--gray-500);
      max-width: 480px;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    .btn-start {
      padding: 0.875rem 2rem;
      background: var(--orange);
      color: white;
      border: none;
      border-radius: 12px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
    }
    .btn-start:hover { background: var(--orange-light); }
    @media (max-width: 640px) {
      header h1 { font-size: 0.95rem; }
      .msg { max-width: 92%; font-size: 0.9rem; }
      .challenge-card dl { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Champion Challenge Builder</h1>
      <div class="subtitle">Gies AI For Impact Challenge</div>
    </header>
    <div id="app"></div>
  </div>

  <script>
    const SHEETS_WEBHOOK_URL = 'REPLACE_WITH_APPS_SCRIPT_URL';
    const SESSION_ID = 'session-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);

    let messages = [];
    let loading = false;
    let challenge = null;
    let started = false;

    const app = document.getElementById('app');

    function render() {
      if (!started) {
        app.innerHTML = `
          <div class="welcome">
            <h2>Help us design a hackathon challenge</h2>
            <p>I'll ask about your work, show you what students can build with Microsoft Copilot Studio,
               and help you turn a real workflow pain point into a challenge for the Gies AI For Impact event (April 23-24).</p>
            <p style="font-size:0.85rem;color:var(--gray-500)">Takes about 5 minutes. Your confirmed challenge goes directly to the organizing team.</p>
            <button class="btn-start" onclick="startChat()">Let's get started</button>
          </div>`;
        return;
      }

      let html = '<div class="messages" id="messages">';
      for (const msg of messages) {
        const content = msg.role === 'assistant' ? stripChallengeBlock(msg.content) : msg.content;
        html += `<div class="msg ${msg.role}">${formatText(content)}</div>`;
      }
      if (challenge) {
        html += `
          <div class="challenge-card">
            <h3>Your Challenge Submission</h3>
            <dl>
              <dt>Name</dt><dd>${esc(challenge.name)}</dd>
              <dt>Unit</dt><dd>${esc(challenge.unit)}</dd>
              <dt>Email</dt><dd>${esc(challenge.email)}</dd>
              <dt>Involvement</dt><dd>${esc(challenge.involvement)}</dd>
              <dt>Title</dt><dd>${esc(challenge.title)}</dd>
              <dt>Workflow</dt><dd>${esc(challenge.currentWorkflow)}</dd>
              <dt>Impact</dt><dd>${esc(challenge.impact)}</dd>
              <dt>Data & Tools</dt><dd>${esc(challenge.dataAndTools)}</dd>
              <dt>Track</dt><dd>${esc(challenge.track)}</dd>
            </dl>
            <div class="status" id="submit-status">Submitted to organizing team</div>
          </div>`;
      }
      if (loading) {
        html += '<div class="typing"><span></span><span></span><span></span></div>';
      }
      html += '<div id="anchor"></div></div>';
      html += `
        <div class="input-area">
          <input id="input" type="text" placeholder="${challenge ? 'Challenge submitted! Type to continue...' : 'Type your message...'}"
                 ${loading ? 'disabled' : ''} onkeydown="if(event.key==='Enter'){event.preventDefault();sendMessage();}">
          <button onclick="sendMessage()" ${loading ? 'disabled' : ''}>Send</button>
        </div>`;
      app.innerHTML = html;
      document.getElementById('anchor')?.scrollIntoView({ behavior: 'smooth' });
      if (!loading) document.getElementById('input')?.focus();
    }

    function esc(s) { const d = document.createElement('div'); d.textContent = s || ''; return d.innerHTML; }

    function formatText(text) {
      return esc(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    }

    function stripChallengeBlock(text) {
      return text.replace(/```CHALLENGE_CONFIRMED\s*\n[\s\S]*?\n```/, '').trim();
    }

    function parseChallenge(text) {
      const match = text.match(/```CHALLENGE_CONFIRMED\s*\n([\s\S]*?)\n```/);
      if (!match) return null;
      try { return JSON.parse(match[1]); } catch { return null; }
    }

    function validateChallenge(c) {
      const required = ['name', 'unit', 'email', 'title', 'currentWorkflow', 'track'];
      const missing = required.filter(f => !c[f] || c[f].trim() === '');
      if (missing.length > 0) return { valid: false, missing };
      if (c.email && !c.email.includes('@')) return { valid: false, missing: ['email (invalid format)'] };
      const validTracks = ['Finance & Accounting', 'HR', 'Marketing & Sales', 'Business Technology', 'General Innovation'];
      if (!validTracks.some(t => c.track.toLowerCase().includes(t.toLowerCase()))) {
        return { valid: false, missing: ['track (must be one of: ' + validTracks.join(', ') + ')'] };
      }
      return { valid: true };
    }

    async function submitToSheets(challengeData, transcript) {
      try {
        await fetch(SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors',
          body: JSON.stringify({
            challenge: challengeData,
            transcript: transcript,
            sessionId: SESSION_ID
          })
        });
      } catch (e) {
        console.error('Failed to submit to sheets:', e);
      }
    }

    async function streamChat(msgs) {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: msgs })
      });
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        messages[messages.length - 1].content = text;
        render();
      }
      return text;
    }

    async function startChat() {
      started = true;
      loading = true;
      messages = [{ role: 'assistant', content: '' }];
      render();
      try {
        await streamChat([]);
      } catch (e) {
        messages[messages.length - 1].content = 'Sorry, something went wrong. Please refresh and try again.';
      }
      loading = false;
      render();
    }

    async function sendMessage() {
      const input = document.getElementById('input');
      const text = input?.value?.trim();
      if (!text || loading) return;

      messages.push({ role: 'user', content: text });
      messages.push({ role: 'assistant', content: '' });
      loading = true;
      render();

      try {
        const assistantText = await streamChat(
          messages.filter(m => m.content).slice(0, -1)
        );

        const parsed = parseChallenge(assistantText);
        if (parsed) {
          const validation = validateChallenge(parsed);
          if (validation.valid) {
            challenge = parsed;
            await submitToSheets(parsed, messages);
          } else {
            messages.push({
              role: 'assistant',
              content: `I noticed some fields need attention: ${validation.missing.join(', ')}. Could you help me fill those in?`
            });
          }
        }
      } catch (e) {
        messages[messages.length - 1].content = 'Sorry, something went wrong. Please try again.';
      }
      loading = false;
      render();
    }

    render();
  </script>
</body>
</html>
```

- [ ] **Step 2: Test locally with the Node sidecar running**

Run: `cd api && OPENAI_API_KEY=sk-your-key node server.js`
Open `champion-chat.html` in a browser (use a local server: `python3 -m http.server 8080` in repo root).
Note: For local testing, change the fetch URL in the HTML from `/api/chat` to `http://localhost:3001/api/chat` temporarily (or use nginx locally).

Test the full flow:
1. Click "Let's get started"
2. Bot greets → share name/unit/email
3. Describe a workflow → bot probes for tools
4. Bot maps to Copilot Studio capabilities
5. Bot proposes challenge → refine → confirm
6. Challenge card appears, data POSTs to Google Sheet

- [ ] **Step 3: Commit chat page**

```bash
git add champion-chat.html
git commit -m "feat: add champion challenge builder chat page"
```

---

### Task 4: Docker Integration

**Files:**
- Modify: `nginx.conf` (add reverse proxy)
- Modify: `Dockerfile` (add Node.js + API)
- Create: `entrypoint.sh`

- [ ] **Step 1: Update nginx.conf to proxy /api/ to Node**

```nginx
server {
    listen 8080;
    listen [::]:8080;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;
    charset utf-8;

    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location /api/ {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Connection '';
        proxy_buffering off;
        proxy_cache off;
        chunked_transfer_encoding on;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2?)$ {
        expires 7d;
        add_header Cache-Control "public, max-age=604800, immutable";
        try_files $uri =404;
    }

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
```

- [ ] **Step 2: Create entrypoint.sh**

```bash
#!/bin/sh
# Start Node.js API in background
cd /opt/champion-chat-api
node server.js &

# Start nginx in foreground
nginx -g 'daemon off;'
```

- [ ] **Step 3: Update Dockerfile**

```dockerfile
# syntax=docker/dockerfile:1.7
FROM node:22-alpine AS api-deps
WORKDIR /opt/champion-chat-api
COPY api/package.json api/package-lock.json* ./
RUN npm ci --omit=dev

FROM nginxinc/nginx-unprivileged:1.27-alpine

USER root

# Install Node.js (from official alpine packages)
RUN apk add --no-cache nodejs

# Copy nginx static site
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY index.html ./
COPY champion-chat.html ./
COPY assets ./assets
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy API sidecar
COPY --from=api-deps /opt/champion-chat-api/node_modules /opt/champion-chat-api/node_modules
COPY api/server.js api/system-prompt.js api/package.json /opt/champion-chat-api/

# Copy entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

RUN chown -R 101:101 /usr/share/nginx/html /opt/champion-chat-api

USER 101

EXPOSE 8080

ENTRYPOINT ["/entrypoint.sh"]

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
```

- [ ] **Step 4: Build and test Docker image locally**

Run:
```bash
docker build -t champion-chat-test .
docker run --rm -p 8080:8080 -e OPENAI_API_KEY=sk-your-key champion-chat-test
```

Open: `http://localhost:8080` — main site should work.
Open: `http://localhost:8080/champion-chat.html` — chat bot should work.
Test: `curl http://localhost:8080/api/health` — should return `{"status":"ok"}`.

Verify: If you kill the Node process inside the container, `http://localhost:8080` still serves the main site (nginx is independent).

- [ ] **Step 5: Commit Docker changes**

```bash
git add nginx.conf Dockerfile entrypoint.sh
git commit -m "feat: add Node.js API sidecar to Docker for champion chat"
```

---

### Task 5: Deploy and Update Invite

**Files:**
- Modify: `docs/invite-project-champions.md`

- [ ] **Step 1: Push to main to trigger Harbor CI**

```bash
git push origin main
```

The existing `docker-image-ci.yml` workflow will build and push the new image to Harbor. The UIUC infra picks it up from there.

**IMPORTANT:** The `OPENAI_API_KEY` environment variable must be set on the remote server/container runtime. This requires access to the deployment config. If you can't set it before the weekend, the main site will still work — only the `/api/chat` endpoint will fail (Node starts but OpenAI calls return errors). The static chat page will load but the bot won't respond.

- [ ] **Step 2: Verify deployment**

Once deployed, test:
- `https://your-domain/` — main site works (no regression)
- `https://your-domain/champion-chat.html` — chat page loads
- `https://your-domain/api/health` — returns `{"status":"ok"}`
- Full chat flow → confirmed challenge appears in Google Sheet

- [ ] **Step 3: Update champion invite with link**

Add after the social proof paragraph in `docs/invite-project-champions.md`:

```markdown
**Prefer a conversation?** [Chat with our Challenge Builder](https://your-domain/champion-chat.html) — it'll walk you through what Copilot Studio can do and help you brainstorm a challenge in about 5 minutes.
```

- [ ] **Step 4: Commit and push invite update**

```bash
git add docs/invite-project-champions.md
git commit -m "feat: add champion chat link to invite"
git push origin main
```

---

## Self-Review Checklist

- [x] **Spec coverage:** Discovery (with tool probing) → Education → Articulation → Confirmation. Mental model embedded. Form fields match Google Form CSV columns. Transcript persistence in separate tab. Client-side validation before submission. Streaming UI.
- [x] **Placeholder scan:** All code blocks complete. One placeholder: `SHEETS_WEBHOOK_URL` in HTML — must be replaced with actual Apps Script URL after Task 1. Documented in setup guide.
- [x] **Type consistency:** Challenge object fields are consistent across system prompt JSON format, client-side parseChallenge/validateChallenge, and Apps Script doPost column mapping.
- [x] **Safety:** nginx still serves the main site if Node dies. Docker image is rollback-able via Harbor timestamp tags. Google Sheets webhook is write-only (no secrets exposed client-side).
- [x] **Missing env var risk:** OPENAI_API_KEY must be set on remote server. If not set, main site works, chat bot fails gracefully. Documented in Task 5 Step 1.
