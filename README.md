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
`#/diagnostic` → `#/today` → `#/roadmap` → `#/plan` → `#/practice` (and
`#/practice/weak`) → `#/question` → `#/mocks` (`/run`, `/result`, `/review`) →
`#/progress` → `#/vocab` → `#/desmos-guide` → `#/guide` → `#/settings`.

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

**The chrome is a fixed sidebar plus a slim top bar.** The sidebar carries the
brand, the target score and exam date, the seven destinations, the language and
theme controls and the signed-in profile; it is `position: fixed` rather than
sticky, because sticky gives it the height of one screenful and any page taller
than the window then shows the page ground beside the content. Below 1024px it
becomes a drawer opened from the top bar and closed by any route change, and on
a phone the five primary destinations also mirror into the bottom tab bar.

The top bar owns the name of the screen — `JTS.shell.renderTopbar` takes it from
the route's own `title` key — so no screen repeats its own title, and
`JTS.shell.topbarActions()` gives each one a slot on the right for its
screen-level controls (rebuild the plan, the vocabulary counts, back out of weak
skills). The content column is measured from the left edge of the body rather
than centred in the window, so it does not drift away from the sidebar.

The sign-in screen is the one place the brand speaks at full volume: the chrome
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

## Onboarding and the diagnostic

Onboarding teaches before it asks. Six steps, four of them about the exam
itself, because a student who does not know how the SAT is built cannot judge a
target score or read a diagnostic.

| # | Step | What it is |
|---|---|---|
| 1 | What the SAT is | Scored 400–1600, adaptive, no penalty for guessing, retakeable |
| 2 | How the exam is built | The four modules and the break, with the pace each implies |
| 3 | Your target score | The only number the student sets; prefilled from a university's middle-50% |
| 4 | Exam day in Kazakhstan | How to register, what to bring, what not to — and the exam date picker |
| 5 | Reading and Writing | The four domains and their share of the section |
| 6 | Math | The four domains, Desmos, and the grid-in rules |

Content lives in `js/data/sat-info.js`. **Domain weights are not in it** — the
Reading and Writing and Math steps read them from the live skill taxonomy, so
the percentages a student is taught cannot drift away from the ones the planner
and the mock actually use.

`satInfoMeta.verified` is `false`, like the exam dates. The College Board rules
quoted (passport, Bluebook setup, the device, what is not allowed) are the
standing international rules and change rarely; **fees, deadlines and the list
of test centres in Kazakhstan are deliberately not stated** — the screen links
to collegeboard.org rather than printing a number that will be wrong next
cycle. Confirm the text against the official site before students see it.

### The diagnostic report

Onboarding ends at the diagnostic for everyone, and the diagnostic finishes
onboarding. Nothing in the six steps assigns a level; a real SAT or Bluebook
result comes in through **Mock tests → Add a result**, not through a text box.

**A student who already has a score takes it too.** The old "do you have a
result?" branch is gone: a reported score says where you landed, and the
diagnostic says which of the eight domains it came from, which is what a plan
needs. The diagnostic also has a permanent place in the sidebar so it can be
retaken — a retake adds a run rather than replacing one, every attempt stays in
the history, and the plan is rebuilt from the newest (keeping the weeks already
spent, redoing the ones ahead).

The report gives a percentage overall, a percentage per section and a
percentage per domain, and attaches advice to each domain in three bands —
start here / keep practising / leave alone for now. Three bands, because three
questions per domain supports three bands and nothing finer; the screen says so
rather than implying a precision it does not have. It then names the two
domains the plan will open with, chosen from what was missed **weighted by how
much of the exam each domain carries**, not simply from the lowest percentage.

Availability is asked for at the bottom of that report rather than during
onboarding, because that is the moment the plan is actually built.

## Roadmap, guide, and the plan as a calendar

**`#/roadmap`** is a level map: one road that folds back and forth from the
diagnostic at the bottom to exam day at the top, a numbered stop for each phase,
three stars over each stop, and a marker on the stop the student is standing on
today. Which weeks each phase covers is not restated here — it comes from
`JTS.planner.phaseForWeek`, so the roadmap and the plan can never disagree about
which week belongs to which phase.

**The road does not scroll.** The stage is sized from the window
(`clamp(220px, 100vh - 540px, 420px)`), so the whole road and the detail panel
under it are on screen together at every laptop size we test; you move along it
with the ‹ › arrows, the arrow keys, or by tapping a stop, and only the panel
changes. Being able to see the whole road at once is the point of drawing a
road, and a road you have to scroll is a list.

The stops are not positioned by hand. The road is one SVG path; after it mounts,
each stop is placed at its own fraction of `getTotalLength()`, so a pin can
never drift off the tarmac however the road is redrawn, and the travelled part
is coloured with the same measurement. Stars are the phase's own sessions — some,
most, all — and never a score of any kind. Names appear only on the stop you have
selected, the stop you are on and the end of the road: the road folds over
itself, so two stops can sit a pin's height apart, and the panel under the map
says what every number means anyway.

