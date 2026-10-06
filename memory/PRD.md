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

## Implementado (2026-10-06) — atualizado com dados e fotos reais
- Todas as 8 seções + marquee editorial + parallax no hero + reveal kinetic line-by-line + lenis
- Logotipo real do cliente (recorte circular em public/logo.png, também usado como favicon)
- Fotos reais: recepção, estrutura, lago e terapias (public/fotos/); hero com carpa véu azul/branca realista e área de treino com tatames geradas por IA
- Planos: 1x/2x/3x por semana × Mensal/Trimestral/Semestral/Anual + modalidades (Gestantes, Idosos, Reabilitação, Jovens)
- Dados reais: WhatsApp 5511913282658, Rua Agrolândia nº 242 — Jardim Camargo Novo/SP, Seg–Sex 08h–21h (sáb/dom fechado), Instagram @soulpilattes
- Depoimentos reais de alunos (Agosto, Junho e Maio de 2026)
- Seção Equipe: Karina Suzuki (Proprietária & Fisioterapeuta), Bheatriz e Julia (Fisioterapeutas & Instrutoras)
- Seção Lago Ornamental (#oasis, ex-"Oásis") com 2 fotos reais (lago + carpas); sala de Terapias Manuais com foto completa no estilo das fotos de estrutura
- Corrigido overflow horizontal no mobile (blobs com overflow-hidden nas seções Equipe/Planos); logotipo ampliado (nav 56px, selo hero 64px, rodapé 80px)
- Seção Instagram (#instagram): embed oficial ao vivo do perfil @soulpilattes (tokenless oEmbed + embed.js, com fallback elegante) + grade de 6 fotos reais do estúdio com link para o perfil
- Seção Convênios (#convenios): Totalpass (a partir do plano TP2) e Wellhub (a partir do plano Silver), com aviso de que o agendamento é feito diretamente pelo app do convênio; planos também mencionam os convênios
- Card "Pratica com a gente?" na seção Depoimentos com CTA "Avaliar no Google" (hoje abre o Google Maps com a busca do estúdio; trocar pelo link direto de avaliação do Google Business quando o cliente enviar)
- Rodapé com mapa interativo do Google Maps (iframe sem chave, pino na Rua Agrolândia 242) + botão "Como chegar" com rota de carro
- Logotipo ampliado novamente: nav 64–80px, selo hero 96px, rodapé 112px

## Deploy externo (Render)
- date-fns recuado de 4.1.0 para 3.6.0 para resolver o conflito ERESOLVE com react-day-picker 8.10.4 (peer: ^2.28.0 || ^3.0.0)
- Build de produção testado e aprovado (yarn build); pasta de publicação: frontend/build

## Pendências / Backlog
- P2: fotos reais da equipe Karina, Bheatriz e Julia (hoje: avatares com iniciais)
- P2: seção de professores com biografias; formulário de contato
