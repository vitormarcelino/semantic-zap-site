"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ─── KPI Card ───────────────────────────────────────────────────── */

function KpiCard({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
      <p className={`font-headline font-bold text-2xl ${color}`}>{value}</p>
      <p className="font-body text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}

/* ─── Line Chart (SVG) ───────────────────────────────────────────── */

function LineChart() {
  const points = [30, 55, 40, 70, 60, 85, 75, 90, 80, 95];
  const width = 400;
  const height = 80;
  const step = width / (points.length - 1);

  const pathD = points
    .map((p, i) => {
      const x = i * step;
      const y = height - (p / 100) * height;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const fillD =
    pathD +
    ` L ${(points.length - 1) * step} ${height} L 0 ${height} Z`;

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="font-body text-xs font-medium text-gray-600">
          Volume de mensagens (últimos 7 dias)
        </p>
        <span className="font-body text-xs text-green font-semibold">↑ 23%</span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-16"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#25D366" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#25D366" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d={fillD} fill="url(#lineGrad)" />
        <path
          d={pathD}
          fill="none"
          stroke="#25D366"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ─── Conversation List ──────────────────────────────────────────── */

const conversations = [
  {
    name: "Maria Silva",
    preview: "Qual o prazo para SP?",
    status: "bot",
    time: "agora",
  },
  {
    name: "João Santos",
    preview: "Quero cancelar meu pedido",
    status: "human",
    time: "2 min",
  },
  {
    name: "Ana Oliveira",
    preview: "Obrigada, perfeito!",
    status: "bot",
    time: "5 min",
  },
];

function ConversationList() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="font-body text-xs font-medium text-gray-600">
          Conversas recentes
        </p>
      </div>
      <ul>
        {conversations.map((conv, i) => (
          <li
            key={i}
            className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 last:border-0"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
              {conv.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body text-xs font-medium text-gray-800 truncate">
                {conv.name}
              </p>
              <p className="font-body text-xs text-gray-400 truncate">
                {conv.preview}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  conv.status === "bot" ? "bg-green" : "bg-amber-400"
                }`}
                aria-label={conv.status === "bot" ? "Bot ativo" : "Operador humano"}
              />
              <span className="font-body text-[10px] text-gray-400">{conv.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Dashboard Mockup ───────────────────────────────────────────── */

function DashboardMockup() {
  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-xl p-5 max-w-2xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green" />
        <div className="flex-1 bg-white rounded-md h-5 mx-4 border border-gray-200" />
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <KpiCard value="247" label="Conversas totais" color="text-navy" />
        <KpiCard value="89" label="Ativas agora" color="text-purple" />
        <KpiCard value="87%" label="Resolvidas pelo bot" color="text-green" />
        <KpiCard value="13" label="Takeovers hoje" color="text-amber-500" />
      </div>

      {/* Chart */}
      <div className="mb-4">
        <LineChart />
      </div>

      {/* Conversations */}
      <ConversationList />
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */

export default function Dashboard() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-gray-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline font-bold text-4xl lg:text-5xl text-navy mb-4">
            Visibilidade total. Controle real.
          </h2>
          <p className="font-body text-text-muted text-lg max-w-2xl mx-auto" style={{ color: "#475569" }}>
            Acompanhe tudo em tempo real pelo dashboard — conversas ativas, métricas por agente e histórico completo.
          </p>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <DashboardMockup />
        </motion.div>

        {/* Bullets */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12"
        >
          {[
            { icon: "📊", text: "Métricas por agente em tempo real" },
            { icon: "💬", text: "Histórico completo de conversas" },
            { icon: "⚡", text: "Atualizações instantâneas sem recarregar" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 font-body text-sm" style={{ color: "#475569" }}>
              <span aria-hidden="true">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
