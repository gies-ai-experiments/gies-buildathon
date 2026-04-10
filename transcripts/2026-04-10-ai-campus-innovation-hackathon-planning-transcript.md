# AI Campus Innovation Hackathon Planning with Illinois CIO Team
**Date:** 2026-04-10 | **Duration:** 1h 22m
**Attendees:** Vishal Sachdev (vishal@illinois.edu, Illinois/Gies), Jake Myers (Big Ten Academic Alliance / CIO AI Team), Paul Traska (College of Engineering / CIO AI Team), Adam (Buildathon organizing team), Ash/Ashpod (MSBA student, Agentic AI club lead), Sahib (student organizer), Jeremy White (Senior PM, Barcom/Gies), Sheryl (Content & Educational Portfolio Strategy, sitting in for Amanda Bryant-Mayer), Lorena Nicholas (Senior Director, Graduate Programs), Vish (student organizer)

## Summary
- **Jake's Joint Innovation in AI Team** demoed their campus-wide projects: College of Education internal chatbot (RAG on SharePoint knowledge base), ACES advising chatbot, gen AI prompt library, PDF accessibility remediation tool, and HR resume screening proof-of-concept. All built in Copilot Studio or Azure.
- **Paul demoed Copilot Studio** showing how to build a basic chatbot (10 min), add sub-agents/topics for branching logic, and connect to Microsoft tools (Teams, Planner, Excel, Outlook). Key finding: all Microsoft-native connectors work well; external connectors (TDX, Asana) require enterprise security approval.
- **Pivotal discussion on challenge scoping**: Team debated whether to focus on workflows vs. agents. Jake clarified that Copilot Studio "workflows" are more for personal productivity (triggered automations like email summaries), while "agents" are chat-triggered with sub-agents and tools. Consensus: constrain challenges to **agent-based** (chat-triggered) solutions but add **stretch goals** and **evaluation rigor** (accuracy, creativity, sub-agent usage).
- **Individual productivity track proposed**: Vishal suggested adding a personal productivity track alongside the existing business process tracks, focusing on generalizable individual pain points rather than complex multi-person workflows.
- **Credits and licensing**: 25,000 Copilot Studio credits/month, only consumed by unlicensed users interacting with published agents. Licensed users testing = no credit consumption. Students can use 30-day free trial for pre-event practice. Free trial limitation: can't publish agents, but can save and demo.

## Action Items
- [ ] Curate and scope 10-12 challenges across 5 tracks with low floor/high ceiling design (Vishal, Adam)
- [ ] Create a common rubric across all tracks — make it public to students (Ash, team)
- [ ] Design ranking/preference system for track assignment to avoid uneven distribution (Ash, Sahib, Vish)
- [ ] Brief Jeremy (student) on creating slides for tonight's 7:30 workshop: mental models (agent vs workflow), connectable Microsoft tools (Excel, Outlook, SharePoint, Planner, Teams) with one-liners, and where to get help (Copilot inside Studio, MS Learn bot) (Ash)
- [ ] Create a scoped mini-challenge for tonight's workshop where students build one agent hands-on (Ash/Jeremy)
- [ ] Jake's team (Brian Jonker + James) attending 7:30 workshop as technical support — give them heads up on the plan (Jake)
- [ ] Jake/Paul to share curated onboarding resources for Copilot Studio with student team chat (Jake, Paul)
- [ ] Staff champions: submit pain points (individual or process-level) via Google form — organizers will scope and split as needed (All staff attendees)
- [ ] Prepare synthetic data for selected challenges before hackathon day (Adam, student team)
- [ ] Share meeting recording with all staff attendees (Vishal)

## Open Questions
- Should there be a separate "Personal Productivity" track, or add it as a bonus category?
- How to evaluate/judge fairly when complexity varies widely across challenges?
- What's the right level of constraint? Agent-only vs. agent + optional workflow bonus points?
- Can students on the Gies Copilot Studio license access the same connectors as staff?
- Jake's moonshot idea: Big Ten-wide AI hackathon competition — worth planning for next year?

---

## Full Transcript
**[13:58:49] Vishal:** Hey Jeremy. Hey Sahib.

**[13:58:53] Them:** Hello. Hello. How are you?

**[13:58:55] Vishal:** Done well, it's doing well.

**[13:58:56] Vishal:** Sir.

**[13:59:01] Them:** Can everyone hear me?

**[13:59:03] Vishal:** Yes we can.

**[13:59:04] Them:** Perfect. How's it going?

**[13:59:06] Vishal:** All good we can hear you.

**[13:59:09] Them:** Yeah, my. It was showing on my end and my microphone wasn't working, and I think my camera's lagging just a bit, so I'm gonna get that fixed.

**[13:59:16] Vishal:** No worries no worries.

**[13:59:20] Vishal:** Mrd.

**[13:59:22] Them:** Hello.

**[13:59:23] Them:** Everyone.

**[13:59:28] Vishal:** O.

**[13:59:29] Vishal:** Adam.

**[13:59:34] Them:** Hello.

**[13:59:42] Vishal:** I guess I guess we're still before the hour so we have time we can we can do small talk.

**[13:59:51] Vishal:** Jamie is there shar is there.

**[14:00:00] Vishal:** I guess while we wait for I mean I guess several of us are.

**[14:00:05] Vishal:** Frequent flyers with meetings we have maybe folks who are joining us new can introduce themselves.

**[14:00:21] Vishal:** Yeah.

**[14:00:21] Them:** My name is Jeremy white. I'm senior project manager for barcom here at geese.

**[14:00:26] Them:** And I'm tuning in basically just do see what ideas come of this. We don't. Actually, Lindsay on our team has submitted two separate ideas for us.

**[14:00:42] Them:** And I don't know if.

**[14:00:43] Them:** We'll mention that or whatever or have a chance to. But basically, I'm sitting in for as a representative of our team. And just to kind of see what. What comes of it and bring the notes back to the team.

**[14:00:56] Vishal:** Yeah I think the marketing automations would be great so I guess we are at the hour so I should start recording as well before we continue with.

**[14:01:07] Vishal:** Introductions.

**[14:01:10] Vishal:** But yeah please continue I guess Jake is here as well Jake would you introduce yourself.

**[14:01:19] Them:** Yeah. Welcome. I'm Jake Myers. I'm the associate director of operations at the big 10 academic Alliance, which may ask you why I'm here. I'm actually also have a dual appointment. I started working for maraid at the first of the year in. In January helping lead some AI initiatives. So she took 25% of my time, and I get to go hang out with her and some of her AI team. And my, my specific sliver is to help think about AI solutions across campus and the custom side, maybe like the art of possible inside the administrative use cases. So business process, kind of the stuff we're going to talk about today. And I think when I got connected with Vishal on this project, it just seemed like a good intersection. So happy to be here, excited to hear some of the ideas you guys have today and talk a little bit about my group.

**[14:02:11] Vishal:** And I mean we invited Jake to talk about what experiments they're doing at the campus level using I guess a tool of choice for this competition is copilot studio and so you know j could share some of what they're doing at the campus level and maybe that'll give.

**[14:02:31] Vishal:** Our staff who are joining ideas about what kind of challenges would be suitable and of course some have already been submitted so we'll talk about that we'll give an overview but I guess I will leave out folks who are on our team and then find.

**[14:02:46] Vishal:** Others who can introduce themselves.

**[14:02:49] Vishal:** So who else is there Lorena is there Lauren or shar please go ahead yeah.

**[14:02:56] Them:** I'm cheryl of forge educational portfolio senior associate manager at geese in the content and educational portfolio strategy team. Amanda, Bryant mayor had a conflict at this time, so I'm sitting in to get more information for our team.

**[14:03:09] Vishal:** Yeah.

**[14:03:10] Vishal:** I would love to find ways to automate market research and you know that kind of stuff so look forward to ideas so right now over to you.

**[14:03:20] Them:** Hi.

**[14:03:20] Them:** Everyone. Lorena nicholas. I'm the senior director of graduate programs. I think we have a lot of opportunity here to come up with some projects, so I'm really excited to hear more about this.

**[14:03:29] Them:** Robbie had a conflict also at this time, but he did send this out to our team, and we're already trying to think about it. So look forward to it.

**[14:03:35] Vishal:** Awesome.

**[14:03:39] Vishal:** Paul.

**[14:03:42] Them:** Hi, I'm Paul traska with the college of engineering. I'm working with jakes, part of his team to help, you know, figure out AI tooling on campus and, and ways we can do things to support.

**[14:03:54] Them:** Units or individuals trying to do AI things. So I was asked by jake to ride along. Done a little bit of work in co-pilot studio, which is so we understand the, the main tool.

**[14:04:06] Them:** We're going to be looking at. So we'll probably showcase a little bit of, of what we've done, kind of what we've learned from using the tool.

**[14:04:13] Vishal:** Absolutely so I think you know we have six or seven members of our which overlap between our task force and our student representatives who are running a lot of the on ground activities so there's the AI agentic AI organization the disruption lab and the disruption lab of course works with atom as well. I'm just trying to give an overview so we can you know move move on and then we can get you know Jake and team talking about you know what are the options I mean what are the possibilities and then handle Q&A from all the staff members and you know maybe do more ideation.

**[14:05:00] Vishal:** So youo know of course the task force has been around for a year or so.

**[14:05:05] Vishal:** And you know students got involved specifically for this project and they're doing an amazing job at organizing everything doing the workshops and also helping organize the event.

**[14:05:17] Vishal:** Broad strokes geese is sponsoring the event and then we are focusing on.

