import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: './tsconfig.json',
      exclude: [
        '.storybook/**/*',
        '**/*.stories.ts',
        '**/*.stories.tsx',
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rolldownOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],

      output: {
        exports: 'named',
        preserveModulesRoot: resolve(
          import.meta.dirname,
          'src',
        ),
        preserveModules: true,
        entryFileNames: '[name].js',
      },
      moduleTypes: {
        '.css': 'js',
        '.module.css': 'js',
      },
      treeshake: {
        moduleSideEffects: false,
      },
    },
    sourcemap: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
