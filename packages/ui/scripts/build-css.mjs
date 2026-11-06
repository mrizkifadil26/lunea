import fs from 'node:fs/promises';
import postcss from 'postcss';

const root = new URL('../', import.meta.url);
const src = new URL('../src/', import.meta.url);
const dist = new URL('../dist/', import.meta.url);

await fs.mkdir(dist, { recursive: true });

const css = await fs.readFile(
  new URL('style/index.css', src),
  'utf8',
);

const result = await postcss([
  nesting(),
  autoprefixer(),
  cssnano(),
]).process(css, {
  from: new URL('styles/index.css', src),
  to: new URL('index.css', dist),
});

await fs.writeFile(new URL('index.css', dist), result.css);
