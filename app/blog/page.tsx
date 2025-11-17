import { Metadata } from 'next'
import BlogClient from './blog-client'

export const metadata: Metadata = {
  title: "Como Aprender Estratégias de Fidelização e Marketing | Blog Estimulus",
  description: "Aprenda estratégias de marketing e fidelização de clientes. Artigos práticos sobre CAC, LTV, ROI, programas de fidelidade e cases de sucesso para PMEs.",
  keywords: "artigos fidelização, estratégias marketing, como fidelizar clientes, cases de sucesso, tutoriais marketing, blog estimulus",
  openGraph: {
    title: "Blog - Estratégias de Fidelização | Estimulus",
    description: "Aprenda estratégias práticas de marketing e fidelização de clientes para PMEs.",
    url: "https://estimulus.com.br/blog",
  },
  alternates: {
    canonical: "https://estimulus.com.br/blog",
  },
}

export default function BlogPage() {
  return <BlogClient />
}
