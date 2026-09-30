# RYBAK corp.

Premium portfolio website for **Рыбак Арсений — Graphic Designer / Visual Designer**.

## Run locally

```bash
npm install
npm run dev
```

## Windows app

```bash
npm install
npm run package
```

The portable Windows `.exe` is created in `release/`.

## GitHub Pages

1. Create a **public** GitHub repository, e.g. `rybak-corp`.
2. Upload all files from this project.
3. Use the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **GitHub Actions**.
6. Push to `main`.
7. Open **Actions** and wait for `Deploy RYBAK corp. to GitHub Pages`.
8. Your public site will be:

`https://YOUR-GITHUB-USERNAME.github.io/rybak-corp/`

The exact URL appears in **Settings → Pages** after deployment.

The web version uses `HashRouter`, so the portfolio pages work correctly on GitHub Pages. The same source remains compatible with the Electron desktop build.
