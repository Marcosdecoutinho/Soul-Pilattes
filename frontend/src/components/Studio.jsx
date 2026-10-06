import { Reveal, Eyebrow } from "./shared";
import { IMAGES } from "../config";

export default function Studio() {
    return (
        <section id="estudio" className="relative py-24 md:py-32" data-testid="section-estudio">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="max-w-2xl">
                    <Reveal>
                        <Eyebrow>O Estúdio</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-6 font-serif text-4xl leading-tight text-paper md:text-5xl">
                            Estrutura completa em <span className="italic text-metallic">aparelhos de madeira</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-6 text-base font-light leading-relaxed text-mist md:text-lg">
                            Sala principal ampla e iluminada, equipada com Cadillac, Reformer, Chair e
                            Barrel de madeira moderna — e uma área de treino com espelhos grandes,
                            tatames e todos os acessórios para uma prática completa.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-14 grid items-end gap-6 lg:grid-cols-12">
                    <Reveal className="lg:col-span-7" delay={0.1}>
                        <figure className="group relative">
                            <div className="overflow-hidden rounded-[2rem] shadow-card">
                                <img
                                    src={IMAGES.sala1.src}
                                    alt={IMAGES.sala1.alt}
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                            </div>
                            <figcaption className="glass absolute bottom-4 right-4 z-10 rounded-2xl px-5 py-3">
                                <p className="text-xs uppercase tracking-[0.25em] text-paper/80">
                                    Cadillac · Reformer · Chair · Barrel
                                </p>
                            </figcaption>
                        </figure>
                    </Reveal>

                    <Reveal className="lg:col-span-5" delay={0.22}>
                        <figure className="group relative">
                            <div className="overflow-hidden rounded-[2rem] rounded-bl-[7rem] shadow-card">
                                <img
                                    src={IMAGES.sala2.src}
                                    alt={IMAGES.sala2.alt}
                                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:aspect-[4/4.2]"
                                />
                            </div>
                            <figcaption className="glass absolute bottom-4 right-4 z-10 rounded-2xl px-5 py-3">
                                <p className="text-xs uppercase tracking-[0.25em] text-paper/80">
                                    Espelhos · Tatames · Acessórios
                                </p>
                            </figcaption>
                        </figure>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
