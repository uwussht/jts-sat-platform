/* Screen: diagnostic — placeholder from step 0, implemented in a later step. */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t;
  JTS.router.register('#/diagnostic', {
    title: 'diag.title',
    render: function (root) {
      root.appendChild(U.el('div.container.screen', null, [
        U.el('h1.h1', { text: t('diag.title') }),
        U.el('p.muted', { text: 'Screen scaffold — implemented in a later step.' })
      ]));
    }
  });
})();
