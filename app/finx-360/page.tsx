'use client'

import { useState } from 'react'
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  StarIcon,
  ChevronDownIcon,
  BoltIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import Logo from '@/components/Logo'
import Link from 'next/link'

const pilares = [
  {
    letra: 'F',
    titulo: 'FIDELIZAÇÃO CLIENTES',
    descricao: 'Cliente compra mais e compra de novo.',
    color: '#2A3B95',
    icon: UserGroupIcon
  },
  {
    letra: 'I',
    titulo: 'IA + DADOS',
    descricao: 'Decisão baseada em números',
    color: '#5D2C9D',
    icon: CpuChipIcon
  },
  {
    letra: 'N',
    titulo: 'NEUROMARKETING',
    descricao: 'Gatilhos mentais e comportamento',
    color: '#008C9E',
    icon: SparklesIcon
  },
  {
    letra: 'X',
    titulo: 'EXPERIÊNCIA MARCA',
    descricao: 'Cliente indica e publica nas redes sociais',
    color: '#2A3B95',
    icon: RocketLaunchIcon
  }
]

const features = [
  {
    icon: RocketLaunchIcon,
    title: 'Planejamento Completo',
    description: 'Estratégia 360° do seu programa de fidelização desde o início'
  },
  {
    icon: SparklesIcon,
    title: 'Site e Identidade Visual',
    description: 'Presença digital profissional com design moderno e responsivo'
  },
  {
    icon: ChartBarIcon,
    title: 'Campanhas ADS Otimizadas',
    description: 'Anúncios que convertem com inteligência artificial e dados'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Programa de Fidelidade Completo',
    description: 'Sistema completo de pontos, cashback e recompensas'
  },
  {
    icon: UserGroupIcon,
    title: 'Gerenciamento Mensal',
    description: 'Acompanhamento contínuo e otimização constante'
  }
]

const benefits = [
  'Aumento de até 300% na receita recorrente',
  'Redução de até 50% no CAC',
  'Taxa de retenção acima de 90%',
  'ROI positivo em menos de 3 meses',
  'Suporte dedicado mensal'
]

const testimonials = [
  {
    name: 'Roberto Lima',
    role: 'CEO - Health Clinic',
    text: 'Com a metodologia FINX 360, conseguimos aumentar a frequência de retorno dos pacientes em 3x. O investimento se pagou em menos de 2 meses. Recomendo!',
    rating: 5,
    result: '+3x frequência',
    badge: 'SERVIÇOS'
  },
  {
    name: 'Patricia Alves',
    role: 'Diretora de Marketing - Fashion Store',
    text: 'O programa FINX 360 transformou nosso negócio. Aumentamos a retenção em 78% e o ticket médio em 42%. Resultados que superaram todas as expectativas!',
    rating: 5,
    result: '+78% retenção',
    badge: 'VAREJO'
  },
  {
    name: 'Juliana Ferreira',
    role: 'Proprietária - Gourmet Restaurant',
    text: 'O sistema completo da Estimulus fez nossos clientes voltarem toda semana. Faturamento aumentou 85% em um ano. Equipe extremamente profissional!',
    rating: 5,
    result: '+85% faturamento',
    badge: 'SERVIÇOS'
  }
]

const faqs = [
  {
    question: 'O que está incluído no FINX 360?',
    answer: 'O FINX 360 inclui planejamento completo do projeto, site e identidade visual, campanhas ADS otimizadas, programa de fidelidade completo e gerenciamento mensal com follow-up contínuo.'
  },
  {
    question: 'Quanto tempo para ver resultados?',
    answer: 'Os primeiros resultados aparecem em 30-60 dias, com ROI positivo geralmente em menos de 3 meses. O programa é otimizado continuamente para maximizar resultados.'
  },
  {
    question: 'Preciso ter conhecimento técnico?',
    answer: 'Não é necessário. Nossa equipe cuida de tudo: desde o planejamento até a execução e gerenciamento mensal. Você só precisa focar no seu negócio.'
  },
  {
    question: 'Há garantia de resultados?',
    answer: 'Sim, oferecemos 30 dias de garantia. Além disso, nossa metodologia FINX 360 é baseada em cases reais com resultados comprovados de aumento de receita recorrente em até 300%.'
  },
  {
    question: 'O investimento é mensal?',
    answer: 'Sim, o investimento é de R$ 4.900/mês, que inclui todo o gerenciamento, otimizações e suporte contínuo. Não há taxa de setup ou custos adicionais.'
  }
]

