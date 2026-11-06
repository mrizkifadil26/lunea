import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: '../../../saas-platform-py/openapi.json',
  output: './src/api/generated',
});
