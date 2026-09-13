/* ==========================================================================
   Screen: Settings (#/settings)

   Covers the profile, language and theme, the AI provider (including where the
   development key goes), and data export/import/reset. Exam date, goals and
   availability are edited here too once the plan screens land in step 8.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  function card(title, children, subtitle) {
    return U.el('div.card.stack', null, [
      U.el('div.stack-sm', null, [
        U.el('h2.h2', { text: title }),
        subtitle ? U.el('p.small.muted', { text: subtitle }) : null
      ])
    ].concat(children));
  }

  function secretField(value, onChange) {
    var input = U.el('input.input', {
      id: 'ai-key',
      type: 'password', value: value || '', autocomplete: 'off', spellcheck: 'false',
      placeholder: 'gsk_…', style: 'font-family:var(--mono)'
    });
    input.addEventListener('input', function () { onChange(input.value.trim()); });
    var toggle = U.el('button', {
      type: 'button', text: t('auth.show'),
      onclick: function () {
        var shown = input.type === 'text';
        input.type = shown ? 'password' : 'text';
        toggle.textContent = shown ? t('auth.show') : t('auth.hide');
      }
    });
    return U.el('div.input-affix', null, [input, toggle]);
  }

  /* ------------------------------------------------------------ AI section */
  function aiSection(rerender) {
    var st = S.settings();
    var cfg = JTS.AI.config();
    var preset = JTS.AI.providers[cfg.name] || JTS.AI.providers.mock;
    var rows = [];

    var provider = U.el('select.select', { id: 'ai-provider' });
    Object.keys(JTS.AI.providers).forEach(function (key) {
      var o = U.el('option', { value: key, text: JTS.AI.providers[key].label });
      if (key === cfg.name) o.selected = true;
      provider.appendChild(o);
    });
    provider.addEventListener('change', function () {
      S.update(function (s) {
        s.settings.aiProvider = provider.value;
        /* Clear the overrides so the newly chosen preset's defaults apply;
           the fields below still show them as placeholders. */
        s.settings.endpoint = '';
        s.settings.model = '';
      });
      rerender();
    });
    rows.push(ui.field(t('settings.aiProvider'), provider));

    var status = U.el('div.row.row-wrap', null, [
      U.el('span.badge' + (JTS.AI.isLive() ? '.badge-ok' : '.badge-muted'), {
        text: JTS.AI.isLive() ? t('settings.aiLive') : t('settings.aiMock')
      }),
      U.el('span.small.muted', { text: t('ai.quotaLeft', { n: JTS.AI.quotaLeft() }) })
    ]);
    rows.push(status);

    if (cfg.style === 'mock') {
      rows.push(U.el('div.notice.notice-ok', { text: t('settings.aiMockNote') }));
    } else {
      var endpoint = U.el('input.input', {
        id: 'ai-endpoint',
        type: 'url', value: st.endpoint || '', placeholder: preset.endpoint || 'https://…',
        spellcheck: 'false', style: 'font-family:var(--mono);font-size:13px'
      });
      endpoint.addEventListener('input', function () {
        S.update(function (s) { s.settings.endpoint = endpoint.value.trim(); });
      });
      rows.push(ui.field(t('settings.endpoint'), endpoint, t('settings.endpointNote')));

      if (cfg.style === 'openai') {
        var model = U.el('input.input', {
          id: 'ai-model',
          type: 'text', value: st.model || '', placeholder: preset.model || 'model-id',
          spellcheck: 'false', style: 'font-family:var(--mono);font-size:13px'
        });
        model.addEventListener('input', function () {
          S.update(function (s) { s.settings.model = model.value.trim(); });
        });
        rows.push(ui.field(t('settings.aiModel'), model));
      }

      rows.push(ui.field(t('settings.aiKey'), secretField(st.apiKey, function (v) {
        S.update(function (s) { s.settings.apiKey = v; });
      })));

      /* The honest warning, not buried in a tooltip. */
      rows.push(U.el('div.notice.notice-warn', { text: t('settings.aiKeyWarning') }));

      var links = U.el('div.row.row-wrap');
      if (preset.keysUrl) links.appendChild(U.el('a.btn.btn-sm', {
        href: preset.keysUrl, target: '_blank', rel: 'noopener', text: t('settings.aiGetKey')
      }));
      if (preset.modelsUrl) links.appendChild(U.el('a.btn.btn-sm', {
        href: preset.modelsUrl, target: '_blank', rel: 'noopener', text: t('settings.aiModelList')
      }));
      if (links.firstChild) rows.push(links);
    }

    var testOut = U.el('div', { hidden: true });
    var testBtn = U.el('button.btn', {
      type: 'button', text: t('settings.aiTest'),
      onclick: function () {
        testBtn.disabled = true;
        testBtn.textContent = t('settings.aiTesting');
        testOut.hidden = false;
        U.clear(testOut);
        testOut.appendChild(U.el('div.notice', { text: t('settings.aiTesting') }));
        JTS.AI.test().then(function (r) {
          testBtn.disabled = false;
          testBtn.textContent = t('settings.aiTest');
          U.clear(testOut);
          testOut.appendChild(U.el('div.notice' + (r.ok ? '.notice-ok' : '.notice-danger'), {
            text: r.ok ? t('settings.aiTestOk', { text: r.text }) : t('settings.aiTestFail', { text: r.text })
          }));
        });
      }
    });
    rows.push(U.el('div.row.row-wrap', null, [testBtn]));
    rows.push(testOut);

    var limit = U.el('input.input', {
      id: 'ai-limit',
      type: 'number', min: '0', max: '500', value: String(st.aiDailyLimit || 40), style: 'max-width:140px'
    });
    limit.addEventListener('change', function () {
      S.update(function (s) { s.settings.aiDailyLimit = U.clamp(Number(limit.value) || 0, 0, 500); });
    });
    rows.push(ui.field(t('settings.aiLimit'), limit));

    return card(t('settings.developer'), rows);
  }

  /* --------------------------------------------------------------- screen */
  JTS.router.register('#/settings', {
    title: 'nav.settings',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.screen.stack', { style: 'max-width:760px' });
      root.appendChild(screen);
      function rerender() { JTS.router.render(); }

      screen.appendChild(U.el('h1.h1', { text: t('settings.title') }));

      /* --- profile --- */
      screen.appendChild(card(t('settings.account'), [
        U.el('div.row-between', null, [
          U.el('div.stack-sm', null, [
            U.el('div', null, [U.el('b', { text: state.profile.email })]),
            U.el('div.small.muted', {
              text: t('common.status') + ': ' + (state.profile.level === 'measured'
                ? (state.baseline ? state.baseline.total + ' (' + state.baseline.source + ')' : '')
                : t('mastery.no-data'))
            })
          ]),
          U.el('button.btn', {
            type: 'button', text: t('auth.logout'),
            onclick: function () {
              JTS.Auth.logout().then(function () {
                JTS.shell.renderHeader();
                JTS.router.go('#/auth');
              });
            }
          })
        ])
      ]));

      /* --- language and theme --- */
      var uiLang = U.el('select.select', { id: 'set-ui-lang' });
      var exLang = U.el('select.select', { id: 'set-explain-lang' });
      [['en', 'English'], ['ru', 'Русский'], ['kk', 'Қазақша']].forEach(function (l) {
        var a = U.el('option', { value: l[0], text: l[1] });
        if (JTS.i18n.lang === l[0]) a.selected = true;
        uiLang.appendChild(a);
        var b = U.el('option', { value: l[0], text: l[1] });
        if (S.settings().explainLang === l[0]) b.selected = true;
        exLang.appendChild(b);
      });
      uiLang.addEventListener('change', function () {
        JTS.i18n.setLang(uiLang.value);
        JTS.shell.renderHeader();
        rerender();
      });
      exLang.addEventListener('change', function () {
        S.update(function (s) { s.settings.explainLang = exLang.value; });
        ui.toast(t('common.saved'), 'ok');
      });

      var theme = U.el('select.select', { id: 'set-theme' });
      [['light', t('settings.theme.light')], ['dark', t('settings.theme.dark')]].forEach(function (o) {
        var e = U.el('option', { value: o[0], text: o[1] });
        if ((S.settings().theme || 'light') === o[0]) e.selected = true;
        theme.appendChild(e);
      });
      theme.addEventListener('change', function () {
        S.update(function (s) { s.settings.theme = theme.value; });
        document.documentElement.setAttribute('data-theme', theme.value);
      });

      screen.appendChild(card(t('common.language'), [
        U.el('div.grid.grid-2', null, [
          ui.field(t('settings.uiLang'), uiLang),
          ui.field(t('settings.explainLang'), exLang)
        ]),
        ui.field(t('settings.theme'), theme)
      ]));

      /* --- AI provider --- */
      screen.appendChild(aiSection(rerender));

      /* --- data --- */
      var importArea = U.el('textarea.textarea', { id: 'set-import', placeholder: '{ "profile": … }', style: 'min-height:90px' });
      screen.appendChild(card(t('common.export') + ' / ' + t('common.import'), [
        U.el('div.row.row-wrap', null, [
          U.el('button.btn', {
            type: 'button', text: t('settings.exportProfile'),
            onclick: function () {
              U.download('jts-profile-' + U.iso(new Date()) + '.json', S.exportProfile());
            }
          }),
          U.el('a.btn', { href: '#/desmos-guide', text: t('settings.desmosGuide') }),
          U.el('a.btn', { href: 'admin.html', text: t('admin.title') })
        ]),
        ui.field(t('settings.importProfile'), importArea),
        U.el('div.row.row-wrap', null, [
          U.el('button.btn', {
            type: 'button', text: t('common.import'),
            onclick: function () {
              var res = S.importProfile(importArea.value);
              if (!res.ok) return ui.toast('Import failed: ' + res.reason, 'err');
              JTS.shell.applyProfileSettings();
              JTS.shell.renderHeader();
              ui.toast(t('common.saved'), 'ok');
              JTS.router.go('#/today');
            }
          }),
          U.el('button.btn.btn-danger', {
            type: 'button', text: t('settings.resetProfile'),
            onclick: function () {
              ui.confirm({ title: t('settings.resetProfile'), message: t('settings.resetConfirm'),
                okText: t('common.delete') }).then(function (yes) {
                if (!yes) return;
                S.resetProfile();
                JTS.shell.renderHeader();
                JTS.router.go('#/onboarding');
              });
            }
          })
        ]),
        U.el('p.hint', { text: t('settings.bankInfo', { n: JTS.bank.all().length }) })
      ]));
    }
  });
})();
