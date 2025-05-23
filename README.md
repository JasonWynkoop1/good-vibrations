# Good Vibrations - React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## GitHub Repository Setup Instructions

To push your code to the GitHub repository you've created, follow these steps:

1. Add your GitHub repository as a remote:
   ```
   git remote add origin https://github.com/yourusername/yourrepositoryname.git
   ```
   Replace `yourusername` and `yourrepositoryname` with your actual GitHub username and repository name.

2. Stage all files (including the modified home.tsx):
   ```
   git add .
   ```

3. Commit your changes:
   ```
   git commit -m "Initial commit"
   ```

4. Push your code to GitHub:
   ```
   git push -u origin main
   ```

These commands will push all your code to the GitHub repository you've created.

## GitHub Pages Deployment

This project is configured to be deployed on GitHub Pages. The following steps have been completed:

### 1. Configure Vite for GitHub Pages

The `vite.config.ts` file has been updated to output the build to the `docs` directory and use the correct base path for GitHub Pages:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/good-vibrations/', // Base path for GitHub Pages repository
  build: {
    outDir: 'docs', // Output to docs directory for GitHub Pages
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 2. Disable Jekyll Processing

A `.nojekyll` file is automatically added to the `docs` directory during the build process. This file tells GitHub Pages not to process the site with Jekyll, ensuring that the site is served exactly as built.

The `deploy:github` script includes a command to create this file:

```bash
echo '' > docs/.nojekyll
```

This is important for React applications, as Jekyll processing can sometimes interfere with the proper functioning of the site.

### 3. Build and Deploy

To build the site for GitHub Pages deployment, use the dedicated script:

```bash
npm run deploy:github
```

This script will:
1. Clean both the `docs` and `dist` directories to avoid confusion
2. Build the site with the correct GitHub Pages configuration
3. Output the files to the `docs` directory

After running this command, commit and push your changes to GitHub:

```bash
git add .
git commit -m "Update site for GitHub Pages"
git push
```

GitHub Pages will automatically serve the site from the `docs` directory.

### 4. Configure GitHub Pages in Repository Settings

In your GitHub repository settings:

1. Go to the "Pages" section
2. Under "Source", select "Deploy from a branch"
3. Select the branch (usually `main`)
4. Select the folder (`/docs`)
5. Click "Save"

Your site will be available at `https://yourusername.github.io/yourrepositoryname/`.

### 5. Troubleshooting GitHub Pages Deployment

If you encounter issues with your GitHub Pages deployment, here are some common problems and solutions:

#### Changes visible locally but not on GitHub Pages

This is often caused by:

1. **Using the wrong build command**: Always use `npm run deploy:github` instead of the standard build command to ensure the correct configuration is used.

2. **Caching issues**: GitHub Pages and browsers may cache old versions of your site.
   - Clear your browser cache or try in an incognito/private window
   - Add `?v=timestamp` to the end of the URL to bypass cache (e.g., `https://yourusername.github.io/yourrepositoryname/?v=123`)

3. **Incorrect directory being deployed**: Make sure GitHub Pages is set to deploy from the `docs` folder in the correct branch.

4. **Base path issues**: Ensure vite.config.ts has the correct `base: '/yourrepositoryname/'` setting.

5. **Deployment delay**: GitHub Pages can take a few minutes to update after pushing changes.

#### Checking deployment status

You can check the status of your GitHub Pages deployment in the "Actions" tab of your repository or in the "Pages" section of your repository settings.



## Squarespace Deployment with Custom Domain

This site is configured to be deployed on Squarespace with the custom domain "goodvibrationsspeech.net". The following steps have been completed:

### 1. Custom Domain Setup

The custom domain "goodvibrationsspeech.net" has been purchased and configured on Squarespace with the following DNS records:

- A record: @ → 198.49.23.144
- CNAME record: www → ext-sq.squarespace.com

### 2. Configure Vite for Custom Domain

The `vite.config.ts` file has been updated to use the root path for the custom domain:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Using root path for custom domain goodvibrationsspeech.net
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```


### 3. Build the Site

To build the site for deployment, run:

```bash
npm run build:squarespace
```

This will create a `dist` directory with the built site.

### 4. Deploy to Squarespace

To deploy the site to Squarespace:

1. Log in to your Squarespace account
2. Go to your site's dashboard
3. Navigate to Settings > Advanced > Code Injection
4. Upload the contents of the `dist` directory to your Squarespace site

Alternatively, you can use Squarespace's developer mode to deploy your site:

1. Enable Developer Mode in your Squarespace site
2. Follow Squarespace's documentation for deploying custom code

### 5. Verify and Maintain

- DNS changes may take up to 24-48 hours to propagate
- Your custom domain configuration will need to be renewed annually along with your domain registration
- Make sure to update your Squarespace site whenever you make changes to your code

With these steps completed, your site should be accessible at "goodvibrationsspeech.net" with HTTPS security provided by Squarespace.
