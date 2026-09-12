/* ==========================================================================
   Digital SAT administration dates, 2026–2027 cycle.

   IMPORTANT: every entry carries verified:false. These are the usual cycle
   slots (Aug, Sep, Oct, Nov, Dec, Mar, May, Jun) with deadlines derived from
   the customary ~2.5 weeks / ~1.5 weeks before test day. Before the platform
   goes to students, JTS must confirm each row against College Board and flip
   verified to true. The UI shows the deadline next to the date, so a wrong row
   costs a student a registration — do not treat this file as authoritative.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.examDatesMeta = {
  cycle: '2026-2027',
  verified: false,
  source: 'JTS placeholder — confirm on collegeboard.org before release',
  checkedAt: null
};

JTS.data.examDates = [
  { id: 'sat-2026-08', testDate: '2026-08-29', registrationDeadline: '2026-08-14',
    lateDeadline: '2026-08-18', region: ['US'], verified: false },
  { id: 'sat-2026-09', testDate: '2026-09-12', registrationDeadline: '2026-08-28',
    lateDeadline: '2026-09-01', region: ['US', 'International'], verified: false },
  { id: 'sat-2026-10', testDate: '2026-10-03', registrationDeadline: '2026-09-18',
    lateDeadline: '2026-09-22', region: ['US', 'International'], verified: false },
  { id: 'sat-2026-11', testDate: '2026-11-07', registrationDeadline: '2026-10-23',
    lateDeadline: '2026-10-27', region: ['US', 'International'], verified: false },
  { id: 'sat-2026-12', testDate: '2026-12-05', registrationDeadline: '2026-11-20',
    lateDeadline: '2026-11-24', region: ['US', 'International'], verified: false },
  { id: 'sat-2027-03', testDate: '2027-03-13', registrationDeadline: '2027-02-26',
    lateDeadline: '2027-03-02', region: ['US', 'International'], verified: false },
  { id: 'sat-2027-05', testDate: '2027-05-01', registrationDeadline: '2027-04-16',
    lateDeadline: '2027-04-20', region: ['US', 'International'], verified: false },
  { id: 'sat-2027-06', testDate: '2027-06-05', registrationDeadline: '2027-05-21',
    lateDeadline: '2027-05-25', region: ['US', 'International'], verified: false }
];
