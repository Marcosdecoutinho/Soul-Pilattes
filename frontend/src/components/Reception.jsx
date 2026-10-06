import { Reveal, Eyebrow } from "./shared";
import { IMAGES } from "../config";

const POINTS = [
    {
        title: "Primeiro impacto que acolhe",
        text: "Recepção ampla, moderna e sofisticada — parede em tom lilás/azul e balcão branco para receber você com calma desde a chegada.",
    },
    {
        title: "Ambiente que convida a desacelerar",
        text: "Iluminação suave, silêncio e um ritmo próprio: o estúdio foi desenhado para você sair da correria e entrar no seu tempo.",
    },
];

export default function Reception() {
    return (
        <section id="recepcao" className="relative overflow-hidden py-24 md:py-32" data-testid="section-recepcao">
            <div className="animate-drift pointer-events-none absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-royal/10 blur-[120px]" />
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-5">
                    <Reveal>
                        <Eyebrow>Boas-vindas</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-6 font-serif text-4xl leading-tight text-paper md:text-5xl">
                            Um espaço pensado para você <span className="italic text-metallic">chegar e respirar</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-6 text-base font-light leading-relaxed text-mist md:text-lg">
                            No Soul Pilattes, cada detalhe foi cuidado para que a aula comece antes da
                            primeira respiração no aparelho: do balcão branco da recepção à luz que
                            atravessa a sala, tudo conduz ao equilíbrio.
                        </p>
                    </Reveal>
                    <div className="mt-10 space-y-8">
                        {POINTS.map((p, i) => (
                            <Reveal key={p.title} delay={0.25 + i * 0.12}>
                                <div className="flex gap-5">
                                    <span className="mt-1.5 font-serif text-2xl italic text-royal-glow">
                                        0{i + 1}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-normal text-paper">{p.title}</h3>
                                        <p className="mt-2 text-sm font-light leading-relaxed text-mist">
                                            {p.text}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal delay={0.15} className="lg:col-span-7">
                    <div className="relative">
                        <div className="overflow-hidden rounded-[2rem] rounded-tr-[7rem] shadow-card">
                            <img
                                src={IMAGES.recepcao.src}
                                alt={IMAGES.recepcao.alt}
                                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />
                        </div>
                        <div className="glass absolute -bottom-6 left-6 rounded-2xl px-6 py-4 md:-left-8">
                            <p className="font-serif text-lg italic text-paper/90">Recepção & Boas-vindas</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
