import { motion } from "framer-motion";

/* Marca original — carpa véu em curva fluida */
export const KoiMark = ({ className = "w-9 h-9" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
        <defs>
            <linearGradient id="koi-g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#3B82F6" />
                <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
        </defs>
        <path
            d="M14 40 C22 24, 36 18, 50 12 C44 26, 40 32, 30 40 C24 44.5, 18 44.5, 14 40 Z"
            fill="url(#koi-g)"
        />
        <path
            d="M14 40 C19 46, 27 50, 36 52 C28 53.5, 20 52, 14 47 C12.5 44.8, 12.5 42.2, 14 40 Z"
            fill="url(#koi-g)"
            opacity="0.65"
        />
        <circle cx="45.5" cy="16.5" r="2.2" fill="#050B14" />
    </svg>
);

export const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
);

/* Etiqueta discreta indicando onde vai a foto real do estúdio */
export const PhotoChip = ({ file }) => (
    <span className="absolute bottom-4 left-4 z-10 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
        Sua foto aqui · {file}
    </span>
);

export const Eyebrow = ({ children }) => (
    <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-royal-glow">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-royal-light" />
        {children}
    </span>
);

export const Reveal = ({ children, delay = 0, className = "", y = 28 }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

/* Onda de transição entre seções */
export const Waves = ({ className = "pointer-events-none absolute inset-x-0 top-0 z-10 h-20 w-full text-ink" }) => (
    <svg className={className} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path
            fill="currentColor"
            d="M0,64 C240,110 480,10 720,40 C960,70 1200,110 1440,56 L1440,0 L0,0 Z"
        />
    </svg>
);
