'use client'

import { useState, useEffect } from 'react'
import { Dialog, Disclosure } from '@headlessui/react'
import { 
  Bars3Icon, 
  XMarkIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  GiftIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  ArrowUpIcon,
  PlayCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  BoltIcon,
  CpuChipIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import Logo from './Logo'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Preços', href: '#ofertas' },
  { name: 'Soluções', href: '#segmentos' },
  { name: 'FINX 360', href: '#finx' },
]

const conteudosMenu = [
  { name: 'Calculadoras', href: '/calculadoras', icon: '🧮', description: 'Ferramentas de cálculo' },
  { name: 'Raio-X', href: '/raio-x', icon: '🔍', description: 'Diagnóstico gratuito' },
]

// Dados para Produtos/Projetos - Ícones Modernos Web3
const produtos = [
  {
    icon: BoltIcon,
    title: 'Programa de Cashback',
    description: 'Recompense seus clientes com dinheiro de volta em cada compra, aumentando a fidelidade e o ticket médio através de incentivos financeiros diretos.',
    color: '#2A3B95'
  },
  {
    icon: GiftIcon,
    title: 'Prêmios por Pontos',
    description: 'Crie um sistema de pontos onde clientes acumulam recompensas e trocam por benefícios exclusivos, gerando engajamento contínuo.',
    color: '#5D2C9D'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Pesquisa de Satisfação',
    description: 'Meça a satisfação dos seus clientes com pesquisas inteligentes e use os insights para melhorar continuamente a experiência oferecida.',
    color: '#2A3B95'
  },
  {
    icon: UserGroupIcon,
    title: 'Indicação de Amigos',
    description: 'Transforme seus clientes em embaixadores da marca com programas de indicação que recompensam tanto quem indica quanto quem é indicado.',
    color: '#5D2C9D'
  },
  {
    icon: CpuChipIcon,
    title: 'Integração',
    description: 'Conecte seu programa de fidelidade com todas as ferramentas do seu negócio: ERP, CRM, e-commerce e sistemas de pagamento em uma única plataforma.',
    color: '#2A3B95'
  },
  {
    icon: SparklesIcon,
    title: 'Automação + IA',
    description: 'Automatize campanhas, personalizações e comunicações com inteligência artificial que aprende com o comportamento dos seus clientes.',
    color: '#5D2C9D'
  },
]

// Dados para Dor Section
const problemas = [
  {
    icon: '🔥',
    title: 'Cliente compra 1x e some',
    subtitle: 'Não tem sistema de retenção',
    gradient: 'from-red-500/20 to-orange-500/20',
    borderColor: 'border-red-500/30'
  },
  {
    icon: '💸',
    title: 'Gasta em anúncio e não lucra',
    subtitle: 'CAC maior que o lucro',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    icon: '📉',
    title: 'Vendas oscilam todo mês',
    subtitle: 'Faturamento imprevisível',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30'
  },
]

// Dados para FINX 360
const finxPilares = [
  {
    letra: 'F',
    titulo: 'FIDELIZAÇÃO CLIENTES',
    descricao: 'Cliente compra mais e compra de novo.'
  },
  {
    letra: 'I',
    titulo: 'IA + DADOS',
    descricao: 'Decisão baseada em números'
  },
  {
    letra: 'N',
    titulo: 'NEUROMARKETING',
    descricao: 'Gatilhos mentais e comportamento'
  },
  {
    letra: 'X',
    titulo: 'EXPERIÊNCIA MARCA',
    descricao: 'Cliente indica e publica nas redes socias'
  },
]

// Dados para Prova Social
const cases = [
  {
    badge: 'VAREJO',
    empresa: 'LOJA DE ROUPAS - RJ',
    resultado: '+38%',
    periodo: 'em 90 dias',
    tag: 'Fidelização + Retenção'
  },
  {
    badge: 'SERVIÇOS',
    empresa: 'CLÍNICA ESTÉTICA - SP',
    resultado: '+ 71%',
    periodo: 'em 6 meses',
    tag: 'Cashback + Indicação'
  },
  {
    badge: 'E-COMMERCE',
    empresa: 'RESTAURANTE - MG',
    resultado: '+ 81%',
    periodo: 'em 12 meses',
    tag: 'Indicação + Retenção'
  },
]

// Dados para Como Funciona
const passos = [
  {
    numero: '1️⃣',
    titulo: 'RELEVÂNCIA',
    descricao: 'Ofertas e experiências que realmente importam.',
    bullets: [
      'Personalização inteligente',
      'Jornadas direcionadas',
      'Comunicação precisa'
    ]
  },
  {
    numero: '2️⃣',
    titulo: 'MOTIVAÇÃO',
    descricao: 'Engajamento que acontece de forma natural e contínua.',
    bullets: [
      'Gatilhos comportamentais',
      'Campanhas que despertam ação',
      'Recompensas que incentivam o retorno'
    ]
  },
  {
    numero: '3️⃣',
    titulo: 'VELOCIDADE',
    descricao: 'Simplicidade que acelera resultados.',
    bullets: [
      'Fluxos ágeis',
      'Processos automatizados',
      'Análises rápidas para decisões certeiras'
    ]
  },
]

// Dados para Calculadoras
const calculadoras = [
  {
    titulo: 'CAC',
    subtitulo: 'Custo de Aquisição de Cliente',
    icon: '💰'
  },
  {
    titulo: 'LTV',
    subtitulo: 'Valor do Ciclo de Vida',
    icon: '📊'
  },
  {
    titulo: 'ROI',
    subtitulo: 'Retorno sobre Investimento',
    icon: '📈'
  },
  {
    titulo: 'CHURN',
    subtitulo: 'Taxa de Cancelamento',
    icon: '⚠️'
  },
]

// Dados para Ofertas - Layout Premium (4 cards)
const ofertas = [
  {
    nome: 'Mentoria Estratégica',
    trial: '10 dias de suporte gratuito',
    preco: 'R$ 1.490',
    cta: 'Começar Agora',
    link: '/mentoria-estrategica',
    targetAudience: 'Ideal para projetos rápidos',
    features: [
      '2 sessões (diagnóstico e estrutura)',
      '1 sessão (implementação)',
      'Treinamento na Ferramenta',
      'Planejamento do programa',
      'Engenharia de pontos e fluxo financeiro'
    ],
    isPopular: false
  },
  {
    nome: 'FINX 360',
    trial: '30 dias de garantia',
    preco: 'R$ 4.900/mês',
    cta: 'Começar Agora',
    link: '/finx-360',
    targetAudience: 'Ideal para empresas em crescimento',
    features: [
      'Planejamento completo do projeto',
      'Site e identidade visual',
      'Campanhas ADS otimizadas',
      'Programa de Fidelidade completo',
      'Gerenciamento e follow-up mensal'
    ],
    isPopular: true
  },
  {
    nome: 'Cursos',
    trial: 'Acesso imediato',
    preco: 'A partir R$ 490',
    cta: 'Ver Cursos',
    link: '/cursos',
    targetAudience: 'Ideal para quem quer aprender',
    features: [
      'Marketing de Fidelização',
      'Gestão Estratégica',
      'Engenharia de pontos',
      'Inteligência de Dados',
      'Acesso vitalício'
    ],
    isPopular: false
  },
  {
    nome: 'Criação',
    trial: 'Orçamento personalizado',
    preco: 'Sob consulta',
    cta: 'Pedir Orçamento',
    link: '/criacao',
    targetAudience: 'Ideal para projetos customizados',
    features: [
      'Material gráfico',
      'Agente de IA',
      'APIs de Integração',
      'Integração de Sistemas',
      'Suporte técnico'
    ],
    isPopular: false
  },
]

