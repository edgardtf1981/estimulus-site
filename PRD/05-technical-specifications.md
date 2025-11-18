# 🔧 Technical Specifications

## Arquitetura do Sistema

### Stack Tecnológico
- **Frontend:** Next.js 14.2.33 (App Router), React 18.3.1, TypeScript 5.5.4
- **Estilização:** Tailwind CSS 3.4.18
- **UI Components:** @headlessui/react 1.7.18, @heroicons/react 2.1.1
- **Formulários:** Validação nativa implementada
- **Email:** Nodemailer 7.0.10
- **Deployment:** Vercel (configurado)
- **Monitoring:** Vercel Speed Insights 1.2.0, Vercel Analytics
- **CMS:** JSON-based (blog-posts.json)
- **Segurança:** Rate limiting, CSP, Permissions-Policy, Logging seguro

### Componentes do Sistema

#### Frontend
```typescript
// Estrutura de componentes
components/
├── HomePage.tsx          # Página principal
├── Logo.tsx             # Componente de logo
├── PlexusTexture.tsx     # Background animado
├── CustomCursor.tsx     # Cursor customizado
└── ...

app/
├── page.tsx             # Homepage route
├── blog/
│   ├── page.tsx         # Lista de posts
│   └── [slug]/
│       └── page.tsx     # Post individual
├── calculadoras/
│   └── page.tsx         # Página de calculadoras
├── raio-x/
│   └── page.tsx         # Página de diagnóstico
└── api/
    └── raio-x/
        └── route.ts     # API route para envio de email
```

#### Backend (API Routes)
```typescript
// Estrutura de APIs
app/api/
├── raio-x/
│   └── route.ts         # POST - Envio de diagnóstico
└── contato/
    └── route.ts         # POST - Formulário de contato (futuro)
```

## API Specifications

### Endpoints Principais

#### 1. Envio de Diagnóstico (Raio-X)
```typescript
POST /api/raio-x
Content-Type: application/json

Request:
{
  "dadosUsuario": {
    "nome": "João Silva",
    "email": "joao@example.com",
    "telefone": "11999999999"
  },
  "respostas": {
    "faturamento": "100000",
    "segmento": "varejo",
    "problemas": ["rotatividade", "cac-alto"]
  },
  "score": 75
}

Response Success (200):
{
  "success": true,
  "message": "Diagnóstico enviado com sucesso"
}

Response Error (400):
{
  "success": false,
  "error": "Email inválido",
  "code": "INVALID_EMAIL"
}
```

**Validações:**
- Email válido (regex)
- Nome mínimo 3 caracteres
- Telefone formato brasileiro
- Score entre 0-100
- Sanitização de todos os inputs

**Rate Limiting:**
- ✅ **Implementado:** Máximo 3 requisições por hora por IP
- ✅ **Headers:** `X-RateLimit-Remaining`, `X-RateLimit-Reset`, `Retry-After`
- ✅ **Arquivo:** `lib/rate-limit.ts`
- ✅ **Status:** Funcionando em produção

#### 2. Formulário de Contato (Futuro)
```typescript
POST /api/contato
Content-Type: application/json

Request:
{
  "nome": "Maria Santos",
  "email": "maria@example.com",
  "telefone": "11988888888",
  "mensagem": "Gostaria de agendar uma consultoria",
  "assunto": "Agendamento"
}

Response Success (200):
{
  "success": true,
  "message": "Mensagem enviada com sucesso"
}
```

## Database Schema

### Estrutura Atual (JSON-based)
```json
// lib/blog-posts.json
[
  {
    "slug": "como-aumentar-vendas",
    "title": "Como aumentar suas vendas com fidelização",
    "excerpt": "Descubra estratégias comprovadas...",
    "content": "# Markdown content...",
    "category": "Marketing",
    "publishedAt": "2024-01-15",
    "author": "Equipe Estimulus",
    "featuredImage": "https://..."
  }
]
```

