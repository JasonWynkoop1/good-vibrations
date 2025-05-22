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

To deploy this site to GitHub Pages with a custom domain, follow these steps:

### 1. Purchase a Custom Domain

You can purchase a domain from any domain registrar such as:
- [Namecheap](https://www.namecheap.com/)
- [Google Domains](https://domains.google/)
- [GoDaddy](https://www.godaddy.com/)
- [Domain.com](https://www.domain.com/)

Choose any top-level domain (TLD) that fits your needs (.com, .org, .net, etc.). For a professional business site, a .com domain is recommended.

### 2. Set Up GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch you want to deploy (usually `main`)
5. Click "Save"

### 3. Install GitHub Pages Dependency

Add the GitHub Pages dependency to your project:

```bash
npm install --save-dev gh-pages
```

### 4. Add Deployment Scripts

Update your `package.json` file to include these scripts:



### 5. Configure Vite for GitHub Pages

Create or update your `vite.config.ts` file to include the base path:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // This will be your domain name when using a custom domain
})
```

### 6. Configure Custom Domain in GitHub

1. In your repository settings, under GitHub Pages, enter your custom domain in the "Custom domain" field
2. Click "Save"
3. Check "Enforce HTTPS" for secure connections

### 7. Configure DNS Settings

At your domain registrar, set up the following DNS records:

#### Option A: Apex Domain (example.com)
Add these A records pointing to GitHub's IP addresses:
- A record: @ → 185.199.108.153
- A record: @ → 185.199.109.153
- A record: @ → 185.199.110.153
- A record: @ → 185.199.111.153

#### Option B: Subdomain (www.example.com)
Add a CNAME record:
- CNAME record: www → yourusername.github.io

#### Option C: Both (recommended)
Set up both the A records for the apex domain and the CNAME for the www subdomain.

### 8. Create a CNAME File

Create a file named `CNAME` (no file extension) in the `public` directory of your project with your domain name:

```
yourdomain.com
```

### 9. Deploy Your Site

Run the deploy script:

```bash
npm run deploy
```

### 10. Verify and Maintain

- DNS changes may take up to 24-48 hours to propagate
- GitHub will automatically create a CNAME file in your repository, but including it in your project ensures it won't be overwritten during deployments
- Your custom domain configuration will need to be renewed annually along with your domain registration

With these steps completed, your site should be accessible at your custom domain with HTTPS security.
