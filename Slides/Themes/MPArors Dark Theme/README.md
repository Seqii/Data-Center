# MPArors Dark • Slidev

An editable Slidev project based on **MPArors Dark Theme.pptx**, for Team 3926 programming lessons. The 11 source layouts are recreated with CSS and Vue. Three additional layouts support images and code. All fonts and the original team logo are included locally.

## Open the project

On this Mac, double-click **Start Slides.command**. It opens the example deck in your browser. Keep the Terminal window open while editing. Press Control-C in that window to stop the preview.

Or open this folder in your editor and run:

```sh
npm run dev
```

Edit **slides.md** and save. The browser updates automatically. Use the arrow keys to change slides, `o` for the overview, and `p` for presenter mode. Slidev also exposes these views in its navigation menu.

Dependencies are installed in the delivered Downloads folder. On a new computer or after extracting the source ZIP, install **Node.js 22.12 or newer** and run `npm ci` once before `npm run dev`.

## Project structure

```text
THEMEE/
├── slides.md                    # 14 examples with programming lesson content
├── reference.md                 # The 11 original layout specimens, in source order
├── Start Slides.command         # Mac launcher
├── package.json / package-lock.json
├── theme/
│   ├── package.json             # Theme defaults, local fonts, 16:9 canvas
│   ├── layouts/                 # One Vue file per layout, plus default/cover aliases
│   ├── components/              # Shared frame, logo placement, image handling
│   ├── styles/                  # Fonts, design tokens, layouts, code styling
│   ├── setup/                   # Custom Shiki syntax colors
│   └── assets/                  # Original logo and licensed local WOFF2 fonts
├── public/images/               # Your lesson photos and screenshots
├── templates/lesson.md          # Copy into the project root for a new lesson
├── scripts/export.mjs           # PDF export using local Chrome when available
└── docs/
    ├── layouts.md              # Layout names, slots, examples, and content limits
    └── design-notes.md         # Measurements, palette, fonts, source mapping
```

## Start another lesson

Copy `templates/lesson.md` into the project root as `lesson-02.md`. Run:

```sh
npx slidev lesson-02.md --open --port 3927
```

Or duplicate this entire folder and edit its `slides.md`. To share the same theme across multiple projects, point each deck's first frontmatter block to this `theme/` directory, for example `theme: ../THEMEE/theme`. Keep the theme's subfolders together. [Slidev supports local theme paths](https://sli.dev/guide/theme-addon).

## Common edits

- **Text:** edit Markdown headings, paragraphs, lists, and code fences in `slides.md`.
- **Layout:** set `layout:` in that slide's frontmatter. See `docs/layouts.md`.
- **Images:** add files to `public/images/`, then set `image: /images/your-photo.png` and descriptive `alt:` text. `fit: contain` preserves the full image; `fit: cover` crops to fill the region.
- **Branding:** the source theme's logos are on by default. Add `brand: false` to an individual slide to hide its logo treatment.
- **Colors and typography:** edit `theme/styles/tokens.css`. The source's subtitle blue is intentionally preserved.
- **Code colors:** edit `theme/setup/mparors-dark.json`; restart the preview after changing the highlighter configuration. `theme/styles/code.css` controls code size, padding, and the accent rule.
- **Longer content:** prefer another slide. `class: compact` slightly reduces standard body and full-width code text when needed.

## Build and export

```sh
npm run build       # Creates dist/ for a static web host
npm run export      # Creates lesson.pdf
npm run reference   # Opens the original layout specimens
```

The dependency lockfile pins the tested versions. A Floating Vue override preserves compatibility with Slidev’s code tooltip integration.

The export script uses installed Chrome on macOS, Windows, or Linux when it finds it; otherwise it uses Playwright's Chromium. If no browser is available, run `npx playwright install chromium` once. To export another lesson, run `node scripts/export.mjs lesson-02.md --output lesson-02.pdf`.

Serve `dist/` with an HTTP server or static host; opening `dist/index.html` directly from the filesystem does not run a Slidev app. Fonts and slide assets load locally, so an installed project does not need a font CDN.

The example Java snippets teach language concepts and are not a complete deployable robot program. Replace them with code from your team's current robot project when preparing a robot-specific lesson.
