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

## GitHub Pages Deployment with Custom Domain

This project is configured to be deployed on GitHub Pages with the custom domain "goodvibrationsspeech.net". The following steps have been completed:

### 1. Configure Vite for GitHub Pages with Custom Domain

The `vite.config.ts` file has been updated to output the build to the `docs` directory and use the root path for the custom domain:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/', // Using root path for custom domain goodvibrationsspeech.net
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

### 2. Custom Domain and Jekyll Processing

A `.nojekyll` file and a `CNAME` file are automatically added to the `docs` directory during the build process:

- The `.nojekyll` file tells GitHub Pages not to process the site with Jekyll, ensuring that the site is served exactly as built.
- The `CNAME` file contains the custom domain name "goodvibrationsspeech.net" which tells GitHub Pages to serve the site at this domain.

The `deploy:github` script includes commands to create these files:

```bash
echo '' > docs/.nojekyll
echo 'goodvibrationsspeech.net' > docs/CNAME
```

The `.nojekyll` file i s important for React applications, as Jekyll processing can sometimes interfere with the proper functioning of the site. The `CNAME` file is required for GitHub Pages to use your custom domain.

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

### 4. Configure GitHub Pages and Custom Domain in Repository Settings

In your GitHub repository settings:

1. Go to the "Pages" section
2. Under "Source", select "Deploy from a branch"
3. Select the branch (usually `main`)
4. Select the folder (`/docs`)
5. Click "Save"
6. In the "Custom domain" section, enter "goodvibrationsspeech.net"
7. Click "Save"
8. Check the "Enforce HTTPS" option once the DNS changes have propagated

Your site will be available at `https://goodvibrationsspeech.net`

#### DNS Configuration for GitHub Pages

To point your custom domain to GitHub Pages, you need to configure the following DNS records with your domain provider (Squarespace):

1. **A Records** - Point your apex domain to GitHub Pages' IP addresses:
   ```
   A @ 185.199.108.153
   A @ 185.199.109.153
   A @ 185.199.110.153
   A @ 185.199.111.153
   ```

2. **CNAME Record** - Point the www subdomain to your GitHub Pages site:
   ```
   CNAME www yourusername.github.io
   ```

Note: These DNS settings are different from the Squarespace hosting configuration. You'll need to update your DNS settings at Squarespace to point to GitHub Pages instead of Squarespace's servers.

**Important:** If you're having trouble adding GitHub Pages IP addresses to Squarespace, you may need to use Squarespace's advanced DNS settings or consider using Squarespace for hosting instead (see the Squarespace Deployment section below). Some domain registrars have limitations on the number of identical record types you can add.

### 5. Troubleshooting GitHub Pages Deployment

If you encounter issues with your GitHub Pages deployment, here are some common problems and solutions:

#### Changes visible locally but not on GitHub Pages

This is often caused by:

1. **Using the wrong build command**: Always use `npm run deploy:github` instead of the standard build command to ensure the correct configuration is used.

2. **Caching issues**: GitHub Pages and browsers may cache old versions of your site.
   - Clear your browser cache or try in an incognito/private window
   - Add `?v=timestamp` to the end of the URL to bypass cache (e.g., `https://goodvibrationsspeech.net/?v=123`)

3. **Incorrect directory being deployed**: Make sure GitHub Pages is set to deploy from the `docs` folder in the correct branch.

4. **Base path issues**: With a custom domain, ensure vite.config.ts has `base: '/'` setting.

5. **Deployment delay**: GitHub Pages can take a few minutes to update after pushing changes.

#### Custom Domain Issues

If you're having issues with your custom domain:

1. **DNS propagation**: DNS changes can take 24-48 hours to fully propagate. Be patient.

2. **HTTPS not working**: GitHub Pages needs time to provision an SSL certificate for your custom domain.
   - Make sure "Enforce HTTPS" is checked in your GitHub Pages settings
   - Wait up to 24 hours for the certificate to be issued

3. **Domain verification**: GitHub may require you to verify ownership of your domain.
   - Follow any verification steps in your GitHub repository settings

4. **DNS configuration**: Double-check your DNS settings at Squarespace.
   - Make sure you've configured the A records to point to GitHub Pages' IP addresses
   - Ensure the www CNAME record is correctly set up

5. **CNAME file issues**: Ensure the CNAME file in your docs directory contains only your domain name (goodvibrationsspeech.net) with no extra spaces or characters.

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
