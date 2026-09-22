/* ==========================================================================
   Screen: Guide (#/guide)

   What every part of this platform is for, and the four rules that decide how
   it behaves. The section list is built from JTS.shell.navItems rather than
   written out again, so a destination added to the sidebar cannot go missing
   from the guide — the only thing a new screen has to supply is one i18n key
   describing it.
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

  function allItems() {
    var nav = JTS.shell.navItems.concat(JTS.shell.subNavItems);
    var byPath = {};
    nav.forEach(function (it) { byPath[it.path] = it; });
    /* Settings is reachable from the sidebar footer rather than the nav list,
       and the roadmap is worth explaining even before it is visited. */
    byPath['#/settings'] = byPath['#/settings'] || { path: '#/settings', key: 'nav.settings', icon: '⚙' };
    byPath['#/roadmap'] = byPath['#/roadmap'] || { path: '#/roadmap', key: 'roadmap.title', icon: '⟋' };
    return ORDER.map(function (p) { return byPath[p]; }).filter(Boolean);
  }

  JTS.router.register('#/guide', {
    title: 'guide.title',
    render: function (root) {
      var state = S.state();
      var screen = U.el('div.container.screen.stack-lg', { style: 'max-width:1100px' });
      root.appendChild(screen);

      screen.appendChild(U.el('p.muted', { text: t('guide.lead') }));

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
  });
})();
