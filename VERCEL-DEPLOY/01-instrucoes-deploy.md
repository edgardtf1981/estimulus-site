# 📋 Instruções de Deploy - Vercel

## 🚀 Deploy Rápido

### 1. Primeira Vez (Setup Inicial)

```bash
# Instalar Vercel CLI globalmente (se ainda não tiver)
npm install -g vercel

# Fazer login no Vercel
vercel login

# Conectar projeto ao Vercel
vercel

# Seguir as instruções interativas
```

### 2. Deploy de Produção

```bash
# Deploy para produção
vercel --prod

# Ou usando o script
npm run deploy:prod
```

### 3. Deploy de Preview (Desenvolvimento)

```bash
# Deploy para preview
vercel

# Ou usando o script
npm run deploy
```

---

## ⚙️ Configuração no Vercel Dashboard

### Variáveis de Ambiente

Acesse: **Vercel Dashboard → Seu Projeto → Settings → Environment Variables**

Configure as seguintes variáveis:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app
NODE_ENV=production
```

**Importante:**
- Para Gmail, use uma "App Password" (não a senha normal)
- Configure para todos os ambientes (Production, Preview, Development)

### Domínio Personalizado

1. Acesse: **Vercel Dashboard → Seu Projeto → Settings → Domains**
2. Adicione seu domínio
3. Configure os registros DNS conforme instruções do Vercel

---

## ✅ Verificações Pré-Deploy

### Executar Verificações

```bash
# Verificações automáticas
npm run precheck

# Verificar tipos TypeScript
npm run type-check

# Build local
npm run build

# Testar em produção local
npm run start
```

### Checklist Manual

- [ ] Build executa sem erros
- [ ] TypeScript sem erros
- [ ] Variáveis de ambiente configuradas
- [ ] Testes passando (se houver)
- [ ] Imagens otimizadas
- [ ] Bundle size aceitável

---

## 🔍 Verificação Pós-Deploy

### 1. Health Check

```bash
# Testar endpoint de health
curl https://seu-dominio.vercel.app/api/health

# Deve retornar:
# {
#   "status": "ok",
#   "timestamp": "...",
#   "uptime": ...,
#   "environment": "production"
# }
```

### 2. Verificar Headers

```bash
# Verificar headers de segurança
curl -I https://seu-dominio.vercel.app

# Deve incluir:
# - Strict-Transport-Security
# - X-Content-Type-Options
# - X-Frame-Options
# - X-XSS-Protection
```

### 3. Testar Funcionalidades

- [ ] Homepage carrega corretamente
- [ ] Calculadoras funcionam
- [ ] Raio-X envia emails
- [ ] Blog carrega artigos
- [ ] Imagens otimizadas
- [ ] Performance aceitável

---

## 📊 Monitoramento

### Vercel Analytics

1. Acesse: **Vercel Dashboard → Seu Projeto → Analytics**
2. Habilite Analytics (se ainda não estiver)
3. Monitore:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

### Speed Insights

1. Acesse: **Vercel Dashboard → Seu Projeto → Speed Insights**
2. Habilite Speed Insights
3. Monitore Core Web Vitals:
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)

### Logs

```bash
# Ver logs em tempo real
vercel logs

# Ver logs de um deployment específico
vercel logs [deployment-url]
```

---

## 🐛 Troubleshooting

### Build Falha

**Problema:** Build falha no Vercel

**Soluções:**
1. Verificar logs: `vercel logs`
2. Testar build local: `npm run build`
3. Verificar variáveis de ambiente
4. Verificar dependências no `package.json`

### Erro de Variáveis de Ambiente

**Problema:** Variáveis não estão disponíveis

**Soluções:**
1. Verificar se estão configuradas no Dashboard
2. Verificar se estão para o ambiente correto (Production/Preview)
3. Fazer redeploy após adicionar variáveis

### Performance Lenta

**Problema:** Site lento em produção

**Soluções:**
1. Verificar bundle size: `npm run build && du -sh .next/static/chunks/`
2. Otimizar imagens
3. Verificar cache headers
4. Usar Edge Functions quando possível

### Edge Functions Não Funcionam

**Problema:** Edge functions falham

**Soluções:**
1. Verificar se `export const runtime = 'edge'` está presente
2. Verificar se não usa APIs incompatíveis (fs, path, etc)
3. Verificar logs de erro

---

## 📝 Comandos Úteis

```bash
# Listar deployments
vercel ls

# Ver informações do projeto
vercel inspect

# Remover deployment
vercel remove [deployment-url]

# Ver variáveis de ambiente
vercel env ls

# Adicionar variável de ambiente via CLI
vercel env add SMTP_HOST production

# Ver logs
vercel logs

# Abrir projeto no navegador
vercel open
```

---

## 🎯 Próximos Passos

1. ✅ Configurar variáveis de ambiente
2. ✅ Fazer primeiro deploy
3. ✅ Verificar health check
4. ✅ Configurar domínio personalizado
5. ✅ Habilitar Analytics
6. ✅ Monitorar métricas
7. ✅ Otimizar baseado em métricas

---

## 📚 Documentação Adicional

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

**Boa sorte com o deploy! 🚀**

