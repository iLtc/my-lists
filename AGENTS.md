# AGENTS.md

## Cursor Cloud specific instructions

See `CLAUDE.md` for full project overview, tech stack, repo structure, data schemas, commands, and conventions.

### Non-obvious notes

-   **Pre-existing test failure**: The sole test in `src/App.test.js` searches for "learn react" text (default CRA boilerplate) but the app has been customized. `CI=true yarn test` will fail — this is a known pre-existing issue, not a sign of a broken environment.
-   **Prettier scoping**: Running `prettier --check "**/*"` produces many `[error] No parser could be inferred` warnings for images and dotfiles. Scope checks to source files: `npx prettier --check "src/**/*.{js,jsx,css}" "*.json"`.
