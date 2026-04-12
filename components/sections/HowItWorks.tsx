"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Settings, Smartphone, Zap } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

const steps = [
  {
    number: "01",
    numberColor: "text-green",
    icon: Settings,
    title: "Configure seu agente",
    description:
      "Dê um nome, escolha o tom de voz (temos 12 opções, do formal ao descontraído) e escreva as instruções de como seu negócio deve se apresentar. Sem código. Sem programador.",
  },
  {
    number: "02",
    numberColor: "text-purple",
    icon: Smartphone,
    title: "Conecte ao WhatsApp",
    description:
      "Integre com sua conta WhatsApp Business em minutos via API oficial da Meta. Seu número real. Sua conversa. Tudo no seu controle.",
  },
  {
    number: "03",
    numberColor: "text-green",
    icon: Zap,
    title: "Atenda — ou deixe a IA atender",
    description:
      "Seu agente começa a responder imediatamente. Você acompanha tudo pelo dashboard em tempo real e assume qualquer conversa quando quiser, com um clique.",
  },
];

export default function HowItWorks() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="como-funciona" className="bg-gray-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline font-bold text-4xl lg:text-5xl text-navy mb-4">
            Como funciona
          </h2>
          <p className="font-body text-lg text-navy/60">
            São só{" "}
            <GradientText as="span" className="font-semibold">
              3 passos
            </GradientText>
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-12 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-green via-purple to-green opacity-30"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              >
                {/* Number + icon */}
                <div className="relative mb-6">
                  <span
                    className={`font-headline font-black text-7xl ${step.numberColor} opacity-10 absolute -top-4 left-1/2 -translate-x-1/2 select-none`}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div
                    className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center ${
                      step.numberColor === "text-green"
                        ? "bg-green/10"
                        : "bg-purple/10"
                    }`}
                  >
                    <Icon
                      size={24}
                      className={step.numberColor}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="font-headline font-bold text-xl text-navy mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-navy/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
