"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1A2E 0%, #0F0F1A 100%)",
      }}
    >
      {/* Purple glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(108,99,255,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <motion.h2
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headline font-extrabold text-5xl lg:text-7xl leading-[1.05] tracking-tight gradient-text"
        >
          Seu WhatsApp pode atender sozinho.
          <br />
          A partir de hoje.
        </motion.h2>

        <motion.p
          initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-lg text-text-muted max-w-xl"
        >
          Junte-se às primeiras empresas usando o SemanticZap. 30 dias grátis, sem cartão de crédito.
        </motion.p>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col items-center gap-3"
        >
          <Button variant="primary" size="lg">
            Garantir meu acesso →
          </Button>
          <p className="font-body text-sm text-text-muted">
            Setup em 11 minutos · Suporte em português · Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
}
