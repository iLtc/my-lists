# CLAUDE.md

This file provides guidance for AI assistants working in this repository.

## Project Overview

**my-lists** is a personal reading and gaming log — a static React app that displays bilingual (English / Chinese) card-based lists of books and games the owner has read or played, organized by year.

Live site: **https://lists.iltc.app**

---

## Tech Stack

| Layer            | Technology                                          |
| ---------------- | --------------------------------------------------- |
| Framework        | React 19 (Vite)                                     |
| Build tool       | Vite 6 + @vitejs/plugin-react                       |
| CSS framework    | Tailwind CSS 4 (@tailwindcss/vite)                  |
| Routing          | React Router DOM 6 (BrowserRouter)                  |
| Language         | JavaScript (no TypeScript)                          |
| Styling          | Tailwind utilities + design tokens in src/index.css |
| Package manager  | **Yarn** (use `yarn`, not `npm`)                    |
| Node version     | **24** (see `.nvmrc`)                               |
| Formatting       | Prettier 3                                          |
| Pre-commit hooks | Husky + lint-staged (runs Prettier on all files)    |
| Deployment       | GitHub Actions → GitHub Pages                       |

---

## Repository Structure

```
my-lists/
├── index.html              # Vite entry HTML (project root)
├── vite.config.js          # Vite configuration
├── public/
│   ├── manifest.json
│   ├── fonts/
│   │   └── archivo-latin-var.woff2  # Self-hosted Archivo variable font
│   └── images/
│       ├── books/          # Book cover images
│       └── games/          # Game cover images
├── src/
│   ├── books.js            # Book data (all years)
│   ├── games.js            # Game data (all years)
│   ├── App.jsx             # Root component + routing
│   ├── index.jsx           # React entry point
│   ├── index.css           # Tailwind entry: @theme tokens + base styles
│   └── components/
│       ├── NavBar.jsx              # Top navigation bar
│       ├── CardGroup.jsx           # Year-grouped card wrapper
│       ├── BookCard.jsx            # Individual book card
│       └── GameCard.jsx            # Individual game card
├── .github/workflows/      # GitHub Actions (deploy to Pages)
├── .devcontainer/          # Dev container config
├── .husky/pre-commit       # Runs lint-staged
├── .editorconfig
├── .nvmrc                  # Node 24
├── .prettierrc             # Prettier config
└── package.json
```

---

## Routes

The app uses `BrowserRouter`, so all routes are clean paths:

| URL             | Content               |
| --------------- | --------------------- |
| `/` or `/books` | Books list in English |
| `/books/zh`     | Books list in Chinese |
| `/games`        | Games list in English |
| `/games/zh`     | Games list in Chinese |

Language switching and section switching are handled together in `NavBar.jsx` — switching language preserves the current section (books vs. games).

