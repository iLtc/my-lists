# Modernist Redesign on Tailwind v4 — Design

**Date:** 2026-08-07
**Status:** Approved
**Source design:** claude.ai/design project "Lists.iltc.app redesign" (`4797cd51-26d1-43cd-8e26-265cd5c35e97`), file `Lists Redesign.dc.html`, using the Modernist design system with a blue accent override.

## Goal

Implement the full visual redesign from the design file, built on Tailwind CSS v4, removing Bootstrap and react-bootstrap entirely. Behavior (URL-driven routing and language, static export, base64 book entries, Cloudflare image resizing) is preserved.

## Scope decisions (confirmed with owner)

-   **Full redesign**, not a like-for-like framework swap.
-   **Faithful to the design file**: brand becomes "iLtc / Lists" (not localized), authors lose the "by " prefix, accent is blue `#1440d6` (the design's override of the Modernist red).
-   **Tailwind v4, CSS-first**: `@tailwindcss/vite` plugin, tokens declared via `@theme` in `src/index.css`, no `tailwind.config.js`.

## 1. Dependencies & configuration

-   Remove `bootstrap` and `react-bootstrap` from `package.json`.
-   Remove the Bootstrap CDN `<link>` from `index.html`.
-   Add dev dependencies: `tailwindcss`, `@tailwindcss/vite`.
-   `vite.config.js`: add `tailwindcss()` to the plugin list next to `react()` and `staticExport()`. `exportedRoutes` is unchanged.
-   `index.html`: add Google Fonts Archivo (weights 400;500;600;700;800) with preconnect, replacing the Bootstrap CDN line.
-   Keep the `buffer` dependency — the base64 decoding path in `BookCard` stays.

## 2. Design tokens (`src/index.css`)

`src/index.css` becomes the single stylesheet:

-   `@import "tailwindcss";`
-   `@theme` block with tokens copied from the design files:
    -   `--color-bg: #f3f2f2`, `--color-surface: #eae9e9`, `--color-ink: #201e1d`
    -   Neutral ramp 100–900 (from Modernist `styles.css`): `#f8f4f4 #eae7e7 #d7d3d3 #bab6b6 #9b9797 #7d7979 #605d5d #444141 #2d2b2b`
    -   Accent `#1440d6` with the blue ramp from the design file: 100 `oklch(96% 0.03 265)`, 200 `oklch(91% 0.06 265)`, 300 `oklch(83% 0.10 265)`, 400 `oklch(70% 0.16 265)`, 500 `#1440d6`, 600 `oklch(48% 0.19 265)`, 700 `oklch(40% 0.16 265)`, 800 `oklch(32% 0.12 265)`, 900 `oklch(24% 0.08 265)`
    -   `--font-heading` and `--font-body`: `"Archivo", system-ui, sans-serif`
-   Base layer: body background/color/font; links `accent-700` hovering to `accent`; `:focus-visible` 2px accent outline with 2px offset.
-   One component class, `.cover-frame`: `background: var(--color-surface)` plus `repeating-linear-gradient(135deg, transparent 0 8px, rgba(32,30,29,.05) 8px 9px)` stripes and `box-shadow: inset 0 0 0 1px var(--color-neutral-300)` — the image placeholder frame used by both card types.
-   Delete `src/App.css` (empty), `src/components/BookCard.module.css`, `src/components/GameCard.module.css`.

## 3. Components

File names and boundaries are unchanged; internals are rewritten with Tailwind utilities.

### `NavBar.jsx`

Rewritten with plain elements and `react-router-dom` `Link`s. All active/link state remains URL-derived exactly as today (same `booksActive`/`enActive` derivation and cross-links preserving section ↔ language).

Sticky wrapper (`sticky top-0 z-20`, background `bg`) containing:

1. **Header** — 2px ink bottom border; inner container `max-w-[1360px]` with `clamp(16px,4vw,40px)` horizontal padding.
    - Brand: "iLtc / Lists", heading font, weight 800, `clamp(12px,2.6vw,14px)`, `.16em` letterspacing, uppercase.
    - Desktop tabs (Books / Games, localized 书籍 / 游戏): heading font 14px, active = weight 700 ink with `inset 0 -3px 0 0 accent` underline; inactive = weight 500 neutral-600.
    - Desktop language buttons: "EN" / "中文", 12px weight 600; active ink, inactive neutral-500.
2. **Totals bar** (desktop only) — 1px neutral-300 bottom border; 11px weight-600 uppercase `.18em` letterspaced neutral-600 label: EN "N books read" / "N games finished", ZH "N 本书" / "N 款游戏". NavBar imports `books`/`games` and sums item counts itself (no prop drilling).
3. **Mobile menu** (below 640px, Tailwind `sm:` inverse):
    - Hamburger button: 44×44, three 2px bars, `aria-label="Menu"`, `aria-expanded`; bars turn accent when open. `useState` for `menuOpen` — the only client state added.
    - Open panel: stacked tab links (22px heading font, 1px neutral-300 dividers, active weight 700 ink / inactive weight 500 neutral-600), then a "Language" / "语言" label above an EN / 中文 segmented control (2px ink border; active segment ink background with bg-colored text).
    - Menu closes on any navigation (route change effect). Totals bar hidden on mobile; menu panel hidden ≥ 640px regardless of state.

### `CardGroup.jsx`

Year section (`<section>` with `clamp(36px,5vw,64px)` top padding):

-   Header row: flex, items-end, wrap, 2px ink bottom border, 10px bottom padding. `<h2>` year — heading font, weight 800, `clamp(30px,7vw,52px)`, line-height .94, `-.03em` tracking, uppercase. Right-aligned meta: item count as "N titles"/"1 title" (EN) or "N 部" (ZH), 11px weight-600 uppercase `.18em` neutral-600.
-   Grid (32px top padding):
    -   Books: `grid-template-columns: repeat(auto-fill, minmax(min(150px,46%),1fr))`, gap `clamp(24px,3vw,40px) clamp(14px,2vw,30px)`.
    -   Games: `repeat(auto-fill, minmax(min(280px,100%),1fr))`, gap `52px clamp(16px,2vw,32px)`.

### `BookCard.jsx`

Vertical cover card (was horizontal image-left):

-   2:3 aspect `.cover-frame` with absolutely-positioned `object-cover` image filling it; `loading="lazy"`; `onError` hides the `<img>` so the striped frame shows.
-   Title: `<h3>` heading font, weight 700, 15px, line-height 1.25.
-   Author below: 13px neutral-600, **no "by " prefix**.
-   Base64 decoding (`isBase64` flag → decode title/author/image) kept as-is.
-   Cloudflare resize bumped `width=150` → `width=320` (deliberate deviation: covers now fill ~150–220px columns; 150px sources would be blurry on retina). Dev mode still serves images directly.
-   `alt=""` on covers — title text is adjacent, so the image is redundant for screen readers (matches the design).

### `GameCard.jsx`

-   16:9 aspect `.cover-frame`, same image/error handling, `alt=""`.
-   Title: heading font weight 700, `clamp(17px,2vw,19px)`.
-   Author: 13px neutral-600, no "by " prefix.
-   DLC (when present): row with 1px neutral-300 top border, 8px top margin/padding; label "DLC" (EN) / "追加内容" (ZH) at 10px weight-600 uppercase `.16em` neutral-600; entries as chips — 10px weight-600 uppercase, 1px neutral-400 border, 4px/7px padding, square corners.
-   Cloudflare resize stays `width=480`.

### `App.jsx`

-   Routes and `BrowserRouter` unchanged (`/`, `/books`, `/books/zh`, `/games`, `/games/zh`, `*`).
-   Bootstrap `Container` → `<main class="max-w-[1360px] mx-auto">` with `clamp(16px,4vw,40px)` horizontal and 120px bottom padding.
-   `*` route: minimal 404 view styled with the tokens (heading font, ink on bg).

## 4. Behavior & edge cases

-   Language and section remain 100% URL-driven; no i18n state or context. Only `menuOpen` is component state.
-   Static export (`exportedRoutes`) and the legacy hash-redirect script in `index.html` are untouched.
-   Broken/missing images fall back to the striped placeholder (via `onError` display:none).
-   Bilingual arrays always have two entries per the data schema; empty/absent `dlc` renders nothing.

## 5. Verification & documentation

-   `yarn build` passes.
-   Manual check in `yarn dev`: `/`, `/books`, `/books/zh`, `/games`, `/games/zh`, and a bad URL (404 view) — at desktop width and below 640px (hamburger menu, hidden totals bar).
-   Prettier passes (pre-commit hook).
-   CLAUDE.md updated: tech stack table (Bootstrap/react-bootstrap → Tailwind CSS 4), repository structure (module.css files removed), styling conventions.
