import { Instagram, MapPin, Clock, Navigation } from "lucide-react";
import { WhatsAppIcon, Reveal } from "./shared";
import { STUDIO, WA_DEFAULT, IMAGES } from "../config";
import { scrollToId } from "../lib/scroll";

export default function Footer() {
    return (
        <footer id="contato" className="relative border-t border-white/10 bg-ink-deep" data-testid="footer">
            <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
                <Reveal>
                    <div className="relative mb-14 overflow-hidden rounded-[2rem] shadow-card ring-1 ring-white/10">
                        <iframe
                            title="Mapa — Soul Pilattes, Rua Agrolândia 242, São Paulo"
                            src={STUDIO.mapsEmbed}
                            className="h-[320px] w-full border-0 md:h-[380px]"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                            data-testid="footer-map"
                        />
                        <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start justify-between gap-3 rounded-2xl border border-white/15 bg-ink/90 px-5 py-4 backdrop-blur-md sm:flex-row sm:items-center">
                            <p className="text-sm font-light text-paper/90">{STUDIO.address}</p>
                            <a
                                data-testid="footer-directions-cta"
                                href={STUDIO.directions}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-br from-royal-light to-royal-deep px-6 py-3 text-sm font-medium text-paper shadow-glow transition-transform duration-300 hover:scale-[1.04]"
                            >
                                <Navigation className="h-4 w-4" />
                                Como chegar
                            </a>
                        </div>
                    </div>
                </Reveal>

                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src={IMAGES.logo.src}
                                alt="Logotipo Soul Pilattes"
                                className="h-28 w-28 rounded-full"
                            />
                        </div>
                        <p className="mt-5 max-w-xs font-serif text-lg italic leading-relaxed text-paper/70">
                            “{STUDIO.tagline}”
                        </p>
                        <a
                            data-testid="footer-cta-whatsapp"
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-royal-light to-royal-deep px-6 py-3 text-sm font-medium text-paper shadow-glow transition-transform duration-300 hover:scale-[1.04]"
                        >
                            <WhatsAppIcon className="h-4 w-4" />
                            Agendar Aula Experimental
                        </a>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-royal-glow">Endereço</h3>
                        <div className="mt-6 flex items-start gap-3 text-sm font-light leading-relaxed text-mist">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-royal-light" />
                            <p data-testid="footer-address">{STUDIO.address}</p>
                        </div>
                        <a
                            data-testid="footer-phone-whatsapp"
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center gap-3 text-sm font-light text-mist transition-colors duration-300 hover:text-paper"
                        >
                            <WhatsAppIcon className="h-4 w-4 shrink-0 text-royal-light" />
                            {STUDIO.phoneLabel}
                        </a>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-royal-glow">Horários</h3>
                        <div className="mt-6 space-y-3">
                            {STUDIO.hours.map((h) => (
                                <div key={h} className="flex items-center gap-3 text-sm font-light text-mist">
                                    <Clock className="h-4 w-4 shrink-0 text-royal-light" />
                                    {h}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-royal-glow">Redes Sociais</h3>
                        <div className="mt-6 flex gap-3">
                            <a
                                data-testid="footer-social-instagram"
                                href={STUDIO.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram do Soul Pilattes"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper/80 transition-all duration-300 hover:border-royal-light hover:bg-royal/15"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                        </div>
                        <div className="mt-8 space-y-2">
                            {["#estudio", "#planos"].map((href, i) => (
                                <button
                                    key={href}
                                    data-testid={`footer-link-${i}`}
                                    onClick={() => scrollToId(href)}
                                    className="block text-sm font-light text-mist transition-colors duration-300 hover:text-paper"
                                >
                                    {i === 0 ? "Conheça o estúdio" : "Planos & modalidades"}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8">
                    <p className="text-xs font-light text-mist">
                        © {new Date().getFullYear()} {STUDIO.name}. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
