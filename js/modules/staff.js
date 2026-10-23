/* ==========================================================================
   Screen: Staff (#/staff) — for teachers, curators, managers and admins.

   Tabs, each shown only to the roles that may use it (the server checks
   again on every request):

     My lessons   a teacher's lessons over three weeks; "Lesson held" with
                  the students who were absent, on any past date; undo
     Groups       a group: name, start and exam date, the three weekly slots
                  (day, time, section, teacher) and its students; its
                  calendar, where a curator can move a lesson
     Students     everyone, with their group, packages and role
     Scores       Bluebook results waiting for a curator: confirm, or send
                  back with a comment

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
  function sectionName(s) { return s === 'math' ? t('common.math') : s === 'rw' ? t('common.rwShort') : '—'; }

  var TABS = [
    { id: 'teaching', perm: 'teach' },
    { id: 'groups', perm: 'groups' },
    { id: 'students', perm: 'staff' },
    { id: 'scores', perm: 'scores' }
  ];

  /* ------------------------------------------------------------ teaching */

  function heldModal(l, done) {
    var m;
    var date = U.el('input.input', { type: 'date', value: l.heldOn || (l.date <= U.iso(U.today()) ? l.date : U.iso(U.today())),
      max: U.iso(U.today()) });
    var boxes = l.students.map(function (s) {
      var cb = U.el('input', { type: 'checkbox', value: String(s.id), checked: l.absent.indexOf(s.id) >= 0 || null });
      return U.el('label.check', null, [cb, U.el('span', { text: s.name })]);
    });
    var body = U.el('div.stack', null, [
      U.el('p.small.muted', { text: l.group.name + ' · ' + t('prog.lessonNo', { n: l.no }) + ' · ' + l.topic }),
      ui.field(t('staff.heldOn'), date, t('staff.heldOnNote')),
      U.el('div.stack-sm', null, [U.el('div.label', { text: t('staff.absent') })].concat(
        boxes.length ? boxes : [U.el('p.small.muted', { text: t('staff.noStudents') })]))
    ]);
    var save = U.el('button.btn.btn-primary', {
      type: 'button', text: t('staff.markHeld'),
      onclick: function () {
        var absent = boxes.map(function (b) { return b.querySelector('input'); })
          .filter(function (i) { return i.checked; }).map(function (i) { return Number(i.value); });
        save.disabled = true;
        api('staff/groups/' + l.group.id + '/lessons/' + l.no + '/held', { heldOn: date.value, absentUserIds: absent })
          .then(function (res) {
            save.disabled = false;
            if (!res.ok) return failToast(res);
            m.close(); ui.toast(t('staff.saved'), 'ok'); done();
          });
      }
    });
    m = ui.modal({ title: t('staff.markHeld'), content: body, actions: [save] });
  }

  function teachingTab(host, rerender) {
    var from = U.iso(U.addDays(U.today(), -14)), to = U.iso(U.addDays(U.today(), 7));
    host.appendChild(U.el('p.small.muted', { text: t('staff.teachingLead') }));
    var list = U.el('div.stack-sm');
    host.appendChild(list);
    list.appendChild(U.el('p.small.muted', { text: t('common.loading') }));
    api('staff/teaching?from=' + from + '&to=' + to).then(function (res) {
      U.clear(list);
      if (!res.ok) return list.appendChild(U.el('p.error-text', { text: t('staff.err.server') }));
      if (!res.lessons.length) return list.appendChild(ui.empty(t('staff.noLessons')));
      var today = U.iso(U.today());
      res.lessons.forEach(function (l) {
        var names = l.absent.map(function (id) {
          var s = l.students.filter(function (x) { return x.id === id; })[0]; return s ? s.name : id;
        });
        list.appendChild(U.el('div.card.card-sm.staff-row' + (l.date === today ? '.is-today' : ''), null, [
          U.el('div.staff-when', null, [
            U.el('b', { text: fmt(l.date) }),
            U.el('span.small.muted', { text: (l.time || '') + (l.moved ? ' · ' + t('lstatus.moved') : '') })
          ]),
          U.el('div.stack-sm', null, [
            U.el('b', { text: t('prog.lessonNo', { n: l.no }) + ' · ' + l.topic }),
            U.el('span.small.muted', { text: l.group.name + ' · ' + sectionName(l.section) +
              (l.teacher && l.teacher.name ? ' · ' + l.teacher.name : '') }),
            l.held ? U.el('span.small', { text: t('staff.heldLine', { date: fmt(l.heldOn) }) +
              (names.length ? ' · ' + t('staff.absentLine', { names: names.join(', ') }) : '') }) : null
          ]),
          U.el('div.row.row-wrap', null, l.held ? [
            U.el('span.badge.badge-ok', { text: t('lstatus.done') }),
            U.el('button.btn.btn-sm', { type: 'button', text: t('common.edit'), onclick: function () { heldModal(l, rerender); } }),
            U.el('button.btn.btn-sm.btn-ghost', { type: 'button', text: t('staff.undo'), onclick: function () {
              fetch('/api/staff/groups/' + l.group.id + '/lessons/' + l.no + '/held', { method: 'DELETE', credentials: 'same-origin' })
                .then(function () { rerender(); });
            } })
          ] : [
            U.el('button.btn.btn-sm' + (l.date <= today ? '.btn-primary' : ''), {
              type: 'button', text: t('staff.markHeld'), disabled: l.date > today || null,
              onclick: function () { heldModal(l, rerender); }
            })
          ])
        ]));
      });
    });
  }

  /* -------------------------------------------------------------- groups */

  function groupForm(g, teachers, students, done) {
    var m;
    g = g || { name: '', startDate: U.iso(U.today()), examDate: '', slots: [
      { weekday: 1, time: '18:00', section: 'rw' }, { weekday: 3, time: '18:00', section: 'math' }, { weekday: 5, time: '18:00', section: 'rw' }
    ], members: [] };
    var name = U.el('input.input', { type: 'text', value: g.name, maxlength: '80' });
    var start = U.el('input.input', { type: 'date', value: g.startDate || '' });
    var exam = U.el('input.input', { type: 'date', value: g.examDate || '' });
    var slotRows = [0, 1, 2].map(function (i) {
      var s = g.slots[i] || { weekday: 1, time: '18:00' };
      var day = U.el('select.select', null, [1, 2, 3, 4, 5, 6, 7].map(function (d) {
        return U.el('option', { value: String(d), text: U.dayLabel(d), selected: s.weekday === d || null });
      }));
      var time = U.el('input.input', { type: 'time', value: s.time || '18:00' });
      var sec = U.el('select.select', null, [['rw', t('common.rwShort')], ['math', t('common.math')]].map(function (o) {
        return U.el('option', { value: o[0], text: o[1], selected: s.section === o[0] || null });
      }));
      var teacher = U.el('select.select', null, [U.el('option', { value: '', text: t('staff.noTeacher') })].concat(
        teachers.map(function (x) {
          var sel = s.teacher && s.teacher.id === x.id;
          return U.el('option', { value: String(x.id), text: x.name, selected: sel || null });
        })));
      return { el: U.el('div.staff-slot', null, [day, time, sec, teacher]), day: day, time: time, sec: sec, teacher: teacher };
    });
    var memberIds = (g.members || []).map(function (x) { return x.id; });
    var search = U.el('input.input', { type: 'search', placeholder: t('staff.searchStudents') });
    var memberBox = U.el('div.staff-members');
    function paintMembers() {
      U.clear(memberBox);
      var q = search.value.trim().toLowerCase();
      students.filter(function (s) {
        return s.role === 'student' && (!q || (s.name + ' ' + s.phone).toLowerCase().indexOf(q) >= 0 || memberIds.indexOf(s.id) >= 0);
      }).slice(0, 80).forEach(function (s) {
        var cb = U.el('input', { type: 'checkbox', checked: memberIds.indexOf(s.id) >= 0 || null });
        cb.addEventListener('change', function () {
          if (cb.checked) memberIds.push(s.id);
          else memberIds = memberIds.filter(function (id) { return id !== s.id; });
        });
        memberBox.appendChild(U.el('label.check', null, [cb, U.el('span', {
          text: s.name + ' · ' + s.phone + (s.group && s.group.id !== g.id ? ' · ' + t('staff.inGroup', { name: s.group.name }) : '')
        })]));
      });
    }
    search.addEventListener('input', paintMembers);
    paintMembers();
    var err = U.el('div.error-text', { role: 'alert', hidden: true });

    var body = U.el('div.stack', null, [
      ui.field(t('staff.groupName'), name),
      U.el('div.auth-row', null, [ui.field(t('staff.startDate'), start), ui.field(t('staff.examDate'), exam)]),
      U.el('div.stack-sm', null, [U.el('div.label', { text: t('staff.slots') }),
        U.el('p.xsmall.muted', { text: t('staff.slotsNote') })].concat(slotRows.map(function (r) { return r.el; }))),
      U.el('div.stack-sm', null, [U.el('div.label', { text: t('staff.students') }), search, memberBox]),
      err
    ]);
    var save = U.el('button.btn.btn-primary', {
      type: 'button', text: t('common.save'),
      onclick: function () {
        var payload = {
          name: name.value.trim(), startDate: start.value, examDate: exam.value || null,
          slots: slotRows.map(function (r) {
            return { weekday: Number(r.day.value), time: r.time.value, section: r.sec.value,
                     teacherId: r.teacher.value ? Number(r.teacher.value) : null };
          }),
          memberIds: memberIds
        };
        save.disabled = true;
        api(g.id ? 'staff/groups/' + g.id : 'staff/groups', payload, g.id ? 'PUT' : 'POST').then(function (res) {
          save.disabled = false;
          if (!res.ok) { err.textContent = errText(res.reason); err.hidden = false; return; }
          m.close(); ui.toast(t('staff.saved'), 'ok'); done();
        });
      }
    });
    m = ui.modal({ title: g.id ? t('staff.editGroup') : t('staff.newGroup'), content: body, actions: [save], wide: true });
  }

  function groupDetail(id, rerender) {
    api('staff/groups/' + id).then(function (res) {
      if (!res.ok) return failToast(res);
      var g = res.group;
      var m;
      var rows = U.el('div.stack-sm');
      g.lessons.forEach(function (l) {
        rows.appendChild(U.el('div.staff-lesson', null, [
          U.el('span.small', { text: fmt(l.date) + (l.time ? ' ' + l.time : '') }),
          U.el('span.small', { text: t('prog.lessonNo', { n: l.no }) + ' · ' + l.topic }),
          JTS.courseUI.lessonStatus(l),
          can('moves') && !l.heldOn ? U.el('button.btn.btn-sm.btn-ghost', {
            type: 'button', text: t('staff.move'),
            onclick: function () {
              var d = window.prompt(t('staff.movePrompt'), l.date);
              if (d === null) return;
              api('staff/groups/' + g.id + '/lessons/' + l.no + '/move', { date: d || null }).then(function (r) {
                if (!r.ok) return failToast(r);
                m.close(); groupDetail(id, rerender);
              });
            }
          }) : U.el('span')
        ]));
      });
      m = ui.modal({
        title: g.name,
        content: U.el('div.stack', null, [
          U.el('div.small.muted', { text: t('staff.groupMeta', { start: fmt(g.startDate), exam: fmt(g.examDate), n: g.members.length }) }),
          U.el('div.small', { text: g.members.map(function (s) {
            return s.name + (s.packages.indexOf('extra') >= 0 ? ' (+Challenge)' : '');
          }).join(', ') || t('staff.noStudents') }),
          rows
        ]),
        wide: true
      });
    });
  }

  function groupsTab(host, rerender) {
    var bar = U.el('div.row-between.row-wrap', null, [U.el('p.small.muted', { text: t('staff.groupsLead') })]);
    host.appendChild(bar);
    var list = U.el('div.stack-sm');
    host.appendChild(list);
    Promise.all([api('staff/groups'), api('staff/teachers'), api('staff/users?role=student')]).then(function (r) {
      if (!r[0].ok) return list.appendChild(U.el('p.error-text', { text: t('staff.err.server') }));
      var teachers = r[1].ok ? r[1].teachers : [], students = r[2].ok ? r[2].users : [];
      bar.appendChild(U.el('button.btn.btn-primary.btn-sm', { type: 'button', text: t('staff.newGroup'),
        onclick: function () { groupForm(null, teachers, students, rerender); } }));
      if (!r[0].groups.length) return list.appendChild(ui.empty(t('staff.noGroups')));
      r[0].groups.forEach(function (g) {
        list.appendChild(U.el('div.card.card-sm.staff-row', null, [
          U.el('div.stack-sm', null, [
            U.el('b', { text: g.name }),
            U.el('span.small.muted', { text: t('staff.groupMeta', { start: fmt(g.startDate), exam: fmt(g.examDate), n: g.members }) }),
            U.el('span.small', { text: g.slots.map(function (s) {
              return U.dayLabel(s.weekday) + ' ' + s.time + ' ' + sectionName(s.section) + (s.teacher ? ' · ' + s.teacher.name : '');
            }).join('   ·   ') }),
            g.next ? U.el('span.small.muted', { text: t('staff.groupNext', { n: g.next.no, date: fmt(g.next.date), held: g.held }) }) : null
          ]),
          U.el('div.row.row-wrap', null, [
            U.el('button.btn.btn-sm', { type: 'button', text: t('staff.calendar'), onclick: function () { groupDetail(g.id, rerender); } }),
            U.el('button.btn.btn-sm', { type: 'button', text: t('common.edit'), onclick: function () {
              api('staff/groups/' + g.id).then(function (res) {
                if (res.ok) groupForm(res.group, teachers, students, rerender);
              });
            } })
          ])
        ]));
      });
    });
  }

  /* ------------------------------------------------------------ students */

  function studentsTab(host, rerender) {
    var search = U.el('input.input', { type: 'search', placeholder: t('staff.searchStudents') });
    var table = U.el('div.table-wrap');
    host.appendChild(search);
    host.appendChild(table);
    function load() {
      api('staff/users?q=' + encodeURIComponent(search.value.trim())).then(function (res) {
        U.clear(table);
        if (!res.ok) return table.appendChild(U.el('p.error-text', { text: t('staff.err.server') }));
        var tb = U.el('tbody');
        res.users.forEach(function (u) {
          var pk = U.el('div.row.row-wrap', null, ['basic', 'extra'].map(function (p) {
            var cb = U.el('input', { type: 'checkbox', checked: u.packages.indexOf(p) >= 0 || null, disabled: !can('packages') || null });
            cb.addEventListener('change', function () {
              var list = ['basic', 'extra'].filter(function (x) {
                return x === p ? cb.checked : u.packages.indexOf(x) >= 0;
              });
              api('staff/users/' + u.id + '/packages', { packages: list }, 'PUT').then(function (r) {
                if (!r.ok) { failToast(r); cb.checked = !cb.checked; return; }
                u.packages = r.packages; ui.toast(t('staff.saved'), 'ok');
              });
            });
            return U.el('label.check', null, [cb, U.el('span', { text: t('staff.pkg.' + p) })]);
          }));
          var role = can('roles') ? U.el('select.select', null, ['student', 'teacher', 'curator', 'manager', 'admin'].map(function (r) {
            return U.el('option', { value: r, text: t('staff.role.' + r), selected: u.role === r || null });
          })) : U.el('span.small', { text: t('staff.role.' + u.role) });
          if (role.tagName === 'SELECT') {
            role.addEventListener('change', function () {
              api('staff/users/' + u.id + '/role', { role: role.value }, 'PUT').then(function (r) {
                if (!r.ok) { failToast(r); role.value = u.role; return; }
                u.role = role.value; ui.toast(t('staff.saved'), 'ok');
              });
            });
          }
          tb.appendChild(U.el('tr', null, [
            U.el('td', null, [U.el('b', { text: u.name || '—' }), U.el('div.xsmall.muted', { text: u.phone + (u.email ? ' · ' + u.email : '') })]),
            U.el('td.small', { text: u.group ? u.group.name : '—' }),
            U.el('td.small', { text: u.examDate ? fmt(u.examDate) : '—' }),
            U.el('td', null, [pk]),
            U.el('td', null, [role])
          ]));
        });
        table.appendChild(U.el('table.table', null, [
          U.el('thead', null, [U.el('tr', null, ['staff.col.name', 'staff.col.group', 'staff.col.exam', 'staff.col.packages', 'staff.col.role']
            .map(function (k) { return U.el('th', { text: t(k) }); }))]),
          tb
        ]));
      });
    }
    search.addEventListener('input', U.debounce(load, 300));
    load();
  }

  /* -------------------------------------------------------------- scores */

  function scoresTab(host, rerender) {
    var status = (JTS.router.current && JTS.router.current.query.status) || 'pending';
    host.appendChild(U.el('div.row.row-wrap', null, ['pending', 'confirmed', 'rejected'].map(function (s) {
      return U.el('a.chip', { href: '#/staff?tab=scores&status=' + s, 'aria-pressed': String(status === s), text: t('tests.' + s) });
    })));
    var list = U.el('div.stack-sm');
    host.appendChild(list);
    api('staff/scores?status=' + status).then(function (res) {
      if (!res.ok) return list.appendChild(U.el('p.error-text', { text: t('staff.err.server') }));
      if (!res.scores.length) return list.appendChild(ui.empty(t('staff.noScores')));
      res.scores.forEach(function (sc) {
        function decide(st) {
          var comment = '';
          if (st === 'rejected') {
            comment = window.prompt(t('staff.rejectPrompt'), '');
            if (!comment) return;
          }
          api('staff/scores/' + sc.id, { status: st, comment: comment }).then(function (r) {
            if (!r.ok) return failToast(r);
            ui.toast(t('staff.saved'), 'ok'); rerender();
          });
        }
        list.appendChild(U.el('div.card.card-sm.staff-row', null, [
          U.el('div.stack-sm', null, [
            U.el('b', { text: sc.student.name + ' · ' + (sc.test ? t('tests.name', { n: JTS.courseUI.TEST_NO[sc.test] }) : t('mock.source.' + sc.source)) }),
            U.el('span.small.muted', { text: sc.student.phone + (sc.student.group ? ' · ' + sc.student.group : '') + ' · ' + fmt(sc.date) }),
            U.el('span', { text: t('tests.total') + ' ' + sc.total + (sc.rw ? ' · R&W ' + sc.rw : '') + (sc.math ? ' · Math ' + sc.math : '') }),
            sc.comment ? U.el('span.small.muted', { text: '“' + sc.comment + '”' }) : null
          ]),
          status === 'pending' ? U.el('div.row.row-wrap', null, [
            U.el('button.btn.btn-sm.btn-primary', { type: 'button', text: t('staff.confirm'), onclick: function () { decide('confirmed'); } }),
            U.el('button.btn.btn-sm', { type: 'button', text: t('staff.reject'), onclick: function () { decide('rejected'); } })
          ]) : JTS.courseUI.statusBadge(sc.status, sc.comment)
        ]));
      });
    });
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
      function rerender() { JTS.router.render(); }
      var tabs = TABS.filter(function (x) { return can(x.perm); });
      var want = JTS.router.current && JTS.router.current.query.tab;
      var cur = tabs.filter(function (x) { return x.id === want; })[0] || tabs[0];
      screen.appendChild(U.el('div.row.row-wrap.staff-tabs', null, tabs.map(function (x) {
        return U.el('a.chip', { href: '#/staff?tab=' + x.id, 'aria-pressed': String(x === cur), text: t('staff.tab.' + x.id) });
      })));
      var host = U.el('div.stack');
      screen.appendChild(host);
      ({ teaching: teachingTab, groups: groupsTab, students: studentsTab, scores: scoresTab })[cur.id](host, rerender);
    }
  });
})();
