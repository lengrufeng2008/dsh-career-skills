---
name: interview-prep
description: Prepare for a specific job interview. Research the company and role, build a STAR+R story bank from the user's real experience, map likely questions to stories, draft questions to ask, and produce a time-blocked plan. Use when the user has an interview scheduled or asks for interview prep.
---

# Interview preparation

Preparation is retrieval, not rehearsal. The goal is to have the right story ready and to know what the interviewer is testing.

## Inputs

- The job description and company.
- The CV.
- The interview stage (screen, hiring manager, technical, panel, final) and format (video, on-site, take-home).
- Optional: the name or role of the interviewer if public.

## 1. Research the company (bounded)

At most eight web queries. Cover:

- What the company sells, to whom, and how it makes money.
- The team and product this role joins.
- Recent public moves: launches, funding, layoffs, leadership changes, strategy.
- The tech stack or operating model, if public.
- The interviewer's public work (talks, posts, repos), if relevant.

Cite sources for material claims. If something cannot be verified, say `[UNKNOWN]`; do not fill it with plausible fiction.

## 2. Build the story bank

From the CV, write 5-8 stories in **STAR+R**:

- **Situation** — the context in one sentence.
- **Task** — what the user owned.
- **Action** — what they did, with the specific method and tradeoff.
- **Result** — the measurable outcome; only numbers that exist in the CV.
- **Reflection** — what they would do differently, or what they learned.

Tag each story with the competencies it proves: ownership, ambiguity, conflict, influence, execution, technical depth, mentoring, failure.

Never invent a result. If the CV lacks a number, mark `[NEED: metric]` and ask the user.

## 3. Map likely questions

Produce three groups:

1. **Behavioral** — "tell me about a time..." Map each to a story. For each, add the 2-3 follow-up probes an interviewer is likely to ask and the detail that would make the story credible.
2. **Role-specific** — derived from the JD's must-haves. For each, the answer outline and the evidence to cite.
3. **Technical / case** — only if the stage includes it; list the topics to review, not a full course.

Flag any question the CV cannot support yet, and suggest an honest bridge: "I haven't done X directly; the closest is Y, and here is how I would approach X."

## 4. Questions to ask

Six to eight, split between:

- The role: success in 90 days, the biggest constraint, why the role is open.
- The team: how decisions are made, what "good" looks like, the last thing that broke.
- The company: strategy, the next 12 months, the interviewer's own path.

Avoid questions answered on the first page of the website.

## 5. Red flags

From the posting and research: vague scope, high turnover, unpaid take-home, "wear many hats" without ownership, unrealistic must-haves, a role that has been reposted. State the observation, not a verdict.

## Output

```markdown
# Interview prep — <Role> @ <Company>

## The 60-second version
Who they are, what the role owns, the three things to prove.

## Company brief
Five bullets with sources.

## Story bank
| Story | Competencies | Result | Use for |
|---|---|---|---|

## Likely questions
### Behavioral
1. <question>
   - Story:
   - Follow-ups:
### Role-specific
### Technical / case

## Questions to ask
...

## Seven-day plan
Day 1 ... Day 7, 30-60 minutes each.

## Red flags
...
```

## Rules

- **No fabricated stories or metrics.** A polished lie fails the follow-up.
- **One story per competency, not per question.** Reuse stories; change the emphasis.
- **Research is bounded.** Stop when the brief is enough to ask good questions.
- **No insider claims.** Public information only.
- **Local-first.** The CV and notes stay in the workspace.
