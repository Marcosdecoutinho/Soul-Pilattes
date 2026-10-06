import { Reveal, Eyebrow } from "./shared";

const TEAM = [
    { name: "Karina Suzuki", role: "Proprietária & Fisioterapeuta" },
    { name: "Bheatriz", role: "Fisioterapeuta & Instrutora" },
    { name: "Julia", role: "Fisioterapeuta & Instrutora" },
];

export default function Team() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32" data-testid="section-equipe">
            <div className="animate-drift pointer-events-none absolute left-0 top-1/4 h-[24rem] w-[24rem] rounded-full bg-royal/10 blur-[130px]" />
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="max-w-2xl">
                    <Reveal>
                        <Eyebrow>Nossa Equipe</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-6 font-serif text-4xl leading-tight text-paper md:text-5xl">
                            Mãos que guiam o seu <span className="italic text-metallic">movimento</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-6 text-base font-light leading-relaxed text-mist md:text-lg">
                            Profissionais dedicadas ao seu progresso — atenção paciente, técnica e
                            cuidado em cada sessão.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-3">
                    {TEAM.map((t, i) => (
                        <Reveal key={t.name} delay={0.1 + i * 0.12}>
                            <div
                                data-testid={`team-card-${t.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="glass flex h-full flex-col items-center rounded-3xl p-10 text-center transition-colors duration-500 hover:border-royal-light/40"
                            >
                                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-royal-light to-royal-deep font-serif text-3xl italic text-paper shadow-glow">
                                    {t.name[0]}
                                </span>
                                <h3 className="mt-6 font-serif text-xl text-paper">{t.name}</h3>
                                <p className="mt-2 text-xs font-light uppercase tracking-[0.25em] text-royal-glow">
                                    {t.role}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
