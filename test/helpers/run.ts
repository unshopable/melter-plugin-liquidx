import { CompilationStats, MelterConfig, melter } from '@unshopable/melter';
import { LiquidXPlugin } from '../../src';

const melterConfig: MelterConfig = {
  input: 'test/fixtures/src',
  output: 'test/fixtures/dist',

  plugins: [new LiquidXPlugin()],
};

export default function run(): Promise<CompilationStats> {
  return new Promise((resolve) => {
    const compiler = melter(melterConfig);

    compiler.hooks.done.tap('TestPlugin', (stats: CompilationStats) => {
      resolve(stats);
    });

    compiler.build();
  });
}
