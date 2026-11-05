import { build } from 'esbuild';
await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'public/assets/app.js',
  legalComments: 'none',
  logLevel: 'info',
});
