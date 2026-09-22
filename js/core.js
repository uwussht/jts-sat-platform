/* ==========================================================================
   JTS SAT Platform — core.js
   Namespace, utilities, localStorage store, i18n, router, UI kit, timer,
   Desmos panel, Auth/AI adapters, SPR checker, mastery engine, planner.
   Plain ES2020, no modules (must run from file://).
   ========================================================================== */
(function (global) {
  'use strict';

  var JTS = global.JTS = global.JTS || {};
  JTS.data = JTS.data || {};
  JTS.modules = JTS.modules || {};
  JTS.dict = JTS.dict || {};

  /* ---------------------------------------------------------------- config */
  JTS.config = {
    storageKey: 'jts_sat_v1',
    schemaVersion: 3,
    languages: ['en', 'ru', 'kk'],
    defaultLanguage: 'en',
    desmosUrl: 'https://www.desmos.com/calculator',
    /* Pace benchmarks used for the speed metric (seconds per question). */
    pace: { rw: 71, math: 95 },
    /* Mastery thresholds — see JTS.mastery for the full rules. */
    mastery: {
      minIndependentAttempts: 6,
      window: 8,
      masteredAccuracy: 0.8,
      confirmAfterDays: 3
    },
    errorReviewDelayDays: 3,
    defaultAiDailyLimit: 40,
    links: {
      whatsapp: 'https://wa.me/00000000000', /* placeholder — replace with the JTS number */
      desmos: 'https://www.desmos.com/calculator'
    },
    /* Digital SAT module structure used by the internal simulation. */
    examStructure: [
      { id: 'rw1', section: 'rw',   minutes: 32, count: 27, adaptive: false },
      { id: 'rw2', section: 'rw',   minutes: 32, count: 27, adaptive: true  },
      { id: 'break', section: null, minutes: 10, count: 0,  adaptive: false },
      { id: 'm1',  section: 'math', minutes: 35, count: 22, adaptive: false },
      { id: 'm2',  section: 'math', minutes: 35, count: 22, adaptive: true  }
    ],
    adaptiveThreshold: 0.6,
    mockMinWidth: 1024
  };

  /* ----------------------------------------------------------------- utils */
  var U = JTS.util = {
    $: function (sel, root) { return (root || document).querySelector(sel); },
    $$: function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); },

    /** Create an element: el('div.card', {id:'x'}, [child, 'text']) */
    el: function (spec, attrs, children) {
      var parts = String(spec).split(/(?=[.#])/);
      var node = document.createElement(parts[0] || 'div');
      parts.slice(1).forEach(function (p) {
        if (p[0] === '.') node.classList.add(p.slice(1));
        else if (p[0] === '#') node.id = p.slice(1);
      });
      if (attrs) Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'html') node.innerHTML = v;
        else if (k === 'text') node.textContent = v;
        else if (k === 'dataset') Object.keys(v).forEach(function (d) { node.dataset[d] = v[d]; });
        else if (k.slice(0, 2) === 'on' && typeof v === 'function') node.addEventListener(k.slice(2), v);
        else node.setAttribute(k, v === true ? '' : v);
      });
      U.append(node, children);
      return node;
    },
    append: function (node, children) {
      if (children === null || children === undefined) return node;
      (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (c === null || c === undefined || c === false) return;
        node.appendChild(typeof c === 'string' || typeof c === 'number'
          ? document.createTextNode(String(c)) : c);
      });
      return node;
    },
    clear: function (node) { while (node && node.firstChild) node.removeChild(node.firstChild); return node; },

    esc: function (s) {
      return String(s === undefined || s === null ? '' : s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    },

    uid: function (prefix) {
      return (prefix || 'id') + '_' + Date.now().toString(36) + '_' +
        Math.random().toString(36).slice(2, 8);
    },

    clamp: function (n, lo, hi) { return Math.min(hi, Math.max(lo, n)); },
    sum: function (a) { return a.reduce(function (x, y) { return x + y; }, 0); },
    avg: function (a) { return a.length ? U.sum(a) / a.length : 0; },
    median: function (a) {
      if (!a.length) return 0;
      var s = a.slice().sort(function (x, y) { return x - y; });
      var m = Math.floor(s.length / 2);
      return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
    },
    unique: function (a) { return a.filter(function (v, i) { return a.indexOf(v) === i; }); },
    groupBy: function (arr, fn) {
      return arr.reduce(function (acc, item) {
        var k = fn(item); (acc[k] = acc[k] || []).push(item); return acc;
      }, {});
    },
    shuffle: function (arr, seed) {
      var a = arr.slice(), rnd = U.rng(seed === undefined ? Date.now() : seed);
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    },
    /** Deterministic PRNG (mulberry32) so generated sets are reproducible. */
    rng: function (seed) {
      var s = seed >>> 0;
      return function () {
        s |= 0; s = (s + 0x6D2B79F5) | 0;
        var t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    },

    /* ---- dates --------------------------------------------------------- */
    DAY_MS: 86400000,
    today: function () { var d = new Date(); d.setHours(0, 0, 0, 0); return d; },
    iso: function (d) {
      var x = (d instanceof Date) ? d : new Date(d);
      return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') +
        '-' + String(x.getDate()).padStart(2, '0');
    },
    parseISO: function (s) {
      if (!s) return null;
      var p = String(s).split('-');
      if (p.length !== 3) return null;
      var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
      d.setHours(0, 0, 0, 0);
      return isNaN(d.getTime()) ? null : d;
    },
    addDays: function (d, n) { var x = new Date(d); x.setDate(x.getDate() + n); x.setHours(0,0,0,0); return x; },
    daysBetween: function (a, b) {
      var x = U.parseISO(U.iso(a)), y = U.parseISO(U.iso(b));
      return Math.round((y - x) / U.DAY_MS);
    },
    /** Monday of the week containing d. */
    weekStart: function (d) {
      var x = U.parseISO(U.iso(d));
      var dow = (x.getDay() + 6) % 7; /* 0 = Monday */
      return U.addDays(x, -dow);
    },
    fmtDate: function (d, lang) {
      var x = (d instanceof Date) ? d : U.parseISO(d);
      if (!x) return '—';
      var loc = { en: 'en-US', ru: 'ru-RU', kk: 'kk-KZ' }[lang || JTS.i18n.lang] || 'en-US';
      try { return x.toLocaleDateString(loc, { day: 'numeric', month: 'short', year: 'numeric' }); }
      catch (e) { return U.iso(x); }
    },
    /**
     * Short weekday name for dow 1..7 (1 = Monday). Built from a known Monday
     * so the locale does the naming rather than a hand-maintained table in
     * three languages.
     */
    dayLabel: function (dow, lang) {
      var monday = U.weekStart(U.today());
      var d = U.addDays(monday, dow - 1);
      var loc = { en: 'en-US', ru: 'ru-RU', kk: 'kk-KZ' }[lang || JTS.i18n.lang] || 'en-US';
      try { return d.toLocaleDateString(loc, { weekday: 'short' }); }
      catch (e) { return ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'][dow - 1]; }
    },

    /** Up to two initials from a name or an email, for the small avatars. */
    initials: function (name) {
      return String(name || '').replace(/[^\p{L}\p{N} ]/gu, ' ').trim().split(/\s+/)
        .slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase() || '?';
    },

    fmtClock: function (ms) {
      var total = Math.max(0, Math.round(ms / 1000));
      var m = Math.floor(total / 60), s = total % 60;
      return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    },
    fmtHm: function (minutes) {
      var h = Math.floor(minutes / 60), m = Math.round(minutes % 60);
      return (h ? h + 'h ' : '') + m + 'm';
    },
    fmtLongTime: function (ms) {
      var total = Math.max(0, Math.round(ms / 1000));
      var h = Math.floor(total / 3600), m = Math.floor((total % 3600) / 60), s = total % 60;
      return (h ? String(h).padStart(2, '0') + ':' : '') +
        String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    },
    pct: function (n, d) { return d ? Math.round((n / d) * 100) : 0; },

    debounce: function (fn, wait) {
      var t; return function () {
        var args = arguments, ctx = this;
        clearTimeout(t); t = setTimeout(function () { fn.apply(ctx, args); }, wait || 200);
      };
    },
    deepClone: function (o) { return o === undefined ? o : JSON.parse(JSON.stringify(o)); },
    isEmail: function (s) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s || '').trim()); },
    /** Non-cryptographic digest. Local profiles only — documented in README. */
    weakHash: function (s) {
      var h = 5381;
      for (var i = 0; i < String(s).length; i++) h = ((h * 33) ^ String(s).charCodeAt(i)) >>> 0;
      return 'wh' + h.toString(36);
    },
    download: function (filename, text) {
      var blob = new Blob([text], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = filename;
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
    }
  };

  /* ----------------------------------------------------------------- store */
  /**
   * Root shape (localStorage key `jts_sat_v1`):
   * { schemaVersion, currentUser, accounts: {email:{pwHash,createdAt}},
   *   profiles: {email: <profileState>}, questionOverrides: {qid:{...}},
   *   overrideHistory: [{ts,questionId,field,old,new}] }
   */
  var Store = JTS.store = (function () {
    var root = null;

    function blankProfile(email) {
      return {
        profile: {
          email: email, name: '', level: 'undetermined',
          onboardingComplete: false, createdAt: Date.now(),
          currentPhase: 1, streak: { count: 0, lastDay: null, best: 0 }
        },
        examDate: null,       /* {mode:'date'|'undecided', examDateId, testDate, registrationDeadline} */
        goals: null,          /* {rw, math, total, collegeIds:[]} */
        baseline: null,       /* {rw, math, total, date, source} — a measured result only */
        availability: null,   /* {days:[1..7], minutesPerSession, intensity} */
        plan: null,           /* {generatedAt, horizonWeeks, weeks:[...]} */
        skills: {},           /* skillId -> {attempts, correct, status, lastReviewAt, confirmedAt} */
        attempts: [],
        sessions: [],
        activeSession: null,  /* in-flight session, restored on reload */
        errors: [],
        reviews: [],
        scoreReports: [],   /* imported results: official SAT, Bluebook, other */
        mocks: [],          /* internal simulations, one record per run */
        vocab: { cards: {}, dailyGoal: 10, custom: [], log: {} },
        desmosGuideProgress: {},
        aiFeedback: [],
        aiUsage: { day: null, count: 0 },
        seenQuestionIds: [],
        badges: [],
        settings: {
          uiLang: 'en', explainLang: 'en', theme: 'light',
          aiDailyLimit: JTS.config.defaultAiDailyLimit,
          /* AI provider. 'mock' costs nothing and answers from the reviewed
             bank; the others call a real endpoint with the key below. */
          aiProvider: 'mock', endpoint: '', model: '', apiKey: '',
          timerHidden: false,
          /* Where the student last dragged the calculator, or null while it is
             still docked to the side of the question. */
          calcPanel: null
        }
      };
    }

    function blankRoot() {
      return {
        schemaVersion: JTS.config.schemaVersion,
        currentUser: null,
        accounts: {},
        profiles: {},
        questionOverrides: {},
        overrideHistory: []
      };
    }

    /** Forward-only migration. Add a case per schema bump; never mutate old data in place. */
    function migrate(data) {
      var v = Number(data.schemaVersion || 0);
      if (v < 1) {
        data.accounts = data.accounts || {};
        data.profiles = data.profiles || {};
        data.questionOverrides = data.questionOverrides || {};
        data.overrideHistory = data.overrideHistory || [];
        data.schemaVersion = 1;
      }
      if (data.schemaVersion < 2) {
        /* AI provider selection was added; existing profiles had only a bare
           endpoint + apiKey pair. An endpoint already on file means the profile
           was talking to a custom server, so keep it on the raw-payload style. */
        Object.keys(data.profiles || {}).forEach(function (email) {
          var st = data.profiles[email] && data.profiles[email].settings;
          if (!st) return;
          if (st.aiProvider === undefined) st.aiProvider = st.endpoint ? 'raw' : 'mock';
          if (st.model === undefined) st.model = '';
        });
        data.schemaVersion = 2;
      }
      if (data.schemaVersion < 3) {
        /* Internal mock runs got their own list. Imported score reports were
           already stored separately and are left exactly as they are. */
        Object.keys(data.profiles || {}).forEach(function (email) {
          var p = data.profiles[email];
          if (p && !Array.isArray(p.mocks)) p.mocks = [];
        });
        data.schemaVersion = 3;
      }
      return data;
    }

    function read() {
      if (root) return root;
      var raw = null;
      try { raw = global.localStorage.getItem(JTS.config.storageKey); }
      catch (e) { console.warn('[JTS] localStorage unavailable:', e); }
      if (!raw) { root = blankRoot(); return root; }
      try { root = migrate(JSON.parse(raw)); }
      catch (e) { console.warn('[JTS] corrupt store, starting fresh:', e); root = blankRoot(); }
      return root;
    }

    var persist = function () {
      try { global.localStorage.setItem(JTS.config.storageKey, JSON.stringify(root)); }
      catch (e) { console.warn('[JTS] save failed:', e); JTS.ui && JTS.ui.toast('Storage full or blocked', 'err'); }
    };

    return {
      root: read,
      save: function () { read(); persist(); },
      /** Debounced save for high-frequency writes (typing, highlights). */
      saveSoon: U.debounce(function () { read(); persist(); }, 350),

      currentEmail: function () { return read().currentUser; },

      /** The signed-in profile's state object, or null. */
      state: function () {
        var r = read();
        return r.currentUser ? r.profiles[r.currentUser] || null : null;
      },
      /** Shallow-merge a patch into the profile state and save. */
      patch: function (obj) {
        var s = this.state(); if (!s) return null;
        Object.keys(obj).forEach(function (k) { s[k] = obj[k]; });
        this.save(); return s;
      },
      /** Mutate the profile state through a callback, then save. */
      update: function (fn) {
        var s = this.state(); if (!s) return null;
        fn(s); this.save(); return s;
      },
      settings: function () {
        var s = this.state();
        return s ? s.settings : { uiLang: JTS.config.defaultLanguage, explainLang: JTS.config.defaultLanguage, theme: 'light' };
      },

      createAccount: function (email, password, name) {
        var r = read();
        email = String(email).trim().toLowerCase();
        if (r.accounts[email]) return { ok: false, reason: 'exists' };
        r.accounts[email] = { pwHash: U.weakHash(password), createdAt: Date.now() };
        r.profiles[email] = blankProfile(email);
        if (name) r.profiles[email].profile.name = name;
        persist();
        return { ok: true, email: email };
      },
      verify: function (email, password) {
        var r = read();
        email = String(email).trim().toLowerCase();
        var acc = r.accounts[email];
        if (!acc) return { ok: false, reason: 'no-account' };
        if (acc.pwHash !== U.weakHash(password)) return { ok: false, reason: 'bad-password' };
        return { ok: true, email: email };
      },
      setCurrent: function (email) { var r = read(); r.currentUser = email; persist(); },
      hasAccounts: function () { return Object.keys(read().accounts).length > 0; },
      listAccounts: function () { return Object.keys(read().accounts); },

      /* Question overrides live outside profiles: they are content, not progress. */
      overrides: function () { return read().questionOverrides; },
      setOverride: function (qid, field, value) {
        var r = read();
        var cur = r.questionOverrides[qid] || {};
        var source = JTS.bank.raw(qid) || {};
        var old = (field in cur) ? cur[field] : source[field];
        cur[field] = value;
        r.questionOverrides[qid] = cur;
        r.overrideHistory.push({ ts: Date.now(), questionId: qid, field: field, old: old, new: value });
        persist();
      },
      overrideHistory: function (qid) {
        return read().overrideHistory.filter(function (h) { return !qid || h.questionId === qid; });
      },
      clearOverride: function (qid) {
        var r = read();
        delete r.questionOverrides[qid];
        r.overrideHistory.push({ ts: Date.now(), questionId: qid, field: '*', old: 'override', new: 'cleared' });
        persist();
      },

      exportProfile: function () {
        var r = read();
        return JSON.stringify({
          exportedAt: new Date().toISOString(),
          schemaVersion: r.schemaVersion,
          email: r.currentUser,
          profile: r.profiles[r.currentUser] || null
        }, null, 2);
      },
      importProfile: function (json) {
        var parsed;
        try { parsed = JSON.parse(json); } catch (e) { return { ok: false, reason: 'parse' }; }
        if (!parsed || !parsed.profile || !parsed.email) return { ok: false, reason: 'shape' };
        var r = read();
        r.profiles[parsed.email] = parsed.profile;
        if (!r.accounts[parsed.email]) r.accounts[parsed.email] = { pwHash: U.weakHash('changeme'), createdAt: Date.now() };
        r.currentUser = parsed.email;
        persist();
        return { ok: true, email: parsed.email };
      },
      resetProfile: function () {
        var r = read();
        if (!r.currentUser) return;
        r.profiles[r.currentUser] = blankProfile(r.currentUser);
        persist();
      },
      hardReset: function () {
        try { global.localStorage.removeItem(JTS.config.storageKey); } catch (e) {}
        root = blankRoot(); persist();
      },
      _blankProfile: blankProfile
    };
  })();

  /* ------------------------------------------------------------------ i18n */
  JTS.i18n = {
    lang: JTS.config.defaultLanguage,
    listeners: [],
    setLang: function (lang) {
      if (JTS.config.languages.indexOf(lang) < 0) return;
      this.lang = lang;
      document.documentElement.lang = lang;
      var s = Store.state();
      if (s) { s.settings.uiLang = lang; Store.save(); }
      this.listeners.forEach(function (fn) { try { fn(lang); } catch (e) { console.error(e); } });
    },
    onChange: function (fn) { this.listeners.push(fn); },
    /** t('nav.today', {n: 3}) — falls back to EN, then to the key itself. */
    t: function (key, params) {
      var dicts = [JTS.dict[this.lang], JTS.dict[JTS.config.defaultLanguage]];
      var val;
      for (var i = 0; i < dicts.length && val === undefined; i++) {
        if (dicts[i] && dicts[i][key] !== undefined) val = dicts[i][key];
      }
      if (val === undefined) { if (JTS.debug) console.warn('[i18n] missing key:', key); return key; }
      if (params) Object.keys(params).forEach(function (p) {
        val = val.replace(new RegExp('\\{' + p + '\\}', 'g'), params[p]);
      });
      return val;
    },
    /** Pick a localized field from {en,ru,kk}, honouring the explanation language. */
    pick: function (obj, lang) {
      if (!obj) return '';
      if (typeof obj === 'string') return obj;
      var l = lang || (Store.settings().explainLang) || this.lang;
      return obj[l] || obj[JTS.config.defaultLanguage] || obj.en || '';
    },
    /** Localized skill / domain names live on the record as name_en / name_ru / name_kk. */
    pickName: function (rec, lang) {
      if (!rec) return '';
      var l = lang || this.lang;
      return rec['name_' + l] || rec.name_en || rec.id || '';
    }
  };
  var t = function (k, p) { return JTS.i18n.t(k, p); };
  JTS.t = t;

  /* -------------------------------------------------------------- UI kit --*/
  JTS.ui = {
    toast: function (msg, kind, ms) {
      var root = U.$('#toast-root');
      if (!root) return;
      var node = U.el('div.toast' + (kind ? '.toast-' + kind : ''), { text: msg, role: 'status' });
      root.appendChild(node);
      setTimeout(function () { node.remove(); }, ms || 2600);
    },

    /** Accessible modal. Returns {close}. */
    modal: function (opts) {
      var prevFocus = document.activeElement;
      var backdrop = U.el('div.modal-backdrop', { role: 'presentation' });
      var box = U.el('div.modal' + (opts.wide ? '.modal-lg' : ''), {
        role: 'dialog', 'aria-modal': 'true', 'aria-label': opts.title || 'Dialog'
      });
      var closeBtn = U.el('button.icon-btn', {
        type: 'button', 'aria-label': t('common.close'), html: '&times;',
        style: 'background:var(--bg);color:var(--ink)'
      });
      box.appendChild(U.el('div.modal-head', null, [
        U.el('div.h2', { text: opts.title || '' }), closeBtn
      ]));
      var body = U.el('div.modal-body');
      U.append(body, opts.content);
      box.appendChild(body);
      if (opts.actions && opts.actions.length) {
        box.appendChild(U.el('div.modal-foot', null, opts.actions));
      }
      backdrop.appendChild(box);
      U.$('#modal-root').appendChild(backdrop);

      function close() {
        backdrop.remove();
        document.removeEventListener('keydown', onKey, true);
        if (prevFocus && prevFocus.focus) prevFocus.focus();
        if (opts.onClose) opts.onClose();
      }
      function onKey(e) {
        if (e.key === 'Escape') { e.stopPropagation(); close(); return; }
        if (e.key !== 'Tab') return;
        var f = U.$$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', box)
          .filter(function (n) { return !n.disabled && n.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      closeBtn.addEventListener('click', close);
      backdrop.addEventListener('mousedown', function (e) { if (e.target === backdrop && !opts.sticky) close(); });
      document.addEventListener('keydown', onKey, true);
      setTimeout(function () {
        var target = U.$('[data-autofocus]', box) || U.$('button, input, select, textarea', box);
        if (target) target.focus();
      }, 20);
      return { close: close, body: body, box: box };
    },

    confirm: function (opts) {
      return new Promise(function (resolve) {
        var m;
        var no = U.el('button.btn', { type: 'button', text: opts.cancelText || t('common.cancel'),
          onclick: function () { m.close(); resolve(false); } });
        var yes = U.el('button.btn.btn-primary', { type: 'button', 'data-autofocus': '',
          text: opts.okText || t('common.confirm'),
          onclick: function () { m.close(); resolve(true); } });
        m = JTS.ui.modal({
          title: opts.title || t('common.confirm'),
          content: U.el('p', { text: opts.message || '' }),
          actions: [no, yes],
          sticky: true
        });
      });
    },

    /** Simple tab strip. tabs = [{id, label, render(container)}] */
    tabs: function (tabs, initialId) {
      var wrap = U.el('div.stack');
      var strip = U.el('div.tabs', { role: 'tablist' });
      var panel = U.el('div', { role: 'tabpanel' });
      var current = initialId || tabs[0].id;
      function select(id) {
        current = id;
        U.$$('button', strip).forEach(function (b) {
          b.setAttribute('aria-selected', String(b.dataset.tab === id));
        });
        U.clear(panel);
        var tab = tabs.filter(function (x) { return x.id === id; })[0];
        if (tab) tab.render(panel);
      }
      tabs.forEach(function (tb) {
        strip.appendChild(U.el('button', {
          type: 'button', role: 'tab', text: tb.label,
          dataset: { tab: tb.id }, 'aria-selected': String(tb.id === current),
          onclick: function () { select(tb.id); }
        }));
      });
      wrap.appendChild(strip); wrap.appendChild(panel);
      select(current);
      wrap.selectTab = select;
      return wrap;
    },

    bar: function (value, max, cls) {
      var pct = max ? U.clamp((value / max) * 100, 0, 100) : 0;
      return U.el('div.bar' + (cls ? '.' + cls : ''), {
        role: 'progressbar', 'aria-valuenow': String(Math.round(pct)),
        'aria-valuemin': '0', 'aria-valuemax': '100'
      }, [U.el('i', { style: 'width:' + pct + '%' })]);
    },

    empty: function (title, text, action) {
      return U.el('div.empty', null, [
        U.el('div.h2', { text: title }),
        text ? U.el('p.muted', { text: text }) : null,
        action ? U.el('div', { style: 'margin-top:16px' }, [action]) : null
      ]);
    },

    field: function (labelText, control, hint, errorId) {
      return U.el('div.field', null, [
        U.el('label.label', { text: labelText, for: control.id || null }),
        control,
        hint ? U.el('div.hint', { text: hint }) : null,
        errorId ? U.el('div.error-text', { id: errorId, hidden: true, role: 'alert' }) : null
      ]);
    },

    /** Inline SVG line chart, no libraries. series = [{label,color,points:[{x,y}]}] */
    lineChart: function (series, opts) {
      opts = opts || {};
      var w = opts.width || 640, h = opts.height || 240;
      var pad = { l: 44, r: 16, t: 14, b: 30 };
      var xs = [], ys = [];
      series.forEach(function (s) { s.points.forEach(function (p) { xs.push(p.x); ys.push(p.y); }); });
      if (opts.yMin !== undefined) ys.push(opts.yMin);
      if (opts.yMax !== undefined) ys.push(opts.yMax);
      if (!xs.length) return U.el('div.empty', { text: opts.emptyText || '—' });
      var minX = Math.min.apply(null, xs), maxX = Math.max.apply(null, xs);
      var minY = Math.min.apply(null, ys), maxY = Math.max.apply(null, ys);
      if (maxX === minX) maxX = minX + 1;
      if (maxY === minY) maxY = minY + 1;
      var sx = function (x) { return pad.l + ((x - minX) / (maxX - minX)) * (w - pad.l - pad.r); };
      var sy = function (y) { return h - pad.b - ((y - minY) / (maxY - minY)) * (h - pad.t - pad.b); };
      var svg = ['<svg class="chart" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' +
        U.esc(opts.ariaLabel || 'chart') + '">'];
      for (var g = 0; g <= 4; g++) {
        var yv = minY + (g / 4) * (maxY - minY), yy = sy(yv);
        svg.push('<line x1="' + pad.l + '" y1="' + yy + '" x2="' + (w - pad.r) + '" y2="' + yy +
          '" stroke="var(--border)" stroke-width="1"/>');
        svg.push('<text x="' + (pad.l - 8) + '" y="' + (yy + 4) + '" font-size="11" text-anchor="end" fill="var(--muted)">' +
          Math.round(yv) + '</text>');
      }
      if (opts.target !== undefined && opts.target >= minY && opts.target <= maxY) {
        svg.push('<line x1="' + pad.l + '" y1="' + sy(opts.target) + '" x2="' + (w - pad.r) + '" y2="' + sy(opts.target) +
          '" stroke="var(--ok)" stroke-width="1.5" stroke-dasharray="5 4"/>');
      }
      series.forEach(function (s) {
        var d = s.points.map(function (p, i) { return (i ? 'L' : 'M') + sx(p.x).toFixed(1) + ' ' + sy(p.y).toFixed(1); }).join(' ');
        svg.push('<path d="' + d + '" fill="none" stroke="' + (s.color || 'var(--brand-600)') + '" stroke-width="2.5" stroke-linejoin="round"/>');
        s.points.forEach(function (p) {
          svg.push('<circle cx="' + sx(p.x).toFixed(1) + '" cy="' + sy(p.y).toFixed(1) + '" r="3.5" fill="' + (s.color || 'var(--brand-600)') + '"/>');
        });
      });
      svg.push('</svg>');
      return U.el('div.chart-wrap', { html: svg.join('') });
    },

    /** Inline SVG bar chart. items = [{label, value, max, color}] */
    barChart: function (items, opts) {
      opts = opts || {};
      var rowH = 30, w = opts.width || 640, h = items.length * rowH + 12;
      var labelW = opts.labelWidth || 200;
      var out = ['<svg class="chart" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' +
        U.esc(opts.ariaLabel || 'bar chart') + '">'];
      items.forEach(function (it, i) {
        var y = i * rowH + 6, max = it.max || 100;
        var bw = Math.max(2, ((it.value || 0) / max) * (w - labelW - 60));
        out.push('<text x="0" y="' + (y + 15) + '" font-size="12" fill="var(--ink)">' + U.esc(it.label) + '</text>');
        out.push('<rect x="' + labelW + '" y="' + (y + 4) + '" width="' + (w - labelW - 60) + '" height="14" rx="7" fill="var(--border)"/>');
        out.push('<rect x="' + labelW + '" y="' + (y + 4) + '" width="' + bw.toFixed(1) + '" height="14" rx="7" fill="' + (it.color || 'var(--brand-600)') + '"/>');
        out.push('<text x="' + (w - 52) + '" y="' + (y + 15) + '" font-size="12" fill="var(--muted)">' + U.esc(it.valueLabel !== undefined ? it.valueLabel : it.value) + '</text>');
      });
      out.push('</svg>');
      return U.el('div.chart-wrap', { html: out.join('') });
    }
  };

  /* ---------------------------------------------------------------- router */
  JTS.router = {
    routes: {},
    current: null,
    _teardown: null,
    _renderedHash: null,
    register: function (path, def) { this.routes[path] = def; },
    parse: function (hash) {
      var raw = (hash || global.location.hash || '#/today').replace(/^#/, '');
      var qIdx = raw.indexOf('?');
      var query = {};
      if (qIdx >= 0) {
        raw.slice(qIdx + 1).split('&').forEach(function (kv) {
          if (!kv) return;
          var p = kv.split('=');
          query[decodeURIComponent(p[0])] = decodeURIComponent((p[1] || '').replace(/\+/g, ' '));
        });
        raw = raw.slice(0, qIdx);
      }
      var segs = raw.split('/').filter(Boolean);
      /* `path` keeps every segment so sub-routes such as #/practice/weak can be
         registered; `base` is the first segment, which is what the guards and
         the navigation highlight care about. */
      return {
        path: '#/' + (segs.join('/') || 'today'),
        base: '#/' + (segs[0] || 'today'),
        segments: segs.slice(1),
        query: query,
        raw: raw
      };
    },
    go: function (hash) {
      if (global.location.hash === hash) this.render();
      else global.location.hash = hash;
    },
    render: function () {
      var hash = global.location.hash || '#/today';
      var route = this.parse(hash);
      var state = Store.state();

      /* Guards: no session -> auth; incomplete onboarding -> onboarding. */
      var openRoutes = ['#/auth'];
      if (!state && openRoutes.indexOf(route.base) < 0) { this.go('#/auth'); return; }
      /* #/question is on this list because the diagnostic runs on it, and the
         diagnostic is now what finishes onboarding — without it the student
         presses Start and is bounced straight back to step 6. */
      if (state && !state.profile.onboardingComplete &&
          ['#/onboarding', '#/diagnostic', '#/question', '#/settings'].indexOf(route.base) < 0) {
        this.go('#/onboarding'); return;
      }
      if (state && state.profile.onboardingComplete && route.base === '#/auth') { this.go('#/today'); return; }

      /* Longest registered prefix wins, so #/practice/weak resolves to its own
         screen while #/practice/anything-else still falls back to Practice. */
      var def = null, probe = route.path;
      while (!def && probe.indexOf('/') > 0) {
        def = this.routes[probe];
        if (!def) {
          if (probe.indexOf('/', 2) < 0) break;
          probe = probe.replace(/\/[^/]+$/, '');
        }
      }
      def = def || this.routes['#/today'];
      if (this._teardown) { try { this._teardown(); } catch (e) { console.error(e); } this._teardown = null; }
      /* Read before the screen is torn down: clearing the root collapses the
         page height, and with it the scroll offset we may want back. */
      var wasAt = global.pageYOffset || 0;
      var root = U.$('#app-root');
      U.clear(root);
      JTS.desmos.hide();
      this.current = route;
      document.title = (def.title ? t(def.title) + ' · ' : '') + 'JTS SAT';
      JTS.shell.renderTopbar(def.title || '');
      try {
        var res = def.render(root, route);
        if (typeof res === 'function') this._teardown = res;
      } catch (e) {
        console.error('[JTS] render failed', e);
        root.appendChild(JTS.ui.empty('Something went wrong', String(e && e.message || e)));
      }
      JTS.shell.syncNav(route.base);
      /* Redrawing the screen you are already on is not navigation. The practice
         builder, the plan and the vocabulary screen all answer a click by
         calling render() again, and sending the student back to the top of the
         page every time they tick a skill box makes those screens unusable.
         So: a change of address jumps to the top, a redraw stays put. Screens
         that do want the top after a redraw — the question screen, moving from
         one question to the next — scroll for themselves. */
      if (this._renderedHash === hash) global.scrollTo(0, wasAt);
      else global.scrollTo(0, 0);
      this._renderedHash = hash;
    },
    start: function () {
      var self = this;
      global.addEventListener('hashchange', function () { self.render(); });
      this.render();
    }
  };

  /* ----------------------------------------------------------------- timer */
  /**
   * Counts real elapsed time (Date.now based) so a reload or a backgrounded
   * tab cannot cheat the clock. Persisted via onTick into the active session.
   */
  JTS.Timer = function (opts) {
    this.durationMs = opts.durationMs || 0;   /* 0 = count up, no limit */
    this.countUp = !opts.durationMs;
    this.elapsedMs = opts.elapsedMs || 0;
    this.startedAt = null;
    this.onTick = opts.onTick || function () {};
    this.onExpire = opts.onExpire || function () {};
    this._int = null;
    this._fired = false;
  };
  JTS.Timer.prototype = {
    start: function () {
      if (this._int) return this;
      this.startedAt = Date.now();
      var self = this;
      this._int = setInterval(function () { self._tick(); }, 250);
      this._tick();
      return this;
    },
    _tick: function () {
      var elapsed = this.elapsedMs + (this.startedAt ? Date.now() - this.startedAt : 0);
      this.onTick(elapsed, this.remaining(elapsed));
      if (!this.countUp && !this._fired && elapsed >= this.durationMs) {
        this._fired = true; this.pause(); this.onExpire();
      }
    },
    remaining: function (elapsed) {
      if (this.countUp) return Infinity;
      return Math.max(0, this.durationMs - (elapsed === undefined ? this.value() : elapsed));
    },
    value: function () { return this.elapsedMs + (this.startedAt ? Date.now() - this.startedAt : 0); },
    pause: function () {
      if (!this._int) return this;
      clearInterval(this._int); this._int = null;
      this.elapsedMs = this.value(); this.startedAt = null;
      return this;
    },
    resume: function () { return this.start(); },
    isRunning: function () { return !!this._int; },
    stop: function () { this.pause(); return this.elapsedMs; }
  };

  /* ---------------------------------------------------------- Desmos panel */
  /**
   * One iframe for the whole app. Hidden with CSS (never removed) so moving
   * between questions does not reload the calculator.
   *
   * The Digital SAT gives Math a calculator that behaves like a window: you
   * open it once and it stays open for the rest of the module, you drag it out
   * of the way of the question, and you can make it bigger. This panel does the
   * same. It starts docked to the right, where a question and a graph can be
   * read side by side; dragging its title bar turns it into a floating window
   * the student places wherever the figure is not, and the position is
   * remembered so it is not re-placed on every question.
   */
  JTS.desmos = {
    _built: false,
    _loaded: false,

    /** Stored geometry, or null while the panel is still docked. */
    _geom: function () {
      var st = Store.settings();
      var g = st && st.calcPanel;
      if (!g || typeof g.left !== 'number') return null;
      return g;
    },
    _saveGeom: function (g) {
      Store.update(function (s) { s.settings.calcPanel = g; });
    },

    /** Turn the docked panel into a floating window at its current place. */
    _float: function (panel) {
      if (panel.classList.contains('floating')) return;
      var r = panel.getBoundingClientRect();
      panel.classList.add('floating');
      panel.style.left = r.left + 'px';
      panel.style.top = r.top + 'px';
      panel.style.width = r.width + 'px';
      /* Docked it is as tall as the window; floating at that height would put
         its resize grip below the bottom edge, where it cannot be grabbed. */
      panel.style.height = Math.min(r.height, global.innerHeight - 48) + 'px';
      /* A floating window is over the page, not beside it, so the question
         must take its full width back. */
      document.body.classList.remove('desmos-open');
    },

    _dock: function (panel) {
      panel.classList.remove('floating');
      panel.style.left = panel.style.top = panel.style.width = panel.style.height = '';
      document.body.classList.add('desmos-open');
      Store.update(function (s) { s.settings.calcPanel = null; });
    },

    /** Apply stored geometry, clamped to a window that may have changed size. */
    _apply: function (panel) {
      var g = this._geom();
      if (!g) return;
      var w = U.clamp(g.width, 280, global.innerWidth);
      var h = U.clamp(g.height, 220, global.innerHeight);
      panel.classList.add('floating');
      panel.style.width = w + 'px';
      panel.style.height = h + 'px';
      panel.style.left = U.clamp(g.left, 0, Math.max(0, global.innerWidth - w)) + 'px';
      panel.style.top = U.clamp(g.top, 0, Math.max(0, global.innerHeight - 44)) + 'px';
      document.body.classList.remove('desmos-open');
    },

    _startDrag: function (ev, panel) {
      if (ev.button) return;
      var self = this;
      this._float(panel);
      var r = panel.getBoundingClientRect();
      var dx = ev.clientX - r.left, dy = ev.clientY - r.top;
      /* The iframe would swallow the pointer the moment it crossed it. */
      panel.classList.add('dragging');
      ev.preventDefault();

      /* The window stays wholly inside the viewport: a calculator with its
         corner off the screen cannot be resized back. */
      function move(e) {
        panel.style.left = U.clamp(e.clientX - dx, 0,
          Math.max(0, global.innerWidth - panel.offsetWidth)) + 'px';
        panel.style.top = U.clamp(e.clientY - dy, 0,
          Math.max(0, global.innerHeight - panel.offsetHeight)) + 'px';
      }
      function up() {
        document.removeEventListener('pointermove', move);
        document.removeEventListener('pointerup', up);
        panel.classList.remove('dragging');
        self._remember(panel);
      }
      document.addEventListener('pointermove', move);
      document.addEventListener('pointerup', up);
    },

    _remember: function (panel) {
      if (!panel.classList.contains('floating')) return;
      var r = panel.getBoundingClientRect();
      this._saveGeom({ left: Math.round(r.left), top: Math.round(r.top),
                       width: Math.round(r.width), height: Math.round(r.height) });
    },

    build: function () {
      if (this._built) return;
      var panel = U.$('#desmos-panel');
      if (!panel) return;
      var self = this;
      var head = U.el('div.dp-head', null, [
        U.el('span.dp-grip', { 'aria-hidden': 'true', text: '⠿' }),
        U.el('strong', { text: 'Desmos' }),
        U.el('span.badge.badge-muted.xsmall', { text: t('desmos.embedded') }),
        U.el('span.spacer'),
        U.el('button.btn.btn-sm', {
          type: 'button', text: '⤢', title: t('desmos.dock'), 'aria-label': t('desmos.dock'),
          onclick: function () {
            if (panel.classList.contains('floating')) self._dock(panel);
            else {
              /* Not docked and not placed yet: put it in the middle, large,
                 which is where a student who wants a big calculator wants it. */
              self._float(panel);
              var w = Math.min(760, global.innerWidth - 32);
              var h = Math.min(620, global.innerHeight - 32);
              panel.style.width = w + 'px';
              panel.style.height = h + 'px';
              panel.style.left = Math.round((global.innerWidth - w) / 2) + 'px';
              panel.style.top = Math.round((global.innerHeight - h) / 2) + 'px';
              self._remember(panel);
            }
          }
        }),
        U.el('a.btn.btn-sm', { href: JTS.config.desmosUrl, target: '_blank', rel: 'noopener',
          text: t('desmos.openTab') }),
        U.el('button.btn.btn-sm', { type: 'button', text: t('common.close'),
          onclick: function () { self.hide(); } })
      ]);
      head.addEventListener('pointerdown', function (ev) {
        /* The buttons in the bar are controls, not a handle. */
        if (ev.target.closest('button, a')) return;
        self._startDrag(ev, panel);
      });
      /* The native resize grip only reports its result when the pointer is
         released over the panel. */
      panel.addEventListener('pointerup', function () { self._remember(panel); });
      var frame = U.el('iframe', {
        src: JTS.config.desmosUrl, title: 'Desmos Graphing Calculator',
        allow: 'fullscreen', loading: 'lazy'
      });
      var fallback = U.el('div#desmos-fallback', { hidden: true }, [
        U.el('div.notice.notice-warn', { text: t('desmos.blocked') }),
        U.el('a.btn.btn-primary', { href: JTS.config.desmosUrl, target: '_blank', rel: 'noopener',
          text: t('desmos.openTab'), style: 'margin-top:12px' })
      ]);
      frame.addEventListener('load', function () { self._loaded = true; });
      panel.appendChild(head); panel.appendChild(frame); panel.appendChild(fallback);
      /* If the frame never reports a load, surface the external link instead. */
      setTimeout(function () {
        if (!self._loaded) { frame.hidden = true; fallback.hidden = false; }
      }, 6000);
      this._built = true;
    },
    isOpen: function () {
      var p = U.$('#desmos-panel');
      return !!p && p.classList.contains('open');
    },
    toggle: function () { return this.isOpen() ? this.hide() : this.show(); },
    show: function () {
      if (this.isOpen()) return true;
      this.build();
      var p = U.$('#desmos-panel');
      if (!p) return false;
      p.classList.add('open');
      p.setAttribute('aria-hidden', 'false');
      document.body.classList.add('desmos-open');
      this._apply(p);
      return true;
    },
    hide: function () {
      var p = U.$('#desmos-panel');
      if (p) { p.classList.remove('open'); p.setAttribute('aria-hidden', 'true'); }
      document.body.classList.remove('desmos-open');
      return false;
    },
    /** Inline embed used by the Desmos Guide sections. */
    embed: function (expressionHint) {
      var wrap = U.el('div.stack-sm');
      var frame = U.el('iframe.desmos-embed', {
        src: JTS.config.desmosUrl, title: 'Desmos Graphing Calculator', allow: 'fullscreen', loading: 'lazy'
      });
      var loaded = false;
      frame.addEventListener('load', function () { loaded = true; });
      setTimeout(function () {
        if (!loaded) {
          frame.replaceWith(U.el('div.notice.notice-warn', null, [
            U.el('span', { text: t('desmos.blocked') + ' ' }),
            U.el('a', { href: JTS.config.desmosUrl, target: '_blank', rel: 'noopener', text: t('desmos.openTab') })
          ]));
        }
      }, 6000);
      wrap.appendChild(frame);
      if (expressionHint) wrap.appendChild(U.el('div.hint', { text: t('desmos.tryIt', { expr: expressionHint }) }));
      return wrap;
    }
  };

  /* ------------------------------------------------------------ Auth adapter */
  JTS.Auth = {
    current: function () {
      var s = Store.state();
      return s ? { email: s.profile.email, name: s.profile.name } : null;
    },
    login: function (email, password) {
      var res = Store.verify(email, password);
      if (!res.ok) return Promise.resolve(res);
      Store.setCurrent(res.email);
      JTS.shell.applyProfileSettings();
      return Promise.resolve({ ok: true, email: res.email });
    },
    register: function (email, password, name) {
      var res = Store.createAccount(email, password, name);
      if (!res.ok) return Promise.resolve(res);
      Store.setCurrent(res.email);
      JTS.shell.applyProfileSettings();
      return Promise.resolve({ ok: true, email: res.email });
    },
    logout: function () {
      Store.setCurrent(null);
      return Promise.resolve({ ok: true });
    }
  };

  /* -------------------------------------------------------------- AI adapter */
  /**
   * One entry point for every kind of AI help. Three provider styles:
   *
   *   mock    no network, no cost. Answers come from the reviewed JTS bank.
   *           This is the default and it is what a pilot should ship with.
   *   openai  any OpenAI-compatible /chat/completions endpoint. Groq is the
   *           preset; the same style covers OpenRouter, Together, a local
   *           llama.cpp server, and so on.
   *   raw     POSTs the JTS payload (AI-01) unchanged to your own server,
   *           which decides what model to call. This is the shape to use once
   *           you put a proxy in front of the key.
   *
   * SECURITY: with 'openai' or 'raw' the key is read from localStorage and
   * sent from the browser, so anyone using the app can read it out of
   * devtools. That is acceptable for development with a throwaway key and is
   * NOT acceptable once real students use the app — put a proxy in front of it
   * and point `endpoint` at the proxy. See README, "AI provider".
   */
  JTS.AI = {
    providers: {
      mock: { label: 'Mock (question bank)', style: 'mock', endpoint: '', model: '' },
      groq: {
        label: 'Groq', style: 'openai',
        endpoint: 'https://api.groq.com/openai/v1/chat/completions',
        model: 'llama-3.3-70b-versatile',
        keysUrl: 'https://console.groq.com/keys',
        modelsUrl: 'https://console.groq.com/docs/models'
      },
      openai: { label: 'OpenAI-compatible endpoint', style: 'openai', endpoint: '', model: '' },
      raw: { label: 'Own server (JTS payload)', style: 'raw', endpoint: '', model: '' }
    },

    /** Effective configuration: provider defaults with the profile's overrides. */
    config: function () {
      var st = Store.settings();
      var name = st.aiProvider || 'mock';
      var preset = this.providers[name] || this.providers.mock;
      return {
        name: name,
        style: preset.style,
        label: preset.label,
        endpoint: (st.endpoint || preset.endpoint || '').trim(),
        model: (st.model || preset.model || '').trim(),
        apiKey: (st.apiKey || '').trim(),
        keysUrl: preset.keysUrl || null,
        modelsUrl: preset.modelsUrl || null
      };
    },

    /** True when a live call is configured and possible. */
    isLive: function () {
      var c = this.config();
      if (c.style === 'mock') return false;
      if (!c.endpoint) return false;
      if (c.style === 'openai' && !c.model) return false;
      return true;
    },

    quotaLeft: function () {
      var s = Store.state(); if (!s) return 0;
      var today = U.iso(new Date());
      if (s.aiUsage.day !== today) { s.aiUsage = { day: today, count: 0 }; Store.save(); }
      return Math.max(0, (s.settings.aiDailyLimit || JTS.config.defaultAiDailyLimit) - s.aiUsage.count);
    },
    _consume: function () {
      Store.update(function (s) {
        var today = U.iso(new Date());
        if (s.aiUsage.day !== today) s.aiUsage = { day: today, count: 0 };
        s.aiUsage.count += 1;
      });
    },

    /**
     * Turn the JTS payload into chat messages. The rules that matter
     * pedagogically live here, not in the UI:
     *  - a hint never names or implies the answer (AI-02)
     *  - an explanation covers every wrong option for R&W (AI-03)
     *  - the model is told to admit uncertainty rather than invent (AI-07)
     */
    buildMessages: function (payload) {
      var langName = { en: 'English', ru: 'Russian', kk: 'Kazakh' }[payload.language] || 'English';
      var q = payload.questionRecord || {};
      var rules = {
        hint: 'Give exactly ONE nudge that moves the student one step forward. ' +
              'Never state, name or imply which option is correct, and never give the final value. ' +
              'Two sentences at most.',
        explanation: 'Explain why the correct answer is correct. ' +
              (q.section === 'rw'
                ? 'Then give one short sentence on why each of the other three options fails.'
                : 'Then show the solution steps compactly. Mention a second method only if it is genuinely different.'),
        'why-wrong': 'Explain specifically why the option the student chose is wrong. Do not restate the whole solution.',
        chat: 'Answer the student’s question about this item. Stay on this question.'
      };
      var system = [
        'You are a Digital SAT tutor for JTS, an online school in Kazakhstan.',
        'Write your reply in ' + langName + '. Keep any quoted question text, answer choices and mathematical notation in English.',
        'Be concrete and brief. No preamble, no encouragement filler.',
        'If you are not confident the answer is right, say so plainly in one sentence instead of guessing.',
        rules[payload.intent] || rules.chat
      ].join(' ');

      var parts = [];
      if (q.passage) parts.push('PASSAGE:\n' + String(q.passage).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
      parts.push('QUESTION:\n' + String(q.stem || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
      if (q.options) {
        parts.push('OPTIONS:\n' + q.options.map(function (o, i) {
          return 'ABCD'[i] + ') ' + String(o).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        }).join('\n'));
      }
      parts.push('SKILL: ' + (payload.skillName || payload.skillId || ''));
      if (payload.intent !== 'hint') {
        parts.push('CORRECT ANSWER: ' + (Array.isArray(payload.correctAnswer) ? payload.correctAnswer.join(' or ') : payload.correctAnswer));
      } else {
        parts.push('(The correct answer is withheld from you on purpose. Do not guess it aloud.)');
      }
      if (payload.selectedAnswer) parts.push('STUDENT ANSWERED: ' + payload.selectedAnswer);
      if (payload.errorType) parts.push('STUDENT SELF-DIAGNOSED ERROR: ' + payload.errorType);
      if (payload.studentLevelSummary) parts.push('STUDENT LEVEL: ' + payload.studentLevelSummary);
      if ((payload.hintHistory || []).length) parts.push('HINTS ALREADY GIVEN:\n- ' + payload.hintHistory.join('\n- '));
      if (payload.userMessage) parts.push('STUDENT ASKS: ' + payload.userMessage);

      return { system: system, user: parts.join('\n\n') };
    },

    /**
     * payload (AI-01): {questionRecord, question, selectedAnswer, correctAnswer,
     *   skillId, skillName, language, hintHistory[], errorType?,
     *   studentLevelSummary, intent, userMessage?}
     */
    ask: function (payload) {
      var self = this;
      if (this.quotaLeft() <= 0) {
        return Promise.resolve({ ok: false, reason: 'quota', text: t('ai.quotaOver') });
      }
      var cfg = this.config();
      if (cfg.style === 'mock' || !this.isLive()) return this._mock(payload, false);

      this._consume();
      return this._live(cfg, payload)
        .catch(function (e) {
          console.warn('[AI] live call failed, falling back to the bank', e);
          return self._mock(payload, true, String(e && e.message || e));
        });
    },

    _live: function (cfg, payload) {
      var headers = { 'Content-Type': 'application/json' };
      if (cfg.apiKey) headers['Authorization'] = 'Bearer ' + cfg.apiKey;
      var body;
      if (cfg.style === 'openai') {
        var m = this.buildMessages(payload);
        body = {
          model: cfg.model,
          messages: [{ role: 'system', content: m.system }, { role: 'user', content: m.user }],
          temperature: 0.3,
          max_tokens: 700
        };
      } else {
        body = payload;                      /* raw: your server gets AI-01 as-is */
      }
      return fetch(cfg.endpoint, { method: 'POST', headers: headers, body: JSON.stringify(body) })
        .then(function (r) {
          return r.text().then(function (txt) {
            if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + txt.slice(0, 300));
            var j;
            try { j = JSON.parse(txt); } catch (e) { throw new Error('Response was not JSON: ' + txt.slice(0, 200)); }
            var text = (j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content)
              || j.text || j.answer || '';
            if (!text) throw new Error('Response contained no text');
            return {
              ok: true, text: String(text).trim(), source: cfg.name,
              intent: payload.intent, raw: j,
              usage: j.usage || null
            };
          });
        });
    },

    /** No network. Serves the reviewed content already attached to the item. */
    _mock: function (payload, fellBack, errorText) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var q = payload.questionRecord;
          var lang = payload.language || Store.settings().explainLang;
          var out = { ok: true, source: fellBack ? 'bank-fallback' : 'bank', intent: payload.intent };
          if (fellBack) out.warning = errorText || '';
          if (!q) { out.text = t('ai.unsure'); out.unsure = true; resolve(out); return; }

          if (payload.intent === 'hint') {
            var n = (payload.hintHistory || []).length;
            var hints = q.hints && q.hints.length ? q.hints : null;
            if (hints) out.text = JTS.i18n.pick(hints[Math.min(n, hints.length - 1)], lang);
            else { out.text = t('ai.genericHint'); out.unsure = true; }
          } else if (payload.intent === 'explanation') {
            out.text = JTS.i18n.pick(q.explanation, lang);
            out.distractors = q.distractors || null;
            out.methods = q.methods || null;
          } else if (payload.intent === 'why-wrong') {
            var d = q.distractors && q.distractors[payload.selectedAnswer];
            out.text = d ? JTS.i18n.pick(d, lang) : t('ai.unsure');
            out.unsure = !d;
          } else {
            /* Free-form chat has no verified answer in mock mode (AI-07). */
            out.text = t('ai.unsure');
            out.unsure = true;
            out.fallbackExplanation = JTS.i18n.pick(q.explanation, lang);
          }
          resolve(out);
        }, 400);
      });
    },

    /** One tiny live call, so a misconfiguration is found in Settings and not
        in front of a student. Does not count against the daily quota. */
    test: function () {
      var cfg = this.config();
      if (cfg.style === 'mock') {
        return Promise.resolve({ ok: true, text: 'Mock mode: no network call is made.' });
      }
      if (!cfg.endpoint) return Promise.resolve({ ok: false, text: 'Endpoint is empty.' });
      if (cfg.style === 'openai' && !cfg.model) return Promise.resolve({ ok: false, text: 'Model is empty.' });
      return this._live(cfg, {
        intent: 'chat',
        language: Store.settings().explainLang,
        questionRecord: { stem: 'Reply with the single word OK.', section: 'math' },
        userMessage: 'Reply with the single word OK.'
      }).then(function (r) {
        return { ok: true, text: r.text.slice(0, 200), usage: r.usage };
      }).catch(function (e) {
        var msg = String(e && e.message || e);
        /* A browser CORS rejection surfaces as an opaque "Failed to fetch". */
        if (/failed to fetch|networkerror|load failed/i.test(msg)) {
          msg += '  — this is usually CORS or no network. Opening index.html from file:// sends Origin: null, ' +
                 'which many APIs reject. Serve the folder over http://localhost, or point the endpoint at your own proxy.';
        }
        return { ok: false, text: msg };
      });
    },

    feedback: function (record) {
      Store.update(function (s) {
        s.aiFeedback.push(Object.assign({ id: U.uid('fb'), ts: Date.now() }, record));
      });
    }
  };

  global.JTS = JTS;
})(window);

