# Actions-Demo-WebDeploy

A simple web application built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
and [Vite](https://vite.dev/), deployed to GitHub Pages with GitHub Actions.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server on http://localhost:5173
```

## Scripts

| Script            | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the development server              |
| `npm run build`   | Type-check and build the app into `dist/` |
| `npm run preview` | Preview the production build locally      |
| `npm run lint`    | Lint the source code with oxlint          |
| `npm test`        | Run the unit tests with Vitest            |

## Deployment

The [`Deploy to GitHub Pages`](.github/workflows/deploy.yml) workflow lints, tests and builds the app.
On pushes to `main` (and on manual runs) it also publishes `dist/` to GitHub Pages; pull requests only
run the validation steps.

To enable it, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
The workflow passes the Pages base path to Vite via the `BASE_PATH` environment variable, so the app
works when served from `https://<owner>.github.io/<repository>/`.
