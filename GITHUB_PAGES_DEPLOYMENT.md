# GitHub Pages Deployment Guide

This document provides instructions on how to deploy the Good Vibrations website to GitHub Pages.

## Deployment Steps

1. Build the project:
   ```bash
   npm run build
   ```

2. Configure GitHub Pages to serve from the correct location:
   - Go to your GitHub repository
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select the branch you want to deploy from (usually `main`)
   - Select the folder `/docs` (we'll create this in the next step)
   - Click "Save"

3. Copy the built files to the docs folder:
   ```bash
   # Create the docs folder if it doesn't exist
   mkdir -p docs
   
   # Copy all files from dist to docs
   cp -r dist/* docs/
   
   # Copy the .nojekyll file to the docs folder
   cp dist/.nojekyll docs/
   ```

4. Commit and push the changes:
   ```bash
   git add docs .nojekyll
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

5. Wait a few minutes for GitHub Pages to build and deploy your site. You can check the status in the "GitHub Pages" section of your repository settings.

6. Your site should now be available at `https://jasonwynkoop1.github.io/good-vibrations/`

## Troubleshooting

If you encounter issues with the deployment, check the following:

1. Make sure the `base` property in `vite.config.ts` is set to `/good-vibrations/`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/good-vibrations/', // GitHub Pages repository name
     // other configuration...
   });
   ```

2. Ensure that the `.nojekyll` file exists in both the repository root and the `docs` folder.

3. Check that the GitHub Pages source is set to the correct branch and folder.

4. If you're still seeing a white screen, open the browser's developer tools (F12) and check the console for any errors. This can help identify the issue.

## Alternative Deployment Method

If you prefer to deploy directly from the `dist` folder, you can use the `gh-pages` package:

1. Install the package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add a deploy script to your `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. Run the deploy script:
   ```bash
   npm run deploy
   ```

This will create a `gh-pages` branch in your repository and push the contents of the `dist` folder to it. You'll need to configure GitHub Pages to serve from the `gh-pages` branch.