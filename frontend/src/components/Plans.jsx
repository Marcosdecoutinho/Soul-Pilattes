import { Check, Baby, HeartHandshake, Activity, Users } from "lucide-react";
import { Reveal, Eyebrow, WhatsAppIcon } from "./shared";
import { WA_PLAN } from "../config";

const DURATIONS = ["Mensal", "Trimestral", "Semestral", "Anual"];

const FREQUENCIES = [
    { id: "1x", name: "1x por semana", sub: "Para criar constância" },
    { id: "2x", name: "2x por semana", sub: "Para evoluir com ritmo" },
    { id: "3x", name: "3x por semana", sub: "Para uma transformação profunda" },
];

const MODALITIES = [
    { icon: Baby, name: "Pilates para Gestantes" },
    { icon: HeartHandshake, name: "Pilates para Idosos" },
    { icon: Activity, name: "Reabilitação no Pilates" },
    { icon: Users, name: "Pilates para Jovens" },
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
                                Frequência sob medida para a sua <span className="italic text-metallic">rotina</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <p className="max-w-xs text-sm font-light leading-relaxed text-mist">
                            Combine 1x, 2x ou 3x por semana com os planos Mensal, Trimestral, Semestral
                            ou Anual. Valores sob consulta no WhatsApp.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {FREQUENCIES.map((p, i) => (
                        <Reveal key={p.id} delay={0.1 + i * 0.1} className="h-full">
                            <div
                                data-testid={`plan-card-${p.id}`}
                                className="glass flex h-full flex-col rounded-3xl p-8 transition-all duration-500 hover:border-royal-light/40"
                            >
                                <h3 className="font-serif text-2xl text-paper">{p.name}</h3>
                                <p className="mt-1 text-xs font-light uppercase tracking-[0.2em] text-royal-glow">
                                    {p.sub}
                                </p>
                                <ul className="mt-7 flex-1 space-y-4">
                                    {DURATIONS.map((d) => (
                                        <li key={d} className="flex items-center gap-3 border-b border-white/5 pb-3 text-sm font-light text-paper/85 last:border-0">
                                            <Check className="h-4 w-4 shrink-0 text-royal-light" />
                                            Plano {d}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    data-testid={`plan-cta-${p.id}`}
                                    href={WA_PLAN(p.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-paper/90 transition-all duration-300 hover:scale-[1.03] hover:border-royal-light"
                                >
                                    <WhatsAppIcon className="h-4 w-4" />
                                    Consultar valores
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.15}>
                    <div className="mt-14">
                        <h3 className="text-center font-serif text-2xl italic text-paper/90 md:text-3xl">
                            Modalidades para <span className="text-metallic">todas as idades</span>
                        </h3>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {MODALITIES.map((m) => (
                                <div
                                    key={m.name}
                                    data-testid={`modality-${m.name.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="glass flex items-center gap-4 rounded-2xl px-6 py-5 transition-colors duration-500 hover:border-royal-light/40"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal-light to-royal-deep">
                                        <m.icon className="h-5 w-5 text-paper" />
                                    </span>
                                    <p className="text-sm font-normal text-paper/90">{m.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
