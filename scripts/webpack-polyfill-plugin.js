// Plugin webpack para substituir 'self' por 'globalThis' no código gerado
const { sources } = require('webpack');

class SelfPolyfillPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('SelfPolyfillPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: 'SelfPolyfillPlugin',
          stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        (assets) => {
          // Substituir 'self' por 'globalThis' em todos os arquivos JS do servidor
          for (const [filename, asset] of Object.entries(assets)) {
            if (filename.endsWith('.js') && (filename.includes('server') || filename.includes('vendor'))) {
              const source = asset.source();
              if (typeof source === 'string') {
                let newSource = source;
                // Substituir self.webpackChunk por globalThis.webpackChunk
                newSource = newSource.replace(/self\.webpackChunk/g, 'globalThis.webpackChunk');
                newSource = newSource.replace(/\(self\./g, '(globalThis.');
                newSource = newSource.replace(/\bself\b(?=\s*\.)/g, 'globalThis');
                
                if (newSource !== source) {
                  compilation.updateAsset(filename, new sources.RawSource(newSource));
                }
              }
            }
          }
        }
      );
    });
  }
}

module.exports = SelfPolyfillPlugin;

