"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GradientText from "@/components/ui/GradientText";

/* ─── Particle Field ─────────────────────────────────────────────── */

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  dx: number;
  dy: number;
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.07 + 0.05,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

/* ─── WhatsApp Mockup ────────────────────────────────────────────── */

type ChatStep = "idle" | "userMsg" | "typing" | "botMsg";

function WhatsAppMockup() {
  const [step, setStep] = useState<ChatStep>("idle");
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setStep("botMsg");
      return;
    }
    const sequence: [ChatStep, number][] = [
      ["userMsg", 600],
      ["typing", 1800],
      ["botMsg", 3000],
      ["idle", 1500],
    ];
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    let offset = 0;

    const run = () => {
      setStep("idle");
      offset = 200;
      sequence.forEach(([s, delay]) => {
        const t = setTimeout(() => setStep(s), (offset += delay));
        timeouts.push(t);
      });
      const loopT = setTimeout(run, offset + 1000);
      timeouts.push(loopT);
    };
    run();
    return () => timeouts.forEach(clearTimeout);
  }, [prefersReduced]);

  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="w-64 sm:w-72 mx-auto bg-[#111B21] rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">
        {/* Status bar */}
        <div className="bg-[#202C33] px-5 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green/20 flex items-center justify-center text-green text-xs font-bold">
            IA
          </div>
          <div>
            <p className="text-white text-sm font-medium leading-none">Assistente Loja</p>
            <p className="text-green text-xs mt-0.5">online</p>
          </div>
        </div>

        {/* Chat area */}
        <div className="bg-[#0B141A] px-4 py-4 min-h-[220px] flex flex-col gap-3">
          {/* User bubble */}
          {(step === "userMsg" || step === "typing" || step === "botMsg") && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="self-end bg-[#005C4B] text-white text-xs rounded-xl rounded-br-sm px-3 py-2 max-w-[85%]"
            >
              Qual o prazo de entrega para SP?
            </motion.div>
          )}

          {/* Typing indicator */}
          {step === "typing" && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="self-start bg-[#202C33] rounded-xl rounded-bl-sm px-3 py-2"
            >
              <div className="flex gap-1 items-center h-4">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-text-muted"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Bot response */}
          {step === "botMsg" && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="self-start bg-[#202C33] text-white text-xs rounded-xl rounded-bl-sm px-3 py-2 max-w-[85%]"
            >
              <span className="inline-flex items-center gap-1 text-purple text-[10px] font-medium mb-1">
                🤖 IA
              </span>
              <br />
              Olá! Para São Paulo capital, o prazo é de 2 a 3 dias úteis. Posso te ajudar com mais alguma coisa? 😊
            </motion.div>
          )}
        </div>
      </div>

      {/* Floating KPI card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -bottom-4 -right-4 sm:-right-8 glass-card rounded-xl px-4 py-3 glow-green"
      >
        <p className="font-headline font-bold text-2xl text-green">87%</p>
        <p className="font-body text-xs text-text-muted leading-tight">resolvidos<br />pelo bot</p>
      </motion.div>
    </div>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────── */

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay },
        };

  return (
    <section className="relative min-h-screen bg-near-black flex items-center overflow-hidden pt-16">
      {/* Radial purple glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(108,99,255,0.15) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <ParticleField />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <motion.div {...fadeUp(0)}>
            <Badge variant="green">🚀 Acesso antecipado — vagas limitadas</Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-headline font-extrabold text-5xl lg:text-7xl leading-[1.05] tracking-tight text-white"
          >
            Seu WhatsApp atende{" "}
            <GradientText>24 horas</GradientText>
            {" "}por dia.{" "}
            <br className="hidden sm:block" />
            Você descansa.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="font-body text-lg text-text-muted leading-relaxed max-w-xl"
          >
            Crie um agente de IA que responde seus clientes automaticamente no WhatsApp — com a personalidade da sua marca, em português, pronto em minutos. Quando precisar, você assume com um clique.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Garantir acesso antecipado →
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => {
                document
                  .querySelector("#como-funciona")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver como funciona
            </Button>
          </motion.div>

          <motion.p
            {...fadeUp(0.4)}
            className="font-body text-sm text-text-muted"
          >
            ✓ Grátis por 30 dias &nbsp;&nbsp; ✓ Sem cartão de crédito &nbsp;&nbsp; ✓ Setup em 11 minutos
          </motion.p>
        </div>

        {/* Mockup */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <WhatsAppMockup />
        </motion.div>
      </div>
    </section>
  );
}
