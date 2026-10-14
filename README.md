# Azure Fundamentals Class

A responsive, single-page React and Vite site for an Azure Fundamentals learning community.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. Vite writes the static site to `dist/`.

## Deploy to Azure Static Web Apps

Create an Azure Static Web App and connect this project repository. Use these build settings:

- Build preset: **Custom**
- App location: `/`
- API location: leave blank
- Output location: `dist`

The `public/staticwebapp.config.json` file is copied into `dist/` by Vite. It provides SPA navigation fallback and baseline response headers. For manual deployment, run `npm run build` and deploy the contents of `dist/`.
