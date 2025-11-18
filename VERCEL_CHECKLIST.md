# ✅ Checklist Vercel - Status Atual

## 📋 Configuração de Arquivos

### ✅ Arquivos Configurados

- [x] **vercel.json** - Configuração completa com:
  - Framework Next.js
  - Headers de segurança
  - Cache otimizado
  - Funções serverless configuradas
  - Região definida (iad1)

- [x] **next.config.js** - Otimizado para produção:
  - Configuração de imagens
  - Headers de segurança
  - Webpack customization
  - Polyfills para compatibilidade

- [x] **package.json** - Scripts de deploy:
  - `npm run deploy` - Deploy preview
  - `npm run deploy:prod` - Deploy produção
  - `npm run precheck` - Verificações pré-deploy

- [x] **Scripts de deploy**:
  - `scripts/deploy.sh` - Script bash de deploy
  - `scripts/precheck.js` - Verificações automáticas

- [x] **Documentação completa** em `VERCEL-DEPLOY/`

## ⚠️ O Que Precisa Ser Feito

### 1. Conectar Repositório ao Vercel

**Opção A: Via Dashboard (Recomendado)**
1. Acesse: https://vercel.com/new
2. Importe o repositório: `edgardtf1981/estimulus-site`
3. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: `.` (raiz)
   - Build Command: `npm run build` (já configurado)
   - Output Directory: `.next` (já configurado)
4. Clique em **Deploy**

**Opção B: Via CLI**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Conectar projeto
vercel

# Deploy produção
vercel --prod
```

### 2. Variáveis de Ambiente (Opcional - se usar email)

Se o site usar envio de emails, configure no Vercel Dashboard:

**Settings → Environment Variables:**

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-app-password
NODE_ENV=production
```

**Importante:** Para Gmail, use "App Password" (não a senha normal)

### 3. Domínio Personalizado (Opcional)

1. Vercel Dashboard → Settings → Domains
2. Adicione seu domínio (ex: `estimulus.com.br`)
3. Configure DNS conforme instruções do Vercel

## 🚀 Próximos Passos

### Passo 1: Fazer Primeiro Deploy

```bash
# Via CLI
vercel --prod

# Ou conectar via Dashboard e fazer deploy automático
```

### Passo 2: Verificar Build

Após o deploy, verifique:
- ✅ Build bem-sucedido
- ✅ Site acessível
- ✅ Health check funcionando: `/api/health`
- ✅ Páginas carregando corretamente

### Passo 3: Configurar Deploy Automático

No Vercel Dashboard:
1. Settings → Git
2. Conectar repositório GitHub
3. Configurar auto-deploy para branch `main`

## 📊 Status Atual

| Item | Status | Observação |
|------|--------|------------|
| vercel.json | ✅ Pronto | Configuração completa |
| next.config.js | ✅ Pronto | Otimizado para produção |
| Scripts | ✅ Prontos | deploy.sh e precheck.js |
| Documentação | ✅ Completa | Pasta VERCEL-DEPLOY |
| Repositório GitHub | ✅ Conectado | edgardtf1981/estimulus-site |
| **Deploy no Vercel** | ⏳ Pendente | Precisa conectar e fazer primeiro deploy |
| Variáveis de Ambiente | ⏳ Opcional | Se usar funcionalidades de email |
| Domínio Personalizado | ⏳ Opcional | Se tiver domínio próprio |

## ✅ Conclusão

**Tudo está pronto para deploy no Vercel!**

O projeto está completamente configurado. Você só precisa:
1. Conectar o repositório ao Vercel (via Dashboard ou CLI)
2. Fazer o primeiro deploy
3. (Opcional) Configurar variáveis de ambiente e domínio

Todas as configurações necessárias já estão no código! 🚀

