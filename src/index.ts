import { render } from '@unshopable/liquidx';
import { Asset, Compiler, Emitter, Plugin } from '@unshopable/melter';

export class LiquidXPlugin extends Plugin {
  apply(compiler: Compiler): void {
    compiler.hooks.emitter.tap('LiquidXPlugin', (emitter: Emitter) => {
      emitter.hooks.beforeAssetAction.tap('LiquidXPlugin', (asset: Asset) => {
        asset.content = Buffer.from(render(asset.content.toString()));
      });
    });
  }
}
