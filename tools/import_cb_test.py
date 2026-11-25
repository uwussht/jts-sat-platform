"""Turn a College Board practice test export into a JTS paper file.

    python tools/import_cb_test.py <test.json> <paper-id>

The export is the JSON + figures/ folder of one linear (non-adaptive)
practice test: questions with LaTeX between $...$, Markdown tables in
choices, figures as PNGs. Out come

    js/data/papers/<paper-id>.json     the paper, in the picture/export layout
                                       that JTS.data.loadPaperFiles reads
    assets/sat/<paper-id>/*.png        its figures

The linear test has 33 Reading and Writing and 27 Math questions a module.
It is sat here the way the digital SAT is: adaptive, 27 + 27 Reading and
Writing (32 minutes a module) and 22 + 22 Math (35 minutes). Out of its 120
questions the file names, in "routes":

    rw1, m1                  module 1: a spread drawn from the test's module 1
    rw2-easier, rw2-harder   module 2, by the module 1 result: the easiest and
    m2-easier,  m2-harder    the hardest of what is left

The test carries no difficulty labels. College Board orders the questions
easiest to hardest: in Reading and Writing within each question type, in
Math across the module. A question's place in that order is its difficulty.

Explanations are left out, as for every paper. The paper is marked as the
full diagnostic, so it is offered on #/diagnostic and not in the papers list.
"""
import json
import re
import shutil
import sys
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

COUNTS = {'rw': 27, 'math': 22}
# Module 1 accuracy that routes to the harder module 2.
THRESHOLDS = {'rw': 0.8, 'math': 0.7}
RW_DOMAINS = ['rw.cs', 'rw.ii', 'rw.sec', 'rw.ei']

# Math has no labels in the export; these were read off each question.
MATH_SKILLS = {
    'm1': ['linear', 'statistics', 'nonlinear', 'inequalities', 'functions', 'units',
           'linear', 'linear', 'functions', 'linear', 'inequalities', 'expressions',
           'functions', 'area-volume', 'functions', 'linear', 'expressions', 'nonlinear',
           'statistics', 'linear', 'nonlinear', 'percentages', 'circles', 'trig-ratios',
           'functions', 'functions', 'triangles'],
    'm2': ['linear', 'triangles', 'probability', 'functions', 'functions', 'systems',
           'percentages', 'expressions', 'ratios', 'linear', 'linear', 'nonlinear',
           'ratios', 'nonlinear', 'statistics', 'area-volume', 'nonlinear', 'linear',
           'linear', 'expressions', 'systems', 'triangles', 'functions', 'functions',
           'circles', 'statistics', 'systems'],
}
MATH_DOMAIN = {
    'linear': 'alg', 'systems': 'alg', 'inequalities': 'alg',
    'expressions': 'adv', 'functions': 'adv', 'nonlinear': 'adv',
    'ratios': 'psda', 'percentages': 'psda', 'units': 'psda', 'statistics': 'psda',
    'probability': 'psda',
    'triangles': 'geo', 'circles': 'geo', 'area-volume': 'geo', 'trig-ratios': 'geo',
    'radians': 'geo',
}


def rw_skill(q):
    """Reading and Writing skill from the wording of the question."""
    s = q['question'].lower()
    p = (q.get('passage') or '').lower()
    if 'conventions of standard english' in s:
        # Punctuation between clauses is Boundaries; verb and pronoun forms
        # are Form, Structure, and Sense.
        choices = ' '.join((q.get('choices') or {}).values())
        if re.search(r'[,;:.—-]', choices):
            return 'rw.sec.boundaries'
        return 'rw.sec.form-structure-sense'
    if 'transition' in s:
        return 'rw.ei.transitions'
    if 'notes' in s or 'student wants to' in s:
        return 'rw.ei.rhetorical-synthesis'
    if 'text 1' in p and 'text 2' in p:
        return 'rw.cs.cross-text-connections'
    if 'precise word or phrase' in s or 'most nearly mean' in s:
        return 'rw.cs.words-in-context'
    if 'main purpose' in s or 'function of the' in s or 'overall structure' in s:
        return 'rw.cs.text-structure-purpose'
    if q.get('figure') or 'graph' in s or 'table' in s or 'data' in s:
        return 'rw.ii.evidence-quantitative'
    if 'quotation' in s or 'finding' in s or 'support' in s or 'weaken' in s or 'illustrate' in s:
        return 'rw.ii.evidence-textual'
    if 'logically completes' in s or 'inferred' in s:
        return 'rw.ii.inferences'
    return 'rw.ii.central-ideas'


