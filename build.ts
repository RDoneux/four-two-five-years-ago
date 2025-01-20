import { build, BuildOptions, BuildResult, Message, context, BuildContext } from 'esbuild';
import copy from 'esbuild-plugin-copy'

const ENTRY_POINTS = ['lib/main.ts'];
const OUT_DIR = './dist';

const args = process.argv.slice(2);
const watchMode = args.includes('--watch');

watchMode ? watchProject() : buildProject();

async function watchProject() {
  let ctx: BuildContext = await context({
    entryPoints: ENTRY_POINTS,
    outdir: OUT_DIR,
    minify: false,
    bundle: true,
    loader: { ".ts": "ts" },
    plugins: [
      copy({
        assets: {
          from: ['./src/index.html'],
          to: ['./']
        }
      })
    ],
    logLevel: 'info',
  });
  await ctx.watch();
  console.log('Watching...');
}

async function buildProject() {
  const buildOptions: BuildOptions = {
    entryPoints: ENTRY_POINTS,
    bundle: true,
    minify: true,
    loader: {".ts": "ts"},
  };
  const esmResult: BuildResult = await build({ ...buildOptions, outfile: `${OUT_DIR}/three-engine.js`, format: 'esm' });
  const cjsResult: BuildResult = await build({ ...buildOptions, outfile: `${OUT_DIR}/three-engine.umd.cjs`, format: 'cjs' });

  logResult([...esmResult.warnings, ...cjsResult.warnings], [...esmResult.errors, ...cjsResult.errors]);
}

function logResult(warnings: Message[], errors: Message[]) {
  console.log('--------------');
  console.log('Build complete');
  if (warnings.length) console.log('Warnings: ', warnings);
  if (errors.length) console.log('Errors: ', errors);
  console.log('--------------');
}
