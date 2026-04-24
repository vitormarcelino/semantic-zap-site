interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, subtitle, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="bg-near-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <p className="font-body text-sm text-green mb-3 uppercase tracking-widest">Legal</p>
          <h1 className="font-headline font-bold text-4xl lg:text-5xl text-white mb-4">{title}</h1>
          <p className="font-body text-lg text-text-muted">{subtitle}</p>
          <p className="font-body text-sm text-text-muted/60 mt-4">
            Última atualização: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose-legal">{children}</div>
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-headline font-semibold text-xl text-white mb-4 pb-2 border-b border-white/10">
        {title}
      </h2>
      <div className="flex flex-col gap-3 font-body text-sm text-text-muted leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="font-headline font-semibold text-base text-white/90 mb-2">{title}</h3>
      <div className="flex flex-col gap-2 font-body text-sm text-text-muted leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 mt-1 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-text-muted leading-relaxed">
          <span className="text-green mt-0.5 shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-body text-sm text-text-muted leading-relaxed">
      {children}
    </div>
  );
}
