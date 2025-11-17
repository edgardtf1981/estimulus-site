'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { PencilIcon, TrashIcon, PlusIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import type { BlogPost } from '@/lib/blog'

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = () => {
    const allPosts = getAllPosts()
    setPosts(allPosts)
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost({ ...post })
    setShowForm(true)
  }

  const handleDelete = async (slug: string) => {
    if (confirm('Tem certeza que deseja excluir este artigo?')) {
      // Em produção, isso seria uma chamada à API
      console.log('Deletar:', slug)
      alert('Funcionalidade de exclusão será implementada com API')
      loadPosts()
    }
  }

  const handleSave = async () => {
    if (!editingPost) return

    // Em produção, isso seria uma chamada à API
    console.log('Salvar:', editingPost)
    alert('Funcionalidade de salvamento será implementada com API. Por enquanto, edite o arquivo lib/blog-posts.json diretamente.')
    
    setShowForm(false)
    setEditingPost(null)
    loadPosts()
  }

  const handleNewPost = () => {
    setEditingPost({
      slug: '',
      title: '',
      excerpt: '',
      content: '',
      category: 'Marketing',
      publishedAt: new Date().toISOString().split('T')[0],
      author: 'Equipe Estimulus',
      featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80'
    })
    setShowForm(true)
  }

  return (
    <div className="bg-[#0a0e27] min-h-screen">
      <div className="fixed inset-0 pattern-grid opacity-30 pointer-events-none" />
      
      <header className="relative z-10 bg-[#0a0e27]/80 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4">
            <ArrowLeftIcon className="size-5" />
            <span>Voltar para o site</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Área Administrativa - Blog
          </h1>
          <p className="text-xl text-gray-300">
            Gerencie seus artigos do blog
          </p>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {!showForm ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Artigos ({posts.length})</h2>
              <button
                onClick={handleNewPost}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#33399a] to-[#46239f] px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-[#33399a]/50 transition-all duration-300"
              >
                <PlusIcon className="size-5" />
                Novo Artigo
              </button>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Título</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Categoria</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Data</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {posts.map((post) => (
                      <tr key={post.slug} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">
                          <Link href={`/blog/${post.slug}`} className="text-white hover:text-[#fbbf24] transition-colors">
                            {post.title}
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-gray-300">{post.category}</td>
                        <td className="px-6 py-4 text-gray-300">{post.publishedAt}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleEdit(post)}
                              className="text-[#fbbf24] hover:text-[#f59e0b] transition-colors"
                              title="Editar"
                            >
                              <PencilIcon className="size-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(post.slug)}
                              className="text-red-400 hover:text-red-300 transition-colors"
                              title="Excluir"
                            >
                              <TrashIcon className="size-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-xl">
              <p className="text-white">
                <strong>Nota:</strong> Para editar os artigos, você pode editar diretamente o arquivo{' '}
                <code className="bg-black/30 px-2 py-1 rounded">lib/blog-posts.json</code> ou usar esta interface.
                Em produção, recomenda-se integrar com um CMS como Contentful ou Sanity.io.
              </p>
            </div>
          </>
        ) : (
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingPost?.slug ? 'Editar Artigo' : 'Novo Artigo'}
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Slug (URL)</label>
                <input
                  type="text"
                  value={editingPost?.slug || ''}
                  onChange={(e) => setEditingPost({ ...editingPost!, slug: e.target.value })}
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20"
                  placeholder="exemplo-artigo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Título</label>
                <input
                  type="text"
                  value={editingPost?.title || ''}
                  onChange={(e) => setEditingPost({ ...editingPost!, title: e.target.value })}
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20"
                  placeholder="Título do artigo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Resumo</label>
                <textarea
                  value={editingPost?.excerpt || ''}
                  onChange={(e) => setEditingPost({ ...editingPost!, excerpt: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20"
                  placeholder="Breve descrição do artigo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Conteúdo (Markdown)</label>
                <textarea
                  value={editingPost?.content || ''}
                  onChange={(e) => setEditingPost({ ...editingPost!, content: e.target.value })}
                  rows={15}
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20 font-mono text-sm"
                  placeholder="# Título do artigo&#10;&#10;Conteúdo do artigo em Markdown..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Categoria</label>
                  <select
                    value={editingPost?.category || 'Marketing'}
                    onChange={(e) => setEditingPost({ ...editingPost!, category: e.target.value })}
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20"
                  >
                    <option value="Marketing">Marketing</option>
                    <option value="Estratégia">Estratégia</option>
                    <option value="Cases">Cases</option>
                    <option value="Tutoriais">Tutoriais</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Data de Publicação</label>
                  <input
                    type="date"
                    value={editingPost?.publishedAt || ''}
                    onChange={(e) => setEditingPost({ ...editingPost!, publishedAt: e.target.value })}
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">URL da Imagem</label>
                <input
                  type="url"
                  value={editingPost?.featuredImage || ''}
                  onChange={(e) => setEditingPost({ ...editingPost!, featuredImage: e.target.value })}
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Autor</label>
                <input
                  type="text"
                  value={editingPost?.author || ''}
                  onChange={(e) => setEditingPost({ ...editingPost!, author: e.target.value })}
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20"
                  placeholder="Nome do autor"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="flex-1 rounded-xl bg-gradient-to-r from-[#33399a] to-[#46239f] px-6 py-4 text-lg font-semibold text-white hover:shadow-2xl hover:shadow-[#33399a]/50 transition-all duration-300"
                >
                  Salvar Artigo
                </button>
                <button
                  onClick={() => {
                    setShowForm(false)
                    setEditingPost(null)
                  }}
                  className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

