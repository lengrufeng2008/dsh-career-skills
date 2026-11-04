---
name: resume-tailor
description: Tailor a CV, resume, or cover letter to a specific job description without inventing anything. Extracts the JD's requirements, maps them to real evidence, rewrites the summary and bullets for ATS and the recruiter's six-second scan, and marks missing facts. Use when the user wants a tailored CV, cover letter, or application answers.
---

# Resume tailoring

Tailoring is selection and phrasing, not invention. The CV must survive an interview: every line has to be defensible.

## Inputs

- The job description (text, URL, or file).
- The current CV (`cv.md`, a path, or pasted text).
- Optional: the `job-fit` report, a target role, or a tone preference.

If the CV is missing, stop and ask for it. Do not reconstruct a career from the JD.

## Process

### 1. Extract the target

List 10-15 signals from the JD: must-have skills, tools, domain, seniority, outcomes, and the words the company repeats. Separate **must** from **nice** using the JD's own wording.

### 2. Map evidence, truthfully

For each signal, find the strongest real evidence in the CV. Mark it:

- `direct` — the CV shows the exact skill or outcome.
- `adjacent` — a close transferable experience; say what transfers.
- `missing` — no evidence; do not add it to the CV. Write `[NEED: ...]` and tell the user what would unlock it (a project, a metric, a certificate).

### 3. Rewrite, in this order

1. **Headline and summary** — target the role in one line: level, domain, and the two strongest proof points. No objective statements.
2. **Experience bullets** — lead with the outcome, then the action and the method. Mirror the JD's language only where the CV already supports it. Keep the strongest 3-5 bullets per role; cut the rest.
3. **Skills** — group by category; put the JD's must-haves first; drop tools the user cannot discuss.
4. **Projects / education** — keep only what supports this role.

### 4. ATS and scan rules

- One column; no tables, text boxes, icons, or graphics that carry meaning.
- Standard headings: Summary, Experience, Skills, Projects, Education.
- Dates as `YYYY-MM`; company, title, location on separate lines.
- File name: `Firstname-Lastname-<Role>.md` or `.pdf`.
- Keywords appear in the summary, a bullet, and the skills section — not stuffed.
- Every bullet starts with a verb and includes a result, scale, or method when the CV has one.
- Max two pages; one page for under eight years of experience.

### 5. Cover letter (only if asked)

Four short paragraphs: the role and why this company; the single strongest proof; the gap and how it is covered; a clear close. Under 250 words. Mirror two or three JD phrases. No "I am writing to express my interest".

## Output

```markdown
# <Name> — <Target role>

## Summary
...

## Experience
### <Company> — <Title> (<dates>)
- ...

## Skills
...

## Projects / Education
...

## What changed and why
- <change> — <JD signal> — <evidence>

## Missing evidence
- [NEED: ...] — what would unlock it
```

If the user wants a file, write `tailored/<company>-<role>.md` and, when asked, a clean HTML version. Do not generate a PDF unless a converter is available; say so.

## Rules

- **Never invent** a metric, employer, title, date, degree, certification, or tool. If the CV says "improved latency", do not add "by 40%" without a source.
- **Preserve the user's voice.** Do not upgrade "built" to "architected" or "stuff" to "solutions".
- **One page of changes beats a rewrite.** In a point-edit request, change only what was asked.
- **No auto-apply.** Draft only. The user reviews and submits.
