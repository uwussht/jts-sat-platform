# JTS SAT — Digital SAT preparation platform (MVP)

Pure HTML, CSS and JavaScript. No frameworks, no build step, no npm. Open
`index.html` by double-clicking it and the whole app runs from `file://`.

---

## Running it

```
open index.html          # macOS
start index.html         # Windows
```

Serving the folder over HTTP is optional for the app itself, but **required if
you want a live AI provider** (see below):

```
npx http-server .        # then open http://localhost:8080
python3 -m http.server   # then open http://localhost:8000
```

## Where things are

```
index.html              shell: header, tab bar, router container, Desmos panel
admin.html              question editor (localStorage overlay + change history)
css/core.css            design system: tokens, light/dark themes, components
js/core.js              store, router, i18n, UI kit, timer, Desmos, AI adapter,
                        SPR checker, question bank, mastery engine, planner
js/data/                content: skills, exam dates, colleges, 300 questions,
                        vocabulary, Desmos guide
js/modules/             one file per screen
i18n/en.js ru.js kk.js  interface strings, 539 keys each, verified at parity
```

The screens, in the order a student meets them: `#/auth` → `#/onboarding` →
`#/diagnostic` → `#/today` → `#/plan` → `#/practice` (and `#/practice/weak`) →
`#/question` → `#/mocks` (`/run`, `/result`, `/review`) → `#/progress` →
`#/vocab` → `#/desmos-guide` → `#/settings`.

All progress lives in `localStorage` under the key `jts_sat_v1`, currently at
`schemaVersion: 3`, with a forward-only migration in `js/core.js`. Each bump
adds a case and never rewrites old data in place, so an older profile opens
without losing anything.

---

## Design system

One purple ramp, and no rounded corners anywhere.

**Purple is the product's colour, not an accent.** `--brand-050` through
`--brand-950` in `css/core.css` drive the header, the hero, the page ground, the
eyebrows, every interactive state and both themes. The neutrals are tinted
towards it, so nothing on screen reads as plain grey. The dark theme is the same
ramp pushed to the bottom rather than a neutral dark with a purple button.

**Semantic colour is deliberately not purple.** Correct is green, wrong is red,
and the mastery scale runs grey → red → amber → green. Those carry meaning a
student reads at a glance, and recolouring them to match the brand would delete
it. The neutral `.notice` is brand-tinted; `.notice-ok`, `.notice-warn` and
`.notice-danger` keep their own colours, and so do the option states, the
accuracy bars and the skill heatmap.

**Every container is square.** The radius tokens (`--r-sm` … `--r-xl`) are all
`0` rather than deleted, so one edit restores rounding everywhere without
rewriting a single rule. Separation that used to come from a soft corner and a
soft shadow now comes from a crisp 1px border on a flat surface: `--shadow-1` is
`none`, `--shadow-2` is a 2px hard edge, and only genuine overlays — modals,
toasts, the sign-in card — get a real shadow.

The sign-in screen is the one place the brand speaks at full volume: the header
is hidden while signed out, so `#/auth` fills the window with the purple ramp
and centres a single square card.

## AI provider

The AI tutor goes through a single adapter, `JTS.AI.ask()`. It has four modes,
chosen in **Settings → Developer → AI provider**:

| Provider | What it does | Cost |
|---|---|---|
| **Mock (question bank)** — default | No network call at all. Hints, explanations and per-distractor rationales come from the reviewed JTS bank already attached to each question. | none |
| **Groq** | OpenAI-compatible `/chat/completions`. Preset endpoint and model; you supply a key. | Groq's own free tier, then their rates |
| **OpenAI-compatible endpoint** | Same request shape, your endpoint and model (OpenRouter, Together, a local llama.cpp server…). | depends |
| **Own server (JTS payload)** | POSTs the AI-01 payload unchanged to your server, which decides what to call. **This is the shape to use in production.** | depends |

A pilot can ship on **Mock**: it costs nothing and never invents an answer.

### Using Groq during development