**[14:05:26] Vishal:** Geese on campus students only and Adam you know has just shared the link so I think everybody should have already got that link but please use that as a reference to see dates times and activities and one one workshop actually is today in the evening and Jake has kindly.

**[14:05:47] Vishal:** You know coordinated and helped us find people on his team who are better at copilot than we are to help out and then the rest our students are managing.

**[14:06:00] Vishal:** So geese is sponsoring you know prizes and you know food and stuff.

**[14:06:06] Vishal:** We picked I guess Microsoft copilot because we are a Microsoft shop and then we have some kind of.

**[14:06:13] Vishal:** Credits that we can use as a campus without needing special approvals you know purchases so that seemed to fit in.

**[14:06:25] Vishal:** Over the discussions it does look like copilot is not the best in terms of user interface in terms of you know but it is the closest to operations for us and because we are trying to get staff.

**[14:06:41] Vishal:** Motivated interested start ideating about what automations are possible this was a good you know good solution to look at and hopefully you know with the campus CIO office as represented by Jake and team you know if this gains team we can collaborate more and we can find ways to get more people to try out more staff members to try out these licenses because we seem to have some credits which is good for experimentation so that's the setup Adam anything else you would like to add before we hand it over to our andam or any of the student members.

**[14:07:24] Them:** Yeah.

**[14:07:25] Vishal:** Yeah.

**[14:07:25] Them:** Thank you, Vishal. I wonder if we should talk a little bit about the role of, you know, our Champions or potential champions here. And so, you know, essentially we're, we're looking for, for real business challenges. Right. And so these are things that, you know, you can identify within your units at geese that, you know, where you see some potential opportunities for automation. And so you can submit those. We've got a Google form where you can submit those. We'll review them and we may modify them or make them a little bit more abstract. But the goal is to really, you know, introduce the students to these real sorts of challenges that they're likely to, you know, run into in the workplace.

**[14:08:16] Them:** So they'll be gaining these real skills, working through these business processes and thinking through how could I leverage AI to automate them? And, and they're very likely to use a Microsoft product.

**[14:08:27] Them:** You know, in the workplace as well. So it introduces them to this platform. You know, AI is changing all the time, and it's probably, it's going to get more powerful. It's probably going to get easier as time goes on, too. And so this, but this is a good place for them to, to start.

**[14:08:45] Them:** And so as, as champions, you know, you would put those, those ideas. You'd submit those ideas.

**[14:08:52] Them:** We'll work with you on maybe some synthetic data that the students can work on. And then the day of the, the 24 hour hackathon will have specific times where we may want office hours, for instance, that the champions could help with. So I think that'll be like a Friday morning where the students could drop by and ask some questions if they're running into issues, you know, or want to understand business process a little bit more, and then there'll be opportunities.

**[14:09:28] Them:** To potentially also help judge the, the presentations that the students will put together.

**[14:09:35] Them:** So we'll send out more details about all that as we get closer to the event. But that's sort of the, the scope of what we're, we're looking at.

**[14:09:45] Vishal:** I mean those who are sort of representing their unit and I guess the message to take back to other members would be that not everybody needs to propose a challenge to participate there are sort of different layers that's in the form some of you may have already looked at those so you can propose a challenge you can be a mentor can be a judge sort of a combo and if you know person a is proposing the challenge but can't make it you know just ask their teammates saying hey do you have time you know this is the challenge you know enough about this why don't you go you know help students understand the business context and as Adam mentioned we are not using any real data so whatever challenges we pick we've got these five tracks we want to find.

**[14:10:32] Vishal:** Two or three in every track so that there is distribution because we are planning on prices for each track.

**[14:10:39] Vishal:** So hopefully you know we get a distribution that's good enough and then we work with you to.

**[14:10:44] Vishal:** Create synthetic data on our student teams so that it's relevant to the challenge you're posing and then we figure out the right kind of you know tools within the Microsoft ecosystem that.

**[14:10:59] Vishal:** Hopefully are all available within this license so we are still rough around the edges of what all will be connected and how stuff will be but I guess we learn you know as we do this so that's the context anything else from our.

**[14:11:14] Vishal:** Student representatives we would like to communicate to.

**[14:11:21] Vishal:** And I don't know is this getting recorded.

**[14:11:24] Vishal:** I couldn't figure out the.

**[14:11:26] Vishal:** I don't see a record for myself.

**[14:11:28] Them:** I don't think so. I don't think they'll be recorded. Yeah, like, I could record it.

**[14:11:33] Vishal:** Yeah I don't even seem to have the option to record it.

**[14:11:37] Vishal:** I seem to have.

**[14:11:38] Them:** Before I.

**[14:11:39] Them:** Yeah, I can record it if you want. Yeah.

**[14:11:39] Vishal:** Go ahead and record it yeah.

**[14:11:42] Vishal:** I think I've gotten too used to Microsoft teams.

**[14:11:46] Them:** Send your request.

**[14:11:47] Vishal:** Yeah.

**[14:11:48] Them:** And recording in progress.

**[14:11:48] Vishal:** Yeah.

**[14:11:50] Vishal:** Okay.

**[14:11:51] Them:** Yeah. Cool.

**[14:11:52] Vishal:** So anything from the student reps that you want to communicate to.

**[14:11:56] Vishal:** The project champions or potential project champions.

**[14:12:01] Them:** No, I mean, other than that, like, like, I lead a genetic AI, which is a student AI club. I'm also an mspa student with, you know,

**[14:12:11] Them:** Informational program. Something about, like, I would say.

**[14:12:17] Them:** Students mostly are just to keep in mind while giving a challenge, the students are very new to the space in terms of agents and building agents.

**[14:12:26] Them:** And I've used co-pilot studio and I can definitely say, like, limitations.

**[14:12:30] Them:** On what you can do in 24 hours with copilot studio. So I would just say, like, when you're giving a challenge, I would say it'll be good to keep those two in mind.

**[14:12:40] Them:** But obviously, like, you know. Yeah, that's, that's what I would say in material recommendation. But I'm pretty sure, like, I've done the workshops during the third one tonight.

**[14:12:47] Them:** Students are very excited to do something like this. You know, something like one of the first to do something like this.

**[14:12:53] Them:** So we're very excited for this.

**[14:12:55] Them:** Yeah.

**[14:12:56] Vishal:** Yeah I guess we are hoping Jack can you know team and they Jake and team sorry when they demonstrate some of the capabilities will give us a better idea and the representatives potential champions as well as to what all is possible based on their experiments.

**[14:13:15] Vishal:** So if there are no other comments from our organization or team I'll hand it over to jake and team.

**[14:13:24] Vishal:** To show us what all is possible or what you're doing.

**[14:13:31] Them:** Awesome. Thanks. Thanks, Mishal. So we came into this kind of short notice and are very excited to collaborate with you guys, but did, did not necessarily have a long runway, so we don't have slides. We don't have a real AI showcase. We're not here to, to show you the power of all the tools, but more of bring, like, a practical sense of a what we're doing as a team, my team. And then B, kind of even to Ash's point, like, what is a realistic expectation of what students might be able to do using these tools in 24 hours.

**[14:14:05] Them:** And I also have a hidden agenda, which is thinking, as you guys think about these use cases in the student side, also be thinking some of these might land and have real tangible value to impact your operations. So the, the other benefit beyond getting some cool use cases for students is these might be things you want to explore building out.

**[14:14:26] Them:** With the rest of your geese team or even reaching out to my group at some point and seeing if there's some collaborative potential to.

**[14:14:34] Them:** Improve your processes, your operations, and perhaps apply a little AI to it.

**[14:14:39] Them:** And we'll talk more about that when to apply AI and AI is not always the answer a little bit.

**[14:14:47] Them:** As, as we talk today.

**[14:14:49] Them:** I'm not going to pretend I'm an expert. I would say an AI, but I've been around it the last three or four months at a very high capacity, almost daily in trying to figure out how do we navigate this as a university from a high level strategy side? And then how do we bring it down to application where we're applying this technology to solve real problems and not just doing technology for technology sake? Because it is really fun and it's happening very fast and there's a lot of cool stuff you can do. But what, what we want to do in my team.

**[14:15:21] Them:** Is really solve some problem that has impact and can save time and show some sort of ROI, not necessarily just be showy.

**[14:15:34] Them:** Let me rewind a little bit. Let's talk a little bit about my group. We have what we call the joint innovation in AI team.

**[14:15:42] Them:** This is a group that was spun up when I took this role mostly because there are, every department, every unit on campus is trying to figure this out. And a lot of them are what I describe as they're all kind of planting flags in AI. They're saying we're going to have an innovation hub and AI, we're going to have some sort of group solving AI problems.

**[14:16:03] Them:** And there wasn't a lot of coordination across kind of working together to solve common problems. And a lot of the workflows, whether it was creating a chat bot or more agent, like these are all the same problems, just with different use cases or even similar use cases with a different department. So this group was brought together to say rather than each of us solve it on our own, let's start to have regular meetings and talk about what we're doing and then co-create some solutions across campus.

**[14:16:31] Them:** We were given 23 ish initial projects.

**[14:16:36] Them:** And we said, okay, let's maybe do a little less to start with. And we rolled that back and we took on five and we quickly learned we had to do our own internal upskilling. This is a long history. Like, sorry, I just feel like it's important for you guys to have some baseline for us. But the, the upskilling was required because even though these were tech people in AI and they're raising their hand like they want to contribute, when it came down to how do you build things at scale with a little more security in mind and things that will work beyond just a demo, it becomes a lot harder to do.

