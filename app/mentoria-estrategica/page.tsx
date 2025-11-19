'use client'

import { useState } from 'react'
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  StarIcon,
  ChevronDownIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import Logo from '@/components/Logo'
import Link from 'next/link'

const features = [
  {
    icon: ChartBarIcon,
    title: '2 Sessões de Diagnóstico',
    description: 'Análise completa do seu negócio e identificação das oportunidades de fidelização'
  },
  {
    icon: RocketLaunchIcon,
    title: '1 Sessão de Implementação',
    description: 'Acompanhamento prático para colocar o programa em ação'
  },
  {
    icon: UserGroupIcon,
    title: 'Treinamento na Ferramenta',
    description: 'Aprenda a usar todas as funcionalidades do programa de fidelização'
  },
  {
    icon: ChartBarIcon,
    title: 'Planejamento Completo',
    description: 'Estratégia detalhada do programa de fidelização personalizado'
  },
  {
    icon: ClockIcon,
    title: 'Engenharia de Pontos',
    description: 'Cálculo preciso do fluxo financeiro e sistema de recompensas'
  },
  {
    icon: PhotoIcon,
    title: 'Criação Visual Pacote com 6 imagens',
    description: 'Pacote com 6 imagens para iniciar o programa de fidelidade'
  }
]

const testimonials = [
  {
    name: 'Luciana Martins',
    role: 'Bella Velut - Beauty Clinic',
    text: 'A mentoria me ajudou a encontrar o melhor caminho para montar um programa de fidelização. Em 1 semana consegui resolver minhas dúvidas.',
    rating: 5,
    result: '+45% frequência de retorno'
  },
  {
    name: 'Patricia Alves',
    role: 'Diretora de Marketing',
    text: 'As sessões foram extremamente práticas. Saímos com um plano claro e executável.',
    rating: 5,
    result: '+78% retenção'
  }
]

const faqs = [
  {
    question: 'Quanto tempo dura a mentoria?',
    answer: 'A mentoria estratégica inclui 3 sessões (diagnóstico, estruturação, implementação). O tempo de execução depende da complexidade do projeto.'
  },
  {
    question: 'Preciso ter conhecimento técnico?',
    answer: 'Não é necessário. Nossa equipe guia você em cada etapa, desde o planejamento até a implementação prática do programa.'
  },
  {
    question: 'Posso aplicar em qualquer tipo de negócio?',
    answer: 'Sim! A metodologia é adaptável para diversos segmentos e objetivos, criamos programas para B2C, B2B, B2E, treinamentos, gamificação, entre outros.'
  },
  {
    question: 'Há cases de sucesso?',
    answer: 'Sim, nossa metodologia é baseada em cases reais com resultados comprovados. Já atendemos mais de 6.000 empresas de diferentes segmentos.'
  }
]

export default function MentoriaEstrategicaPage() {
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
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8EBF5] border border-[#D1D8EB] mb-6">
                <span className="text-sm font-semibold text-[#2A3B95]">Ideal para projetos rápidos</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                <span className="block">Mentoria</span>
                <span 
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #2A3B95, #5D2C9D, #008C9E)'
                  }}
                >
                  Estratégica
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Estratégias de fidelização personalizadas em até 48 horas.
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-5xl font-black text-[#2A3B95]">R$ 1.490</span>
                </div>
              </div>

              {/* CTA Principal */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contato"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  Começar Agora
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#como-funciona"
                  className="px-8 py-4 border-2 border-[#2A3B95] text-[#2A3B95] font-bold text-lg rounded-xl hover:bg-[#2A3B95] hover:text-white transition-all duration-300"
                >
                  Ver Como Funciona
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Metodologia comprovada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Cases de Sucesso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Suporte de implantação</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F5F7FA]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  O seu melhor <span className="text-[#2A3B95]">investimento</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Uma estratégia completa de fidelização pronta para implementar
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#2A3B95] transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'rgba(42, 59, 149, 0.1)' }}
                    >
                      <feature.icon className="w-7 h-7 text-[#2A3B95]" />
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

            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="como-funciona" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Como <span className="text-[#5D2C9D]">funciona</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Um processo simples e direto para resultados rápidos
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: '1',
                    title: 'Diagnóstico e Estrutura',
                    description: 'Nas primeiras 2 sessões, analisamos seu negócio, identificamos oportunidades e estruturamos a estratégia completa de fidelização.',
                    color: '#2A3B95'
                  },
                  {
                    step: '2',
                    title: 'Planejamento e Engenharia',
                    description: 'Criamos o planejamento detalhado do programa, calculamos o sistema de pontos e definimos o fluxo financeiro ideal.',
                    color: '#5D2C9D'
                  },
                  {
                    step: '3',
                    title: 'Implementação e Treinamento',
                    description: 'Na sessão final, você coloca tudo em prática com nosso acompanhamento. Aprenda a usar a ferramenta e gerir o programa.',
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
        <section className="py-20 bg-gradient-to-b from-[#F5F7FA] to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Resultados <span className="text-[#2A3B95]">reais</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Veja o que nossos clientes estão conquistando
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E8EBF5]"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIconSolid key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
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
                        className="px-4 py-2 rounded-lg font-bold text-white"
                        style={{ backgroundColor: '#2A3B95' }}
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
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden"
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
        <section id="contato" className="py-20 bg-gradient-to-br from-[#2A3B95] via-[#5D2C9D] to-[#008C9E]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Comece sua jornada de fidelização hoje mesmo. Economize tempo e aprenda com quem tem experiência.
              </p>
              <a
                href="https://wa.me/5511994051155?text=Olá! Gostaria de saber mais sobre a Mentoria Estratégica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#2A3B95] font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Falar com Especialista
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