# ------------------------------------------------------------- LaTeX to HTML
def latex(src):
    """The small part of LaTeX the test uses, as the HTML the app already
    styles: <span class="frac">, a radical with an overline, <sup>, <i>."""
    pos = 0

    def group():
        nonlocal pos
        if pos < len(src) and src[pos] == '{':
            depth, start = 0, pos
            while pos < len(src):
                if src[pos] == '{':
                    depth += 1
                elif src[pos] == '}':
                    depth -= 1
                    if depth == 0:
                        pos += 1
                        return render(src[start + 1:pos - 1])
                pos += 1
            return render(src[start + 1:])
        if pos < len(src) and src[pos] == '\\':
            m = re.match(r'\\[a-zA-Z]+', src[pos:])
            if m:
                pos += len(m.group(0))
                return SYMBOLS.get(m.group(0), m.group(0)[1:])
        ch = src[pos] if pos < len(src) else ''
        pos += 1
        return atom(ch)

    def bracket():
        nonlocal pos
        if pos < len(src) and src[pos] == '[':
            end = src.index(']', pos)
            inner = src[pos + 1:end]
            pos = end + 1
            return render(inner)
        return None

    out = []
    while pos < len(src):
        ch = src[pos]
        if ch == '\\':
            m = re.match(r'\\([a-zA-Z]+|.)', src[pos:])
            cmd = m.group(0)
            pos += len(cmd)
            if cmd == '\\frac':
                a = group()
                b = group()
                out.append('<span class="frac"><span>%s</span><span>%s</span></span>' % (a, b))
            elif cmd == '\\sqrt':
                index = bracket()
                body = group()
                pre = '<sup>%s</sup>' % index if index else ''
                out.append('%s&radic;<span style="text-decoration:overline">%s</span>' % (pre, body))
            elif cmd in ('\\left', '\\right'):
                continue
            elif cmd == '\\text':
                out.append(group())
            elif cmd == '\\,':
                out.append('&thinsp;')
            else:
                out.append(SYMBOLS.get(cmd, escape(cmd[1:])))
        elif ch == '^':
            pos += 1
            out.append('<sup>%s</sup>' % group())
        elif ch == '_':
            pos += 1
            out.append('<sub>%s</sub>' % group())
        elif ch == '{':
            out.append(group())
        elif ch == '}':
            pos += 1
        else:
            pos += 1
            out.append(atom(ch))
    return ''.join(out)


SYMBOLS = {
    '\\le': ' &le; ', '\\leq': ' &le; ', '\\ge': ' &ge; ', '\\geq': ' &ge; ',
    '\\cdot': ' &middot; ', '\\times': ' &times; ', '\\pi': '&pi;', '\\theta': '&theta;',
    '\\circ': '&deg;', '\\ne': ' &ne; ', '\\neq': ' &ne; ', '\\pm': '&plusmn;',
    '\\angle': '&ang;', '\\triangle': '&#9651;', '\\degree': '&deg;', '\\%': '%',
    '\\$': '$', '\\{': '{', '\\}': '}', '\\ ': ' ', '\\overline': '',
    '\\tan': 'tan', '\\sin': 'sin', '\\cos': 'cos',
}


def atom(ch):
    if re.match(r'[A-Za-z]', ch):
        return '<i>%s</i>' % ch
    if ch == '-':
        return '&minus;'
    if ch in '=<>+':
        return ' %s ' % escape(ch)
    return escape(ch, quote=False)


def render(src):
    return latex(src)