/* ==========================================================================
   core.js (part 2) — SPR answers, question bank, mastery, planner, shell
   ========================================================================== */
(function (global) {
  'use strict';
  var JTS = global.JTS, U = JTS.util, Store = JTS.store, t = JTS.t;

  /* ------------------------------------------------------- SPR answer check */
  /**
   * Digital SAT student-produced response rules:
   *  - up to 5 characters (6 if negative)
   *  - no %, $, commas, spaces
   *  - mixed numbers are not accepted (3 1/2 must be 7/2 or 3.5)
   *  - fraction / decimal / equivalent forms all count
   */
  JTS.spr = {
    normalize: function (raw) {
      return String(raw === undefined || raw === null ? '' : raw)
        .trim()
        .replace(/\s+/g, '')
        .replace(/[−–—]/g, '-')   /* unicode minus / dashes */
        .replace(/^\+/, '');
    },
    /** Parse a normalized string into a number, or null when it is not numeric. */
    value: function (norm) {
      if (!norm) return null;
      var m = norm.match(/^(-?)(\d+)\/(\d+)$/);
      if (m) {
        var den = Number(m[3]);
        if (!den) return null;
        return (m[1] ? -1 : 1) * (Number(m[2]) / den);
      }
      if (/^-?(\d+\.?\d*|\.\d+)$/.test(norm)) return Number(norm);
      return null;
    },
    /** Format validation, independent of correctness. */
    validate: function (raw) {
      var s = String(raw === undefined ? '' : raw).trim();
      if (!s) return { ok: false, code: 'empty' };
      if (/[%$,]/.test(s)) return { ok: false, code: 'symbol' };
      if (/\d\s+\d/.test(s)) return { ok: false, code: 'mixed' };  /* "3 1/2" */
      var n = this.normalize(s);
      var limit = n[0] === '-' ? 6 : 5;
      if (n.length > limit) return { ok: false, code: 'length' };
      if (this.value(n) === null) return { ok: false, code: 'format' };
      return { ok: true, normalized: n, value: this.value(n) };
    },
    /** answers is the question's `answer` array of equivalent accepted forms. */
    check: function (raw, answers) {
      var list = Array.isArray(answers) ? answers : [answers];
      var n = this.normalize(raw);
      if (!n) return false;
      var v = this.value(n);
      for (var i = 0; i < list.length; i++) {
        var an = this.normalize(list[i]);
        if (an === n) return true;
        var av = this.value(an);
        if (v !== null && av !== null) {
          var tol = 1e-6 * Math.max(1, Math.abs(av));
          if (Math.abs(v - av) <= tol) return true;
        }
      }
      return false;
    }
  };

  /* -------------------------------------------------------------- question bank */
  JTS.bank = {
    _index: null,
    all: function () {
      if (!this._index) this.reindex();
      return this._index.list;
    },
    reindex: function () {
      var raw = JTS.data.questions || [];
      var overrides = Store.overrides();
      var byId = {};
      var list = raw.map(function (q) {
        var merged = overrides[q.id] ? Object.assign({}, q, overrides[q.id]) : q;
        byId[merged.id] = merged;
        return merged;
      });
      this._index = { list: list, byId: byId, raw: raw.reduce(function (a, q) { a[q.id] = q; return a; }, {}) };
      return this._index;
    },
    get: function (id) { if (!this._index) this.reindex(); return this._index.byId[id] || null; },
    raw: function (id) { if (!this._index) this.reindex(); return this._index.raw[id] || null; },
    /** filters: {section, skillIds[], domains[], difficulty[], excludeIds[], licenseStatus, status} */
    query: function (filters) {
      filters = filters || {};
      var state = Store.state();
      var attempts = state ? state.attempts : [];
      var lastByQ = {};
      attempts.forEach(function (a) { lastByQ[a.questionId] = a; });
      return this.all().filter(function (q) {
        if (filters.section && q.section !== filters.section) return false;
        if (filters.skillIds && filters.skillIds.length && filters.skillIds.indexOf(q.skillId) < 0) return false;
        if (filters.domains && filters.domains.length) {
          var sk = JTS.skills.get(q.skillId);
          if (!sk || filters.domains.indexOf(sk.domain) < 0) return false;
        }
        if (filters.difficulty && filters.difficulty.length && filters.difficulty.indexOf(q.difficulty) < 0) return false;
        if (filters.excludeIds && filters.excludeIds.indexOf(q.id) >= 0) return false;
        if (filters.licenseStatus && filters.licenseStatus !== 'all' && q.meta.licenseStatus !== filters.licenseStatus) return false;
        if (filters.marked && !(state && state.attempts.some(function (a) { return a.questionId === q.id && a.marked; }))) return false;
        if (filters.status && filters.status.length) {
          var last = lastByQ[q.id];
          var st = !last ? 'unanswered' : (last.correct ? 'correct' : 'incorrect');
          if (filters.status.indexOf(st) < 0) return false;
        }
        return true;
      });
    },
    /** Pick n questions for a skill the student has not seen yet, if possible. */
    pickForSkill: function (skillId, n, opts) {
      opts = opts || {};
      var state = Store.state();
      var seen = (state && state.seenQuestionIds) || [];
      var pool = this.query({ skillIds: [skillId], difficulty: opts.difficulty, excludeIds: opts.exclude });
      var fresh = pool.filter(function (q) { return seen.indexOf(q.id) < 0; });
      var chosen = U.shuffle(fresh.length >= n ? fresh : fresh.concat(
        U.shuffle(pool.filter(function (q) { return seen.indexOf(q.id) >= 0; }), 7)
      ), opts.seed === undefined ? 11 : opts.seed);
      return chosen.slice(0, n);
    },
    stats: function () {
      var by = U.groupBy(this.all(), function (q) { return q.skillId; });
      var out = {};
      Object.keys(by).forEach(function (k) { out[k] = by[k].length; });
      return out;
    },
    /** Data validator used by the Step-1 acceptance check and admin.html. */
    validateAll: function () {
      var problems = [];
      var ids = {};
      this.all().forEach(function (q) {
        function bad(msg) { problems.push({ id: q.id, message: msg }); }
        if (!q.id) return problems.push({ id: '(none)', message: 'missing id' });
        if (ids[q.id]) bad('duplicate id'); else ids[q.id] = 1;
        if (['rw', 'math'].indexOf(q.section) < 0) bad('bad section');
        if (!JTS.skills.get(q.skillId)) bad('unknown skillId ' + q.skillId);
        if ([1, 2, 3].indexOf(q.difficulty) < 0) bad('difficulty must be 1|2|3');
        if (['mcq', 'spr'].indexOf(q.type) < 0) bad('bad type');
        if (q.type === 'mcq') {
          if (!q.options || q.options.length !== 4) bad('mcq needs 4 options');
          if (['A', 'B', 'C', 'D'].indexOf(q.answer) < 0) bad('mcq answer must be A-D');
          if (q.section === 'rw' && !q.distractors) bad('R&W mcq needs distractor rationales');
        }
        if (q.type === 'spr') {
          if (!Array.isArray(q.answer) || !q.answer.length) bad('spr answer must be a non-empty array');
          else q.answer.forEach(function (a) {
            if (JTS.spr.value(JTS.spr.normalize(a)) === null) bad('spr answer not numeric: ' + a);
          });
        }
        if (!q.explanation || !q.explanation.en || !q.explanation.ru || !q.explanation.kk) bad('explanation needs en/ru/kk');
        if (q.calculator !== (q.section === 'math')) bad('calculator must be true for math and false for rw');
        if (!q.meta) bad('missing meta');
        else {
          if (!q.meta.source) bad('meta.source required');
          if (['original', 'licensed', 'link-only'].indexOf(q.meta.licenseStatus) < 0) bad('bad licenseStatus');
          if (['draft', 'reviewed'].indexOf(q.meta.reviewStatus) < 0) bad('bad reviewStatus');
        }
        if (q.methods && q.methods.length === 1) bad('methods[] with a single entry: drop it or add a real alternative');
      });
      return problems;
    }
  };

  /* ------------------------------------------------------------------ skills */
  JTS.skills = {
    get: function (id) {
      return (JTS.data.skills || []).filter(function (s) { return s.id === id; })[0] || null;
    },
    all: function () { return JTS.data.skills || []; },
    bySection: function (section) {
      return this.all().filter(function (s) { return s.section === section; });
    },
    domains: function (section) {
      var list = this.all().filter(function (s) { return !section || s.section === section; });
      var seen = [];
      list.forEach(function (s) { if (seen.indexOf(s.domain) < 0) seen.push(s.domain); });
      return seen.map(function (d) {
        return (JTS.data.domains || []).filter(function (x) { return x.id === d; })[0] ||
          { id: d, section: section, name_en: d, name_ru: d, name_kk: d };
      });
    },
    domain: function (id) {
      return (JTS.data.domains || []).filter(function (x) { return x.id === id; })[0] || null;
    },
    name: function (id, lang) { return JTS.i18n.pickName(this.get(id), lang); }
  };

  /* ----------------------------------------------------------------- mastery */
  /**
   * Rules (§10.2):
   *  - independent attempt = helpType 'none', in study / diagnostic / exam mode
   *  - no status before 6 independent attempts -> 'no-data'
   *  - mastered = >=80% over the last 8 independent attempts AND a confirming
   *    correct attempt at least 3 days after the run that first hit the bar
   */
  JTS.mastery = {
    isIndependent: function (a) { return a.helpType === 'none'; },
    attemptsFor: function (skillId, opts) {
      var s = Store.state(); if (!s) return [];
      opts = opts || {};
      return s.attempts.filter(function (a) {
        if (a.skillId !== skillId) return false;
        if (opts.independentOnly && !JTS.mastery.isIndependent(a)) return false;
        return true;
      });
    },
    compute: function (skillId) {
      var cfg = JTS.config.mastery;
      var all = this.attemptsFor(skillId);
      var indep = all.filter(this.isIndependent);
      var helped = all.filter(function (a) { return !JTS.mastery.isIndependent(a); });
      var out = {
        skillId: skillId,
        total: all.length,
        independent: indep.length,
        helped: helped.length,
        helpedCorrect: helped.filter(function (a) { return a.correct; }).length,
        status: 'no-data',
        accuracy: null,
        windowAccuracy: null,
        medianTimeMs: null,
        paceRatio: null,
        confirmed: false,
        needed: Math.max(0, cfg.minIndependentAttempts - indep.length)
      };
      if (!indep.length) return out;
      out.accuracy = U.pct(indep.filter(function (a) { return a.correct; }).length, indep.length) / 100;
      out.medianTimeMs = U.median(indep.map(function (a) { return a.timeMs || 0; }).filter(Boolean));
      var skill = JTS.skills.get(skillId);
      var bench = skill && skill.section === 'math' ? JTS.config.pace.math : JTS.config.pace.rw;
      if (out.medianTimeMs) out.paceRatio = (out.medianTimeMs / 1000) / bench;

      if (indep.length < cfg.minIndependentAttempts) return out; /* stays 'no-data' */

      var win = indep.slice(-cfg.window);
      var winCorrect = win.filter(function (a) { return a.correct; }).length;
      out.windowAccuracy = winCorrect / win.length;

      if (out.windowAccuracy >= cfg.masteredAccuracy) {
        /* Find the attempt at which the bar was first reached, then require a
           later confirming correct attempt >= confirmAfterDays afterwards. */
        var firstHitTs = win[0].ts;
        var confirm = indep.filter(function (a) {
          return a.correct && (a.ts - firstHitTs) >= cfg.confirmAfterDays * U.DAY_MS;
        });
        out.confirmed = confirm.length > 0;
        out.status = out.confirmed ? 'mastered' : 'developing';
      } else if (out.windowAccuracy >= 0.5) {
        out.status = 'developing';
      } else {
        out.status = 'learning';
      }
      return out;
    },
    all: function () {
      var out = {};
      JTS.skills.all().forEach(function (s) { out[s.id] = JTS.mastery.compute(s.id); });
      return out;
    },
    /**
     * Next-skill priority (§10.3). Weighted sum, not "most errors".
     *  confidence  — how sure we are about the current estimate (low = needs data)
     *  examWeight  — how much of the test this skill actually carries
     *  gain        — headroom between current accuracy and the 85% working target
     *  recency     — decay so a skill practiced today is not re-served immediately
     *  urgency     — as the exam nears, high-weight skills outrank exploration
     */
    priority: function (skillId, opts) {
      opts = opts || {};
      var m = this.compute(skillId);
      var skill = JTS.skills.get(skillId) || { examWeight: 0.02 };
      var cfg = JTS.config.mastery;

      var confidence = U.clamp(m.independent / cfg.minIndependentAttempts, 0, 1);
      var acc = m.accuracy === null ? 0.5 : m.accuracy;
      var gain = U.clamp((0.85 - acc) / 0.85, 0, 1);
      var attempts = this.attemptsFor(skillId);
      var last = attempts.length ? attempts[attempts.length - 1].ts : 0;
      var daysSince = last ? (Date.now() - last) / U.DAY_MS : 30;
      var recency = U.clamp(daysSince / 14, 0, 1);
      var daysToExam = opts.daysToExam === undefined ? 84 : opts.daysToExam;
      var urgency = U.clamp(1 - daysToExam / 120, 0, 1);

      /* Weights: unknown-but-heavy skills lead early; as the exam approaches the
         weight shifts from exploration (low confidence) to payoff (examWeight). */
      var wUnknown  = 0.30 * (1 - urgency) + 0.12 * urgency;
      var wWeight   = 0.22 + 0.20 * urgency;
      var wGain     = 0.28;
      var wRecency  = 0.12;
      var score =
        wUnknown * (1 - confidence) +
        wWeight * U.clamp(skill.examWeight / 0.08, 0, 1) +
        wGain * gain +
        wRecency * recency;
      if (m.status === 'mastered') score *= 0.25;    /* keep, but far down the list */
      return { skillId: skillId, score: score, mastery: m, confidence: confidence };
    },
    /** Ranked weak-skill list used by Practice → Weak Skills and by the planner. */
    ranked: function (opts) {
      opts = opts || {};
      var list = JTS.skills.all()
        .filter(function (s) { return !opts.section || s.section === opts.section; })
        .map(function (s) { return JTS.mastery.priority(s.id, opts); });
      list.sort(function (a, b) { return b.score - a.score; });
      return list;
    }
  };

  /* --------------------------------------------------------------- analytics */
  JTS.analytics = {
    daysToExam: function () {
      var s = Store.state();
      if (!s || !s.examDate || s.examDate.mode !== 'date' || !s.examDate.testDate) return null;
      return U.daysBetween(U.today(), U.parseISO(s.examDate.testDate));
    },
    weeksToExam: function () {
      var d = this.daysToExam();
      return d === null ? null : Math.max(0, Math.ceil(d / 7));
    },
    horizonWeeks: function () {
      var w = this.weeksToExam();
      return w === null ? 12 : U.clamp(w, 1, 40);
    },
    pendingReviews: function () {
      var s = Store.state(); if (!s) return [];
      var now = Date.now();
      return s.errors.filter(function (e) { return !e.resolvedAt && e.reviewDueAt <= now; });
    },
    touchStreak: function () {
      var s = Store.state(); if (!s) return;
      var today = U.iso(new Date());
      var st = s.profile.streak;
      if (st.lastDay === today) return;
      var yest = U.iso(U.addDays(U.today(), -1));
      st.count = (st.lastDay === yest) ? st.count + 1 : 1;
      st.lastDay = today;
      st.best = Math.max(st.best || 0, st.count);
      Store.save();
      JTS.badges.evaluate();
    },
    activityByDay: function (days) {
      var s = Store.state(); if (!s) return {};
      var out = {};
      s.attempts.forEach(function (a) {
        var k = U.iso(new Date(a.ts));
        out[k] = (out[k] || 0) + 1;
      });
      return out;
    },
    totals: function () {
      var s = Store.state();
      if (!s) return { total: 0, indep: 0, indepCorrect: 0, helped: 0, helpedCorrect: 0, timeMs: 0 };
      var indep = s.attempts.filter(JTS.mastery.isIndependent);
      var helped = s.attempts.filter(function (a) { return !JTS.mastery.isIndependent(a); });
      return {
        total: s.attempts.length,
        indep: indep.length,
        indepCorrect: indep.filter(function (a) { return a.correct; }).length,
        helped: helped.length,
        helpedCorrect: helped.filter(function (a) { return a.correct; }).length,
        timeMs: U.sum(s.attempts.map(function (a) { return a.timeMs || 0; }))
      };
    }
  };

  /* ------------------------------------------------------------------ badges */
  JTS.badges = {
    defs: [
      { id: 'streak7', test: function (s) { return s.profile.streak.count >= 7 || s.profile.streak.best >= 7; } },
      { id: 'firstMastered', test: function () {
          return JTS.skills.all().some(function (sk) { return JTS.mastery.compute(sk.id).status === 'mastered'; });
        } },
      { id: 'indep100', test: function (s) {
          return s.attempts.filter(JTS.mastery.isIndependent).length >= 100;
        } }
    ],
    evaluate: function () {
      var s = Store.state(); if (!s) return [];
      var gained = [];
      this.defs.forEach(function (d) {
        if (s.badges.indexOf(d.id) >= 0) return;
        var ok = false;
        try { ok = d.test(s); } catch (e) {}
        if (ok) { s.badges.push(d.id); gained.push(d.id); }
      });
      if (gained.length) {
        Store.save();
        gained.forEach(function (g) { JTS.ui.toast(t('badge.earned') + ': ' + t('badge.' + g), 'ok'); });
      }
      return gained;
    }
  };

  /* ------------------------------------------------------------- attempt log */
  JTS.attempts = {
    record: function (rec) {
      var s = Store.state(); if (!s) return null;
      var attempt = Object.assign({
        id: U.uid('att'), ts: Date.now(), helpType: 'none', marked: false,
        errorType: null, mode: 'study'
      }, rec);
      s.attempts.push(attempt);
      if (s.seenQuestionIds.indexOf(attempt.questionId) < 0) s.seenQuestionIds.push(attempt.questionId);
      Store.save();
      JTS.attempts.resolveIfDemonstrated(attempt);
      JTS.analytics.touchStreak();
      JTS.badges.evaluate();
      return attempt;
    },
    /** Register a wrong answer for spaced review (§8.2 step 4). */
    logError: function (attempt, errorType) {
      var s = Store.state(); if (!s) return null;
      var err = {
        id: U.uid('err'), attemptId: attempt.id, questionId: attempt.questionId,
        skillId: attempt.skillId, errorType: errorType || null,
        ts: Date.now(), reviewDueAt: Date.now() + JTS.config.errorReviewDelayDays * U.DAY_MS,
        resolvedAt: null, mode: attempt.mode
      };
      s.errors.push(err);
      Store.save();
      return err;
    },
    setErrorType: function (attemptId, errorType) {
      Store.update(function (s) {
        s.attempts.forEach(function (a) { if (a.id === attemptId) a.errorType = errorType; });
        s.errors.forEach(function (e) { if (e.attemptId === attemptId) e.errorType = errorType; });
      });
    },
    /**
     * An error leaves the review queue only when the student gets that same
     * question right, on their own, at least the review delay later. Getting it
     * right ten minutes after reading the explanation proves nothing.
     */
    resolveIfDemonstrated: function (attempt) {
      if (!attempt.correct || attempt.helpType !== 'none') return 0;
      var resolved = 0;
      Store.update(function (s) {
        s.errors.forEach(function (e) {
          if (e.resolvedAt) return;
          if (e.questionId !== attempt.questionId) return;
          if (attempt.ts < e.reviewDueAt) return;
          e.resolvedAt = attempt.ts;
          resolved++;
        });
      });
      return resolved;
    }
  };

  /* ----------------------------------------------------------------- planner */
  /**
   * Builds a week-by-week plan. Each lesson carries goal, skills, actions,
   * expected minutes and a status, so "Today" can render it without guessing.
   */
  JTS.planner = {
    phases: [
      { id: 1, key: 'diagnostic',  share: 0.05 },
      { id: 2, key: 'foundations', share: 0.22 },
      { id: 3, key: 'deep',        share: 0.28 },
      { id: 4, key: 'timed',       share: 0.20 },
      { id: 5, key: 'mocks',       share: 0.17 },
      { id: 6, key: 'refinement',  share: 0.08 }
    ],
    phaseForWeek: function (weekIndex, totalWeeks) {
      var acc = 0;
      for (var i = 0; i < this.phases.length; i++) {
        acc += this.phases[i].share;
        if ((weekIndex + 1) / totalWeeks <= acc + 1e-9) return this.phases[i].id;
      }
      return 6;
    },
    /** Priority-ordered skills for a phase, mixing sections so a week is balanced. */
    _skillQueue: function (daysToExam) {
      var rw = JTS.mastery.ranked({ section: 'rw', daysToExam: daysToExam });
      var math = JTS.mastery.ranked({ section: 'math', daysToExam: daysToExam });
      var out = [], i = 0;
      while (i < Math.max(rw.length, math.length)) {
        if (rw[i]) out.push(rw[i]);
        if (math[i]) out.push(math[i]);
        i++;
      }
      return out;
    },
    actionsForPhase: function (phaseId, hasErrors) {
      switch (phaseId) {
        case 1: return ['learn', 'practice'];
        case 2: return hasErrors ? ['learn', 'practice', 'review-errors'] : ['learn', 'practice'];
        case 3: return hasErrors ? ['practice', 'review-errors', 'practice'] : ['practice', 'practice'];
        case 4: return ['practice', 'mini-test'];
        case 5: return ['mini-test', 'review-errors'];
        default: return ['review-errors', 'practice'];
      }
    },
    generate: function (opts) {
      opts = opts || {};
      var s = Store.state(); if (!s) return null;
      var avail = s.availability || { days: [1, 3, 5], minutesPerSession: 60 };
      var daysToExam = JTS.analytics.daysToExam();
      var horizon = opts.horizonWeeks || JTS.analytics.horizonWeeks();
      var queue = this._skillQueue(daysToExam === null ? 84 : daysToExam);
      var qi = 0;
      var pendingErrors = JTS.analytics.pendingReviews().length > 0 || s.errors.length > 0;
      var weeks = [];
      var startMonday = U.weekStart(U.today());
      var todayISO = U.iso(U.today());

      for (var w = 0; w < horizon; w++) {
        var phaseId = this.phaseForWeek(w, horizon);
        var monday = U.addDays(startMonday, w * 7);
        var lessons = [];
        avail.days.slice().sort(function (a, b) { return a - b; }).forEach(function (dow) {
          var date = U.addDays(monday, dow - 1);
          /* Never schedule into the past. The first week starts today, not on
             the Monday the student happened to miss. */
          if (U.iso(date) < todayISO) return;
          var picks = [];
          var per = avail.minutesPerSession >= 90 ? 2 : 1;
          for (var k = 0; k < per; k++) {
            if (!queue.length) break;
            picks.push(queue[qi % queue.length].skillId); qi++;
          }
          var actions = JTS.planner.actionsForPhase(phaseId, pendingErrors);
          lessons.push({
            id: U.uid('les'),
            date: U.iso(date),
            phaseId: phaseId,
            goal: null,                    /* rendered from skills + phase at display time */
            skillIds: picks,
            actions: actions,
            expectedMinutes: avail.minutesPerSession,
            status: 'planned',
            movedFrom: null
          });
        });
        weeks.push({ index: w, monday: U.iso(monday), phaseId: phaseId, lessons: lessons });
      }

      var plan = {
        generatedAt: Date.now(),
        horizonWeeks: horizon,
        provisional: daysToExam === null,
        weeks: weeks
      };
      s.plan = plan;
      s.profile.currentPhase = weeks.length ? weeks[0].phaseId : 1;
      Store.save();
      return plan;
    },
    /** Target length: roughly three minutes per question with explanations. */
    targetQuestionCount: function (lesson) {
      return U.clamp(Math.round((lesson.expectedMinutes || 60) / 3), 5, 30);
    },

    /**
     * The questions this lesson would actually serve. 'review-errors' pulls
     * what is genuinely due; the rest come from the lesson's own skills,
     * preferring items the student has not seen.
     *
     * The card shows this length rather than the target, because the bank may
     * hold fewer questions for a skill than the target asks for and promising
     * thirty then serving twenty is a small lie the student will notice.
     */
    lessonQuestionIds: function (lesson) {
      if (!lesson) return [];
      var want = this.targetQuestionCount(lesson);
      var ids = [];

      if (lesson.actions.indexOf('review-errors') >= 0) {
        JTS.analytics.pendingReviews().forEach(function (e) {
          if (ids.indexOf(e.questionId) < 0 && JTS.bank.get(e.questionId)) ids.push(e.questionId);
        });
        ids = ids.slice(0, Math.ceil(want / 2));
      }

      var perSkill = Math.max(1, Math.ceil((want - ids.length) / Math.max(1, lesson.skillIds.length)));
      lesson.skillIds.forEach(function (skillId) {
        JTS.bank.pickForSkill(skillId, perSkill, { exclude: ids, seed: lesson.id.length }).forEach(function (q) {
          if (ids.length < want && ids.indexOf(q.id) < 0) ids.push(q.id);
        });
      });
      return ids;
    },

    /** Turn a lesson into a real session. */
    startLesson: function (lessonId) {
      var lesson = this.lesson(lessonId);
      if (!lesson) return null;
      var ids = this.lessonQuestionIds(lesson);
      if (!ids.length) return null;
      var timed = lesson.actions.indexOf('mini-test') >= 0;
      return JTS.session.start({
        kind: timed ? 'mini-test' : 'lesson',
        mode: 'study',
        title: lesson.skillIds.map(function (id) { return JTS.skills.name(id); }).join(' · '),
        questionIds: ids,
        durationMs: timed ? ids.length * 90000 : 0,
        softTimer: !timed,
        returnHash: '#/today',
        finishHash: '#/today',
        meta: { lessonId: lesson.id, phaseId: lesson.phaseId }
      });
    },

    /** The next thing that measures progress rather than building it. */
    nextCheckpoint: function () {
      var today = U.iso(U.today());
      var lessons = this.allLessons().filter(function (l) {
        return l.date >= today && l.status === 'planned' && l.actions.indexOf('mini-test') >= 0;
      });
      lessons.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
      if (lessons[0]) return { type: 'mini-test', date: lessons[0].date, lesson: lessons[0] };

      var s = Store.state();
      if (!s || !s.plan) return null;
      var current = this.currentPhase();
      var week = s.plan.weeks.filter(function (w) { return w.phaseId > current; })[0];
      if (week) return { type: 'phase', date: week.monday, phaseId: week.phaseId };
      return null;
    },

    /**
     * The index of the plan week that contains today. The plan always starts
     * on the Monday of the week it was generated in, so this is a lookup and
     * not a calculation.
     */
    todayWeekIndex: function () {
      var s = Store.state();
      if (!s || !s.plan || !s.plan.weeks.length) return 0;
      var monday = U.iso(U.weekStart(U.today()));
      var weeks = s.plan.weeks;
      for (var i = 0; i < weeks.length; i++) if (weeks[i].monday >= monday) return i;
      return weeks.length - 1;
    },

    /**
     * Which phase the student is in *today*, read off the plan's own weeks.
     * profile.currentPhase only records where the plan started — nothing moves
     * it as time passes — so anything that says "you are here" has to ask the
     * calendar instead, or it will still be pointing at the diagnostic in
     * November.
     */
    currentPhase: function () {
      var s = Store.state();
      if (!s) return 1;
      if (!s.plan || !s.plan.weeks.length) return s.profile.currentPhase || 1;
      return s.plan.weeks[this.todayWeekIndex()].phaseId;
    },

    allLessons: function () {
      var s = Store.state();
      if (!s || !s.plan) return [];
      return s.plan.weeks.reduce(function (acc, w) { return acc.concat(w.lessons); }, []);
    },
    lesson: function (id) {
      return this.allLessons().filter(function (l) { return l.id === id; })[0] || null;
    },
    weekOf: function (dateISO) {
      var s = Store.state(); if (!s || !s.plan) return null;
      var monday = U.iso(U.weekStart(U.parseISO(dateISO)));
      return s.plan.weeks.filter(function (w) { return w.monday === monday; })[0] || null;
    },
    nextLesson: function () {
      var today = U.iso(U.today());
      var lessons = this.allLessons().filter(function (l) { return l.status === 'planned'; });
      lessons.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
      var todays = lessons.filter(function (l) { return l.date === today; });
      return todays[0] || lessons.filter(function (l) { return l.date >= today; })[0] || lessons[0] || null;
    },
    setStatus: function (lessonId, status) {
      Store.update(function (s) {
        if (!s.plan) return;
        s.plan.weeks.forEach(function (w) {
          w.lessons.forEach(function (l) { if (l.id === lessonId) l.status = status; });
        });
      });
    },
    move: function (lessonId, newDateISO) {
      Store.update(function (s) {
        if (!s.plan) return;
        s.plan.weeks.forEach(function (w) {
          w.lessons.forEach(function (l) {
            if (l.id !== lessonId) return;
            l.movedFrom = l.date; l.date = newDateISO; l.status = 'moved';
          });
        });
      });
    },
    /**
     * Rebuild upcoming weeks instead of accumulating overdue lessons (§10.1).
     * Past lessons still 'planned' are marked skipped; the remaining weeks are
     * regenerated from current mastery within the available time.
     */
    rebuild: function () {
      var s = Store.state(); if (!s || !s.plan) return null;
      var today = U.iso(U.today());
      var skipped = 0;
      s.plan.weeks.forEach(function (w) {
        w.lessons.forEach(function (l) {
          if (l.date < today && l.status === 'planned') { l.status = 'skipped'; skipped++; }
        });
      });
      var pastWeeks = s.plan.weeks.filter(function (w) { return w.monday < U.iso(U.weekStart(U.today())); });
      var horizon = Math.max(1, s.plan.horizonWeeks - pastWeeks.length);
      var keptGeneratedAt = s.plan.generatedAt;
      var fresh = this.generate({ horizonWeeks: horizon });
      fresh.weeks = pastWeeks.concat(fresh.weeks.map(function (w, i) {
        w.index = pastWeeks.length + i; return w;
      }));
      fresh.horizonWeeks = fresh.weeks.length;
      fresh.rebuiltAt = Date.now();
      fresh.previousGeneratedAt = keptGeneratedAt;
      fresh.skippedCount = skipped;
      s.plan = fresh;
      Store.save();
      return fresh;
    }
  };

  /* ------------------------------------------------------------------- shell */
  JTS.shell = {
    navItems: [
      { path: '#/today',    key: 'nav.today',    icon: '◉' },
      { path: '#/plan',     key: 'nav.plan',     icon: '☷' },
      { path: '#/practice', key: 'nav.practice', icon: '✎' },
      { path: '#/mocks',    key: 'nav.mocks',    icon: '⏱' },
      { path: '#/progress', key: 'nav.progress', icon: '↗' }
    ],
    /* Destinations that belong in the sidebar but not in the phone tab bar,
       where five is already the most that fits. */
    subNavItems: [
      { path: '#/roadmap',      key: 'roadmap.title', icon: '⟋' },
      /* The diagnostic lives here rather than only at the end of onboarding:
         it is the same measurement whether or not a student already has a
         score, and it is worth retaking every few weeks. */
      { path: '#/diagnostic',   key: 'diag.title',   icon: '◎' },
      { path: '#/vocab',        key: 'vocab.title',  icon: '⌸' },
      { path: '#/desmos-guide', key: 'desmos.title', icon: 'ƒ' }
    ],
    applyProfileSettings: function () {
      var st = Store.settings();
      document.documentElement.setAttribute('data-theme', st.theme || 'light');
      if (st.uiLang) JTS.i18n.lang = st.uiLang;
      document.documentElement.lang = JTS.i18n.lang;
    },
    /**
     * The chrome is one sidebar plus one slim top bar. `renderHeader` keeps its
     * name because every screen and every test already calls it; what it draws
     * is now the sidebar, the tab bar and the top bar together.
     */
    renderHeader: function () {
      this.renderSidebar();
      this.renderTabbar();
      this.renderTopbar();
    },

    /** The language switch, wherever it is needed. */
    langSwitch: function () {
      var langs = U.el('div.lang-switch', { role: 'group', 'aria-label': t('settings.uiLang') });
      JTS.config.languages.forEach(function (l) {
        langs.appendChild(U.el('button', {
          type: 'button', text: l.toUpperCase(),
          'aria-pressed': String(JTS.i18n.lang === l),
          onclick: function () { JTS.i18n.setLang(l); JTS.shell.renderHeader(); JTS.router.render(); }
        }));
      });
      return langs;
    },

    themeButton: function () {
      return U.el('button.icon-btn', {
        type: 'button', 'aria-label': t('settings.theme'), html: '&#9681;',
        onclick: function () {
          var st = Store.settings();
          var next = st.theme === 'dark' ? 'light' : 'dark';
          Store.update(function (s) { s.settings.theme = next; });
          document.documentElement.setAttribute('data-theme', next);
        }
      });
    },

    signOutButton: function () {
      return U.el('button.icon-btn', {
        type: 'button', 'aria-label': t('auth.logout'), title: t('auth.logout'), text: '⇥',
        onclick: function () {
          JTS.Auth.logout().then(function () {
            JTS.shell.renderHeader();
            JTS.router.go('#/auth');
          });
        }
      });
    },

    /**
     * The header for the screens a student sees before there is anywhere to
     * navigate to: onboarding and the diagnostic. The app chrome is not built
     * until the plan exists, so these screens carry the brand and the three
     * controls that still make sense — language, theme, and the way out.
     */
    setupBar: function () {
      return U.el('div.setup-bar', null, [
        U.el('div.setup-brand', null, [
          U.el('span.brand-mark', { text: 'JTS', 'aria-hidden': 'true' }),
          U.el('span.brand-text', null, [
            U.el('b', { text: 'JTS SAT' }),
            U.el('span', { text: t('brand.eyebrow') })
          ])
        ]),
        U.el('div.sb-tools', null, [
          this.langSwitch(), this.themeButton(), this.signOutButton()
        ])
      ]);
    },

    renderSidebar: function () {
      var bar = U.$('#app-sidebar');
      if (!bar) return;
      U.clear(bar);
      bar.setAttribute('aria-label', t('nav.main'));
      var state = Store.state();
      /* During onboarding every destination in this bar is blocked by the
         router guard, so showing them offers a student nine ways to be bounced
         straight back. Only the controls that work are built. */
      var onboarding = !!state && !state.profile.onboardingComplete;

      /* Mid-onboarding the only other screen a student can reach is Settings,
         and #/today would bounce them; the brand is their way back. */
      bar.appendChild(U.el('a.sb-brand', { href: onboarding ? '#/onboarding' : '#/today' }, [
        U.el('span.brand-mark', { text: 'JTS', 'aria-hidden': 'true' }),
        U.el('span.brand-text', null, [
          U.el('b', { text: 'JTS SAT' }),
          U.el('span', { text: t('brand.eyebrow') })
        ])
      ]));

      /* The goal and the exam are what the student is steering by, so they sit
         above the navigation rather than two clicks away in Settings. */
      if (state && state.goals && state.goals.total) {
        var exam = state.examDate && state.examDate.testDate;
        bar.appendChild(U.el('a.sb-goal', { href: '#/settings' }, [
          U.el('span.sb-goal-label', { text: t('nav.goal') }),
          U.el('b.sb-goal-value', { text: String(state.goals.total) }),
          U.el('span.sb-goal-meta', {
            text: exam ? U.fmtDate(U.parseISO(exam), Store.settings().uiLang) : t('settings.undecided')
          })
        ]));
      }

      if (!onboarding) {
        var nav = U.el('nav.sb-nav', { id: 'main-nav' });
        this.navItems.concat(this.subNavItems).forEach(function (it) {
          nav.appendChild(U.el('a', { href: it.path, dataset: { path: it.path } }, [
            U.el('em', { text: it.icon, 'aria-hidden': 'true' }),
            U.el('span', { text: t(it.key) })
          ]));
        });
        bar.appendChild(nav);
      }

      bar.appendChild(U.el('div.spacer'));

      var tools = U.el('div.sb-tools');
      tools.appendChild(this.langSwitch());
      tools.appendChild(this.themeButton());
      if (!onboarding) {
        tools.appendChild(U.el('a.icon-btn', {
          href: '#/guide', 'aria-label': t('guide.title'), title: t('guide.title'), text: '?'
        }));
      }
      tools.appendChild(U.el('a.icon-btn', {
        href: '#/settings', 'aria-label': t('nav.settings'), html: '&#9881;'
      }));
      bar.appendChild(tools);

      if (state) {
        var initials = U.initials(state.profile.name || state.profile.email);
        var signOut = this.signOutButton();
        signOut.classList.add('sb-out');
        bar.appendChild(U.el('div.sb-user', null, [
          U.el('span.sb-avatar', { text: initials, 'aria-hidden': 'true' }),
          U.el('span.sb-user-text', null, [
            U.el('b', { text: state.profile.name || state.profile.email }),
            U.el('span', { text: state.profile.name ? state.profile.email : t('brand.eyebrow') })
          ]),
          signOut
        ]));
      }

      /* Nothing in this bar is navigation until a plan exists, so until then
         the screens carry JTS.shell.setupBar() instead and the frame stays
         out of the way entirely. */
      bar.hidden = !state || onboarding;
    },

    /** Phone only: the five primary destinations, mirroring the sidebar. */
    renderTabbar: function () {
      var tabbar = U.$('#tabbar');
      if (!tabbar) return;
      U.clear(tabbar);
      /* Same reason as the sidebar: mid-onboarding these five all bounce. */
      var st = Store.state();
      tabbar.hidden = !st || !st.profile.onboardingComplete;
      if (tabbar.hidden) return;
      this.navItems.forEach(function (it) {
        tabbar.appendChild(U.el('a', { href: it.path, dataset: { path: it.path } }, [
          U.el('em', { text: it.icon, 'aria-hidden': 'true' }),
          U.el('span', { text: t(it.key) })
        ]));
      });
    },

    /**
     * The top bar carries the name of the screen, so the screens themselves no
     * longer repeat it, and gives them one slot on the right for their own
     * actions via JTS.shell.topbarActions().
     */
    renderTopbar: function (titleKey) {
      var bar = U.$('#app-topbar');
      if (!bar) return;
      if (titleKey !== undefined) bar.dataset.titleKey = titleKey || '';
      var key = bar.dataset.titleKey || '';
      U.clear(bar);
      bar.appendChild(U.el('div.tb-left', null, [
        U.el('button.tb-menu', {
          type: 'button', 'aria-label': t('nav.main'), text: '≡',
          onclick: function () { document.body.classList.toggle('sb-open'); }
        }),
        U.el('h1.tb-title', { text: key ? t(key) : '' }),
        U.el('span.tb-date', { text: U.fmtDate(U.today(), Store.settings().uiLang) })
      ]));
      bar.appendChild(U.el('div.tb-actions', { id: 'topbar-actions' }));
      var st = Store.state();
      bar.hidden = !st || !st.profile.onboardingComplete;
    },

    /** Screens call this to hang their own controls in the top bar. */
    topbarActions: function (nodes) {
      var host = U.$('#topbar-actions');
      if (!host) return null;
      U.clear(host);
      U.append(host, nodes);
      return host;
    },

    syncNav: function (path) {
      U.$$('#main-nav a, #tabbar a').forEach(function (a) {
        if (a.dataset.path === path) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      });
      var st = Store.state();
      var ready = !!st && !!st.profile.onboardingComplete;
      var bar = U.$('#app-sidebar'); if (bar) bar.hidden = !ready;
      var top = U.$('#app-topbar'); if (top) top.hidden = !ready;
      /* The tab bar is the five destinations, and during onboarding every one
         of them bounces back here — so it stays away until there is somewhere
         to go. renderTabbar builds nothing in that state either. */
      U.$('#tabbar').hidden = !ready;
      /* Screens that size themselves against the window — the question screen
         most of all — have to know whether the app header and the tab bar are
         really there, or they leave a band of nothing where each would be. */
      document.body.classList.toggle('no-frame', !ready);
      /* A route change closes the phone drawer; leaving it open over the new
         screen is how you end up tapping through it by accident. */
      document.body.classList.remove('sb-open');
    }
  };

  /* -------------------------------------------------------------------- boot */
  JTS.boot = function () {
    Store.root();
    JTS.shell.applyProfileSettings();
    JTS.bank.reindex();
    JTS.i18n.onChange(function () { JTS.shell.renderHeader(); });
    JTS.shell.renderHeader();
    var problems = JTS.bank.validateAll();
    if (problems.length) {
      console.warn('[JTS] question bank problems:', problems);
    } else {
      console.info('[JTS] question bank OK — ' + JTS.bank.all().length + ' items');
    }
    JTS.router.start();
  };

})(window);