Every route above is exported as a static page at build time (see the `staticExport` plugin's `exportedRoutes` array in `vite.config.js`) — keep `exportedRoutes` in sync with the routes declared in `src/App.jsx` whenever routes change. Legacy `#/...` hash URLs (from the old HashRouter setup) are redirected to their clean-path equivalents by an inline script in `index.html`.

---

## Data Schemas

Both `src/books.js` and `src/games.js` export an array of year-groups. Each group has a numeric `title` (the year) and an `items` array.

### Book item schema (`src/books.js`)

```js
{
    title:  ["English Title",  "中文标题"],    // [0] = EN, [1] = ZH
    image:  ["FileName.jpg",   "FileNameCN.jpg"], // filenames under public/images/books/
    author: ["Author Name",    "作者名"],
}
```

### Game item schema (`src/games.js`)

```js
{
    title:  ["English Title",  "中文标题"],
    image:  ["FileName.jpg",   "FileName.jpg"],  // filenames under public/images/games/
    author: ["Studio Name",    "工作室名"],
    // optional:
    dlc: [
        ["DLC English Name", "DLC中文名"],
        // ...more DLC entries
    ],
}
```

**Key convention:** Both arrays in every bilingual field always have exactly two elements — index `0` for English, index `1` for Chinese.

---

## Adding Content

### Adding a new book

1. Add the cover image to `public/images/books/`.
2. Open `src/books.js` and locate the correct year group (or add a new group at the top of the array for a new year — the array is ordered most-recent-first).
3. Append an entry to that year's `items` array following the schema above.

### Adding a new game

1. Add the cover image to `public/images/games/`.
2. Open `src/games.js` and locate the correct year group.
3. Append an entry to that year's `items` array.
4. Optionally include a `dlc` array for DLC entries.

### Adding a new year group

```js
{
    title: 2026,          // numeric year
    items: [
        // entries...
    ],
}
```

Place it at the **top** of the array (most recent year first).

---

## Image Conventions

-   **Books:** `public/images/books/` — images are displayed at `width=320` (Cloudflare resize) in production.
-   **Games:** `public/images/games/` — images are displayed at `width=480` (Cloudflare resize) in production.
-   In **development** (`import.meta.env.DEV`) images are served directly without the Cloudflare CDN prefix.
-   Accepted formats: `.jpg`, `.jpeg`, `.png`, `.webp`.
-   Filename style: `PascalCase` matching the English title (e.g. `RedDeadRedemption2.jpg`).
-   If a Chinese-specific cover exists, append `CN` before the extension (e.g. `CantHurtMeCN.jpg`). If no separate CN cover is needed, use the same filename for both array indices.

---

## Development Workflow

```bash
# Install dependencies
yarn

# Start Vite dev server at http://localhost:5173
yarn dev
# or
yarn start

# Production build (outputs to dist/)
yarn build

# Preview production build locally
yarn preview

# Deploy to GitHub Pages (runs build first)
yarn deploy
```

> Always use **Yarn**. A `yarn.lock` is committed; do not use `npm install`.

---

## Code Style & Formatting

-   **Prettier** is enforced on every commit via Husky + lint-staged (`npx lint-staged`). Running `yarn` installs the Husky hook automatically.
-   **EditorConfig** enforces: 4-space indentation, LF line endings, UTF-8, trailing newline.
-   Components are functional (no class components).
-   Styling is Tailwind CSS 4 utility classes; design tokens (colors, fonts) live in the @theme block in src/index.css. No CSS Modules.
-   No TypeScript — plain JavaScript throughout.
-   Files containing JSX use the `.jsx` extension.

---

## CI/CD

The GitHub Actions workflow (`.github/workflows/*.yml`) triggers on every push to `main`:

1. Installs dependencies with `yarn`.
2. Builds the app with `yarn build`.
3. Deploys the `dist/` folder to GitHub Pages.

Do **not** commit the `dist/` directory — it is generated by CI.

---

## Known Gotchas

-   **Prettier scoping**: Running `prettier --check "**/*"` produces many `[error] No parser could be inferred` warnings for images and dotfiles. Scope checks to source files: `npx prettier --check "src/**/*.{js,jsx,css}" "*.json"`.

---

## Key Implementation Notes

-   **BrowserRouter** is used with build-time static export: a `closeBundle` hook in the `staticExport` Vite plugin (`vite.config.js`) copies `dist/index.html` to `dist/<route>/index.html` for each route and to `dist/404.html`. This lets GitHub Pages serve deep links with HTTP 200 while unknown paths return a real 404 status and still render the app's `*` route.
-   **Environment detection** uses `import.meta.env.DEV` (Vite) instead of `process.env.NODE_ENV` to toggle dev/prod image paths.
-   The `CardGroup` component is a shared wrapper used for both books and games; it switches between `BookCard` and `GameCard` via the `isGame` boolean prop. Cards render as `<article>` grid items inside CSS grids (no Row/Col).
-   `.cover-frame` (defined in `src/index.css`) is the single non-utility class in that file — a striped placeholder frame shared by both `BookCard` and `GameCard` that shows through when a cover image fails to load.
-   Language state is entirely URL-driven (no React state/context for i18n) — the `lang` prop (`"en"` or `"zh"`) propagates from `App` → `CardGroup` → card components, which use it as an index (`0` or `1`) into the bilingual arrays.
-   `NavBar` imports `books` and `games` directly and sums their item counts at module load to render the totals bar — so adding an entry to either data file changes the nav copy automatically, with nothing else to update.
-   The Modernist design tokens (bg #f3f2f2, ink #201e1d, accent #1440d6, Archivo font) come from the "Lists.iltc.app redesign" claude.ai/design project.
-   Archivo is self-hosted from `public/fonts/archivo-latin-var.woff2` and declared via `@font-face` in `src/index.css`; the site loads no external fonts. It is a variable font (weights 400–800) subset to **latin only**, so Chinese text renders in the `system-ui` fallback — expected, not a bug.
