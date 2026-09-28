/* ==========================================================================
   Screen: Guide (#/guide)

   The six chapters onboarding teaches — what the exam is, how it is built,
   what a target score means, exam day, and what each section asks — rendered
   from the same js/data/sat-info.js by the same JTS.onboarding.infoStep.

   Onboarding is walked once and cannot be skipped; this is where it is
   re-read, one chapter at a time.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, S = JTS.store;

  /* The six chapters, in the order onboarding teaches them. */
  var CHAPTERS = ['about', 'structure', 'goal', 'examday', 'verbal', 'math'];

  /* Two more that onboarding does not teach, added after them: the words a
     beginner has not met, and the error log. Neither belongs in onboarding —
     the glossary is only useful once you have seen the words somewhere, and the
     error log is a habit, not an introduction — but both are wanted in week
     two, by which time onboarding is over and this is where people look. */
  function glossaryBody(body) {
    body.appendChild(U.el('p.small.muted', { text: t('gloss.lead') }));
    ['exam', 'programme'].forEach(function (group) {
      var items = (JTS.data.glossary || []).filter(function (g) { return g.group === group; });
      if (!items.length) return;
      body.appendChild(U.el('div.eyebrow', { text: t('gloss.group.' + group) }));
      var list = U.el('div.stack-sm');
      items.forEach(function (g) {
        list.appendChild(U.el('div.gl-item', null, [
          U.el('div', null, [U.el('b', { text: JTS.i18n.pick(g.term, S.settings().uiLang) })]),
          U.el('p.small.muted', { text: JTS.i18n.pick(g.body, S.settings().uiLang), style: 'margin:2px 0 0' })
        ]));
      });
      body.appendChild(list);
    });
  }

  /**
   * One chapter, folded. Six of these open at once is the wall of text
   * onboarding spreads over six screens; a student re-reading the guide wants
   * one of them and has to be able to see which.
   */
  function chapter(id, open, build, titleKey) {
    var body = U.el('div.acc-body.stack', { hidden: !open });
    if (build) build(body);
    else JTS.onboarding.infoStep(body, id, { noTitle: true });
    var caret = U.el('span.caret', { text: '❯', style: open ? 'transform:rotate(90deg)' : '' });
    var head = U.el('button.acc-head', {
      type: 'button', 'aria-expanded': String(!!open),
      onclick: function () {
        var now = body.hidden;
        body.hidden = !now;
        head.setAttribute('aria-expanded', String(now));
        caret.style.transform = now ? 'rotate(90deg)' : '';
      }
    }, [caret, U.el('b', { text: t(titleKey || ('onb.info.' + id)) })]);
    return U.el('div.acc', null, [head, body]);
  }

  JTS.router.register('#/guide', {
    title: 'guide.nav',
    render: function (root) {
      var state = S.state();
      var page = U.el('div.container.screen.stack-lg', { style: 'max-width:1100px' });
      root.appendChild(page);

      page.appendChild(U.el('p.muted.prose', { text: t('guide.satLead') }));

      var list = U.el('div.stack-sm');
      CHAPTERS.forEach(function (id, i) { list.appendChild(chapter(id, i === 0)); });
      if (JTS.data.glossary) {
        list.appendChild(chapter('glossary', false, glossaryBody, 'gloss.title'));
      }
      if (JTS.programme) {
        list.appendChild(chapter('errorlog', false, function (body) {
          body.appendChild(JTS.programme.errorLogCard());
        }, 'prog.log.title'));
      }
      page.appendChild(U.el('div.card', null, [list]));

      page.appendChild(U.el('div.row.row-wrap', null, [
        U.el('a.btn.btn-primary', { href: state ? '#/today' : '#/auth', text: t('nav.today') }),
        U.el('a.btn', { href: '#/roadmap', text: t('roadmap.title') })
      ]));
    }
  });
})();
