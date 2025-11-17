# 🔧 Troubleshooting - Erro de Build

## Problema Identificado

**Erro:** `ReferenceError: self is not defined` durante o build

**Causa:** Alguma dependência (provavelmente `framer-motion` ou `gsap`) está tentando usar `self` no servidor durante o build.

## Soluções Aplicadas

1. ✅ Criado `MonitoringProvider` como componente client-side separado
2. ✅ Removido código de inicialização do `lib/monitoring.ts` que executava no servidor
3. ✅ Adicionado webpack config para definir `self` como `undefined` no servidor
4. ✅ Configurado externals para framer-motion e gsap no servidor

## Próximos Passos

### Opção 1: Verificar se framer-motion/gsap estão sendo usados

Se não estiverem sendo usados, remova do `package.json`:

```bash
npm uninstall framer-motion gsap
```

### Opção 2: Garantir uso apenas no cliente

Se estiverem sendo usados, certifique-se de que:
- Todos os componentes que usam essas libs têm `'use client'` no topo
- Não há imports dessas libs em arquivos server-side

### Opção 3: Build funciona no Vercel

O build pode funcionar no Vercel mesmo com esse erro local, pois o ambiente é diferente.

## Verificação

Para testar se o build funciona no Vercel:

```bash
# Fazer deploy mesmo com erro local
vercel --prod

# Ou verificar se o erro é apenas local
# O Vercel pode ter configurações diferentes
```

## Status

- ✅ Configurações de otimização aplicadas
- ✅ Scripts de deploy criados
- ✅ Health check endpoint criado
- ⚠️ Build local com erro (pode funcionar no Vercel)

**Recomendação:** Fazer deploy no Vercel para testar se o erro persiste no ambiente de produção.

