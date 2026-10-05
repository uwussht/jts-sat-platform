"""Write the written lessons into the unit files from the school's course page.

Usage:  python tools/html2teach.py "SAT 36-Lesson Course.html"

Each unit's lesson sits in js/data/units/U<n>.js between the lines
/* GENERATED: lesson (tools/html2teach.py) */ and /* END GENERATED */.
This tool replaces only what is between those markers; the rest of each
unit file (its place in the course, titles, summaries) is left as it is.

The course page ("SAT 36-Lesson Course") holds the 24 written lessons as
<article class="lesson" id="lesson-N">. Its own markup keeps what a Markdown
copy loses: answer choices on their own lines, worked steps line by line,
and the Tip / Common mistake notes as boxes. Each lesson becomes

    { lead: '<p>…</p>',                 the opening paragraph
      parts: [{ title, mins, html }] }  one entry per "Part N · …" heading

so the unit page can show the lesson a part at a time. The wording is the
course page's, unchanged; only the markup is tidied:

- "A) x  B) y  C) z  D) w" choice lines become a lettered list;
- other worked lines keep their line breaks;
- notes are tagged by kind (tip, mistake, other) for their colour;
- inline colours and sizes from the page are dropped.
"""
import html as H
import json
import os
import re
import sys

src = sys.argv[1]
UNITS = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'js', 'data', 'units')
page = open(src, encoding='utf-8').read()
articles = re.findall(r'<article class="lesson" id="lesson-(\d+)">(.*?)</article>', page, re.S)
assert len(articles) == 24, len(articles)

CHOICES = re.compile(r'^\s*A\)\s*(.+?)\s+B\)\s*(.+?)\s+C\)\s*(.+?)\s+D\)\s*(.+?)\s*$', re.S)


def choices(m):
    inner = m.group(1).replace('&nbsp;', ' ')
    c = CHOICES.match(re.sub(r'<br\s*/?>', ' ', inner))
    if c:
        items = ''.join('<li><b>%s</b> %s</li>' % (k, v.strip()) for k, v in zip('ABCD', c.groups()))
        return '<ol class="lw-opts">%s</ol>' % items
    lines = [x.strip() for x in re.split(r'<br\s*/?>', inner) if x.strip()]
    return '<div class="lw-work">%s</div>' % ''.join('<div>%s</div>' % x for x in lines)


def note(m):
    lead = H.unescape(re.sub(r'<[^>]+>', '', m.group(2))).strip().lower()
    kind = 'tip' if lead.startswith('tip') else 'mistake' if ('mistake' in lead or 'trap' in lead) else 'info'
    return '<p class="lw-note lw-%s"><b>%s</b>' % (kind, m.group(2))


def tidy(x):
    x = re.sub(r'\s+style="[^"]*"', '', x)
    x = re.sub(r'<span class="choices">(.*?)</span>', choices, x, flags=re.S)
    x = re.sub(r'<p class="note"><b>((.*?))</b>', note, x, flags=re.S)
    x = x.replace('<div class="tablewrap">', '<div class="lw-table">')
    return x.strip()


lessons = []
for n, body in articles:
    body = re.sub(r'<div class="eyebrow".*?</div>', '', body, count=1, flags=re.S)
    body = re.sub(r'<h3>.*?</h3>', '', body, count=1, flags=re.S)
    heads = list(re.finditer(r'<h4>(.*?)</h4>', body, re.S))
    lead = tidy(body[:heads[0].start()])
    parts = []
    for i, h in enumerate(heads):
        end = heads[i + 1].start() if i + 1 < len(heads) else len(body)
        head = h.group(1)
        mins = re.search(r'<span>(.*?)</span>', head)
        title = H.unescape(re.sub(r'<[^>]+>', '', re.sub(r'<span>.*?</span>', '', head))).strip()
        parts.append({'title': title, 'mins': mins.group(1).strip() if mins else '',
                      'html': tidy(body[h.end():end])})
    lessons.append({'code': 'U' + n, 'lead': lead, 'parts': parts})

START = '  /* GENERATED: lesson (tools/html2teach.py) */'
END = '  /* END GENERATED */'
for l in lessons:
    path = os.path.join(UNITS, l['code'] + '.js')
    text = open(path, encoding='utf-8').read()
    block = '\n'.join([
        START,
        '  lesson: {',
        '    lead: %s,' % json.dumps(l['lead'], ensure_ascii=False),
        '    parts: [',
        ',\n'.join('      ' + json.dumps(p, ensure_ascii=False) for p in l['parts']),
        '    ]',
        '  }',
        END])
    i, j = text.find(START), text.find(END)
    if i < 0 or j < 0:
        sys.exit('%s has no GENERATED markers; add them where the lesson goes.' % path)
    text = text[:i] + block + text[j + len(END):]
    open(path, 'w', encoding='utf-8', newline='\n').write(text)

for l in lessons:
    print(l['code'], len(l['parts']), 'parts:', ' / '.join(p['title'] for p in l['parts']).encode('ascii', 'replace').decode())
