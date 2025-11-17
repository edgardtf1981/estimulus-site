# Site Estimulus

Site institucional da Estimulus desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 13** - Framework React para produção
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **@headlessui/react** - Componentes UI acessíveis e sem estilo
- **@heroicons/react** - Ícones SVG otimizados

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

O servidor irá recarregar automaticamente quando você fizer alterações nos arquivos.

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
site-estimulus/
├── app/                    # Páginas e layouts do Next.js
│   ├── admin/             # Área administrativa
│   ├── api/               # Rotas de API
│   ├── blog/              # Sistema de blog
│   ├── calculadoras/      # Calculadoras interativas
│   ├── raio-x/            # Ferramenta Raio-X
│   ├── layout.tsx         # Layout raiz da aplicação
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/             # Componentes React reutilizáveis
│   ├── HomePage.tsx       # Componente da página inicial
│   ├── Logo.tsx           # Componente do logo
│   ├── MonitoringProvider.tsx
│   └── ThemeToggle.tsx
├── contexts/              # Contextos React
├── lib/                   # Bibliotecas e utilitários
├── public/                # Arquivos estáticos
├── scripts/               # Scripts de deploy e setup
└── PRD/                   # Documentação do produto
```

## ✅ Verificação de Código

```bash
npm run lint
npm run type-check
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint
- `npm run type-check` - Verifica tipos TypeScript
- `npm run precheck` - Verifica arquivos essenciais antes do deploy
- `npm run deploy` - Executa script de deploy

## 🔧 Configuração

O projeto está configurado com:
- TypeScript strict mode
- ESLint com regras do Next.js
- Tailwind CSS com configuração customizada
- Path aliases (`@/*` aponta para a raiz do projeto)
- Sistema de temas (claro/escuro)
- Monitoramento e analytics
- SEO otimizado

## 📚 Documentação

- **PRD/** - Documentação completa do produto
- **SEO-GEO/** - Estratégias de SEO e geolocalização
- **VERCEL-DEPLOY/** - Documentação de deploy no Vercel

