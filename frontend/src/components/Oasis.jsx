import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Eyebrow, Waves } from "./shared";
import { IMAGES } from "../config";

export default function Oasis() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section
            id="oasis"
            ref={ref}
            className="relative overflow-hidden py-24 md:py-36"
            data-testid="section-oasis"
        >
            <Waves className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 w-full text-ink" />
            {/* fundo */}
            <motion.div style={{ y }} className="absolute inset-0 scale-[1.16]">
                <img
                    src={IMAGES.oasis.src}
                    alt={IMAGES.oasis.alt}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/70" />
                <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
            </motion.div>

            <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-10">
                <Reveal className="max-w-xl">
                    <div className="glass rounded-[2.5rem] p-8 shadow-card md:p-12" data-testid="oasis-card">
                        <Eyebrow>Nosso Oásis · Diferencial Exclusivo</Eyebrow>
                        <h2 className="mt-6 font-serif text-3xl leading-tight text-paper md:text-5xl">
                            Um lago vivo dentro do estúdio
                        </h2>
                        <p className="mt-6 text-base font-light leading-relaxed text-paper/80 md:text-lg">
                            Carpas vivas nadando em águas calmas, uma cascata sobre pedras naturais e
                            uma parede verde ao fundo: o nosso lago ornamental interno transforma cada
                            aula em um ritual de{" "}
                            <span className="font-serif italic text-royal-glow">
                                relaxamento e conexão profunda
                            </span>
                            .
                        </p>
                        <p className="mt-4 text-sm font-light leading-relaxed text-paper/60">
                            O som suave da água acompanha a respiração — e o movimento nasce na alma.
                        </p>
                    </div>
                </Reveal>
            </div>

        </section>
    );
}
