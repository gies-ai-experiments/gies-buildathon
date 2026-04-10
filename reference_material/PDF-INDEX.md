# Microsoft Copilot Studio Docs — PDF Index

Source: `microsoft-copilot-studio.pdf` (1,778 pages, 63.8MB)
Downloaded from MS Learn, covers full Copilot Studio documentation as of ~March 2026.

## Sections Relevant to Hackathon (validated)

| Pages | Section | Relevance |
|-------|---------|-----------|
| 1-3 | **Documentation home / TOC** | Overview of all sections: Create, Test, Publish, Deploy |
| 4-5 | **Copilot Studio Overview** | Home page screenshot (Agent/Workflow tabs, 3 scratch cards), "What is an agent?", "What is an agent flow?" — KEY definitions |
| 6-8 | **How agent conversations work** | Topics, NLU, generative answers, conversation flow |
| 8-10 | **Access Copilot Studio** (web app vs Teams app), **Plan your agent**, **Create an agent** | Decision tree: M365 Copilot vs Copilot Studio |
| 10-14 | **M365 Copilot vs Copilot Studio comparison** | Feature table, governance differences, decision flowchart |
| 14-17 | **AI-based agent authoring overview** | Generative answers, AI general knowledge, quotas |
| 18-20 | **What's new** (Feb 2026 → June 2025) | Claude models added, agent evaluations, MCP support, code interpreter |
| 21-30 | **Get access / licensing**, **Quickstart: Create and deploy agent** | Trial sign-up (free 30-day, can test but NOT publish), step-by-step with screenshots |
| 31-40 | **Quickstart continued** | Edit basics, add knowledge, test, change intro, publish to demo site |
| 41-60 | **Classic bot migration**, **Unified authoring UI changes**, **System topics**, **Variables**, **Events**, **Generative AI features** | Mostly legacy migration — skip for students |
| 61-80 | **Security & governance**, **Security FAQs**, **Agent runtime protection** | Skip for hackathon |
| 200-220 | **Agent templates** (IT Helpdesk, Safe Travels, Sustainability Insights, Voice, Weather, Website Q&A) | Good inspiration for hackathon challenges |
| 300-320 | **Connectors: Copilot connectors vs Power Platform connectors** | KEY: Two types of connectors explained with comparison table and decision guide |
| 320-340 | **Unstructured data as knowledge source** | How files get chunked/indexed in Dataverse, OneDrive/SharePoint as knowledge, supported file types |
| 340-360 | **Add unstructured data** | Step-by-step for OneDrive, SharePoint, knowledge base data |
| 400-420 | **Variables** (set, use, pass between topics, global variables) | Important for building structured agents with branching logic |

## Deep Sections (indexed via subagents)

| Pages | Section | Relevance |
|-------|---------|-----------|
| 500-505 | **A2A (Agent-to-Agent) connections** | Multi-agent orchestration quickstart, connecting external agents |
| 506-518 | **Event triggers** | Agents reacting to SharePoint/OneDrive/Planner/email/schedule events autonomously — highly relevant |
| 601-614 | **SharePoint/OneDrive MCP server tools** | File/folder CRUD operations (deprecated March 2026, newer servers available) |
| 700-706 | **Prompts with code interpreter** | Building topics that use prompt tools to process files, generate charts/PDFs/Excel — highly relevant |
| 706-710 | **Batch testing for prompts** | Upload test cases, set evaluation criteria, run batch tests — relevant for hackathon judging |
| 710-716 | **Prompts as tools in agents/flows** | Add custom prompts at agent/topic/flow level — highly relevant |
| 714-716 | **Prompt engineering best practices** | Be specific, use examples, keep it simple, provide fallback — good for students |
| 810-823 | **Computer-use agents (preview)** | Vision+reasoning to interact with apps/websites; human supervision; supported models (Azure CUA, Claude Sonnet 4.5) |
| 900-916 | **Voice agents** | Post-call automation, SIP headers, reprompt config, custom lexicons — niche |
| 1002-1010 | **Component collections** | Reusable packages of topics/knowledge/tools/MCP across agents |
| 1200-1201 | **Embed agent on custom website** | HTML/CSS/JS code for custom web canvas embedding |
| 1300-1305 | **Agent node vs Prompt node in Power Automate** | Agent node = full tools + knowledge; Prompt node = code interpreter + Dataverse only |
| 1305-1319 | **Multistage AI approvals in agent flows** | AI-powered approval stages with prompt-writing best practices — relevant |
| 1400-1404 | **Multi-agent orchestration API schema** | AgentContext/UserContext/TriggerContext data contracts |
| 1413-1419 | **Data policies (DLP) for agents** | Full list of publishable channels: Teams, Direct Line, Facebook, WhatsApp, SharePoint, Omnichannel |
| 1500-1513 | **SSO & authentication** | Teams SSO, generic OAuth, System.User.AccessToken for protected APIs |
| 1515-1519 | **Multitenant mode (preview)** | Cross-tenant agent access via Teams/M365 Copilot |
| 1612-1614 | **Platform card / AI features overview** | Lists all AI-driven features: generative answers, orchestration, deep reasoning, computer use, prompts |
| 1700-1706 | **Conversation transcripts** | Dataverse transcript schema, activity types, enhanced node-level data |
| 1711-1719 | **Application Insights telemetry** | Azure monitoring, Kusto queries, custom dimensions, dashboards |

## Validated Mental Model (8 points)

All 8 points confirmed accurate against the docs:

1. **Two top-level creation paths**: Agent | Workflow tabs on home page (p.4 screenshot)
2. **Three scratch cards**: Create workflow, Create an agent, Create computer-using agent (p.4)
3. **Agent** = AI companion using Knowledge + Topics + Tools + Agent Flows (p.4-5 definition)
4. **Agent Flow** = deterministic automation, runs standalone or called from agent (p.5 "What is an agent flow?")
5. **Topics** = structured conversation paths with branching/conditions/variables (p.6-7, p.400+)
6. **Tools** = connectors to external systems via Power Platform connectors (p.300-320)
7. **Knowledge** = RAG sources: websites, SharePoint, OneDrive, uploaded files, Dataverse (p.320-360)
8. **Agent can call agent flow mid-conversation** as a tool (p.5: "configure an agent flow to trigger from an agent as a tool")

### Nuance added from docs:
- **Two types of connectors**: Copilot connectors (index into MS Graph, semantic search) vs Power Platform connectors (real-time API calls, no data movement). For hackathon, students will use Power Platform connectors.
- **Knowledge sources**: Files uploaded → Dataverse → chunked → vector embeddings → Azure AI Search. Max 500 knowledge objects per agent, max 5 different source types.
- **Free trial limitation**: Can create and TEST agents but CANNOT publish. Students need the Gies license to publish.
- **Models available**: GPT-4.1 (default), Claude Opus 4.6, Claude Sonnet 4.5 (added Feb 2026)
- **Vibe coding built in**: Copilot inside Studio can create topics from natural language descriptions
