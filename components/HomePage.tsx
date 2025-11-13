'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { 
  Bars3Icon, 
  XMarkIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ClockIcon,
  AcademicCapIcon,
  LifebuoyIcon,
  CalculatorIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import Logo from './Logo'
import Image from 'next/image'

const navigation = [
  { name: 'Início', href: '#inicio' },
  { name: 'Por que a Estimulus', href: '#porque' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Integrações', href: '#integracoes' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Resultados', href: '#resultados' },
  { name: 'Blog', href: '#blog' },
]

const stats = [
  { label: 'Bilhão em vendas', value: '+1Bi', description: 'processadas' },
  { label: 'Um ROI de', value: '9x', description: 'retorno médio' },
  { label: 'Aumento de faturamento', value: '20%', description: 'em média' },
]

const bigNumbers = [
  { number: '2000+', label: 'Empresas', description: 'confiam na Estimulus', icon: '🏢' },
  { number: '1Bi+', label: 'Vendas', description: 'processadas', icon: '💰' },
  { number: '9x', label: 'ROI', description: 'retorno médio', icon: '📈' },
  { number: '24/7', label: 'Suporte', description: 'sempre disponível', icon: '💬' },
]

const services = [
  {
    name: 'Cashback',
    description: 'Lance campanhas de cashback em segundos e veja seus clientes voltarem para comprar mais em pouco tempo.',
    subtitle: 'Alcance um ROI até 6x maior',
  },
  {
    name: 'CRM',
    description: 'Gerencie interações, personalize ofertas e melhore a experiência do cliente com um CRM robusto e intuitivo.',
    subtitle: 'Potencialize relacionamentos',
  },
  {
    name: 'Automação',
    description: 'Automatize tarefas e comunicações, otimizando seu tempo e garantindo que cada cliente receba a mensagem certa na hora certa.',
    subtitle: 'Impulsione resultados',
  },
]

const apps = [
  {
    name: 'App para lojistas',
    title: 'Esteja no controle, em qualquer lugar',
    description: 'Com o nosso aplicativo, você acompanha suas ações de fidelização de clientes, analisa resultados e cria estratégias de melhoria em poucos cliques, na palma da mão.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'App para clientes',
    title: 'Seus clientes com total controle do cashback',
    description: 'Com nosso aplicativo, seus clientes poderão acompanhar o saldo que possuem a qualquer momento, indicar seu estabelecimento para amigos e facilitar o resgate do cashback.',
    icon: UserGroupIcon,
  },
]

const processSteps = [
  {
    step: '1',
    title: 'O cliente faz uma compra na sua loja e recebe um valor de volta em cashback',
  },
  {
    step: '2',
    title: 'Ele é avisado com o valor disponível do cashback. Podendo ver a notificação no celular com nosso app, por email, SMS ou WhatsApp.',
  },
  {
    step: '3',
    title: 'O sistema envia uma mensagem para o cliente lembrando do seu saldo e prazo para resgatar o cashback.',
  },
  {
    step: '4',
    title: 'Cliente volta para a sua loja, faz novas compras, e se torna recorrente. Parabéns, você fidelizou um novo cliente! 😀',
  },
]

const implementation = [
  {
    name: 'Implantação Rápida',
    description: 'A integração ao seu negócio é feita de forma ágil e eficiente. Nosso processo de implantação foi desenvolvido para ser simples, permitindo que você comece a aproveitar as funcionalidades da plataforma em questão de dias.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Treinamento Completo',
    description: 'Sabemos que cada empresa tem suas particularidades. Por isso, oferecemos treinamentos personalizados para que sua equipe possa explorar todas as potencialidades do sistema Estimulus.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Suporte Contínuo',
    description: 'Nossa relação com você não termina após a implantação. Com um suporte dedicado e sempre disponível, resolvemos rapidamente qualquer dúvida para que você continue operando com total tranquilidade.',
    icon: LifebuoyIcon,
  },
]

const integrations = [
  { name: 'Shopify', logo: 'shopify' },
  { name: 'WooCommerce', logo: 'woocommerce' },
  { name: 'Magento', logo: 'magento' },
  { name: 'VTEX', logo: 'vtex' },
  { name: 'Tray', logo: 'tray' },
  { name: 'NuvemShop', logo: 'nuvemshop' },
]

const partners = [
  { name: 'Hostinger', percentage: 100 },
  { name: 'Uso de AI', percentage: 100 },
  { name: 'Webhosting', percentage: 100 },
  { name: 'Projetos', percentage: 100 },
]

const faqs = [
  {
    question: 'Como funciona o sistema de cashback?',
    answer: 'O cliente faz uma compra na sua loja e recebe um valor de volta em cashback. Ele é avisado com o valor disponível e pode ver a notificação no celular com nosso app, por email, SMS ou WhatsApp. O sistema envia mensagens lembrando do saldo e prazo para resgate.',
  },
  {
    question: 'É possível usar a solução sem integração?',
    answer: 'Sim! Embora nossa solução tenha sido desenvolvida para facilitar a geração de cashback no seu fluxo de vendas, é possível usar nossa solução sem integração e lançar o cashback manualmente em poucos segundos.',
  },
  {
    question: 'Posso definir diferentes porcentagens de cashback para produtos específicos?',
    answer: 'Claro! Você que manda. Conforme o seu modelo comercial, você define a porcentagem de cashback para cada produto quando quiser. É possível, até mesmo, criar cashback personalizado para datas comemorativas ou lançamentos.',
  },
  {
    question: 'Quem define o valor de compra necessário para o resgate do cashback?',
    answer: 'Essa decisão é sua, mas nossa equipe de Sucesso do Cliente auxilia você em todas as etapas! Contamos com especialistas em fidelização de clientes que oferecem uma consultoria para encontrar a melhor estratégia.',
  },
  {
    question: 'Existe um período de teste para o sistema?',
    answer: 'A gente acredita que a fidelização de clientes é um processo de longo prazo, por isso, um período de teste não vai ajudar você a definir se a Estimulus é para a sua empresa. Mas nossos especialistas realizam uma demonstração gratuita antes da contratação.',
  },
  {
    question: 'Quanto tempo leva para implementar o sistema na minha loja?',
    answer: 'Após a contratação, em até 2 dias úteis nosso time de Sucesso do Cliente entrará em contato para realizar o onboarding e agendar os treinamentos. O acesso à plataforma é imediato, então mesmo antes disso você conseguirá se conectar à Estimulus.',
  },
]

const testimonials = [
  {
    name: 'Grazi',
    role: 'Oliver Shop',
    content: 'A equipe Estimulus trabalha visando o melhor resultado da empresa, e possui uma equipe muito dedicada em ensinar o uso do sistema e nos mostrar os resultados.',
  },
  {
    name: 'Ariel Tainah Dias Silveira',
    role: 'Jo Confecções e calçados',
    content: 'Gostei muito, sistema simples e funcional, atendimento acima do esperado.',
  },
  {
    name: 'Vitor Rezende',
    role: 'Dust',
    content: 'O atendimento e acompanhamento do Estimulus é excelente. O Time todo comprometido com o sucesso do cliente e atendem com muita energia positiva e com muita rapidez.',
  },
]

const footerLinks = {
  content: [
    { name: 'Integrações', href: '#integracoes' },
    { name: 'Por que a Estimulus', href: '#porque' },
    { name: 'Cashback', href: '#servicos' },
    { name: 'CRM', href: '#servicos' },
    { name: 'Automação', href: '#servicos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Blog', href: '#blog' },
  ],
  institutional: [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
    { name: 'Trabalhe Conosco', href: '#' },
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Serviço', href: '#' },
  ],
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 glass border-b border-white/20 shadow-glass">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Logo />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contato" className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
              Fale conosco <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contato"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Fale conosco
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div id="inicio" className="relative isolate -z-10 pt-32 pb-20 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 gradient-mesh" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-400/30 via-purple-400/30 to-pink-400/30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse-slow"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 pt-10 sm:pb-32 lg:px-8 lg:pt-20">
            <div className="mx-auto max-w-3xl text-center animate-fade-in">
              <h1 className="text-pretty text-5xl font-black tracking-tight text-gray-900 sm:text-7xl lg:text-8xl">
                Escolha a <span className="text-gradient">fidelização</span> de clientes e lucre mais
              </h1>
              <p className="mt-8 text-xl/8 text-gray-600 sm:text-2xl">
                Aumente suas vendas com soluções de fidelização de clientes. Cashback, CRM e Automação de mensagens: tudo em um só lugar para alavancar seu negócio.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contato"
                  className="group relative rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shine-effect overflow-hidden"
                >
                  <span className="relative z-10">Agende uma reunião</span>
                </a>
                <a href="#servicos" className="group flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
                  Saiba mais <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm/6 text-gray-600">
                <div className="flex items-center gap-x-2.5">
                  <CheckCircleIcon className="size-5 flex-none text-indigo-600" />
                  Retenção elevada de clientes
                </div>
                <div className="flex items-center gap-x-2.5">
                  <CheckCircleIcon className="size-5 flex-none text-indigo-600" />
                  Suporte especializado
                </div>
                <div className="flex items-center gap-x-2.5">
                  <CheckCircleIcon className="size-5 flex-none text-indigo-600" />
                  Integração simplificada
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big Numbers Section - Inspirado no Riscamundo */}
        <div id="resultados" className="relative mx-auto -mt-20 max-w-7xl px-6 sm:mt-0 lg:px-8">
          <div className="absolute inset-0 pattern-dots opacity-30" />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {bigNumbers.map((item, index) => (
                <div 
                  key={item.label} 
                  className="group relative glass rounded-3xl p-8 text-center card-hover border border-white/20 shadow-card glow-effect overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="text-5xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>{item.icon}</div>
                    <div className="number-highlight mb-2">{item.number}</div>
                    <dt className="text-lg font-bold text-gray-900 mb-1">{item.label}</dt>
                    <dd className="text-sm text-gray-600">{item.description}</dd>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section tradicional */}
        <div className="relative mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="section-divider" />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="group relative glass rounded-2xl p-8 text-center card-hover border border-white/20 shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <dd className="text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">{stat.value}</dd>
                    <dt className="text-base font-medium text-gray-700 mb-1">{stat.label}</dt>
                    <dd className="text-sm text-gray-500">{stat.description}</dd>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services section */}
        <div id="servicos" className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="absolute inset-0 gradient-mesh opacity-50" />
          <div className="section-divider" />
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Transforme seu negócio em um <span className="text-gradient">ímã de clientes</span>
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 sm:text-xl">
              Oferecemos as ferramentas certas para você fidelizar clientes, aumentar suas vendas e automatizar processos. Descubra como o nosso sistema de Cashback, CRM e Automação pode revolucionar a forma como você se conecta com seus consumidores.
            </p>
          </div>
          <dl className="relative mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={service.name} 
                className="group relative glass rounded-2xl p-8 card-hover border border-white/20 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <dt className="font-semibold text-gray-900">
                    <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircleIcon className="size-7 text-white" aria-hidden="true" />
                    </div>
                    <div className="text-2xl font-bold mb-2">{service.name}</div>
                    <div className="text-sm font-medium text-indigo-600">{service.subtitle}</div>
                  </dt>
                  <dd className="mt-4 text-gray-600 leading-relaxed">{service.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Apps section */}
        <div className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Aplicativos para você e seus <span className="text-gradient">clientes</span>
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {apps.map((app, index) => (
              <div 
                key={app.name} 
                className="group relative glass rounded-2xl p-10 card-hover border border-white/20 shadow-card overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <app.icon className="size-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{app.title}</h3>
                  <p className="text-base/7 text-gray-600 leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process section */}
        <div className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Um sistema de cashback <span className="text-gradient">simples e eficaz</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 font-medium">
              Poucos passos, muito lucro
            </p>
          </div>
          <div className="relative mx-auto mt-16 max-w-4xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="group glass rounded-2xl p-6 card-hover border border-white/20 shadow-card flex gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-base font-medium text-gray-900 leading-relaxed">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-20 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
            <div className="relative">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <CalculatorIcon className="size-8 text-white animate-float" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 sm:text-4xl">
                Descubra quanto o Cashback te fará lucrar com a nossa calculadora!
              </h2>
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-indigo-600 shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300"
              >
                Usar a calculadora
                <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Partners Section - Inspirado no Riscamundo */}
        <div className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="absolute inset-0 pattern-grid opacity-20" />
          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-pretty text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
              <span className="text-gradient">PARCEIROS</span>
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {partners.map((partner, index) => (
                <div 
                  key={partner.name}
                  className="group relative glass rounded-2xl p-6 text-center card-hover border border-white/20 shadow-card overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-4xl font-black text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text mb-2">
                      {partner.percentage}%
                    </div>
                    <div className="text-sm font-semibold text-gray-700">{partner.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integrations section */}
        <div id="integracoes" className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-center">
              Em sincronia com as <span className="text-gradient">ferramentas</span> que você já usa
            </h2>
            <p className="mt-6 text-xl text-gray-600 text-center">
              Conecte suas ferramentas e trabalhe de forma integrada
            </p>
          </div>
          <div className="relative mx-auto mt-16 grid max-w-lg grid-cols-3 items-center gap-6 sm:max-w-xl sm:grid-cols-4 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {integrations.map((integration, index) => (
              <div 
                key={integration.name} 
                className="group glass rounded-xl p-6 card-hover border border-white/20 shadow-card flex items-center justify-center h-20 magnetic-hover"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation section */}
        <div id="sobre" className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Apoio total em <span className="text-gradient">cada etapa</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Entendemos que a adoção de uma nova tecnologia pode parecer desafiadora. Por isso, estamos comprometidos em garantir que a transição para a nossa plataforma seja suave e eficiente.
            </p>
          </div>
          <dl className="relative mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {implementation.map((item, index) => (
              <div 
                key={item.name}
                className="group glass rounded-2xl p-8 card-hover border border-white/20 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <dt className="font-semibold text-gray-900">
                  <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="size-7 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-xl font-bold mb-3">{item.name}</div>
                </dt>
                <dd className="mt-4 text-gray-600 leading-relaxed">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Testimonials section */}
        <div className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Mais de <span className="text-gradient">2000 empresas</span> confiam na Estimulus
            </h2>
          </div>
          <div className="relative mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className="group glass rounded-2xl p-8 card-hover border border-white/20 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 text-4xl text-indigo-200">"</div>
                <p className="text-base/7 text-gray-900 mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-x-4 pt-6 border-t border-gray-200">
                  <div className="size-12 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-lg" />
                  <div>
                    <div className="text-base font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <div className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <div className="relative mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-center mb-4">
              Perguntas <span className="text-gradient">frequentes</span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Tire suas dúvidas sobre nossa plataforma
            </p>
          </div>
          <dl className="relative mx-auto mt-8 max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group glass rounded-2xl border border-white/20 shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left hover:bg-white/50 transition-colors"
                >
                  <dt className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</dt>
                  <ChevronDownIcon
                    className={`size-6 shrink-0 text-indigo-600 transition-all duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <dd className="px-6 pb-6 text-base text-gray-600 leading-relaxed animate-slide-up">{faq.answer}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div id="contato" className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-400/20 via-purple-400/20 to-pink-400/20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse-slow"
            />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-pretty text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Faça parte da <span className="text-gradient">revolução Estimulus</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-xl text-gray-600">
              Transforme seu Negócio. A maneira mais eficaz de utilizar o cashback para fidelizar os clientes.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contato"
                className="group relative rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shine-effect overflow-hidden"
              >
                <span className="relative z-10">Agende uma reunião</span>
              </a>
              <a href="#servicos" className="group flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
                Solicite uma demonstração <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-16 sm:mt-32 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-gray-600">
                A maneira mais eficaz de utilizar o cashback para fidelizar os clientes.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Conteúdo</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.content.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Institucional</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.institutional.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Contato</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>contato@estimulus.com.br</li>
                <li>(00) 0000-0000</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8">
            <p className="text-center text-xs/5 text-gray-500">
              &copy; 2024 Estimulus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
