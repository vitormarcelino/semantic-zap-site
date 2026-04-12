const items = [
  { icon: "⚡", text: "Setup em menos de 15 minutos" },
  { icon: "🔒", text: "API oficial do WhatsApp (Meta)" },
  { icon: "🤖", text: "Powered by GPT-4o" },
];

export default function CredibilityBar() {
  return (
    <section className="bg-navy border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-8 font-body font-medium text-sm text-text-muted"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
