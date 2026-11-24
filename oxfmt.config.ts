import { defineConfig } from 'oxfmt';

export default defineConfig({
  printWidth: 60,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.test.js', '*.spec.ts'],
      options: {
        printWidth: 120,
      },
    },
    {
      files: ['*.md', '*.html'],
      excludeFiles: ['*.min.js'],
      options: {
        tabWidth: 4,
      },
    },
  ],
});
