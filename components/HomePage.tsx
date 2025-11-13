'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'

const navigation = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Resultados', href: '#resultados' },
  { name: 'Blog', href: '#blog' },
]

const stats = [
  { label: 'Vendas processadas', value: '+1Bi' },
  { label: 'ROI médio', value: '9x' },
  { label: 'Aumento de faturamento', value: '20%' },
]

const services = [
  {
    name: 'Cashback',
    description: 'Lance campanhas de cashback em segundos e veja seus clientes voltarem para comprar mais em pouco tempo.',
    icon: CheckCircleIcon,
  },
  {
    name: 'CRM',
    description: 'Gerencie interações, personalize ofertas e melhore a experiência do cliente com um CRM robusto e intuitivo.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Automação',
    description: 'Automatize tarefas e comunicações, otimizando seu tempo e garantindo que cada cliente receba a mensagem certa na hora certa.',
    icon: CheckCircleIcon,
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

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
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
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contato" className="text-sm/6 font-semibold text-gray-900">
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
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contato"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
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
        <div id="inicio" className="relative isolate -z-10 pt-24">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:pt-20">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Aumente suas vendas com soluções de fidelização de clientes
              </h1>
              <p className="mt-6 text-lg/8 text-gray-600">
                Cashback, CRM e Automação de mensagens: tudo em um só lugar para alavancar seu negócio.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contato"
                  className="rounded-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Agende uma reunião
                </a>
                <a href="#servicos" className="text-sm/6 font-semibold text-gray-900">
                  Saiba mais <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="mt-16 flex items-center justify-center gap-x-8 text-sm/6 text-gray-600">
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

        {/* Stats section */}
        <div id="resultados" className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services section */}
        <div id="servicos" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              A fidelização de clientes é só o começo
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Oferecemos as ferramentas certas para você fidelizar clientes, aumentar suas vendas e automatizar processos.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name}>
                <dt className="font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
                    <service.icon className="size-6 text-white" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-1 text-gray-600">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Testimonials section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Mais de 2000 empresas confiam na Estimulus
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <p className="text-base/7 text-gray-900">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="size-12 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
                  <div>
                    <div className="text-base font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm/6 text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div id="contato" className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Transforme seu negócio em um ímã de clientes
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-600">
              Descubra como o nosso sistema de Cashback, CRM e Automação pode revolucionar a forma como você se conecta com seus consumidores.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contato"
                className="rounded-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Agende uma reunião
              </a>
              <a href="#servicos" className="text-sm/6 font-semibold text-gray-900">
                Solicite uma demonstração <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </nav>
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

