"""Refresh the SAT test dates from College Board's dates-and-deadlines page.

Reads https://satsuite.collegeboard.org/sat/dates-deadlines and rewrites

    js/data/exam-dates.js    the dates the app ships with
    js/data/exam-dates.json  the same list, fetched by the app at start-up

Two kinds of date come off the page:

  confirmed    the registration table: test date, registration deadline and
               the late-registration deadline.
  anticipated  the "Anticipated SAT Weekend ... Test Dates" list for the next
               school year: a test date only, no deadlines yet. The app shows
               these as expected dates until College Board confirms them.

Run by .github/workflows/exam-dates.yml every week; run it by hand with

    python tools/update_exam_dates.py

Standard library only. If the page no longer looks the way this expects, the
script stops without touching the files, so a broken parse can never empty
the list students choose from.
"""
import datetime as dt
import html
import json
import os
import re
import sys
import urllib.request

URL = 'https://satsuite.collegeboard.org/sat/dates-deadlines'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS_OUT = os.path.join(ROOT, 'js', 'data', 'exam-dates.js')
JSON_OUT = os.path.join(ROOT, 'js', 'data', 'exam-dates.json')

MONTHS = {m: i + 1 for i, m in enumerate(
    ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'])}
DATE = re.compile(r'([A-Za-z]{3,9})\.?\s+(\d{1,2}),\s*(\d{4})')


def iso(match):
    month = MONTHS.get(match.group(1)[:3].lower())
    if not month:
        return None
    return dt.date(int(match.group(3)), month, int(match.group(2))).isoformat()


def text(fragment):
    return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', fragment)).split())


def fetch():
    req = urllib.request.Request(URL, headers={'User-Agent': 'Mozilla/5.0 (JTS SAT date check)'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode('utf-8', 'ignore')


def parse(page):
    confirmed = []
    for table in re.findall(r'<table.*?</table>', page, re.S):
        if 'Registration Deadline' not in table:
            continue
        for row in re.findall(r'<tr.*?</tr>', table, re.S):
            cells = [text(c) for c in re.findall(r'<t[hd][ >].*?</t[hd]>', row, re.S)]
            dates = [DATE.search(c) for c in cells[:3]]
            if len(cells) < 3 or not all(dates):
                continue
            test, reg, late = (iso(m) for m in dates)
            if test and reg and late:
                confirmed.append({'testDate': test, 'registrationDeadline': reg,
                                  'lateDeadline': late, 'confirmed': True})
        break

    anticipated = []
    flat = text(page)
    start = flat.find('Anticipated SAT')
    if start >= 0:
        end = flat.find('Resources', start)
        chunk = flat[start:end if end > start else start + 1500]
        for m in DATE.finditer(chunk):
            d = iso(m)
            if d:
                anticipated.append({'testDate': d, 'registrationDeadline': None,
                                    'lateDeadline': None, 'confirmed': False})

    known = {d['testDate'] for d in confirmed}
    rows = confirmed + [d for d in anticipated if d['testDate'] not in known]
    rows.sort(key=lambda d: d['testDate'])
    for d in rows:
        # One test a month, so the month names it. Keeping the id stable is
        # what lets a student's chosen date follow College Board's changes.
        d['id'] = 'sat-' + d['testDate'][:7]
        d['region'] = ['US', 'International']
    return confirmed, rows


def main():
    confirmed, rows = parse(fetch())
    if len(confirmed) < 3:
        sys.exit('Found only %d confirmed dates on %s; the page may have changed. '
                 'Nothing was written.' % (len(confirmed), URL))

    meta = {
        'source': 'College Board, satsuite.collegeboard.org/sat/dates-deadlines',
        'url': URL,
        'checkedAt': dt.date.today().isoformat(),
        'verified': True
    }
    ordered = [{k: d[k] for k in ('id', 'testDate', 'registrationDeadline', 'lateDeadline',
                                  'confirmed', 'region')} for d in rows]

    # Nothing to do when College Board has not changed anything: the files keep
    # the date the list last changed, and the weekly run makes no commit.
    try:
        with open(JSON_OUT, encoding='utf-8') as f:
            if json.load(f).get('dates') == ordered:
                print('No change: %d dates, same as before.' % len(ordered))
                return
    except (OSError, ValueError):
        pass

    with open(JSON_OUT, 'w', encoding='utf-8', newline='\n') as f:
        json.dump({'meta': meta, 'dates': ordered}, f, ensure_ascii=False, indent=2)
        f.write('\n')

    lines = ',\n'.join('  ' + json.dumps(d, ensure_ascii=False) for d in ordered)
    js = """/* ==========================================================================
   SAT test dates — generated by tools/update_exam_dates.py from College
   Board's dates-and-deadlines page. Do not edit by hand: the weekly workflow
   (.github/workflows/exam-dates.yml) rewrites this file and exam-dates.json.

   confirmed: true   a date with its registration and late deadlines
   confirmed: false  an anticipated date for next year, deadlines not yet out

   The app also fetches exam-dates.json from the repository when it starts
   (js/modules/exam-dates.js), so a copy that has not been updated still
   shows the newest dates.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.examDatesMeta = %s;

JTS.data.examDates = [
%s
];
""" % (json.dumps(meta, ensure_ascii=False), lines)
    with open(JS_OUT, 'w', encoding='utf-8', newline='\n') as f:
        f.write(js)

    print('%d dates (%d confirmed) written, checked %s' % (len(rows), len(confirmed), meta['checkedAt']))
    for d in ordered:
        print('  ', d['testDate'], 'confirmed' if d['confirmed'] else 'anticipated',
              d['registrationDeadline'] or '')


if __name__ == '__main__':
    main()
