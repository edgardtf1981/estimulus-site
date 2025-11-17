# 🔧 Technical Specifications

## Arquitetura do Sistema

### Stack Tecnológico
- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **Estilização:** Tailwind CSS 3.4+
- **Animações:** Framer Motion 12+
- **Formulários:** React Hook Form (futuro), validação nativa
- **Email:** Nodemailer 7+
- **Deployment:** Vercel
- **Monitoring:** Vercel Analytics, Sentry (futuro)
- **CMS:** JSON-based (blog-posts.json)

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
- Máximo 3 requisições por hora por IP
- Headers: `X-RateLimit-Remaining`, `X-RateLimit-Reset`

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

### Input Sanitization
```typescript
// lib/sanitize.ts
export function sanitizeString(input: string): string {
  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');
  // Remove javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, '');
  // Remove event handlers
  sanitized = sanitized.replace(/on\w+="[^"]*"/gi, '');
  // Limit length
  return sanitized.substring(0, 10000);
}
```

### XSS Prevention
- Todos os inputs sanitizados antes de uso
- `dangerouslySetInnerHTML` apenas com conteúdo confiável
- Content Security Policy headers configurados

### Rate Limiting
```typescript
// lib/rateLimit.ts
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 });
    return true;
  }
  
  if (limit.count >= 3) {
    return false;
  }
  
  limit.count++;
  return true;
}
```

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

