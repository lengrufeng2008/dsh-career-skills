# DSH Career Skills

Three focused job-search skills for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness), plus a router:

- **job-fit** — decide whether a posting is worth applying to. Liveness and dealbreaker gates, a 1–5 score, must-have mapping, level/comp, red flags.
- **resume-tailor** — tailor a CV, resume, or cover letter to a JD without inventing facts. ATS rules, evidence mapping, `[NEED: ...]` for gaps.
- **interview-prep** — company research, a STAR+R story bank, likely questions mapped to stories, questions to ask, a seven-day plan.
- **career** — routes a request to the right one of the three.

## Why this is better than a raw port

The source methodology is [career-ops](https://github.com/career-ops-hq/career-ops) (MIT). This is not its 600-script pipeline copied over. It is a native DSH adaptation:

- No Node/Python scripts, no Playwright, no `npx init`, no config file to edit.
- Four skills instead of a full CLI project; the router keeps the catalog small.
- Uses DSH tools directly: `read`, `write`, `web_fetch`, `ask_user_question`.
- Local-first, no auto-submit, no email sending, no telemetry.
- Every output is a draft the user reviews.

## Install

### DSH bundle

From a local checkout, install the folder through **Plugins → Add plugin**, or with the plugin manager. After the package is published to npm:

```bash
dsh plugin --profile web add dsh-career-skills
```

### Copy into the skills root

```bash
./install.sh
```

or:

```bash
mkdir -p "${DSH_HOME:-$HOME/.dsh}/skills"
cp -R skills/* "${DSH_HOME:-$HOME/.dsh}/skills/"
```

## Use

Ask normally:

- "Evaluate this job against my CV: <paste JD>"
- "Tailor my CV to this role: <paste JD>"
- "I have an interview at <company> for <role>; prepare me."

Or start with the router: *"Use the career skill to decide which skill fits this."*

Put the CV in `cv.md` in the workspace and the target profile in `.agents/career-profile.md` (roles, locations, compensation floor, hard dealbreakers).

## What it does not do

- It does not scan job boards or auto-apply. Paste a posting or a URL.
- It does not generate PDFs unless a converter is already available.
- It does not know the user's salary history or private facts; it asks or marks `[NEED: ...]`.
- It is not a recruiter and does not guarantee outcomes.

## Attribution

The evaluation structure and workflow are inspired by [career-ops](https://github.com/career-ops-hq/career-ops), MIT. No career-ops code is copied; the skill texts are original DSH-native adaptations. See [NOTICE.md](NOTICE.md).

## License

MIT, see [LICENSE](LICENSE).