export default function Finx360Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <Logo />
          <Link 
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-[#2A3B95] transition-colors"
          >
            ← Voltar ao site
          </Link>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Gradient */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'linear-gradient(135deg, #2A3B95 0%, #5D2C9D 50%, #008C9E 100%)'
            }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] mb-6">
                <BoltIcon className="w-5 h-5 text-[#5D2C9D]" />
                <span className="text-sm font-semibold text-[#5D2C9D]">Ideal para empresas em crescimento</span>
              </div>

              {/* Headline */}
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
                <span 
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #2A3B95, #5D2C9D, #008C9E)'
                  }}
                >
                  FINX 360
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                A solução completa de fidelização que combina 
                <span className="font-semibold text-[#5D2C9D]"> Fidelização, IA + Dados, Neuromarketing e Experiência da Marca</span> 
                {' '}para aumentar sua receita recorrente em até <span className="font-black text-[#2A3B95]">300%</span>.
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-5xl font-black text-[#5D2C9D]">R$ 4.900</span>
                  <span className="text-lg text-gray-500">/mês</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">30 dias de garantia • Sem taxa de setup</p>
              </div>

              {/* CTA Principal */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contato"
                  className="group relative px-10 py-5 bg-gradient-to-r from-[#5D2C9D] to-[#2A3B95] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  Começar Agora
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#pilares"
                  className="px-10 py-5 border-2 border-[#5D2C9D] text-[#5D2C9D] font-bold text-lg rounded-xl hover:bg-[#5D2C9D] hover:text-white transition-all duration-300"
                >
                  Ver Metodologia
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>+300% receita recorrente</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>ROI em 3 meses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Gerenciamento completo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares FINX 360 */}
        <section id="pilares" className="py-20 bg-gradient-to-b from-white to-[#F5F7FA]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Os 4 <span className="text-[#5D2C9D]">Pilares</span> do FINX 360
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Metodologia exclusiva que combina as melhores práticas de fidelização
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pilares.map((pilar, index) => (
                  <div
                    key={index}
                    className="relative bg-white p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    style={{ borderColor: `${pilar.color}30` }}
                  >
                    {/* Letra Grande */}
                    <div
                      className="absolute -top-6 -left-6 w-16 h-16 rounded-xl flex items-center justify-center text-white font-black text-3xl shadow-lg"
                      style={{ backgroundColor: pilar.color }}
                    >
                      {pilar.letra}
                    </div>
                    
                    <div className="mt-4">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${pilar.color}15` }}
                      >
                        <pilar.icon className="w-7 h-7" style={{ color: pilar.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {pilar.titulo}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {pilar.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Tudo <span className="text-[#2A3B95]">incluído</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Uma solução completa para transformar seu negócio
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#5D2C9D] transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'rgba(93, 44, 157, 0.1)' }}
                    >
                      <feature.icon className="w-7 h-7 text-[#5D2C9D]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Benefits List */}
              <div className="mt-16 bg-gradient-to-r from-[#5D2C9D] to-[#2A3B95] rounded-2xl p-10 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  Resultados Comprovados
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <span className="text-lg text-white font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-gradient-to-b from-[#F5F7FA] to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Cases de <span className="text-[#5D2C9D]">Sucesso</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Empresas que transformaram seus negócios com FINX 360
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E8EBF5] hover:border-[#5D2C9D] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIconSolid key={i} className="w-5 h-5 text-yellow-400" />
                        ))}
                      </div>
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: '#5D2C9D' }}
                      >
                        {testimonial.badge}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                      <div
                        className="px-4 py-2 rounded-lg font-bold text-white text-sm"
                        style={{ backgroundColor: '#5D2C9D' }}
                      >
                        {testimonial.result}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Dúvidas <span className="text-[#5D2C9D]">frequentes</span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#5D2C9D] transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-lg text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDownIcon
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contato" className="py-20 bg-gradient-to-br from-[#5D2C9D] via-[#2A3B95] to-[#008C9E]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Transforme seu negócio com FINX 360
              </h2>
              <p className="text-xl text-white/90 mb-8">
                A solução completa de fidelização que aumenta sua receita recorrente em até 300%. 
                Comece hoje mesmo.
              </p>
              <a
                href="https://wa.me/5511994051155?text=Olá! Gostaria de saber mais sobre o FINX 360"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#5D2C9D] font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Falar com Especialista
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <p className="text-white/70 mt-6 text-sm">
                Ou ligue: <a href="tel:+5511994051155" className="underline">(11) 99405-1155</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Logo className="justify-center mb-4" />
            <p className="text-gray-400 text-sm">
              © 2025 Estimulus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

