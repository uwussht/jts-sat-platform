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
i18n/en.js ru.js kk.js  interface strings, key sets verified at parity
```

All progress lives in `localStorage` under the key `jts_sat_v1`, with a
`schemaVersion` and a forward-only migration in `js/core.js`.

---

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
