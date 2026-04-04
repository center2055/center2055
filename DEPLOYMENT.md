# Portfolio Deployment

## GitHub Pages

1. Open the repository settings on GitHub.
2. Go to **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or run the workflow manually from the **Actions** tab.

The workflow automatically resolves the correct Vite base path.

- If the repository is `center2055.github.io`, the site is built at `/`.
- Otherwise the site is built at `/<repo-name>/`.

## Why You See 404 Right Now

GitHub Pages returns `404` until one of these happens:

- the repository changes are pushed to `main`
- Pages is set to use **GitHub Actions**
- the deploy workflow finishes successfully at least once

## Local Commands

```bash
npm install
npm run dev
npm run build
```