def text(s):
    """Prose with inline tags (<u>, <i>, <sub>) kept, math converted, \\$ as $."""
    if s is None:
        return ''
    parts = re.split(r'(?<!\\)\$(.+?)(?<!\\)\$', s)
    out = []
    for i, part in enumerate(parts):
        if i % 2:
            html = latex(part)
            html = re.sub(r' +', ' ', html).strip()
            out.append('<span class="math">%s</span>' % html)
        else:
            out.append(part.replace('\\$', '$'))
    return ''.join(out)


def paragraphs(s):
    if not s:
        return ''
    if '|' in s and re.search(r'^\|', s, re.M):
        return md_table(s)
    return ''.join('<p>%s</p>' % text(p).replace('\n', '<br>') for p in re.split(r'\n\s*\n', s.strip()))


def md_table(s):
    rows = [r.strip() for r in s.strip().splitlines() if r.strip()]
    rows = [r for r in rows if not re.match(r'^\|?\s*:?-+', r)]
    cells = [[c.strip() for c in r.strip('|').split('|')] for r in rows]
    head = ''.join('<th>%s</th>' % text(c) for c in cells[0])
    body = ''.join('<tr>%s</tr>' % ''.join('<td>%s</td>' % text(c) for c in r) for r in cells[1:])
    return '<table class="q-table"><thead><tr>%s</tr></thead><tbody>%s</tbody></table>' % (head, body)


def data_table(fig):
    head = ''.join('<th>%s</th>' % text(str(c)) for c in fig['columns'])
    body = ''.join('<tr>%s</tr>' % ''.join('<td>%s</td>' % text(str(c)) for c in r) for r in fig['rows'])
    title = '<caption>%s</caption>' % text(fig['title']) if fig.get('title') else ''
    return '<table class="q-table">%s<thead><tr>%s</tr></thead><tbody>%s</tbody></table>' % (title, head, body)


def figure(fig):
    if not fig:
        return ''
    if fig.get('image'):
        alt = fig.get('title') or fig.get('description') or ''
        return '<p class="q-figure"><img src="%s" alt="%s"></p>' % (
            Path(fig['image']).name, escape(alt))
    if fig.get('columns'):
        return data_table(fig)
    return ''


def given(s):
    if not s:
        return ''
    lines = [text(l if '$' in l else l) for l in s.split('\n')]
    return '<p class="q-given">%s</p>' % '<br>'.join(lines)


def convert(q):
    section = 'math' if q['section'] == 'Math' else 'rw'
    mod = q['module']
    out = {
        'id': '%s-m%d-%02d' % (section, mod, q['number']),
        'section': section, 'module': mod, 'difficulty': 2,
    }
    if section == 'rw':
        out['skillId'] = rw_skill(q)
        passage = ''
        if q.get('intro'):
            passage += '<p class="q-intro">%s</p>' % text(q['intro'])
        passage += paragraphs(q.get('passage'))
        if q.get('source'):
            passage += '<p class="q-source">%s</p>' % text(q['source'])
        passage += figure(q.get('figure'))
        out['passageHtml'] = passage
        out['stemHtml'] = '<p>%s</p>' % text(q['question'])
    else:
        name = MATH_SKILLS['m%d' % mod][q['number'] - 1]
        out['skillId'] = 'm.%s.%s' % (MATH_DOMAIN[name], name)
        stem = ''
        if q.get('intro'):
            stem += '<p>%s</p>' % text(q['intro'])
        stem += figure(q.get('figure'))
        stem += given(q.get('given'))
        stem += paragraphs(q['question'])
        out['stemHtml'] = stem
    if q['type'] == 'multiple_choice':
        out['type'] = 'mcq'
        images = q.get('choice_images') or {}
        choices = []
        for k in 'ABCD':
            if k in images:
                html = '<img src="%s" alt="%s">' % (Path(images[k]).name, 'Choice ' + k)
            else:
                c = q['choices'][k]
                html = md_table(c) if c.lstrip().startswith('|') else text(c)
            choices.append({'label': k, 'html': html})
        out['choices'] = choices
        out['correctAnswer'] = q['answer']
    else:
        out['type'] = 'spr'
        out['correctAnswer'] = str(q['answer'])
        out['acceptedAnswers'] = [str(a) for a in q.get('accepted_answers') or []]
    return out


