# Deck 2: Workshop Activity — I Do / You Do (40 min total)

## Context
- Workshop: April 10, 2026, 7:30 PM, Gies College of Business
- ~40 students expected
- Mentors: Brian Jonker + James (from campus CIO AI team), Jeremy (student organizer)
- Students signed up for Copilot Studio free trial (30-day)
- Goal: Every student leaves with a working agent they built themselves

---

## Part 1: "I Do" — Organizer Demo (20 min)

### The Gies New Student Navigator

**Scenario:** You're a new student at Gies. You have questions about programs, career services, student orgs, and facilities. Instead of emailing 5 different offices, you talk to one agent.

**Why this scenario:** It's relatable to every student in the room. It uses real Gies content. It shows knowledge, topics, AND a tool action.

### Demo Script (organizer follows this live)

**[Minutes 0-5] Create the agent**

1. Go to copilotstudio.microsoft.com
2. Click the **Agent** tab (not Workflow)
3. In the description box, type:
   > "Help new Gies Business students find information about academic programs, career services, student organizations, and building facilities. Be friendly and professional. If a student needs to schedule an advising appointment, collect their name, email, and preferred date, then create a summary."
4. Click the arrow → Watch it generate name, description, instructions
5. **Show the audience:** Point out the Overview page — Details, Instructions, Triggers, Knowledge sections

**[Minutes 5-10] Add knowledge**

1. In the **Knowledge** section, click **+ Add knowledge**
2. Select **Public websites**
3. Add: `https://giesbusiness.illinois.edu/` (Gies main site)
4. Click **Add to agent**
5. Open the **Test** panel on the right
6. Ask: "What MBA programs does Gies offer?"
7. **Show the audience:** The agent answers from the website content, with citations
8. Ask: "Where is the career services office?" → shows it pulling from site content
9. Point out: "This took 5 minutes. You already have a working chatbot."

**[Minutes 10-15] Add a topic with branching**

1. Go to **Topics** tab → **+ New topic** → **From blank**
2. Name it: "Schedule Advising"
3. Add trigger phrases:
   - "I want to schedule advising"
   - "book an appointment"
   - "talk to an advisor"
   - "advising appointment"
4. Add a **Message** node: "I can help you schedule an advising appointment!"
5. Add a **Question** node: "What type of advising do you need?"
   - Options: Academic Planning, Career Coaching, Financial Aid
6. Add a **Question** node: "What is your name?"
   - Identify as: Person name
   - Save as variable: `studentName`
7. Add a **Question** node: "What is your preferred date?"
   - Identify as: Date
   - Save as variable: `preferredDate`
8. Add a **Message** node: "Thanks, {studentName}! I've noted your request for {Topic.Var2} advising on {preferredDate}. An advisor will reach out to confirm."
9. Save → Test it in the test panel

**[Minutes 15-20] Add a tool (connector action)**

1. After the message node, click **+** → **Call a tool**
2. Search for **"Send me an email notification"** (Outlook connector)
   - OR use **"Post message in a chat or channel"** (Teams connector)
3. Configure:
   - To: your own email (for demo)
   - Subject: "New advising request from {studentName}"
   - Body: "Student {studentName} requested {Topic.Var2} advising on {preferredDate}"
4. Save → Test the full flow
5. **Show the audience:** "The agent just sent an email on my behalf. In a real deployment, this goes to the advising office."

**Wrap-up message to students:**
> "In 20 minutes, we built an agent that:
> - Answers questions from a real website (Knowledge)
> - Guides students through a structured flow (Topic)
> - Takes an action in the real world (Tool/Connector)
> - That's what you're going to do next — but for YOUR scenario."

---

## Part 2: "You Do" — Student Activity (20 min)

### The Gies Event Helper Agent

**Scenario:** Build an agent that helps students navigate THIS hackathon event — the AI For Impact Buildathon happening April 25-26.

**Why this scenario:** Students are literally attending the event. They have context. The data is on the public website they already know.

### Student Instructions (hand out or project on screen)

---

**BUILD: Your Gies Buildathon Helper Agent (20 min)**

You're going to build an agent that helps students get information about the Gies AI For Impact Buildathon.

**Step 1: Create your agent (5 min)**
1. Go to copilotstudio.microsoft.com (sign in with your trial or Illinois account)
2. Click **Agent** tab
3. Describe your agent:
   > "Help students learn about the Gies AI For Impact Buildathon hackathon event. Answer questions about the schedule, tracks, prizes, workshops, and how to participate. Be enthusiastic and helpful."
4. Click the arrow to create

**Step 2: Add knowledge (5 min)**
1. Click **+ Add knowledge** → **Public websites**
2. Add the buildathon website: `https://vishalsachdev.github.io/gies-buildathon/`
3. Add to agent
4. Test it! Ask:
   - "When is the hackathon?"
   - "What are the tracks?"
   - "How do I register?"
   - "What workshops are available?"

**Step 3: Add a topic (8 min)**
1. Go to **Topics** → **+ New topic** → **From blank**
2. Name it: "Track Picker"
3. Add trigger phrases: "which track", "help me choose", "what track should I pick"
4. Add a **Message**: "Let me help you find the right track!"
5. Add a **Question**: "What area interests you most?"
   - Options: Finance & Accounting, HR, Marketing & Sales, Business Technology, General Innovation
6. For each branch, add a **Message** with advice:
   - Finance: "The Finance & Accounting track focuses on automating financial analysis and reporting. Great for accounting, finance, and data analytics majors!"
   - HR: "The HR track focuses on streamlining people operations. Think onboarding, recruiting, and employee services."
   - Marketing: "Marketing & Sales focuses on customer-facing automations. Content creation, lead management, and campaign analytics."
   - Business Technology: "Business Technology focuses on IT operations and process automation. Perfect for IS and tech-savvy students."
   - General Innovation: "General Innovation is wide open — bring any business problem and build a creative solution!"
7. Save and test

**Step 2 (Stretch goal — if you finish early):**
- Add another Question: "What's your name?" → save as variable
- Add a Message: "Good luck at the hackathon, {studentName}! See you April 25th."
- Try adding a **Tool**: Post a message to a Teams channel announcing your track choice

---

### Debrief (2 min at end)

Ask students:
- "Raise your hand if your agent answered a question from the website correctly."
- "Who got the topic branching to work?"
- "Who tried a stretch goal?"
- "What was the hardest part?"

**Bridge to hackathon:**
> "What you just built in 20 minutes is Level 1-2. In the hackathon, you'll have 24 hours, real business challenges from Gies staff, synthetic data, and mentors. You'll aim for Level 3-4 — agents that actually DO things in the Microsoft ecosystem."

---

## Organizer Setup Checklist (before workshop)

- [ ] Organizer has Copilot Studio open and logged in (Gies license, not trial)
- [ ] Website knowledge source pre-loaded if slow internet (giesbusiness.illinois.edu)
- [ ] Test panel visible on projector
- [ ] Student instructions printed or shared via QR code / link
- [ ] Brian & James briefed on the plan (demo → build → debrief)
- [ ] WiFi credentials shared with students
- [ ] Remind students: Free trial = can test but NOT publish (that's OK for tonight)
