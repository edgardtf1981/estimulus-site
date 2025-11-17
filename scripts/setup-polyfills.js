// Script para configurar polyfills antes do build
// Este arquivo define 'self' no ambiente Node.js antes do Next.js iniciar

if (typeof global !== 'undefined' && typeof self === 'undefined') {
  global.self = global;
}

