import { Metadata } from 'next'
import CalculadorasClient from './calculadoras-client'

export const metadata: Metadata = {
  title: "Como Calcular Métricas Essenciais de Negócio (CAC, LTV, ROI, Churn) | Estimulus",
  description: "Calcule CAC, LTV, ROI e Churn gratuitamente. Ferramentas práticas para medir e melhorar seus indicadores de negócio. Aprenda o que cada métrica significa e como usá-las.",
  keywords: "calculadora CAC, calcular LTV, calcular ROI, taxa de churn, métricas de negócio, custo de aquisição de cliente, lifetime value, ferramentas de cálculo marketing",
  openGraph: {
    title: "Calculadoras de Métricas de Negócio | Estimulus",
    description: "Calcule CAC, LTV, ROI e Churn gratuitamente. Ferramentas práticas para medir seus indicadores.",
    url: "https://estimulus.com.br/calculadoras",
  },
  alternates: {
    canonical: "https://estimulus.com.br/calculadoras",
  },
}

export default function CalculadorasPage() {
  return <CalculadorasClient />
}
