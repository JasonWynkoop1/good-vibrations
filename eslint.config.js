import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

// Flat config assembled from the plugin + parser packages directly.
// (`tseslint.config()` and the iterable `configs.recommended` live in the
// separate `typescript-eslint` meta-package, which isn't installed; the
// plugin's own `configs.recommended` is a legacy object, so its rules are
// spread instead.)
export default [
  { ignores: ['dist', 'ds-bundle', '.ds-sync', '.design-sync', 'docs'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // TypeScript itself checks these; the base ESLint rules false-positive
      // on TS types and enums.
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
]
