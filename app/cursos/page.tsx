'use client'

import { useState } from 'react'
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  AcademicCapIcon,
  BookOpenIcon,
  PlayCircleIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  ChevronDownIcon,
  SparklesIcon,
  ChartBarIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import Logo from '@/components/Logo'
import Link from 'next/link'

const cursos = [
  {
    title: 'Marketing de Fidelização',
    description: 'Aprenda a criar e gerenciar programas de fidelização que realmente funcionam',
    duration: '8 horas',
    modules: 12,
    icon: SparklesIcon,
    color: '#008C9E'
  },
  {
    title: 'Gestão Estratégica',
    description: 'Domine as métricas e estratégias para maximizar o ROI do seu programa',
    duration: '6 horas',
    modules: 10,
    icon: ChartBarIcon,
    color: '#2A3B95'
  },
  {
    title: 'Engenharia de Pontos',
    description: 'Aprenda a calcular e estruturar sistemas de pontos e recompensas',
    duration: '5 horas',
    modules: 8,
    icon: CpuChipIcon,
    color: '#5D2C9D'
  },
  {
    title: 'Inteligência de Dados',
    description: 'Use dados e IA para tomar decisões estratégicas de fidelização',
    duration: '7 horas',
    modules: 11,
    icon: CpuChipIcon,
    color: '#008C9E'
  }
]

const features = [
  {
    icon: PlayCircleIcon,
    title: 'Acesso Vitalício',
    description: 'Assista quantas vezes quiser, quando quiser, para sempre'
  },
  {
    icon: BookOpenIcon,
    title: 'Material Completo',
    description: 'PDFs, templates, planilhas e ferramentas práticas incluídas'
  },
  {
    icon: UserGroupIcon,
    title: 'Comunidade Exclusiva',
    description: 'Acesso a grupo privado com outros alunos e suporte da equipe'
  },
  {
    icon: ClockIcon,
    title: 'Aprenda no Seu Ritmo',
    description: 'Cursos 100% online, sem prazo para concluir'
  },
  {
    icon: CheckCircleIcon,
    title: 'Certificado de Conclusão',
    description: 'Receba um certificado válido ao finalizar cada curso'
  },
  {
    icon: AcademicCapIcon,
    title: 'Atualizações Gratuitas',
    description: 'Novos conteúdos e atualizações incluídas sem custo adicional'
  }
]

const benefits = [
  'Aprenda com especialistas do mercado',
  'Metodologia comprovada em centenas de casos',
  'Aplicação prática imediata',
  'Economia de milhares em consultorias',
  'Desenvolvimento profissional contínuo',
  'Cases de mercado'
]

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Empreendedor',
    text: 'Os cursos da Estimulus mudaram completamente minha visão sobre fidelização. Consegui implementar um programa que aumentou minha receita em 45% em apenas 3 meses.',
    rating: 5,
    result: '+45% receita',
    curso: 'Marketing de Fidelização'
  },
  {
    name: 'Ana Silva',
    role: 'Gerente de Marketing',
    text: 'O curso de Engenharia de Pontos foi fundamental para estruturar nosso programa. Aprendi a calcular corretamente os custos e criar um sistema sustentável.',
    rating: 5,
    result: 'Sistema sustentável',
    curso: 'Engenharia de Pontos'
  },
  {
    name: 'Marcos Oliveira',
    role: 'CEO',
    text: 'Investi nos cursos e foi a melhor decisão. Em vez de pagar milhares em consultoria, aprendi a fazer sozinho e ainda tenho acesso vitalício ao conteúdo.',
    rating: 5,
    result: 'ROI 10x',
    curso: 'Pacote Completo'
  }
]

const faqs = [
  {
    question: 'Os cursos são adequados para iniciantes?',
    answer: 'Sim! Nossos cursos são estruturados para atender desde iniciantes até profissionais experientes. Cada módulo é explicado de forma clara e prática.'
  },
  {
    question: 'Quanto tempo tenho para concluir os cursos?',
    answer: 'Você tem acesso vitalício! Não há prazo para concluir. Você pode assistir no seu ritmo e revisar o conteúdo quantas vezes quiser.'
  },
  {
    question: 'Recebo certificado?',
    answer: 'Sim! Ao concluir cada curso, você recebe um certificado de conclusão válido que pode ser usado no seu currículo e LinkedIn.'
  },
  {
    question: 'Posso acessar pelo celular?',
    answer: 'Sim! Nossa plataforma é 100% responsiva e funciona perfeitamente em computadores, tablets e smartphones.'
  },
  {
    question: 'Há suporte durante os cursos?',
    answer: 'Sim! Você tem acesso à comunidade exclusiva onde pode tirar dúvidas com outros alunos e receber suporte da equipe Estimulus.'
  },
  {
    question: 'Os cursos são atualizados?',
    answer: 'Sim! Sempre que há novas estratégias, ferramentas ou metodologias, atualizamos o conteúdo gratuitamente para todos os alunos.'
  }
]