// Dados para Depoimentos
const depoimentos = [
  {
    nome: 'Carlos Mendes',
    cargo: 'CTO',
    empresa: 'Tech Solutions',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80',
    texto: 'A automação e integração que a Estimulus criou para nosso programa de fidelidade economizou horas semanais e aumentou nosso engajamento em 65%.',
    resultado: '+65% engajamento',
    rating: 5,
    isVideo: false
  },
  {
    nome: 'Patricia Alves',
    cargo: 'Diretora de Marketing',
    empresa: 'Fashion Store',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80',
    texto: 'O programa de cashback implementado pela Estimulus aumentou nossa taxa de retenção em 78% e o ticket médio em 42%. Resultados que superaram todas as expectativas!',
    resultado: '+78% retenção',
    rating: 5,
    isVideo: false
  },
  {
    nome: 'Roberto Lima',
    cargo: 'CEO',
    empresa: 'Health Clinic',
    foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80',
    texto: 'Com a metodologia FINX 360, conseguimos aumentar a frequência de retorno dos pacientes em 3x. O investimento se pagou em menos de 2 meses. Recomendo!',
    resultado: '+3x frequência',
    rating: 5,
    isVideo: true
  },
  {
    nome: 'Juliana Ferreira',
    cargo: 'Proprietária',
    empresa: 'Gourmet Restaurant',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80',
    texto: 'O sistema de pontos e recompensas criado pela Estimulus fez nossos clientes voltarem toda semana. Faturamento aumentou 85% em um ano. Equipe extremamente profissional!',
    resultado: '+85% faturamento',
    rating: 5,
    isVideo: false
  }
]

// Logos de Clientes (carregado da pasta public/logos-clientes)
const clientesLogos = [
  { nome: 'Edgard Ferreira', logo: '/logos-clientes/0fdd247d-7e18-4a3b-a968-7817ef44b8b1edgard-ferreira.png', alt: 'Edgard Ferreira', fallback: 'Edgard Ferreira' },
  { nome: 'Simpsons Vape Shop', logo: '/logos-clientes/1755691502_1752668125_logo-simpsonsvapeshop.webp', alt: 'Simpsons Vape Shop', fallback: 'Simpsons Vape Shop' },
  { nome: 'Cliente Premium', logo: '/logos-clientes/9a168e09375d4d17bc4870269b7c2c17.webp', alt: 'Cliente Premium', fallback: 'Cliente Premium' },
  { nome: 'Cliente Corporativo', logo: '/logos-clientes/e6f09a121286125.Y3JvcCwxMjAwLDkzOCwwLDEzMA.png', alt: 'Cliente Corporativo', fallback: 'Cliente Corporativo' },
  { nome: 'Bella', logo: '/logos-clientes/logo-bella.png', alt: 'Bella', fallback: 'Bella' },
  { nome: 'Cliente VIP', logo: '/logos-clientes/large_57c6d94d-36a9-43df-8c81-9ae688f2cf97.webp', alt: 'Cliente VIP', fallback: 'Cliente VIP' },
  { nome: 'Wet n Wild', logo: '/logos-clientes/Wet_\'n_Wild_logo.svg.png', alt: 'Wet n Wild', fallback: 'Wet n Wild' },
  { nome: 'Cliente Plus', logo: '/logos-clientes/images.png', alt: 'Cliente Plus', fallback: 'Cliente Plus' },
]

// Dados para Cases de Segmentos - Com Imagens e Links para Páginas
const casesSegmentos = [
  {
    segmento: 'VAREJO',
    empresa: 'Loja de Roupas',
    resultado: '+38%',
    periodo: 'em 90 dias',
    estrategias: 'Fidelização + Retenção',
    descricao: 'Aumento significativo na receita recorrente e taxa de retenção de clientes.',
    color: '#2A3B95',
    link: '/segmentos/varejo',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80',
    detalhes: {
      clientesAtendidos: '150+',
      ticketMedio: '+25%',
      taxaRetencao: '85%',
      receitaRecorrente: '+38%'
    }
  },
  {
    segmento: 'SERVIÇOS',
    empresa: 'Clínica Estética',
    resultado: '+71%',
    periodo: 'em 6 meses',
    estrategias: 'Cashback + Indicação',
    descricao: 'Aumento significativo na receita recorrente e taxa de retenção de clientes.',
    color: '#5D2C9D',
    link: '/segmentos/servicos',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&q=80',
    detalhes: {
      clientesAtendidos: '200+',
      ticketMedio: '+45%',
      taxaRetencao: '92%',
      receitaRecorrente: '+71%'
    }
  },
  {
    segmento: 'RESTAURANTE',
    empresa: 'Restaurante',
    resultado: '+81%',
    periodo: 'em 12 meses',
    estrategias: 'Indicação + Retenção',
    descricao: 'Aumento significativo na receita recorrente e taxa de retenção de clientes.',
    color: '#008C9E',
    link: '/segmentos/restaurante',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80',
    detalhes: {
      clientesAtendidos: '300+',
      ticketMedio: '+35%',
      taxaRetencao: '88%',
      receitaRecorrente: '+81%'
    }
  },
  {
    segmento: 'E-COMMERCE',
    empresa: 'Loja Online',
    resultado: '+65%',
    periodo: 'em 8 meses',
    estrategias: 'Pontos + Cashback',
    descricao: 'Aumento significativo na receita recorrente e taxa de retenção de clientes.',
    color: '#2A3B95',
    link: '/segmentos/ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80',
    detalhes: {
      clientesAtendidos: '500+',
      ticketMedio: '+30%',
      taxaRetencao: '90%',
      receitaRecorrente: '+65%'
    }
  },
]

// Dados para Segmentos
const segmentos = [
  {
    badge: 'VAREJO',
    headline: 'Cliente compra e não volta?',
    promessa: 'Resolva isso em 90 dias.',
    link: '/segmentos/varejo',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
  },
  {
    badge: 'SERVIÇOS',
    headline: 'Agenda vazia no meio do mês?',
    promessa: 'Preencha com clientes fiéis.',
    link: '/segmentos/servicos',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop'
  },
  {
    badge: 'E-COMMERCE',
    headline: 'CAC alto, LTV baixo?',
    promessa: 'Inverta o jogo.',
    link: '/segmentos/ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
  },
]

