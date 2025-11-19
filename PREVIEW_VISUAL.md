# 🎨 Preview Visual do Site Estimulus

## 📋 Visão Geral do Projeto

**Site Institucional da Estimulus** - Plataforma completa de fidelização de clientes para PMEs

### 🚀 Tecnologias Utilizadas
- **Next.js 14** (App Router)
- **React 18** com TypeScript
- **Tailwind CSS** para estilização
- **Headless UI** para componentes acessíveis
- **Heroicons** para ícones

---

## 🌐 Como Acessar o Preview

### Servidor de Desenvolvimento
O servidor está rodando em: **http://localhost:3000**

Se não estiver rodando, execute:
```bash
npm run dev
```

---

## 📄 Estrutura de Páginas

### 🏠 Página Inicial (`/`)
**Componente Principal:** `components/HomePage.tsx`

#### Seções da Homepage:

1. **Hero Section**
   - Headline dinâmico com palavras alternadas:
     - "Melhora Resultados"
     - "Aumenta as Vendas"
     - "Traz o Cliente de Volta"
     - "Aumenta o Ticket Médio"
   - Background com imagem hero
   - CTAs principais
   - Contadores animados:
     - 6.000+ empresas atendidas
     - 10.000+ horas de experiência
     - 70.000+ programas criados
     - 99% de aprovação

2. **Seção de Problemas (Dores)**
   - 3 problemas principais:
     - 🔥 Cliente compra 1x e some
     - 💸 Gasta em anúncio e não lucra
     - 📉 Vendas oscilam todo mês

3. **Produtos/Estratégias**
   - 6 produtos principais:
     - ⚡ Programa de Cashback
     - 🎁 Prêmios por Pontos
     - 💬 Pesquisa de Satisfação
     - 👥 Indicação de Amigos
     - 🔌 Integração
     - ✨ Automação + IA

4. **Metodologia FINX 360**
   - 4 pilares:
     - **F** - Fidelização Clientes
     - **I** - IA + Dados
     - **N** - Neuromarketing
     - **X** - Experiência Marca

5. **Cases de Sucesso**
   - 3 cases com resultados:
     - Varejo: +38% em 90 dias
     - Serviços: +71% em 6 meses
     - E-commerce: +81% em 12 meses

6. **Como Funciona**
   - 3 passos:
     - 1️⃣ RELEVÂNCIA
     - 2️⃣ MOTIVAÇÃO
     - 3️⃣ VELOCIDADE

7. **Calculadoras**
   - 4 calculadoras disponíveis:
     - 💰 CAC (Custo de Aquisição)
     - 📊 LTV (Lifetime Value)
     - 📈 ROI (Retorno sobre Investimento)
     - ⚠️ CHURN (Taxa de Cancelamento)

8. **Ofertas/Planos**
   - 4 planos:
     - **Mentoria Estratégica** - R$ 1.490
     - **FINX 360** - R$ 4.900/mês ⭐ (Popular)
     - **Cursos** - A partir R$ 490
     - **Criação** - Sob consulta

9. **Depoimentos**
   - 4 depoimentos com:
     - Foto do cliente
     - Nome, cargo e empresa
     - Resultado alcançado
     - Avaliação 5 estrelas

10. **Segmentos Atendidos**
    - Varejo
    - E-commerce
    - Serviços
    - Saúde & Beleza
    - Alimentação
    - Educação

11. **FAQ (Perguntas Frequentes)**
    - Seção de perguntas e respostas

12. **Logos de Clientes**
    - Carrossel com logos dos clientes

13. **CTA Final**
    - Seção de conversão final

---

### 🧮 Calculadoras (`/calculadoras`)
**Arquivo:** `app/calculadoras/page.tsx`

**Funcionalidades:**
- 4 calculadoras interativas
- Validação de inputs
- Formatação de resultados
- Interface responsiva

**Calculadoras Disponíveis:**
1. **CAC** - Custo de Aquisição de Cliente
2. **LTV** - Lifetime Value (Valor do Ciclo de Vida)
3. **ROI** - Retorno sobre Investimento
4. **CHURN** - Taxa de Cancelamento

---

### 🔍 Raio-X (`/raio-x`)
**Arquivo:** `app/raio-x/page.tsx`

**Funcionalidades:**
- Formulário multi-step
- 10 perguntas sobre o negócio
- Cálculo automático de score
- Scores por categoria
- Envio de email com diagnóstico
- Rate limiting (3 requisições/hora por IP)

**Categorias Avaliadas:**
- Fidelização
- Marketing
- Dados & Analytics
- Experiência do Cliente

---

### 📝 Blog (`/blog`)
**Arquivo:** `app/blog/page.tsx`

**Funcionalidades:**
- Listagem de artigos
- Páginas individuais (`/blog/[slug]`)
- Renderização de Markdown
- SEO otimizado
- Sistema de tags e categorias

**Dados:** `lib/blog-posts.json`

---

