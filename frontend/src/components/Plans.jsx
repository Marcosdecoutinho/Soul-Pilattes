import { Check } from "lucide-react";
import { Reveal, Eyebrow, WhatsAppIcon } from "./shared";
import { WA_PLAN } from "../config";

const PLANS = [
    {
        id: "mensal",
        name: "Mensal",
        sub: "Para criar constância",
        items: [
            "Avaliação postural completa",
            "Aulas em aparelhos de madeira",
            "Acompanhamento personalizado",
        ],
        featured: false,
    },
    {
        id: "trimestral",
        name: "Trimestral",
        sub: "Para resultados profundos",
        items: [
            "Todos os benefícios do Mensal",
            "Prioridade nos melhores horários",
            "Reavaliação física a cada ciclo",
        ],
        featured: true,
    },
    {
        id: "gestantes",
        name: "Pilates para Gestantes",
        sub: "Cuidado em cada fase",
        items: [
            "Sessões adaptadas a cada trimestre",
            "Alívio de dores lombares e do quadril",
            "Preparação para o parto e recuperação",
        ],
        featured: false,
    },
    {
        id: "reabilitacao",
        name: "Reabilitação",
        sub: "Movimento seguro",
        items: [
            "Protocolos integrados à fisioterapia",
            "Progressão individual e segura",
            "Acompanhamento próximo da equipe",
        ],
        featured: false,
    },
];

export default function Plans() {
    return (
        <section id="planos" className="relative py-24 md:py-32" data-testid="section-planos">
            <div className="animate-drift-2 pointer-events-none absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-royal/10 blur-[130px]" />
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-xl">
                        <Reveal>
                            <Eyebrow>Nossos Planos & Modalidades</Eyebrow>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-6 font-serif text-4xl leading-tight text-paper md:text-5xl">
                                O plano certo para o seu <span className="italic text-metallic">momento de vida</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <p className="max-w-xs text-sm font-light leading-relaxed text-mist">
                            Valores e horários sob consulta — fale conosco pelo WhatsApp e monte sua
                            rotina.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {PLANS.map((p, i) => (
                        <Reveal key={p.id} delay={0.1 + i * 0.1} className="h-full">
                            <div
                                data-testid={`plan-card-${p.id}`}
                                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500 ${
                                    p.featured
                                        ? "glass border-royal-light/40 shadow-glow"
                                        : "glass hover:border-royal-light/40"
                                }`}
                            >
                                {p.featured && (
                                    <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-royal-light to-royal-deep px-4 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-paper shadow-glow">
                                        Mais escolhido
                                    </span>
                                )}
                                <h3 className="font-serif text-2xl text-paper">{p.name}</h3>
                                <p className="mt-1 text-xs font-light uppercase tracking-[0.2em] text-royal-glow">
                                    {p.sub}
                                </p>
                                <ul className="mt-7 flex-1 space-y-4">
                                    {p.items.map((it) => (
                                        <li key={it} className="flex items-start gap-3 text-sm font-light text-paper/85">
                                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal-light" />
                                            {it}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    data-testid={`plan-cta-${p.id}`}
                                    href={WA_PLAN(p.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 hover:scale-[1.03] ${
                                        p.featured
                                            ? "bg-gradient-to-br from-royal-light to-royal-deep text-paper shadow-glow"
                                            : "border border-white/20 text-paper/90 hover:border-royal-light"
                                    }`}
                                >
                                    <WhatsAppIcon className="h-4 w-4" />
                                    Consultar valores
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