// Palavras para o hero dinâmico
const heroWords = ['Melhora Resultados', 'Aumenta as Vendas', 'Traz o Cliente de Volta', 'Aumenta o Ticket Médio']

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [enviandoEmail, setEnviandoEmail] = useState(false)
  const [mensagemSucesso, setMensagemSucesso] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Hero dinâmico - palavras alternadas
  const [currentWord, setCurrentWord] = useState(0)
  
  // Animação de contador
  const [empresasCount, setEmpresasCount] = useState(0)
  const [horasCount, setHorasCount] = useState(0)
  const [programasCount, setProgramasCount] = useState(0)
  const [aprovacaoCount, setAprovacaoCount] = useState(0)
  const [countersVisible, setCountersVisible] = useState(false)

  // Valores alvo dos contadores
  const targetEmpresas = 6000
  const targetHoras = 10000
  const targetProgramas = 70000
  const targetAprovacao = 99

  const scrollToRaioX = () => {
    document.getElementById('raio-x')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  // Alternar palavras no headline
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % heroWords.length)
    }, 2500) // Muda a cada 2.5 segundos
    return () => clearInterval(interval)
  }, [])

  // Animação de contadores
  useEffect(() => {
    setCountersVisible(true)
    
    const animateCount = (setter: (val: number) => void, target: number, duration: number = 2000) => {
      let start = 0
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = Math.floor(progress * target)
        setter(current)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setter(target)
        }
      }
      requestAnimationFrame(animate)
    }

    const timer = setTimeout(() => {
      animateCount(setEmpresasCount, 6000, 2000)
      setTimeout(() => animateCount(setHorasCount, 10000, 2000), 200)
      setTimeout(() => animateCount(setProgramasCount, 70000, 2000), 400)
      setTimeout(() => animateCount(setAprovacaoCount, 99, 1500), 600)
    }, 500)

    return () => clearTimeout(timer)
  }, [])



  return (
    <div className="bg-white min-h-screen">
      {/* HEADER - Premium Minimalist Apple Style */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
        <nav aria-label="Global" className="container-premium flex items-center justify-between py-6">
          <div className="flex lg:flex-1">
            <Logo />
          </div>
          <div className="flex lg:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10 lg:items-center">
            {/* Menu Conteúdos com Dropdown */}
            <Disclosure as="div" className="relative">
              {({ open }) => (
                <>
                  <Disclosure.Button className="text-sm font-medium text-gray-700 hover:text-[#2A3B95] transition-colors duration-200 flex items-center gap-1.5 py-2">
                    Conteúdos
                    <ChevronDownIcon
                      className={`size-4 transition-transform duration-200 text-gray-400 ${open ? 'rotate-180' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden z-50">
                    <div className="p-2">
                      {conteudosMenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 group-hover:text-[#2A3B95] transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {item.description}
                              </div>
                            </div>
                            <ArrowRightIcon className="size-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#2A3B95]" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            
            {/* Outros links de navegação */}
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-medium text-gray-700 hover:text-[#2A3B95] transition-colors duration-200 py-2"
              >
                {item.name}
              </a>
            ))}
            
            <a 
              href="#contato" 
              className="btn-primary-modern px-6 py-3 text-sm font-semibold text-white flex items-center gap-2"
            >
              Agendar Consulta
              <ArrowRightIcon className="size-4" />
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Logo />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            <div className="flow-root">
              <div className="divide-y divide-gray-100">
                <div className="space-y-1 py-6">
                  {/* Menu Conteúdos Mobile */}
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:text-[#2A3B95] hover:bg-gray-50 transition-all">
                          <span>Conteúdos</span>
                          <ChevronDownIcon
                            className={`size-5 transition-transform duration-200 text-gray-400 ${open ? 'rotate-180' : ''}`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-1 pl-6">
                          {conteudosMenu.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:text-[#2A3B95] hover:bg-gray-50 transition-all flex items-center gap-3"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="text-lg">{item.icon}</span>
                              <div>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-gray-500">{item.description}</div>
                              </div>
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  
                  {/* Outros links de navegação */}
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:text-[#2A3B95] hover:bg-gray-50 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contato"
                    className="btn-primary-modern block rounded-lg px-3 py-3 text-base font-semibold text-white text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="relative z-10">
        {/* 1. HERO SECTION - Com Imagem de Fundo e Overlay (Estilo Bloco Resultados) */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-8 overflow-hidden">
          
          {/* Imagem de Fundo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-background.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay com degradê - Estilo Bloco Resultados */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"
              style={{ 
                background: `linear-gradient(to top, #1A2B75E6 0%, #2A3B9580 50%, #3D1C7D40 100%)`
              }}
            />
          </div>

          <div className="container-premium relative z-10 max-w-5xl px-4 text-center flex-1 flex flex-col justify-center">
            {/* Headline Principal - Estilo "Marketing that moves the Needle" */}
            <h1 className="typography-h1 text-white mb-6 leading-tight">
              <span className="block">Marketing de Fidelização</span>
              <span className="block">
                <span className="typography-italic-serif">que</span>{' '}
                <span className="font-bold">{heroWords[currentWord]}</span>
              </span>
            </h1>

            {/* Subheadline/Descrição */}
            <p className="typography-body-large text-white/90 max-w-2xl mx-auto mb-12">
              Especialistas em programas de fidelização para PME
            </p>

            {/* CTA Principal - Destacado */}
            <div className="flex items-center justify-center mb-16">
              <a
                href="#contato"
                className="group px-10 py-5 rounded-xl bg-white text-gray-900 font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-110 flex items-center gap-3 shadow-2xl hover:shadow-white/20"
              >
                Vamos Conversar
                <ArrowRightIcon className="size-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            </div>
        </section>

        {/* CASES DE SEGMENTOS - Layout Estilo Blog com Imagens Grandes */}
        <section id="segmentos" className="py-12 md:py-20 relative bg-white overflow-hidden">
          <div className="container-premium relative z-10 max-w-7xl">
            {/* Header Section - Título Esquerda + CTA Direita */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-4">
              {/* Título Principal - Esquerda */}
              <div className="flex-1">
                <h2 className="typography-h2 text-gray-900 mb-2">
                  <span className="typography-italic-serif">Resultados</span> Por Segmento
              </h2>
                <h2 className="typography-h2 text-gray-900">
                  <span className="typography-italic-serif">Que</span> Inspiram Transformação.
                </h2>
                    </div>

              {/* CTA Button - Direita */}
              <div className="flex-shrink-0">
                <a
                  href="#contato"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#5D2C9D]/50 transition-all duration-300"
                >
                  Quero Resultados Assim
                  <ArrowUpIcon className="size-4 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
            </div>

            {/* Grid de 4 Cards com Imagens Grandes - Estilo Blog */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {casesSegmentos.map((caseItem, index) => {
                return (
                  <Link
                    key={index}
                    href={caseItem.link}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Imagem Grande */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <Image
                        src={caseItem.image}
                        alt={caseItem.empresa}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay com cor do segmento */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                        style={{ 
                          background: `linear-gradient(to top, ${caseItem.color}E6 0%, ${caseItem.color}80 50%, transparent 100%)`
                        }}
                      />
                      
                      {/* Badge e Informações sobrepostas */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div 
                          className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3 w-fit"
                          style={{ backgroundColor: caseItem.color }}
                        >
                          {caseItem.segmento}
              </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                          {caseItem.empresa}
                        </h3>
                        <div className="flex items-baseline gap-3 mb-3">
                          <div className="text-4xl md:text-5xl font-extrabold text-white">
                            {caseItem.resultado}
              </div>
                          <p className="text-white/90 text-sm font-medium">
                            {caseItem.periodo}
                          </p>
              </div>
                        <p className="text-white/90 text-sm font-semibold mb-4">
                          {caseItem.estrategias}
                        </p>
                      </div>
                    </div>

                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* 2. PRINCIPAIS DORES DOS GESTORES - Layout com 4 Cards de Problemas */}
        <section className="py-24 md:py-40 relative bg-white overflow-hidden">
          
          <div className="container-premium relative z-10 max-w-7xl">
            {/* Header Section - Título Esquerda + CTA Direita */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-6">
              {/* Título Principal - Esquerda */}
              <div className="flex-1">
                <h2 className="typography-h2 text-gray-900 mb-4">
                  <span className="typography-italic-serif">4 Pontos de Atenção</span>
              </h2>
                <p className="typography-body-large text-gray-600 font-semibold">
                  Qual deles mais te incomoda?
                </p>
            </div>

              {/* CTA Button - Direita */}
              <div className="flex-shrink-0">
                <a
                  href="#contato"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] text-white font-semibold hover:shadow-lg hover:shadow-[#5D2C9D]/50 transition-all duration-300"
                >
                  Resolver Agora
                  <ArrowUpIcon className="size-5 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Grid de 4 Cards - Dores dos Gestores */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: UserGroupIcon,
                  title: 'Alta Rotatividade de Clientes',
                  description: 'Seus clientes compram uma vez e nunca mais voltam. Você perde receita recorrente e precisa constantemente investir em aquisição de novos clientes, que custa 5x mais caro.',
                  gradient: 'linear-gradient(135deg, #2A3B95, #3d52b8, #5D2C9D)',
                  bgColor: 'bg-[#2A3B95]/5',
                  borderColor: 'border-[#2A3B95]/20',
                  badgeBg: 'bg-[#2A3B95]/10',
                  badgeText: 'text-[#2A3B95]',
                  pain: 'Perda de receita recorrente'
                },
                {
                  icon: ChartBarIcon,
                  title: 'Falta de Dados e Métricas Claras',
                  description: 'Você não sabe quantos clientes realmente retornam, qual o valor médio de compra ou qual a taxa de engajamento. Toma decisões no escuro, sem dados concretos.',
                  gradient: 'linear-gradient(135deg, #5D2C9D, #7a3fc4, #2A3B95)',
                  bgColor: 'bg-[#5D2C9D]/5',
                  borderColor: 'border-[#5D2C9D]/20',
                  badgeBg: 'bg-[#5D2C9D]/10',
                  badgeText: 'text-[#5D2C9D]',
                  pain: 'Decisões sem embasamento'
                },
                {
                  icon: SparklesIcon,
                  title: 'Dificuldade em Engajar Clientes',
                  description: 'Suas campanhas de marketing não geram o engajamento esperado. Clientes não interagem com suas comunicações e você não consegue criar uma relação duradoura.',
                  gradient: 'linear-gradient(135deg, #008C9E, #20ACBE, #2A3B95)',
                  bgColor: 'bg-[#008C9E]/5',
                  borderColor: 'border-[#008C9E]/20',
                  badgeBg: 'bg-[#008C9E]/10',
                  badgeText: 'text-[#008C9E]',
                  pain: 'Baixo engajamento'
                },
                {
                  icon: ClockIcon,
                  title: 'Perda de Tempo e Dinheiro',
                  description: 'Você gasta horas gerenciando programas de fidelidade manualmente, enviando emails um a um e calculando pontos. Falta automação e isso consome tempo da sua equipe.',
                  gradient: 'linear-gradient(135deg, #2A3B95, #5D2C9D, #008C9E)',
                  bgColor: 'bg-[#2A3B95]/5',
                  borderColor: 'border-[#2A3B95]/20',
                  badgeBg: 'bg-[#2A3B95]/10',
                  badgeText: 'text-[#2A3B95]',
                  pain: 'Perda de tempo e eficiência'
                }
              ].map((dores, index) => {
                const IconComponent = dores.icon
                return (
                  <div
                    key={index}
                    className={`${dores.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border ${dores.borderColor}`}
                  >
                    {/* Ícone com Gradiente 3D - Paleta Estimulus */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                        <div 
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: dores.gradient
                          }}
                        />
                        <IconComponent 
                          className="size-12 relative z-10 text-white"
                          strokeWidth={2.5}
                        />
                  </div>
            </div>

                    {/* Badge de Dores - Paleta Estimulus */}
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full ${dores.badgeBg} ${dores.badgeText} text-xs font-semibold`}>
                        {dores.pain}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="typography-h4 text-gray-900 mb-3">
                      {dores.title}
                  </h3>

                    {/* Descrição */}
                    <p className="typography-body-small text-gray-600">
                      {dores.description}
                  </p>
                </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* PRODUTOS/PROJETOS - Layout Web3 com Paleta Estimulus */}
        <section className="py-24 md:py-40 relative bg-gradient-to-br from-white via-[#2A3B95]/5 to-[#5D2C9D]/5 overflow-hidden">
          
          {/* Elementos decorativos Web3 */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#2A3B95]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#5D2C9D]/10 blur-3xl" />
                  </div>

          <div className="container-premium relative z-10 max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-16">
              {/* Badge Web3 */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] rounded-full blur-lg opacity-50" />
                  <div className="relative bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] rounded-full px-6 py-2.5 flex items-center gap-2 border border-white/20 shadow-xl">
                    <SparklesIcon className="w-4 h-4 text-white" />
                    <span className="text-white text-xs font-bold uppercase">Estratégias</span>
                        </div>
                      </div>
                    </div>
              
              {/* Título Principal */}
              <h2 className="typography-h2 text-gray-900 mb-6">
                <span className="text-gray-900">
                  <span className="block">Estratégias Inteligentes</span>
                  <span className="block">para Potencializar a Fidelização</span>
                </span>
              </h2>

              {/* Parágrafo Descritivo */}
              <p className="typography-body-large text-gray-600 max-w-3xl mx-auto">
                Oferecemos soluções completas que fortalecem o relacionamento com o cliente e transformam sua base em geradores contínuos de valor.
              </p>
            </div>

            {/* Grid de Produtos - 2 Linhas x 3 Colunas com Paleta Estimulus */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {produtos.map((produto, index) => {
                const IconComponent = produto.icon
                // Gradientes usando Paleta Estimulus
                const estimulusGradients = [
                  { 
                    gradient: 'from-[#2A3B95] via-[#3d52b8] to-[#2A3B95]', 
                    iconBg: 'bg-white/20',
                    iconColor: '#ffffff',
                    textColor: 'text-white'
                  }, // Cashback - Azul Marinho
                  { 
                    gradient: 'from-[#5D2C9D] via-[#7a3fc4] to-[#5D2C9D]', 
                    iconBg: 'bg-white/20',
                    iconColor: '#ffffff',
                    textColor: 'text-white'
                  }, // Prêmios - Roxo Escuro
                  { 
                    gradient: 'from-[#008C9E] via-[#00a8c0] to-[#008C9E]', 
                    iconBg: 'bg-white/20',
                    iconColor: '#ffffff',
                    textColor: 'text-white'
                  }, // NPS - Azul Petróleo
                  { 
                    gradient: 'from-[#2A3B95] via-[#5D2C9D] to-[#008C9E]', 
                    iconBg: 'bg-white/20',
                    iconColor: '#ffffff',
                    textColor: 'text-white'
                  }, // Indicação - Gradiente Estimulus
                  { 
                    gradient: 'from-[#5D2C9D] via-[#008C9E] to-[#2A3B95]', 
                    iconBg: 'bg-white/20',
                    iconColor: '#ffffff',
                    textColor: 'text-white'
                  }, // Integração - Gradiente Estimulus
                  { 
                    gradient: 'from-[#008C9E] via-[#2A3B95] to-[#5D2C9D]', 
                    iconBg: 'bg-white/20',
                    iconColor: '#ffffff',
                    textColor: 'text-white'
                  }, // Automação - Gradiente Estimulus
                ]
                const cardStyle = estimulusGradients[index] || estimulusGradients[0]
                
                return (
                  <div
                    key={index}
                    className={`group bg-gradient-to-br ${cardStyle.gradient} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden`}
                  >
                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Ícone */}
                    <div className="mb-6 flex items-center justify-center relative z-10">
                      <div className={`w-20 h-20 rounded-xl ${cardStyle.iconBg} backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30`}>
                        <IconComponent 
                          className="size-10 group-hover:size-12 transition-all duration-300"
                          style={{ 
                            color: cardStyle.iconColor,
                          }}
                          strokeWidth={2.5}
                        />
                  </div>
                </div>

                    {/* Título */}
                    <h3 className={`typography-h4 mb-3 relative z-10 ${cardStyle.textColor}`}>
                      {produto.title}
                    </h3>

                    {/* Descrição */}
                    <p className={`typography-body relative z-10 ${cardStyle.textColor} opacity-90`}>
                      {produto.description}
                    </p>
              </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3 FATORES QUE FAZEM SEU PROGRAMA PERFORMAR MAIS - Layout Estilo Imagem (Título Esquerda + CTA Direita + 3 Cards) */}
        <section className="py-24 md:py-40 relative bg-white overflow-hidden">
          <div className="container-premium relative z-10 max-w-7xl">
            {/* Header Section - Título Esquerda + CTA Direita */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-6">
              {/* Título Principal - Esquerda */}
              <div className="flex-1">
                <h2 className="typography-h2 text-gray-900 mb-2">
                  <span className="block"><span className="typography-italic-serif">3 Fatores de Sucesso</span></span>
                  <span className="block">do Seu Programa de Fidelidade</span>
              </h2>
            </div>

              {/* CTA Button - Direita */}
              <div className="flex-shrink-0">
                <a
                  href="#raio-x"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] text-white font-semibold hover:shadow-lg hover:shadow-[#5D2C9D]/50 transition-all duration-300"
                >
                  Começar Agora
                  <ArrowUpIcon className="size-5 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                    </div>
            </div>

            {/* Grid de 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {passos.map((passo, index) => {
                const stepConfigs = [
                  { 
                    icon: ChartBarIcon,
                    gradient: 'linear-gradient(135deg, #2A3B95, #3d52b8, #5D2C9D)',
                    bgColor: 'bg-[#2A3B95]/5',
                    borderColor: 'border-[#2A3B95]/20'
                  }, // Relevância
                  { 
                    icon: PuzzlePieceIcon,
                    gradient: 'linear-gradient(135deg, #5D2C9D, #7a3fc4, #2A3B95)',
                    bgColor: 'bg-[#5D2C9D]/5',
                    borderColor: 'border-[#5D2C9D]/20'
                  }, // Motivação
                  { 
                    icon: SparklesIcon,
                    gradient: 'linear-gradient(135deg, #008C9E, #20ACBE, #2A3B95)',
                    bgColor: 'bg-[#008C9E]/5',
                    borderColor: 'border-[#008C9E]/20'
                  }, // Velocidade
                ]
                const config = stepConfigs[index] || stepConfigs[0]
                const IconComponent = config.icon
                
                return (
                  <div
                    key={index}
                    className={`${config.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border ${config.borderColor}`}
                  >
                    {/* Ícone com Gradiente 3D - Paleta Estimulus */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                        <div 
                          className="absolute inset-0 rounded-2xl"
                          style={{ background: config.gradient }}
                        />
                        <IconComponent 
                          className="size-12 relative z-10 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                      </div>

                    {/* Título */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {passo.titulo}
                    </h3>

                    {/* Descrição */}
                    {passo.descricao && (
                      <p className="text-sm text-gray-600 mb-4">
                        {passo.descricao}
                      </p>
                    )}

                    {/* Lista de Bullets */}
                    <ul className="space-y-2">
                      {passo.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircleIcon 
                            className="size-4 shrink-0 mt-0.5 text-gray-400" 
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. SOLUÇÃO FINX - Layout Estilo Imagem (Cards com Cores e Gradientes) */}
        <section id="finx" className="py-24 md:py-40 relative bg-white overflow-hidden">
          
          <div className="container-premium relative z-10 max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-16">
              {/* Badge no topo */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
                  <SparklesIcon className="size-4 text-yellow-400" />
                  <span className="text-gray-900 text-xs font-bold uppercase">Metodologia</span>
                </div>
                <span className="text-[#B8B8B8] text-sm">FINX 360</span>
          </div>
          
              {/* Headline Principal */}
              <h2 className="typography-h2 text-gray-900 mb-4">
                <span className="typography-italic-serif">Metodologia</span>{' '}
                <span className="font-black">FINX 360</span>
              </h2>

              {/* Descrição */}
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium max-w-3xl mx-auto">
                Fidelização impulsionada por insights de dados e neuromarketing para enriquecer a experiência e a jornada do cliente.
              </p>
            </div>

            {/* Cards FINX - Layout Horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {finxPilares.map((pilar, index) => {
                // Cores sólidas da paleta Estimulus
                const finxColors = [
                  {
                    // F - FIDELIZAÇÃO - Azul Marinho
                    bgColor: '#2A3B95',
                    textColor: 'text-white',
                    letterColor: 'text-white/20',
                    borderColor: 'border-white/20',
                    link: '#contato'
                  },
                  {
                    // I - IA + DADOS - Roxo Escuro
                    bgColor: '#5D2C9D',
                    textColor: 'text-white',
                    letterColor: 'text-white/20',
                    borderColor: 'border-white/20',
                    link: '#contato'
                  },
                  {
                    // N - NEUROMARKETING - Azul Petróleo
                    bgColor: '#008C9E',
                    textColor: 'text-white',
                    letterColor: 'text-white/20',
                    borderColor: 'border-white/20',
                    link: '#contato'
                  },
                  {
                    // X - EXPERIÊNCIA - Cinza
                    bgColor: '#B8B8B8',
                    textColor: 'text-white',
                    letterColor: 'text-white/20',
                    borderColor: 'border-white/20',
                    link: '#contato'
                  }
                ]
                const colorConfig = finxColors[index] || finxColors[0]
                
                return (
                  <a
                    key={index}
                    href={colorConfig.link}
                    className="group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
                    style={{
                      backgroundColor: colorConfig.bgColor
                    }}
                  >
                    {/* Letra Grande - Aumentada */}
                    <div className={`text-8xl md:text-9xl font-black mb-4 leading-none ${colorConfig.letterColor} group-hover:text-white/30 transition-colors`}>
                        {pilar.letra}
                      </div>

                    {/* Título */}
                    <h3 
                      className={`typography-h3 mb-4 transition-colors ${colorConfig.textColor}`}
                    >
                        {pilar.titulo === 'NEUROMARKETING' ? (
                          <>
                            NEURO<br />MARKETING
                          </>
                        ) : pilar.titulo === 'IA + DADOS' ? (
                          <>
                            IA<br />+ DADOS
                          </>
                        ) : (
                          pilar.titulo
                        )}
                      </h3>

                    {/* Descrição */}
                    <p 
                      className={`typography-body mb-6 transition-colors ${colorConfig.textColor} opacity-90`}
                    >
                        {pilar.descricao}
                      </p>

                    {/* Seta no Rodapé */}
                    <div className={`flex items-center justify-end pt-4 border-t transition-colors ${colorConfig.borderColor}`}>
                      <ArrowRightIcon className={`size-5 transition-all text-white group-hover:translate-x-1`} />
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="text-center">
              <a
                href="#contato"
                className="btn-primary-modern inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold"
              >
                Quero aplicar na minha empresa
                <ArrowRightIcon className="size-6" />
              </a>
            </div>
          </div>
        </section>

        {/* 8. QUEM SOMOS - Versão Concisa */}
        <section className="py-12 md:py-20 relative bg-gradient-to-br from-[#2A3B95]/5 via-white to-[#5D2C9D]/5 overflow-hidden">
          {/* Elementos decorativos sutis */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#2A3B95]/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#5D2C9D]/5 blur-3xl" />
            </div>

          <div className="container-premium relative z-10 max-w-5xl">
            <div className="text-center mb-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] rounded-full px-4 py-1.5 flex items-center gap-2">
                  <RocketLaunchIcon className="w-3.5 h-3.5 text-white" />
                  <span className="text-white text-xs font-bold uppercase">Quem Somos</span>
                    </div>
                  </div>
              
              {/* Título */}
              <h2 className="typography-h2 text-gray-900 mb-6">
                <span className="block"><span className="typography-italic-serif">Transformando</span> resultados</span>
                <span className="block"><span className="typography-italic-serif">com</span> marketing inteligente</span>
              </h2>
              
              {/* Descrição Concisa */}
              <p className="typography-body text-gray-700 max-w-3xl mx-auto mb-8">
                Inteligência estratégica, dados e IA para acelerar vendas, crescimento e fidelização — sustentados por décadas de experiência em consultorias de gestão e marketing.
              </p>
                    </div>
            
            {/* Estatísticas Compactas - 4 em linha */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: BuildingOfficeIcon, value: '+6.000', label: 'Empresas', color: 'from-[#2A3B95] to-[#3d52b8]' },
                { icon: ChartBarIcon, value: '+10.000', label: 'horas treinamento', color: 'from-[#5D2C9D] to-[#7a3fc4]' },
                { icon: CheckCircleIcon, value: '99%', label: 'Aprovação', color: 'from-[#008C9E] to-[#00a8c0]' },
                { icon: StarIcon, value: '4.9/5', label: 'Avaliação', color: 'from-[#2A3B95] via-[#5D2C9D] to-[#008C9E]' }
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="bg-white rounded-lg p-4 border border-[#2A3B95]/20 hover:border-[#2A3B95]/40 transition-all duration-300 hover:shadow-md text-center">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3 mx-auto shadow-sm`}>
                      <IconComponent className="w-5 h-5 text-white" />
                  </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <p className="typography-caption text-gray-600">{stat.label}</p>
                  </div>
                )
              })}
                    </div>
                  </div>
        </section>

        {/* 4. PROVA SOCIAL - Layout Estilo Imagem (Grid de Cards) - Versão Concisa */}
        <section className="py-12 md:py-20 relative bg-white overflow-hidden">
          
          <div className="container-premium relative z-10 max-w-7xl">
            {/* Header Section - Título Esquerda + CTA Direita */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
              {/* Título Principal - Esquerda */}
              <div className="flex-1">
                <h2 className="typography-h2 text-gray-900 mb-1">
                  <span className="typography-italic-serif">Transformando</span> Clientes em Fãs
              </h2>
                <h2 className="typography-h2 text-gray-900 mb-3">
                  <span className="typography-italic-serif">Que</span> Entregam Resultados Reais.
                </h2>
                <p className="typography-body-small text-gray-600">
                  Combinamos pensamento estratégico, objetivos de negócio e design centrado no cliente para criar experiências que entregam resultados reais.
                </p>
            </div>

              {/* CTA Button - Direita */}
              <div className="flex-shrink-0">
              <a
                href="#contato"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#5D2C9D]/50 transition-all duration-300"
              >
                Quero resultados assim
                  <ArrowUpIcon className="size-4 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

            {/* Grid de Depoimentos - Layout Minimalista e Compacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
              {depoimentos.map((depoimento, index) => {
                  return (
                  <div
                    key={index}
                    className="group bg-white rounded-lg p-4 border border-gray-200 hover:border-[#2A3B95]/30 hover:shadow-md transition-all duration-200"
                  >
                    {/* Estrelas */}
                    <div className="flex items-center gap-0.5 mb-2">
                      {[...Array(depoimento.rating || 5)].map((_, i) => (
                        <StarIcon key={i} className="w-2.5 h-2.5 text-yellow-400" />
              ))}
            </div>

                    {/* Texto do Depoimento */}
                    {!depoimento.isVideo && (
                      <p className="typography-body-small text-gray-700 mb-3 leading-relaxed line-clamp-3 text-sm">
                        &ldquo;{depoimento.texto}&rdquo;
                      </p>
                    )}

                    {/* Nome e Cargo */}
                    <div className="flex items-center gap-2.5 pt-2.5 border-t border-gray-100">
                      {depoimento.isVideo ? (
                        <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                          <PlayCircleIcon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
            </div>
                      ) : (
                        <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                          <Image
                            src={depoimento.foto}
                            alt={depoimento.nome}
                            width={28}
                            height={28}
                            className="object-cover"
                          />
          </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="typography-caption font-semibold text-gray-900 truncate">
                          {depoimento.nome}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {depoimento.cargo}
              </p>
            </div>
                      </div>
                        </div>
                  )
                })}
                      </div>
                      
            {/* Carrossel Horizontal de Logos - Próximo à margem inferior */}
            <div className="w-full overflow-hidden relative mt-10">
              <div className="flex gap-4 animate-scroll-left scrollbar-hide">
                {/* Duplicar logos para loop infinito */}
                {[...clientesLogos, ...clientesLogos].map((cliente, index) => (
                  <div 
                    key={`cliente-depoimentos-${index}`} 
                    className="flex-shrink-0 flex items-center justify-center p-3 rounded-lg bg-white border border-gray-200 hover:border-[#2A3B95]/30 hover:shadow-md transition-all h-16 w-32"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      {cliente.logo ? (
                        <Image
                          src={cliente.logo}
                          alt={cliente.alt || cliente.nome || 'Logo cliente'}
                          width={100}
                          height={40}
                          className="max-w-full max-h-full w-auto h-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            if (target) {
                              target.style.display = 'none'
                              const parent = target.parentElement
                              if (parent && cliente.fallback) {
                                // Usar textContent ao invés de innerHTML para prevenir XSS
                                const span = document.createElement('span')
                                span.className = 'text-xs text-gray-500 text-center'
                                span.textContent = cliente.fallback
                                parent.appendChild(span)
                              }
                            }
                          }}
                        />
                      ) : (
                        <span className="text-xs text-gray-500 text-center">{cliente.fallback || cliente.nome || 'Cliente'}</span>
                      )}
                    </div>
              </div>
                ))}
            </div>
            </div>
          </div>
        </section>

        {/* 8. OFERTAS/PREÇOS - Premium Pricing Plan Style (Modelo da Imagem) */}
        <section 
          id="ofertas" 
          className="py-20 md:py-32 relative bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden"
          style={{ 
            display: 'block', 
            visibility: 'visible', 
            opacity: 1, 
            minHeight: '600px',
            position: 'relative',
            zIndex: 1
          }}
        >
          {/* Gradiente sutil de fundo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-[#2A3B95]/5 via-[#5D2C9D]/5 to-transparent blur-3xl pointer-events-none z-0" />
          
          <div className="container-premium relative z-10 max-w-7xl">
            {/* Header - Título Grande em Serif */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                <span className="block">Planos inteligentes</span>
                <span className="block">diferentes objetivos</span>
              </h2>
              <p className="text-lg md:text-xl text-[#B8B8B8] max-w-3xl mx-auto">
                Potencialize sua performance de vendas com estratégias inteligentes que combinam eficiência, agilidade e crescimento contínuo.
              </p>
            </div>

            {/* Cards de Preços - Layout Horizontal (4 cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {ofertas && Array.isArray(ofertas) && ofertas.length > 0 ? ofertas.map((oferta, index) => {
                // Cores pastel da paleta Estimulus para cada card
                const pricingColors = [
                  {
                    bg: '#E8EBF5', // Azul Marinho pastel (#2A3B95)
                    border: '#D1D8EB',
                    text: '#2A3B95',
                    icon: '#2A3B95',
                    buttonBg: '#2A3B95',
                    buttonText: '#ffffff'
                  },
                  {
                    bg: '#F0E8F5', // Roxo pastel (#5D2C9D)
                    border: '#E0D1EB',
                    text: '#5D2C9D',
                    icon: '#5D2C9D',
                    buttonBg: '#5D2C9D',
                    buttonText: '#ffffff'
                  },
                  {
                    bg: '#E0F2F5', // Azul Petróleo pastel (#008C9E)
                    border: '#C8E5EB',
                    text: '#008C9E',
                    icon: '#008C9E',
                    buttonBg: '#008C9E',
                    buttonText: '#ffffff'
                  },
                  {
                    bg: '#EDE8F5', // Roxo Escuro pastel (#3D1C7D)
                    border: '#DDD1EB',
                    text: '#3D1C7D',
                    icon: '#3D1C7D',
                    buttonBg: '#3D1C7D',
                    buttonText: '#ffffff'
                  }
                ]
                const colorConfig = pricingColors[index] || pricingColors[0]
                
                return (
                  <div
                    key={`oferta-${index}`}
                    className="relative group flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl overflow-hidden border-2"
                    style={{ 
                      backgroundColor: colorConfig.bg,
                      borderColor: colorConfig.border,
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <div className="flex flex-col flex-1 p-6 lg:p-8">
                      {/* Título do Pacote */}
                      <h3 
                        className="text-xl lg:text-2xl font-bold mb-2 leading-tight"
                        style={{ color: colorConfig.text }}
                      >
                        {oferta.nome}
                      </h3>
                      
                      {/* Target Audience */}
                      <p className="text-sm mb-6 text-gray-600">
                        {oferta.targetAudience}
                      </p>
                      
                      {/* Features List */}
                      <div className="flex-1 mb-6">
                        <ul className="space-y-3">
                          {oferta.features && oferta.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="mt-1 shrink-0" style={{ color: colorConfig.icon }}>
                                <CheckCircleIcon className="size-5" />
                              </div>
                              <span className="text-sm leading-relaxed text-gray-700">
                                {feature}
                </span>
                            </li>
                          ))}
                        </ul>
                    </div>
                    
                    {/* Rodapé com CTA */}
                    <div className="mt-auto pt-6 border-t" style={{ borderColor: colorConfig.border }}>
                      {/* Botão CTA */}
                      <a
                        href={oferta.link || '#contato'}
                        className="w-full text-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:scale-105 inline-flex items-center justify-center gap-2"
                        style={{ 
                          backgroundColor: colorConfig.buttonBg,
                          color: colorConfig.buttonText
                        }}
                      >
                        Consulte!
                        <ArrowRightIcon className="size-4" />
                      </a>
                    </div>
                  </div>
                    </div>
                )
              }) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg font-semibold text-gray-900 mb-4">Ofertas disponíveis em breve</p>
                  <p className="text-[#B8B8B8]">Entre em contato para conhecer nossos planos</p>
                  <a href="#contato" className="btn-primary-modern inline-flex items-center gap-2 mt-6 px-8 py-3">
                    Falar com especialista
                    <ArrowRightIcon className="size-5" />
                  </a>
                  </div>
              )}
            </div>
          </div>
        </section>

        {/* 6. BLOG - Premium Minimalist (Nexo Style) */}
        <section id="blog" className="py-20 md:py-32 relative bg-gray-50 overflow-hidden">
          
          <div className="container-premium relative z-10 max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-16">
              {/* Badge */}
              <span className="inline-block bg-white rounded-lg px-4 py-2 text-gray-900 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                BLOG
              </span>
              
              {/* Título Principal */}
              <h2 className="typography-h2 text-gray-900 mb-4">
                Nosso Espaço de Conteúdo
            </h2>
            </div>

            {/* Cards de Blog - Layout Especial */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Imagem no topo, título embaixo */}
              <Link href="/blog/como-aumentar-vendas" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80"
                    alt="Marketing e Fidelização"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="typography-h4 text-gray-900 group-hover:text-[#2A3B95] transition-colors">
                    Como aumentar suas vendas com fidelização
                  </h3>
                </div>
                  </Link>

              {/* Card 2: Título no topo, imagem embaixo */}
              <Link href="/blog/cac-vs-ltv" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div className="p-6 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-[#2A3B95] transition-colors">
                    CAC vs LTV: entenda a relação e otimize suas métricas
                  </h3>
                </div>
                <div className="relative h-80 overflow-hidden mt-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
                    alt="Análise de Métricas"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
              </div>
                  </Link>

              {/* Card 3: Fundo escuro, imagem grande, título sobreposto */}
              <Link href="/blog/5-sinais-redesenhar-estrategia-fidelizacao" className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-full min-h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80"
                    alt="Case de Sucesso"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                  {/* Título sobreposto na parte inferior */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      5 sinais de que é hora de redesenhar sua estratégia de fidelização
                    </h3>
                </div>
              </div>
                  </Link>
            </div>

            <div className="text-center mt-16">
              <Link
                href="/blog"
                className="btn-secondary-modern inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
              >
                Ver todos os artigos
                <ArrowRightIcon className="size-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. CALCULADORAS - Grid Compacto */}
        <section id="calculadoras" className="py-12 md:py-20 relative bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
          
          <div className="container-premium relative z-10 max-w-7xl">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="typography-h2 text-gray-900 mb-3">
                Dados que impulsionam <span className="typography-italic-serif">resultados.</span>
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 max-w-2xl mx-auto font-bold">
                Descubra novas possibilidades com nossas calculadoras.
              </p>
            </div>

            {/* Grid Compacto - 4 Cards em Linha */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  icon: CurrencyDollarIcon,
                  title: 'CAC',
                  subtitle: 'Custo de Aquisição',
                  description: 'Calcule o custo real de aquisição de cada cliente.',
                  color: '#2A3B95',
                  bgGradient: 'from-[#2A3B95]/10 to-[#2A3B95]/5'
                },
                {
                  icon: ChartBarIcon,
                  title: 'LTV',
                  subtitle: 'Valor do Ciclo de Vida',
                  description: 'Descubra o valor total que cada cliente gera.',
                  color: '#5D2C9D',
                  bgGradient: 'from-[#5D2C9D]/10 to-[#5D2C9D]/5'
                },
                {
                  icon: ArrowUpIcon,
                  title: 'ROI',
                  subtitle: 'Retorno sobre Investimento',
                  description: 'Meça o retorno real dos seus investimentos.',
                  color: '#008C9E',
                  bgGradient: 'from-[#008C9E]/10 to-[#008C9E]/5'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'CHURN',
                  subtitle: 'Taxa de Cancelamento',
                  description: 'Identifique e reduza a perda de clientes.',
                  color: '#3D1C7D',
                  bgGradient: 'from-[#3D1C7D]/10 to-[#3D1C7D]/5'
                }
              ].map((calc, index) => {
                const IconComponent = calc.icon
                return (
                  <Link
                    key={index}
                    href="/calculadoras"
                    className="group rounded-xl p-6 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col relative overflow-hidden"
                    style={{
                      backgroundColor: `${calc.color}08`,
                      borderColor: `${calc.color}30`,
                    }}
                  >
                    {/* Borda superior colorida */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: calc.color }}
                    />
                    
                    {/* Ícone com Gradiente */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md"
                      style={{ 
                        backgroundColor: `${calc.color}15`,
                      }}
                    >
                      <IconComponent 
                        className="size-7"
                        style={{ color: calc.color }}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Título e Subtítulo */}
                    <h3 
                      className="text-xl font-bold mb-1 transition-colors"
                      style={{ color: calc.color }}
                    >
                      {calc.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {calc.subtitle}
                    </p>

                    {/* Descrição */}
                    <p className="text-sm text-gray-500 mb-4 flex-1">
                      {calc.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: calc.color }}>
                      <span>Calcular</span>
                      <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section - Estilo Web3 com Paleta Estimulus */}
        <section className="py-16 md:py-24 relative bg-gradient-to-br from-[#2A3B95]/5 via-white to-[#5D2C9D]/5 overflow-hidden">
          {/* Elementos decorativos Web3 */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#008C9E]/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#5D2C9D]/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2A3B95]/5 blur-3xl" />
          </div>
          
          {/* Grid Pattern Web3 */}
          <div className="absolute inset-0 opacity-5 z-0">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(42,59,149,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(42,59,149,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
            </div>

          <div className="container-premium max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Coluna Esquerda: Título/Tema */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] rounded-full blur-lg opacity-50 animate-pulse" />
                    <div className="relative bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] rounded-full px-5 py-2.5 flex items-center gap-2 border border-white/20 shadow-xl">
                      <CpuChipIcon className="w-4 h-4 text-white" />
                      <span className="text-white text-xs font-bold uppercase">FAQ</span>
            </div>
          </div>
              </div>
                <h2 className="typography-h2 text-gray-900 mb-4">
                  Tem dúvidas?{' '}
                  <span className="bg-gradient-to-r from-[#2A3B95] via-[#5D2C9D] to-[#008C9E] bg-clip-text text-transparent">
                    Temos as respostas!
              </span>
              </h2>
                <p className="typography-body text-gray-600">
                  Aqui estão algumas das perguntas mais frequentes sobre nossos serviços e soluções de fidelização.
              </p>
            </div>

              {/* Coluna Direita: Perguntas FAQ */}
              <div className="lg:col-span-8">
            <div className="space-y-4">
              {[
                {
                  question: 'Quanto tempo leva para ver resultados?',
                  answer: 'Os primeiros resultados começam a aparecer em 30-60 dias, com melhorias significativas em 90 dias. Nosso método é baseado em ciência e dados, garantindo resultados mensuráveis e sustentáveis.'
                },
                {
                  question: 'Preciso ter conhecimento técnico?',
                  answer: 'Não! Nossa equipe cuida de toda a implementação técnica. Você só precisa se concentrar no seu negócio. Oferecemos treinamento completo para sua equipe e suporte contínuo.'
                },
                {
                  question: 'Funciona para meu tipo de negócio?',
                  answer: 'Sim! Já atendemos empresas de diversos segmentos: varejo, serviços, e-commerce, clínicas, restaurantes e muito mais. Nossa metodologia é adaptável a qualquer modelo de negócio que tenha clientes recorrentes.'
                },
                {
                  question: 'E se não funcionar?',
                  answer: 'Oferecemos garantia de 90 dias. Se não houver resultados mensuráveis no período, devolvemos seu investimento. Mas com +500 empresas atendidas e 95% de satisfação, estamos confiantes nos resultados.'
                }
              ].map((faq, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                        <div className="group relative bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-[#2A3B95]/20 transition-all duration-300 hover:border-[#2A3B95]/40 hover:shadow-xl hover:shadow-[#2A3B95]/20 hover:-translate-y-1">
                          {/* Efeito de brilho no hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#2A3B95]/0 via-[#5D2C9D]/0 to-[#008C9E]/0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                          
                          <Disclosure.Button className="flex w-full items-center justify-between text-left relative z-10">
                            <span className="typography-body font-bold text-gray-900 pr-4 flex-1 group-hover:text-[#2A3B95] transition-colors">
                              {faq.question}
                            </span>
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:from-[#3d52b8] group-hover:to-[#7a3fc4] transition-all">
                        <ChevronDownIcon
                                className={`w-5 h-5 text-white transition-transform duration-200 ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                            </div>
                      </Disclosure.Button>
                          <Disclosure.Panel className="pt-4 pb-2 typography-body-small text-gray-600 leading-relaxed relative z-10">
                        {faq.answer}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
                </div>

                {/* Link "Mais perguntas..." com Seta */}
                <div className="mt-6 flex items-center justify-end">
                  <a
                    href="#contato"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#2A3B95] to-[#5D2C9D] text-white font-semibold typography-body-small hover:shadow-xl hover:shadow-[#5D2C9D]/50 transition-all hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5D2C9D] to-[#008C9E] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Mais perguntas...</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO - Card Reduzido com Azul Marinho (Paleta Estimulus) */}
        <section id="contato" className="py-12 md:py-16 relative bg-gradient-to-br from-[#2A3B95]/5 via-white to-[#5D2C9D]/5 overflow-hidden">
          {/* Elementos decorativos Web3 */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-1/4 right-1/4 w-56 h-56 rounded-full bg-[#2A3B95]/15 blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-[#5D2C9D]/15 blur-3xl" />
          </div>
          
          <div className="container-premium max-w-2xl relative z-10">
            {/* Card Principal com Azul Marinho e Estilo Web3 */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#2A3B95] via-[#3d52b8] to-[#2A3B95] p-6 md:p-8 overflow-hidden border border-white/20 shadow-xl">
              {/* Grid Pattern Web3 */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }} />
              </div>
              
              {/* Formas Circulares Concêntricas Translúcidas */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/15 blur-2xl" />
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
              </div>

              <div className="relative z-10">
                {/* Ícone Web3 */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-lg animate-pulse" />
                    <div className="relative w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
                      <RocketLaunchIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Título Principal */}
                <h2 className="typography-h3 text-white mb-3 text-center">
                  Pronto para{' '}
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    transformar
                  </span>{' '}
                  seu negócio?
            </h2>
                
                {/* Subtítulo */}
                <p className="typography-body-small text-white/90 max-w-xl mx-auto mb-6 text-center">
                  Entre em contato e descubra como podemos aumentar sua receita recorrente.
                </p>

                {/* Formulário Email + Botão Get Started */}
                <form 
                  className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.currentTarget
                    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement
                    if (emailInput && emailInput.value) {
                      const handleSubmit = async () => {
                        setEnviandoEmail(true)
                        setMensagemSucesso('')
                        
                        try {
                          const response = await fetch('/api/contato', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              email: emailInput.value,
                              origem: 'Formulário Principal - Hero Section'
                            }),
                          })
                          
                          const data = await response.json()
                          
                          if (data.success) {
                            setMensagemSucesso('Email enviado com sucesso! Entraremos em contato em breve.')
                            emailInput.value = ''
                            // Scroll suave para a seção de contato
                            setTimeout(() => {
                              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                            }, 500)
                          } else {
                            setMensagemSucesso('Erro ao enviar. Tente novamente.')
                          }
                        } catch (error) {
                          console.error('Erro ao enviar email:', error)
                          setMensagemSucesso('Erro ao enviar. Tente novamente.')
                        } finally {
                          setEnviandoEmail(false)
                          setTimeout(() => setMensagemSucesso(''), 5000)
                        }
                      }
                      handleSubmit()
                    }
                  }}
                >
                  {/* Campo de Email */}
                  <input
                    type="email"
                    name="contact-email"
                    placeholder="Digite seu email..."
                    required
                    disabled={enviandoEmail}
                    aria-label="Email para contato"
                    aria-required="true"
                    className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 typography-body-small focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all shadow-md disabled:opacity-50"
                  />
                  
                  {/* Botão Get Started */}
                  <button
                    type="submit"
                    disabled={enviandoEmail}
                    aria-label="Começar agora - Ir para contato"
                    className="group px-6 py-3 rounded-lg bg-white text-[#2A3B95] font-bold typography-body-small hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {enviandoEmail ? 'Enviando...' : 'Começar Agora'}
                    {!enviandoEmail && <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />}
                  </button>
                </form>
                {mensagemSucesso && (
                  <p className={`mt-3 text-sm ${mensagemSucesso.includes('sucesso') ? 'text-green-300' : 'text-red-300'}`}>
                    {mensagemSucesso}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Botão Back-to-Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#2A3B95] text-white shadow-xl hover:bg-[#3d52b8] hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group ${
          showBackToTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUpIcon className="size-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* FOOTER - Mesmas Cores do Hero (Gradiente Escuro, Logo Grande + Newsletter + Redes Sociais) */}
      <footer className="relative bg-gradient-to-b from-[#1A2B75] via-[#2A3B95] to-[#3D1C7D] text-white overflow-hidden">
        <div className="container-premium py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            {/* Coluna 1: Logo Grande à Esquerda */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <Logo className="[&_img]:h-20 [&_img]:md:h-28 [&_img]:w-auto" />
              </div>
              <p className="typography-body text-white/70 mb-6">
                Fidelização que usa dados e neuromarketing para criar experiências irresistíveis que aumentam engajamento, retenção e faturamento.
              </p>
              
              {/* Redes Sociais */}
              <div className="flex items-center gap-4">
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/company/estimulus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/estimulusmarketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/fidelimax" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="lg:col-span-2">
              <h4 className="typography-body-small font-bold text-white uppercase tracking-wider mb-6">Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="typography-body text-white/70 hover:text-white transition-colors">Home</a></li>
                <li><a href="/blog" className="typography-body text-white/70 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#ofertas" className="typography-body text-white/70 hover:text-white transition-colors">Preços</a></li>
                <li><a href="#contato" className="typography-body text-white/70 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Coluna 3: Newsletter - Versão Concisa */}
            <div className="lg:col-span-4">
              <h4 className="typography-body-small font-bold text-white uppercase tracking-wider mb-3">Newsletter</h4>
              <p className="typography-body-small text-white/70 mb-4">
                Receba insights exclusivos sobre fidelização e marketing de relacionamento.
              </p>
              <form 
                className="flex flex-col sm:flex-row gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement
                  if (emailInput && emailInput.value) {
                    const handleSubmit = async () => {
                      try {
                        const response = await fetch('/api/contato', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            email: emailInput.value,
                            origem: 'Newsletter - Footer'
                          }),
                        })
                        
                        const data = await response.json()
                        
                        if (data.success) {
                          alert('Obrigado por se inscrever! Em breve você receberá nossos conteúdos exclusivos.')
                          emailInput.value = ''
                        } else {
                          alert('Erro ao se inscrever. Tente novamente.')
                        }
                      } catch (error) {
                        console.error('Erro ao enviar email:', error)
                        alert('Erro ao se inscrever. Tente novamente.')
                      }
                    }
                    handleSubmit()
                  }
                }}
              >
                <input
                  type="email"
                  name="newsletter-email"
                  placeholder="Seu melhor email"
                  required
                  aria-label="Email para newsletter"
                  aria-required="true"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                />
                <button
                  type="submit"
                  aria-label="Inscrever-se na newsletter"
                  className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="typography-body-small text-white/60">
                  &copy; 2024 Estimulus. Todos os direitos reservados.
                </p>
              <div className="flex items-center gap-4">
                <a href="/politica-privacidade" className="typography-body-small text-white/60 hover:text-white transition-colors">
                  Privacidade
                </a>
                <a href="/termos" className="typography-body-small text-white/60 hover:text-white transition-colors">
                  Termos
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
