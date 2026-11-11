import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      './packages/ui/vitest.config.ts',
      './packages/ui/vitest.storybook.config.ts',
    ],
  },
});