**[14:17:16] Them:** And the tooling we have, although sometimes it looks very easy, like you probably heard the word vibe coding, you could kind of just spin something up and launch it.

**[14:17:26] Them:** It doesn't always work when you connect it to services and tooling as easily as maybe it might happen in your own environment. So we had to slow things down. We had to figure out what our core platforms and what you'll hear terms like copilot today.

**[14:17:42] Them:** Azure Foundry. Like there are more complicated tools where you can get API access to different models and kind of build custom solutions. That was kind of our first, I would say month and a half. And Paul was in that group. So you can jump in. And I say we're still figuring it out.

**[14:18:01] Them:** But what we have figured out is copilot studio has been the, the kind of tool that has risen to the top for more business users to kind of jump in and solve a business use case and apply some sort of agent building tool.

**[14:18:16] Them:** The biggest value it has is it's already connected across your data. And, and I'm assuming a lot of the tools you guys use in your daily work, whether it's as simple as your outlook, your Microsoft teams environment, it's data protected. It has all the integrations. So when you go to build something, all of that is already there.

**[14:18:37] Them:** Not necessarily as, like, gonna work every time. I think, as ash probably was run into a little bit, but at least the connectors are there. So you can kind of, kind of build some of that out.

**[14:18:49] Them:** Before we do the demo, I will share with you five projects that we're doing now as our, as our pitch, and then I'll kind of let paul talk a little bit about one of in particularly.

**[14:19:05] Them:** Hold this list up.

**[14:19:09] Them:** So the first two projects we took on.

**[14:19:12] Them:** Were essentially agent building requests, college of education is building an internal agent. Right now, it's a, I would call a chat bot. It doesn't do anything. It just answers rag related data. So it retrieves specific conversational data in a response to it only based off the data it's given it, which is College of Education's internal knowledge base. So it's all a SharePoint document library, essentially, that has all specific internal documentations for their operations team. So it's their HR, finance and facilities.

**[14:19:47] Them:** I think. And it's, it's a spot. So instead of having to get requests directly to each team, they can just go here as a starting point. And then if it doesn't have the answer, it does a hint. Like, there's no, there's no automations. There's no magic behind it behind except for hopefully surfacing some information for, like that tier one.

**[14:20:09] Them:** That's done. It's in, it's in test. They're, they're pretty happy with it. The next step might be adding some more workflow agentic type features, which we're going to talk, talk about in our demo.

**[14:20:20] Them:** The next one is a similar one. This one is external agent.

**[14:20:23] Them:** This is for the college of ACEs.

**[14:20:26] Them:** They asked for an advising chatbot that does similar kind of tier one request. They got lots of students asking questions about when something due, what, what's how many credits does this course, does this program take? And, and they kind of mapped all that out.

**[14:20:42] Them:** Currently just answering questions. It's in test. But the goal is to automate a few, few things on the back side as we get that first step refined.

**[14:20:51] Them:** The next one's kind of fun. This is just a, it's called a gen AI prompt library. But essentially we have a lot of great ideas across campus.

**[14:21:02] Them:** And this is a place to showcase those. So you would create prompts. You would be able to save them and you'd run those prompts across a number of different models we'd provide.

**[14:21:11] Them:** It would be like you'd log in with your university login and have some sort of shared library across the University of Illinois. So as we're finding maybe Vishal has some secret prompt that is solving all the world's problems, he can highlight that and kind of showcase it for others to either copy and throw inside one of their own chat features, or they could run it there on the website through the API that we provide.

**[14:21:40] Them:** The next one is accessibility remediation. So you can kind of see we're progressing from a chatbot experience or, you know, llm that you're talking conversationally with to more tools and automation. And this is a PDF remediation tool where you will go in and upload a PDF document, and then we use large language model on the back side to review it and look for all the potential WCAG 2.0 or 2.2 errors and then refine it and then spit out a remediated PDF on the outside.

**[14:22:15] Them:** And kind of solve that problem.

**[14:22:17] Them:** That is been tested and fully working past all the muster and it's getting into the enterprise team to figure out how they're going to operate it from a service, offer a service to campus for it and kind of support that. But the building is all done and it's ready to be launched. More to come.

**[14:22:35] Them:** And the last one is this is where it gets like, like the power of AI is huge.

**[14:22:41] Them:** But there's like ethical questions, there's legal questions, there's should we do questions. And this is the HR resume review tool where this is IHR has requested this. Essentially we are just doing proof of concept piloting to upload a mass amount of resumes.

**[14:23:02] Them:** Compare it to a job posting and then kind of score each resume based off that job posting.

**[14:23:08] Them:** The initial round is looking at the minimum qualifications. So if you got like high school diploma two to two to three years of experience in X, you know, whatever those minimum qualifications are, we're trying to do a pass fail.

**[14:23:23] Them:** And that one is taking longer, as you might expect, but we're getting the process to work, but we're not getting consistent results.

**[14:23:33] Them:** The way we're hoping before we build it kind of advance that to the next, next pan. But I'll stop there. That's just to give you an idea of what this group does. Some of them are more.

**[14:23:47] Them:** Highly developers working in the code, maybe working a little bit with agents kind of coding, code coding infrastructure side, and others are more technologists that are interfacing with copilot studio.

**[14:23:59] Them:** Paul is with us today. He has been helping build the ACEs advising chatbot. I'm assuming that's the one that he might pull up and demo. But as we demo it, you'll see both of the user facing side of it as well as we'll pull up the back end so you get an idea of what your students will have to be interfacing in as they kind of build some of your solutions out.

**[14:24:28] Them:** Are you with us, Paul? Yes. I'm trying to find the share button here.

**[14:24:34] Them:** There we go.

**[14:24:41] Them:** And I think you guys can see that. Okay. And, yeah, we'll go over a couple of the, of the projects that.

**[14:24:47] Them:** Jake mentioned. Yeah. So primarily with copilot studio is the bread and butter is, is the chat bot.

**[14:24:55] Them:** You know, feature. It's, it's, it's pretty trivial, right? You've got 24 hour competition. You say, well, create a chat bot while you're done in about like 10 minutes. It's just a single prompt. You click, you know, make a new, new agent, you give it a thing and it will ingest whatever data point you give it, whether it's, you know, files that you upload or web endpoint. So that, that's the easy part. And that's, that is kind of what we see people want. Right. So they already have some existing corpus information, right? They've got documentation for either workflows or, or internal processes or, or whatever it might be.

**[14:25:30] Them:** And so Aces has all of their advising information published to the university websites, and they have their own college pages.

**[14:25:42] Them:** And they ask was for help with vising. Right. It's got a short set of instructions.

**[14:25:52] Them:** Go ahead for advising.

**[14:25:54] Them:** In my major. This is, you get a little test panel on the side here.

**[14:26:00] Them:** And we'll just kind of go over a little bit of what copilot studio does and how to get to at least this space and, and then how you would be able to expand this going forward.

**[14:26:14] Them:** The information it pulls out of here.

**[14:26:17] Them:** This came from a website, and I'll show you. It's got the references highlighted here.

**[14:26:22] Them:** So you can avoid hallucinations.

**[14:26:26] Them:** Contact.

**[14:26:34] Them:** You can do certain things.

**[14:26:37] Them:** To, here's asking me to select my major, you know, I'll tell them what your major is. I'll tell you to contact specifically, right, based off of.

**[14:26:45] Them:** A topic and sub agent that we created. And if you go, you have that information. So going back to the overview here in, just the main patreon quest studio, you got your instructions.

**[14:26:58] Them:** You have the choice of models.

**[14:27:00] Them:** By default, you get 41. And they've recently added claud models, so that's cool.

**[14:27:07] Them:** You get a bunch of knowledge. You can mark them as authoritative or official sources or not.

**[14:27:13] Them:** In this case with ACEs, right, we've got all their individual college documentation. We've got other University websites that could be of interest not specific to them registrar tutoring, Etc. So those are all things you just give it. Right. So this is, again, the easy part.

**[14:27:34] Them:** Getting it to know what the information is and, and how to answer. The more interesting stuff comes when you start doing sub agents and tools, and this is probably what it's going to be more interesting for your, for the competition and what the students are going to be doing. As Jake mentioned, this is, I mean, this is an enterprise tool. It's Enterprise heavy and the connections that it wants you to make are pretty Enterprise.

**[14:27:58] Them:** You know, minded. So we'll actually look at a test bot or a decision that Jake made in a second here. We're playing with some of the tooling.

**[14:28:07] Them:** But with some of the, the sub agents, you can do, you can have them do other things. So like that pop-up thing, you know, click your agent. That is this sub agent. You give it some instructions.

**[14:28:18] Them:** It spins off and does a separate task and here it resolves your degree. And I'll come back with that data to further the conversation. And that's, let me, it's here. So that's a topic. There are a couple different sections that kind of look the same or feel the same in co-pilot studio.

**[14:28:36] Them:** Which is, you know, it's nice to have options of how to do things, but for someone who's fresh and new and hasn't been as interface, it can get confusing.

**[14:28:47] Them:** But this is where you get kind of the, you get the visual representation of what this is doing, what the trigger is. Here are your popups and then based on your answers, you do, you know, XYZ and you build out nodes and all that. So you can do that visually. You can speak with copilot and have copilot, you know, make edits or updates.

**[14:29:08] Them:** So that's available. So there's, there's a little bit of a vibe coding built in.

**[14:29:14] Them:** It's not exactly, you know, the, the point here.

**[14:29:17] Them:** But it, you can definitely do some of that using copilot in copilot studio to build your, your compiler agents.

