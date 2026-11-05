import { readdir, writeFile } from 'node:fs/promises';
const root = new URL('../../', import.meta.url);
const repository = process.env.GITHUB_REPOSITORY || 'Seqii/Data-Center';
const source = `https://github.com/${repository}/blob/main/`;
const tree = `https://github.com/${repository}/tree/main/`;
const decks = (await readdir(new URL('Slides/FRC Code Training/', root))).filter(f => f.endsWith('.md') && f !== 'README.md').sort();
const examples = (await readdir(new URL('Code Examples/', root))).filter(f => f.endsWith('.java')).sort();
const resources = [
  ...decks.map(file => ({ id: `deck-${file}`, title: file.slice(0, -3), category: 'Slides', description: 'FRC code training. Open the presentation and learn at your own pace.', url: `./${encodeURIComponent(file.slice(0, -3))}/`, tag: 'FRC TRAINING' })),
  ...examples.map(file => ({ id: `code-${file}`, title: file.replace('.java', '').replace(/([a-z])([A-Z])/g, '$1 $2'), category: 'Code', description: 'A practical Java example to read, experiment with, and make your own.', url: source + 'Code%20Examples/' + encodeURIComponent(file), tag: 'JAVA' })),
  {id: 'theme', title: 'MPArors Dark Theme', category: 'Resources', description: 'Layouts, typography, and reusable components for your next Slidev deck.', url: tree + 'Slides/Themes/MPArors%20Dark%20Theme', tag: 'SLIDEV THEME'},
  {id: 'slide-starter', title: 'Slide building blocks', category: 'Resources', description: 'Copy-and-paste slide patterns to get a new presentation started.', url: source + 'Slides/Copy-Paste%20Slides.txt', tag: 'TEMPLATE'}
];
await writeFile(new URL('../src/generated.json', import.meta.url), JSON.stringify({repository, resources}, null, 2));
