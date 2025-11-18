# 🚀 Guia Passo a Passo - Deploy no Vercel

## 📋 Pré-requisitos

- ✅ Conta no Vercel (gratuita): https://vercel.com/signup
- ✅ Repositório no GitHub: `edgardtf1981/estimulus-site` (já está pronto!)
- ✅ Correções aplicadas (já foram commitadas)

---

## 🎯 Opção 1: Deploy via Dashboard (Mais Fácil - Recomendado)

### Passo 1: Acessar o Vercel

1. Acesse: **https://vercel.com/new**
2. Faça login (ou crie uma conta se não tiver)
3. Clique em **"Add New..."** → **"Project"**

### Passo 2: Conectar Repositório GitHub

1. Na tela de importação, você verá seus repositórios do GitHub
2. Procure por: **`edgardtf1981/estimulus-site`**
3. Clique em **"Import"** ao lado do repositório

### Passo 3: Configurar Projeto

O Vercel detectará automaticamente que é um projeto Next.js. Verifique:

- ✅ **Framework Preset:** Next.js (já detectado)
- ✅ **Root Directory:** `.` (raiz - deixe como está)
- ✅ **Build Command:** `npm run vercel-build` (detectado automaticamente)
- ✅ **Output Directory:** `.next` (já configurado)
- ✅ **Install Command:** `npm ci` (já configurado)

**Não precisa mudar nada!** Tudo já está configurado.

### Passo 4: Fazer Deploy

1. Clique no botão **"Deploy"** (canto inferior direito)
2. Aguarde o build (pode levar 2-5 minutos)
3. ✅ Se tudo der certo, você verá: **"Congratulations! Your project has been deployed."**

### Passo 5: Acessar seu Site

Após o deploy bem-sucedido:
- Você receberá uma URL: `https://estimulus-site-xxxxx.vercel.app`
- Clique na URL para ver seu site funcionando!

---

## 🛠️ Opção 2: Deploy via CLI

Se preferir usar a linha de comando:

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Fazer Login

```bash
vercel login
```

Siga as instruções para autenticar (abrirá o navegador).

### Passo 3: Fazer Deploy

```bash
# Navegue até a pasta do projeto
cd "E:\site Estimulus"

# Deploy para produção
vercel --prod
```

Siga as instruções interativas:
- **Set up and deploy?** → `Y`
- **Which scope?** → Escolha sua conta
- **Link to existing project?** → `N` (primeira vez)
- **Project name?** → `estimulus-site-novo` (ou deixe o padrão)
- **Directory?** → `.` (raiz)

### Passo 4: Aguardar Build

O Vercel fará o build automaticamente. Aguarde a conclusão.

---

## ✅ Verificar se Funcionou

Após o deploy:

1. **Testar o site:**
   - Acesse a URL fornecida pelo Vercel
   - Verifique se o site carrega corretamente

2. **Testar Health Check:**
   - Acesse: `https://seu-site.vercel.app/api/health`
   - Deve retornar: `{"status":"ok",...}`

3. **Verificar Build:**
   - No Dashboard do Vercel, vá em **"Deployments"**
   - Verifique se o build foi bem-sucedido (status verde)

---

## 🔧 Se Ainda Houver Erro

### Erro: "self is not defined"

Se ainda aparecer este erro:

1. **Verificar logs:**
   - No Dashboard do Vercel → Clique no deployment
   - Veja os logs completos do build

2. **Verificar se o script está correto:**
   - No `package.json`, deve ter: `"vercel-build": "node vercel-build-fix.js && next build"`

3. **Limpar cache e tentar novamente:**
   - No Dashboard → Settings → Clear Build Cache
   - Fazer novo deploy

### Outros Erros

- Verifique os logs completos no Dashboard
- Verifique se todas as dependências estão instaladas
- Verifique se não há erros de TypeScript

---

## 📝 Configurações Opcionais (Depois do Deploy)

### 1. Variáveis de Ambiente (se usar email)

No Dashboard do Vercel:
1. Vá em **Settings** → **Environment Variables**
2. Adicione:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=seu-email@gmail.com
   SMTP_PASS=sua-app-password
   ```
3. Marque para todos os ambientes (Production, Preview, Development)
4. Clique em **Save**

### 2. Domínio Personalizado

1. Vá em **Settings** → **Domains**
2. Clique em **Add Domain**
3. Digite seu domínio (ex: `estimulus.com.br`)
4. Siga as instruções de configuração DNS
5. Aguarde a verificação (pode levar algumas horas)

### 3. Deploy Automático

O Vercel já faz deploy automático quando você faz push para a branch `main` no GitHub!

Para configurar:
1. Vá em **Settings** → **Git**
2. Verifique se o repositório está conectado
3. Configure qual branch fazer deploy (geralmente `main`)

---

## 🎉 Pronto!

Após seguir estes passos, seu site estará no ar!

**URL do site:** `https://seu-projeto.vercel.app`

**Dashboard:** https://vercel.com/dashboard

---

## 📞 Precisa de Ajuda?

- **Documentação Vercel:** https://vercel.com/docs
- **Status do Vercel:** https://vercel-status.com
- **Suporte:** https://vercel.com/support

