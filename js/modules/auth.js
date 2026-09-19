/* ==========================================================================
   Screen: Auth (#/auth)

   There is no server. A "profile" is a record in this browser's localStorage,
   keyed by email; JTS.Auth is the adapter that a real backend would replace.
   The password is stored as a non-cryptographic digest — enough to keep two
   students on one laptop out of each other's progress, and nothing more. That
   limitation is stated on screen and in the README.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui;

  function passwordField(id) {
    var input = U.el('input.input', { type: 'password', id: id, autocomplete: 'current-password' });
    var toggle = U.el('button', { type: 'button', text: t('auth.show'), 'aria-label': t('auth.show') });
    toggle.addEventListener('click', function () {
      var showing = input.type === 'text';
      input.type = showing ? 'password' : 'text';
      toggle.textContent = showing ? t('auth.show') : t('auth.hide');
      toggle.setAttribute('aria-label', toggle.textContent);
      input.focus();
    });
    return { wrap: U.el('div.input-affix', null, [input, toggle]), input: input };
  }

  JTS.router.register('#/auth', {
    title: 'auth.title',
    render: function (root) {
      var mode = 'login';           /* 'login' | 'register' */

      /* Signed out, the header is hidden and this screen owns the window, so
         it is laid out as a landing rather than as a card on the app ground. */
      var page = U.el('div.auth-page');
      var panel = U.el('div.auth-panel.auth-wide');
      var card = U.el('div.card.stack');
      panel.appendChild(U.el('div.auth-head', null, [
        U.el('div.brand-mark', { text: 'JTS', 'aria-hidden': 'true' }),
        U.el('div.auth-title', { text: 'JTS SAT' }),
        U.el('div.eyebrow', { text: t('brand.eyebrow') })
      ]));

      /* A visitor has nothing to look at but a password box, so the landing
         shows the road they are being asked to start: the same six phases the
         roadmap screen draws, with no personal data in them. It is the first
         column on a laptop and is dropped entirely on a phone, where the form
         is the only thing worth the screen. */
      var split = U.el('div.auth-split', null, [
        U.el('div.auth-story.stack', null, [
          U.el('div.eyebrow', { text: t('roadmap.title') }),
          U.el('h2.h2', { text: t('roadmap.landing'), style: 'color:#fff' }),
          JTS.roadmap.overview(true),
          U.el('a.btn.btn-sm', { href: '#/guide', text: t('guide.title') + ' →' })
        ]),
        U.el('div.stack', null, [
          card,
          U.el('div.auth-foot', { text: t('auth.localNote') })
        ])
      ]);
      panel.appendChild(split);
      page.appendChild(panel);
      root.appendChild(page);

      function render() {
        U.clear(card);

        var emailInput = U.el('input.input', {
          type: 'email', id: 'auth-email', autocomplete: 'email', inputmode: 'email',
          placeholder: 'student@example.com'
        });
        var pw = passwordField('auth-password');
        if (mode === 'register') pw.input.setAttribute('autocomplete', 'new-password');
        var nameInput = U.el('input.input', { type: 'text', id: 'auth-name', autocomplete: 'name' });
        var error = U.el('div.error-text', { role: 'alert', hidden: true });
        var submit = U.el('button.btn.btn-primary.btn-lg.btn-block', {
          type: 'submit', text: mode === 'login' ? t('auth.login') : t('auth.register')
        });

        function fail(msg) {
          error.textContent = msg;
          error.hidden = false;
          emailInput.setAttribute('aria-invalid', 'true');
        }

        var form = U.el('form.stack', {
          novalidate: '',
          onsubmit: function (e) {
            e.preventDefault();
            error.hidden = true;
            emailInput.removeAttribute('aria-invalid');

            var email = emailInput.value.trim().toLowerCase();
            var password = pw.input.value;

            if (!U.isEmail(email)) return fail(t('auth.errEmail'));
            if (password.length < 6) return fail(t('auth.errPassword'));

            submit.disabled = true;
            var action = mode === 'login'
              ? JTS.Auth.login(email, password)
              : JTS.Auth.register(email, password, nameInput.value.trim());

            action.then(function (res) {
              submit.disabled = false;
              if (!res.ok) {
                return fail(t({
                  'no-account': 'auth.errNoAccount',
                  'bad-password': 'auth.errBadPassword',
                  'exists': 'auth.errExists'
                }[res.reason] || 'auth.errEmail'));
              }
              JTS.shell.renderHeader();
              var s = JTS.store.state();
              JTS.router.go(s && s.profile.onboardingComplete ? '#/today' : '#/onboarding');
            });
          }
        });

        form.appendChild(U.el('h1.h1', { text: t('auth.title') }));
        form.appendChild(U.el('p.small.muted', { text: t('auth.subtitle') }));
        form.appendChild(ui.field(t('auth.email'), emailInput));
        form.appendChild(ui.field(t('auth.password'), pw.wrap));
        if (mode === 'register') form.appendChild(ui.field(t('auth.name'), nameInput));
        form.appendChild(error);
        form.appendChild(submit);
        form.appendChild(U.el('button.btn.btn-ghost.btn-block', {
          type: 'button',
          text: mode === 'login' ? t('auth.toRegister') : t('auth.toLogin'),
          onclick: function () { mode = mode === 'login' ? 'register' : 'login'; render(); }
        }));
        /* The local-storage caveat lives under the panel now, so it is not
           repeated inside the form as well. */

        card.appendChild(form);
        emailInput.focus();
      }

      render();
    }
  });
})();