export default function CursosPage() {
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
              background: 'linear-gradient(135deg, #008C9E 0%, #2A3B95 50%, #5D2C9D 100%)'
            }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0F7FA] border border-[#B2EBF2] mb-6">
                <AcademicCapIcon className="w-5 h-5 text-[#008C9E]" />
                <span className="text-sm font-semibold text-[#008C9E]">Ideal para quem quer aprender</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                <span 
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #008C9E, #2A3B95, #5D2C9D)'
                  }}
                >
                  Cursos de Marketing de Fidelização
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Aprenda as estratégias de marketing e metodologias que aumentam o engajamento do cliente com a marca. 
                {' '}Conhecimento prático com <span className="font-black text-[#2A3B95]">acesso a diversos materiais de apoio</span>.
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-5xl font-black text-[#008C9E]">A partir de R$ 490</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Acesso imediato • Consulte os temas</p>
              </div>

              {/* CTA Principal */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#cursos"
                  className="group relative px-10 py-5 bg-gradient-to-r from-[#008C9E] to-[#2A3B95] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  Ver Cursos
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#beneficios"
                  className="px-10 py-5 border-2 border-[#008C9E] text-[#008C9E] font-bold text-lg rounded-xl hover:bg-[#008C9E] hover:text-white transition-all duration-300"
                >
                  Ver Benefícios
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Acesso a materiais de apoio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Certificado incluído</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Comunidade exclusiva</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cursos Grid */}
        <section id="cursos" className="py-20 bg-gradient-to-b from-white to-[#F5F7FA]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Nossos <span className="text-[#008C9E]">Cursos</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Conteúdo prático e aplicável para transformar seu negócio
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {cursos.map((curso, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    style={{ borderColor: `${curso.color}30` }}
                  >
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${curso.color}15` }}
                    >
                      <curso.icon className="w-8 h-8" style={{ color: curso.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {curso.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {curso.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        <span>{curso.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpenIcon className="w-4 h-4" />
                        <span>{curso.modules} módulos</span>
                      </div>
                    </div>
                    <a
                      href="#contato"
                      className="block w-full text-center px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: curso.color }}
                    >
                      Ver Detalhes
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="beneficios" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Por que escolher nossos <span className="text-[#008C9E]">cursos</span>?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Uma experiência de aprendizado completa e prática
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#008C9E] transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'rgba(0, 140, 158, 0.1)' }}
                    >
                      <feature.icon className="w-7 h-7 text-[#008C9E]" />
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
              <div className="mt-16 bg-gradient-to-r from-[#008C9E] to-[#2A3B95] rounded-2xl p-10 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  Benefícios Exclusivos
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
                  O que nossos <span className="text-[#008C9E]">alunos</span> dizem
                </h2>
                <p className="text-xl text-gray-600">
                  Resultados reais de quem já aplicou o conhecimento
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E8EBF5] hover:border-[#008C9E] transition-all duration-300"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIconSolid key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
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
                        <span className="text-xs text-gray-500">{testimonial.curso}</span>
                        <div
                          className="px-3 py-1 rounded-lg font-bold text-white text-xs"
                          style={{ backgroundColor: '#008C9E' }}
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Dúvidas <span className="text-[#008C9E]">frequentes</span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#008C9E] transition-colors"
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
        <section id="contato" className="py-20 bg-gradient-to-br from-[#008C9E] via-[#2A3B95] to-[#5D2C9D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Comece a aprender hoje mesmo
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Invista no seu conhecimento e transforme seu negócio com estratégias comprovadas de fidelização. 
                Acesso vitalício e suporte completo.
              </p>
              <a
                href="https://wa.me/5511994051155?text=Olá! Gostaria de saber mais sobre os cursos de fidelização"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#008C9E] font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
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

