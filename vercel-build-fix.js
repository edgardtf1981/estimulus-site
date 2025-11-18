// Script de inicialização para Vercel - define self antes de tudo
// Este arquivo é executado pelo Vercel antes do build
// O Vercel executa: npm run vercel-build && next build

// Definir self no nível mais alto possível ANTES do webpack processar
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

// Garantir que self existe no escopo global
if (typeof self === 'undefined') {
  if (typeof global !== 'undefined') {
    global.self = global;
  } else if (typeof globalThis !== 'undefined') {
    globalThis.self = globalThis;
  }
}

// O Vercel executará 'next build' automaticamente após este script

