"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShoppingBag, Calendar, Home } from "lucide-react";
import Button from "@/components/ui/Button";

const segments = [
  {
    icon: ShoppingBag,
    iconColor: "text-green",
    iconBg: "bg-green/10",
    title: "E-commerce",
    description:
      "Automatize dúvidas sobre pedidos, prazo e troca. Atenda na Black Friday sem contratar.",
  },
  {
    icon: Calendar,
    iconColor: "text-purple",
    iconBg: "bg-purple/10",
    title: "Clínicas e Serviços",
    description:
      "Confirme consultas, envie lembretes e tire dúvidas — seguindo o protocolo da sua empresa.",
  },
  {
    icon: Home,
    iconColor: "text-green",
    iconBg: "bg-green/10",
    title: "Imobiliárias",
    description:
      "Qualifique leads automaticamente e entregue contatos quentes para o seu corretor.",
  },
];

export default function EarlyAdopters() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-near-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline font-bold text-4xl lg:text-5xl text-white mb-4">
            Seja um dos primeiros
          </h2>
          <p className="font-body text-text-muted text-lg max-w-2xl mx-auto">
            Estamos selecionando empresas para o programa de acesso antecipado.{" "}
            <span className="text-white font-medium">30 dias grátis</span> em troca de feedback real.
          </p>
        </motion.div>

        {/* Segment cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <motion.div
                key={i}
                initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-lg hover:shadow-green/10"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${seg.iconBg}`}
                >
                  <Icon size={22} className={seg.iconColor} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-xl text-white mb-2">
                    {seg.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {seg.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <Button variant="primary" size="lg">
            Quero acesso antecipado →
          </Button>
          <p className="font-body text-sm text-text-muted">
            Vagas limitadas · Sem cartão de crédito · Cancelamento imediato
          </p>
        </motion.div>
      </div>
    </section>
  );
}
