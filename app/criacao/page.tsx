'use client'

import { useState } from 'react'
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  PaintBrushIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  SparklesIcon,
  StarIcon,
  ChevronDownIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import Logo from '@/components/Logo'
import Link from 'next/link'

const servicos = [
  {
    icon: PaintBrushIcon,
    title: 'Material Gráfico',
    description: 'Design profissional de identidade visual, materiais promocionais e campanhas visuais',
    color: '#5D2C9D'
  },
  {
    icon: CpuChipIcon,
    title: 'Agente de IA',
    description: 'Chatbots inteligentes e assistentes virtuais para atendimento e automação',
    color: '#2A3B95'
  },
  {
    icon: CodeBracketIcon,
    title: 'APIs de Integração',
    description: 'Integração completa com seus sistemas existentes: ERP, CRM, e-commerce e mais',
    color: '#008C9E'
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Integração de Sistemas',
    description: 'Conecte todas as ferramentas do seu negócio em uma única plataforma',
    color: '#5D2C9D'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Suporte Técnico',
    description: 'Suporte dedicado para garantir que tudo funcione perfeitamente',
    color: '#2A3B95'
  }
]

const features = [
  {
    icon: RocketLaunchIcon,
    title: 'Soluções Personalizadas',
    description: 'Cada projeto é único e desenvolvido especificamente para suas necessidades'
  },
  {
    icon: SparklesIcon,
    title: 'Tecnologia de Ponta',
    description: 'Utilizamos as melhores ferramentas e tecnologias do mercado'
  },
  {
    icon: CheckCircleIcon,
    title: 'Entrega Garantida',
    description: 'Compromisso com prazos e qualidade em cada entrega'
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Integração Completa',
    description: 'Tudo funciona perfeitamente integrado com seus sistemas existentes'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Suporte Contínuo',
    description: 'Acompanhamento e suporte técnico após a entrega'
  },
  {
    icon: CpuChipIcon,
    title: 'Escalabilidade',
    description: 'Soluções preparadas para crescer junto com seu negócio'
  }
]

const benefits = [
  'Soluções 100% personalizadas',
  'Tecnologia de última geração',
  'Equipe especializada',
  'Prazos garantidos',
  'Suporte pós-entrega'
]

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CTO - Tech Solutions',
    text: 'A integração que a Estimulus criou para nosso programa de fidelidade economizou horas semanais e aumentou nosso engajamento em 65%. Profissionalismo e qualidade excepcionais.',
    rating: 5,
    result: '+65% engajamento',
    servico: 'Integração de Sistemas'
  },
  {
    name: 'Patricia Alves',
    role: 'Diretora de Marketing',
    text: 'O material gráfico e o agente de IA criados pela Estimulus transformaram nossa comunicação com clientes. Resultados imediatos e visíveis.',
    rating: 5,
    result: 'Transformação completa',
    servico: 'Material Gráfico + IA'
  },
  {
    name: 'Roberto Lima',
    role: 'CEO - Health Clinic',
    text: 'A integração com nossos sistemas foi perfeita. Tudo funcionando de forma integrada desde o primeiro dia. Equipe extremamente competente.',
    rating: 5,
    result: 'Integração perfeita',
    servico: 'APIs de Integração'
  }
]

const faqs = [
  {
    question: 'Como funciona o processo de criação?',
    answer: 'Iniciamos com uma reunião de descoberta para entender suas necessidades. Em seguida, apresentamos uma proposta personalizada com escopo, prazos e investimento. Após aprovação, desenvolvemos a solução com acompanhamento constante.'
  },
  {
    question: 'Quanto tempo leva para desenvolver uma solução?',
    answer: 'O prazo varia conforme a complexidade do projeto. Soluções simples podem levar de 2-4 semanas, enquanto projetos mais complexos podem levar 2-3 meses. Sempre definimos prazos claros na proposta.'
  },
  {
    question: 'Posso integrar com sistemas que já uso?',
    answer: 'Sim! Especializamos em integrações com os principais sistemas do mercado: ERPs, CRMs, plataformas de e-commerce, sistemas de pagamento e muito mais. Avaliamos cada caso individualmente.'
  },
  {
    question: 'Há garantia para os projetos?',
    answer: 'Sim! Oferecemos garantia de funcionamento e suporte técnico pós-entrega. Todos os projetos incluem documentação completa e treinamento da equipe.'
  },
  {
    question: 'Como é calculado o investimento?',
    answer: 'O investimento é calculado com base no escopo do projeto, complexidade técnica e prazos. Cada proposta é personalizada e inclui todos os custos sem surpresas.'
  },
  {
    question: 'Vocês oferecem suporte após a entrega?',
    answer: 'Sim! Oferecemos suporte técnico contínuo e podemos estabelecer planos de manutenção e evolução conforme suas necessidades.'
  }
]

