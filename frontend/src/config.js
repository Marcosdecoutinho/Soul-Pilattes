export const STUDIO = {
    name: "Soul Pilattes",
    tagline: "O movimento que nasce na alma",
    // TODO: substitua pelo número real (DDI + DDD + número, só dígitos)
    whatsapp: "5511999999999",
    phoneLabel: "(11) 99999-9999",
    // Dados de exemplo — substitua pelos reais
    address: "Rua das Acácias, 123 — Jardins · São Paulo/SP",
    hours: ["Seg a Sex — 6h às 20h", "Sábado — 8h às 12h"],
    email: "contato@soulpilattes.com.br",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
};

export const waLink = (message) =>
    `https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
    "Olá! Quero agendar uma aula experimental no Soul Pilattes.",
);

export const WA_PLAN = (plan) =>
    waLink(`Olá! Quero saber mais sobre o plano ${plan} do Soul Pilattes.`);

// Imagens ilustrativas geradas por IA — substitua pelas fotos reais do estúdio.
// Basta trocar o `src` de cada item.
export const IMAGES = {
    hero: {
        src: "https://static.prod-images.emergentagent.com/jobs/7e601dc8-6ad5-46c7-a082-78defdf45253/images/7d9d02362d10dbe047be0f710256693fde31b3c61d559edb77574c9b0b3b5193.jpeg",
        alt: "Carpa véu nadando em águas azul-profundo sob um véu de seda",
        file: "hero-carpa-veu.jpg",
    },
    recepcao: {
        src: "https://static.prod-images.emergentagent.com/jobs/7e601dc8-6ad5-46c7-a082-78defdf45253/images/df0e21a8c0d417191e9cecfb0342b8af4d720191d7d881ce4173f4dc5abc84ef.jpeg",
        alt: "Recepção ampla e sofisticada com parede em tom lilás/azul e balcão branco",
        file: "recepcao.jpg",
    },
    sala1: {
        src: "https://static.prod-images.emergentagent.com/jobs/7e601dc8-6ad5-46c7-a082-78defdf45253/images/40d21a36a6d647623f2c8ba301d7469ecc7edee5f235dcaf2df76cc0e332ce08.jpeg",
        alt: "Sala principal de Pilates com aparelhos de madeira: Cadillac, Reformer, Chair e Barrel",
        file: "sala-principal.jpg",
    },
    sala2: {
        src: "https://static.prod-images.emergentagent.com/jobs/7e601dc8-6ad5-46c7-a082-78defdf45253/images/fae6418bda17ab75f1623e2df7b25725e8f6c5c3fa880f7f7e3163d560515b8b.jpeg",
        alt: "Área de treino com espelhos grandes, piso emborrachado e acessórios",
        file: "area-de-treino.jpg",
    },
    oasis: {
        src: "https://static.prod-images.emergentagent.com/jobs/7e601dc8-6ad5-46c7-a082-78defdf45253/images/731a3a94d7d060deb80d3452549644a3e6306a8f259ddff2d8c9fa5a975a5b6f.jpeg",
        alt: "Lago ornamental interno com carpas vivas, cascata, pedras naturais e parede verde viva",
        file: "lago-oasis.jpg",
    },
    massagem: {
        src: "https://static.prod-images.emergentagent.com/jobs/7e601dc8-6ad5-46c7-a082-78defdf45253/images/893c488e067b0f534cbadfb3dae7c1a2fe9f9c0e3b9768c4a4e5d6e5dbb1c72e.jpeg",
        alt: "Sala privativa de atendimento com maca profissional branca e ambiente relaxante",
        file: "sala-massagem.jpg",
    },
};
