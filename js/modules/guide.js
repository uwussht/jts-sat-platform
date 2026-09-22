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

  JTS.router.register('#/guide', {
    title: 'guide.nav',
    render: function (root) {
      var state = S.state();
      var page = U.el('div.container.screen.stack-lg', { style: 'max-width:1100px' });
      root.appendChild(page);

      page.appendChild(U.el('p.muted.prose', { text: t('guide.satLead') }));

      var list = U.el('div.stack-sm');
      CHAPTERS.forEach(function (id, i) { list.appendChild(chapter(id, i === 0)); });
      page.appendChild(U.el('div.card', null, [list]));

      page.appendChild(U.el('div.row.row-wrap', null, [
        U.el('a.btn.btn-primary', { href: state ? '#/today' : '#/auth', text: t('nav.today') }),
        U.el('a.btn', { href: '#/roadmap', text: t('roadmap.title') })
      ]));
    }
  });
})();
