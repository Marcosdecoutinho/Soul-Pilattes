import { useEffect, useRef, useState } from "react";
import { Instagram, ExternalLink } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { STUDIO, IMAGES } from "../config";

const FEED = [
    { img: IMAGES.sala1, label: "Treino em aparelhos" },
    { img: IMAGES.oasis, label: "Nosso lago ornamental" },
    { img: IMAGES.recepcao, label: "Recepção do estúdio" },
    { img: IMAGES.lago2, label: "Nossas carpas vivas" },
    { img: IMAGES.sala2, label: "Área de treino" },
    { img: IMAGES.massagem, label: "Terapias Manuais" },
];

export default function InstagramFeed() {
    const embedRef = useRef(null);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const process = () => window.instgrm?.Embeds?.process();
        const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
        if (existing) {
            process();
            return;
        }
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = process;
        script.onerror = () => setFailed(true);
        document.body.appendChild(script);
        const timeout = setTimeout(() => {
            if (!embedRef.current?.querySelector("iframe")) setFailed(true);
        }, 6000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="instagram" className="relative overflow-hidden py-24 md:py-32" data-testid="section-instagram">
            <div className="animate-drift pointer-events-none absolute -right-32 top-0 h-[24rem] w-[24rem] rounded-full bg-royal/10 blur-[130px]" />
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="grid items-start gap-14 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <Eyebrow>Siga a gente</Eyebrow>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-6 font-serif text-4xl leading-tight text-paper md:text-5xl">
                                O dia a dia no <span className="italic text-metallic">Instagram</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="mt-6 text-base font-light leading-relaxed text-mist md:text-lg">
                                Bastidores, exercícios, as carpas do nosso lago e a energia das aulas —
                                tudo no perfil oficial do estúdio.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <a
                                data-testid="instagram-follow-cta"
                                href={STUDIO.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-royal-light to-royal-deep px-8 py-4 text-base font-medium text-paper shadow-glow transition-transform duration-300 hover:scale-[1.04]"
                            >
                                <Instagram className="h-5 w-5" />
                                Seguir @soulpilattes
                            </a>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div
                                ref={embedRef}
                                className="glass mt-10 max-w-sm overflow-hidden rounded-3xl p-5"
                                data-testid="instagram-embed-card"
                            >
                                {failed ? (
                                    <div className="flex flex-col items-center gap-4 py-8 text-center">
                                        <Instagram className="h-8 w-8 text-royal-light" />
                                        <p className="text-sm font-light text-mist">
                                            O Instagram não carregou aqui — veja tudo no perfil oficial:
                                        </p>
                                        <a
                                            data-testid="instagram-fallback-link"
                                            href={STUDIO.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-royal-light/50 px-6 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:border-royal-light"
                                        >
                                            Abrir @soulpilattes
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </div>
                                ) : (
                                    <blockquote
                                        className="instagram-media w-full"
                                        data-instgrm-permalink="https://www.instagram.com/soulpilattes/"
                                        data-instgrm-version="14"
                                    >
                                        <a href="https://www.instagram.com/soulpilattes/">@soulpilattes</a>
                                    </blockquote>
                                )}
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {FEED.map((f, i) => (
                                <Reveal key={f.label} delay={0.1 + i * 0.08}>
                                    <a
                                        data-testid={`instagram-tile-${i}`}
                                        href={STUDIO.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative block overflow-hidden rounded-2xl"
                                    >
                                        <img
                                            src={f.img.src}
                                            alt={f.img.alt}
                                            className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <Instagram className="h-6 w-6 text-paper" />
                                            <span className="px-3 text-center text-xs font-light text-paper/90">
                                                {f.label}
                                            </span>
                                        </div>
                                    </a>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