1. Get a key at <https://console.groq.com/keys>.
2. Settings → Developer → AI provider → **Groq**.
3. Paste the key into **API key**. Endpoint and model are pre-filled; override
   the model with any current id from <https://console.groq.com/docs/models>.
4. Press **Test connection**. It makes one tiny request and prints the real
   result, so a misconfiguration is found here and not in front of a student.

**If Test connection says "Failed to fetch"** it is almost always CORS. Opening
`index.html` from `file://` sends `Origin: null`, which most APIs reject. Serve
the folder over `http://localhost` (see Running it above) and try again. If it
still fails, the provider does not allow browser calls at all and you need the
proxy below.

Whatever happens, a failed call is not a dead end: the adapter logs the error
and falls back to the reviewed bank explanation, and the student sees a note
saying so.

### Putting your own key in, properly

> **The key in Settings is stored in `localStorage` and sent from the browser.**
> Anyone who opens devtools on the deployed app can read it and spend your
> quota. That is fine for development with a throwaway key. It is **not** fine
> once real students use the platform.

For the pilot, put a thin proxy between the browser and the provider, so the key
never leaves your server:

```js
// server.js  —  node server.js
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('.'));

const KEY = process.env.GROQ_API_KEY;        // set in the environment, never in git

app.post('/api/ai', async (req, res) => {
  // req.body is the JTS AI-01 payload; translate it for your provider here,
  // or forward it as-is if your provider speaks the same shape.
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: req.body.system || 'You are a Digital SAT tutor.' },
        { role: 'user', content: req.body.user || JSON.stringify(req.body) }
      ],
      max_tokens: 700
    })
  });
  const j = await r.json();
  res.status(r.status).json({ text: j.choices?.[0]?.message?.content || '' });
});

app.listen(3000, () => console.log('http://localhost:3000'));
```

Then in Settings pick **OpenAI-compatible endpoint** (or **Own server**) with
endpoint `http://localhost:3000/api/ai` and leave the API key field empty. The
client code does not change — that is what the adapter is for.

Add per-student limits and request logging in the proxy; the in-app daily limit
(Settings → Daily AI request limit, default 40) only protects against a student
clicking too much, not against a stolen key.

### What the adapter guarantees, whichever provider you pick

- **A hint never contains the answer.** On `intent: 'hint'` the correct answer
  is not even included in the request, and the system prompt forbids naming it.
  Revealing the solution takes a separate, deliberate "Show the full solution".
- **Reading the explanation before answering marks the attempt as helped.** It
  is then logged separately and never counts toward mastery.
- **Uncertainty is stated, not papered over.** When the model is unsure — or in
  mock mode, where free-form chat has no verified answer — the reply says so and
  offers the reviewed bank explanation plus a link to a JTS teacher.
- Every AI reply carries 👍 / 👎, written to `aiFeedback[]` as pilot metrics.

---

## Mock tests

Two separate things share the `#/mocks` screen.

**Imported results** are scores the student got somewhere else — a real SAT, a
Bluebook practice test, anything. You type the two section scores; the total is
derived, never typed, so a total that disagrees with its parts cannot be
entered. A section score must be a multiple of 10 between 200 and 800. The
history table shows the change against the previous result, and the trajectory
chart draws imported results against the goal line from onboarding.

**The internal simulation** is four modules with the Digital SAT's shape:

| | questions | minutes |
|---|---|---|
| R&W module 1 | 27 | 32 |
| R&W module 2 | 27 | 32 |
| break | — | 10 |
| Math module 1 | 22 | 35 |
| Math module 2 | 22 | 35 |

Module 2 of each section is chosen after module 1 is graded: 60% or better
routes to a harder set, anything less to an easier one, the way the real
adaptive form works. The routing is shown to the student rather than hidden.

Modules run in exam mode — hints, explanations and the AI tutor are **absent
from the DOM**, not merely hidden — and a finished module cannot be reopened. A
timed run uses the wall clock, so closing the laptop for ten minutes costs ten
minutes; an untimed run keeps a clock on screen that never closes a module, and
its result carries an `untimed` tag. The simulation needs a screen of at least
1024px; a phone gets a note and can still import results and read history.