The panel is written for someone who has never sat an SAT and does not yet know
what "phase 3" is meant to mean: **what you do** all week, **what you will be
able to do by the end**, the phase's real calendar dates, its progress, and the
one thing to press now. `How this works, in three moves` opens the whole method
in three sentences — measure, practise, simulate — from the header, where it
costs no height.

"You are here" is read off the calendar (`JTS.planner.currentPhase()`), not off
`profile.currentPhase` — that field records only where the plan *started* and
nothing moves it, so a roadmap that trusted it would still be pointing at the
diagnostic in November.

**The road is also on the dashboard.** `JTS.roadmap.reminder()` puts the six
squares, the current step, its stars and one line about it on `#/today`, because
a road you have to remember to open is not a reminder. It links to the full map
rather than repeating it.

The sign-in screen does not draw it. A visitor has no plan, so a roadmap there
is a picture of somebody else's; the screen is the form and the note saying
where a profile actually lives, and nothing else.

**`#/guide`** is what every part of the platform is for, built from
`JTS.shell.navItems` rather than written out again — a destination added to the
sidebar cannot go missing from the guide, and the only thing a new screen has to
supply is one `guide.for.<path>` string. Under the section list are the four
rules that explain why the platform sometimes says something unwelcome: help is
counted separately, errors come back, exam mode has no help in it, and no screen
predicts your SAT score.

It is a destination in the sidebar like any other, not a question mark in a
corner: the guide is read once at the start and then wanted again months later,
by someone who has forgotten why their errors keep coming back. It is the one
screen that does not list itself — a page telling you to go where you already
are is not navigation.

**The plan has two views of the same lessons.** The week grid answers "what am I
doing on Wednesday"; the month calendar answers "when does this actually end",
which is the question a student asks when they open a plan at all. Both read
`JTS.planner.allLessons()` and match by date, so a moved lesson shows on the day
it moved to in both. The month marks today and exam day, and a chip opens the
same lesson dialog the week grid opens.

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

## Highlighting

Selecting text in a passage or a stem highlights it, and clicking a highlight
removes it. Three rules make that behave the way a student expects:

- **Whole words.** A drag that stops in the middle of a word means the word.
  `HL.snap` grows the range out to the nearest whitespace on both sides and
  trims the edges, so a highlight never cuts "straightforward" in half.
- **Nothing outside the text is selectable.** `.q-shell` is `user-select:
  none` and only `.q-passage` and `.q-stem` opt back in. Dragging across the
  toolbar used to paint the browser's blue selection over the clock, the
  buttons and the note beside them.
- **One listener, on the document.** A drag that starts in the passage and
  ends over the toolbar never fires `mouseup` on the passage, so the old
  per-container listener never ran and never cleared the selection — it was
  left lying across half the screen. The document-level handler applies the
  range if it landed in a highlightable container and clears the selection
  either way. It steps aside inside dialogs and form fields, so the scratchpad
  still works, and it listens for `touchend` as well.

Offsets are stored per question against the passage and the stem separately
(`highlights: { p: [], s: [] }`), so answer choices and feedback appearing
below can never shift a saved offset.

## The calculator behaves like the one in the test

The Digital SAT's calculator is a window: you open it once and it stays open for
the rest of the module, you drag it clear of the question, and you can make it
bigger. This one does the same.

- It is **one iframe for the whole app**, toggled with `display`, so moving
  between questions never reloads it and never loses what is on the graph.
- **Open stays open.** The flag lives on the session (`meta.calcOpen`), so the
  calculator is still there on the next question and still there after a reload
  mid-module. It closes when the section is not Math and when the session ends.
- It starts **docked** to the side, where a question and a graph can be read at
  once; dragging its title bar turns it into a floating window, and where the
  student put it is remembered in `settings.calcPanel`. The window is clamped
  inside the viewport — a calculator with its corner off the screen cannot be
  resized back — and on a phone it always fills the screen instead.
- The button carries `aria-pressed`, so its state is not only a colour.

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
| 7 | Desmos on the whole Math section, absent in R&W | `question.js` gates the tool on `section === 'math'` and rebuilds the tools when the question changes, so a mixed session (the diagnostic) gains and loses the calculator with the section |
| 8 | Every question carries source, licenseStatus, answer, explanation (en/ru/kk), reviewStatus | `JTS.bank.validateAll` fails the bank otherwise; run it from `admin.html` |
| 9 | Laptop and phone for practice; the mock restriction is documented | Responsive 360–1320px; the simulation needs ≥1024px and says so on a phone |
| 10 | A question can be edited through `admin.html`, with history, without a developer | localStorage overlay + `overrideHistory` + JSON export |
| 11 | Stems and options always in English; explanations in EN / RU / KZ | Question schema keeps `stem`/`options` as plain strings; `explanation` is `{en,ru,kk}` |
| 12 | No screen shows a predicted SAT score | The mock shows a raw count and a labelled range; nothing else shows a score at all |

