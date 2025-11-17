'use client'

import Link from 'next/link'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { getAllPosts } from '@/lib/blog'
import Image from 'next/image'

export default function BlogClient() {
  const posts = getAllPosts()

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog - Estratégias de Fidelização",
    "description": "Artigos sobre marketing e fidelização de clientes para PMEs",
    "url": "https://estimulus.com.br/blog",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": posts.length,
      "itemListElement": posts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": post.title,
          "description": post.excerpt,
          "url": `https://estimulus.com.br/blog/${post.slug}`,
          "datePublished": post.publishedAt,
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="bg-white min-h-screen">
        {/* Header - Premium Minimalist */}
        <header className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-gray-100">
          <div className="container-premium py-12">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2A3B95] transition-colors">
                <ArrowLeftIcon className="size-5" />
                <span>Voltar para o início</span>
              </Link>
            </div>
            <h1 className="text-h2-primary mb-4">
              Blog
            </h1>
            <p className="text-body-large text-gray-600">
              Aprenda estratégias de marketing e fidelização de clientes
            </p>
          </div>
        </header>

        <main className="container-premium py-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card-premium overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 bg-gray-100">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="typography-caption text-[#2A3B95] font-bold mb-4 uppercase tracking-wide">{post.category}</div>
                  <h3 className="typography-h4 text-gray-900 mb-4 group-hover:text-[#2A3B95] transition-colors">
                    {post.title}
                  </h3>
                  <p className="typography-body text-gray-600 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="typography-caption text-gray-500">{post.publishedAt}</span>
                    <span className="typography-body-small text-[#2A3B95] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Ler mais
                      <ArrowRightIcon className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="typography-body-large text-gray-600 mb-4">Nenhum artigo publicado ainda.</p>
              <Link
                href="/admin/blog"
                className="btn-secondary-modern inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
              >
                Criar primeiro artigo
                <ArrowRightIcon className="size-5" />
              </Link>
            </div>
          )}
        </main>
      </div>
    </>
  )
}

