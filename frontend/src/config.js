export const STUDIO = {
    name: "Soul Pilattes",
    tagline: "O movimento que nasce na alma",
    whatsapp: "5511913282658",
    phoneLabel: "(11) 91328-2658",
    address: "Rua Agrolândia, nº 242 — Jardim Camargo Novo · São Paulo/SP",
    hours: ["Segunda a Sexta — 08h às 21h", "Sábado e Domingo — fechado"],
    instagram: "https://www.instagram.com/soulpilattes",
};

export const waLink = (message) =>
    `https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
    "Olá! Quero agendar uma aula experimental no Soul Pilattes.",
);

export const WA_PLAN = (plan) =>
    waLink(`Olá! Quero saber mais sobre o plano ${plan} do Soul Pilattes.`);

// Fotos reais do estúdio (pasta public/fotos) + artes da carpa véu.
// Para trocar qualquer imagem, substitua o arquivo em public/fotos/ ou o caminho aqui.
export const IMAGES = {
    logo: {
        src: "/logo.png",
        alt: "Logotipo Soul Pilattes",
    },
    hero: {
        src: "/fotos/hero-carpa-veu.jpg",
        alt: "Carpas véu azuis e brancas nadando em águas azul-profundo",
        file: "hero-carpa-veu.jpg",
    },
    recepcao: {
        src: "/fotos/recepcao.jpg",
        alt: "Recepção ampla e sofisticada com parede azul e balcão branco",
        file: "recepcao.jpg",
    },
    sala1: {
        src: "/fotos/estrutura.jpg",
        alt: "Sala principal de Pilates com aparelhos de madeira: Cadillac, Reformer, Chair e Barrel",
        file: "sala-principal.jpg",
    },
    sala2: {
        src: "/fotos/estrutura2.jpg",
        alt: "Área de treino com espelhos grandes, tatames e aparelhos de madeira",
        file: "area-de-treino.jpg",
    },
    oasis: {
        src: "/fotos/lago.jpg",
        alt: "Lago ornamental interno com carpas vivas, cascata, pedras naturais e parede verde viva",
        file: "lago-oasis.jpg",
    },
    lago2: {
        src: "/fotos/lago2.jpg",
        alt: "Carpas vivas nadando no lago ornamental interno do estúdio",
        file: "carpas-lago.jpg",
    },
    massagem: {
        src: "/fotos/terapias.jpg",
        alt: "Sala privativa de atendimento com maca profissional branca e ambiente relaxante",
        file: "sala-massagem.jpg",
    },
};
