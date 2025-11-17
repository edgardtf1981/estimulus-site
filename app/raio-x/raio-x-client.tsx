'use client'

import { useState } from 'react'
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Pergunta {
  id: number
  pergunta: string
  opcoes: string[]
  categoria: 'Fidelização' | 'IA + Dados' | 'Neuromarketing' | 'Experiência Marca'
}

const perguntas: Pergunta[] = [
  {
    id: 1,
    pergunta: 'Com que frequência seus clientes compram novamente na sua empresa?',
    opcoes: [
      'Mais de 4 vezes por ano',
      '2 a 4 vezes por ano',
      '1 vez por ano',
      'Raramente ou nunca compram novamente'
    ],
    categoria: 'Fidelização'
  },
  {
    id: 2,
    pergunta: 'Você possui um programa de fidelização ou cashback para seus clientes?',
    opcoes: [
      'Sim, tenho um programa estruturado e ativo',
      'Tenho algo básico, mas não está funcionando bem',
      'Não tenho, mas gostaria de ter',
      'Não tenho e não vejo necessidade'
    ],
    categoria: 'Fidelização'
  },
  {
    id: 3,
    pergunta: 'Como você utiliza dados e informações sobre seus clientes para tomar decisões?',
    opcoes: [
      'Uso dados estruturados e análises avançadas regularmente',
      'Tenho alguns dados, mas não sei como usar efetivamente',
      'Coletamos dados básicos, mas não analisamos',
      'Não coletamos ou utilizamos dados dos clientes'
    ],
    categoria: 'IA + Dados'
  },
  {
    id: 4,
    pergunta: 'Você conhece seus principais indicadores: CAC (Custo de Aquisição), LTV (Valor do Cliente) e Taxa de Churn?',
    opcoes: [
      'Sim, acompanho todos regularmente',
      'Conheço alguns, mas não acompanho',
      'Já ouvi falar, mas não sei calcular',
      'Não conheço esses indicadores'
    ],
    categoria: 'IA + Dados'
  },
  {
    id: 5,
    pergunta: 'Você utiliza gatilhos mentais e técnicas de neuromarketing nas suas campanhas?',
    opcoes: [
      'Sim, aplico estratégias de neuromarketing conscientemente',
      'Uso algumas técnicas intuitivamente',
      'Não sei o que é neuromarketing',
      'Não acredito que funcione'
    ],
    categoria: 'Neuromarketing'
  },
  {
    id: 6,
    pergunta: 'Como você segmenta seus clientes para campanhas de marketing?',
    opcoes: [
      'Segmentação avançada baseada em comportamento e dados',
      'Segmentação básica por demografia',
      'Envio mensagens para todos igualmente',
      'Não faço segmentação'
    ],
    categoria: 'Neuromarketing'
  },
  {
    id: 7,
    pergunta: 'Seus clientes indicam sua empresa para outras pessoas?',
    opcoes: [
      'Sim, recebo muitas indicações regularmente',
      'Algumas indicações, mas poderia ser mais',
      'Raramente recebo indicações',
      'Praticamente não recebo indicações'
    ],
    categoria: 'Experiência Marca'
  },
  {
    id: 8,
    pergunta: 'Você tem um processo estruturado para criar experiências memoráveis para seus clientes?',
    opcoes: [
      'Sim, temos um processo bem definido',
      'Tentamos criar boas experiências, mas sem processo',
      'Não temos processo, mas nos preocupamos com o cliente',
      'Não pensamos muito nisso'
    ],
    categoria: 'Experiência Marca'
  },
  {
    id: 9,
    pergunta: 'Qual é a principal forma de comunicação com seus clientes após a primeira compra?',
    opcoes: [
      'Sistema automatizado de comunicação multicanal',
      'Email marketing básico',
      'Redes sociais ocasionalmente',
      'Não mantenho comunicação regular'
    ],
    categoria: 'Fidelização'
  },
  {
    id: 10,
    pergunta: 'Quanto você investe em marketing para reter clientes existentes versus adquirir novos?',
    opcoes: [
      'Mais em retenção do que em aquisição',
      'Investimento equilibrado entre os dois',
      'Mais em aquisição do que em retenção',
      'Investo apenas em aquisição de novos clientes'
    ],
    categoria: 'IA + Dados'
  }
]