export default function CriacaoPage() {
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
              background: 'linear-gradient(135deg, #5D2C9D 0%, #2A3B95 50%, #008C9E 100%)'
            }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] mb-6">
                <SparklesIcon className="w-5 h-5 text-[#5D2C9D]" />
                <span className="text-sm font-semibold text-[#5D2C9D]">Ideal para projetos customizados</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                <span 
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #5D2C9D, #2A3B95, #008C9E)'
                  }}
                >
                  Criação Personalizada
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Soluções sob medida para seu negócio. De material gráfico a integrações complexas, 
                criamos exatamente o que você precisa para <span className="font-semibold text-[#5D2C9D]">transformar seu programa de fidelização</span>.
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#5D2C9D]">Orçamento Personalizado</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Soluções sob medida • Sem compromisso</p>
              </div>

              {/* CTA Principal */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contato"
                  className="group relative px-10 py-5 bg-gradient-to-r from-[#5D2C9D] to-[#2A3B95] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  Pedir Orçamento
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#servicos"
                  className="px-10 py-5 border-2 border-[#5D2C9D] text-[#5D2C9D] font-bold text-lg rounded-xl hover:bg-[#5D2C9D] hover:text-white transition-all duration-300"
                >
                  Ver Serviços
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>100% personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Prazos garantidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Suporte completo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Grid */}
        <section id="servicos" className="py-20 bg-gradient-to-b from-white to-[#F5F7FA]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Nossos <span className="text-[#5D2C9D]">Serviços</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Soluções completas para transformar seu programa de fidelização
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicos.map((servico, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    style={{ borderColor: `${servico.color}30` }}
                  >
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${servico.color}15` }}
                    >
                      <servico.icon className="w-8 h-8" style={{ color: servico.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {servico.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {servico.description}
                    </p>
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
                  Por que escolher nossa <span className="text-[#5D2C9D]">criação</span>?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Um processo completo e profissional para resultados excepcionais
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
                  Diferenciais Exclusivos
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

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-[#F5F7FA] to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Como <span className="text-[#5D2C9D]">funciona</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Um processo simples e transparente do início ao fim
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: '1',
                    title: 'Descoberta e Proposta',
                    description: 'Entendemos suas necessidades em uma reunião inicial e apresentamos uma proposta personalizada com escopo, prazos e investimento.',
                    color: '#5D2C9D'
                  },
                  {
                    step: '2',
                    title: 'Desenvolvimento',
                    description: 'Criamos a solução com acompanhamento constante, mantendo você informado em cada etapa do processo.',
                    color: '#2A3B95'
                  },
                  {
                    step: '3',
                    title: 'Entrega e Suporte',
                    description: 'Entregamos a solução completa com documentação, treinamento e suporte técnico contínuo.',
                    color: '#008C9E'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 p-8 rounded-2xl border-2 hover:shadow-lg transition-all duration-300"
                    style={{
                      borderColor: `${item.color}20`,
                      backgroundColor: `${item.color}05`
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-white font-black text-2xl"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Projetos de <span className="text-[#5D2C9D]">Sucesso</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Veja o que criamos para nossos clientes
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
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                        <span className="text-xs text-gray-500">{testimonial.servico}</span>
                        <div
                          className="px-3 py-1 rounded-lg font-bold text-white text-xs"
                          style={{ backgroundColor: '#5D2C9D' }}
                        >
                          {testimonial.result}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-b from-[#F5F7FA] to-white">
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
                Pronto para criar sua solução personalizada?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Entre em contato e descubra como podemos transformar seu programa de fidelização 
                com soluções sob medida para seu negócio.
              </p>
              <a
                href="https://wa.me/5511994051155?text=Olá! Gostaria de solicitar um orçamento para criação personalizada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#5D2C9D] font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Solicitar Orçamento
                <ArrowRightIcon className="w-5 h-5" />
              </a>
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

