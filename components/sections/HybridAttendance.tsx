"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Badge from "@/components/ui/Badge";

/* ─── Hybrid Demo ─────────────────────────────────────────────────── */

type DemoState = 0 | 1 | 2;

const demoStates = [
  {
    badge: "🤖 Bot respondendo",
    badgeVariant: "green" as const,
    bubble: {
      from: "bot",
      text: "Olá! Sou o assistente da Loja XYZ. Como posso te ajudar hoje?",
    },
    highlight: null,
  },
  {
    badge: "👤 Operador assumiu",
    badgeVariant: "amber" as const,
    bubble: {
      from: "operator",
      text: "Oi! Aqui é a Ana. Vejo que você tem uma dúvida especial — deixa eu te ajudar!",
    },
    highlight: "amber",
  },
  {
    badge: "🤖 Bot reativado",
    badgeVariant: "green" as const,
    bubble: {
      from: "bot",
      text: "Olá novamente! Estou aqui para continuar seu atendimento. 😊",
    },
    highlight: null,
  },
];

function HybridDemo() {
  const [state, setState] = useState<DemoState>(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const interval = setInterval(() => {
      setState((s) => ((s + 1) % 3) as DemoState);
    }, 2500);
    return () => clearInterval(interval);
  }, [prefersReduced]);

  const current = demoStates[state];

  return (
    <div className="flex flex-col gap-4">
      {/* Status badge */}
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={state}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
          >
            <Badge variant={current.badgeVariant}>{current.badge}</Badge>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Chat window */}
      <div
        className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
          current.highlight === "amber"
            ? "border-amber-400/40 shadow-lg shadow-amber-400/10"
            : "border-white/10"
        }`}
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="w-8 h-8 rounded-full bg-green/20 flex items-center justify-center text-green text-xs font-bold">
            {state === 1 ? "A" : "IA"}
          </div>
          <div>
            <p className="text-white text-sm font-medium leading-none">
              {state === 1 ? "Ana (operadora)" : "Assistente IA"}
            </p>
            <p
              className={`text-xs mt-0.5 ${
                state === 1 ? "text-amber-400" : "text-green"
              }`}
            >
              {state === 1 ? "humano" : "bot ativo"}
            </p>
          </div>
          {state === 2 && (
            <span className="ml-auto text-xs text-green font-body">
              ✓ Bot reativado
            </span>
          )}
        </div>

        {/* Messages */}
        <div className="px-4 py-4 min-h-[100px] flex flex-col justify-end gap-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={state}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className={`rounded-xl px-3 py-2 text-sm max-w-[85%] text-white ${
                current.bubble.from === "bot"
                  ? "self-start bg-white/10"
                  : "self-start bg-amber-400/10 border border-amber-400/20"
              }`}
            >
              {current.bubble.text}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Sequence labels */}
      <div className="flex items-center justify-center gap-4 mt-2">
        {(["Automático", "Humano", "Automático"] as const).map((label, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`font-headline font-bold text-sm transition-all duration-300 ${
                state === i
                  ? label === "Humano"
                    ? "text-amber-400 scale-110"
                    : "text-green scale-110"
                  : "text-white/20"
              }`}
            >
              {label}
            </span>
            {i < 2 && <span className="text-white/20 text-xs">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */

export default function HybridAttendance() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #1A1A2E 0%, #0F0F1A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <Badge variant="purple">Diferencial exclusivo</Badge>

          <h2 className="font-headline font-bold text-4xl lg:text-5xl text-white leading-tight">
            Bot quando você precisa de escala.{" "}
            <span className="gradient-text">Humano quando você precisa de empatia.</span>
          </h2>

          <p className="font-body text-text-muted leading-relaxed">
            O maior medo de quem adota um bot é perder o cliente numa situação delicada. No SemanticZap, você nunca perde o controle. A IA atende com eficiência e consistência — mas quando uma conversa precisa de um toque humano, você assume em um clique. O bot pausa. Você continua de onde ele parou. Sem atrito, sem surpresas para o cliente.
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "Assunção instantânea — uma mensagem sua e o bot para automaticamente.",
              "Contexto preservado — você vê todo o histórico antes de responder.",
              "Retomada com um clique — reative o bot quando terminar.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-sm text-white/80">
                <span className="text-green mt-0.5 shrink-0">✅</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Demo */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <HybridDemo />
        </motion.div>
      </div>
    </section>
  );
}
