/* ==========================================================================
   University reference used by onboarding step 3 (goal setting).

   Every row is a PLACEHOLDER: midSAT figures are approximate middle-50%
   ranges, not pulled from any institution's Common Data Set. They carry
   verified:false and the UI always prints "as of {year}, source: {source}"
   next to them, so a student never reads them as an admissions promise.
   Replace with verified CDS numbers before release.

   testPolicy: 'required' | 'optional' | 'not-considered'.
   Only 'required' and 'optional' are shown. Test-blind institutions (UCLA and
   the rest of the University of California system) are deliberately absent —
   listing them as an SAT target would be misleading.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.collegesMeta = {
  verified: false,
  defaultSource: 'JTS placeholder dataset',
  note: 'Confirm every figure against the institution Common Data Set before release.'
};

JTS.data.colleges = [
  { id: 'mit',        name: 'Massachusetts Institute of Technology',
    midSAT: { rw: [730, 780], math: [780, 800], total: [1510, 1580] },
    testPolicy: 'required', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'caltech',    name: 'California Institute of Technology',
    midSAT: { rw: [730, 780], math: [790, 800], total: [1520, 1580] },
    testPolicy: 'required', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'harvard',    name: 'Harvard University',
    midSAT: { rw: [730, 780], math: [760, 800], total: [1490, 1580] },
    testPolicy: 'required', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'yale',       name: 'Yale University',
    midSAT: { rw: [730, 780], math: [760, 800], total: [1490, 1580] },
    testPolicy: 'required', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'princeton',  name: 'Princeton University',
    midSAT: { rw: [730, 780], math: [770, 800], total: [1500, 1580] },
    testPolicy: 'required', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'cornell',    name: 'Cornell University',
    midSAT: { rw: [710, 760], math: [750, 800], total: [1460, 1560] },
    testPolicy: 'required', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'georgetown', name: 'Georgetown University',
    midSAT: { rw: [710, 760], math: [720, 790], total: [1430, 1550] },
    testPolicy: 'required', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'purdue',     name: 'Purdue University',
    midSAT: { rw: [620, 710], math: [650, 780], total: [1270, 1490] },
    testPolicy: 'optional', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'nyu',        name: 'New York University',
    midSAT: { rw: [700, 750], math: [730, 790], total: [1430, 1540] },
    testPolicy: 'optional', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'umich',      name: 'University of Michigan — Ann Arbor',
    midSAT: { rw: [680, 740], math: [710, 790], total: [1390, 1530] },
    testPolicy: 'optional', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'uiuc',       name: 'University of Illinois Urbana-Champaign',
    midSAT: { rw: [650, 720], math: [720, 790], total: [1370, 1510] },
    testPolicy: 'optional', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'utaustin',   name: 'University of Texas at Austin',
    midSAT: { rw: [650, 730], math: [670, 780], total: [1320, 1510] },
    testPolicy: 'required', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'nus',        name: 'National University of Singapore',
    midSAT: { rw: [680, 740], math: [730, 800], total: [1410, 1540] },
    testPolicy: 'optional', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'uoft',       name: 'University of Toronto',
    midSAT: { rw: [650, 730], math: [700, 790], total: [1350, 1520] },
    testPolicy: 'optional', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'nazarbayev', name: 'Nazarbayev University',
    midSAT: { rw: [560, 660], math: [620, 730], total: [1180, 1390] },
    testPolicy: 'optional', source: 'JTS placeholder dataset', year: 2025, verified: false },
  { id: 'kimep',      name: 'KIMEP University',
    midSAT: { rw: [500, 600], math: [520, 640], total: [1020, 1240] },
    testPolicy: 'optional', source: 'JTS placeholder dataset', year: 2025, verified: false }
];
