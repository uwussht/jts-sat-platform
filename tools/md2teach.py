"""Turn the 36-class course Markdown into js/data/programme-teach.js.

Usage:  pip install markdown
        python tools/md2teach.py "SAT 36-Lesson Course.md" js/data/programme-teach.js
"""
import json, re, sys
import markdown

src, out = sys.argv[1], sys.argv[2]
text = open(src, encoding='utf-8').read().replace('\r\n', '\n')

marker = re.compile(r'^Week (\d+) · Class (\d+) · (RW|Math)\s*$', re.M)
footer = text.find('\nTick a lesson to mark it done')
if footer > 0:
    text = text[:footer]

hits = list(marker.finditer(text))
lessons = []
for i, m in enumerate(hits):
    end = hits[i + 1].start() if i + 1 < len(hits) else len(text)
    chunk = text[m.end():end].strip('\n')
    title_m = re.match(r'### (.+)\n', chunk)
    title = title_m.group(1).strip()
    body = chunk[title_m.end():]
    body = re.sub(r'\\\n', '  \n', body)        # backslash line breaks
    body = body.replace('\\<', '&lt;').replace('\\>', '&gt;')
    # The course nests lists three spaces deep; Python-Markdown wants four.
    body = re.sub(r'^ {2,3}(?=[-*] |\d+\. )', '    ', body, flags=re.M)
    html = markdown.markdown(body, extensions=['tables'])
    html = re.sub(r'<h4>(.*?) (about \d+ min)</h4>',
                  r'<h4>\1 <span class="lw-mins">\2</span></h4>', html)
    first_h4 = html.find('<h4>')
    lead, rest = (html[:first_h4], html[first_h4:]) if first_h4 > 0 else ('', html)
    lessons.append({
        'code': 'C' + m.group(2), 'week': int(m.group(1)), 'n': int(m.group(2)),
        'section': 'math' if m.group(3) == 'Math' else 'rw',
        'title': title, 'lead': lead.strip(), 'html': rest.strip()
    })

assert len(lessons) == 24, len(lessons)

js = ['''/* ==========================================================================
   The full written lesson for each of the 24 classes.

   Generated from the school's course document ("SAT 36-Lesson Course"). Each
   entry is the explanation a teacher walks through in class: `lead` is the
   opening paragraph and `html` the numbered parts. English only for now;
   the screens fall back to English in every interface language.

   The Challenge classes (25–36) are timed hard-module sets and have no
   written lesson here.

   Loaded after js/data/programme-drills.js.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme.teach = {''']
for l in lessons:
    js.append('  %s: {' % json.dumps(l['code']))
    js.append('    lead: %s,' % json.dumps(l['lead'], ensure_ascii=False))
    js.append('    html: %s' % json.dumps(l['html'], ensure_ascii=False))
    js.append('  },')
js[-1] = '  }'
js.append('};\n')
open(out, 'w', encoding='utf-8', newline='\n').write('\n'.join(js))

for l in lessons:
    print(l['code'], l['week'], l['section'], '|', l['title'], '|', len(l['html']))
