import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MonitoringProvider } from "@/components/MonitoringProvider";

export const metadata: Metadata = {
  title: "Como Aumentar Vendas com Fidelização de Clientes para PME | Estimulus",
  description: "Descubra como nosso programa de fidelização ajuda PMEs a aumentar receita recorrente em até 300%. Veja cases reais, calcule suas métricas e obtenha diagnóstico gratuito.",
  keywords: "fidelização de clientes, programa de fidelidade PME, como aumentar vendas, cashback, retenção de clientes, calcular CAC LTV ROI, estratégias de fidelização",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://estimulus.com.br',
    title: 'Como Aumentar Vendas com Fidelização de Clientes | Estimulus',
    description: 'Programa de fidelização que aumenta receita recorrente em até 300%. Especialistas em marketing para PMEs.',
    siteName: 'Estimulus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Como Aumentar Vendas com Fidelização | Estimulus',
    description: 'Programa de fidelização que aumenta receita recorrente em até 300%.',
  },
  alternates: {
    canonical: 'https://estimulus.com.br',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Estimulus",
      "url": "https://estimulus.com.br",
      "description": "Especialistas em programas de fidelização de clientes para PMEs. Combinamos Inteligência Artificial, Neuromarketing e Análise de Dados para criar programas de fidelização que realmente funcionam.",
      "logo": "https://estimulus.com.br/logo-oficial-estimulus.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+55-11-99405-1155",
        "email": "contato@estimulus.com.br",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR"
      },
      "sameAs": [
        "https://www.instagram.com/estimulusmarketing",
        "https://www.youtube.com/fidelimax"
      ]
    },
    {
      "@type": "WebSite",
      "name": "Estimulus - Fidelização de Clientes",
      "url": "https://estimulus.com.br",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://estimulus.com.br/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Programa de Fidelização de Clientes",
      "provider": {
        "@type": "Organization",
        "name": "Estimulus"
      },
      "description": "Programa completo de fidelização FINX 360 que combina fidelização, IA + Dados, Neuromarketing e Experiência da Marca para aumentar receita recorrente em até 300%.",
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Pequenas e Médias Empresas (PME)"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <meta name="ai-content-type" content="commercial" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <ThemeProvider>
          <MonitoringProvider>
            {children}
          </MonitoringProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

