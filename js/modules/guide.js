/* ==========================================================================
   Screen: Guide (#/guide)

   Two tabs, because a student asks two different questions months apart.

   About the SAT is the six chapters onboarding teaches — what the exam is, how
   it is built, what a target score means, exam day, and what each section asks
   — rendered from the same js/data/sat-info.js by the same JTS.onboarding
   .infoStep. Onboarding is walked once; this is where it is re-read.

   How this works is what every part of the platform is for, built from
   JTS.shell.navItems rather than written out again, so a destination added to
   the sidebar cannot go missing from the guide — the only thing a new screen
   has to supply is one i18n key describing it — plus the four rules that
   explain why the platform sometimes says something unwelcome.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  /* Destinations in the order a student meets them, not in sidebar order:
     the guide is read once, at the beginning. */
  var ORDER = [
    '#/today', '#/roadmap', '#/plan', '#/practice',
    '#/diagnostic', '#/mocks', '#/progress', '#/vocab', '#/desmos-guide', '#/settings'
  ];

  var RULES = ['independent', 'errors', 'exam', 'noscore'];

  /* The six chapters, in the order onboarding teaches them. */
  var CHAPTERS = ['about', 'structure', 'goal', 'examday', 'verbal', 'math'];

  /**
   * One chapter, folded. Six of these open at once is the wall of text
   * onboarding spreads over six screens; a student re-reading the guide wants
   * one of them and has to be able to see which.
   */
  function chapter(id, open) {
    var body = U.el('div.acc-body.stack', { hidden: !open });
    JTS.onboarding.infoStep(body, id, { noTitle: true });
    var caret = U.el('span.caret', { text: '❯', style: open ? 'transform:rotate(90deg)' : '' });
    var head = U.el('button.acc-head', {
      type: 'button', 'aria-expanded': String(!!open),
      onclick: function () {
        var now = body.hidden;
        body.hidden = !now;
        head.setAttribute('aria-expanded', String(now));
        caret.style.transform = now ? 'rotate(90deg)' : '';
      }
    }, [caret, U.el('b', { text: t('onb.info.' + id) })]);
    return U.el('div.acc', null, [head, body]);
  }

  function satTab(host) {
    host.appendChild(U.el('p.small.muted.prose', { text: t('guide.satLead') }));
    var list = U.el('div.stack-sm');
    CHAPTERS.forEach(function (id, i) { list.appendChild(chapter(id, i === 0)); });
    host.appendChild(list);
  }

  function allItems() {
    var nav = JTS.shell.navItems.concat(JTS.shell.subNavItems);
    var byPath = {};
    nav.forEach(function (it) { byPath[it.path] = it; });
    /* Settings is reachable from the sidebar footer rather than the nav list,
       and the roadmap is worth explaining even before it is visited. */
    byPath['#/settings'] = byPath['#/settings'] || { path: '#/settings', key: 'nav.settings', icon: '⚙' };
    byPath['#/roadmap'] = byPath['#/roadmap'] || { path: '#/roadmap', key: 'roadmap.title', icon: '⟋' };
    /* The guide is a destination in the sidebar now, but a page that lists
       itself as somewhere to go is a page telling you to stay where you are. */
    delete byPath['#/guide'];
    return ORDER.map(function (p) { return byPath[p]; }).filter(Boolean);
  }

  JTS.router.register('#/guide', {
    title: 'guide.nav',
    render: function (root) {
      var state = S.state();
      var page = U.el('div.container.screen.stack-lg', { style: 'max-width:1100px' });
      root.appendChild(page);

      /* --- the two halves --- */
      page.appendChild(U.el('div.card', null, [ui.tabs([
        { id: 'sat', label: t('guide.tabSat'), render: satTab },
        { id: 'app', label: t('guide.title'), render: appTab }
      ])]));

      /* Named `screen` because everything below it was written against the
         page and now writes into the tab panel instead. */
      function appTab(screen) {
      screen.appendChild(U.el('p.muted.prose', { text: t('guide.lead') }));

      /* --- the sections --- */
      var list = U.el('div.stack-sm');
      allItems().forEach(function (it) {
        list.appendChild(U.el('a.guide-row', { href: it.path }, [
          U.el('span.guide-icon', { text: it.icon, 'aria-hidden': 'true' }),
          U.el('span.guide-text', null, [
            U.el('b', { text: t(it.key) }),
            U.el('span.small.muted', { text: t('guide.for.' + it.path.replace('#/', '')) })
          ]),
          U.el('span.guide-go', { text: '→', 'aria-hidden': 'true' })
        ]));
      });
      screen.appendChild(U.el('div.card.stack-sm', null, [
        U.el('h2.h2', { text: t('guide.sections') }), list
      ]));

      /* --- the rules that explain why it behaves as it does --- */
      var rules = U.el('div.stack-sm');
      RULES.forEach(function (r) {
        rules.appendChild(U.el('div.card.card-sm.card-flat.stack-sm', null, [
          U.el('b', { text: t('guide.rule.' + r + '.title') }),
          U.el('span.small.muted', { text: t('guide.rule.' + r + '.body') })
        ]));
      });
      screen.appendChild(U.el('div.card.stack-sm', null, [
        U.el('h2.h2', { text: t('guide.rules') }),
        U.el('p.small.muted', { text: t('guide.rulesLead') }),
        rules
      ]));

      /* --- keyboard, because it is the fastest thing to learn --- */
      var keys = [
        ['1–4 / A–D', t('guide.key.choose')],
        ['Enter', t('guide.key.next')],
        ['M', t('guide.key.mark')],
        ['Esc', t('guide.key.close')]
      ];
      var kb = U.el('div.stack-sm');
      keys.forEach(function (k) {
        kb.appendChild(U.el('div.row-between.row-wrap', null, [
          U.el('span.mono.small', { text: k[0] }),
          U.el('span.small.muted', { text: k[1] })
        ]));
      });
      screen.appendChild(U.el('div.card.stack-sm', null, [
        U.el('h2.h2', { text: t('guide.keyboard') }), kb
      ]));

      screen.appendChild(U.el('div.row.row-wrap', null, [
        U.el('a.btn.btn-primary', { href: state ? '#/today' : '#/auth', text: t('nav.today') }),
        U.el('a.btn', { href: '#/roadmap', text: t('roadmap.title') })
      ]));
      }
    }
  });
})();
