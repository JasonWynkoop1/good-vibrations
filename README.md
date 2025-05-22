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

The `vite.config.ts` file has been updated to output the build to the `docs` directory:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/', // Root path for standard deployment
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

### 2. Jekyll Configuration

A Jekyll configuration file (`_config.yml`) has been added to the `docs` directory to configure GitHub Pages:

```yaml
# Jekyll configuration for GitHub Pages
title: Good Vibrations Speech & Language Therapy
description: Providing exceptional speech and language therapy services for students through school contracts.
baseurl: ""
url: ""
theme: jekyll-theme-primer
```

### 3. Disable Jekyll Processing (Optional)

A `.nojekyll` file has been added to the `docs` directory to disable Jekyll processing. This ensures that GitHub Pages serves the site exactly as built without any Jekyll processing.

### 4. Build and Deploy

To build the site for GitHub Pages deployment, run:

```bash
npm run build
```

This will create the `docs` directory with the built site. When you push these changes to GitHub, GitHub Pages will automatically serve the site from the `docs` directory.

### 5. Configure GitHub Pages in Repository Settings

In your GitHub repository settings:

1. Go to the "Pages" section
2. Under "Source", select "Deploy from a branch"
3. Select the branch (usually `main`)
4. Select the folder (`/docs`)
5. Click "Save"

Your site will be available at `https://yourusername.github.io/yourrepositoryname/`.



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
