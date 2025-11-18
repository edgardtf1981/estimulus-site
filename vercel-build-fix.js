// Script de inicialização para Vercel - define self antes de tudo
// Este arquivo é executado pelo Vercel antes do build

// Garantir que globalThis existe
if (typeof globalThis === 'undefined') {
  if (typeof global !== 'undefined') {
    global.globalThis = global;
  }
}

// Definir self no nível mais alto possível ANTES do webpack processar
if (typeof global !== 'undefined') {
  if (typeof global.self === 'undefined') {
    global.self = global;
  }
  if (typeof globalThis !== 'undefined' && typeof globalThis.self === 'undefined') {
    globalThis.self = globalThis;
  }
}

// Executar o build do Next.js
const { execSync } = require('child_process');
try {
  execSync('next build', { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}

