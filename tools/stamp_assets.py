"""Stamp every local script and stylesheet in index.html with a version.

    python tools/stamp_assets.py

Browsers keep their own copies of js/, css/ and i18n/ files. After an
update they can mix a new file with an old one (new CSS, old JS), and the
page breaks until a hard reload. Each file is linked as `file.js?v=<stamp>`
instead, where the stamp is a hash of that file's contents: a changed file
gets a new address and is fetched fresh, an unchanged one stays cached.

Run it before each commit that changes a script or stylesheet.
"""
import hashlib
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(ROOT, 'index.html')
REF = re.compile(r'((?:src|href)=")((?:js|css|i18n)/[^"?]+)(?:\?v=[0-9a-f]*)?(")')


def stamp(match):
    path = os.path.join(ROOT, match.group(2))
    try:
        with open(path, 'rb') as f:
            v = hashlib.sha1(f.read()).hexdigest()[:10]
    except OSError:
        return match.group(0)
    return '%s%s?v=%s%s' % (match.group(1), match.group(2), v, match.group(3))


def main():
    with open(INDEX, encoding='utf-8') as f:
        html = f.read()
    out = REF.sub(stamp, html)
    if out != html:
        with open(INDEX, 'w', encoding='utf-8', newline='') as f:
            f.write(out)
        print('index.html: asset versions updated')
    else:
        print('index.html: asset versions already current')


if __name__ == '__main__':
    main()
