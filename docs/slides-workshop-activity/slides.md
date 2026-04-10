---
theme: apple-basic
title: 'Workshop Activity: I Do / You Do'
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
  <div class="text-5xl font-bold leading-tight">Workshop Activity</div>
  <div class="text-2xl mt-2 font-semibold">I Do <span class="text-orange-500">/</span> You Do</div>

  <div class="mt-6 flex gap-3 justify-center">
    <span class="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold">20 min demo</span>
    <span class="px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold">20 min build</span>
  </div>

  <div class="mt-8 text-sm opacity-70">
    Gies AI For Impact Buildathon Workshop &middot; April 10, 2026
  </div>

  <div class="absolute bottom-4 left-0 right-0 text-center text-[10px] opacity-70">Use &larr; and &rarr; to navigate</div>
</div>

---

# Part 1: I Do

<div class="text-3xl font-bold mt-4">The <span class="text-orange-500">Gies New Student Navigator</span></div>

<div class="text-lg mt-4 opacity-80">
Watch me build an agent that helps new students find info about Gies, schedule advising, and take action — in 20 minutes.
</div>

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-5 bg-blue-50 dark:bg-blue-900 rounded-xl text-center">
<div class="text-3xl mb-2">&#128218;</div>
<div class="text-lg font-bold">Knowledge</div>
<div class="text-sm opacity-70 mt-1">Answers from the Gies website</div>
</div>

<div class="p-5 bg-purple-50 dark:bg-purple-900 rounded-xl text-center">
<div class="text-3xl mb-2">&#128256;</div>
<div class="text-lg font-bold">Topic</div>
<div class="text-sm opacity-70 mt-1">Structured advising flow with branching</div>
</div>

<div class="p-5 bg-orange-50 dark:bg-orange-900 rounded-xl text-center">
<div class="text-3xl mb-2">&#9889;</div>
<div class="text-lg font-bold">Tool</div>
<div class="text-sm opacity-70 mt-1">Sends an email notification</div>
</div>

</div>

---

# I Do — Step 1: Create the Agent

<div class="text-sm px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded-full inline-block font-semibold mb-4">Minutes 0-5</div>

<div class="grid grid-cols-2 gap-8">

<div class="text-lg space-y-3">

1. Go to **copilotstudio.microsoft.com**
2. Click the **Agent** tab
3. Type the description below
4. Click the arrow — watch AI generate name, description, instructions
5. Point out the **Overview page**

</div>

<div class="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl text-base italic leading-relaxed">
"Help new Gies Business students find information about academic programs, career services, student organizations, and building facilities. Be friendly and professional. If a student needs to schedule an advising appointment, collect their name, email, and preferred date, then create a summary."
</div>

</div>

---

# I Do — Step 2: Add Knowledge

<div class="text-sm px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded-full inline-block font-semibold mb-4">Minutes 5-10</div>

<div class="grid grid-cols-2 gap-8">

<div class="text-lg space-y-3">

1. Click **+ Add knowledge**
2. Select **Public websites**
3. Add: `giesbusiness.illinois.edu`
4. Click **Add to agent**
5. Open the **Test** panel

</div>

<div class="p-5 bg-emerald-50 dark:bg-emerald-900 rounded-xl">

### Test it!

<div class="text-lg mt-2 space-y-2">

- "What MBA programs does Gies offer?"
- "Where is the career services office?"
- "Tell me about student organizations"

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg text-base">
<strong>Point out:</strong> This took 5 minutes. You already have a working chatbot.
</div>

</div>

</div>

---

# I Do — Step 3: Add a Topic

<div class="text-sm px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded-full inline-block font-semibold mb-4">Minutes 10-15</div>

<div class="grid grid-cols-2 gap-8">

<div class="text-lg">

1. Topics → **+ New topic** → From blank
2. Name: **"Schedule Advising"**
3. Trigger phrases: *"book an appointment"*, *"talk to an advisor"*
4. Add **Message**: "I can help you schedule!"
5. Add **Question**: "What type of advising?"
   - Options: Academic / Career / Financial Aid
6. Add **Question**: "What is your name?"
   - Identify as: Person name → save as `studentName`
7. Add **Question**: "Preferred date?"
   - Identify as: Date

</div>

<div class="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl font-mono text-base leading-loose">

User: "I want to schedule advising"<br>
→ Bot: "What type?"<br>
→ User: "Career Coaching"<br>
→ Bot: "What's your name?"<br>
→ User: "Maria"<br>
→ Bot: "Preferred date?"<br>
→ User: "Next Tuesday"<br>
→ Bot: "Thanks, Maria! Request noted."

</div>

</div>

---

# I Do — Step 4: Add a Tool

<div class="text-sm px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded-full inline-block font-semibold mb-4">Minutes 15-20</div>

