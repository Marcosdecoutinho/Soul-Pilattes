import { Star } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";

const QUOTES = [
    {
        text: "O único lugar onde a minha mente desacelera. A aula termina e eu me sinto completamente renovada.",
        name: "Mariana S.",
        since: "aluna há 2 anos",
    },
    {
        text: "O ambiente é impecável, mas o diferencial real é a atenção de cada professor. Meu corpo mudou — e minha postura diante da vida também.",
        name: "Carla M.",
        since: "aluna há 1 ano",
    },
    {
        text: "Chegar, ver as carpas no lago e respirar fundo já é terapia. O pilates vem como consequência.",
        name: "Patrícia L.",
        since: "aluna há 3 anos",
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
                        <Reveal key={q.name} delay={0.1 + i * 0.12} className={i === 1 ? "md:mt-10" : ""}>
                            <figure
                                data-testid={`testimonial-${i}`}
                                className="glass flex h-full flex-col rounded-3xl p-8 transition-colors duration-500 hover:border-royal-light/40"
                            >
                                <div className="flex gap-1" aria-label="5 estrelas">
                                    {Array.from({ length: 5 }).map((_, s) => (
                                        <Star key={s} className="h-4 w-4 fill-royal-glow text-royal-glow" />
                                    ))}
                                </div>
                                <blockquote className="mt-6 flex-1 font-serif text-lg italic leading-relaxed text-paper/90">
                                    “{q.text}”
                                </blockquote>
                                <figcaption className="mt-8 flex items-center gap-4">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-royal-light to-royal-deep font-serif text-sm text-paper">
                                        {q.name[0]}
                                    </span>
                                    <div>
                                        <p className="text-sm font-normal text-paper">{q.name}</p>
                                        <p className="text-xs font-light text-mist">{q.since}</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
