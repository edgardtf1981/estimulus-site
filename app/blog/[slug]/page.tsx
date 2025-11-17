import { Metadata } from 'next'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Artigo não encontrado | Estimulus',
    }
  }

  return {
    title: `${post.title} | Blog Estimulus`,
    description: post.excerpt || `Leia o artigo completo sobre ${post.title} no blog da Estimulus.`,
    keywords: `${post.category.toLowerCase()}, fidelização, marketing, ${post.title.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [post.featuredImage],
      url: `https://estimulus.com.br/blog/${post.slug}`,
    },
    alternates: {
      canonical: `https://estimulus.com.br/blog/${post.slug}`,
    },
  }
}

export async function generateStaticParams() {
  try {
    const posts = getAllPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Erro ao gerar params:', error)
    return []
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featuredImage,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Estimulus",
      "logo": {
        "@type": "ImageObject",
        "url": "https://estimulus.com.br/logo-oficial-estimulus.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://estimulus.com.br/blog/${post.slug}`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="bg-[#0a0e27] min-h-screen">
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 pattern-grid opacity-30 pointer-events-none" />
        
        {/* Header */}
        <header className="relative z-10 bg-[#0a0e27]/80 backdrop-blur-xl border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4">
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Voltar para o blog</span>
            </Link>
          </div>
        </header>

        <article className="relative z-10 mx-auto max-w-4xl px-6 py-12 lg:px-8" itemScope itemType="https://schema.org/Article">
        <div className="mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#33399a] to-[#46239f] text-white text-sm font-semibold mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 mb-8">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
          </div>
        </div>

        <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div 
            className="text-gray-300 leading-relaxed blog-content"
            dangerouslySetInnerHTML={{ 
              __html: (() => {
                let html = ''
                let inList = false
                let listType = ''
                
                const processInline = (text: string) => {
                  // Escape HTML
                  text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                  // Bold **text**
                  text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
                  // Italic *text* (but not if it's part of **)
                  text = text.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em class="italic">$1</em>')
                  // Code `text`
                  text = text.replace(/`(.+?)`/g, '<code class="bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>')
                  return text
                }
                
                const processLine = (line: string) => {
                  // Headers
                  if (line.startsWith('# ')) {
                    if (inList) {
                      html += `</${listType}>\n`
                      inList = false
                    }
                    html += `<h1 class="text-4xl font-bold text-white mt-8 mb-4 scroll-mt-8">${processInline(line.substring(2))}</h1>\n`
                    return
                  }
                  if (line.startsWith('## ')) {
                    if (inList) {
                      html += `</${listType}>\n`
                      inList = false
                    }
                    html += `<h2 class="text-3xl font-bold text-white mt-6 mb-3 scroll-mt-8">${processInline(line.substring(3))}</h2>\n`
                    return
                  }
                  if (line.startsWith('### ')) {
                    if (inList) {
                      html += `</${listType}>\n`
                      inList = false
                    }
                    html += `<h3 class="text-2xl font-bold text-white mt-4 mb-2 scroll-mt-8">${processInline(line.substring(4))}</h3>\n`
                    return
                  }
                  
                  // Lists
                  if (line.match(/^[-*]\s/)) {
                    if (!inList || listType !== 'ul') {
                      if (inList) html += `</${listType}>\n`
                      html += '<ul class="list-disc list-inside mb-4 mt-4 space-y-2 ml-6">\n'
                      inList = true
                      listType = 'ul'
                    }
                    html += `<li class="mb-1 leading-relaxed">${processInline(line.substring(2))}</li>\n`
                    return
                  }
                  
                  if (line.match(/^\d+\.\s/)) {
                    if (!inList || listType !== 'ol') {
                      if (inList) html += `</${listType}>\n`
                      html += '<ol class="list-decimal list-inside mb-4 mt-4 space-y-2 ml-6">\n'
                      inList = true
                      listType = 'ol'
                    }
                    const match = line.match(/^\d+\.\s(.+)/)
                    html += `<li class="mb-1 leading-relaxed">${processInline(match ? match[1] : line)}</li>\n`
                    return
                  }
                  
                  // Empty line
                  if (line.trim() === '') {
                    if (inList) {
                      html += `</${listType}>\n`
                      inList = false
                    }
                    html += '<br />\n'
                    return
                  }
                  
                  // Regular paragraph
                  if (inList) {
                    html += `</${listType}>\n`
                    inList = false
                  }
                  html += `<p class="mb-4 leading-relaxed">${processInline(line)}</p>\n`
                }
                
                const lines = post.content.split('\n')
                lines.forEach(line => {
                  processLine(line)
                })
                
                if (inList) {
                  html += `</${listType}>\n`
                }
                
                return html
              })()
            }}
          />
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#fbbf24] font-semibold hover:text-[#f59e0b] transition-colors"
          >
            ← Voltar para o blog
          </Link>
        </div>
      </article>
    </div>
    </>
  )
}

