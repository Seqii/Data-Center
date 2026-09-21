# Layout guide

Set `layout:` in the YAML frontmatter before each slide. Content before the first named slot is the default slot. A named slot begins with a line such as `::left::`. Keep a blank line before and after slot markers and code fences.

| Layout | Default content | Named slots | Best use |
| --- | --- | --- | --- |
| `title` / `cover` | `# Title` | `subtitle` | Lesson opener with full-width white logo strip |
| `text` / `default` | `# Heading`, paragraphs, lists | — | Standard explanation with corner badge |
| `caption` | Caption paragraph | `image` | Large image and bottom caption; also accepts `image:` |
| `section` | `# Section` | — | Centered heading, blue divider, two corner badges |
| `two-cols` | `# Heading` | `left`, `right` | Balanced comparison |
| `title-only` | `# Heading` | — | Heading above an open canvas |
| `one-column` | `# Heading` and narrow body | `right` | Short explanation beside a visual or code |
| `main-point` | `# Main point` | — | Large left-aligned takeaway |
| `section-description` | `# Title` | `subtitle`, `right` | Title and description on split charcoal backgrounds |
| `big-number` | `# Number` | `caption` | One number with explanation |
| `blank` | Optional HTML or components | — | Entire canvas with corner badge |
| `image` | `# Heading` | `image`, `caption` | Heading, large image, small caption |
| `code` | `# Heading` | `code`, `note` | Code example with optional note |
| `code-split` | `# Heading` | `left`, `right` | Explanation on left, code on right |

`title` and `text` have `cover` and `default` aliases so slides without an explicit layout use this theme. The first slide defaults to `cover` and subsequent slides to `default`.

## Text

```md
---
layout: text
---

# Naming variables

A name should explain what the value represents.

- `targetSpeed` describes a request.
- `measuredSpeed` describes a reading.
```

## Two columns

```md
---
layout: two-cols
---

# Comparing values

::left::

## Requested

The value we ask for.

::right::

## Measured

The value a sensor reports.
```

## Code

````md
---
layout: code
---

# A return value

::code::

```java
static double square(double value) {
    return value * value;
}
```

::note::
`square(3.0)` returns `9.0`.
````

Use `java`, `cpp`, `python`, `json`, `yaml`, or other Shiki-supported language names on your code fences. Standard Slidev line highlighting works, such as a fence opener of ` ```java {2-3} ` (omit the surrounding spaces). The code layouts keep clear of the logo. Aim for about 10 lines at the default size, or fewer if the heading or note wraps. `code-split` uses a smaller type size and shorter lines.

## Image and caption

```md
---
layout: caption
image: /images/robot.jpg
alt: Our robot viewed from the front
fit: contain
---

The intake is mounted at the front of the robot.
```

Set `imageBackground: '#FFFFFF'` to place a transparent image on white with a little padding. The examples use this for the team logo.

For Vue content instead of a file, omit `image:` and use the `::image::` slot. Assets under `public/` are served from the root and handled by the theme for relative-base builds. When using raw Markdown images in other slots, use a relative path such as `![Description](./public/images/robot.jpg)` so Vite can bundle it.

## Content limits

This is a presentation canvas, not a scrolling document. The source dimensions and badge placements reserve space:

- Cover: one short title, up to two lines; one subtitle line.
- Text: a short heading and roughly five short bullets, depending on wrapping.
- Section: one heading line so it stays above the divider.
- Two columns: roughly 35–50 words per column at source size.
- Main point: a brief phrase over two or three lines.
- Section description: a short title, one subtitle, and a few short paragraphs.
- Big number: a short value, such as `3926` or `75%`.
- Caption: one line or a short two-line caption within the reserved lower region.

Long code blocks scroll in the live browser. A PDF shows only the visible part, so split long examples before exporting. The bottom-right 139 × 139 px region belongs to the badge; keep custom elements outside it or use `brand: false`.
