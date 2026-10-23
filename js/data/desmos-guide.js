/* ==========================================================================
   Desmos guide content.

   The guide is the 23 numbered lessons of Tutorlini Test Prep's Desmos video
   series, in order. On screen each lesson is a live calculator, its video
   and its exercises (`exercises: [{ title, url }]`) — the same for all 23.

   Nothing here is copied from Desmos's documentation or from any test
   publisher; the expressions are ordinary mathematics.

   video: paste a URL to attach a JTS screencast to a section. Left null the
   section renders an empty slot rather than a broken player.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.desmosGuide = [
  /* Lessons 1–23 of the video series, one format for all: a calculator, the
     video and the exercises, nothing written. The ids of 1–4 are the names
     their sections had when they carried written steps. */
  {
    id: 'solve', lesson: 1,
    video: 'https://www.youtube.com/embed/TFmt1VwZte8',
    videoCredit: { name: 'Tutorlini Test Prep \u2014 Desmos Lesson #1', url: 'https://youtu.be/TFmt1VwZte8' }
  },
  {
    id: 'system', lesson: 2,
    video: 'https://www.youtube.com/embed/oL9_EOn5x7w',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #2', url: 'https://youtu.be/oL9_EOn5x7w' }
  },
  {
    id: 'intercepts', lesson: 3,
    video: 'https://www.youtube.com/embed/nIIG-5lTmmI',
    videoCredit: { name: 'Tutorlini Test Prep \u2014 Desmos Lesson #3', url: 'https://youtu.be/nIIG-5lTmmI' }
  },
  {
    id: 'minmax', lesson: 4,
    video: 'https://www.youtube.com/embed/-2PXxoc9_Cw',
    videoCredit: { name: 'Tutorlini Test Prep \u2014 Desmos Lesson #4', url: 'https://youtu.be/-2PXxoc9_Cw' }
  },
  /* Lessons 5–23 of the same video series: a calculator, the video and
     the exercises, nothing written. */
  {
    id: 'l5', lesson: 5,
    video: 'https://www.youtube.com/embed/uHuhHKY_wO8',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #5', url: 'https://youtu.be/uHuhHKY_wO8' }
  },
  {
    id: 'l6', lesson: 6,
    video: 'https://www.youtube.com/embed/-fS29WVBxlw',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #6', url: 'https://youtu.be/-fS29WVBxlw' }
  },
  {
    id: 'l7', lesson: 7,
    video: 'https://www.youtube.com/embed/wgIuacO3Xdw',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #7', url: 'https://youtu.be/wgIuacO3Xdw' }
  },
  {
    id: 'l8', lesson: 8,
    video: 'https://www.youtube.com/embed/QjEZuxPfKaE',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #8', url: 'https://youtu.be/QjEZuxPfKaE' }
  },
  {
    id: 'l9', lesson: 9,
    video: 'https://www.youtube.com/embed/yAYGDGOO5bA',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #9', url: 'https://youtu.be/yAYGDGOO5bA' }
  },
  {
    id: 'l10', lesson: 10,
    video: 'https://www.youtube.com/embed/a1QNaRnn6cE',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #10', url: 'https://youtu.be/a1QNaRnn6cE' }
  },
  {
    id: 'l11', lesson: 11,
    video: 'https://www.youtube.com/embed/XIrg5fyIHL4',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #11', url: 'https://youtu.be/XIrg5fyIHL4' }
  },
  {
    id: 'l12', lesson: 12,
    video: 'https://www.youtube.com/embed/TIC6oYtvBGU',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #12', url: 'https://youtu.be/TIC6oYtvBGU' }
  },
  {
    id: 'l13', lesson: 13,
    video: 'https://www.youtube.com/embed/oOZeeiLe13g',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #13', url: 'https://youtu.be/oOZeeiLe13g' }
  },
  {
    id: 'l14', lesson: 14,
    video: 'https://www.youtube.com/embed/szu6vufYqmA',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #14', url: 'https://youtu.be/szu6vufYqmA' }
  },
  {
    id: 'l15', lesson: 15,
    video: 'https://www.youtube.com/embed/LOoY9iU1uZU',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #15', url: 'https://youtu.be/LOoY9iU1uZU' }
  },
  {
    id: 'l16', lesson: 16,
    video: 'https://www.youtube.com/embed/8Ik_TbQ7ouE',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #16', url: 'https://youtu.be/8Ik_TbQ7ouE' }
  },
  {
    id: 'l17', lesson: 17,
    video: 'https://www.youtube.com/embed/bcoYGlribno',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #17', url: 'https://youtu.be/bcoYGlribno' }
  },
  {
    id: 'l18', lesson: 18,
    video: 'https://www.youtube.com/embed/IFBTj353NHI',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #18', url: 'https://youtu.be/IFBTj353NHI' }
  },
  {
    id: 'l19', lesson: 19,
    video: 'https://www.youtube.com/embed/3rF4TTAVom4',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #19', url: 'https://youtu.be/3rF4TTAVom4' }
  },
  {
    id: 'l20', lesson: 20,
    video: 'https://www.youtube.com/embed/Kjm-tNBxLY8',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #20', url: 'https://youtu.be/Kjm-tNBxLY8' }
  },
  {
    id: 'l21', lesson: 21,
    video: 'https://www.youtube.com/embed/jcTnOfbnaiM',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #21', url: 'https://youtu.be/jcTnOfbnaiM' }
  },
  {
    id: 'l22', lesson: 22,
    video: 'https://www.youtube.com/embed/X3nl7auPK5A',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #22', url: 'https://youtu.be/X3nl7auPK5A' }
  },
  {
    id: 'l23', lesson: 23,
    video: 'https://www.youtube.com/embed/TtVwM6Doydg',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #23', url: 'https://youtu.be/TtVwM6Doydg' }
  }
];
