// Polyfill global para 'self' - deve ser executado antes de qualquer código
// Este arquivo é injetado no início do bundle do servidor
if (typeof global !== 'undefined' && typeof self === 'undefined') {
  global.self = global;
}

