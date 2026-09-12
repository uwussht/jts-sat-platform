/* Screen: settings — placeholder from step 0, implemented in a later step. */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t;
  JTS.router.register('#/settings', {
    title: 'nav.settings',
    render: function (root) {
      root.appendChild(U.el('div.container.screen', null, [
        U.el('h1.h1', { text: t('nav.settings') }),
        U.el('p.muted', { text: 'Screen scaffold — implemented in a later step.' })
      ]));
    }
  });
})();
