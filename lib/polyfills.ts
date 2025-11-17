// Polyfill para 'self' no servidor Node.js
// Este arquivo deve ser importado primeiro em todos os arquivos server-side
if (typeof global !== 'undefined' && typeof self === 'undefined') {
  (global as any).self = global;
  (global as any).self = (global as any).self || global;
}

// Garantir que self existe
if (typeof global !== 'undefined') {
  (global as any).self = (global as any).self || global;
}

