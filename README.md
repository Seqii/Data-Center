# Data Center

A home for presentations, code examples, and useful resources. The light, responsive homepage uses React, Vite, Lucide icons, and Headless UI's accessible dialog and switch components. GitHub Pages serves the compiled HTML, CSS, and JavaScript alongside the Slidev presentations.

## Run the homepage

```sh
cd homepage
npm ci
npm run dev
```

To verify a production build, run `npm run build`. Preview it with `npm run preview`.
Slide links resolve on the deployed site; the homepage development server does not serve compiled decks.

## Edit in your browser

Turn on **Edit workspace** to change the introduction, add/edit/remove resources, or create a category by typing its name. Search and category filters work immediately.

Changes are saved in local storage for this browser and origin. This is a personal draft editor: it does not update GitHub or other visitors' pages. **Export** downloads `content.json`; replace `homepage/content.json` with that file and commit it to publish the changes. **Import** restores a JSON export into the browser. **Reset** restores the currently published content. Export before resetting if you want to keep your draft. Clearing browser storage removes drafts.

The build discovers every top-level `.md` deck except `README.md` in `Slides/FRC Code Training`, and `.java` files in `Code Examples`. New files become library entries automatically. Published entries override generated entries with matching IDs; `hiddenResourceIds` preserves removal of generated entries. Saved browser drafts are snapshots; reset them to see newly published content.

Edit `homepage/src/style.css` for appearance, `homepage/src/main.jsx` for behavior, and `homepage/scripts/catalog.mjs` for automatic catalog rules. Links accept relative paths or HTTP(S) URLs. Custom categories are supported without code changes.

## Deployment

`.github/workflows/deploy.yml` builds every training deck at its existing `/<deck>/` URL, builds the homepage, copies it into the same Pages artifact, and deploys on pushes to `main` or manual dispatch. Configure the repository's Pages source as **GitHub Actions**. The workflow handles both repository sites and owner `github.io` sites. Homepage assets use relative URLs.

Browser editing requires JavaScript. Shared authenticated editing would require a backend or GitHub integration; no credentials are stored in this static site.
