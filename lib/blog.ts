import blogPostsData from './blog-posts.json'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  publishedAt: string
  author: string
  featuredImage: string
}

// Carregar posts do JSON de forma segura
function loadPosts(): BlogPost[] {
  try {
    // Next.js pode importar JSON de diferentes formas dependendo do contexto
    let data: any = blogPostsData
    
    // Se for um objeto com propriedade default (comum em alguns bundlers)
    if (data && typeof data === 'object' && 'default' in data) {
      data = data.default
    }
    
    // Se for um array, retornar diretamente
    if (Array.isArray(data)) {
      return data as BlogPost[]
    }
    
    return []
  } catch (error) {
    console.error('Erro ao carregar posts do blog:', error)
    return []
  }
}

const posts = loadPosts()

export function getAllPosts(): BlogPost[] {
  return posts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((post) => post.category === category)
}