export default function RaioXClient() {
  const [respostas, setRespostas] = useState<Record<number, string>>({})
  const [perguntaAtual, setPerguntaAtual] = useState(0)
  const [dadosUsuario, setDadosUsuario] = useState({ nome: '', email: '', telefone: '' })
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [raioXEnviado, setRaioXEnviado] = useState(false)

  const handleResposta = (resposta: string) => {
    if (perguntaAtual >= 0 && perguntaAtual < perguntas.length) {
      setRespostas(prev => ({
        ...prev,
        [perguntas[perguntaAtual].id]: resposta
      }))
      
      if (perguntaAtual < perguntas.length - 1) {
        setTimeout(() => setPerguntaAtual(prev => prev + 1), 300)
      } else {
        setTimeout(() => setMostrarFormulario(true), 500)
      }
    }
  }

  const handleEnviarRaioX = async () => {
    if (!dadosUsuario.nome || !dadosUsuario.email) {
      alert('Por favor, preencha pelo menos nome e email')
      return
    }

    try {
      const score = calcularScore()
      const categoriaScores = {
        'Fidelização': getCategoriaScore('Fidelização'),
        'IA + Dados': getCategoriaScore('IA + Dados'),
        'Neuromarketing': getCategoriaScore('Neuromarketing'),
        'Experiência Marca': getCategoriaScore('Experiência Marca')
      }

      const response = await fetch('/api/raio-x', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dadosUsuario,
          respostas,
          score,
          categoriaScores
        }),
      })

      const data = await response.json()

      if (data.success) {
        setRaioXEnviado(true)
      } else {
        alert('Erro ao enviar. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao enviar Raio-X:', error)
      alert('Erro ao enviar. Tente novamente.')
    }
  }

  const calcularScore = (): number => {
    const totalRespostas = Object.keys(respostas).length
    if (totalRespostas === 0) return 0
    
    let score = 0
    perguntas.forEach((pergunta) => {
      const resposta = respostas[pergunta.id]
      if (resposta) {
        const indiceResposta = pergunta.opcoes.indexOf(resposta)
        if (indiceResposta !== -1) {
          score += (4 - indiceResposta)
        }
      }
    })
    
    return Math.round((score / (totalRespostas * 4)) * 100)
  }

  const getCategoriaScore = (categoria: string): number => {
    const perguntasCategoria = perguntas.filter(p => p.categoria === categoria)
    let score = 0
    let total = 0
    
    perguntasCategoria.forEach(pergunta => {
      const resposta = respostas[pergunta.id]
      if (resposta) {
        const indice = pergunta.opcoes.indexOf(resposta)
        if (indice !== -1) {
          score += (4 - indice)
          total += 4
        }
      }
    })
    
    return total > 0 ? Math.round((score / total) * 100) : 0
  }

  const score = mostrarFormulario ? calcularScore() : 0

  if (raioXEnviado) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container-premium py-20 text-center">
          <div className="card-premium p-12 max-w-2xl mx-auto">
            <CheckCircleIcon className="size-20 text-[#2A3B95] mx-auto mb-6" />
            <h1 className="text-h2-primary mb-4">
              Raio-X Enviado com Sucesso!
            </h1>
            <p className="text-body-large text-gray-600 mb-8">
              Em breve você receberá um email com seu Raio-X completo e personalizado.
            </p>
            <Link
              href="/"
              className="btn-primary-modern inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
            >
              Voltar para o início
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      {mostrarFormulario ? (
        <div className="container-premium py-12">
          {/* Resultado do Score */}
          <div className="card-premium p-8 mb-8">
            <h2 className="text-h2-secondary text-center mb-6">
              Seu Score de Fidelização
            </h2>
            <div className="text-center mb-8">
              <div className="text-7xl font-bold text-[#2A3B95] mb-4">
                {score}%
              </div>
              <p className="text-body-large text-gray-600">
                {score >= 75 ? 'Excelente! Você está no caminho certo.' : 
                 score >= 50 ? 'Bom, mas há espaço para melhorias.' : 
                 'Há oportunidades significativas de crescimento.'}
              </p>
            </div>

            {/* Scores por Categoria */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['Fidelização', 'IA + Dados', 'Neuromarketing', 'Experiência Marca'].map(categoria => {
                const catScore = getCategoriaScore(categoria)
                return (
                  <div key={categoria} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                    <p className="typography-caption text-gray-600 mb-2">{categoria}</p>
                    <p className="text-2xl font-bold text-[#2A3B95]">{catScore}%</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Formulário para Raio-X Completo */}
          <div className="card-premium p-8">
            <h2 className="text-h2-secondary mb-4 text-center">
              Receba seu Raio-X Completo
            </h2>
            <p className="text-body text-gray-600 text-center mb-8">
              Preencha seus dados para receber um Raio-X completo com 50 perguntas detalhadas e um diagnóstico personalizado do seu marketing de fidelização.
            </p>

            <div className="space-y-4 mb-6 max-w-md mx-auto">
              <div>
                <label className="block typography-body-small font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  value={dadosUsuario.nome}
                  onChange={(e) => setDadosUsuario(prev => ({ ...prev, nome: e.target.value }))}
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2A3B95] focus:outline-none focus:ring-2 focus:ring-[#2A3B95]/10 transition-all"
                />
              </div>

              <div>
                <label className="block typography-body-small font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={dadosUsuario.email}
                  onChange={(e) => setDadosUsuario(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="seu@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2A3B95] focus:outline-none focus:ring-2 focus:ring-[#2A3B95]/10 transition-all"
                />
              </div>

              <div>
                <label className="block typography-body-small font-semibold text-gray-700 mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  value={dadosUsuario.telefone}
                  onChange={(e) => setDadosUsuario(prev => ({ ...prev, telefone: e.target.value }))}
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2A3B95] focus:outline-none focus:ring-2 focus:ring-[#2A3B95]/10 transition-all"
                />
              </div>
            </div>

            <div className="max-w-md mx-auto">
              <button
                onClick={handleEnviarRaioX}
                className="btn-primary-modern w-full px-8 py-5 text-xl font-semibold mb-4"
              >
                Receber Raio-X Completo (50 perguntas)
              </button>

              <p className="typography-caption text-gray-500 text-center">
                Você receberá um email com o link para o Raio-X completo e diagnóstico personalizado.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <header className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-gray-100">
            <div className="container-premium py-8">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2A3B95] transition-colors">
                  <ArrowLeftIcon className="size-5" />
                  <span>Voltar para o início</span>
                </Link>
              </div>
              <h1 className="text-h2-primary mb-2">
                Raio-X Gratuito
              </h1>
              <p className="text-body-large text-gray-600">
                Descubra o potencial de crescimento do seu negócio
              </p>
            </div>
          </header>

          <main className="container-premium py-12">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between typography-body-small text-gray-600 mb-2">
                <span>Pergunta {perguntaAtual + 1} de {perguntas.length}</span>
                <span>{Math.round(((perguntaAtual + 1) / perguntas.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-[#2A3B95] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((perguntaAtual + 1) / perguntas.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Pergunta Atual */}
            {perguntas[perguntaAtual] && (
              <div className="card-premium p-8 md:p-12">
                <div className="mb-6">
                  <span className="badge-premium">
                    {perguntas[perguntaAtual].categoria}
                  </span>
                </div>
                
                <h2 className="text-h2-secondary mb-8">
                  {perguntas[perguntaAtual].pergunta}
                </h2>

                <div className="space-y-4">
                  {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
                    <button
                      key={index}
                      onClick={() => handleResposta(opcao)}
                      className="w-full text-left card-premium p-6 transition-all duration-300 group hover:border-[#2A3B95]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-[#2A3B95] flex items-center justify-center transition-colors">
                          {respostas[perguntas[perguntaAtual].id] === opcao && (
                            <div className="w-3 h-3 rounded-full bg-[#2A3B95]" />
                          )}
                        </div>
                        <span className="typography-body text-gray-900 font-medium">{opcao}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </main>
        </>
      )}
    </div>
  )
}

