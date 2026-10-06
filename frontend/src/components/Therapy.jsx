import { Reveal, Eyebrow, WhatsAppIcon } from "./shared";
import { IMAGES, WA_DEFAULT } from "../config";

export default function Therapy() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32" data-testid="section-terapia">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-12">
                <Reveal className="lg:col-span-5" delay={0.1}>
                    <div className="relative">
                        <div className="overflow-hidden rounded-[38%_62%_55%_45%/50%_45%_55%_50%] shadow-card">
                            <img
                                src={IMAGES.massagem.src}
                                alt={IMAGES.massagem.alt}
                                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />
                        </div>
                    </div>
                </Reveal>

                <div className="lg:col-span-7 lg:pl-8">
                    <Reveal>
                        <Eyebrow>Sala de Atendimento</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-6 font-serif text-4xl leading-tight text-paper md:text-5xl">
                            Massoterapia em um <span className="italic text-metallic">refúgio privativo</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-mist md:text-lg">
                            Uma sala pequena e aconchegante, com maca profissional branca e ambiente
                            relaxante, pensada para atender individualmente — o fechamento perfeito
                            para um corpo que trabalhou, se moveu e se soltou.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <a
                            data-testid="terapia-cta-whatsapp"
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 inline-flex items-center gap-3 rounded-full border border-royal-light/50 px-7 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:border-royal-light hover:bg-royal/15"
                        >
                            <WhatsAppIcon className="h-4 w-4" />
                            Agendar atendimento
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