**[14:29:26] Them:** Like I said, so that agent that there's, that degree was always a sub agent. It is a topic that uses in the, in the conversation to generate those answers.

**[14:29:40] Them:** And that's basically it. That there's your chat bot. This takes you no time to get done within hour. You can have, you know, just these basic parts done. Right.

**[14:29:48] Them:** So as far as an interesting project, right, this is, it's nice. And this is to an end unit on campus. Right. You could say this is, this is what most people just want. They want, you know, something that can Target one set of documentation and, you know, be relatively authoritative in the responses. What this won't do is if you have, for instance, someone asking what.

**[14:30:12] Them:** How many more credit hours do I need to graduate? Something very personal or direct or specific that could vary much impact of the student.

**[14:30:21] Them:** Something that's personalized. You give it clear instructions, right? Don't do any personalized academic advice. Don't do, don't interpret degree at odds. Right. So there's some limits you want to keep in mind when you do things like this.

**[14:30:34] Them:** I, as a, you know, staff member here have access to data student data, for instance, that we wouldn't want to share.

**[14:30:42] Them:** So students won't necessarily have access to any of those things.

**[14:30:46] Them:** So if you're providing all synthetic data, great. That's, that's all the better.

**[14:30:51] Them:** But if a student tries to say, hey, I want to, you know, how many credits do I have left to graduate? Whatever. It'll say, well, I can't do that if I can draft an email for you and then you can.

**[14:31:02] Them:** Kick that over to advising, for instance.

**[14:31:05] Them:** This is another bot that is pretty much the same thing.

**[14:31:09] Them:** In terms of chat and the like.

**[14:31:16] Them:** I don't remember. I haven't pulled up because I thought there was something interesting out of this.

**[14:31:21] Them:** You know, the escalation agent. And so there's you only sub agents and you give them different tasks, and this is the one, this sub agent here will help create email templates.

**[14:31:35] Them:** It's, we wanted to tie it in with team nx. We've had some roadblocks with that because, again, connectors here are a little weird.

**[14:31:44] Them:** But that's something that we have in progress.

**[14:31:46] Them:** And this is a little bit on that, Paul. I'm sorry. I might be like, expand a little on that part. For, for them as they're thinking about their use cases, particularly the word on the street, as you guys use it, asana.

**[14:31:59] Them:** A little bit or other tooling, some non-university tooling, for example, to get them integrated in here, which is likely possible, which will pull up to tools section here.

**[14:32:10] Them:** Requires authorization from the service provider for Microsoft on campus. They, they have to authorize any external connectors.

**[14:32:20] Them:** So if a sauna is here, which it is, then they have some actions that you could potentially have your agent do. So if this is built into your business workflow, we could totally talk about how that might work or how we could get that to integrate. I don't know if it's connected yet. And when we went to the TDX route, even though tdx is essentially supported service, it was not connected to the m365 account. So we were not able to connect those dots. And even though we are on that team.

**[14:32:56] Them:** It wasn't as simple from a security standpoint as just saying we want to connect tdx and create tickets with an agent that we were building. And those, that's where things slow down at the enterprise level. And I think all of you have been through the red tape process, whether it's purchasing or, or some other hiring process or whatever it is, you know, it's just the nature of the beast. That's where we're hoping to help, though. We're hoping to find those repeatable processes and, and create a safe.

**[14:33:26] Them:** Way to request those and get approval.

**[14:33:29] Them:** So just throwing that out there, because I think it is important when you think about your use cases, what tools do you have that are built into microsoft that are automatically connected? Those are probably all the built-in ones versus which tools would we likely have to go through some sort of.

**[14:33:47] Them:** Request process down the road.

**[14:33:51] Vishal:** One clarification I guess in terms of I mean the audience here and we'll share the recording with staff members.

**[14:33:57] Vishal:** I'm not sure whether staff members can I mean they can perhaps some of them think about okay I expect that this workflow will use five tools.

**[14:34:09] Vishal:** Maybe it is better to you know demonstrate what you know is possible in terms of what you have tried and the the parts that the students figure out you know we talk about in the 730 workshop or later is how to get it done so I think for staff.

**[14:34:15] Them:** Sure.

**[14:34:31] Vishal:** As much they can understand from what you have already tried different use cases.

**[14:34:38] Vishal:** And you can of course mention right okay this uses Asana outlook excel blah right so that would be useful for our attendees and people who watch the recording.

**[14:34:51] Them:** Yeah. Paul has tested out a few, or we've tested some out together.

**[14:34:56] Them:** So. Yeah, and that's, that's exactly where, here's step two. Right. So we're actually about to show some of the things that we know do work.

**[14:35:08] Them:** So, for example, we have, so with this one, we have it connected to this teams channel.

**[14:35:14] Them:** And this, so we've got a planner here, we've got.

**[14:35:20] Them:** A chat.

**[14:35:22] Them:** And so real quick with, with teams, right?

**[14:35:37] Them:** We broke it.

**[14:35:43] Them:** When you create these, these things in teams or in these tools.

**[14:35:48] Them:** And this is the part that gets a little difficult.

**[14:35:55] Them:** So this is, you know, specifically in teams.

**[14:36:00] Them:** You'd grab your link.

**[14:36:06] Them:** To your.

**[14:36:08] Them:** Team's channel.

**[14:36:09] Them:** You've got your.

**[14:36:12] Them:** You know, your channel ID here.

**[14:36:14] Them:** You've got your team ID here, which is your group ID, and you kind of have to know what, what these things mean.

**[14:36:20] Them:** Right. So we know this works.

**[14:36:22] Them:** We've, we've plugged it in. We've, we've made it happen.

**[14:36:29] Them:** Yeah, this is all in test. None of this is, none of this has gone live yet.

**[14:36:33] Them:** But this is the balance between when you start to build these out. Although this is the user interface is very easy. There's some technical component that the students will have to.

**[14:36:44] Them:** Research or figure out or kind of.

**[14:36:47] Them:** Stumble through depending on how much Asher you guys decide to give them in their kit. Like, you might be able to provide, like, test.

**[14:36:57] Them:** Test spaces, but it, if.

**[14:37:01] Them:** If someone at geese came to Paul and I, we would work with them and grab all this data and build it out.

**[14:37:06] Them:** And. But it's not always as straightforward as just.

**[14:37:11] Them:** Plug the stuff in.

**[14:37:14] Them:** Which is.

**[14:37:16] Them:** Unfortunate.

**[14:37:23] Them:** Yeah, there goes.

**[14:37:24] Them:** We know this is resolution with the way it comes up in teams. Right. It's.

**[14:37:32] Them:** You've got some semicolons or some colons in there that get, you know, parsed out and stuff. So you have to know how to get your, your chat channel here, which clearly failing to do. So we'll go back to our tool, take a peek at it.

**[14:37:51] Them:** Well, he's, while he's working on that at a high level, what we have noticed is the Microsoft tools. So your planner, your Excel word, outlook even all work pretty consistently once you.

**[14:38:06] Them:** Nail down your ID fields and such.

**[14:38:10] Them:** And then the automations, you can kind of dream up or build. And once you're connected and you have a reliable connection, like Paul just demoed here, everything seems to work, work pretty well. And you can get really creative with your outputs, whether it's using planner to, to work on a project and having some sort of agent auto update or task card or review a task card or surface a task card.

**[14:38:36] Them:** You know, you would have to take your use case and then think about the tooling.

**[14:38:43] Vishal:** Would you have a set of sort of.

**[14:38:45] Vishal:** Building blocks that you know work right now in this platform?

**[14:38:53] Them:** Describe building blocks.

**[14:38:54] Vishal:** I mean so you know that okay you can connect from planner to excel to teams to outlook to X right that was kind of things that you know connect together on this license that we have.

**[14:38:55] Them:** Like.

**[14:39:04] Them:** Yeah, we, I mean.

**[14:39:09] Them:** So far, anything Microsoft has worked, even their dataverse, their, their, some of their more complex tooling. Everything there, we've had, we've gotten to work at one point in time.

**[14:39:19] Vishal:** Okay.

**[14:39:20] Them:** There, there are sometimes, like this year, for example, that open AI indirect attack, like there's guardrails, I think that Microsoft would call, like, they put in place. So if it feels like something's not safe from a post or in prompt injection protection, like the nice thing is we're in data protected and we have safety measures, but it also can.

**[14:39:43] Them:** It can.

**[14:39:47] Them:** Get tricked. It can be wrong. Like it's hallucinate even on trying to be prevented, you know, safe.

**[14:39:54] Vishal:** Maybe I think we can use the rest of the time for our attendees to actually ask questions hey what if I want to do X right can can this be done that might be a good use of that will here the ideas they have and then both of you will know yeah I think 80% of this I know can be done so let's open it up for questions from the participants you know could be our organizers as well if you have ideas about our students who are actually doing the workshop or the staff members who have ideas please go ahead.

**[14:40:31] Vishal:** Unmute and ask away.

**[14:40:42] Vishal:** Sounds like my classroom no question.

**[14:40:45] Them:** I'll jump in with one of the projects that Lindsay submitted from, from our team. She had a couple, the one that just kind of looks a little bit maybe similar, hoping that it could be a little bit of an easier start as AI assisted web page creation using modular components.

**[14:41:06] Them:** So basically she gives the scenario, the marketing team and web team is responsible for building and maintaining web pages. These components ensure, you know, brand design, consistency, but require manually manual assembly. There are two common scenarios when creating new pages. One of those is copy is fully provided. Right. So then she gives the process of what's involved with that.

