'use client'

import { useState } from 'react'
import { ArrowLeftIcon, CalculatorIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Calculadora {
  id: string
  icon: string
  titulo: string
  subtitulo: string
  descricao: string
  importancia: string
  formula: string
  campos: Array<{
    nome: string
    label: string
    placeholder: string
    tipo: 'number' | 'text'
  }>
  calcular: (valores: Record<string, number>) => number | string
}

const calculadoras: Calculadora[] = [
  {
    id: 'cac',
    icon: '💰',
    titulo: 'CAC',
    subtitulo: 'Custo de Aquisição de Cliente',
    descricao: 'O CAC (Custo de Aquisição de Cliente) representa quanto você gasta para conquistar um novo cliente. Inclui todos os custos de marketing e vendas divididos pelo número de clientes adquiridos.',
    importancia: 'Conhecer seu CAC é fundamental para entender a viabilidade do seu negócio. Se o CAC for maior que o LTV (Lifetime Value), você está perdendo dinheiro. O ideal é que o CAC seja pelo menos 3 vezes menor que o LTV.',
    formula: 'CAC = (Custos de Marketing + Custos de Vendas) / Número de Clientes Adquiridos',
    campos: [
      {
        nome: 'marketing',
        label: 'Custos de Marketing (R$)',
        placeholder: 'Ex: 10000',
        tipo: 'number'
      },
      {
        nome: 'vendas',
        label: 'Custos de Vendas (R$)',
        placeholder: 'Ex: 5000',
        tipo: 'number'
      },
      {
        nome: 'clientes',
        label: 'Número de Clientes Adquiridos',
        placeholder: 'Ex: 100',
        tipo: 'number'
      }
    ],
    calcular: (valores) => {
      const total = valores.marketing + valores.vendas
      const clientes = valores.clientes
      if (clientes === 0) return 'Erro: Número de clientes não pode ser zero'
      return total / clientes
    }
  },
  {
    id: 'ltv',
    icon: '📊',
    titulo: 'LTV',
    subtitulo: 'Valor do Ciclo de Vida',
    descricao: 'O LTV (Lifetime Value) é o valor total que um cliente gera para sua empresa durante todo o relacionamento. Representa a receita estimada que um cliente trará ao longo do tempo.',
    importancia: 'O LTV ajuda a determinar quanto você pode investir para adquirir um cliente. Um LTV alto permite investir mais em marketing. A relação ideal é LTV : CAC de 3:1 ou superior.',
    formula: 'LTV = Ticket Médio × Frequência de Compra × Tempo Médio de Relacionamento',
    campos: [
      {
        nome: 'ticket',
        label: 'Ticket Médio (R$)',
        placeholder: 'Ex: 150',
        tipo: 'number'
      },
      {
        nome: 'frequencia',
        label: 'Frequência de Compra (vezes/ano)',
        placeholder: 'Ex: 4',
        tipo: 'number'
      },
      {
        nome: 'tempo',
        label: 'Tempo Médio de Relacionamento (anos)',
        placeholder: 'Ex: 2',
        tipo: 'number'
      }
    ],
    calcular: (valores) => {
      return valores.ticket * valores.frequencia * valores.tempo
    }
  },
  {
    id: 'roi',
    icon: '📈',
    titulo: 'ROI',
    subtitulo: 'Retorno sobre Investimento',
    descricao: 'O ROI (Return on Investment) mede a eficiência de um investimento. Mostra quanto você ganha em relação ao que investiu, expresso em porcentagem.',
    importancia: 'O ROI ajuda a avaliar se suas campanhas de marketing estão gerando retorno positivo. Um ROI acima de 100% significa que você está lucrando. Quanto maior o ROI, melhor a eficiência do investimento.',
    formula: 'ROI = ((Receita - Investimento) / Investimento) × 100',
    campos: [
      {
        nome: 'receita',
        label: 'Receita Gerada (R$)',
        placeholder: 'Ex: 50000',
        tipo: 'number'
      },
      {
        nome: 'investimento',
        label: 'Investimento Realizado (R$)',
        placeholder: 'Ex: 20000',
        tipo: 'number'
      }
    ],
    calcular: (valores) => {
      const lucro = valores.receita - valores.investimento
      if (valores.investimento === 0) return 'Erro: Investimento não pode ser zero'
      return (lucro / valores.investimento) * 100
    }
  },
  {
    id: 'churn',
    icon: '⚠️',
    titulo: 'CHURN',
    subtitulo: 'Taxa de Cancelamento',
    descricao: 'O Churn Rate representa a porcentagem de clientes que cancelam ou param de comprar em um determinado período. É um indicador crítico da saúde do seu negócio.',
    importancia: 'Um churn alto indica problemas na retenção de clientes. Reduzir o churn é mais barato que adquirir novos clientes. O ideal é manter o churn abaixo de 5% ao mês. Cada ponto percentual de redução no churn pode aumentar significativamente sua receita.',
    formula: 'Churn = (Clientes Perdidos / Total de Clientes no Início) × 100',
    campos: [
      {
        nome: 'perdidos',
        label: 'Clientes Perdidos no Período',
        placeholder: 'Ex: 10',
        tipo: 'number'
      },
      {
        nome: 'inicio',
        label: 'Total de Clientes no Início do Período',
        placeholder: 'Ex: 200',
        tipo: 'number'
      }
    ],
    calcular: (valores) => {
      if (valores.inicio === 0) return 'Erro: Total de clientes não pode ser zero'
      return (valores.perdidos / valores.inicio) * 100
    }
  }
]

export default function CalculadorasClient() {
  const [calculadoraAtiva, setCalculadoraAtiva] = useState<string | null>(null)
  const [valores, setValores] = useState<Record<string, Record<string, number | undefined>>>({})
  const [resultados, setResultados] = useState<Record<string, number | string>>({})
  const [emails, setEmails] = useState<Record<string, string>>({})
  const [enviarEmail, setEnviarEmail] = useState<Record<string, boolean>>({})
  const [emailEnviado, setEmailEnviado] = useState<Record<string, boolean>>({})

  const handleInputChange = (calcId: string, campo: string, valor: string) => {
    const numValue = valor.trim() === '' ? undefined : parseFloat(valor)
    
    setValores(prev => ({
      ...prev,
      [calcId]: {
        ...prev[calcId],
        [campo]: (numValue !== undefined && !isNaN(numValue)) ? numValue : undefined
      }
    }))
  }

  const calcular = (calc: Calculadora) => {
    const valoresCalc = valores[calc.id] || {}
    
    const camposPreenchidos = calc.campos.every(campo => {
      const valor = valoresCalc[campo.nome]
      return typeof valor === 'number' && !isNaN(valor) && isFinite(valor)
    })
    
    if (!camposPreenchidos) {
      alert('Por favor, preencha todos os campos antes de calcular')
      return
    }
    
    const valoresNumericos: Record<string, number> = {}
    calc.campos.forEach(campo => {
      const valor = valoresCalc[campo.nome]
      if (typeof valor === 'number' && !isNaN(valor) && isFinite(valor)) {
        valoresNumericos[campo.nome] = valor
      }
    })
    
    try {
      const resultado = calc.calcular(valoresNumericos)
      setResultados(prev => ({
        ...prev,
        [calc.id]: resultado
      }))
    } catch (error) {
      console.error('Erro ao calcular:', error)
      alert('Erro ao calcular. Verifique os valores inseridos.')
    }
  }

  const handleEnviarEmail = async (calc: Calculadora) => {
    const email = emails[calc.id]
    const resultado = resultados[calc.id]
    
    if (!email || !email.includes('@')) {
      alert('Por favor, insira um email válido')
      return
    }

    if (!resultado) {
      alert('Por favor, calcule primeiro antes de solicitar o envio por email')
      return
    }

    try {
      // Enviar notificação para os emails da Estimulus
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          origem: `Calculadora ${calc.titulo} - Solicitação de Resultado`,
          mensagem: `O usuário solicitou o envio do resultado da calculadora ${calc.titulo}.\n\nResultado: ${resultado}\n\nCalculadora: ${calc.subtitulo || calc.titulo}`
        }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setEmailEnviado(prev => ({
          ...prev,
          [calc.id]: true
        }))
        
        alert('Email enviado com sucesso! Você receberá o resultado, material completo e artigo sobre como a Estimulus pode ajudar.')
      } else {
        alert('Erro ao enviar. Tente novamente.')
      }
    } catch (error) {
      alert('Erro ao enviar email. Tente novamente.')
    }
  }

  const validarEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const formatarResultado = (resultado: number | string, calcId: string): string => {
    if (typeof resultado === 'string') return resultado
    if (calcId === 'roi') return `${resultado.toFixed(2)}%`
    if (calcId === 'churn') return `${resultado.toFixed(2)}%`
    return `R$ ${resultado.toFixed(2)}`
  }

  const calculadoraExpandida = calculadoraAtiva ? calculadoras.find(c => c.id === calculadoraAtiva) : null

  return (
    <div className="bg-white min-h-screen">
      {/* Header - Premium Minimalist */}
      <header className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container-premium py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2A3B95] transition-colors mb-6">
            <ArrowLeftIcon className="size-5" />
            <span>Voltar para o início</span>
          </Link>
          <div>
            <h1 className="text-h2-primary mb-2">
              Calculadoras de Marketing
            </h1>
            <p className="text-body-large text-gray-600">
              Ferramentas práticas para medir e melhorar seus indicadores
            </p>
          </div>
        </div>
      </header>

      <main className="container-premium py-12">
        {/* Grid de Calculadoras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {calculadoras.map((calc) => {
            const brandColors = [
              { accent: '#2A3B95', bg: '#f8f9ff' },
              { accent: '#5D2C9D', bg: '#faf8ff' },
              { accent: '#2A3B95', bg: '#f0f9fa' },
              { accent: '#2A3B95', bg: '#f8f9ff' },
            ]
            const color = brandColors[calculadoras.indexOf(calc)] || brandColors[0]
            
            return (
              <div
                key={calc.id}
                className="card-premium p-6 cursor-pointer group"
                style={{ backgroundColor: color.bg }}
                onClick={() => {
                  setCalculadoraAtiva(calculadoraAtiva === calc.id ? null : calc.id)
                }}
              >
                <div className="text-5xl mb-4">{calc.icon}</div>
                <h3 className="typography-h4 text-gray-900 mb-2">{calc.titulo}</h3>
                <p className="typography-body-small text-gray-600 mb-4">{calc.subtitulo}</p>
                <button
                  type="button"
                  className="w-full rounded-lg px-4 py-2 typography-body-small font-semibold text-white hover:opacity-90 transition-all"
                  style={{ backgroundColor: color.accent }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCalculadoraAtiva(calculadoraAtiva === calc.id ? null : calc.id)
                  }}
                >
                  {calculadoraAtiva === calc.id ? 'Fechar' : 'Calcular'}
                </button>
              </div>
            )
          })}
        </div>

        {/* Calculadora Expandida */}
        {calculadoraExpandida && (
          <div className="card-premium p-8 md:p-12 mb-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="text-6xl">{calculadoraExpandida.icon}</div>
              <div className="flex-1">
                <h2 className="text-h2-secondary mb-2">{calculadoraExpandida.titulo}</h2>
                <p className="text-body-large text-gray-600">{calculadoraExpandida.subtitulo}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-8">
              {/* Informações */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-h3 mb-3 flex items-center gap-2">
                    <InformationCircleIcon className="size-6 text-[#2A3B95]" />
                    O que é?
                  </h3>
                  <p className="text-body text-gray-600 leading-relaxed">{calculadoraExpandida.descricao}</p>
                </div>

                <div>
                  <h3 className="text-h3 mb-3">Por que é importante?</h3>
                  <p className="text-body text-gray-600 leading-relaxed">{calculadoraExpandida.importancia}</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h4 className="typography-caption font-semibold text-[#2A3B95] mb-2 uppercase">FÓRMULA</h4>
                  <p className="typography-body-small text-gray-900 font-mono">{calculadoraExpandida.formula}</p>
                </div>
              </div>

              {/* Calculadora */}
              <div className="card-premium p-6">
                <h3 className="text-h3 mb-6 flex items-center gap-2">
                  <CalculatorIcon className="size-6 text-[#2A3B95]" />
                  Calcular
                </h3>
                
                <div className="space-y-4 mb-6">
                  {calculadoraExpandida.campos.map((campo) => (
                    <div key={campo.nome}>
                      <label className="block typography-body-small font-semibold text-gray-700 mb-2">
                        {campo.label}
                      </label>
                      <input
                        type="number"
                        step="any"
                        value={valores[calculadoraExpandida.id]?.[campo.nome] !== undefined ? valores[calculadoraExpandida.id]![campo.nome] : ''}
                        onChange={(e) => handleInputChange(calculadoraExpandida.id, campo.nome, e.target.value)}
                        placeholder={campo.placeholder}
                        className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2A3B95] focus:outline-none focus:ring-2 focus:ring-[#2A3B95]/10 transition-all"
                      />
                    </div>
                  ))}
                  
                  {/* Campo de Email */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <input
                        type="checkbox"
                        id={`email-checkbox-${calculadoraExpandida.id}`}
                        checked={enviarEmail[calculadoraExpandida.id] || false}
                        onChange={(e) => setEnviarEmail(prev => ({
                          ...prev,
                          [calculadoraExpandida.id]: e.target.checked
                        }))}
                        className="w-5 h-5 rounded border-gray-300 text-[#2A3B95] focus:ring-[#2A3B95] focus:ring-2"
                      />
                      <label htmlFor={`email-checkbox-${calculadoraExpandida.id}`} className="typography-body-small font-semibold text-gray-900 cursor-pointer">
                        Receber resultado por email
                      </label>
                    </div>
                    
                    {enviarEmail[calculadoraExpandida.id] && (
                      <div>
                        <label className="block typography-body-small font-semibold text-gray-700 mb-2">
                          Seu Email
                        </label>
                        <input
                          type="email"
                          value={emails[calculadoraExpandida.id] || ''}
                          onChange={(e) => setEmails(prev => ({
                            ...prev,
                            [calculadoraExpandida.id]: e.target.value
                          }))}
                          placeholder="seu@email.com"
                          className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-900 placeholder-gray-400 focus:border-[#2A3B95] focus:outline-none focus:ring-2 focus:ring-[#2A3B95]/10 transition-all"
                        />
                        <p className="typography-caption text-gray-500 mt-2">
                          Você receberá o resultado completo, material explicativo e artigo sobre como a Estimulus pode ajudar a melhorar seus indicadores de performance.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    calcular(calculadoraExpandida)
                  }}
                  className="btn-primary-modern w-full px-6 py-4 text-lg font-semibold mb-6"
                >
                  Calcular
                </button>

                {resultados[calculadoraExpandida.id] !== undefined && (
                  <>
                    <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center mb-4">
                      <p className="typography-body-small text-gray-600 mb-2">Resultado</p>
                      <p className="text-4xl font-bold text-[#2A3B95]">
                        {formatarResultado(resultados[calculadoraExpandida.id], calculadoraExpandida.id)}
                      </p>
                    </div>

                    {enviarEmail[calculadoraExpandida.id] && emails[calculadoraExpandida.id] && validarEmail(emails[calculadoraExpandida.id]) && !emailEnviado[calculadoraExpandida.id] && (
                      <button
                        onClick={() => handleEnviarEmail(calculadoraExpandida)}
                        className="btn-secondary-modern w-full px-6 py-4 text-lg font-semibold"
                      >
                        Enviar Resultado por Email
                      </button>
                    )}

                    {emailEnviado[calculadoraExpandida.id] && (
                      <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 text-center">
                        <p className="typography-body-small text-gray-900">
                          ✓ Email enviado! Você receberá o resultado completo, material explicativo e artigo sobre como a Estimulus pode ajudar a melhorar seus indicadores de performance.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Sugestão de Blog - Rodapé */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-h2-secondary mb-3">
              Continue aprendendo sobre métricas e fidelização
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Explore nossos artigos e descubra estratégias práticas para melhorar seus indicadores de performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Artigo 1: CAC vs LTV */}
            <Link 
              href="/blog/cac-vs-ltv"
              className="group card-premium p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">📊</div>
              <h3 className="typography-h4 text-gray-900 mb-2 group-hover:text-[#2A3B95] transition-colors">
                CAC vs LTV: entenda a relação
              </h3>
              <p className="typography-body-small text-gray-600 mb-4">
                Aprenda a calcular e otimizar essas métricas essenciais para o crescimento do seu negócio.
              </p>
              <span className="inline-flex items-center gap-2 text-[#2A3B95] font-semibold text-sm group-hover:gap-3 transition-all">
                Ler artigo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Artigo 2: Como aumentar vendas */}
            <Link 
              href="/blog/como-aumentar-vendas"
              className="group card-premium p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="typography-h4 text-gray-900 mb-2 group-hover:text-[#2A3B95] transition-colors">
                Como aumentar suas vendas com fidelização
              </h3>
              <p className="typography-body-small text-gray-600 mb-4">
                Descubra estratégias comprovadas para fidelizar clientes e aumentar o ticket médio.
              </p>
              <span className="inline-flex items-center gap-2 text-[#2A3B95] font-semibold text-sm group-hover:gap-3 transition-all">
                Ler artigo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Artigo 3: 5 sinais */}
            <Link 
              href="/blog/5-sinais-redesenhar-estrategia-fidelizacao"
              className="group card-premium p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="typography-h4 text-gray-900 mb-2 group-hover:text-[#2A3B95] transition-colors">
                5 sinais de que é hora de redesenhar sua estratégia
              </h3>
              <p className="typography-body-small text-gray-600 mb-4">
                Descubra os principais indicadores que mostram quando seu programa precisa ser repensado.
              </p>
              <span className="inline-flex items-center gap-2 text-[#2A3B95] font-semibold text-sm group-hover:gap-3 transition-all">
                Ler artigo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2A3B95] text-white font-semibold hover:bg-[#3d52b8] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Ver todos os artigos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

