# Modernist Redesign on Tailwind v4 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the my-lists UI to the Modernist redesign (blue accent) on Tailwind CSS v4, removing Bootstrap and react-bootstrap entirely.

**Architecture:** Tailwind v4 CSS-first — tokens live in an `@theme` block in `src/index.css` (the only stylesheet); components keep their existing files/boundaries but their internals are rewritten with Tailwind utilities. Routing, language handling, static export, and the base64 book path are unchanged.

**Tech Stack:** React 19, Vite 6, Tailwind CSS 4 (`@tailwindcss/vite`), React Router DOM 6, Archivo (Google Fonts).

**Spec:** `docs/superpowers/specs/2026-08-07-tailwind-redesign-design.md`

## Global Constraints

-   Package manager is **Yarn** (`yarn add`, `yarn remove` — never npm). Node 24.
-   Prettier runs via the pre-commit hook (lint-staged) and may reformat files on commit — that is expected; do not fight it.
-   4-space indentation, plain JavaScript, `.jsx` for files with JSX, functional components only.
-   Copy rules from the spec: brand is exactly `iLtc / Lists` (not localized); author lines have **no "by " prefix**; accent is blue `#1440d6`.
-   Language and section state stay 100% URL-driven. The only client state added anywhere is NavBar's `menuOpen`.
-   `exportedRoutes` in `vite.config.js` and the hash-redirect script in `index.html` must not change.
-   Cloudflare image prefix: books `/cdn-cgi/image/width=320/`, games `/cdn-cgi/image/width=480/`; in dev (`import.meta.env.DEV`) images are served from `/images/...` directly.
-   There is no test suite. Each task's verification is `yarn build` (must exit 0) plus targeted `yarn dev` checks where stated. Intermediate tasks may look visually unfinished in the browser; that is acceptable — compile success and the final Task 8 checklist are the gates.

---

### Task 1: Tailwind v4 infrastructure, tokens, and fonts

**Files:**

-   Modify: `package.json` (via yarn), `vite.config.js`, `src/index.css`, `index.html`

**Interfaces:**

-   Produces: Tailwind utilities backed by theme tokens used by every later task: colors `bg`, `surface`, `ink`, `neutral-100…900`, `accent`, `accent-100…900` (usable as `bg-bg`, `text-ink`, `border-neutral-300`, `bg-accent`, etc.); font utilities `font-heading`, `font-body`; component class `cover-frame`.

-   [ ] **Step 1: Install Tailwind**

Run: `yarn add -D tailwindcss @tailwindcss/vite`
Expected: exits 0; `package.json` devDependencies gain `tailwindcss` and `@tailwindcss/vite` (both ^4.x).

-   [ ] **Step 2: Register the Vite plugin**

Replace the imports and `defineConfig` call in `vite.config.js` so the file reads (the `staticExport` plugin body between them is unchanged):

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

// ... existing exportedRoutes and staticExport unchanged ...

export default defineConfig({
    plugins: [react(), tailwindcss(), staticExport()],
});
```

-   [ ] **Step 3: Write the token stylesheet**

Replace the (empty) `src/index.css` with:

```css
@import "tailwindcss";

@theme {
    --color-bg: #f3f2f2;
    --color-surface: #eae9e9;
    --color-ink: #201e1d;

    --color-neutral-100: #f8f4f4;
    --color-neutral-200: #eae7e7;
    --color-neutral-300: #d7d3d3;
    --color-neutral-400: #bab6b6;
    --color-neutral-500: #9b9797;
    --color-neutral-600: #7d7979;
    --color-neutral-700: #605d5d;
    --color-neutral-800: #444141;
    --color-neutral-900: #2d2b2b;

    --color-accent-100: oklch(96% 0.03 265);
    --color-accent-200: oklch(91% 0.06 265);
    --color-accent-300: oklch(83% 0.1 265);
    --color-accent-400: oklch(70% 0.16 265);
    --color-accent-500: #1440d6;
    --color-accent-600: oklch(48% 0.19 265);
    --color-accent-700: oklch(40% 0.16 265);
    --color-accent-800: oklch(32% 0.12 265);
    --color-accent-900: oklch(24% 0.08 265);
    --color-accent: #1440d6;

    --font-heading: "Archivo", system-ui, sans-serif;
    --font-body: "Archivo", system-ui, sans-serif;
}

