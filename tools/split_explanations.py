"""Split the explanations out of the big question banks, for the built site.

    python3 tools/split_explanations.py <questions folder>

tools/build.py runs it on dist/js/data/questions/ (and web/Dockerfile on its
own copy); the files in the repository stay whole, and the site works with
them unsplit too (Live Server, any plain local server).

For every index.json entry marked "defer": true, each question's explanation,
distractors and methods -- about 70% of the file, and needed only once an
answer has been checked -- move into small files under xp/, about 40
questions each, grouped by topic so one practice set touches few of them.
The question keeps a pointer, "xp": "xp/<file>-<n>.json", and JTS.explain
(js/data/questions.js) fetches that file when an explanation is opened.

Each xp/ file is {"<question id>": {explanation, distractors, methods}}.
Entries with an assetBase or idPrefix are left alone: their ids and picture
paths are rewritten as they load, and they are small.
"""
import json
import re
import sys
from pathlib import Path

FIELDS = ('explanation', 'distractors', 'methods')
PER_FILE = 40


def dump(data):
    return json.dumps(data, ensure_ascii=False, separators=(',', ':'))


def split(folder):
    folder = Path(folder)
    index = json.loads((folder / 'index.json').read_text(encoding='utf-8'))
    entries = [e for e in index.get('files', [])
               if isinstance(e, dict) and e.get('defer')
               and not e.get('assetBase') and not e.get('idPrefix')]
    (folder / 'xp').mkdir(exist_ok=True)
    before = after = moved = chunks = 0

    for entry in entries:
        path = folder / entry['file']
        text = path.read_text(encoding='utf-8')
        before += len(text.encode('utf-8'))
        data = json.loads(text)
        items = data if isinstance(data, list) else (data or {}).get('questions', [])

        # Topic by topic, in file order inside each topic.
        by_topic = {}
        for q in items:
            if isinstance(q, dict) and q.get('id') and any(f in q for f in FIELDS):
                by_topic.setdefault(str(q.get('skillId') or q.get('skill') or ''), []).append(q)

        base = re.sub(r'[^A-Za-z0-9_-]', '_', re.sub(r'\.json$', '', entry['file'], flags=re.I))
        n = 0
        for group in by_topic.values():
            for i in range(0, len(group), PER_FILE):
                n += 1
                name = f'xp/{base}-{n}.json'
                chunk = {}
                for q in group[i:i + PER_FILE]:
                    chunk[q['id']] = {f: q.pop(f) for f in FIELDS if f in q}
                    q['xp'] = name
                    moved += 1
                (folder / name).write_text(dump(chunk), encoding='utf-8')
                chunks += 1

        lean = dump(data)
        after += len(lean.encode('utf-8'))
        path.write_text(lean, encoding='utf-8')

    print(f'Split {moved} explanations from {len(entries)} files into {chunks} xp files: '
          f'{before / 1048576:.1f} MiB -> {after / 1048576:.1f} MiB')


if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit('usage: split_explanations.py <questions folder>')
    split(sys.argv[1])
