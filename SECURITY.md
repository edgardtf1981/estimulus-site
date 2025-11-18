# Política de Segurança

## 🛡️ Reportando Vulnerabilidades

Se você descobrir uma vulnerabilidade de segurança, por favor **NÃO** abra uma issue pública.

### Como Reportar

1. **Email:** Envie um email para [seu-email@estimulus.com.br] com os detalhes
2. **GitHub Security Advisories:** Use a funcionalidade de Security Advisories do GitHub (se disponível)

### O Que Incluir

- Descrição da vulnerabilidade
- Passos para reproduzir
- Impacto potencial
- Sugestões de correção (se tiver)

### Processo

1. Você reporta a vulnerabilidade
2. Nós confirmamos o recebimento (dentro de 48 horas)
3. Investigamos e corrigimos
4. Lançamos uma correção
5. Creditamos você (se desejar)

## 🔒 Medidas de Segurança Implementadas

### Headers de Segurança

- ✅ Strict-Transport-Security (HSTS)
- ✅ Content-Security-Policy (CSP)
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy

### Práticas de Segurança

- ✅ Variáveis de ambiente para dados sensíveis
- ✅ Validação de entrada em APIs
- ✅ Sanitização de dados
- ✅ HTTPS obrigatório
- ✅ Tokens seguros para autenticação

## 📋 Checklist de Segurança

Antes de fazer deploy:

- [ ] Todas as variáveis sensíveis estão em `.env`
- [ ] `.env` está no `.gitignore`
- [ ] Dependências atualizadas
- [ ] Sem credenciais hardcoded no código
- [ ] APIs com validação adequada
- [ ] Headers de segurança configurados

## 🔄 Atualizações de Segurança

Mantenha as dependências atualizadas:

```bash
npm audit
npm audit fix
```

## 📚 Recursos

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [Vercel Security](https://vercel.com/docs/security)

