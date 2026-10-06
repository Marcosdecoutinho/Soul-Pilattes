# PRD — Soul Pilattes (Landing Page)

## Problema original
Criar uma Landing Page moderna, elegante e responsiva para o estúdio de pilates "Soul Pilattes", baseada na identidade visual (navy profundo + azul royal/elétrico metálico + branco/off-white) e no conceito da "carpa véu" (fluidez, formas orgânicas, ondulações). Objetivo principal: conversão para agendamento de aula experimental via WhatsApp.

## Arquitetura
- Frontend: React (CRA + craco) + Tailwind CSS + Framer Motion + Lenis (smooth scroll)
- Sem backend obrigatório para a landing (CTAs são links wa.me). Backend FastAPI/Mongo do template permanece intocado.
- Config centralizada em `frontend/src/config.js` (número WhatsApp, dados do rodapé, URLs das imagens).
- Logo original em SVG (marca carpa véu) + favicon `public/favicon.svg`.
- Fontes: Playfair Display (títulos) + Outfit (texto).

## Personas
- Visitante interessado em pilates ( conversão → WhatsApp )
- Gestante / pessoa em reabilitação procurando modalidade específica
- Dono do estúdio (troca fotos/número no config)

## Requisitos core
1. Hero com "O movimento que nasce na alma" + nome + CTA "Agendar Aula Experimental" ✔
2. Recepção e Boas-vindas (layout dividido, foto lilás/azul + balcão branco) ✔
3. O Estúdio (grid 2 fotos: sala principal c/ Cadillac/Reformer/Chair/Barrel; área de treino c/ espelhos/piso/acessórios) ✔
4. Nosso Oásis (lago ornamental, carpas, cascata, parede verde) ✔
5. Sala de Atendimento/Massoterapia ✔
6. Planos: Mensal, Trimestral, Gestantes, Reabilitação (sem preços; CTA consulta WhatsApp) ✔
7. Depoimentos (3 avaliações) ✔
8. Footer: endereço, horários, redes sociais + botão flutuante WhatsApp ✔

## Implementado (2026-10-06)
- Todas as 8 seções + marquee editorial + parallax no hero + reveal kinetic line-by-line + lenis
- 6 imagens ilustrativas geradas por IA (placeholders com chip "SUA FOTO AQUI")
- Menu mobile, testIDs em todos os interativos, prefers-reduced-motion respeitado

## Pendências / Backlog
- P0: substituir número WhatsApp placeholder (5511999999999) em src/config.js
- P0: trocar imagens ilustrativas pelas fotos reais (URLs em src/config.js)
- P1: atualizar endereço/horários/redes reais no config
- P1: depoimentos reais no lugar dos exemplos
- P2: seção de equipe/professores; galeria de horários; formulário de contato