def rank(items):
    """Difficulty 0..1 for each converted question, from its place in the
    test's own easiest-to-hardest order."""
    r = {}
    for q in items:
        if q['section'] == 'math':
            same = [x for x in items if x['section'] == 'math' and x['module'] == q['module']]
        else:
            same = [x for x in items if x['section'] == 'rw' and x['module'] == q['module']
                    and x['skillId'] == q['skillId']]
        same.sort(key=lambda x: x['id'])
        r[q['id']] = (same.index(q) + 0.5) / len(same)
    return r


def spread(group, keep):
    """`keep` of a group ordered easy to hard, evenly across it."""
    if keep >= len(group):
        return list(group)
    step = len(group) / keep
    return [group[int(i * step + step / 2)] for i in range(keep)]


def routes(items, r):
    out = {}
    for section, key in (('rw', 'rw'), ('math', 'm')):
        n = COUNTS[section]
        sec = [q for q in items if q['section'] == section]
        first = [q for q in sec if q['module'] == 1]
        if section == 'rw':
            # Every question type keeps its share of module 1.
            by_skill = {}
            for q in first:
                by_skill.setdefault(q['skillId'], []).append(q)
            quota = {k: len(v) * n / len(first) for k, v in by_skill.items()}
            take = {k: int(v) for k, v in quota.items()}
            for k in sorted(quota, key=lambda k: quota[k] - take[k], reverse=True)[:n - sum(take.values())]:
                take[k] += 1
            m1 = [q for k, v in by_skill.items() for q in spread(sorted(v, key=lambda x: r[x['id']]), take[k])]
        else:
            m1 = spread(sorted(first, key=lambda x: r[x['id']]), n)
        rest = [q for q in sec if q not in m1]
        ordered = sorted(rest, key=lambda x: r[x['id']])
        easier, harder = ordered[:n], ordered[-n:]

        def order(lst):
            if section == 'math':
                return [q['id'] for q in sorted(lst, key=lambda x: r[x['id']])]
            skills = [q['skillId'] for q in items]  # the test's own type order
            return [q['id'] for q in sorted(lst, key=lambda x: (
                RW_DOMAINS.index(x['skillId'].rsplit('.', 1)[0]), skills.index(x['skillId']), r[x['id']]))]
        out[key + '1'] = order(m1)
        out[key + '2-easier'] = order(easier)
        out[key + '2-harder'] = order(harder)
    return out


def main():
    src = Path(sys.argv[1])
    paper_id = sys.argv[2]
    data = json.loads(src.read_text(encoding='utf-8'))
    questions = sorted(data['questions'], key=lambda q: (
        q['section'] != 'Reading and Writing', q['module'], q['number']))
    paper = {
        'id': paper_id,
        'title': 'Official SAT Practice Test 6',
        'year': None,
        'diagnostic': True,
        'note': 'College Board practice test %s, sat adaptively.' % data['test'].get('form_code', ''),
        'thresholds': THRESHOLDS,
        'questions': [convert(q) for q in questions],
    }
    r = rank(paper['questions'])
    for q in paper['questions']:
        q['difficulty'] = 1 if r[q['id']] < 0.34 else 2 if r[q['id']] < 0.67 else 3
    paper['routes'] = routes(paper['questions'], r)
    out = ROOT / 'js' / 'data' / 'papers' / (paper_id + '.json')
    with open(out, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(paper, f, ensure_ascii=False, indent=1)
        f.write('\n')
    assets = ROOT / 'assets' / 'sat' / paper_id
    assets.mkdir(parents=True, exist_ok=True)
    for png in (src.parent / 'figures').glob('*.png'):
        shutil.copyfile(png, assets / png.name)
    print('%d questions -> %s; figures -> %s' % (len(paper['questions']), out, assets))


if __name__ == '__main__':
    main()
