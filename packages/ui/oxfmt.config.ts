import { defineConfig } from 'oxfmt';

export default defineConfig({
  printWidth: 60,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  sortImports: {
    groups: [
      'type-import',
      ['value-builtin', 'value-external'],
      'type-internal',
      'value-internal',
      ['type-parent', 'type-sibling', 'type-index'],
      ['value-parent', 'value-sibling', 'value-index'],
      'unknown',
    ],
  },
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
