import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estimulus - Fidelização de Clientes",
  description: "Aumente suas vendas com soluções de fidelização de clientes. Cashback, CRM e Automação de mensagens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