**[14:41:33] Them:** And then asks, like, you know, gives the, where the process is time consuming.

**[14:41:40] Them:** What needs to be automated.

**[14:41:43] Them:** What the impact of the automation would be, you know, what data and tools are involved.

**[14:41:50] Them:** And that's, and that's basically it. Do you think that would be.

**[14:41:54] Them:** Something that could be achieved with what you know?

**[14:41:57] Them:** What? So is it just, is it a tool to help the, the submitter think through their request and kind of get closer on their request, or is it doing the html component? What, what was the, I think it would be the latter. I think it would be taking available or provided data and then turning it into.

**[14:42:16] Them:** We've seen a lot of success with that more on, like the probably cloud code or more on your.

**[14:42:25] Them:** Your editors like that. I, I have not seen as much, I have not seen copilot be super successful with those types of things. Although the models change every day and they could make it better, but so far, I don't know, Paul. I don't know if it would be able to spit out what you would want there.

**[14:42:47] Them:** Yeah, I'm a super confident that either I haven't used it for any, for anything like that.

**[14:42:54] Them:** You can have it do things where, based on some templates or, or, or source documentation, you have, you know, one drive or, or SharePoint or whatever. Have it read that and spit out, you know, an HTML page or something.

**[14:43:10] Them:** What you can do that when it comes to, you know, start publishing.

**[14:43:15] Them:** Your actual endpoints.

**[14:43:19] Them:** On a highly confident that's something that you can do reasonably well within our license and limitations we have right now, you would need somewhere, somewhere, well, to publish, right? It does have, there is a little button you can click say take me to the demo website. We'll, you know, put up your agent chat box and you, you know, ask it to do things, you know, hey, create, you know, update my web page or something. You can certainly have it do that.

**[14:43:46] Them:** As a, a kind of a continuous.

**[14:43:50] Them:** Kind of thing, as in, like, here, I've dropped a new file into, you know, my, my OneDrive, have it constantly update my website, not so much. I don't think that's kind of the place for that.

**[14:44:07] Them:** I don't have a lot of specifics right now, but I'm thinking about our grad success lab, which is new. I know we've been working really closely with marcom. It's in biff, but we are in weimer and two things. We're going to have a website, but we also have.

**[14:44:22] Them:** A point where students would check in and some of the data we try to collect from them. We want to make sure they can maintain privacy. So building that would be, we wouldn't need the student data then. But right now we have.

**[14:44:34] Them:** These student employees who are trying to track what the students are coming in for, and that could be advising. It could be food or it could be other resources. And just thinking of a way to make it so that they could check in without having to talk to somebody, but still be in the same, you know, in this room. But at the end to jeremy's point of.

**[14:45:00] Them:** That website updating, but things that they could ask us about resources in a way that they can maintain their privacy.

**[14:45:07] Them:** If that makes sense.

**[14:45:12] Them:** Yeah. So we don't, we could have the agents launch without having any login. So that's nice. So you don't have any prereq, pre requirement where you'd have to have an authentication method or we can have it, but you can also have it published open to the public.

**[14:45:30] Them:** As far as, like, actual, like how private is it actually? Like, I don't, it might probably still records an IP address. And, like, there's probably some aspect of data.

**[14:45:40] Them:** It does capture on the logs and stuff.

**[14:45:44] Them:** What do you get on the backside, Paul? I got, is it from the data side when a user that's not logged in does a prompt or does a chat.

**[14:45:55] Them:** You don't capture.

**[14:45:58] Them:** Unfortunately, the demo website doesn't capture anything. We use the actual demo, so that's unfortunate. However, I'll just share my screen again real quick. You could tie it in. This is an example of.

**[14:46:15] Them:** Again, show that ace is spot. So this is in Azure. We've got it connected with application insights.

**[14:46:21] Them:** You do collect.

**[14:46:23] Them:** Stuff, right? So this is, this is an unauthenticated bot or chat agent.

**[14:46:28] Them:** Doesn't collect any usernames or anything like that. But the conversations you can.

**[14:46:35] Them:** Specify, there's a few levels of kind of privacy by default of what you want to log. I'd be able to log in. This one says, hey, log all the things.

**[14:46:45] Them:** So this is, this is the text response that the chat agent sent over and then presumably.

**[14:46:55] Them:** I don't know if I have any actual.

**[14:46:58] Them:** Recent.

**[14:47:00] Them:** Thing that I sent in.

**[14:47:03] Them:** Close mess with. But those conversations would be recorded in this sense. Again, this is now you need access to Azure portal and be able to do this in Azure.

**[14:47:14] Them:** And this is invisible to the end user, right? They wouldn't know that they're being recorded.

**[14:47:19] Them:** And logged in this way. I know it because I set it up, but there's, there's always.

**[14:47:26] Them:** Kind of disclaimer of anything you put into the agent is recorded somewhere, somehow.

**[14:47:31] Them:** Especially when it's a deployed actually back in Azure Studio. There's an analytics tab that you have a little bit more direct insight and you can, you know, export the conversation history. You do have to have some level of permission to do that.

**[14:47:47] Them:** But that's just kind of the best we can say. Right. So when you have something like for posting to a team's channel or, or anything else, any other connector, a lot of those tools have their single kind of API calls. Right. So a read is different than a write. So if you have a student coming in to a lab to check in, you can have the, the agent say.

**[14:48:10] Them:** We'll post to a teams Channel, say, you know, hey, my name is Paul. I'm here. And I can post it to teams.

**[14:48:17] Them:** But it doesn't have to be able to read that channel.

**[14:48:19] Them:** So you can kind of have input go on, going one way. And even if you're, let's say a student worker that's at that terminal, right, they can't read that channel either because it went into the ether as far as they know. Right. They're, they're sitting there facilitating the, you know, the desk or whatever else. So there are things you can do like that.

**[14:48:37] Them:** To.

**[14:48:39] Them:** To keep certain people or the data out of certain people's hands, but in general, you kind of just assume that it's being reported somewhere.

**[14:48:47] Them:** Is kind of the way it works.

**[14:48:49] Them:** Okay. Thank you.

**[14:48:57] Vishal:** Well people think about questions I wanted to check.

**[14:48:59] Vishal:** You know when is this agents which you've demonstrated right an agent typically is landing up as being a chat interface and then at the back end it has tools which could be call you know look at an excel file or look at.

**[14:49:15] Vishal:** You know store of information SharePoint or something and then give responses and follow logic do you have any successful implementation or not I shouldn't say implementation any use case that you've seen which would qualify as that workflow rather than as an agent because we were thinking.

**[14:49:37] Vishal:** Naively so that we will push students towards workflows.

**[14:49:41] Vishal:** But now it looks like we should just stay with agents but what would you say and is there an example of something that.

**[14:49:42] Them:** Yeah.

**[14:49:50] Vishal:** Resembles a flow or a workflow rather than just an agent.

**[14:49:57] Vishal:** Because that's the two tabs we see on studio.

**[14:50:00] Them:** So I can talk a little bit about workflow. We have not done a ton of time, especially on, like, the production side, but I have been playing around with it some just to see where it might fit and how we could help. It, it's the workflow tool is more built for to assist you and your individual work.

**[14:50:20] Them:** So don't think we're going to solve some big problem for college of business through that tooling necessarily. You might be able to, but it's more saying, hey, I'm Jeremy. I wake up every morning at 6 a.m. at 6 30. Send me an email that summarizes all the emails I had yesterday and anything I didn't get done.

**[14:50:43] Them:** So at 6 30, it says, oh, I'm triggered. It says, go look at my inbox from the previous day. Look at all the emails, summarize it, and then send me an updated email that says, here's what you need to think about for today. And, you know, when he gets done with his workout or whatever, he gets to just pull up the email and he'll have some idea.

**[14:51:05] Them:** I've gotten something like that to work. So you could do anything with that. You could say you could have a trigger be related to whether your inputs are emails or task cards or excel documents or any type of input, and then you trigger your action, which is do some sort of AI thing, review it, summarize it, highlight order sort, you know, think of those as the actions that gen AI actions.

**[14:51:34] Them:** And then it spits out an output.

**[14:51:36] Them:** And the output would be a similar thing. It could be a different format. Take this Excel document, put it in word or, or vice versa, create a task card for every Excel row associated with this project.

**[14:51:54] Vishal:** So how about I've been open to everyone and you know students as well.

**[14:52:01] Vishal:** I really like the individual productivity perspective.

**[14:52:05] Vishal:** And you know for example Lorena is in 50 projects at the same time right if there is there are triggers that get triggered when.

**[14:52:13] Vishal:** Something which we are talking about msba new program right so any email that she gets which triggers on the mspai keyboard goes into a separate pool and gets updated in an excel doc or something and then she processes that in batch at like 2 p.m.

**[14:52:33] Vishal:** Or something like that or Martin gets.

**[14:52:37] Vishal:** Learning assessment docs in the same format from 50 faculty and he sets up individual productivity hack which says if I get this kind of an email or this kind of upload to box or this thing shows up.

**[14:52:53] Vishal:** My bot sort of my automation processes stuff like this and then I get this output and we try and find.

**[14:53:01] Vishal:** Individual productivity hacks that can generalize.

**[14:53:05] Vishal:** Is that easier.

**[14:53:09] Vishal:** More personal more identifiable for staff saying what are your individual productivity pain points that we can help solve rather than process level which you know people find it more difficult to think about because they have to then think about what three people are doing or something like that what do you all think about that?