### Schema Futuro (Database)
```sql
-- Tabela de Posts do Blog
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  category VARCHAR(100),
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  author VARCHAR(255) DEFAULT 'Equipe Estimulus',
  featured_image VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Submissões de Raio-X
CREATE TABLE raio_x_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  respostas JSONB NOT NULL,
  score INTEGER CHECK (score >= 0 AND score <= 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Contatos
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  mensagem TEXT NOT NULL,
  assunto VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Integrações Externas

### 1. Email Service (Nodemailer)
```typescript
// Configuração
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Enviar email
const mailOptions = {
  from: process.env.SMTP_FROM,
  to: userEmail,
  subject: 'Diagnóstico Estimulus',
  html: emailTemplate,
};

await transporter.sendMail(mailOptions);
```

### 2. Analytics (Vercel Analytics)
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. Monitoring (Sentry - Futuro)
```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});
```

## Segurança

### ✅ Implementações de Segurança (Atualizado: 2025-11-17)

#### Input Sanitization
```typescript
// app/api/raio-x/route.ts
function sanitizeString(str: string): string {
  if (typeof str !== 'string') return ''
  return str
    .replace(/[<>]/g, '') // Remove < e >
    .replace(/javascript:/gi, '') // Remove javascript:
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .substring(0, 1000) // Limita tamanho
}
```
- ✅ **Status:** Implementado e funcionando
- ✅ **Localização:** `app/api/raio-x/route.ts`

#### XSS Prevention
- ✅ Todos os inputs sanitizados antes de uso
- ✅ `dangerouslySetInnerHTML` apenas com conteúdo confiável
- ✅ Content Security Policy headers configurados
- ✅ Permissions-Policy header adicionado
- ✅ `frame-ancestors 'none'` para prevenir clickjacking

#### Rate Limiting
```typescript
// lib/rate-limit.ts
export function rateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60 * 60 * 1000
): { allowed: boolean; remaining: number; resetTime: number }
```
- ✅ **Status:** Implementado e funcionando
- ✅ **Limite:** 3 requisições por hora por IP
- ✅ **Headers:** X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After
- ✅ **Localização:** `lib/rate-limit.ts`

#### Proteção de Área Administrativa
- ✅ **Status:** Proteção básica implementada
- ✅ **Localização:** `middleware.ts`
- ⚠️ **Nota:** Requer autenticação completa antes de produção
- ✅ **Comportamento:** Bloqueia acesso em produção sem autenticação

#### Headers de Segurança
- ✅ Strict-Transport-Security (HSTS)
- ✅ Content-Security-Policy (CSP melhorado - sem unsafe-eval)
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy

#### Logging Seguro
- ✅ Logs detalhados apenas em desenvolvimento
- ✅ Logs em produção não expõem dados sensíveis
- ✅ Stack traces não expostos em produção

### Análise de Segurança Realizada
- ✅ **Data:** 2025-11-17
- ✅ **OWASP Top 10:** Análise completa realizada
- ✅ **Vulnerabilidades Encontradas:** 8
- ✅ **Vulnerabilidades Corrigidas:** 5 automaticamente
- ✅ **Documentação:** `RELATORIO_SEGURANCA_COMPLETO.md`
- ✅ **Status:** Pronto para produção (com autenticação completa pendente)

## Performance

### Image Optimization
```typescript
// next/image com otimização automática
<Image
  src="/hero-background.png"
  alt="Background"
  width={1920}
  height={1080}
  priority
  quality={85}
  placeholder="blur"
/>
```

### Code Splitting
- Lazy loading de componentes pesados
- Dynamic imports para rotas
- Tree shaking automático

### Caching Strategy
- Static pages: ISR (Incremental Static Regeneration)
- API routes: Cache headers apropriados
- Assets: CDN caching via Vercel

## Acessibilidade

### WCAG 2.1 AA Compliance
- Contraste mínimo 4.5:1 para texto normal
- Contraste mínimo 3:1 para texto grande
- Navegação por teclado funcional
- ARIA labels em elementos interativos
- Alt text em todas as imagens

### Implementação
```typescript
// Exemplo de componente acessível
<button
  type="button"
  aria-label="Fazer Raio-X Gratuito"
  aria-required="false"
  className="btn-primary"
>
  Fazer Raio-X Gratuito
</button>
```

