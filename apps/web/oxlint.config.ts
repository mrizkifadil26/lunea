import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['react', 'typescript', 'oxc'],
  categories: {
    correctness: 'error',
    suspicious: 'warn',
    perf: 'warn',
  },
  rules: {
    'import/named': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-relative-parent-imports': 'error',
    'react/rules-of-hooks': 'error',
    'react/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
  },
});