### What the score estimate is, and is not

The result screen shows a raw count per section and a **range**, labelled as a
JTS internal estimate. There is no predicted SAT score anywhere in the product
(acceptance criterion 12), and the range must never be narrowed into a single
number.

The model, in full, is `JTS.mock.estimate`:

- The module-2 route sets the band. Reaching the harder second module is what
  puts the upper half of the scale in play at all; staying on the easier one
  caps what the form can return. JTS uses **400–800** and **200–600** for those
  two bands. These are our working figures. College Board does not publish the
  per-form conversion tables, so nobody outside it can do better than a model.
- Inside the band, the raw share is linear. Real equating is not.
- The reported range is the midpoint ±40, rounded to 10. That width stands for
  everything the model does not know: equating, item difficulty beyond our own
  three labels, and the fact that our bank is not a real form.

Treat the number as a direction of travel between runs, not as a score. If you
want a figure a student can rely on, the honest answer is still an official
College Board practice test.

## Progress

Everything on `#/progress` is a measurement of work already done. There is no
score predictor and nothing that says "you will get X".

- **Skill map** — all 30 skills as a heatmap, grouped by domain, coloured by
  mastery. A skill without six independent attempts shows what is missing
  ("4 more independent attempts needed") rather than a percentage nobody
  should trust. Clicking a cell builds a ten-question session on that skill.
- **Accuracy by domain** — independent attempts only. Work done with a hint or
  after reading the explanation is counted, and shown, separately.
- **Mock trend** — imported results and internal simulations as two series
  against the goal line.
- **Study time** — minutes this week and this month, plus median seconds per
  question against the pace benchmark (71s R&W, 95s Math), shown only once
  there are at least six independent timed attempts in that section.
- **90-day calendar**, streak with its best, and the three badges: a 7-day
  streak, a first mastered skill, and 100 independent questions. All three are
  always on screen; an unearned one is greyed rather than hidden.

## Vocabulary

514 cards from the JTS word list plus anything the student adds, scheduled with
SM-2. A card graded **Again** comes back in ten minutes and its ease factor
takes a permanent dent (floor 1.3); **Good** goes 1 day → 6 days → previous
interval × ease. Past 21 days a card counts as mastered.

Reviews come before new cards in the daily queue, because a word being
forgotten costs more than a word never seen. The daily goal is 5, 10 or 20 and
lives on the vocabulary screen itself as well as in Settings.

**My words** lists the whole deck with search and filters, and the ✚ button
adds a word of the student's own — word and definition required, example and
Russian gloss optional. Only the student's own words can be deleted.

The word list currently ships as `licenseStatus: 'licensed'` and with every
entry in the `academic` category except two transitions, because the source
sheet has no category column. Both are open questions for JTS — see **Content
and licensing** below.

## Desmos guide

Seven sections — basics, graphing, solving, tables and regression, SAT
techniques, shortcuts, and the practice tasks — each with its own calculator,
its own expressions to type, a "mark as learned" checkbox, and a slot for a JTS
screencast (put the URL in `video:` in `js/data/desmos-guide.js`).

The calculator is mounted when a section is first opened, not seven at once,
and is never removed or reparented afterwards, so it keeps whatever the student
typed into it.

Six timed practice tasks carry two figures each: how long the task takes by
hand and how long it takes in Desmos. **Two of the six are faster by hand**, and
the screen says so. A student who learns to reach for the calculator on every
question has learned the wrong lesson, and 25 seconds spent graphing
`3x + 12 = 5x − 8` is 25 seconds off the end of the module.

## Acceptance criteria (§14)

