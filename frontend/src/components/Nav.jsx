import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "./shared";
import { scrollToId } from "../lib/scroll";
import { WA_DEFAULT, IMAGES } from "../config";

const LINKS = [
    { label: "O Estúdio", href: "#estudio" },
    { label: "Oásis", href: "#oasis" },
    { label: "Planos", href: "#planos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Instagram", href: "#instagram" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (href) => {
        setOpen(false);
        scrollToId(href);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled ? "glass shadow-card" : "bg-transparent border-b border-transparent"
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
                <button
                    data-testid="nav-logo"
                    onClick={() => window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-3"
                >
                    <img
                        src={IMAGES.logo.src}
                        alt="Soul Pilattes"
                        className="h-16 w-16 rounded-full ring-1 ring-white/15 sm:h-20 sm:w-20"
                    />
                </button>

                <div className="hidden items-center gap-9 lg:flex">
                    {LINKS.map((l) => (
                        <button
                            key={l.href}
                            data-testid={`nav-link-${l.href.slice(1)}`}
                            onClick={() => go(l.href)}
                            className="text-sm font-light tracking-wide text-mist transition-colors duration-300 hover:text-paper"
                        >
                            {l.label}
                        </button>
                    ))}
                    <a
                        data-testid="nav-cta-whatsapp"
                        href={WA_DEFAULT}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-royal-light to-royal-deep px-5 py-2.5 text-sm font-medium text-paper shadow-glow transition-transform duration-300 hover:scale-[1.04]"
                    >
                        <WhatsAppIcon className="h-4 w-4" />
                        Agendar Aula
                    </a>
                </div>

                <button
                    data-testid="menu-toggle"
                    className="rounded-full border border-white/15 p-2.5 text-paper lg:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menu"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3 }}
                        className="glass mx-4 mb-4 rounded-3xl p-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-5">
                            {LINKS.map((l) => (
                                <button
                                    key={l.href}
                                    data-testid={`mobile-link-${l.href.slice(1)}`}
                                    onClick={() => go(l.href)}
                                    className="text-left font-serif text-2xl italic text-paper/90"
                                >
                                    {l.label}
                                </button>
                            ))}
                            <a
                                data-testid="mobile-cta-whatsapp"
                                href={WA_DEFAULT}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-royal-light to-royal-deep px-6 py-3.5 text-sm font-medium text-paper shadow-glow"
                            >
                                <WhatsAppIcon className="h-4 w-4" />
                                Agendar Aula Experimental
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
