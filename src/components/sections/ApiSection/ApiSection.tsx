import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import Kicker from "@/components/ui/Kicker";
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
        <span className="font-mono text-2xs text-mute-2">{label}</span>
        <span className={`font-mono text-2xs ${metaClass}`}>{meta}</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-xs-mono leading-[1.75] text-sub">
        {code}
      </pre>
    </div>
  );
}

export default function ApiSection() {
  return (
    <Section id="api" containerClassName="grid items-start gap-16 py-24 lg:grid-cols-[1fr_1.15fr]">
      <Reveal easing="ease" className="lg:sticky lg:top-[6.25rem]">
        <Kicker>PRA QUEM LÊ DOCS</Kicker>
        <h2 className="mb-5 text-display leading-[1.06] font-bold tracking-[-0.03em]">
          Uma transferência é um POST.
        </h2>
        <p className="mb-7 max-w-[42ch] text-body leading-[1.6] text-mute">
          Idempotência nativa, erros descritivos e resposta em menos de 200 ms no p95. O que você testa no
          sandbox é exatamente o que roda em produção.
        </p>
        <div className="grid gap-3">
          {bullets.map((b) => (
            <div key={b} className="flex items-baseline gap-3">
              <ChevronRight />
              <span className="text-body-sm text-sub">{b}</span>
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
    </Section>
  );
}
