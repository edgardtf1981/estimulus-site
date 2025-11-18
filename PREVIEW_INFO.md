# 🚀 Preview do Site - Informações

**Data:** 17 de Novembro de 2025

---

## 🌐 Acessar o Preview

O servidor de desenvolvimento está rodando em:

**URL Local:** http://localhost:3000

---

## 📋 Páginas Disponíveis

### Páginas Principais:
- **Homepage:** http://localhost:3000/
- **Blog:** http://localhost:3000/blog
- **Calculadoras:** http://localhost:3000/calculadoras
- **Raio-X:** http://localhost:3000/raio-x
- **Admin Blog:** http://localhost:3000/admin/blog

### APIs:
- **Health Check:** http://localhost:3000/api/health
- **Raio-X API:** http://localhost:3000/api/raio-x (POST)

---

## ✅ Funcionalidades para Testar

### 1. Homepage
- ✅ Hero section com animações
- ✅ Seções de problemas e soluções
- ✅ Metodologia FINX 360
- ✅ Cases de sucesso
- ✅ Preços e planos
- ✅ FAQ
- ✅ Navegação completa

### 2. Calculadoras
- ✅ CAC (Custo de Aquisição)
- ✅ LTV (Lifetime Value)
- ✅ ROI (Retorno sobre Investimento)
- ✅ Churn (Taxa de Cancelamento)
- ✅ Validação de inputs
- ✅ Formatação de resultados

### 3. Raio-X
- ✅ Formulário multi-step
- ✅ 10 perguntas sobre o negócio
- ✅ Cálculo automático de score
- ✅ Scores por categoria
- ✅ Envio de email (requer variáveis de ambiente)

### 4. Blog
- ✅ Listagem de artigos
- ✅ Páginas individuais
- ✅ Markdown renderizado
- ✅ SEO otimizado

### 5. Área Admin
- ✅ Listagem de artigos
- ✅ Interface de edição (básica)
- ⚠️ Proteção básica ativa (em dev permite acesso)

---

## 🔒 Segurança em Preview

### Rate Limiting
- ✅ Ativo na API `/api/raio-x`
- ✅ Limite: 3 requisições por hora por IP
- ✅ Teste fazendo múltiplas requisições

### Proteção Admin
- ⚠️ Em desenvolvimento: permite acesso com aviso
- ⚠️ Em produção: bloquearia acesso sem autenticação

### Headers de Segurança
- ✅ Todos os headers configurados
- ✅ CSP ativo
- ✅ Permissions-Policy ativo

---

## 🧪 Testes Recomendados

### Funcionalidades:
1. ✅ Navegar entre todas as páginas
2. ✅ Testar calculadoras (preencher e calcular)
3. ✅ Preencher formulário Raio-X completo
4. ✅ Verificar responsividade (mobile, tablet, desktop)
5. ✅ Testar tema claro/escuro (se implementado)

### Performance:
1. ✅ Verificar tempo de carregamento
2. ✅ Testar animações
3. ✅ Verificar otimização de imagens

### Segurança:
1. ✅ Tentar enviar múltiplas requisições (rate limit)
2. ✅ Verificar sanitização de inputs
3. ✅ Testar área admin (deve mostrar aviso em dev)

---

## 📝 Notas Importantes

### Variáveis de Ambiente
Para testar envio de email no Raio-X, configure no `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-app-password
```

### Rate Limiting
- O rate limiting usa Map em memória
- Em desenvolvimento, pode resetar ao reiniciar o servidor
- Limite: 3 requisições por hora por IP

### Área Admin
- Em desenvolvimento: permite acesso mas loga aviso
- Em produção: redirecionaria para home sem autenticação

---

## 🛑 Parar o Servidor

Para parar o servidor de desenvolvimento:
- Pressione `Ctrl + C` no terminal
- Ou feche o terminal

---

**Preview ativo em:** http://localhost:3000

