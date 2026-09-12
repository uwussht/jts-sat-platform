/* Screen: practice — placeholder from step 0, implemented in a later step. */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t;
  JTS.router.register('#/practice', {
    title: 'nav.practice',
    render: function (root) {
      root.appendChild(U.el('div.container.screen', null, [
        U.el('h1.h1', { text: t('nav.practice') }),
        U.el('p.muted', { text: 'Screen scaffold — implemented in a later step.' })
      ]));
    }
  });
})();
