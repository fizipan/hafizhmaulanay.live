# AGENTS.md

## Cursor Cloud specific instructions

### Project Overview

Personal portfolio and blog site built with Next.js 13 (Pages Router), TypeScript, and Tailwind CSS. Blog content is stored as MDX files in `/_posts/`.

### Running the Dev Server

```bash
npm run dev
```

Starts on port 3000. See `package.json` for all available scripts (`dev`, `build`, `lint`, `start`).

### Key Gotchas

- **`npm install` requires `--legacy-peer-deps`**: The `use-delayed-render` package has a peer dependency on React 16, which conflicts with the project's React 18. Always use `npm install --legacy-peer-deps`.
- **Spotify env vars are optional**: The `.env.example` contains `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and `SPOTIFY_REFRESH_TOKEN`. Without these, the "Now Playing" widget gracefully shows "Not Playing" — the site works fully without them.
- **No automated test suite**: This project has no test runner (no Jest, Vitest, etc.). Lint (`npm run lint`) is the main code quality check.
- **`punycode` deprecation warning**: Node 22 shows `[DEP0040] DeprecationWarning: The punycode module is deprecated` when running lint/build/dev. This is harmless and comes from a transitive dependency.

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```
