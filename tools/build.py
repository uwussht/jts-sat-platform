"""Build the static student site: python3 tools/build.py."""
import json
import shutil
from pathlib import Path

from stamp_assets import REF, stamp

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'
DIRECTORIES = ('css', 'js', 'i18n', 'assets')


def validate():
    html = (ROOT / 'index.html').read_text(encoding='utf-8')
    for match in REF.finditer(html):
        path = ROOT / match.group(2)
        if not path.is_file():
            raise ValueError(f'Missing resource: {match.group(2)}')

    for directory in DIRECTORIES:
        for path in (ROOT / directory).rglob('*.json'):
            data = json.loads(path.read_text(encoding='utf-8'))
            if path.name == 'index.json' and isinstance(data, dict):
                for item in data.get('files', []):
                    filename = item if isinstance(item, str) else item['file']
                    if not (path.parent / filename).is_file():
                        raise ValueError(f'{path.relative_to(ROOT)}: missing {filename}')
    return html


def main():
    # Validate before replacing the previous build. Source files stay untouched.
    html = validate()
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()
    for directory in DIRECTORIES:
        shutil.copytree(
            ROOT / directory, DIST / directory,
            ignore=shutil.ignore_patterns('.DS_Store', '__pycache__', '*.pyc'),
        )
    (DIST / 'index.html').write_text(REF.sub(stamp, html), encoding='utf-8')
    files = [path for path in DIST.rglob('*') if path.is_file()]
    size = sum(path.stat().st_size for path in files)
    print(f'Built dist/: {len(files)} files, {size / 1024 / 1024:.1f} MiB')


if __name__ == '__main__':
    main()
