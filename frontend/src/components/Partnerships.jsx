import { Smartphone } from "lucide-react";
import { Reveal, Eyebrow, WhatsAppIcon } from "./shared";
import { waLink } from "../config";

const WA_CONVENIO = waLink(
    "Olá! Tenho convênio Totalpass/Wellhub e quero saber mais sobre as aulas no Soul Pilattes.",
);

const PARTNERS = [
    {
        id: "totalpass",
        name: "Totalpass",
        minPlan: "A partir do plano TP2",
        text: "Alunos Totalpass com plano TP2 ou superior têm acesso às nossas aulas de Pilates.",
    },
    {
        id: "wellhub",
        name: "Wellhub",
        minPlan: "A partir do plano Silver",
        text: "Alunos Wellhub com plano Silver ou superior têm acesso às nossas aulas de Pilates e Terapias Manuais.",
    },
];

export default function Partnerships() {
    return (
        <section id="convenios" className="relative overflow-hidden py-24 md:py-32" data-testid="section-convenios">
            <div className="animate-drift pointer-events-none absolute -left-32 top-1/3 h-[24rem] w-[24rem] rounded-full bg-royal/10 blur-[130px]" />
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="max-w-2xl">
                    <Reveal>
                        <Eyebrow>Convênios & Parcerias</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-6 font-serif text-4xl leading-tight text-paper md:text-5xl">
                            Também atendemos <span className="italic text-metallic">Totalpass e Wellhub</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-6 text-base font-light leading-relaxed text-mist md:text-lg">
                            Se a sua empresa oferece benefício de bem-estar, suas aulas aqui podem
                            sair pelo convênio.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
                    {PARTNERS.map((p, i) => (
                        <Reveal key={p.id} delay={0.1 + i * 0.12} className="h-full">
                            <div
                                data-testid={`convenio-${p.id}`}
                                className="glass flex h-full flex-col rounded-3xl p-10 transition-all duration-500 hover:border-royal-light/40"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <h3 className="font-serif text-3xl text-paper">{p.name}</h3>
                                    <span className="rounded-full border border-royal-light/50 bg-royal/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-royal-glow">
                                        {p.minPlan}
                                    </span>
                                </div>
                                <p className="mt-5 flex-1 text-sm font-light leading-relaxed text-paper/80">
                                    {p.text}
                                </p>
                                <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-royal-light" />
                                    <p className="text-sm font-light leading-relaxed text-mist">
                                        O agendamento das aulas é feito diretamente pelo aplicativo da{" "}
                                        <span className="text-paper">{p.name}</span>.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.3}>
                    <div className="mt-10 flex justify-center">
                        <a
                            data-testid="convenios-cta-whatsapp"
                            href={WA_CONVENIO}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full border border-royal-light/50 px-8 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:scale-[1.03] hover:border-royal-light hover:bg-royal/15"
                        >
                            <WhatsAppIcon className="h-4 w-4" />
                            Dúvidas sobre convênio? Fale conosco
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
