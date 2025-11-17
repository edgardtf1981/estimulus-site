# 🚀 O Que Falta Para www.estimulus.com.br Funcionar

**Data:** 2024-12-19  
**Status:** ⚠️ 3 Passos Principais Pendentes

---

## ❌ PROBLEMA PRINCIPAL: Erro de Build

### Erro Atual:
```
ReferenceError: self is not defined
at Object.<anonymous> (.next/server/vendor.js:1:1)
```

### Status:
- ❌ Build local falha
- ❌ Build no Vercel falha (último deploy: Error)
- ⚠️ Site não está funcionando

---

## ✅ PASSO 1: Resolver Erro de Build

### Opção A: Desabilitar Otimização de Imports (RECOMENDADO)

Editar `next.config.js` e remover/comentar:

```javascript
experimental: {
  optimizeCss: true,
  // REMOVER ESTA LINHA:
  // optimizePackageImports: ['@heroicons/react', '@headlessui/react'],
},
```

**Depois executar:**
```bash
npm run build
```

### Opção B: Atualizar Dependências

```bash
npm install @headlessui/react@latest @heroicons/react@latest
npm run build
```

### Opção C: Verificar Versão do Next.js

O projeto está com Next.js 16.0.3 (atualizado). Se o erro persistir, tentar:

```bash
npm install next@14.2.5
npm run build
```

---

## ✅ PASSO 2: Configurar Variáveis de Ambiente no Vercel

### Acessar Vercel Dashboard:
1. Ir para: https://vercel.com/dashboard
2. Selecionar projeto: `estimulus-site`
3. Ir em: **Settings → Environment Variables**

### Adicionar Variáveis:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-app-password
```

**Importante:**
- Para Gmail, use "App Password" (não a senha normal)
- Configure para: **Production, Preview, Development**
- Após adicionar, fazer novo deploy

### Como Criar App Password no Gmail:
1. Acessar: https://myaccount.google.com/apppasswords
2. Selecionar app: "Mail"
3. Selecionar dispositivo: "Outro (nome personalizado)"
4. Copiar a senha gerada (16 caracteres)
5. Usar essa senha no `SMTP_PASS`

---

## ✅ PASSO 3: Configurar Domínio Personalizado

### No Vercel Dashboard:
1. Ir em: **Settings → Domains**
2. Clicar em: **Add Domain**
3. Digitar: `estimulus.com.br` e `www.estimulus.com.br`
4. Seguir instruções de DNS

### Configuração DNS (no seu provedor de domínio):

**Opção A: Apenas www (Recomendado)**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

**Opção B: Domínio raiz + www**
```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

**Depois:**
- Aguardar propagação DNS (pode levar até 48h, geralmente 1-2h)
- Vercel verificará automaticamente

---

## 📋 CHECKLIST COMPLETO

### Build e Deploy:
- [ ] **Resolver erro de build** (Passo 1)
- [ ] Build local funcionando: `npm run build`
- [ ] Deploy no Vercel: `vercel --prod`
- [ ] Build no Vercel bem-sucedido

### Configurações:
- [ ] **Variáveis de ambiente configuradas** (Passo 2)
- [ ] SMTP_HOST configurado
- [ ] SMTP_USER configurado
- [ ] SMTP_PASS configurado (App Password)
- [ ] Testar envio de email

### Domínio:
- [ ] **Domínio configurado no Vercel** (Passo 3)
- [ ] DNS configurado no provedor
- [ ] Domínio verificado no Vercel
- [ ] SSL/HTTPS ativado automaticamente

### Testes:
- [ ] Site acessível em: https://www.estimulus.com.br
- [ ] Health check: https://www.estimulus.com.br/api/health
- [ ] Formulário Raio-X funcionando
- [ ] Emails sendo enviados corretamente

---

## 🚀 COMANDOS RÁPIDOS

### 1. Resolver Build e Fazer Deploy:
```bash
# Editar next.config.js (remover optimizePackageImports)
# Depois:
npm run build
vercel --prod
```

### 2. Verificar Deploy:
```bash
vercel ls
vercel logs
```

### 3. Testar Localmente:
```bash
npm run dev
# Acessar: http://localhost:3000
```

---

## 🎯 PRIORIDADE

### 🔴 URGENTE (Para site funcionar):
1. **Resolver erro de build** (Passo 1)
2. **Fazer deploy bem-sucedido**

### 🟡 IMPORTANTE (Para funcionalidades):
3. **Configurar variáveis de ambiente** (Passo 2)
4. **Configurar domínio** (Passo 3)

### 🟢 OPCIONAL (Melhorias):
5. Monitoramento e analytics
6. Otimizações adicionais

---

## 📞 SUPORTE

Se o erro de build persistir após tentar as opções:

1. Verificar logs do Vercel: `vercel logs`
2. Verificar dependências: `npm ls`
3. Limpar cache: `rm -rf .next node_modules && npm install`
4. Tentar build limpo: `npm run build`

---

## ✅ CONCLUSÃO

**Para o site www.estimulus.com.br funcionar, você precisa:**

1. ✅ **Resolver o erro de build** (desabilitar optimizePackageImports)
2. ✅ **Fazer deploy bem-sucedido no Vercel**
3. ✅ **Configurar variáveis de ambiente** (SMTP)
4. ✅ **Configurar domínio personalizado** (DNS)

**Depois disso, o site estará funcionando!** 🎉

