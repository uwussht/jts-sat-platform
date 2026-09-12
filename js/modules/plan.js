/* Screen: plan — placeholder from step 0, implemented in a later step. */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t;
  JTS.router.register('#/plan', {
    title: 'nav.plan',
    render: function (root) {
      root.appendChild(U.el('div.container.screen', null, [
        U.el('h1.h1', { text: t('nav.plan') }),
        U.el('p.muted', { text: 'Screen scaffold — implemented in a later step.' })
      ]));
    }
  });
})();