<div class="grid grid-cols-2 gap-8">

<div class="text-lg space-y-3">

1. After the message node, click **+** → **Call a tool**
2. Search: **"Send me an email notification"**
3. Configure:
   - To: your email
   - Subject: "Advising request from {studentName}"
   - Body: "{studentName} wants {advisingType} on {date}"
4. Save → **Test the full flow**

</div>

<div class="p-5 bg-emerald-50 dark:bg-emerald-900 rounded-xl">

### What you just built

<div class="text-lg mt-2 space-y-2">

- **Knowledge** — answers from a real website
- **Topic** — structured flow with branching
- **Tool** — sends a real email

</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg text-lg text-center font-bold">
20 minutes. 3 building blocks. A working agent.
</div>

</div>

</div>

---

# Part 2: You Do

<div class="text-3xl font-bold mt-4">Build: <span class="text-emerald-500">Buildathon Helper Agent</span></div>

<div class="text-lg mt-4 opacity-80">
Your turn. Build an agent that helps students navigate the AI For Impact Buildathon event. 20 minutes.
</div>

<div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg text-lg text-center">
<strong>Same pattern:</strong> Create agent → Add knowledge → Add a topic → Stretch: add a tool
</div>

---

# You Do — Steps 1 & 2: Create + Knowledge

<div class="text-sm px-3 py-1 bg-emerald-100 dark:bg-emerald-900 rounded-full inline-block font-semibold mb-4">10 minutes</div>

<div class="grid grid-cols-2 gap-8">

<div>

### Step 1: Create your agent

<div class="text-lg mt-2 space-y-2">

1. Go to **copilotstudio.microsoft.com**
2. Click **Agent** tab
3. Describe it:

</div>

<div class="mt-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl text-base italic">
"Help students learn about the Gies AI For Impact Buildathon hackathon. Answer questions about the schedule, tracks, prizes, workshops, and how to participate. Be enthusiastic and helpful."
</div>

</div>

<div>

### Step 2: Add knowledge & test

<div class="text-lg mt-2 space-y-2">

1. **+ Add knowledge** → Public websites
2. URL: `vishalsachdev.github.io/gies-buildathon/`
3. Test it! Ask:

</div>

<div class="mt-2 text-lg space-y-1">

- "When is the hackathon?"
- "What are the tracks?"
- "How do I register?"
- "What workshops are available?"

</div>

</div>

</div>

---

# You Do — Step 3: Track Picker Topic

<div class="text-sm px-3 py-1 bg-emerald-100 dark:bg-emerald-900 rounded-full inline-block font-semibold mb-4">8 minutes</div>

<div class="grid grid-cols-2 gap-8">

<div class="text-lg">

1. Topics → **+ New topic** → From blank
2. Name: **"Track Picker"**
3. Triggers: "which track", "help me choose"
4. Add **Message**: "Let me help you find the right track!"
5. Add **Question**: "What area interests you most?"
   - 5 options (see right)
6. Add a **Message** for each branch with track advice

</div>

<div>

### Branch options

<div class="space-y-2 mt-2">
<div><span class="px-2 py-1 bg-orange-500 text-white rounded text-xs font-bold">Finance</span> Automating financial analysis</div>
<div><span class="px-2 py-1 bg-blue-500 text-white rounded text-xs font-bold">HR</span> Streamlining people operations</div>
<div><span class="px-2 py-1 bg-emerald-500 text-white rounded text-xs font-bold">Marketing</span> Customer-facing automations</div>
<div><span class="px-2 py-1 bg-purple-500 text-white rounded text-xs font-bold">Biz Tech</span> IT operations & process automation</div>
<div><span class="px-2 py-1 bg-gray-500 text-white rounded text-xs font-bold">General</span> Bring any business problem!</div>
</div>

<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg text-sm">
<strong>Stretch:</strong> Add "What's your name?" → "Good luck, {name}! See you April 25th."
</div>

</div>

</div>

---

# Debrief & What's Next

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### Quick check

<div class="text-lg mt-2 space-y-2">

- Raise your hand if your agent answered correctly
- Who got topic branching to work?
- Who tried the stretch goal?
- What was the hardest part?

</div>

</div>

<div>

### At the hackathon (April 25-26)

<div class="text-lg mt-2 space-y-2">

- **24 hours** instead of 20 minutes
- **Real business challenges** from Gies staff
- **Synthetic data** to work with
- **Mentors** from the CIO AI team
- **Prizes** for each track

</div>

</div>

</div>

<div class="mt-8 p-4 bg-orange-50 dark:bg-orange-900 rounded-xl text-center text-xl">
<strong>What you built tonight is Level 1-2.</strong><br>
In the hackathon, aim for Level 3-4 — agents that <em>do things</em> in the Microsoft ecosystem.
</div>
