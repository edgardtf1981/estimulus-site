// Script de inicialização para Vercel - define self antes de tudo
// Este arquivo deve ser executado antes do build do Next.js
// Adicione no package.json: "vercel-build": "node vercel-build-fix.js && next build"

// Definir self no nível mais alto possível
if (typeof global !== 'undefined') {
  if (typeof global.self === 'undefined') {
    global.self = global;
  }
}

if (typeof globalThis !== 'undefined') {
  if (typeof globalThis.self === 'undefined') {
    globalThis.self = globalThis;
  }
}

// Executar o build do Next.js
const { execSync } = require('child_process');
execSync('next build', { stdio: 'inherit' });

