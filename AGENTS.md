# AGENTS.md

## Cursor Cloud specific instructions

### Overview

"My Lists" is a client-side React app (Create React App) displaying bilingual (English/Chinese) book and game lists. No backend, database, or external services are required.

### Key commands

See `package.json` scripts for full list. Summary:

| Task            | Command                                        |
| --------------- | ---------------------------------------------- |
| Dev server      | `yarn start` (port 3000)                       |
| Build           | `yarn build`                                   |
| Tests           | `CI=true yarn test`                            |
| Lint (ESLint)   | `npx eslint src/`                              |
| Lint (Prettier) | `npx prettier --check "src/**/*.{js,jsx,css}"` |

### Non-obvious notes

-   **Node version**: Must use Node.js v18 (specified in `.nvmrc`). Run `nvm use 18` if nvm defaults to a different version.
-   **Pre-existing test failure**: The sole test in `src/App.test.js` searches for "learn react" text (default CRA boilerplate) but the app has been customized. This test fails and is a known pre-existing issue.
-   **Prettier on all files**: Running `prettier --check "**/*"` will produce many `[error] No parser could be inferred` warnings for image files and dotfiles. Scope to source files: `npx prettier --check "src/**/*.{js,jsx,css}" "*.json"`.
-   **Husky hooks**: `yarn install` runs `husky install` via the `prepare` script, which sets up the pre-commit hook that runs `lint-staged` (Prettier).
-   **Image paths**: In dev, images reference `/cdn-cgi/image/width=150/images/...` which won't resolve locally (Cloudflare CDN transform). Cover images will show as broken in local dev — this is expected.
