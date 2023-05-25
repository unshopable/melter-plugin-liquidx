import { melter } from '@unshopable/melter';
import LiquidXPlugin from '../../src';

const compiler = melter({
  plugins: [new LiquidXPlugin()],
});

export default function run() {
  compiler.build();
}