| # | Criterion | Where it lives |
|---|---|---|
| 1 | A student with no result takes the diagnostic and gets a plan **with no invented SAT score** | `js/modules/diagnostic.js` returns a mastery map; `profile.level` stays `undetermined` until a result is measured |
| 2 | Every lesson has a goal, a set of actions, an expected time and a completion state | `JTS.planner.generate`, rendered on `#/today` and `#/plan` |
| 3 | A reload restores answers, marks, time and session progress | `state.activeSession`, written on every change; timed mock modules additionally run on the wall clock |
| 4 | The bank supports `mcq` and `spr` with equivalent answer forms | `JTS.spr.check` — fraction/decimal equivalence at 1e-6, Digital SAT entry rules |
| 5 | Errors are classified, return for review, and helped work is counted separately | `JTS.attempts.logError`, `resolveIfDemonstrated`, `JTS.mastery.isIndependent` |
| 6 | Exam mode has no AI, hint or explanation until the end; 27/32 + 27/32 + break 10 + 22/35 + 22/35 with the second module routed | `js/modules/question.js` omits the help controls from the DOM; `JTS.mock` |
| 7 | Desmos on the whole Math section, absent in R&W | `question.js` gates the tool on `section === 'math'`, not per question |
| 8 | Every question carries source, licenseStatus, answer, explanation (en/ru/kk), reviewStatus | `JTS.bank.validateAll` fails the bank otherwise; run it from `admin.html` |
| 9 | Laptop and phone for practice; the mock restriction is documented | Responsive 360–1320px; the simulation needs ≥1024px and says so on a phone |
| 10 | A question can be edited through `admin.html`, with history, without a developer | localStorage overlay + `overrideHistory` + JSON export |
| 11 | Stems and options always in English; explanations in EN / RU / KZ | Question schema keeps `stem`/`options` as plain strings; `explanation` is `{en,ru,kk}` |
| 12 | No screen shows a predicted SAT score | The mock shows a raw count and a labelled range; nothing else shows a score at all |

Criteria 3, 5, 6, 7, 9, 10 and 12 have direct tests in the e2e suites; the rest
are structural and are checked by `JTS.bank.validateAll` or by inspection.

## Deliberate limitations

- **The full mock test needs a screen of at least 1024px.** On a phone it shows
  a note saying so. Practice sessions, the diagnostic and every other screen
  work down to 360px.
- **A profile is a browser record, not an account.** The password is stored as a
  non-cryptographic digest; it separates two students on one laptop and nothing
  more. Use **Settings → Export profile** to move progress between machines.
- **Reference data is provisional.** `js/data/exam-dates.js` and
  `js/data/colleges.js` ship with `verified: false` on every row, and the UI
  prints the source and year next to the figures. Confirm exam dates against
  collegeboard.org and university figures against each Common Data Set before
  students see them.
- **Question content is draft.** All 300 items are JTS original with
  `reviewStatus: "draft"`, awaiting a methodologist's sign-off. Nothing is
  copied from College Board, Bluebook, Khan Academy or any other publisher.
- **The vocabulary list's provenance is unconfirmed.** The 514 cards ship as
  `licenseStatus: 'licensed'`, which is the conservative reading of a list JTS
  supplied without a source. If the definitions and examples were written at
  JTS, change it to `original` in `js/data/vocab.js`; if they came from someone
  else's published list, that is a rights question to settle before launch.
- **Vocabulary categories are not real yet.** The source sheet has no category
  column, so 512 of 514 cards are tagged `academic` and two `transition`. The
  screen already renders all four categories plus the student's own words —
  add a column to the sheet and regenerate to split out `literary` and
  `connotation`.
- **No predicted SAT score anywhere.** The diagnostic returns a mastery map; the
  internal mock returns a raw count and a range explicitly labelled as a JTS
  estimate. The bands behind that range are JTS's own model, not College
  Board's — see **Mock tests** above.
- **The simulation is not a real form.** It draws on the same 300-item bank the
  rest of the platform uses, so a student who has practised a lot will meet
  questions they have seen. Each run avoids repeating a question within itself,
  but not across runs.

---

## Content and licensing

Every question carries `meta.licenseStatus`, one of `original`, `licensed` or
`link-only`. Only `original` items are used in the internal mock exam. External
practice material must be referenced as `link-only` — never copied into the bank.

## Editing questions without a developer

Open `admin.html`, find a question by id, edit any field. Changes are stored as
a `localStorage` overlay with a full change history and never touch
`js/data/questions-*.js`. Export the overlay as JSON to hand the edits back for
merging into the source files.
