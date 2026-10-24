/* ==========================================================================
   Screen: Auth (#/auth)

   Served by docker compose, accounts are on the server: a student signs up
   with their phone number, a password, their name and grade, and signs in
   with phone and password (JTS.Auth.mode === 'server').

   Opened without the server (Live Server, file://), the older local profiles
   are used: a record in this browser's localStorage keyed by email, with the
   password kept as a non-cryptographic digest.
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

  /**
   * A Kazakhstan number with +7 already in the box. The rest is grouped as it
   * is typed (+7 700 123 45 67), and a whole number typed or pasted with its
   * own 8 or +7 in front does not end up with the prefix twice.
   */
  function phoneInput() {
    var input = U.el('input.input', {
      type: 'tel', id: 'auth-phone', autocomplete: 'tel', inputmode: 'tel',
      placeholder: '+7 700 000 00 00', value: '+7 '
    });
    function format() {
      /* What follows the box's own +7. A whole number pasted or typed after
         it carries its own 8 or +7, which is dropped; an extra digit typed
         at the end is simply not taken. */
      var rest = input.value.replace(/^\s*\+?7/, '').trim();
      var own = /^(\+7|8)/.test(rest.replace(/[\s()-]/g, ''));
      var d = rest.replace(/\D/g, '');
      if (own && d.length >= 11) d = d.slice(1);
      d = d.slice(0, 10);
      var parts = [d.slice(0, 3), d.slice(3, 6), d.slice(6, 8), d.slice(8, 10)].filter(Boolean);
      input.value = '+7 ' + parts.join(' ');
    }
    input.addEventListener('input', format);
    /* The cursor goes after the prefix, never inside it. */
    input.addEventListener('focus', function () {
      setTimeout(function () {
        if (input.selectionStart < 3) input.setSelectionRange(input.value.length, input.value.length);
      }, 0);
    });
    input.addEventListener('keydown', function (e) {
      if ((e.key === 'Backspace' && input.selectionStart <= 3 && input.selectionEnd <= 3) ||
          (e.key === 'Delete' && input.selectionStart < 3)) e.preventDefault();
    });
    return input;
  }

  JTS.router.register('#/auth', {
    title: 'auth.title',
    render: function (root) {
      var mode = 'login';           /* 'login' | 'register' */

      /* Signed out, the header is hidden and this screen owns the window, so
         it is laid out as a landing rather than as a card on the app ground. */
      var page = U.el('div.auth-page');
      var panel = U.el('div.auth-panel');
      var card = U.el('div.card.stack');
      panel.appendChild(U.el('div.auth-head', null, [
        U.el('div.brand-mark', { 'aria-hidden': 'true', html: JTS.shell.logoIcon }),
        U.el('div.auth-title', { text: JTS.config.brandName }),
        U.el('div.eyebrow', { text: t('brand.eyebrow') })
      ]));

      /* Signing up is one job, and the screen does one thing: the form, and
         the note that says where a profile actually lives. The roadmap that
         used to fill the other half of this page belongs behind the sign-in,
         where it is the student's own road rather than a picture of one. */
      panel.appendChild(card);
      panel.appendChild(U.el('div.auth-foot', { text: t('auth.localNote') }));
      page.appendChild(panel);
      root.appendChild(page);

      var server = JTS.Auth.mode === 'server';
      if (server) U.$('.auth-foot', panel).textContent = t('auth.serverNote');

      var REASONS = {
        'no-account': server ? 'auth.errNoAccountPhone' : 'auth.errNoAccount',
        'bad-password': 'auth.errBadPassword',
        'exists': server ? 'auth.errPhoneTaken' : 'auth.errExists',
        'email-taken': 'auth.errEmailTaken',
        'bad-email': 'auth.errEmail',
        'bad-phone': 'auth.errPhone',
        'bad-name': 'auth.errName',
        'no-consent': 'auth.errConsent',
        'bad-password-length': server ? 'auth.errPassword8' : 'auth.errPassword',
        'too-many': 'auth.errTooMany'
      };

      function render() {
        U.clear(card);
        var reg = mode === 'register';

        var pw = passwordField('auth-password');
        if (reg) pw.input.setAttribute('autocomplete', 'new-password');
        var error = U.el('div.error-text', { role: 'alert', hidden: true });
        var submit = U.el('button.btn.btn-primary.btn-lg.btn-block', {
          type: 'submit', text: reg ? t('auth.register') : t('auth.login')
        });

        /* The fields this mode asks for, in the order they are shown. */
        var f = {};
        if (server) {
          if (reg) {
            f.firstName = U.el('input.input', { type: 'text', id: 'auth-first', autocomplete: 'given-name', maxlength: '60' });
            f.lastName = U.el('input.input', { type: 'text', id: 'auth-last', autocomplete: 'family-name', maxlength: '60' });
          }
          f.phone = phoneInput();
          if (reg) {
            f.grade = U.el('select.select', { id: 'auth-grade' }, [
              U.el('option', { value: '', text: t('auth.gradePick') })
            ].concat(['8', '9', '10', '11', '12', 'gap', 'other'].map(function (g) {
              return U.el('option', { value: g, text: t('auth.grade.' + g) });
            })));
            f.email = U.el('input.input', {
              type: 'email', id: 'auth-email', autocomplete: 'email', inputmode: 'email',
              placeholder: 'student@example.com'
            });
            f.consent = U.el('input', { type: 'checkbox', id: 'auth-consent' });
          }
        } else {
          f.email = U.el('input.input', {
            type: 'email', id: 'auth-email', autocomplete: 'email', inputmode: 'email',
            placeholder: 'student@example.com'
          });
          if (reg) f.name = U.el('input.input', { type: 'text', id: 'auth-name', autocomplete: 'name' });
        }

        function fail(msg, field) {
          error.textContent = msg;
          error.hidden = false;
          if (field) { field.setAttribute('aria-invalid', 'true'); field.focus(); }
        }

        function submitServer() {
          var phone = JTS.Auth.normPhone(f.phone.value);
          var password = pw.input.value;
          if (reg) {
            if (!f.firstName.value.trim()) return fail(t('auth.errName'), f.firstName);
            if (!f.lastName.value.trim()) return fail(t('auth.errName'), f.lastName);
          }
          if (!phone) return fail(t('auth.errPhone'), f.phone);
          if (password.length < (reg ? 8 : 1)) return fail(t(reg ? 'auth.errPassword8' : 'auth.errBadPassword'), pw.input);
          var email = reg ? f.email.value.trim().toLowerCase() : '';
          if (reg && email && !U.isEmail(email)) return fail(t('auth.errEmail'), f.email);
          if (reg && !f.consent.checked) return fail(t('auth.errConsent'), f.consent);
          return reg
            ? JTS.Auth.register({
                phone: phone, password: password,
                firstName: f.firstName.value.trim(), lastName: f.lastName.value.trim(),
                grade: f.grade.value || null, email: email || null, consent: true
              })
            : JTS.Auth.login(phone, password);
        }

        function submitLocal() {
          var email = f.email.value.trim().toLowerCase();
          var password = pw.input.value;
          if (!U.isEmail(email)) return fail(t('auth.errEmail'), f.email);
          if (password.length < 6) return fail(t('auth.errPassword'), pw.input);
          return reg
            ? JTS.Auth.register(email, password, f.name.value.trim())
            : JTS.Auth.login(email, password);
        }

        var form = U.el('form.stack', {
          novalidate: '',
          onsubmit: function (e) {
            e.preventDefault();
            error.hidden = true;
            card.querySelectorAll('[aria-invalid]').forEach(function (x) { x.removeAttribute('aria-invalid'); });

            var action = server ? submitServer() : submitLocal();
            if (!action) return;
            submit.disabled = true;
            action.then(function (res) {
              submit.disabled = false;
              if (!res.ok) return fail(t(REASONS[res.reason] || 'auth.errServer'));
              JTS.shell.renderHeader();
              var s = JTS.store.state();
              JTS.router.go(s && s.profile.onboardingComplete ? '#/today' : '#/onboarding');
            });
          }
        });

        form.appendChild(U.el('h1.h1', { text: reg ? t('auth.register') : t('auth.title') }));
        form.appendChild(U.el('p.small.muted', { text: t(server ? 'auth.serverSubtitle' : 'auth.subtitle') }));
        if (server) {
          if (reg) {
            form.appendChild(U.el('div.auth-row', null, [
              ui.field(t('auth.firstName'), f.firstName),
              ui.field(t('auth.lastName'), f.lastName)
            ]));
          }
          form.appendChild(ui.field(t('auth.phone'), f.phone, reg ? t('auth.phoneHint') : null));
          form.appendChild(ui.field(t('auth.password'), pw.wrap, reg ? t('auth.passwordHint') : null));
          if (reg) {
            form.appendChild(ui.field(t('auth.grade'), f.grade));
            form.appendChild(ui.field(t('auth.emailOptional'), f.email));
            form.appendChild(U.el('label.auth-consent', { for: 'auth-consent' }, [
              f.consent, U.el('span.small', { text: t('auth.consent') })
            ]));
          }
        } else {
          form.appendChild(ui.field(t('auth.email'), f.email));
          form.appendChild(ui.field(t('auth.password'), pw.wrap));
          if (reg) form.appendChild(ui.field(t('auth.name'), f.name));
        }
        form.appendChild(error);
        form.appendChild(submit);
        form.appendChild(U.el('button.btn.btn-ghost.btn-block', {
          type: 'button',
          text: reg ? t('auth.toLogin') : t('auth.toRegister'),
          onclick: function () { mode = reg ? 'login' : 'register'; render(); }
        }));

        card.appendChild(form);
        (f.firstName || f.phone || f.email).focus();
      }

      render();
    }
  });
})();
