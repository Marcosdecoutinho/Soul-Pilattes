import { Reveal, Eyebrow, KoiMark } from "./shared";

const QUOTES = [
    {
        text: "Ambiente maravilhoso, aconchegante. Professora Karina excelente profissional. Nota 1000 😍🥰",
        date: "Agosto de 2026",
    },
    {
        text: "Ambiente maravilhoso! A ka é uma excelente profissional, instruí os alunos de forma paciente e totalmente cuidadosa, ensinando a respiração e tbm como executar cada exercício da forma correta. Ambiente totalmente diferente dos demais estúdios, com cuidado em cada detalhe. Super recomendo!!!",
        date: "Junho de 2026",
    },
    {
        text: "Local lindo e acolhedor. Karina fisioterapia é maravilhosa, super cuidadosa, excelente profissional. ♥",
        date: "Maio de 2026",
    },
];

export default function Testimonials() {
    return (
        <section id="depoimentos" className="relative py-24 md:py-32" data-testid="section-depoimentos">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="max-w-2xl">
                    <Reveal>
                        <Eyebrow>Depoimentos</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-6 font-serif text-4xl leading-tight text-paper md:text-5xl">
                            Quem pratica, <span className="italic text-metallic">sente a diferença</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {QUOTES.map((q, i) => (
                        <Reveal key={q.date} delay={0.1 + i * 0.12} className={i === 1 ? "md:mt-10" : ""}>
                            <figure
                                data-testid={`testimonial-${i}`}
                                className="glass flex h-full flex-col rounded-3xl p-8 transition-colors duration-500 hover:border-royal-light/40"
                            >
                                <KoiMark className="h-7 w-7 opacity-80" />
                                <blockquote className="mt-6 flex-1 font-serif text-lg italic leading-relaxed text-paper/90">
                                    “{q.text}”
                                </blockquote>
                                <figcaption className="mt-8 flex items-center gap-3">
                                    <span className="h-px w-8 bg-royal-light/60" />
                                    <p className="text-xs font-light uppercase tracking-[0.25em] text-mist">
                                        Avaliação de aluno · {q.date}
                                    </p>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
