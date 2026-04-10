---
theme: apple-basic
title: 'Copilot Studio Mental Model'
titleTemplate: '%s'
author: 'Vishal Sachdev'
fonts:
  sans: 'IBM Plex Sans'
  serif: 'Spectral'
  mono: 'IBM Plex Mono'
unocss: true
colorSchema: 'auto'
transition: slide-left
---

<div class="relative h-full flex flex-col items-center justify-center text-center pb-10">
  <div class="text-5xl font-bold leading-tight">Copilot Studio</div>
  <div class="text-2xl mt-2 font-semibold">Mental Model</div>

  <div class="mt-6 text-xl font-semibold text-blue-500 dark:text-blue-300">
    What you need to know before building your first agent
  </div>

  <div class="mt-8 text-lg">
    Gies AI For Impact Buildathon
  </div>

  <div class="mt-2 text-sm opacity-70">
    Gies College of Business &middot; April 2026
  </div>

  <div class="absolute bottom-4 left-0 right-0 text-center text-[10px] opacity-70">Use &larr; and &rarr; to navigate</div>
</div>

---

# What is Copilot Studio?

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

<div class="space-y-4 text-lg">
<div>Microsoft's <strong>low-code platform</strong> to build AI agents and automations</div>
<div>Describe what you want in <strong>plain language</strong>, AI helps build it</div>
<div>Already connected to your <strong>Microsoft 365</strong> data</div>
<div>Access at <strong>copilotstudio.microsoft.com</strong></div>
</div>

</div>

<div class="p-6 bg-blue-50 dark:bg-blue-900 rounded-xl text-center flex flex-col justify-center">

<div class="text-sm opacity-60 mb-2">HOME SCREEN</div>
<div class="text-2xl font-bold">What would you like to build?</div>
<div class="mt-4 flex gap-3 justify-center">
  <span class="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm">Agent</span>
  <span class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg font-semibold text-sm">Workflow</span>
</div>

</div>

</div>

---

# Two Things You Can Build

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="p-6 bg-orange-50 dark:bg-orange-900 rounded-xl">

### Agent

<div class="text-lg mt-4 space-y-2">

- A chat interface that **knows things** and **does things**
- Triggered by a user asking a question
- Uses AI to understand intent
- Answers from knowledge sources
- Can take actions (send email, create task)

</div>

<div class="mt-4 text-sm opacity-60 italic">"What's our PTO policy?"</div>

</div>

<div class="p-6 bg-blue-50 dark:bg-blue-900 rounded-xl">

### Workflow (Agent Flow)

<div class="text-lg mt-4 space-y-2">

- An automation that **runs on a trigger**
- Schedule, event, or manual start
- Deterministic: same input = same output
- Multi-step: chain actions together
- Can be called BY an agent mid-conversation

</div>

<div class="mt-4 text-sm opacity-60 italic">"Every Monday 8am, summarize my emails"</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg text-center text-lg">
<strong>Key insight:</strong> An agent can trigger a workflow mid-conversation. That's the bridge.
</div>

---

# Inside an Agent: Building Blocks

<div class="mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl font-mono text-lg leading-loose">

<span class="text-blue-500 font-bold">YOUR AGENT</span><br>
├── <span class="text-orange-500 font-bold">Instructions</span> <span class="opacity-60">— personality, rules, guardrails (up to 8,000 chars)</span><br>
├── <span class="text-green-500 font-bold">Knowledge</span> <span class="opacity-60">— websites, SharePoint, uploaded files (RAG)</span><br>
├── <span class="text-purple-500 font-bold">Topics</span> <span class="opacity-60">— structured conversation paths with branching</span><br>
├── <span class="text-red-500 font-bold">Tools</span> <span class="opacity-60">— single-step connectors (send email, read Excel)</span><br>
└── <span class="text-yellow-500 font-bold">Agent Flows</span> <span class="opacity-60">— multi-step automations the agent can trigger</span>

</div>

<div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900 rounded-lg text-center text-xl">
<strong>You don't need all of these.</strong> Knowledge alone gets you a working chatbot in 10 minutes.
</div>

---

# What Can Connect?

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### Works Out of the Box

<div class="flex flex-wrap gap-2 mt-4">
  <span class="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">Outlook</span>
  <span class="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">Teams</span>
  <span class="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">Planner</span>
  <span class="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">Excel</span>
  <span class="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">SharePoint</span>
  <span class="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">OneDrive</span>
  <span class="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">Word</span>
  <span class="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">Forms</span>
</div>

<div class="mt-4 text-sm opacity-70">Power Platform connectors — real-time API calls, no admin approval needed</div>

</div>

<div>

### Needs Admin Approval

<div class="flex flex-wrap gap-2 mt-4">
  <span class="px-3 py-1 bg-red-700 text-white rounded-full text-sm font-semibold">Asana</span>
  <span class="px-3 py-1 bg-red-700 text-white rounded-full text-sm font-semibold">ServiceNow</span>
  <span class="px-3 py-1 bg-red-700 text-white rounded-full text-sm font-semibold">Salesforce</span>
  <span class="px-3 py-1 bg-red-700 text-white rounded-full text-sm font-semibold">Custom APIs</span>
</div>

<div class="mt-4 text-sm opacity-70">External connectors need enterprise security authorization</div>

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg text-center text-lg">
<strong>For the hackathon:</strong> Stick to Microsoft-native connectors. They just work.
</div>

---

# From Chatbot to Agent: Levels

<div class="mt-4">

| Level | What to Add | Example | Time |
|---|---|---|---|
| **1. Chatbot** | Knowledge only | "Ask me about Gies programs" | 10 min |
| **2. Structured** | + Topics with branching | "Which program?" → MBA / MSBA / Undergrad | 30 min |
| **3. Connected** | + Tools (connectors) | "I'll create a Planner task for your appointment" | 1-2 hr |
| **4. Automated** | + Agent Flows | "Email advisor + log in Excel + post to Teams" | 2-4 hr |
| **5. Multi-agent** | + Sub-agents | "Let me hand you to our financial aid agent" | 4+ hr |

</div>

<div class="mt-6 p-3 bg-orange-50 dark:bg-orange-900 rounded-lg text-center text-xl">
<strong>Hackathon target:</strong> Aim for Level 3-4. Level 5 is the moonshot.
</div>

---

# Where to Get Help

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl">
<div class="text-2xl mb-2">&#9881;</div>
<div class="font-bold text-lg">Copilot inside Studio</div>
<div class="text-sm opacity-70 mt-1">Click the Copilot button — ask it how to do things in plain English</div>
</div>

<div class="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl">
<div class="text-2xl mb-2">&#128214;</div>
<div class="font-bold text-lg">MS Learn Docs</div>
<div class="text-sm opacity-70 mt-1">learn.microsoft.com/copilot-studio — has a built-in chat assistant</div>
</div>

<div class="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl">
<div class="text-2xl mb-2">&#129302;</div>
<div class="font-bold text-lg">Ask ChatGPT or Claude</div>
<div class="text-sm opacity-70 mt-1">"How do I connect Excel to my Copilot Studio agent?" — it works</div>
</div>

<div class="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl">
<div class="text-2xl mb-2">&#128101;</div>
<div class="font-bold text-lg">Mentors & Teammates</div>
<div class="text-sm opacity-70 mt-1">Brian & James (CIO AI team) + your teammates. Pair up!</div>
</div>

</div>

<div class="mt-8 text-center text-2xl font-bold">
Now let's build one. →
</div>