**[14:53:45] Them:** Are you, are you asking as from the champion perspective of whether.

**[14:53:49] Vishal:** I mean that champions now focus on individual productivity improvements.

**[14:53:53] Vishal:** Right I wish I could do x.

**[14:53:56] Vishal:** Rather than worrying about a process which is well I mean some of these could still be individual only but if we make it more personal is it easier for people to come up with challenges and easier to adopt.

**[14:54:08] Vishal:** So that they don't have to worry about a team activity which requires coordination. It's not just me my SharePoint my box.

**[14:54:18] Vishal:** And of course then next step is team automation.

**[14:54:22] Vishal:** But what if we just focus on individual automation though I mean that's a pivot from what we've been thinking we've all been thinking workflows and process automation.

**[14:54:31] Vishal:** I'm just throwing a new thing out there if that's easier for people to identify with the easier to get individual productivity and hopefully many people have the same problem that's where I'm going.

**[14:54:42] Them:** Yeah, sorry. So you think we should have, like, basically like a bunch of agents working on solving the problem instead of having, like a workflow as, like, more unstructured than structures.

**[14:54:53] Them:** Basically.

**[14:54:54] Vishal:** Also yeah solving individual problems which are generalizable so that many people will benefit.

**[14:55:01] Vishal:** Sort of like you know.

**[14:55:03] Vishal:** I guess what you know I do right now when I prep for a meeting I have an agent do some stuff for me.

**[14:55:10] Vishal:** I could imagine that Microsoft copilot could be that agent because all my files are anyway sitting in the Microsoft ecosystem.

**[14:55:19] Vishal:** That's my sort of flip.

**[14:55:22] Them:** Saying we should not have tracks instead of saying that.

**[14:55:26] Vishal:** Yeah that will be a change yes so we've got tracks and also yeah it won't work for that.

**[14:55:29] Them:** Yeah. Or maybe there's another track, which is personal productivity.

**[14:55:32] Vishal:** Individual productivity yeah maybe.

**[14:55:33] Them:** Yeah.

**[14:55:34] Them:** Adding a track might be easier. And then we, you should, you might want to think about just having my recommendation, at least on the, the competition side.

**[14:55:45] Them:** Is don't throw away your bigger workflow ideation. Like, those are real solvable problems that we just need. We'll probably need more in 24 hours and some students on.

**[14:55:55] Them:** But when you think about the students, think about things that, that, that they could actually do.

**[14:56:02] Them:** By lowering the complexity, but still solving some problem and make it, if it could be a business problem, a simple one.

**[14:56:11] Them:** That then is, I'm thinking it's like transferable for their resume, or they could think about in their next role or what something they can talk about when they're getting interviewed. And it may seem small to you, but for that process, it's, it's very important, I think. And that's like a jumpstart for the next time they go and build.

**[14:56:28] Them:** They're going to be able to, with more time and more understanding of the workflow and the tools and the tools are going to get better and easier.

**[14:56:35] Them:** That they could really take it to the next level. But it's almost like.

**[14:56:39] Them:** Picking your ideas and then saying, what's the first 25.

**[14:56:43] Them:** Can we, can the student build that first 25 entry point or the, or maybe it's the last 25? Maybe we manually get all the way to the, almost the end. But this is where it gets a little annoying. Maybe the student can take that data and finish the process or something. I don't know.

**[14:56:59] Them:** I just, from my perspective, I totally agree with that because it's nothing wrong. There's nothing wrong with kind of shooting for the moon. Right. And, and seeing and maybe evaluating or judging based off of the completion progress. Like, so if they don't get it all the way done.

**[14:57:16] Them:** It's still awesome for somebody to, you know, achieve like 75 of really complex problem. Right. So.

**[14:57:24] Them:** I, I think.

**[14:57:26] Them:** That blending the two and maybe offering some low hanging fruit of, like, personal Bots or workflows would, would also be beneficial, I think, to the competition.

**[14:57:42] Them:** But as long as there's some component of, like, trying to solve a bigger problem, which sounds.

**[14:57:47] Them:** Sounds a good plan to me.

**[14:57:53] Them:** And how much should we, you know, those of us presenting some, some challenges for the students, how much should we be thinking about.

**[14:58:00] Them:** You know, what's feasible within 24 hours and all. I'm, you know, I don't know what can be accomplished.

**[14:58:08] Them:** Right? I, agents are still foreign to me, new to me. I'm a general sense, but I don't know.

**[14:58:14] Them:** How much time it would take to put, you know, an idea together.

**[14:58:18] Them:** Is that something? Should we not be, should we not worry about this and just submit our ideas and then, you know, Vishal and Adam and other experts looking at this, you can kind of help us shape that and scope it for something that works. Okay. I like that.

**[14:58:32] Vishal:** That's better and we might be able to split your problem into two and then say that works and can two challenges yeah but yeah send us your pain points whether it's individual or process and then you know we have to select at least you know 10 12.

**[14:58:33] Them:** Okay.

**[14:58:35] Them:** Yeah.

**[14:58:49] Them:** Yeah. I just think we should also be, like, realistic with, like, what can the students actually do in 24 hours? Right. I mean, copilot is like a very, it's a hassle, to be honest with you. And, you know, given that everybody's going to be using copilot studio, like, I think I was using, like, I think my friend told me he was using cloud to teach him how to use copilot studio because, you know, copilot studio on its own is just, you just cannot. So I think we should, we should be a bit realistic as well. I mean, I want them to obviously sky's the limit scenario, but we should also, like, be like, this is the tool they have.

**[14:59:21] Them:** It's not really the best in terms of industry standard, so we should take that into account while, you know, like giving the students the problem.

**[14:59:31] Them:** Maybe we can structure these so that there's like a baseline goal or something for a challenge.

**[14:59:38] Them:** And maybe that's one is more like.

**[14:59:41] Them:** A personal productivity focused and then maybe then there's like an add-on goal or stretch goal or several different levels where, okay, you know, if you can add this functionality or make it work for a team or something like that, then you get kind of like bonus points or something. And because we have to think about how we're going to judge these two, when we're probably going to have to tell the students, hey, this is hard. These are challenges, right? And there's going to be some struggling, and you'll probably have to make some assumptions or substitutions or be creative.

**[15:00:18] Them:** And I think it'll be really nice to see that, but it'll also be maybe challenging to judge as well.

**[15:00:23] Vishal:** Yeah.

**[15:00:23] Them:** Yeah, no, in a bit there.

**[15:00:25] Them:** I think levels are milestones would be good as well.

**[15:00:29] Them:** Like just like see, show students what is the maximum or like what is the, the moon, what is the highest amount you could really achieve and then seeing how far they can get. And I think the first time we do it, we get a benchmark for how much on average students really know about this and, and then tailoring it from there would be good just to see how, because, yeah, you're, I think, ashpod have a good point.

**[15:00:51] Them:** That, like co-pilot compared to a lot of other solutions is quite different. And so even the learning curve, the initial learning curve to get exposed to in this challenge will be quite interesting to see how students expose themselves and how much they learn in the course of 24 hours.

**[15:01:07] Vishal:** Just to be conscious of time we are already over the hour so you know love to wrap up by thanking Jake and Paul and for doing this and also helping out with the event I think one ask of Jake and Paul would be if you have a resource or something that gives us you know what are I mean I guess you've said all the Microsoft products to connect to each other but if you have in your own training and onboarding if you've collected some resources that help your staff on board with what is possible please share that with our student teams and you know we have a chat going so feel free to share there so that we can reuse that for our workshops and additional stuff.

**[15:01:54] Them:** Perfect.

**[15:01:58] Them:** Real quick, are you going to give the recording to us and attendees?

**[15:01:59] Vishal:** Yes yeah all yes we'll send it again broadcast to everyone.

**[15:02:05] Them:** Thank you.

**[15:02:07] Vishal:** Thank you all for joining and I guess some of you will be in the evening workshop so thank you for that as well and we look forward to a successful collaboration.

**[15:02:18] Them:** Great to meet you guys for just a minute so I can talk to you about the.

**[15:02:19] Vishal:** Thank you.

**[15:02:22] Vishal:** Sure.

**[15:02:24] Them:** I think so.

**[15:02:27] Them:** Recording stopped.

**[15:02:28] Vishal:** I'll hang around too as well I have time.

**[15:02:32] Them:** The planning team now.

**[15:02:33] Vishal:** Yeah.

**[15:02:35] Them:** I hope that's what you had in mind. I, I did not have enough, a ton of time to plan, but I wanted to at least talk a little bit about our group and show what Paul's been up to.

**[15:02:45] Vishal:** That was good.

**[15:02:45] Them:** Do you want me to stick around, Jake? I've got a little more time here before. Are you planning to go tonight, Paul, or is that I can't, you know, that's going to be James.

**[15:02:56] Them:** So I just wanted to clarify the plans for tonight. I, I, Paul and I won't be there, which is kind of unfortunate because we were here, but it would have been nice if we were in both.

**[15:03:06] Them:** The two that we do.

**[15:03:07] Vishal:** On a second hold on a second shall we stop the recording if we haven't.

**[15:03:10] Them:** Yeah, I stopped for the code. Yeah. Oh, nice. You're on it. Good, good job.

**[15:03:11] Vishal:** Okay good yeah.

**[15:03:18] Them:** So tonight we do have two of the members of the AI team coming. Brian jonker, who is the one he built out the education internal chatbot. So he's very versed.

**[15:03:30] Them:** His background is front end web design, and he's been doing that for a long time, so he'll be a great. He'll understand the student side. He'll know. He'll be really good.

