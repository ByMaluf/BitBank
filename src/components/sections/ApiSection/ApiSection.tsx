import Reveal from "@/components/ui/Reveal";
import { requestSnippet, responseSnippet } from "./content";

const bullets = [
  "Chaves separadas por ambiente",
  "Webhooks com retry exponencial e replay",
  "Logs de requisição por 90 dias no dashboard",
];

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5C542" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

function CodeCard({
  label,
  meta,
  metaClass,
  code,
}: {
  label: string;
  meta: string;
  metaClass: string;
  code: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-2 bg-ink-850">
      <div className="flex items-center justify-between border-b border-line bg-ink-800 px-4 py-2.5">
        <span className="font-mono text-[11px] text-mute-2">{label}</span>
        <span className={`font-mono text-[11px] ${metaClass}`}>{meta}</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.75] text-sub">
        {code}
      </pre>
    </div>
  );
}

export default function ApiSection() {
  return (
    <section id="api" className="border-b border-line">
      <div className="mx-auto grid max-w-[1200px] items-start gap-16 px-8 py-24 lg:grid-cols-[1fr_1.15fr]">
        <Reveal easing="ease" className="lg:sticky lg:top-[100px]">
          <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-gold">PRA QUEM LÊ DOCS</div>
          <h2 className="mb-5 text-[44px] leading-[1.06] font-bold tracking-[-0.03em]">
            Uma transferência é um POST.
          </h2>
          <p className="mb-7 max-w-[42ch] text-[17px] leading-[1.6] text-mute">
            Idempotência nativa, erros descritivos e resposta em menos de 200 ms no p95. O que você testa no
            sandbox é exatamente o que roda em produção.
          </p>
          <div className="grid gap-3">
            {bullets.map((b) => (
              <div key={b} className="flex items-baseline gap-3">
                <ChevronRight />
                <span className="text-[15px] text-sub">{b}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100} easing="ease" className="grid gap-4">
          <CodeCard
            label="requisição"
            meta="POST /v1/transfers"
            metaClass="text-gold"
            code={requestSnippet}
          />
          <CodeCard
            label="resposta"
            meta="201 Created · 138 ms"
            metaClass="text-term"
            code={responseSnippet}
          />
        </Reveal>
      </div>
    </section>
  );
}
