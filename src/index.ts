import { render } from '@unshopable/liquidx';
import { Compiler, MelterPlugin } from '@unshopable/melter';

export default class LiquidXPlugin extends MelterPlugin {
  apply(compiler: Compiler): void {
    compiler.hooks.beforeEmit.tapPromise('LiquidXPlugin', (file) => {
      return new Promise((resolve) => {
        const updatedFile = {
          ...file,
          content: render(file.content),
        };

        return resolve(updatedFile);
      });
    });
  }
}
