# Site Estimulus - Comunidade Builder Template

Projeto Next.js com TypeScript e Tailwind CSS integrando o template da Comunidade Builder.

## 🚀 Tecnologias

- **Next.js 14** - Framework React para produção
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
│   ├── layout.tsx         # Layout raiz da aplicação
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/             # Componentes React reutilizáveis
│   └── Example.tsx        # Componente principal do template
├── public/                # Arquivos estáticos
├── next.config.js         # Configuração do Next.js
├── tailwind.config.ts     # Configuração do Tailwind CSS
└── tsconfig.json          # Configuração do TypeScript
```

## ✅ Verificação de Código

```bash
npm run lint
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 🔧 Configuração

O projeto está configurado com:
- TypeScript strict mode
- ESLint com regras do Next.js
- Tailwind CSS com configuração padrão
- Path aliases (`@/*` aponta para a raiz do projeto)

