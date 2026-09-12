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

      var screen = U.el('div.container.screen', { style: 'max-width:460px' });
      var card = U.el('div.card.stack');
      screen.appendChild(U.el('div', { style: 'text-align:center;margin-bottom:20px' }, [
        U.el('div.brand-mark', { text: 'JTS', style: 'margin:0 auto 12px' }),
        U.el('div.eyebrow', { text: t('brand.eyebrow') })
      ]));
      screen.appendChild(card);
      root.appendChild(screen);

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
        form.appendChild(U.el('p.hint', { text: t('auth.localNote') }));

        card.appendChild(form);
        emailInput.focus();
      }

      render();
    }
  });
})();
