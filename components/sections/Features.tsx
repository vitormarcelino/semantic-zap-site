"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Layout,
  Palette,
  Brain,
  Users,
  BarChart2,
  MessageSquare,
  GitBranch,
  Shield,
} from "lucide-react";
import Badge from "@/components/ui/Badge";

interface Feature {
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  badge?: { label: string; variant: "green" | "purple" | "amber" };
}

const features: Feature[] = [
  {
    icon: Layout,
    iconColor: "text-green",
    iconBg: "bg-green/10",
    title: "Configuração visual sem código",
    description:
      "Crie e ajuste seu agente por um formulário simples — identidade, comportamento e mensagens em três abas.",
  },
  {
    icon: Palette,
    iconColor: "text-purple",
    iconBg: "bg-purple/10",
    title: "12 tons de personalidade",
    description:
      "Do formal ao criativo, do empático ao técnico — escolha como sua marca fala.",
  },
  {
    icon: Brain,
    iconColor: "text-purple",
    iconBg: "bg-purple/10",
    title: "GPT-4o nativo",
    description:
      "O modelo de IA mais avançado disponível. Respostas naturais, contextuais e precisas em português.",
    badge: { label: "Mais avançado", variant: "purple" },
  },
  {
    icon: Users,
    iconColor: "text-green",
    iconBg: "bg-green/10",
    title: "Atendimento híbrido bot + humano",
    description:
      "O bot atende. Você assume quando quiser. A transição é instantânea — sem o cliente perceber.",
    badge: { label: "Diferencial", variant: "green" },
  },
  {
    icon: BarChart2,
    iconColor: "text-green",
    iconBg: "bg-green/10",
    title: "Analytics em tempo real",
    description:
      "Veja conversas ativas, volume de mensagens, tempo de resposta e taxa de takeover. Tudo ao vivo.",
  },
  {
    icon: MessageSquare,
    iconColor: "text-purple",
    iconBg: "bg-purple/10",
    title: "Histórico inteligente de contexto",
    description:
      "O agente lembra do que foi conversado. Sem repetição, sem 'pode repetir a pergunta?'.",
  },
  {
    icon: GitBranch,
    iconColor: "text-green",
    iconBg: "bg-green/10",
    title: "Multi-agente e multi-número",
    description:
      "Crie agentes diferentes para suporte, vendas e pós-venda — cada um com seu número e personalidade.",
  },
  {
    icon: Shield,
    iconColor: "text-purple",
    iconBg: "bg-purple/10",
    title: "Seus dados são seus",
    description:
      "Infraestrutura própria. Nenhum dado de conversa dos seus clientes passa por serviços de terceiros.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Features() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="features" className="bg-near-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-headline font-bold text-4xl lg:text-5xl text-white mb-4">
            Tudo que você precisa para atender melhor,{" "}
            <span className="gradient-text">sem trabalhar mais</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={prefersReduced ? {} : containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={prefersReduced ? {} : cardVariants}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-lg hover:shadow-green/10 group"
              >
                {feature.badge && (
                  <Badge variant={feature.badge.variant}>
                    {feature.badge.label}
                  </Badge>
                )}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${feature.iconBg}`}
                >
                  <Icon size={20} className={feature.iconColor} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-base text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
