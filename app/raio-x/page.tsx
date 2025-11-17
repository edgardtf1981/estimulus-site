import { Metadata } from 'next'
import RaioXClient from './raio-x-client'

export const metadata: Metadata = {
  title: "Qual é o Estado Atual do Meu Programa de Fidelização? | Diagnóstico Gratuito Estimulus",
  description: "Obtenha um diagnóstico gratuito do seu programa de fidelização. Descubra pontos fortes e fracos, receba recomendações personalizadas e veja como melhorar seus resultados.",
  keywords: "diagnóstico fidelização, avaliação programa fidelidade, teste gratuito fidelização, análise retenção clientes, raio-x fidelização",
  openGraph: {
    title: "Diagnóstico Gratuito de Fidelização | Estimulus",
    description: "Obtenha um diagnóstico completo e gratuito do seu programa de fidelização.",
    url: "https://estimulus.com.br/raio-x",
  },
  alternates: {
    canonical: "https://estimulus.com.br/raio-x",
  },
}

export default function RaioXPage() {
  return <RaioXClient />
}