**[15:03:40] Them:** And then James is the one that worked with paul on the aces advising.

**[15:03:45] Them:** Chatbot. I feel like he's probably almost just as much up to speed as you, Paul.

**[15:03:50] Them:** Yeah, he, and he definitely works with the support side of the, the ability initiative to create. So he's, he's pretty knowledgeable and stuff, and especially in he's my background is.

**[15:04:03] Them:** Linux and infrastructures that engineering.

**[15:04:06] Them:** So it's kind of where my focus is usually is James is on the windows side of services and systems. So he's a lot more familiar with these Microsoft product interactions integrations. So he should be a pretty good resource.

**[15:04:23] Them:** Nice. And then we make it through that. We can think, do you want to try and get them access to copilot before the 24 hours? I didn't know how, like, competitive he wanted to be. Do we want to say, like, maybe you can hold on the use cases so they don't pre-build but everybody has access and maybe give them one to go start testing. And because there's no way better to learn than just give them an example to go all.

**[15:04:39] Vishal:** We won't share that.

**[15:04:48] Them:** Like, maybe you pick some simple one. That way they're not starting at ground zero. I, it's kind of up to you, but I just wondered if that was a strategy.

**[15:04:57] Vishal:** The only thing we were worried about is running out of credits that's all.

**[15:05:02] Them:** So, so one couple things on credits. We have 25,000 every month.

**[15:05:07] Them:** And those only get counted if someone without a copilot studio license interacts with your agent. So if, if we make one for college of business and we post it on college of business website and you have thousands of non licensed users ask questions, every question is a credit.

**[15:05:24] Them:** So 25,000 could go vast.

**[15:05:27] Them:** Historically, we've only been using two to three thousand a month. And so if you gave licensed, if you gave licenses out early.

**[15:05:36] Them:** And said, use it for testing, no credits will be consumed. They could play around all they want. As long as we didn't publish, which they're not going to publish anyways.

**[15:05:45] Them:** In their, in your guys'projects, then I don't, I think you'll be fine.

**[15:05:50] Them:** But what was our alternative if we weren't going to do that? Ash and Vishal.

**[15:05:54] Vishal:** Free plan they just sign up for a free plan.

**[15:05:56] Them:** Free plan.

**[15:05:57] Vishal:** Azure 30 days copilot studio free plan.

**[15:06:00] Them:** Yeah, that, that might work, too. That way they could test and learn either way.

**[15:06:05] Vishal:** I did that before we got added to the license yeah.

**[15:06:05] Them:** I would just, if we want to.

**[15:06:11] Them:** Just give them a longer Runway is all my, my thought was.

**[15:06:16] Them:** And, and this does not give them access to m365.

**[15:06:20] Them:** Right. And sort of the agentic stuff there.

**[15:06:25] Them:** And copilot there. Right.

**[15:06:29] Them:** That I think.

**[15:06:32] Them:** I don't know. I, I'm on both, so I, I don't see quite. Yeah, same. So it's a little bit more difficult.

**[15:06:39] Vishal:** But I mean students ash.

**[15:06:44] Vishal:** And sahib and all have been added to our copilot studio license so will their privileges be different from ours?

**[15:06:48] Them:** Yeah.

**[15:06:52] Them:** Let's see if they can open this. I'll send you, I'll send, I'll put a link here. Well, not this chat. I'll do a different chat.

**[15:06:59] Them:** That planning team chat, Ash, try and open.

**[15:07:01] Vishal:** Okay.

**[15:07:01] Them:** This link here as a student.

**[15:07:04] Vishal:** I mean the free 30 day thing.

**[15:07:07] Vishal:** Work very smoothly for me it was like a five second five minute onboard so we could just tell everybody who's attending today ash send out a message that sign up for the free plan before you come.

**[15:07:12] Them:** And now that.

**[15:07:19] Them:** Yeah, I did that.

**[15:07:20] Vishal:** Yeah that's good.

**[15:07:20] Them:** I think that.

**[15:07:22] Them:** Okay. Okay. So I think we're good then. Okay. You're in good shape then.

**[15:07:24] Vishal:** Yeah.

**[15:07:27] Them:** Last thing, and then we'll go my moonshot is let's do it really good here. And then let's do a big 10 competition.

**[15:07:34] Vishal:** I like it yeah yeah why not why not.

**[15:07:35] Them:** Okay.

**[15:07:37] Them:** This, like, just put that in the back of your brain as we refine this and think about it. And maybe the big 10 competition is not copilot studio, but maybe it is. I don't know. We can, we can brainstorm on that. But that'd be fun to get the business, the business colleges across the big 10 to compete.

**[15:07:53] Vishal:** Yeah.

**[15:07:55] Vishal:** Yeah we could make it an annual gig like that that'll be fun.

**[15:07:59] Them:** Yeah.

**[15:07:59] Vishal:** Yeah.

**[15:08:00] Them:** Throw that out there. Mission's gonna wipe the floor, so that's.

**[15:08:04] Them:** And I do think that, you know, even, Jake, you mentioned, like, the workflow, your sample workflow of, like, hey, check my email every, you know, 6 30 in the morning, send me a summary.

**[15:08:14] Them:** Like, even that has some complexity to it because I was trying to build a similar one, and then I had to figure out, like, okay, do I need to, like, add recursion?

**[15:08:24] Them:** To loop through emails and then, like, variables to get it out of your folder? So then that sends you an email, but then does that trigger another one? Yeah. Yeah. And, like, I have an agent that summarizes the data using, you know, an AI model and stuff, and then that's cool. But then I have to pass that stuff. And then so it gets complicated, which I think that struggle could be nice for the students because there's learning there for sure.

**[15:08:35] Vishal:** And lot of testing yeah.

**[15:08:51] Them:** But also could be frustrating.

**[15:08:53] Vishal:** So how about we constrain the problem space to let's say agents.

**[15:08:54] Them:** So.

**[15:09:00] Vishal:** Just saying but increase the rigor with adding evaluations to the mix.

**[15:09:07] Them:** But that, right, agents have to be, that workflow is triggered by a chat interface.

**[15:09:13] Vishal:** Yes.

**[15:09:13] Them:** Right?

**[15:09:14] Vishal:** Yes.

**[15:09:14] Them:** So it's like we can't have other triggers like, oh, someone submits a microsoft form.

**[15:09:19] Vishal:** Yeah okay.

**[15:09:21] Them:** Or file changes or, I mean, that's kind of unfortunate.

**[15:09:23] Vishal:** Yeah.

**[15:09:25] Vishal:** Well so I guess if you want to have projects comparable we'll have to constrain the scope a bit.

**[15:09:25] Them:** Yep.

**[15:09:32] Vishal:** While making it more rigorous by saying that you better make sure that your chatbot response 99.5% of the time correct answer or something like that.

**[15:09:41] Them:** Or that you're using sub agents or, like, you know, we.

**[15:09:44] Vishal:** Yeah.

**[15:09:46] Vishal:** At least three tools three agents or something like that and then constrain the problem only to I don't like it but that may be the only way to really evaluate.

**[15:09:57] Vishal:** A cross projects.

**[15:10:00] Them:** Can get really, I don't know how create, like some students will probably get really creative.

**[15:10:04] Them:** But it just, there's a technical hurdle that some of them may have a harder time getting over than others.

**[15:10:11] Them:** Maybe we tell them if you do a workflow, you get like a hundred bonus points. They would all be doing level.

**[15:10:11] Vishal:** I mean.

**[15:10:15] Vishal:** Bonus ones.

**[15:10:19] Them:** Right? That's what I want.

**[15:10:21] Them:** To trigger that. Sorry.

**[15:10:23] Them:** Go ahead. Yeah. So I wanted to say, like, we should decide on a rubric as well.

**[15:10:28] Them:** Before, like, you know, like meet up the side of rubric and make the rubric same across all the five workflows.

**[15:10:34] Them:** So you know, that's like, that's taken into account. And then we can add this all into the rubric.

**[15:10:41] Them:** Because, yeah, then we can decide, do you want to make the rubric public to the students, which we should, we should. That'll motivate them and kind of help shape the behavior a bit. Yeah, exactly.

**[15:10:46] Vishal:** Yeah Vish.

**[15:10:51] Them:** My only worry, which is, is that, like, so we do like a sign up where they pick the interest track they want to pursue. And on the day of the event, they, they can pick again because they're like, maybe after they see the problem, they're like, I relate more to that problem. What if, like, there could be an issue where, like, I just say hypothetically, we saw that finance track has the most demand. But when they saw the problem, it went to hr.

**[15:11:15] Vishal:** Nu.

**[15:11:16] Them:** And then we have less demand on one track.

**[15:11:19] Vishal:** Yeah.

**[15:11:20] Them:** That would kind of alter because then we would need more project champions for one track compared to the other track.

**[15:11:30] Them:** Or we just do it randomly.

**[15:11:33] Them:** And then, and you can't change.

**[15:11:35] Them:** You can't switch. Yeah, I think that's the thing. It's like, I feel like students tend to give more importance to think when they can, like, stay really enjoy solving the problem.

**[15:11:46] Them:** When we do it random, it's more of like, it's kind of like a kind of like a job, right? I mean, we just give them a task, complete it.

**[15:11:53] Them:** Yeah.

**[15:11:57] Them:** Or they, they rank their preferences.

**[15:12:00] Them:** And then at least maybe, maybe you get your second preference, but you're not as upset.

**[15:12:00] Vishal:** Yeah.

**[15:12:03] Vishal:** Yeah ranking could be the answer.

