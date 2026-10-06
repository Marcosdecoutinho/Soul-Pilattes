import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WhatsAppIcon } from "./shared";
import { IMAGES, WA_DEFAULT, STUDIO } from "../config";
import { scrollToId } from "../lib/scroll";

const LINES = [
    { text: "O movimento", cls: "" },
    { text: "que nasce", cls: "" },
    { text: "na alma.", cls: "italic text-metallic" },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};
const line = {
    hidden: { y: "115%" },
    show: { y: "0%", transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
    const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

    return (
        <section ref={ref} className="relative min-h-screen overflow-hidden" data-testid="hero">
            {/* fundo com parallax */}
            <motion.div style={{ y, scale }} className="absolute inset-0">
                <img
                    src={IMAGES.hero.src}
                    alt={IMAGES.hero.alt}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
            </motion.div>

            {/* brilhos orgânicos — carpa véu */}
            <div className="animate-drift pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-royal/20 blur-[120px]" />
            <div className="animate-drift-2 pointer-events-none absolute -right-24 bottom-1/4 h-[24rem] w-[24rem] rounded-full bg-royal-deep/25 blur-[110px]" />

            <motion.div
                style={{ opacity: fade }}
                className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 md:px-10"
            >
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="mb-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.4em] text-royal-glow"
                >
                    <span className="h-px w-10 bg-gradient-to-r from-transparent to-royal-light" />
                    Estúdio de Pilates e Terapias Manuais
                </motion.p>

                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl font-serif text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.98] text-paper"
                    data-testid="hero-headline"
                >
                    {LINES.map((l, i) => (
                        <span key={i} className="block overflow-hidden pb-1">
                            <motion.span variants={line} className={`block ${l.cls}`}>
                                {l.text}
                            </motion.span>
                        </span>
                    ))}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.15 }}
                    className="mt-8 flex items-center gap-4"
                >
                    <span className="h-px w-12 bg-royal-light/60" />
                    <p className="font-serif text-xl italic tracking-wide text-paper/90 md:text-2xl" data-testid="hero-studio-name">
                        {STUDIO.name}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.35 }}
                    className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                    <a
                        data-testid="hero-cta-whatsapp"
                        href={WA_DEFAULT}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-br from-royal-light to-royal-deep px-8 py-4 text-base font-medium text-paper shadow-glow transition-transform duration-300 hover:scale-[1.04]"
                    >
                        <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                        Agendar Aula Experimental
                    </a>
                    <button
                        data-testid="hero-secondary-explore"
                        onClick={() => scrollToId("#recepcao")}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-light text-paper/90 backdrop-blur-sm transition-colors duration-300 hover:border-royal-light hover:text-paper"
                    >
                        Conheça o espaço
                        <ArrowDown className="h-4 w-4" />
                    </button>
                </motion.div>
            </motion.div>

            {/* selo flutuante */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="glass animate-float-y absolute bottom-12 right-6 z-10 hidden max-w-[240px] rounded-3xl p-5 md:right-10 lg:block"
            >
                <div className="flex items-center gap-4">
                    <img
                        src={IMAGES.logo.src}
                        alt="Logotipo Soul Pilattes"
                        className="h-16 w-16 rounded-full ring-1 ring-white/15"
                    />
                    <div>
                        <p className="font-serif text-sm italic text-paper/90">
                            Movimento fluido, presença absoluta
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-mist">
                            Estúdio de Pilates e Terapias Manuais
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* indicação de scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-6 z-10 flex items-center gap-3 md:left-10"
            >
                <span className="h-10 w-px animate-pulse bg-gradient-to-b from-royal-light to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-mist">Role para descobrir</span>
            </motion.div>
        </section>
    );
}