### 🔐 Admin Blog (`/admin/blog`)
**Arquivo:** `app/admin/blog/page.tsx`

**Funcionalidades:**
- Listagem de artigos
- Interface de edição (básica)
- ⚠️ Em desenvolvimento: proteção básica ativa

---

### 🎯 Páginas de Produtos

1. **FINX 360** (`/finx-360`)
   - Página dedicada ao produto principal

2. **Mentoria Estratégica** (`/mentoria-estrategica`)
   - Página do serviço de mentoria

3. **Cursos** (`/cursos`)
   - Página de cursos disponíveis

4. **Criação** (`/criacao`)
   - Página de serviços de criação

---

## 🎨 Design System

### Paleta de Cores
- **Azul Principal:** `#2A3B95`
- **Roxo Secundário:** `#5D2C9D`
- **Branco:** `#FFFFFF`
- **Cinza Escuro:** `#1F2937`
- **Cinza Claro:** `#6B7280`

### Tipografia
- Fontes modernas e legíveis
- Hierarquia clara de títulos
- Espaçamento otimizado

### Componentes
- **Logo:** Componente reutilizável
- **Theme Toggle:** Suporte a tema claro/escuro
- **Navigation:** Menu responsivo com mobile
- **Buttons:** CTAs com gradientes
- **Cards:** Design moderno com sombras

---

## 🔧 Funcionalidades Técnicas

### Performance
- ✅ Otimização de imagens (WebP, AVIF)
- ✅ Lazy loading
- ✅ Code splitting automático
- ✅ Compressão habilitada

### SEO
- ✅ Metadata completo
- ✅ Schema.org (JSON-LD)
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Sitemap automático
- ✅ Robots.txt configurado

### Segurança
- ✅ Headers de segurança (CSP, HSTS, etc.)
- ✅ Rate limiting nas APIs
- ✅ Sanitização de inputs
- ✅ Permissions Policy

### Analytics
- ✅ Vercel Analytics
- ✅ Speed Insights
- ✅ Monitoring Provider

---

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## 🧪 Testes Recomendados

### Funcionalidades
1. ✅ Navegar entre todas as páginas
2. ✅ Testar calculadoras (preencher e calcular)
3. ✅ Preencher formulário Raio-X completo
4. ✅ Verificar responsividade (mobile, tablet, desktop)
5. ✅ Testar tema claro/escuro (se implementado)
6. ✅ Testar menu mobile
7. ✅ Verificar animações e transições

### Performance
1. ✅ Verificar tempo de carregamento
2. ✅ Testar animações
3. ✅ Verificar otimização de imagens
4. ✅ Testar lazy loading

### Segurança
1. ✅ Tentar enviar múltiplas requisições (rate limit)
2. ✅ Verificar sanitização de inputs
3. ✅ Testar área admin (deve mostrar aviso em dev)

---

## 🔌 APIs Disponíveis

### `/api/health`
- Health check endpoint
- Retorna status do servidor

### `/api/raio-x` (POST)
- Endpoint para envio do formulário Raio-X
- Rate limiting: 3 requisições/hora por IP
- Envia email com diagnóstico

### `/api/edge/location`
- Endpoint edge para geolocalização

---

## 📦 Estrutura de Arquivos

```
site-estimulus/
├── app/                    # Páginas Next.js (App Router)
│   ├── admin/             # Área administrativa
│   ├── api/               # Rotas de API
│   ├── blog/              # Sistema de blog
│   ├── calculadoras/      # Calculadoras interativas
│   ├── raio-x/            # Ferramenta Raio-X
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── components/             # Componentes React
│   ├── HomePage.tsx       # Componente principal
│   ├── Logo.tsx           # Logo da empresa
│   └── ThemeToggle.tsx    # Toggle de tema
├── contexts/              # Contextos React
│   └── ThemeContext.tsx   # Contexto de tema
├── lib/                   # Utilitários
│   ├── blog.ts           # Funções do blog
│   └── blog-posts.json   # Dados do blog
└── public/               # Arquivos estáticos
    ├── logo-oficial-estimulus.png
    └── logos-clientes/   # Logos dos clientes
```

---

## 🚀 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Cria build de produção
npm start            # Inicia servidor de produção
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript
npm run precheck     # Verifica arquivos antes do deploy
```

---

## 📝 Variáveis de Ambiente

Para funcionalidades completas, configure no `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-app-password
```

---

## 🎯 Próximos Passos

1. ✅ Servidor rodando em http://localhost:3000
2. ✅ Navegar pelas páginas
3. ✅ Testar funcionalidades
4. ✅ Verificar responsividade
5. ✅ Testar formulários e calculadoras

---

## 📞 Informações de Contato

- **Site:** https://estimulus.com.br
- **Email:** contato@estimulus.com.br
- **Telefone:** +55-11-99405-1155
- **Instagram:** @estimulusmarketing
- **YouTube:** /fidelimax

---

**Preview ativo em:** http://localhost:3000 🚀

