# Portfolio Starter Template

A simple, editable personal portfolio built with plain HTML and CSS, ready to host for free on GitHub Pages.

## Files
- `index.html` — your page content (what it says)
- `styles.css` — your page styling (how it looks)
- `script.js` — small optional behavior (how it reacts)
- `README.md` — this file

## Tech stack
There is no framework, package manager, or build step. Edit a file, save it, and refresh.

| Layer | Tool | Where | What it does |
| --- | --- | --- | --- |
| Content | HTML5 | `index.html` | Page text, links, and structure |
| Styling | CSS (custom properties, Grid, Flexbox, scroll snap) | `styles.css` | Layout and look; the settings are under `:root` |
| Behavior | Vanilla JavaScript (`IntersectionObserver`) | `script.js` | Current-section highlight and slide counter |
| Headline font | [Archivo](https://fonts.google.com/specimen/Archivo), expanded, weights 800 and 900 | Google Fonts link in `index.html` | Falls back to Arial Black if it can't load |
| Body font | Helvetica Neue, Helvetica, or Arial | `styles.css` | Uses fonts already on the visitor's device |
| Hosting | GitHub Pages | Repo settings | Publishes the branch chosen in Step 3 |

The Google Fonts link is the only outside dependency. The page stays readable and navigable with JavaScript turned off; only the highlight and counter go away.

## Design system
The look is a slide deck, and these pieces repeat across the page:

- **Frame:** fixed top and bottom bars, separated from the page by thin rules. On phones the bottom bar moves to the end of the page.
- **Slides:** each section has the `.slide` class and fills the screen.
- **Headlines:** Archivo, uppercase, expanded, and heavy. They use a shared rule in `styles.css`, so the capitals come from CSS and not from the text in `index.html`.
- **Pills:** outlined links that invert on hover (`.button`, `.project-link`, `.contact-list a`).
- **Ruled rows:** the skills list.
- **Timeline:** the project cards. CSS numbers the squares, so a copied card gets the next number and joins the line automatically.

## Step 1 — Make it yours (edit on your computer)
1. Open `index.html` in a text editor (VS Code).
2. Find every `[SQUARE BRACKET]` placeholder and replace it with your info. Tip: search the file for `REPLACE`.
3. Open `index.html` in your browser to preview. Edit → save → refresh to see changes.
4. Want different colors? Open `styles.css` and change the values under `:root` at the top.

## Step 2 — Put it on GitHub
1. Go to github.com and click **New repository**.
2. Name it **`your-username.github.io`** (use YOUR GitHub username exactly). This special name makes it your main site.
3. Set it to **Public**. Click **Create repository**.
4. On the new repo page, click **uploading an existing file**.
5. Drag in `index.html`, `styles.css`, and `script.js`, then write a commit message like `Add portfolio starter files` and click **Commit changes**.

## Step 3 — Turn on GitHub Pages
1. In your repo, go to **Settings** → **Pages** (left sidebar).
2. Under **Branch**, select **`main`** and the **`/ (root)`** folder. Click **Save**.
3. Wait 1–2 minutes, then visit **`https://your-username.github.io`**. Your site is live!

## Always-on habits (graded)
- Write clear commit messages that say what changed (`Update about section`, not `stuff`).
- Keep filenames lowercase with no spaces (`styles.css`, not `My Styles.css`).
- Commit often — small, frequent commits beat one giant one.

## Troubleshooting
- **Page is blank / unstyled:** check that `styles.css` is spelled exactly right in the `<link>` tag and uploaded to the repo.
- **404 error:** make sure the repo is named `your-username.github.io` and is Public, and give it 2 minutes.
- **Changes not showing:** hard-refresh your browser (Ctrl+Shift+R / Cmd+Shift+R).
