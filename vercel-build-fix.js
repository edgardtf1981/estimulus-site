// Script de inicialização para Vercel - define self antes de tudo
// Este arquivo é executado pelo Vercel antes do build
// O Vercel executa: npm run vercel-build

// Garantir que globalThis existe (deve existir no Node.js 12+, mas garantimos)
if (typeof globalThis === 'undefined') {
  if (typeof global !== 'undefined') {
    global.globalThis = global;
  } else if (typeof window !== 'undefined') {
    window.globalThis = window;
  } else if (typeof self !== 'undefined') {
    self.globalThis = self;
  }
}

// Definir self no nível mais alto possível ANTES do webpack processar
if (typeof global !== 'undefined') {
  if (typeof global.self === 'undefined') {
    global.self = global;
  }
  // Garantir que globalThis.self existe
  if (typeof globalThis !== 'undefined' && typeof globalThis.self === 'undefined') {
    globalThis.self = globalThis;
  }
}

// Garantir que self existe no escopo global
if (typeof self === 'undefined') {
  if (typeof global !== 'undefined') {
    global.self = global;
  } else if (typeof globalThis !== 'undefined') {
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

