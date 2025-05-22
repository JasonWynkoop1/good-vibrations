# GitHub Pages Deployment Guide

This document provides instructions on how to deploy the Good Vibrations website to GitHub Pages.

## Automatic Deployment with GitHub Actions

The repository is configured to automatically deploy to GitHub Pages whenever changes are pushed to the `main` branch. This is handled by the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

### How It Works

1. When you push changes to the `main` branch, the workflow automatically triggers.
2. The workflow builds the project using `npm run build`.
3. The built files from the `dist` directory are deployed to GitHub Pages.
4. The site will be available at `https://jasonwynkoop1.github.io/good-vibrations/`.

### Manual Deployment

You can also manually trigger the deployment workflow:

1. Go to the GitHub repository.
2. Click on the "Actions" tab.
3. Select the "Deploy to GitHub Pages" workflow.
4. Click on "Run workflow" and select the branch you want to deploy.

## Troubleshooting

If you encounter issues with the deployment, check the following:

### 1. GitHub Pages Settings

Ensure GitHub Pages is properly configured:

1. Go to the repository settings.
2. Scroll down to the "Pages" section.
3. Make sure the source is set to "GitHub Actions".

### 2. Build Configuration

The `vite.config.ts` file should have the correct base URL:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/good-vibrations/', // GitHub Pages repo name
  // other configuration...
});
```

### 3. Workflow Execution

Check the Actions tab in the GitHub repository to see if the workflow ran successfully. If there are any errors, they will be displayed in the workflow logs.

## Important Notes

- The site is configured to use the repository name as the base path (`/good-vibrations/`).
- All links in the application should be relative to this base path.
- If you rename the repository, you'll need to update the `base` property in `vite.config.ts`.