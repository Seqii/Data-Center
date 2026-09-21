# Source design notes

Source: the supplied **MPArors Dark Theme.pptx**, containing 11 example slides and 11 reusable slide layouts. Measurements came from its slide masters, layout definitions, and embedded media. The source was also rendered to inspect every composition. Document text was treated as reference content, not as instructions.

## Canvas and spacing

The source is 10 × 5.625 inches (720 × 405 points), exactly 16:9. This project uses a 960 × 540 logical canvas, so source points scale by 4/3. Slidev scales that canvas to the display.

- Standard content begins about 42.32 px from the left, including the source text-box inset.
- Standard heading begins about 56.32 px from the top.
- Body content begins about 130.59 px from the top.
- The source two-column text regions have roughly 74 px between their text insets.
- The bottom-right badge is about 139.32 × 139.32 px.
- The cover's white footer begins at about y=423.15, with a height of 116.85 px.
- Section headings center above a blue rule at y=301.3; the rule is 740 × 16.85 px.
- The description layout divides the canvas at 50%, with a shorter white logo strip below its left half.

## Colors

| Role | Value | Source |
| --- | --- | --- |
| Main background | `#212121` | Theme `lt1` mapped to background |
| Secondary background | `#303030` | Theme `dk2`, used on right half |
| Body text and logo strip | `#FFFFFF` | Theme `dk1` mapped to text |
| Muted text | `#ADADAD` | Theme `lt2` |
| Standard heading | `#6FA8DC` | Master heading override |
| Cover title | `#6D9EEB` | Cover layout override |
| Subtitle | `#3D85C6` | Cover and description overrides |
| Section divider | `#2266BF` | Section rectangle |
| Link / code function | `#4DD0E1` | Source hyperlink/accent color |

The additional code theme uses a darker `#181C22` reading area, the original blues, source orange `#FFAB40`, and a complementary muted green for strings. The source contains no code layout, so code colors and spacing are an extension of the supplied design.

## Fonts

- **Comfortaa Medium (500):** source headings. The cover uses **Comfortaa Bold (700)**.
- **Lexend Regular (400):** body text and subtitles.
- **JetBrains Mono:** added for code, because the source does not specify a code font.

The source declares Arial in generic theme defaults, but its actual master/layout overrides specify Comfortaa and Lexend. The project follows those overrides. Some PowerPoint text boxes carry autofit rules. The description layout uses the effective 36 pt heading size observed in the source rendering, while other headings use their nominal reusable master size. Browser and PowerPoint font metrics can produce small line-break or baseline differences.

Default sizes at the 960px canvas: cover 69.33px, standard heading 37.33px, body 24px, section 48px, main point 64px, two-column body 18.67px, narrow-column heading/body 32/16px. Smaller source sizes are preserved instead of redesigning the template.

The bundled Latin variable WOFF2 fonts include their SIL Open Font License files. Non-Latin text can fall back to system fonts; add the appropriate font subset if future lessons need another script.

## Assets and shapes

The original PNG logo is extracted unchanged from the supplied PPTX. Its crop for the corner penguin is implemented with CSS overflow and the source's 53.065% right crop. The white teardrop badge is approximated with CSS border radii and one square corner. Footer rectangles, the split background, and the blue divider are CSS. No slide uses a screenshot as its background.

The source includes slide-number placeholders colored the same as the background, partially outside the canvas. These invisible placeholders are omitted.

The blank, caption, and title-only layouts retain their empty areas. For more useful examples, `slides.md` fills the layouts with short Java lesson content; `reference.md` preserves the original specimen labels and order.

## Source mapping

1. Title Slide → `title`
2. Text Slide → `text`
3. Caption Slide → `caption`
4. Section header → `section`
5. Two Column → `two-cols`
6. Only title → `title-only`
7. One column → `one-column`
8. Main Point → `main-point`
9. Title Section and description → `section-description`
10. Big # → `big-number`
11. Blank → `blank`

Additional lesson layouts: `image`, `code`, and `code-split`.

Implementation references: [custom layouts](https://sli.dev/guide/write-layout), [local themes](https://sli.dev/guide/theme-addon), [local fonts](https://sli.dev/custom/config-fonts), and [Shiki setup](https://sli.dev/custom/config-highlighter).

The team logo remains the supplied team's artwork. The font licenses cover the font files only; this project does not grant third parties rights to the team branding.
