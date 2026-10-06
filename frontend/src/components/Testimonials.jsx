import { Star } from "lucide-react";
import { Reveal, Eyebrow, KoiMark } from "./shared";
import { STUDIO } from "../config";

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

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
        <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
);

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

                <Reveal delay={0.3}>
                    <div
                        className="glass mt-14 flex flex-col items-center gap-8 rounded-3xl p-10 text-center md:flex-row md:justify-between md:text-left"
                        data-testid="google-review-card"
                    >
                        <div className="flex flex-col items-center gap-5 md:flex-row">
                            <span className="glass flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl">
                                <GoogleIcon />
                            </span>
                            <div>
                                <h3 className="font-serif text-2xl text-paper">Pratica com a gente?</h3>
                                <p className="mt-1 max-w-md text-sm font-light leading-relaxed text-mist">
                                    Sua avaliação no Google ajuda outras pessoas a descobrirem o Soul
                                    Pilattes — leva menos de um minuto.
                                </p>
                            </div>
                        </div>
                        <a
                            data-testid="google-review-cta"
                            href={STUDIO.googleReview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-br from-royal-light to-royal-deep px-8 py-4 text-base font-medium text-paper shadow-glow transition-transform duration-300 hover:scale-[1.04]"
                        >
                            <Star className="h-5 w-5 fill-paper text-paper" />
                            Avaliar no Google
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
