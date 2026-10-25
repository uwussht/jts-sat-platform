/* ==========================================================================
   Screen: Staff (#/staff) — for curators, managers and admins.

   One table of students, each row everything about one student:
     who they are, when their course started, the phase and the lesson they
     are on (the same plan they see), the exam date, their Bluebook results
     with confirm / send back for the ones waiting, packages and role.
   A filter shows only the students with a result to confirm.

   Groups and teachers' lesson marks still exist on the server
   (/api/staff/groups, /teaching); this screen does not show them.
   Only works with the server (docker compose); without it the screen says so.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;
  var api = function () { return JTS.api.apply(null, arguments); };

  function lang() { return S.settings().uiLang; }
  function fmt(iso) { return iso ? U.fmtDate(U.parseISO(iso), lang()) : '—'; }
  function perms() { return (JTS.Auth.user && JTS.Auth.user.perms) || []; }
  function can(p) { return perms().indexOf(p) >= 0; }
  /** The message for a reason the server gave, or the general one. */
  function errText(reason) {
    var key = 'staff.err.' + (reason || 'server');
    var msg = t(key);
    return msg === key ? t('staff.err.server') : msg;
  }
  function failToast(res) { ui.toast(errText(res && res.reason), 'err'); }


  /* ---------------------------------------------------------- the table */

  /** One Bluebook result, with confirm / send back while it waits. */
  function scoreLine(sc, reload) {
    function decide(st) {
      var comment = '';
      if (st === 'rejected') {
        comment = window.prompt(t('staff.rejectPrompt'), '');
        if (!comment) return;
      }
      api('staff/scores/' + sc.id, { status: st, comment: comment }).then(function (r) {
        if (!r.ok) return failToast(r);
        ui.toast(t('staff.saved'), 'ok'); reload();
      });
    }
    var label = sc.test ? t('tests.name', { n: JTS.courseUI.TEST_NO[sc.test] }) : t('mock.source.' + sc.source);
    return U.el('div.staff-score' + (sc.status === 'pending' ? '.is-pending' : ''), null, [
      U.el('div.staff-score-top', null, [
        U.el('span.small', { text: label }),
        U.el('b', { text: String(sc.total) }),
        JTS.courseUI.statusBadge(sc.status, sc.comment)
      ]),
      U.el('span.xsmall.muted', { text: (sc.rw ? 'R&W ' + sc.rw + ' · Math ' + sc.math + ' · ' : '') + fmt(sc.date) +
        (sc.status === 'rejected' && sc.comment ? ' · “' + sc.comment + '”' : '') }),
      sc.status === 'pending' && can('scores') ? U.el('div.row', null, [
        U.el('button.btn.btn-sm.btn-primary', { type: 'button', text: t('staff.confirm'), onclick: function () { decide('confirmed'); } }),
        U.el('button.btn.btn-sm', { type: 'button', text: t('staff.reject'), onclick: function () { decide('rejected'); } })
      ]) : null
    ]);
  }

  function packagesCell(u) {
    return U.el('div.stack-sm', null, ['basic', 'extra'].map(function (p) {
      var cb = U.el('input', { type: 'checkbox', checked: u.packages.indexOf(p) >= 0 || null, disabled: !can('packages') || null });
      cb.addEventListener('change', function () {
        var list = ['basic', 'extra'].filter(function (x) {
          return x === p ? cb.checked : u.packages.indexOf(x) >= 0;
        });
        function save() {
          api('staff/users/' + u.id + '/packages', { packages: list }, 'PUT').then(function (r) {
            if (!r.ok) { failToast(r); cb.checked = !cb.checked; return; }
            u.packages = r.packages; ui.toast(t('staff.saved'), 'ok');
          });
        }
        /* Before the extra package is added: does it fit before the exam?
           Said before, not after — the Challenge month needs four weeks. */
        if (p !== 'extra' || !cb.checked) { save(); return; }
        api('staff/users/' + u.id + '/plan').then(function (r) {
          var f = r.ok && r.plan.extraFit;
          if (!f || f.fits !== false) { save(); return; }
          ui.confirm({ title: t('staff.pkg.extra'),
            message: t('staff.extraNoFit', { left: f.weeksLeft, need: f.weeksNeeded }),
            okText: t('staff.grantAnyway'), cancelText: t('common.cancel') })
            .then(function (yes) { if (yes) save(); else cb.checked = false; });
        });
      });
      return U.el('label.check', null, [cb, U.el('span.small', { text: t('staff.pkg.' + p) })]);
    }));
  }

  /** Admins only, and never one's own account: delete, after a confirmation
      that names the person. Their progress and results go with them. */
  function deleteButton(u, reload) {
    if (!can('roles') || (JTS.Auth.user && JTS.Auth.user.id === u.id)) return null;
    return U.el('button.btn.btn-sm.btn-ghost.staff-delete', {
      type: 'button', text: t('staff.delete'),
      onclick: function () {
        ui.confirm({
          title: t('staff.deleteTitle'),
          message: t('staff.deleteBody', { name: u.name || '—', phone: u.phone }),
          okText: t('staff.delete'), cancelText: t('common.cancel')
        }).then(function (yes) {
          if (!yes) return;
          fetch('/api/staff/users/' + u.id, { method: 'DELETE', credentials: 'same-origin' })
            .then(function (r) { return r.json(); })
            .then(function (res) {
              if (!res.ok) return failToast(res);
              ui.toast(t('staff.deleted'), 'ok'); reload();
            }, function () { failToast(null); });
        });
      }
    });
  }

  function roleCell(u) {
    if (!can('roles')) return U.el('span.small', { text: t('staff.role.' + u.role) });
    var sel = U.el('select.select.staff-role', null, ['student', 'teacher', 'curator', 'manager', 'admin'].map(function (r) {
      return U.el('option', { value: r, text: t('staff.role.' + r), selected: u.role === r || null });
    }));
    sel.addEventListener('change', function () {
      api('staff/users/' + u.id + '/role', { role: sel.value }, 'PUT').then(function (r) {
        if (!r.ok) { failToast(r); sel.value = u.role; return; }
        u.role = sel.value; ui.toast(t('staff.saved'), 'ok');
      });
    });
    return sel;
  }

  function studentsTable(host) {
    var onlyPending = (JTS.router.current && JTS.router.current.query.filter) === 'pending';
    var search = U.el('input.input', { type: 'search', placeholder: t('staff.searchStudents') });
    var table = U.el('div.table-wrap');
    host.appendChild(U.el('div.row.row-wrap.staff-tools', null, [
      search,
      U.el('a.chip', { href: onlyPending ? '#/staff' : '#/staff?filter=pending', 'aria-pressed': String(onlyPending),
        text: t('staff.onlyPending') })
    ]));
    host.appendChild(table);

    function load() {
      api('staff/users?q=' + encodeURIComponent(search.value.trim())).then(function (res) {
        U.clear(table);
        if (!res.ok) return table.appendChild(U.el('p.error-text', { text: t('staff.err.server') }));
        var users = res.users.filter(function (u) {
          return !onlyPending || u.scores.some(function (sc) { return sc.status === 'pending'; });
        });
        if (!users.length) return table.appendChild(ui.empty(t(onlyPending ? 'staff.noScores' : 'staff.noStudents')));
        var tb = U.el('tbody');
        users.forEach(function (u) {
          var c = u.course;
          var shown = u.scores.filter(function (sc) { return sc.test || sc.status === 'pending'; });
          tb.appendChild(U.el('tr', null, [
            U.el('td', null, [
              U.el('b', { text: u.name || '—' }),
              U.el('div.xsmall.muted', { text: u.phone }),
              u.email ? U.el('div.xsmall.muted', { text: u.email }) : null
            ]),
            U.el('td.small', { text: c ? fmt(c.startDate) : '—' }),
            U.el('td.small', null, c && c.phase ? [
              U.el('div', { text: t('phase.' + c.phase.id + '.short') }),
              c.phaseCounter && c.phaseCounter.n ? U.el('div.xsmall.muted', { text: t('phase.counter', { n: c.phaseCounter.n, of: c.phaseCounter.of }) }) : null
            ] : [U.el('span', { text: '—' })]),
            U.el('td.small', null, c ? [
              c.next ? U.el('div', { text: t('prog.lessonNo', { n: c.next.no }) + ' · ' + c.next.topic }) : U.el('div', { text: t('staff.courseDone') }),
              U.el('div.xsmall.muted', { text: (c.next ? fmt(c.next.date) + ' · ' : '') + t('phase.lessonsDone', { n: c.done, of: c.total }) })
            ] : [U.el('span', { text: '—' })]),
            U.el('td.small', { text: u.examDate ? fmt(u.examDate) : '—' }),
            U.el('td', null, shown.length ? shown.map(function (sc) { return scoreLine(sc, load); })
              : [U.el('span.small.muted', { text: '—' })]),
            U.el('td', null, [packagesCell(u)]),
            U.el('td', null, [roleCell(u), deleteButton(u, load)])
          ]));
        });
        table.appendChild(U.el('table.table.staff-table', null, [
          U.el('thead', null, [U.el('tr', null, ['staff.col.name', 'staff.col.start', 'staff.col.phase', 'staff.col.lesson',
            'staff.col.exam', 'staff.col.bluebook', 'staff.col.packages', 'staff.col.role']
            .map(function (k) { return U.el('th', { text: t(k) }); }))]),
          tb
        ]));
      });
    }
    search.addEventListener('input', U.debounce(load, 300));
    load();
  }

  /* -------------------------------------------------------------- screen */

  JTS.router.register('#/staff', {
    title: 'staff.nav',
    render: function (root) {
      if (!S.state()) { JTS.router.go('#/auth'); return; }
      var screen = U.el('div.container.container-wide.screen.stack');
      root.appendChild(screen);
      if (!JTS.course.isServer() || !can('staff')) {
        screen.appendChild(ui.empty(t('staff.noAccess'), t('staff.noAccessNote')));
        return;
      }
      studentsTable(screen);
    }
  });
})();
