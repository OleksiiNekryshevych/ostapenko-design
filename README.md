# Ostapenko Design Monorepo

This project is a monorepo managed with [Nx](https://nx.dev). It contains the personal portfolio website for Alina Ostapenko.

## Project Structure

*   **apps/portfolio**: The main website built with [Next.js](https://nextjs.org) (Static Export).
*   **libs/ui**: Shared React component library.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    nx dev portfolio
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tasks

### Building

To build the project for production:

```bash
nx build portfolio
```

The static output will be generated to `dist/apps/portfolio`.

### Linting

Run the linter to check for code style issues:

```bash
nx lint portfolio
nx lint ui
```

### Testing

Run unit tests:

```bash
nx test portfolio
nx test ui
```

## Deployment (GitHub Pages)

This project is configured for **Static Export** (`output: 'export'` in `next.config.js`), making it compatible with GitHub Pages.

### Manual Deployment

1.  Build the project:
    ```bash
    nx build portfolio
    ```
2.  The output is in `dist/apps/portfolio`.
3.  Upload the contents of `dist/apps/portfolio` to your GitHub repository (e.g., to a `gh-pages` branch or the `/docs` folder if configured).

### Automated Deployment (GitHub Actions)

Create a workflow file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - name: Install Dependencies
        run: npm ci
      - name: Build
        run: npx nx build portfolio
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/apps/portfolio

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Styling

*   **SCSS Modules**: Components use locally scoped SCSS modules (e.g., `Hero.module.scss`).
*   **Global Styles**: Defined in `apps/portfolio/src/app/global.scss`.
