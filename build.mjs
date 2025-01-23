import { context } from 'esbuild';
import copy from 'esbuild-plugin-copy';

const OUT_DIR = './test';

(async () => {
  const ctx = await context({
    entryPoints: ['src/index.ts'],
    outdir: OUT_DIR,
    minify: false,
    bundle: true,
    sourcemap: true,
    loader: { ".ts": "ts" },
    plugins: [
      copy({
        assets: [{
          from: './src/index.html',
          to: './'
        },
        { from: './src/resources/**/*', to: './resources' }]
      })
    ],
    logLevel: 'info',
  });
  await ctx.watch();
})();
