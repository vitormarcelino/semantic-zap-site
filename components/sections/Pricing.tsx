"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

/* ─── Plans ──────────────────────────────────────────────────────── */

interface Plan {
  name: string;
  label: string;
  monthlyPrice: number;
  highlight: boolean;
  badge?: string;
  features: string[];
  model: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    label: "Para começar",
    monthlyPrice: 97,
    highlight: false,
    features: [
      "1 agente",
      "1.500 mensagens/mês",
      "1 operador",
      "Analytics básico",
      "Suporte por email",
    ],
    model: "GPT-4o-mini",
  },
  {
    name: "Pro",
    label: "Mais flexível",
    monthlyPrice: 197,
    highlight: true,
    badge: "Mais popular",
    features: [
      "3 agentes",
      "5.000 mensagens/mês",
      "3 operadores",
      "Analytics completo",
      "Suporte email + chat",
    ],
    model: "GPT-4o",
  },
  {
    name: "Scale",
    label: "Para quem cresceu",
    monthlyPrice: 397,
    highlight: false,
    features: [
      "10 agentes",
      "20.000 mensagens/mês",
      "Operadores ilimitados",
      "Analytics + export",
      "Suporte prioritário",
    ],
    model: "GPT-4o",
  },
];

/* ─── FAQ ─────────────────────────────────────────────────────────── */

const faqs = [
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem multa ou burocracia. Você cancela em um clique no painel.",
  },
  {
    q: "O que acontece se eu ultrapassar o limite de mensagens?",
    a: "Avisamos antes. Você pode fazer upgrade ou aguardar o próximo ciclo — nunca cortamos seu serviço sem aviso.",
  },
  {
    q: "Preciso de número de WhatsApp Business?",
    a: "Sim, precisa de um número com WhatsApp Business API ativado. Te ajudamos no setup sem custo adicional.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Rodamos em infraestrutura própria. Nenhum dado de conversa passa por serviços de terceiros além da API oficial da Meta.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <div className="max-w-2xl mx-auto mt-16 flex flex-col gap-2">
      <h3 className="font-headline font-semibold text-xl text-white text-center mb-4">
        Perguntas frequentes
      </h3>
      {faqs.map((faq, i) => (
        <div key={i} className="glass-card rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left font-body text-sm text-white hover:text-green transition-colors duration-200"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-medium">{faq.q}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-180 text-green" : "text-text-muted"
              }`}
              aria-hidden="true"
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={prefersReduced ? {} : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 font-body text-sm text-text-muted leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <section id="precos" className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline font-bold text-4xl lg:text-5xl text-white mb-4">
            Planos simples, sem surpresa
          </h2>
          <p className="font-body text-text-muted text-lg mb-8">
            Um atendente CLT custa R$2.800/mês. O SemanticZap Starter custa{" "}
            <span className="text-green font-semibold">R$97</span>.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-4 py-2">
            <span
              className={`font-body text-sm ${!isAnnual ? "text-white" : "text-text-muted"}`}
            >
              Mensal
            </span>
            <button
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual((v) => !v)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green ${
                isAnnual ? "bg-green" : "bg-white/20"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
                  isAnnual ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`font-body text-sm ${isAnnual ? "text-white" : "text-text-muted"}`}
            >
              Anual
            </span>
            {isAnnual && (
              <Badge variant="green">20% off</Badge>
            )}
          </div>
        </motion.div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const price = isAnnual
              ? Math.round(plan.monthlyPrice * 0.8)
              : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 ${
                  plan.highlight
                    ? "border-green bg-green/5 shadow-2xl shadow-green/20 scale-[1.02]"
                    : "glass-card hover:border-green/40"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="green">{plan.badge}</Badge>
                  </div>
                )}

                <div className="mb-6">
                  <p className="font-body text-xs text-text-muted mb-1">{plan.label}</p>
                  <h3 className="font-headline font-bold text-2xl text-white mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1">
                    <span className="font-headline font-black text-5xl text-white">
                      R${price}
                    </span>
                    <span className="font-body text-text-muted mb-2">/mês</span>
                  </div>
                  {isAnnual && (
                    <p className="font-body text-xs text-green mt-1">
                      Cobrado anualmente · R${price * 12}/ano
                    </p>
                  )}
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 font-body text-sm text-white/80">
                      <Check size={16} className="text-green shrink-0" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                  <li className="flex items-center gap-2 font-body text-sm text-text-muted">
                    <Check size={16} className="text-purple shrink-0" aria-hidden="true" />
                    {plan.model}
                  </li>
                </ul>

                <Button
                  variant={plan.highlight ? "primary" : "ghost"}
                  size="md"
                  className="w-full"
                >
                  Garantir acesso antecipado
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ */}
        <FaqAccordion />
      </div>
    </section>
  );
}