Criteria 3, 5, 6, 7, 9, 10 and 12 have direct tests in the e2e suites; the rest
are structural and are checked by `JTS.bank.validateAll` or by inspection.

## A redraw is not a navigation

`JTS.router.render()` used to end with `scrollTo(0, 0)` unconditionally. Several
screens answer a click by re-rendering themselves — the practice builder does it
on every skill box, filter chip and section tab — so ticking a checkbox halfway
down the page threw the student back to the top of it, which made the builder
effectively unusable on a laptop screen.

The router now compares the address it is rendering with the one it rendered
last: a change of address starts at the top, a redraw of the same screen restores
the offset it read before tearing the old one down. Screens that *do* want the
top after a redraw — the question screen, moving from one question to the next —
scroll for themselves, as they always did. The e2e suites measure this on the
builder, inside a session, and after a real navigation.

## Onboarding: nothing here is a dead end

Six steps, four of which teach. The rules that shape the screen:

- **Nothing blocks silently.** Pressing Next with no exam date chosen used to do
  literally nothing — the button refused and said nothing. Every step that can
  block now says why, and the message is scrolled into view.
- **A score is rounded, not rejected.** 705 is not a reportable SAT score, but
  refusing it one click later teaches a student only that the form dislikes
  them. The field rounds to the nearest 10 when it loses focus, the − and +
  buttons mean it never has to be typed, and three presets answer "I have no
  idea what to aim at". The only way to fail the step now is to leave a box
  empty, and the message says which.
- **The way forward never leaves the screen.** The Back/Next row is sticky at
  the bottom of the card. On the exam-day step it used to be a full screen of
  scrolling away.
- **A new step starts at the top of itself.** Pressing Next at the bottom of a
  long step used to leave the student halfway down the next one.
- **The longest step folds.** Exam day exists to pick a date, so the
  registration steps and the packing lists sit behind one press. They are built
  into the page either way, so a browser find and a screen reader still reach
  them.
- **There is no app frame until there is somewhere to go.** The sidebar, the
  top bar and the tab bar are not shown at all until the plan exists — every
  destination in them is blocked by the router guard until then, so they were
  nine ways to be bounced straight back. Onboarding and the diagnostic carry
  `JTS.shell.setupBar()` instead: the brand, the language switch, the theme and
  the way out. The frame arrives with the plan, at the end of the diagnostic,
  and the student lands on Today with it.
- **There is no way to skip the teaching, deliberately.** A shortcut for
  students who already know the exam was built and then removed at JTS's
  request: someone who has sat the SAT before still has to be told how this
  platform reads a diagnostic, what it will not claim, and why help is counted
  separately — and the two steps that ask questions sit inside that
  explanation. Onboarding is six steps for everybody.

## Picking the exam date

Step 4 draws each administration as a tear-off from a calendar — month on the
band, day under it — and then says, in one line, what the student has to do
about it: how many weeks away the sitting is, and how many days are left to
register. The band changes colour when the regular deadline has passed (late
registration only) and again when even that has closed; a closed date is still
listed, because a student may already be registered for it, and labelled so
nobody picks it expecting to sign up.

The old list gave the same four facts as one sentence per row. Four dates in a
sentence is how a beginner misses a registration.

The section heading no longer says "in Kazakhstan" — the body already does the
local part (test centres, the passport, international registration costing more)
and a country in the heading made a section about exam day read as if it were
about a country.

Nothing here is authoritative: `js/data/exam-dates.js` ships `verified: false`
and the screen says so above the list.

## The target score, and where it lands

Step 3 of onboarding is two columns that answer each other. On the left, the
target: Reading and Writing, Math, and the total derived from them — a section
score is a multiple of 10 in 200..800 and nothing else is accepted. On the
right, every university in `js/data/colleges.js` sorted by where that target
falls against its published middle-50% band, recomputed on each keystroke:

| Band | Meaning |
|---|---|
| In their range | the target is inside the published middle 50% |
| Above their range | the target is above it |
| Just below | within 70 points under the bottom of it |
| Below their range | further under; hidden behind one press |

The ones the target reaches come first and the rest are one press away, never
deleted — a student is allowed to look at a school they are not ready for.
Pressing a university copies its band into the target, which is the fastest
honest way to set one.

**This is not a chance of admission and the screen says so.** A middle-50% band
is a fact about last year's admitted students; grades, essays, recommendations
and everything else about an applicant are not in that number. The figures in
`colleges.js` are placeholders carrying `verified: false` until JTS confirms
them against each institution's Common Data Set, and every row prints its
source and year. Test-blind institutions are absent rather than listed with an
SAT target they do not read.

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