@layer base {
    body {
        background: var(--color-bg);
        color: var(--color-ink);
        font-family: var(--font-body);
    }
    a {
        color: var(--color-accent-700);
        text-decoration: none;
    }
    a:hover {
        color: var(--color-accent);
    }
    *:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
    }
}

@layer components {
    .cover-frame {
        background-color: var(--color-surface);
        background-image: repeating-linear-gradient(
            135deg,
            transparent 0 8px,
            rgba(32, 30, 29, 0.05) 8px 9px
        );
        box-shadow: inset 0 0 0 1px var(--color-neutral-300);
    }
}
```

-   [ ] **Step 4: Swap Bootstrap CDN for Archivo in `index.html`**

Delete the three-line Bootstrap `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/...">` element and put the font links in its place:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
/>
```

Nothing else in `index.html` changes (keep the hash-redirect script and gtag blocks).

Note: from this commit until Task 7, the site renders with react-bootstrap markup but no Bootstrap CSS — visually rough on purpose.

-   [ ] **Step 5: Verify build**

Run: `yarn build`
Expected: exits 0, `✓ built` in output.

-   [ ] **Step 6: Commit**

```bash
git add package.json yarn.lock vite.config.js src/index.css index.html
git commit -m "feat: add Tailwind v4 with Modernist design tokens, drop Bootstrap CDN"
```

---

### Task 2: NavBar rewrite

**Files:**

-   Modify: `src/components/NavBar.jsx` (full rewrite)

**Interfaces:**

-   Consumes: theme utilities and tokens from Task 1; `src/books.js` / `src/games.js` default exports (array of `{title, items[]}` year groups).
-   Produces: `<NavBar />` (no props), rendered by `App.jsx` exactly as today.

-   [ ] **Step 1: Rewrite the component**

Replace the entire contents of `src/components/NavBar.jsx` with:

```jsx
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import books from "../books";
import games from "../games";

const countItems = (data) =>
    data.reduce((total, group) => total + group.items.length, 0);
const BOOK_COUNT = countItems(books);
const GAME_COUNT = countItems(games);

