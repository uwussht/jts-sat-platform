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
  estimate.

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
