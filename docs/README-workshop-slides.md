# Workshop Slides — Editor Guide

Two Slidev slide decks for the Gies AI For Impact Buildathon workshops.

## Live URLs

- **Mental Model (7 slides):** https://gies-ai-experiments.github.io/gies-buildathon/docs/slides-mental-model/dist/
- **Workshop Activity (10 slides):** https://gies-ai-experiments.github.io/gies-buildathon/docs/slides-workshop-activity/dist/

Arrow keys to navigate. Touch/swipe on mobile.

## Files to Edit

All content is in markdown. Edit these files, rebuild, commit, push — the site auto-deploys via GitHub Actions.

| Deck | Edit this file | What it covers |
|------|---------------|----------------|
| Mental Model | `docs/slides-mental-model/slides.md` | What is Copilot Studio, Agent vs Workflow, building blocks, connectors, levels, where to get help |
| Workshop Activity | `docs/slides-workshop-activity/slides.md` | I Do demo (Gies New Student Navigator), You Do activity (Buildathon Helper Agent), debrief |

Supporting markdown (not slide decks, but editable reference docs):
- `docs/workshop-slides-mental-model.md` — prose version of the mental model content
- `docs/workshop-activity-i-do-you-do.md` — detailed facilitator script with setup checklist

## How Slidev Works

Each slide is separated by `---` on its own line. Content between separators is one slide. You write markdown + HTML with UnoCSS utility classes for layout.

```markdown
---

# Slide Title

<div class="grid grid-cols-2 gap-8 mt-6">
<div>
Left column content
</div>
<div>
Right column content
</div>
</div>

---
```

### Common patterns used in these decks

**Two-column layout:**
```html
<div class="grid grid-cols-2 gap-8 mt-6">
<div>Left</div>
<div>Right</div>
</div>
```

**Three-column layout:**
```html
<div class="grid grid-cols-3 gap-6 mt-6">
```

**Colored card:**
```html
<div class="p-6 bg-blue-50 dark:bg-blue-900 rounded-xl">
Content here
</div>
```

**Colored pill/tag:**
```html
<span class="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">Label</span>
```

**Callout box:**
```html
<div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg text-center text-lg">
<strong>Key point:</strong> Your message here.
</div>
```

**Bold heading (use instead of ### inside cards):**
```html
<div class="text-2xl font-bold text-orange-600 dark:text-orange-300">Heading</div>
```

**Time badge:**
```html
<div class="text-sm px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded-full inline-block font-semibold mb-4">Minutes 0-5</div>
```

## How to Preview Locally

```bash
# One-time setup
cd docs/slides-mental-model
npm install

# Run dev server (hot-reloads as you edit slides.md)
npm run dev
# Opens at http://localhost:3030
```

Same for the other deck:
```bash
cd docs/slides-workshop-activity
npm install
npm run dev
```

## How to Rebuild and Deploy

After editing `slides.md`:

```bash
# Rebuild the deck
cd docs/slides-mental-model
./node_modules/.bin/slidev build --base /gies-buildathon/docs/slides-mental-model/dist/

# Same for the other deck
cd ../slides-workshop-activity
./node_modules/.bin/slidev build --base /gies-buildathon/docs/slides-workshop-activity/dist/

# Commit and push — GitHub Pages auto-deploys
cd ../..
git add -A
git commit -m "Update workshop slides"
git push origin main
```

Deployment takes ~30 seconds after push. Hard refresh (Cmd+Shift+R) to see changes.

## Style Guide

These decks use a consistent style. Please keep:

- **Theme:** apple-basic (set in frontmatter, do not change)
- **Fonts:** IBM Plex Sans, Spectral, IBM Plex Mono (loaded automatically)
- **TOC:** Disabled (`toc: false` in frontmatter)
- **Colors:** Use UnoCSS color utilities (blue-50/900, orange-50/900, emerald-50/900, gray-100/800)
- **Dark mode:** Always provide both light and dark variants (e.g., `bg-blue-50 dark:bg-blue-900`)

## Requirements

- Node.js 18+ (check with `node -v`)
- npm (comes with Node.js)

No other tools needed. All dependencies install via `npm install`.

## Quick Edits Cheatsheet

| Want to... | Do this |
|-----------|---------|
| Change slide text | Edit text in `slides.md` between `---` separators |
| Add a slide | Add a new `---` separator and content |
| Remove a slide | Delete everything between two `---` separators |
| Change slide order | Cut/paste the block between separators |
| Change a color | Swap the UnoCSS class (e.g., `bg-blue-50` → `bg-green-50`) |
| Add a bullet point | Add `- Your text` inside a markdown list |
| Bold text | Use `**bold**` in markdown or `<strong>` in HTML |
| Change the event date | Search for "April" in the file and update |
| Update mentor names | Search for "Brian" or "James" and update |