**[15:12:07] Them:** Yeah, I think that's what cornel did with their hackathon.

**[15:12:10] Them:** So, yeah, we rank because the thing is, as of right now, the plan is we have all the five judging going in parallel.

**[15:12:10] Vishal:** Yeah.

**[15:12:17] Them:** To save time.

**[15:12:19] Them:** Right. And the thing is, if one has too many people compared to us that could, that could be an issue. So we can do like a ranking system and randomly assign, I guess, you know, make sure everybody at least gets a second preference. But give me more importance towards like the fact that we have this, you know, we cannot get more project champions.

**[15:12:38] Them:** Than what we have.

**[15:12:42] Vishal:** So Paul this list that you've sent out here I mean it has like 500 links is that you think the best entry point for students or we give them or if you have a more curated list of here are the five videos everyone should want to get a good mental model of what is possible in copilot studio.

**[15:13:01] Them:** So unfortunately, I don't have.

**[15:13:04] Them:** Any, you know, pre-written documentation or training or anything like that. So that's the official microsoft lacation landing page for covalent. It is pretty good.

**[15:13:15] Vishal:** Okay.

**[15:13:17] Vishal:** Okay.

**[15:13:18] Them:** So if you want to like, so for example, like the.

**[15:13:22] Them:** You can actually mix workflows from agents, right? You have an agent call workflow. So if you do.

**[15:13:30] Them:** Workload, let's say checking your inbox for, I want to, I want to collect all of the report emails I got for failed disk drives my servers or something. Right. So you, the in plain language, you type it into the, the workflow thing, and it just creates it like it's some of these things sound a lot more difficult than they end up actually being. Right. And then there's the tweaking that, that gets difficult, like, like we mentioned. Right.

**[15:13:56] Them:** So that agent or that workflow is easy, right? So if you give 100 bonus points for creating, you know, or whatever, right, for creating that workflow, for instance, on its own, right, that's not very interesting. Yeah, that's a small task. But then when you start combining that with, you know, agents, you say, hey.

**[15:14:13] Them:** Exploring issues in my data center.

**[15:14:16] Them:** Right.

**[15:14:17] Them:** And, and then you have a sub agent or whatever I call that flow to collect. Well, let me see if there are any, you know, failed, you know, pieces of hardware or something. So when you start mixing things together, like this documentation, I do believe has enough.

**[15:14:34] Them:** Just at the, like, you know, it's a wall of text. I understand that. Right. With the number of links here.

**[15:14:39] Them:** But kind of like, I think the buckets are pretty good for, figuring out, you know, where to click, what to click on. Now I have a, you know, I want to create a flow. Let me look at the, the flow things. I want.

**[15:14:48] Them:** To, you know, make, I don't know, child agents, whatever. It's pretty easy to navigate.

**[15:14:54] Them:** But then certainly if they have a copilot license, they're going to have access to copilot. And it is better now because it's funny how you mentioned using claw to build stuff in cabal studio because that's what we first did was use a chat GPT and it was fantastic giving me step by step instructions of how to use compound studio. When copilot couldn't. But now it seems to be doing better.

**[15:15:15] Vishal:** So I guess ash in your thing or get somebody else on the job today maybe.

**[15:15:24] Vishal:** Jeremy.

**[15:15:26] Them:** Yeah. Jeremy is going to be.

**[15:15:27] Vishal:** To.

**[15:15:28] Vishal:** So let's brief him on a few.

**[15:15:28] Them:** Yeah.

**[15:15:32] Vishal:** Slides that he can put together which talk about the ways to I mean one or two on basic mental models right what's an agent what's a workflow then what are the things that can be connected right excel outlook share point and one liner description if they don't know what SharePoint is.

**[15:15:52] Vishal:** And then the rebase to get help right so one is copilot inside the studio.

**[15:15:58] Vishal:** And then there is on this doc page itself there is a learn bot.

**[15:16:02] Vishal:** So they can just talk to the bot for the documentation and I guess copilot serve the same purpose if you're inside copilot studio.

**[15:16:12] Vishal:** And just we keep repeating those we don't need to give them detailed walkthroughs we give them the lay of the land.

**[15:16:21] Vishal:** What is possible this is where you get help and these are the challenges so we'll I think we'll do most of our work in curating the challenges the you know what sort of if we put blinders on those challenges and then figure out sort of a low floor high ceiling kind of stuff and then do some kind of crow brick.

**[15:16:41] Vishal:** But we shouldn't worry about giving them 50 videos that show them everything.

**[15:16:48] Them:** They can do the research, too, if they.

**[15:16:50] Vishal:** They can do that I mean that's their job is to figure out how to use it we just provide enough structure so that they are not completely lost.

**[15:16:57] Them:** So I know we're trying to wrap up, but when thinking from your flow and the rubric, I feel like you have, we have a couple components, like a big part of it is just the technical hurdle of orchestrating and putting the pieces of the puzzle together to have it accomplish an action.

**[15:17:14] Them:** What I would like to see if I was evaluating is creativity and the use of.

**[15:17:19] Them:** Gen AI.

**[15:17:21] Them:** So, so if, if we didn't, if you were, if you left some ambiguity in exactly what the solution could, how the llm or how the gen AI could solve the problem, for example, think of like a contract review tool where they upload a contract and then they use the, the model to evaluate the contract and suggest language that might help the person trying to evaluate. I don't like then you're starting to the prompt that they'll put to have the action happen is more creative. And that's where you're not just saying, can you get a document uploaded? Can you have AI look at it? Can you get it to move to here? That's just so linear. I don't know.

**[15:18:03] Vishal:** Yeah.

**[15:18:04] Vishal:** Yeah I mean we are hoping that some of the feedback from the champions on the day off will provide that.

**[15:18:11] Vishal:** Richness of context that forces students to say that okay just a document behind a bot is not a project right and that's why we were thinking that it can't just be an agent that was an earlier mental model that an agent equals chatbot so we were thinking more workflows but now you're saying workflow is basically.

**[15:18:27] Them:** Right.

**[15:18:32] Vishal:** An agent doing something in a loop effectively right it's not really.

**[15:18:35] Them:** Pretty.

**[15:18:37] Vishal:** Five steps in a process right five steps in a flow but I guess that was the mental model I was using.

**[15:18:44] Vishal:** But that may not be correct okay.

**[15:18:44] Them:** Yeah.

**[15:18:47] Vishal:** Okay so stop to think about I guess we know we.

**[15:18:51] Vishal:** All back banging our heads against this.

**[15:18:56] Vishal:** Tool trying to figure out and I guess we learn along the way and hopefully staff will also get.

**[15:19:02] Vishal:** Some out something out of it I'm sure the students will.

**[15:19:07] Them:** Just to make sure you're sending like Jake, you're sending two people from your side.

**[15:19:12] Them:** Tonight for the workshop at 7 30.

**[15:19:16] Them:** Yeah.

**[15:19:17] Them:** Brian and James are supposed to go there. They, they have not had, like, they've been busy and one of them's been out, so they're not going to come in with a.

**[15:19:27] Them:** Ready to go Workshop, but they have expertise and they'll be able to answer questions very, very easily on the spot and could probably stumble their way through a pretty good presentation.

**[15:19:37] Them:** No, I was thinking today's Workshop, Jeremy would be showing how to build the agent.

**[15:19:44] Them:** And after that, the students can build one agent there itself.

**[15:19:48] Them:** And maybe your team could help them, you know, figure it out, any issues to fix.

**[15:19:53] Them:** That sounds good. So we have about 40 students expected tonight. Oh, yeah. Nice.

**[15:19:58] Them:** Yeah. Jeremy, Jeremy and or James and Brian are in the chat, so if you just give them a heads up on the plan or take a, you could message them outside. Like.

**[15:20:07] Them:** Yeah, give them a heads up and they'll be great. Yeah, sounds good. Thanks.

**[15:20:13] Vishal:** Be giving them a challenge right make this agent.

**[15:20:17] Vishal:** Yeah.

**[15:20:18] Them:** The idea, what I thought was like they, Jeremy shows how to make a personal agent. And I would tell them, like, honestly, like, make a personal agent in your, like, whatever personal, like life or problem you face.

**[15:20:29] Them:** Across the Microsoft ecosystem.

**[15:20:31] Vishal:** You won't have time you you might as well give them a scope you might as well give them a scope.

**[15:20:32] Them:** Same with that.

**[15:20:33] Them:** Beyond that.

**[15:20:34] Them:** Time.

**[15:20:35] Them:** Because my scope.

**[15:20:36] Them:** Okay.

**[15:20:36] Them:** Okay. Got you.

**[15:20:37] Vishal:** Make up a scope give it to them.

**[15:20:38] Them:** Yeah.

**[15:20:40] Them:** I was just looking at Jeremy's message. He says he's not able to publish an agent, and so that might be a limitation of the free, the 30-day trial or something.

**[15:20:48] Vishal:** Okay.

**[15:20:48] Them:** Is that okay? They can still save it, right? They just can't publish it to the world.

**[15:20:53] Vishal:** They can I mean they should be able to demo it or record I mean on the day off we'll give them anyway but.

**[15:20:56] Them:** Okay.

**[15:20:58] Them:** Yes.

**[15:21:00] Vishal:** Yeah.

**[15:21:01] Them:** Okay. Just wanted to make sure.

**[15:21:05] Them:** All right.

**[15:21:06] Vishal:** Okay sounds good folks thank you so much.

**[15:21:10] Vishal:** Bye bye.

**[15:21:10] Them:** Bye. Thank you.