import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comunidade Builder",
  description: "Template da Comunidade Builder",
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

