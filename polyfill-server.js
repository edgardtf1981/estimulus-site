// Polyfill global para 'self' - deve ser executado antes de qualquer código
// Este arquivo é injetado no início do bundle do servidor
(function() {
  'use strict';
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
})();

