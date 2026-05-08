# Box Challenge Materials — Source Data for the Impact Report

Pulled from Box folder `SP26 AI for Impact Challenges/` via Box MCP (local Box drive mount is sandboxed by macOS TCC).

---

## The 5 finalized tracks, challenges, and champions

| Track | Final Challenge Brief (released to students) | Champion (problem owner) | Sample data file |
|---|---|---|---|
| **Business Technology** | Prospect Identification | Charlie (Farhoodi) | Charlie_Prospects.xlsx |
| **Finance & Accounting** | Innovation Portfolio Budget Intelligence | Adam (King) | Adam_Portfolio.xlsx |
| **General Innovation** | Career Navigator | Skylar Zhang (sample data file is `Vishal_CareerNav.xlsx` — Vishal contributed the dataset, Skylar championed the challenge) | Vishal_CareerNav.xlsx |
| **Human Resources** | Candidate Evaluation System | Julia Shubina Sabin | candidates.csv |
| **Marketing & Sales** | Multi-Campaign Manager | Lindsey (Savoie Halfar) | Lindsey_Campaigns.xlsx |

The Photos folder contains five winning-team photos labeled **1st_place**, **2nd_place**, **3rd_place**, **4th_place**, **5th_place** — confirming the event awarded **Top 5 overall** (matching Juan Zapata's "Top 5" claim) in addition to per-track wins.

---

## Reconciling track count with PDF / LinkedIn posts

| Source | Number cited |
|---|---|
| PDF impact report | "Five tracks" (named in Sid Chakravarty's reflection) |
| Jake Myers (mentor) post | "Six real-world business problems" |
| Box `Final/` folder | **5 challenges, 5 tracks** (one per track) |

**Resolution:** the Box folder is authoritative — **5 finalized tracks, 5 challenge briefs, 5 champions**. Jake's "six" was an off-by-one, possibly counting a backup challenge that was drafted but not released. (`Final/Business Tech/` contains a single brief, but the top-level `Business Technology/` folder has **five drafted briefs** that didn't make the cut: Career Navigator, Career Orchestration System, Group Meeting Scheduling, Prospect Identification, Research Consultation Triage. So the track design winnowed several drafts down to one final challenge per track.)

---

## Depth and rigor of the challenges (sample: Business Technology / Prospect Identification)

The released challenges were not throwaway prompts — each has a multi-part scoring rubric with explicit scoring formulas, tier definitions, and fairness/auditability requirements. Excerpt from `Final/Business Tech/SCORING_RUBRIC.md`:

> The goal is a **0–100 overall fit score** per posting, with a clear rationale and a ranked list at the end. Two reviewers (human or AI) using this rubric on the same posting should produce scores within ±6 points of each other.
>
> **Signal detection (qualitative, derived from posting text)**:
> 1. First strategic hire signal — "phrases like 'build from the ground up,' 'establish our analytics function,' 'first hire on the team,' 'founding member,' or when the role title is `Head of X` / `Director of X` at a small (10–199) company"
> 2. Cluster hiring signal — "the same company has posted 3+ roles in adjacent functions … in the last 45 days"
> 3. New initiative signal — "the posting names a specific new initiative — 'launching our partner channel,' 'expanding into LATAM,' 'spinning up a self-serve motion'"
>
> **Overall fit score (0–100)** with explicit weights:
> ```
> score = 22 (baseline)
>       + 19 if first_hire_signal
>       + 16 if cluster_hiring_signal
>       + 14 if new_initiative_signal
>       + industry_fit_bonus (High=14, Medium=8, Low=2)
>       + 8 if geography_fit
>       + program_fit_bonus (Strong=11, Moderate=6, Weak=2)
>       − min(posting_age_days, 14) ÷ 4
> ```
> Score clipped to 18–98. Tiers: A (82–100) → senior faculty; B (69–81) → standard advisor; C (55–68) → quarterly outreach; D (<55) → skip.
>
> **Fairness and auditability:** "Every component above must be reproducible from the posting alone. If the agent cannot explain a score from the posting text, that score should not be used. Do **not** use company name prestige or personal networks as inputs."

Other tracks' rubrics (Finance & Accounting confirmed; HR/Marketing/General Innovation use sample data + leadership report templates instead of an explicit point-formula rubric).

**Why this matters for the report:** the impact report can credibly say students were not given toy problems — they were given real Gies operational pain points (consulting prospect identification for the Business Advisory program, innovation portfolio reallocation for finance leaders, candidate evaluation for HR, multi-campaign management for Marketing) with executable scoring criteria, sample datasets, and leadership-reportable output formats.

---

## Box folder inventory

```
SP26 AI for Impact Challenges/
├── Business Technology/        # 5 drafted briefs (pre-cut)
│   ├── Career_Navigator_Challenge_Brief.docx
│   ├── Career_Orchestration_System_Challenge_Brief.docx
│   ├── Group_Meeting_Scheduling_Challenge_Brief.docx
│   ├── Prospect_Identification_Challenge_Brief.docx
│   └── Research_Consultation_Triage_Challenge_Brief.docx
├── Final/                       # released to students
│   ├── Business Tech/           Prospect_Identification + SCORING_RUBRIC + sample data + example leads
│   ├── Finance_Accounting/      Innovation Portfolio Budget Intelligence + SCORING_RUBRIC + portfolio data + briefings + leadership template + status_updates/
│   ├── General Innovation/      Career Navigator + 8 supporting MDs (career paths, interview prep, networking playbook, recruiting timelines, skills framework, learning resources, action plans, student profile template) + sample data
│   ├── HR/                      Candidate Evaluation System + candidates.csv + documents/
│   └── Marketing & Sales/       Multi_Campaign + sample campaigns + asana template + asset specs + sample media plans + example outputs
├── Finance & Accounting/        (top-level draft pool)
├── General Innovation/          (top-level draft pool)
├── Human Resources/             (top-level draft pool)
├── Marketing & Sales/           (top-level draft pool)
├── Impact data/                 EMPTY — likely placeholder for survey/metric collection
└── Photos/                      1st – 5th place team photos (jpeg)
```

---

## Suggested additions to the PDF impact report

1. **Add a "Challenge Design" section** with the table above (5 tracks × 5 challenges × 5 champions) and a one-paragraph note that each challenge came with a scoring rubric, sample data, and a leadership-report template — emphasizing rigor.
2. **Replace "Five project champions, supported by numerous mentors"** in the current Operational Impact section with the **named** champions (Charlie Farhoodi, Adam King, Lindsey Savoie Halfar, Vishal Sachdev, plus the HR champion — needs confirmation).
3. **Photos:** the Top-5 photos exist on Box. Insert one or two (with student permission) to humanize the report. The 1st-place team is Team 007 / Magelli Scout (Prateek Verma + Jeswell Mathew + Venkatesh Mehra + Anmol Aggarwal).
4. **The "drafted vs. released" funnel** — going from ~5 drafted briefs in Business Tech alone down to 1 released per track shows curation effort. Could be a small detail in the Operational Impact section as evidence of design rigor.
5. **The empty `Impact data/` folder** suggests a planned survey or post-event metrics collection that didn't happen or hasn't been uploaded yet. If that data exists somewhere else (Discord poll exports, post-event email survey responses), it would strengthen the current quantitative claims (120+ signups, 30 teams, 22 completions).

---

## Action items / unresolved

- **Confirm HR challenge champion** — likely Jamie Nelson per Vishal's kickoff post mentor list, but not named in the file/folder structure.
- **Reconcile "5 vs 6 challenges"** wording across the report — the Box data says 5; align Jake Myers's "six business problems" attribution accordingly.
- **Photos:** decide whether to include in the public-facing report (privacy/consent check first).
- **Impact data folder:** ask whoever owns it (likely the student leads — Ashleyn / Keshav / Sahib) whether post-event survey data lives elsewhere.
