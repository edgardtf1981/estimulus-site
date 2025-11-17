# Sistema de Blog - Estimulus

## 📝 Estrutura Criada

O sistema de blog foi criado com as seguintes funcionalidades:

### Páginas Públicas
- **`/blog`** - Lista todos os artigos do blog
- **`/blog/[slug]`** - Página individual de cada artigo

### Área Administrativa
- **`/admin/blog`** - Interface para gerenciar artigos

## 🗂️ Arquivos Criados

```
lib/
  ├── blog-posts.json    # Armazena os artigos (JSON)
  └── blog.ts            # Funções para acessar os posts

app/
  ├── blog/
  │   ├── page.tsx       # Lista de posts
  │   └── [slug]/
  │       └── page.tsx  # Post individual
  └── admin/
      └── blog/
          └── page.tsx   # Área administrativa
```

## 🚀 Como Usar

### Acessar a Área Administrativa

1. Acesse: `http://localhost:3000/admin/blog`
2. Você verá uma lista de todos os artigos
3. Clique no ícone de lápis (✏️) para editar um artigo
4. Clique no ícone de lixeira (🗑️) para excluir um artigo
5. Clique em "Novo Artigo" para criar um novo post

### Editar Artigos

**Opção 1: Interface Web**
- Acesse `/admin/blog`
- Clique em "Editar" no artigo desejado
- Faça as alterações e clique em "Salvar"

**Opção 2: Editar JSON diretamente**
- Abra o arquivo `lib/blog-posts.json`
- Edite os artigos diretamente no JSON
- Salve o arquivo
- O servidor Next.js recarregará automaticamente

### Estrutura de um Artigo

```json
{
  "slug": "url-do-artigo",
  "title": "Título do Artigo",
  "excerpt": "Breve descrição",
  "content": "# Título\n\nConteúdo em Markdown...",
  "category": "Marketing",
  "publishedAt": "2024-01-15",
  "author": "Equipe Estimulus",
  "featuredImage": "https://..."
}
```

### Formato do Conteúdo

O campo `content` aceita Markdown:
- `# Título Principal`
- `## Subtítulo`
- `- Lista com marcadores`
- `1. Lista numerada`
- Texto normal

## ⚠️ Notas Importantes

1. **Atualmente, a funcionalidade de salvar/excluir via interface web está em desenvolvimento**
   - Por enquanto, edite diretamente o arquivo `lib/blog-posts.json`
   - Em produção, recomenda-se integrar com um CMS (Contentful, Sanity.io, etc.)

2. **Slug (URL)**
   - Deve ser único
   - Use apenas letras minúsculas, números e hífens
   - Exemplo: `como-aumentar-vendas`

3. **Imagens**
   - Use URLs de imagens (Unsplash, etc.)
   - Ou hospede as imagens na pasta `public/images/`

## 🔄 Próximos Passos (Recomendações)

Para produção, considere:

1. **Integrar com CMS**
   - Contentful
   - Sanity.io
   - Strapi

2. **Adicionar Autenticação**
   - Proteger a rota `/admin/blog`
   - Adicionar login/autenticação

3. **API Routes**
   - Criar endpoints para CRUD de posts
   - `/api/blog/posts` - GET, POST
   - `/api/blog/posts/[slug]` - GET, PUT, DELETE

4. **Banco de Dados**
   - Migrar de JSON para banco de dados
   - PostgreSQL, MongoDB, etc.

## 📚 Exemplos de Uso

### Adicionar Novo Artigo

1. Acesse `/admin/blog`
2. Clique em "Novo Artigo"
3. Preencha todos os campos
4. Salve o arquivo `lib/blog-posts.json` manualmente (ou aguarde a implementação da API)

### Visualizar Artigo

- Acesse `/blog` para ver todos os artigos
- Clique em um artigo para ver o conteúdo completo

