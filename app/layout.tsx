import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SemanticZap — Agente de IA para WhatsApp com Atendimento Híbrido | Sem Código",
  description:
    "Configure um agente de IA no seu WhatsApp em minutos. Atendimento automático 24/7 com bot + humano. Sem código, sem programador. Teste grátis por 30 dias.",
  keywords: [
    "bot para whatsapp",
    "agente ia whatsapp",
    "chatbot whatsapp brasil",
    "automatizar atendimento whatsapp",
  ],
  openGraph: {
    title: "SemanticZap — Agente de IA para WhatsApp",
    description:
      "Atendimento automático no WhatsApp com IA. Configure em minutos, sem código.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
