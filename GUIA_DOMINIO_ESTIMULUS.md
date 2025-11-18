# 🌐 Guia Completo: Configurar www.estimulus.com.br

**Data:** 17 de Novembro de 2025  
**Status:** Aguardando build bem-sucedido + Configuração de domínio

---

## ✅ Pré-requisitos

### 1. Build Funcionando no Vercel ✅ (Em andamento)

**Status Atual:**
- ✅ Correções aplicadas para erro "self is not defined"
- ✅ Configuração webpack simplificada
- ⏳ Aguardando resultado do redeploy

**Se o build funcionar, prossiga para os próximos passos.**

---

## 🎯 Passo 1: Verificar Build Bem-Sucedido

### No Vercel Dashboard:

1. Acesse: https://vercel.com/dashboard
2. Abra o projeto: `edgardtf1981-estimulus-site` (ou `estimulus-site`)
3. Vá em **Deployments**
4. Verifique se o último deployment está com status **"Ready"** ou **"Success"**

**Se o build estiver funcionando, continue!** ✅

---

## 🌐 Passo 2: Configurar Domínio no Vercel

### 2.1 Adicionar Domínio

1. No Vercel Dashboard, vá em **Settings** → **Domains**
2. Clique em **Add Domain**
3. Digite: `estimulus.com.br`
4. Clique em **Add**
5. Repita para: `www.estimulus.com.br`

**O Vercel mostrará instruções de DNS para cada domínio.**

---

## 🔧 Passo 3: Configurar DNS no Provedor de Domínio

### 3.1 Onde Configurar

Acesse o painel do seu provedor de domínio (Registro.br, GoDaddy, Namecheap, etc.)

### 3.2 Configuração DNS Recomendada

**Opção A: Apenas www (Mais Simples)**

```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: 3600 (ou padrão)
```

**Opção B: Domínio Raiz + www (Recomendado)**

Para `estimulus.com.br` (sem www):
```
Tipo: A
Nome: @ (ou deixar em branco)
Valor: 76.76.21.21
TTL: 3600
```

Para `www.estimulus.com.br`:
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: 3600
```

### 3.3 Instruções Específicas por Provedor

#### Registro.br (Mais comum no Brasil):

1. Acesse: https://registro.br
2. Faça login
3. Vá em **Meus Domínios** → `estimulus.com.br`
4. Clique em **DNS**
5. Adicione os registros conforme acima

#### GoDaddy:

1. Acesse: https://godaddy.com
2. Vá em **My Products** → **DNS**
3. Adicione os registros

#### Namecheap:

1. Acesse: https://namecheap.com
2. Vá em **Domain List** → **Manage** → **Advanced DNS**
3. Adicione os registros

---

## ⏳ Passo 4: Aguardar Propagação DNS

### Tempo de Propagação:

- **Mínimo:** 5-15 minutos
- **Médio:** 1-2 horas
- **Máximo:** 24-48 horas

### Verificar Propagação:

Use ferramentas online:
- https://dnschecker.org
- https://www.whatsmydns.net

Digite: `www.estimulus.com.br` e verifique se aponta para o Vercel.

---

## ✅ Passo 5: Verificação no Vercel

### 5.1 Verificar Status

1. No Vercel Dashboard → **Settings** → **Domains**
2. Verifique se os domínios aparecem como **"Valid Configuration"**
3. O SSL/HTTPS será ativado automaticamente

### 5.2 Testar Acesso

Após a propagação DNS:

1. Acesse: https://www.estimulus.com.br
2. O site deve carregar normalmente
3. Verifique se o certificado SSL está ativo (cadeado verde)

---

## 📧 Passo 6: Configurar Variáveis de Ambiente (Opcional)

**Apenas se o site usar envio de emails (formulário Raio-X):**

### 6.1 No Vercel Dashboard:

1. Vá em **Settings** → **Environment Variables**
2. Adicione as seguintes variáveis:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-app-password
```

### 6.2 Criar App Password no Gmail:

1. Acesse: https://myaccount.google.com/apppasswords
2. Selecione: **Mail**
3. Selecione: **Outro (nome personalizado)**
4. Digite: "Estimulus Site"
5. Copie a senha gerada (16 caracteres)
6. Use essa senha no `SMTP_PASS`

### 6.3 Configurar Ambientes:

- Marque: **Production**
- Marque: **Preview** (opcional)
- Marque: **Development** (opcional)

**Após adicionar, faça um novo deploy para aplicar as variáveis.**

---

## 🔍 Passo 7: Verificações Finais

### Checklist Completo:

- [ ] Build no Vercel está funcionando
- [ ] Domínios adicionados no Vercel (`estimulus.com.br` e `www.estimulus.com.br`)
- [ ] DNS configurado no provedor de domínio
- [ ] Propagação DNS concluída (verificado em dnschecker.org)
- [ ] Domínios verificados no Vercel (status "Valid Configuration")
- [ ] SSL/HTTPS ativo (cadeado verde no navegador)
- [ ] Site acessível em https://www.estimulus.com.br
- [ ] Health check funcionando: https://www.estimulus.com.br/api/health
- [ ] Formulário Raio-X funcionando (se aplicável)
- [ ] Variáveis de ambiente configuradas (se usar email)

---

## 🚨 Troubleshooting

### Problema: Domínio não verifica no Vercel

**Soluções:**
1. Verificar se DNS está configurado corretamente
2. Aguardar mais tempo para propagação (até 48h)
3. Verificar se não há conflitos de DNS antigos
4. Limpar cache DNS: `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

### Problema: SSL não ativa

**Soluções:**
1. Aguardar até 24h (Vercel ativa SSL automaticamente)
2. Verificar se DNS está apontando corretamente
3. Verificar se não há redirecionamentos conflitantes

### Problema: Site não carrega

**Soluções:**
1. Verificar se build está funcionando
2. Verificar logs no Vercel Dashboard
3. Testar URL do Vercel primeiro: `https://seu-projeto.vercel.app`
4. Verificar se DNS está propagado corretamente

---

## 📝 Resumo Rápido

### Para www.estimulus.com.br funcionar:

1. ✅ **Build funcionando no Vercel** (aguardando resultado)
2. ✅ **Adicionar domínios no Vercel** (Settings → Domains)
3. ✅ **Configurar DNS no provedor** (CNAME para www, A para raiz)
4. ✅ **Aguardar propagação DNS** (1-2 horas geralmente)
5. ✅ **Verificar no Vercel** (status "Valid Configuration")
6. ✅ **Testar acesso** (https://www.estimulus.com.br)

**Tempo total estimado:** 2-4 horas (após build funcionar)

---

## 🎉 Pronto!

Após seguir todos os passos, o site estará acessível em:

- ✅ https://www.estimulus.com.br
- ✅ https://estimulus.com.br (redirecionará para www)

**O Vercel ativa SSL/HTTPS automaticamente!** 🔒

---

## 📞 Precisa de Ajuda?

- **Documentação Vercel:** https://vercel.com/docs/concepts/projects/domains
- **Suporte Vercel:** https://vercel.com/support
- **Verificar DNS:** https://dnschecker.org