const NavBar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const booksActive = !location.pathname.includes("games");
    const enActive = !location.pathname.includes("zh");

    const tabs = [
        {
            to: enActive ? "/books" : "/books/zh",
            label: enActive ? "Books" : "书籍",
            active: booksActive,
        },
        {
            to: enActive ? "/games" : "/games/zh",
            label: enActive ? "Games" : "游戏",
            active: !booksActive,
        },
    ];
    const langs = [
        {
            to: booksActive ? "/books" : "/games",
            label: "EN",
            active: enActive,
        },
        {
            to: booksActive ? "/books/zh" : "/games/zh",
            label: "中文",
            active: !enActive,
        },
    ];

    const totalLabel = booksActive
        ? enActive
            ? `${BOOK_COUNT} books read`
            : `${BOOK_COUNT} 本书`
        : enActive
          ? `${GAME_COUNT} games finished`
          : `${GAME_COUNT} 款游戏`;

    return (
        <div className="sticky top-0 z-20 bg-bg">
            <header className="border-b-2 border-ink">
                <div className="mx-auto flex max-w-[1360px] items-stretch justify-between gap-[clamp(10px,3vw,40px)] px-[clamp(16px,4vw,40px)]">
                    <div className="flex min-w-0 items-stretch gap-[clamp(10px,3vw,40px)]">
                        <div className="flex items-center whitespace-nowrap py-4 font-heading text-[clamp(12px,2.6vw,14px)] font-extrabold uppercase tracking-[.16em]">
                            iLtc / Lists
                        </div>
                        <nav className="hidden items-stretch sm:flex">
                            {tabs.map((tab) => (
                                <Link
                                    key={tab.to}
                                    to={tab.to}
                                    className={`flex items-center px-[clamp(10px,3vw,18px)] py-4 font-heading text-sm ${
                                        tab.active
                                            ? "font-bold text-ink shadow-[inset_0_-3px_0_0_var(--color-accent)]"
                                            : "font-medium text-neutral-600"
                                    }`}
                                >
                                    {tab.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden items-center sm:flex">
                        {langs.map((lang) => (
                            <Link
                                key={lang.label}
                                to={lang.to}
                                className={`px-2.5 py-2 text-xs font-semibold tracking-[.08em] ${
                                    lang.active
                                        ? "text-ink"
                                        : "text-neutral-500"
                                }`}
                            >
                                {lang.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center sm:hidden">
                        <button
                            type="button"
                            aria-label="Menu"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((open) => !open)}
                            className="flex h-11 w-11 cursor-pointer flex-col items-stretch justify-center gap-[5px] border-0 bg-transparent p-0"
                        >
                            <span
                                className={`mx-1 h-0.5 ${menuOpen ? "bg-accent" : "bg-ink"}`}
                            />
                            <span
                                className={`mx-1 h-0.5 ${menuOpen ? "bg-accent" : "bg-ink"}`}
                            />
                            <span
                                className={`mx-1 h-0.5 ${menuOpen ? "bg-accent" : "bg-ink"}`}
                            />
                        </button>
                    </div>
                </div>
            </header>

            <div className="hidden border-b border-neutral-300 sm:block">
                <div className="mx-auto max-w-[1360px] px-[clamp(16px,4vw,40px)] py-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-neutral-600">
                    {totalLabel}
                </div>
            </div>

            {menuOpen && (
                <nav className="border-b-2 border-ink px-[clamp(16px,4vw,40px)] pb-5 sm:hidden">
                    <div className="flex flex-col">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.to}
                                to={tab.to}
                                className={`border-b border-neutral-300 py-3.5 text-left font-heading text-[22px] tracking-[-.01em] ${
                                    tab.active
                                        ? "font-bold text-ink"
                                        : "font-medium text-neutral-600"
                                }`}
                            >
                                {tab.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2.5 pt-5">
                        <span className="text-[11px] font-semibold uppercase tracking-[.18em] text-neutral-600">
                            {enActive ? "Language" : "语言"}
                        </span>
                        <div className="flex self-start border-2 border-ink">
                            {langs.map((lang) => (
                                <Link
                                    key={lang.label}
                                    to={lang.to}
                                    className={`px-[22px] py-3 text-xs font-semibold uppercase tracking-[.1em] ${
                                        lang.active
                                            ? "bg-ink text-bg"
                                            : "text-ink"
                                    }`}
                                >
                                    {lang.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default NavBar;
```

-   [ ] **Step 2: Verify build and behavior**

Run: `yarn build` — expected: exits 0.
Run `yarn dev`, open `http://localhost:5173/` and check: sticky header with "ILTC / LISTS" brand, Books/Games tabs (Books underlined blue), EN/中文 at right, totals bar below (e.g. "NN books read"). Navigate to `/games/zh` via clicks — tab labels localize, totals bar shows "NN 款游戏". Narrow the window below 640px: tabs/lang disappear, hamburger appears; opening it shows stacked tabs + "Language" segmented control; clicking a link closes it.

-   [ ] **Step 3: Commit**

```bash
git add src/components/NavBar.jsx
git commit -m "feat: rebuild NavBar to Modernist design without react-bootstrap"
```

---

### Task 3: CardGroup rewrite (year sections + grids)

**Files:**

-   Modify: `src/components/CardGroup.jsx` (full rewrite)

**Interfaces:**

-   Consumes: `<BookCard {...item} lang={lang} />` and `<GameCard {...item} lang={lang} />` (props contract unchanged from today; Tasks 4–5 restyle their internals).
-   Produces: `<CardGroup title={number} items={array} lang={"en"|"zh"} isGame={boolean} />` — same props as today, so `App.jsx` needs no change yet.

-   [ ] **Step 1: Rewrite the component**

Replace the entire contents of `src/components/CardGroup.jsx` with:

```jsx
import BookCard from "./BookCard";
import GameCard from "./GameCard";
import React from "react";

const CardGroup = (props) => {
    const zh = props.lang === "zh";
    const count = props.items.length;
    const meta = zh
        ? `${count} 部`
        : `${count} ${count === 1 ? "title" : "titles"}`;

    const cards = props.isGame
        ? props.items.map((item) => (
              <GameCard key={item.title} {...item} lang={props.lang} />
          ))
        : props.items.map((item) => (
              <BookCard key={item.title} {...item} lang={props.lang} />
          ));

    return (
        <section className="pt-[clamp(36px,5vw,64px)]">
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b-2 border-ink pb-2.5">
                <h2 className="font-heading text-[clamp(30px,7vw,52px)] font-extrabold uppercase leading-[.94] tracking-[-.03em] [text-wrap:balance]">
                    {props.title}
                </h2>
                <span className="whitespace-nowrap pb-[5px] text-[11px] font-semibold uppercase tracking-[.18em] text-neutral-600">
                    {meta}
                </span>
            </div>
            <div
                className={
                    props.isGame
                        ? "grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-x-[clamp(16px,2vw,32px)] gap-y-[52px] pt-8"
                        : "grid grid-cols-[repeat(auto-fill,minmax(min(150px,46%),1fr))] gap-x-[clamp(14px,2vw,30px)] gap-y-[clamp(24px,3vw,40px)] pt-8"
                }
            >
                {cards}
            </div>
        </section>
    );
};

export default CardGroup;
```

-   [ ] **Step 2: Verify build**

Run: `yarn build` — expected: exits 0. (In the browser the year headers/grids are correct but cards inside are still the old ones — fine until Tasks 4–5.)

-   [ ] **Step 3: Commit**

```bash
git add src/components/CardGroup.jsx
git commit -m "feat: rebuild CardGroup with Modernist year headers and CSS grids"
```

---

### Task 4: BookCard rewrite

**Files:**

-   Modify: `src/components/BookCard.jsx` (full rewrite)
-   Delete: `src/components/BookCard.module.css`

**Interfaces:**

-   Consumes: `.cover-frame` from Task 1; props `{title: [en,zh], author: [en,zh], image: [en,zh], isBase64?, lang}` (unchanged).
-   Produces: an `<article>` grid item (no column wrapper — Task 3's grid handles layout).

-   [ ] **Step 1: Rewrite the component**

Replace the entire contents of `src/components/BookCard.jsx` with:

```jsx
import React from "react";
import { Buffer } from "buffer";

const BookCard = (props) => {
    const isDev = import.meta.env.DEV;
    const idx = props.lang === "en" ? 0 : 1;
    const isBase64 = props.isBase64 === true;

    const decode = (value) =>
        isBase64 ? Buffer.from(value, "base64").toString("utf8") : value;
    const title = decode(props.title[idx]);
    const author = decode(props.author[idx]);
    const image = decode(props.image[idx]);

    return (
        <article className="flex flex-col gap-3.5">
            <div className="cover-frame relative aspect-[2/3] overflow-hidden">
                <img
                    alt=""
                    src={`${isDev ? "/" : "/cdn-cgi/image/width=320/"}images/books/${image}`}
                    loading="lazy"
                    onError={(event) => {
                        event.target.style.display = "none";
                    }}
                    className="absolute inset-0 block h-full w-full object-cover"
                />
            </div>
            <div className="flex min-w-0 flex-col gap-[3px]">
                <h3 className="font-heading text-[15px] font-bold leading-[1.25] tracking-[-.012em] [text-wrap:pretty]">
                    {title}
                </h3>
                <p className="text-[13px] leading-[1.4] text-neutral-600">
                    {author}
                </p>
            </div>
        </article>
    );
};

export default BookCard;
```

Note: author has no "by " prefix, `alt` is empty (title text sits directly below), and the CDN width is 320 per the spec.

-   [ ] **Step 2: Delete the module stylesheet**

Run: `git rm src/components/BookCard.module.css`

-   [ ] **Step 3: Verify build and rendering**

Run: `yarn build` — expected: exits 0.
In `yarn dev` at `/books`: vertical 2:3 covers in a dense grid, title + author below each; base64 entries (if any year has them) render decoded text correctly.

-   [ ] **Step 4: Commit**

```bash
git add src/components/BookCard.jsx
git commit -m "feat: rebuild BookCard as vertical Modernist cover card"
```

(`git rm` already staged the deletion.)

---

### Task 5: GameCard rewrite

**Files:**

-   Modify: `src/components/GameCard.jsx` (full rewrite)
-   Delete: `src/components/GameCard.module.css`

**Interfaces:**

-   Consumes: `.cover-frame` from Task 1; props `{title: [en,zh], author: [en,zh], image: [en,zh], dlc?: [[en,zh],...], lang}` (unchanged).
-   Produces: an `<article>` grid item.

-   [ ] **Step 1: Rewrite the component**

Replace the entire contents of `src/components/GameCard.jsx` with:

```jsx
import React from "react";

const GameCard = (props) => {
    const isDev = import.meta.env.DEV;
    const idx = props.lang === "en" ? 0 : 1;
    const hasDLC = props.dlc && props.dlc.length > 0;
    const dlcLabel = idx === 1 ? "追加内容" : "DLC";

    return (
        <article className="flex flex-col gap-3.5">
            <div className="cover-frame relative aspect-video overflow-hidden">
                <img
                    alt=""
                    src={`${isDev ? "/" : "/cdn-cgi/image/width=480/"}images/games/${props.image[idx]}`}
                    loading="lazy"
                    onError={(event) => {
                        event.target.style.display = "none";
                    }}
                    className="absolute inset-0 block h-full w-full object-cover"
                />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h3 className="font-heading text-[clamp(17px,2vw,19px)] font-bold leading-[1.18] tracking-[-.02em] [text-wrap:pretty]">
                    {props.title[idx]}
                </h3>
                <p className="text-[13px] leading-[1.4] text-neutral-600">
                    {props.author[idx]}
                </p>
                {hasDLC && (
                    <div className="mt-2 flex flex-wrap items-baseline gap-2 border-t border-neutral-300 pt-2">
                        <span className="flex-none text-[10px] font-semibold uppercase tracking-[.16em] text-neutral-600">
                            {dlcLabel}
                        </span>
                        <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
                            {props.dlc.map((item, index) => (
                                <li
                                    key={index}
                                    className="border border-neutral-400 px-[7px] py-1 text-[10px] font-semibold uppercase tracking-[.1em] text-ink"
                                >
                                    {item[idx]}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </article>
    );
};

export default GameCard;
```

-   [ ] **Step 2: Delete the module stylesheet**

Run: `git rm src/components/GameCard.module.css`

-   [ ] **Step 3: Verify build and rendering**

Run: `yarn build` — expected: exits 0.
In `yarn dev` at `/games`: 16:9 covers, titles/studios below; a game with DLC shows a hairline-topped row with the "DLC" label and bordered uppercase chips. At `/games/zh` the label reads "追加内容".

-   [ ] **Step 4: Commit**

```bash
git add src/components/GameCard.jsx
git commit -m "feat: rebuild GameCard with 16:9 cover and DLC chips"
```

---

### Task 6: App shell — main container and 404

**Files:**

-   Modify: `src/App.jsx` (full rewrite)
-   Delete: `src/App.css`

**Interfaces:**

-   Consumes: `<NavBar />` (Task 2), `<CardGroup />` (Task 3).
-   Produces: the final route tree — unchanged paths `/`, `/books`, `/books/zh`, `/games`, `/games/zh`, `*`.

-   [ ] **Step 1: Rewrite the component**

Replace the entire contents of `src/App.jsx` with:

```jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardGroup from "./components/CardGroup";
import NavBar from "./components/NavBar";

import books from "./books";
import games from "./games";

const App = () => {
    const bookCardGroups = (lang) =>
        books.map((group) => (
            <CardGroup
                key={group.title}
                title={group.title}
                items={group.items}
                lang={lang}
                isGame={false}
            />
        ));
    const gameCardGroups = (lang) =>
        games.map((group) => (
            <CardGroup
                key={group.title}
                title={group.title}
                items={group.items}
                lang={lang}
                isGame={true}
            />
        ));

    return (
        <BrowserRouter>
            <NavBar />
            <main className="mx-auto max-w-[1360px] px-[clamp(16px,4vw,40px)] pb-[120px]">
                <Routes>
                    <Route
                        path="/books/zh"
                        element={<>{bookCardGroups("zh")}</>}
                    />
                    <Route
                        path="/books"
                        element={<>{bookCardGroups("en")}</>}
                    />
                    <Route
                        path="/games/zh"
                        element={<>{gameCardGroups("zh")}</>}
                    />
                    <Route
                        path="/games"
                        element={<>{gameCardGroups("en")}</>}
                    />
                    <Route path="/" element={<>{bookCardGroups("en")}</>} />
                    <Route
                        path="*"
                        element={
                            <div className="pt-[clamp(36px,5vw,64px)]">
                                <h1 className="font-heading text-[clamp(30px,7vw,52px)] font-extrabold uppercase leading-[.94] tracking-[-.03em]">
                                    404
                                </h1>
                                <p className="text-[13px] text-neutral-600">
                                    Not Found
                                </p>
                            </div>
                        }
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
```

-   [ ] **Step 2: Delete the empty stylesheet**

Run: `git rm src/App.css`
(The `import "./App.css";` line is already gone from the rewrite above.)

-   [ ] **Step 3: Verify build**

Run: `yarn build` — expected: exits 0.
In `yarn dev`: `/` shows books; a garbage URL like `/nope` shows the styled 404.

-   [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "feat: replace Bootstrap Container with Modernist main shell and styled 404"
```

---

### Task 7: Remove Bootstrap dependencies

**Files:**

-   Modify: `package.json`, `yarn.lock` (via yarn)

-   [ ] **Step 1: Confirm no imports remain**

Run: `grep -rn "react-bootstrap\|from \"bootstrap\|bootstrap/" src/ index.html`
Expected: no output. If anything matches, fix that file first (it means an earlier task was incomplete).

-   [ ] **Step 2: Remove the packages**

Run: `yarn remove bootstrap react-bootstrap`
Expected: exits 0; both gone from `package.json` dependencies.

-   [ ] **Step 3: Verify build**

Run: `yarn build`
Expected: exits 0.

-   [ ] **Step 4: Commit**

```bash
git add package.json yarn.lock
git commit -m "feat: remove bootstrap and react-bootstrap dependencies"
```

---

### Task 8: Documentation and final verification

**Files:**

-   Modify: `CLAUDE.md`

-   [ ] **Step 1: Update CLAUDE.md**

Make these edits (leave everything else untouched):

1. Tech Stack table — replace the row `| UI library | React Bootstrap 2.x + Bootstrap 5 |` with `| UI library | Tailwind CSS 4 (@tailwindcss/vite) |`, and the row `| Styling | CSS Modules + global CSS |` with `| Styling | Tailwind utilities + design tokens in src/index.css |`.
2. Repository Structure — remove the lines for `App.css`, `BookCard.module.css`, and `GameCard.module.css`; the `index.css` line's comment becomes `# Tailwind entry: @theme tokens + base styles`.
3. Image Conventions — change the books bullet to `width=320` (Cloudflare resize) instead of `width=150`.
4. Code Style & Formatting — replace the bullet about CSS Modules with: `Styling is Tailwind CSS 4 utility classes; design tokens (colors, fonts) live in the @theme block in src/index.css. No CSS Modules.`
5. Key Implementation Notes — update the `CardGroup` note to say cards render as `<article>` grid items inside CSS grids (no Row/Col), and add: `The Modernist design tokens (bg #f3f2f2, ink #201e1d, accent #1440d6, Archivo font) come from the "Lists.iltc.app redesign" claude.ai/design project.`

-   [ ] **Step 2: Full manual verification**

Run `yarn build` (exits 0), then `yarn dev` and walk the checklist:

-   `/`, `/books`, `/books/zh`, `/games`, `/games/zh` all render with the new design; `/nope` shows the 404 view.
-   Language toggle preserves section; tab switch preserves language (all four combinations).
-   Totals bar text correct in both languages for both sections.
-   Below 640px: hamburger menu works, closes on navigation, totals bar hidden.
-   Base64 book entries render decoded; a game with DLC shows chips.
-   Run `yarn preview` after the build and spot-check `/books/zh/index.html` deep link returns 200.

-   [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md for Tailwind redesign"
```
