const WORDS = ["Fluidez", "Equilíbrio", "Respiração", "Conexão", "Movimento", "Presença"];

const Row = ({ hidden }) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
        {WORDS.map((w) => (
            <span key={w} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-serif text-3xl italic text-paper/85 md:px-12 md:text-5xl">
                    {w}
                </span>
                <span className="h-2 w-2 rotate-45 bg-royal-light/70" />
            </span>
        ))}
    </div>
);

export default function Marquee() {
    return (
        <div className="relative overflow-hidden border-y border-white/10 bg-ink-deep/60 py-8 md:py-10" data-testid="marquee">
            <div className="animate-marquee flex w-max">
                <Row />
                <Row hidden />
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
        </div>
    );
}
