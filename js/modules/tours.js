/* ==========================================================================
   First-visit tours.

   The first time a student opens a screen, the screen introduces itself: a
   few coach marks pointing at the controls that are not self-explanatory, in
   the order someone would meet them. Once per screen per profile, and never
   again unless Settings asks for them back.

   What is deliberately NOT here: a step for every button. A tour that names
   ten things teaches none of them. Each screen gets three to five marks, and
   only for controls a beginner would otherwise have to guess at — the things
   whose label does not already say what they do.

   A step whose selector matches nothing is dropped by JTS.tour rather than
   shown pointing at the corner of the page, so these lists can mention a
   control that only some students have (the "+" button, the unfinished-run
   notice) without the tour breaking for the rest.
   ========================================================================== */
(function () {
  'use strict';
  var t = JTS.t;

  function step(sel, key) {
    return { sel: sel, title: t('tour.' + key + '.t'), body: t('tour.' + key + '.b') };
  }

  /* The screens that have something to explain, by router base. */
  var TOURS = {
    '#/today': function () {
      return [
        step('#main-nav', 'nav'),
        step('#today-countdown', 'countdown'),
        step('#today-lesson', 'lesson'),
        step('#daily-card', 'daily'),
        step('#add-word', 'fab')
      ];
    },
    '#/practice': function () {
      return [
        step('#practice-modes', 'modes'),
        step('#practice-modes > *:nth-child(4)', 'weak')
      ];
    },
    '#/mocks': function () {
      return [
        step('#mock-run-card', 'mock'),
        step('#paper-card', 'paper')
      ];
    },
    '#/vocab': function () {
      return [
        step('.ex-grid', 'vocabHub'),
        step('.ex-grid > *:nth-child(1)', 'vocabCards')
      ];
    },
    '#/roadmap': function () {
      return [
        step('.rm-stage', 'roadmap'),
        step('.rm-arrows', 'roadmapWalk')
      ];
    },
    '#/plan': function () {
      return [step('.tabs', 'planViews')];
    }
  };

  JTS.tours = {
    /** For Settings: the ids a student can be re-introduced to. */
    ids: function () { return Object.keys(TOURS); },

    /**
     * Called by the router once a screen has rendered. The layout has to be
     * settled before a coach mark can be placed on it, hence the delay:
     * measuring a card that is still being appended puts the bubble in the
     * wrong place, and the wrong place is usually the top-left corner.
     *
     * Returns true when a tour is on its way, so the caller knows to hold
     * anything else back. That return is the whole reason this is not fire
     * and forget: the daily nudge runs synchronously right after this call,
     * and without it the modal opened first and its backdrop dimmed the coach
     * mark it was covering.
     */
    maybeShow: function (base, opts) {
      opts = opts || {};
      var st = JTS.store.state();
      if (!st || !st.profile.onboardingComplete) return false;
      if (JTS.session.current() || JTS.tour.isOpen()) return false;
      var build = TOURS[base];
      if (!build) return false;
      if (!opts.force && JTS.tour.seen(base)) return false;
      setTimeout(function () {
        if (JTS.tour.isOpen() || JTS.session.current()) return;
        JTS.tour.start(build(), { id: base, force: !!opts.force });
      }, 120);
      return true;
    }
  };
})();
