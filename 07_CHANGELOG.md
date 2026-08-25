# 07 — Changelog

## 1. Objetivo

Este documento registra alterações relevantes realizadas no website da Voitechrj e em sua estrutura de documentação.

O changelog existe para manter um histórico simples e rastreável da evolução do projeto, facilitando a compreensão do que foi alterado, quando e por qual motivo.

---

## 2. Critérios de registro

Devem ser registradas principalmente:

- alterações estruturais no website;
- mudanças relevantes de conteúdo;
- decisões que afetem funcionalidades existentes;
- mudanças de identidade visual;
- correções relevantes de erros;
- alterações de arquitetura ou tecnologia;
- criação ou reorganização importante da documentação;
- mudanças que possam afetar manutenção, desempenho, SEO, acessibilidade ou conversão.

Alterações pequenas e internas, sem impacto relevante no projeto, podem ser omitidas.

---

## 3. Formato

As entradas devem seguir, sempre que possível, este formato:

```text
## AAAA-MM-DD — Título da alteração

### Alterado
- Item alterado.

### Motivo
- Motivo da alteração.

### Impacto
- Impacto esperado ou observado.
```

O registro deve ser objetivo e descrever o estado real do projeto. Não registrar como concluída uma alteração que ainda não foi validada.

---

## 4. Histórico

### 2026-08-25 — Acordeão Retrátil no Rodapé Mobile e Ajuste de Ícones de Contato

#### Alterado
- **Rodapé Mobile (`.site-footer`)**:
  - Implementado sistema de acordeão retrátil para as seções **Navegação**, **Serviços** e **Atendimento** no mobile (`@media (max-width: 767px)`), permitindo expandir e recolher cada bloco com toque, ícone indicador chevron animado e transição suave.
  - A 4ª coluna com a marca **voitechrj**, descrição e botões de redes sociais (Instagram e Facebook) permanece sempre visível e centralizada abaixo dos acordeões.
  - Corrigido o alinhamento do ícone de mapa (`map-pin`): agora agrupado diretamente ao lado de "Niterói, RJ" via classe `.contact-link-row`, eliminando o distanciamento indesejado no mobile.
  - No desktop (`min-width: 768px`), o layout permanece em 4 colunas estáticas abertas sem alteração visual.

#### Motivo
- Atendimento à solicitação visual para tornar o rodapé móvel mais compacto, organizado e interativo no modelo de acordeão retrátil, corrigindo o espaçamento do ícone de localização.

#### Impacto
- Navegação mobile muito mais enxuta, ergonômica e com acabamento de alto padrão.

### 2026-08-24 — Alinhamento à esquerda da seção Hero no Mobile

#### Alterado
- **Hero (`.hero-text-banner`, `.hero-desc`, `.hero-banner-actions`)**:
  - Ajustado o comportamento responsivo para telas móveis e tablets (`max-width: 991px`), alinhando o título ("Manutenção de informática com clareza e confiança"), subtítulo/tagline, texto descritivo e botão CTA à esquerda (`text-align: left`, `align-items: flex-start`, `justify-content: flex-start`), padronizando o alinhamento com a identidade do desktop e do rodapé.

#### Motivo
- Atendimento à solicitação visual para manter a leitura do bloco hero alinhada à esquerda em dispositivos móveis.

#### Impacto
- Leitura mais confortável e coerente na visualização mobile.

### 2026-08-24 — Alinhamento de Políticas de Privacidade, Termos de Serviço e FAQ

#### Alterado
- **Termos de Serviço (`#terms-modal`)**:
  - Eliminada a menção ao valor fixo de R$ 50,00 para taxa de diagnóstico, alinhando a redação à diretriz operacional e à FAQ (diagnóstico inicial sem custo como regra, informando previamente caso haja necessidade de análise técnica aprofundada).
  - Incluída cláusula explícita sobre **Peças e Componentes**, estabelecendo que a Voitechrj não comercializa peças físicas (orienta o cliente na compra) e que a garantia da Voitechrj cobre estritamente a mão de obra/instalação.
  - Detalhado o escopo de garantia do serviço técnico (eliminando a promessa de prazo fixo de 7 dias em Diferenciais, FAQ e Termos, conforme diretriz de validação operacional), condições de devolução de equipamento caso haja necessidade de desmontagem e regras de pagamento antes da retirada.
- **Política de Privacidade (`#privacy-modal`)**:
  - Reestruturação completa em tópicos objetivos em conformidade com as diretrizes da LGPD para websites estáticos.
  - Esclarecido que o website não possui banco de dados nem armazena informações dos formulários (utilizados unicamente para compor a mensagem no WhatsApp do próprio usuário).
  - Informada a ausência de cookies de rastreamento invasivo e fornecido o e-mail de contato oficial (`voitechrj@gmail.com`).
- **Dúvidas Frequentes (FAQ & Acessibilidade)**:
  - Refinada a primeira resposta da FAQ para abranger montagem de setups gamer/workstation do zero e consultoria de peças.
  - Adicionados atributos ARIA nos acordeões (`aria-expanded` dinâmico e `aria-controls` vinculado aos IDs de resposta) e estrutura acessível para diálogos nos modais legais (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`).

#### Motivo
- Corrigir inconsistências de valores e termos comerciais entre os modais, a FAQ e a documentação do projeto, garantindo 100% de segurança jurídica, clareza operacional e acessibilidade.

#### Impacto
- Total coerência entre todas as seções e documentos legais antes do commit e publicação.
- Experiência transparente, confiável e acessível para todos os visitantes.

### 2026-08-24 — Redesign do Rodapé (Dark Technical & Minimalist Elegance)

#### Alterado
- Implementada nova estrutura e estilos para o rodapé (`.site-footer`), organizado em 4 colunas balanceadas de larguras simétricas (`repeat(4, 1fr)`) e barra inferior:
  - **Coluna 1 (Navegação)**: Links rápidos para todas as seções com rolagem suave (`data-scroll`), em estilo neutro e limpo.
  - **Coluna 2 (Serviços)**: Links diretos para as especialidades (Formatação, Limpeza Térmica, Upgrades, Montagem, Revisão).
  - **Coluna 3 (Atendimento)**: Telefone/WhatsApp, e-mail, endereço com lembrete de agendamento prévio e badge técnico monocromático (preto e branco) no mesmo padrão refinado dos botões de redes sociais.
  - **Coluna 4 (Marca & Redes)**: Logo oficial com avatar sutil, nome institucional, descrição clara dos serviços em Niterói/RJ e botões estilizados para Instagram e Facebook.
  - **Barra Inferior**: Copyright 2026 com contraste mais nítido e claro, e botões interativos para abertura dos modais de Política de Privacidade e Termos de Serviço.
- Ajustada a centralização horizontal do contêiner (`max-width: 1200px; margin: 0 auto;`) com alinhamento rigorosamente à esquerda para todos os textos, títulos e blocos internos.
- Ajuste mobile exclusivo: contêiner compacto de `max-width: 280px` centralizado na tela, mantendo os títulos das seções (`.footer-title` e marca) alinhados à esquerda e todos os textos, links, itens de contato, botões e copyright centralizados. O layout desktop permaneceu 100% inalterado.
- Adicionadas regras de CSS responsivo com grid adaptativo e micro-interações refinadas de hover.

#### Motivo
- Conferir ao rodapé um fechamento visual profissional, elegante, discreto e funcional, 100% alinhado com a identidade visual e os blocos da página.

#### Impacto
- Maior percepção de confiança e acabamento técnico de alto padrão.
- Facilidade de contato rápido e navegação clara em qualquer dispositivo.

### 2026-08-24 — Conversão da seção "Dúvidas Frequentes" em Modal Interativo

#### Alterado
- A seção estática de FAQ (`#faq`) foi removida do fluxo linear da landing page.
- Criado o modal `#faq-modal` (`.modal-faq`) com design Dark Premium, cabeçalho limpo, botão de fechar, scroll interno responsivo e acordeão interativo para as perguntas frequentes.
- Largura do modal ajustada para `max-width: min(1000px, 94vw)`, alinhada ao sistema de grid de 1200px da página.
- Atualizados os botões de navegação no menu desktop, menu mobile e links rápidos do rodapé para acionar a abertura do modal (`data-modal="faq"`).
- O menu mobile se fecha automaticamente ao abrir o modal de dúvidas.
- Fechamento do modal suportado por botão `×`, clique no backdrop ou tecla `Esc`.

#### Motivo
- Tornar a landing page mais enxuta e focada em conversão, serviços e avaliações reais, oferecendo o FAQ sob demanda sem perder a posição de rolagem do usuário.

#### Impacto
- Experiência de navegação mais ágil e moderna.
- Redução da extensão vertical da página principal.

#### Alterado
- Criado o `07_CHANGELOG.md`.
- Estabelecido o padrão para registro das alterações relevantes do projeto.

#### Motivo
- Criar um histórico oficial e simples da evolução do website e de sua documentação.

#### Impacto
- A documentação do projeto passa a contar com um local específico para acompanhar alterações relevantes.

### 2026-08-20 — Alinhamento operacional e de conteúdo

#### Alterado
- Ajustado o formulário de agendamento para funcionar como solicitação inicial de atendimento.
- Formulário atualizado para coletar nome, sobrenome, equipamento, descrição do problema e quando começou, quando informado.
- Fluxo do formulário direcionado ao WhatsApp sem confirmação automática de horário ou execução do serviço.
- FAQ alinhada às regras atuais de prazo, pagamento, garantia, diagnóstico, atendimento presencial, remoto e peças.
- Removidas afirmações comerciais incompatíveis com a operação atual.
- Depoimentos fictícios deixaram de ser apresentados como avaliações reais.
- Contexto do projeto atualizado para refletir o fluxo atual.
- Descrição do atendimento remoto corrigida, removendo a referência a clientes já conhecidos.
- O valor específico da taxa de diagnóstico deixou de ser tratado como informação pública do site; eventual taxa deve ser informada previamente ao cliente quando aplicável.

#### Motivo
- Garantir que o conteúdo público do website represente a operação real da Voitechrj sem expor regras internas desnecessariamente.

#### Impacto
- Maior coerência entre site e operação.
- Fluxo de primeiro contato mais claro.
- Regras comerciais internas ficam separadas do conteúdo público.

### 2026-08-20 — Redesign inicial do Header

#### Alterado
- Header reorganizado visualmente para uma apresentação mais discreta e técnica.
- Navegação principal passou de botões controlados por JavaScript para links semânticos com âncoras.
- `Solicitar atendimento` mantido como principal ação do Header, com destaque visual moderado.
- Menu mobile preservado e ajustado para continuar funcionando com a nova navegação.
- Estados de foco e atributos de acessibilidade adicionados ao menu.
- Criado `header.css` para concentrar o tratamento visual específico desta etapa do redesign.

#### Motivo
- Os itens `Diferenciais`, `Solicitar atendimento`, `Depoimentos` e `Dúvidas frequentes` são destinos internos da mesma página, portanto links são semanticamente mais adequados que botões.
- Iniciar o redesign pelo Header conforme a ordem definida no documento de identidade visual.

#### Impacto
- Navegação mais coerente semanticamente.
- Header mais próximo da direção visual definida.
- Funcionalidades existentes de navegação suave e menu mobile preservadas.

### 2026-08-20 — Padronização de largura dos containers

#### Alterado
- Container principal padronizado para `max-width: 1200px`.
- Header, conteúdo das seções e Footer passam a utilizar o mesmo limite quando baseados na classe `.container`.
- Espaçamento lateral foi preservado para manter a responsividade em telas menores.

#### Motivo
- Criar uma largura estrutural consistente para o redesign e melhorar o aproveitamento de espaço em telas desktop.

#### Impacto
- Maior consistência horizontal entre Header, seções e Footer.
- Mantida a responsividade do layout.

### 2026-08-20 — Ajuste final da navegação do Header

#### Alterado
- Menu hambúrguer ocultado em telas desktop e mantido somente no mobile.
- Links da navegação desktop alinhados à direita dentro do container de 1200px.
- `Solicitar atendimento` definido como último item da navegação e mantido como CTA destacado.
- Ordem visual da navegação corrigida para evitar que o CTA apareça entre os demais links.

#### Motivo
- Corrigir a organização visual identificada durante a validação do Header.

#### Impacto
- Header desktop com navegação convencional, alinhada à direita.
- CTA claramente posicionado como última ação.
- Menu mobile preservado para telas pequenas.

### 2026-08-21 — Criação da Seção de Serviços e Reordenação em Cascata

#### Alterado
- Criada a seção dedicada `Nossos Serviços` (`#services`) com grid responsivo para os 4 serviços principais (Instalação de SSD, Limpeza Completa, Troca de Pasta Térmica, Formatação).
- Reorganizada a ordem física das seções no `index.html` em cascata contínua: Início (`#hero`) → Serviços (`#services`) → Diferenciais (`#features`) → Avaliações (`#social-proof`) → Benefícios (`.benefits`) → Dúvidas (`#faq`) → Solicitar Atendimento (`#booking`).
- Atualizados os links de navegação no desktop, mobile e rodapé para incluir `Início` e `Serviços`, encurtar `Dúvidas` e padronizar `Avaliações`.
- Removidas regras de `order` manual no `header.css`, garantindo ordem estritamente semântica e natural.
- Ajustado o layout centralizado do Hero e o grid responsivo de Serviços no `style.css`.

#### Motivo
- Eliminar o efeito de saltos para cima e para baixo ao clicar nos links do menu, estabelecendo uma ordem de rolagem natural e lógica para o visitante.
- Dar visibilidade imediata aos serviços prestados pela Voitechrj na navegação.

#### Impacto
- Navegação desktop e mobile 100% em cascata progressiva do topo ao rodapé.
- Hero mais focado na chamada de conversão e serviços organizados em seção própria.

### 2026-08-21 — Padronização de Alturas, Hero em 85vh (Scroll Cue) e Paddings Responsivos

#### Alterado
- Container geral atualizado com `max-width: 1200px` e padding lateral responsivo (`1.5rem` no desktop e `1rem` no mobile).
- Cabeçalho estruturado com largura total (`100%`) no fundo e conteúdo centralizado e alinhado aos `1200px`.
- Seção Hero configurada para 85vh no Desktop (`min-height: calc(85vh - 4.5rem)` com respiro de `4.5rem 0`), reservando ~15% da altura da tela para exibir a borda inicial da seção de Serviços e induzir a rolagem.
- Seção Hero adaptada no mobile para altura fluida (`min-height: auto; padding: 4rem 0 5rem 0`).
- Padronizados os espaçamentos verticais de todas as seções subsequentes (`Serviços`, `Diferenciais`, `Avaliações`, `Agendamento` e `FAQ` com `5rem 0` desktop / `3.5rem 0` mobile; `Benefícios` com `6rem 0` desktop / `4rem 0` mobile; `Footer` com `4rem 0 2rem 0` desktop / `3rem 0 1.5rem 0` mobile).

#### Motivo
- Permitir que o visitante veja imediatamente o início da seção de Serviços no rodapé da primeira tela (*scroll cue* de 15%), incentivando a exploração contínua do site.

#### Impacto
### 2026-08-21 — Hero em 2 Colunas e Catálogo de 8 Serviços com Fotos Reais

#### Alterado
- Seção Hero reestruturada em **duas colunas no desktop** (layout 50/50):
  - Coluna da esquerda com badge de autoridade ("Atendimento Especializado • RJ e Niterói"), título e descrição alinhados à esquerda e botões de ação (CTA principal + Avaliações).
  - Coluna da direita com card de hardware de alta qualidade (foto real de montagem de PC Gamer com badge flutuante em *glassmorphism*).
- Seção `Nossos Serviços` expandida para **8 serviços completos** organizados em grid responsivo (4x2 no desktop, 2 colunas em tablets, 1 coluna no mobile):
  1. *Montagem e Cable Management* (incluindo consultoria e montagem do zero)
  2. *Limpeza + Pasta Térmica*
  3. *Formatação Completa*
  4. *Limpeza de Hardware [Notebook]*
  5. *Limpeza de Hardware [Desktop]*
  6. *Reparo de Sistema*
  7. *Instalação de SSD c/ S.O.*
  8. *Backup de Arquivos* (serviço explícito e dedicado)
- Substituídas todas as imagens genéricas de banco de imagens pelas **fotos reais e autorais dos serviços da Voitechrj**.
- Preços omitidos no website para direcionar orçamentos personalizados via WhatsApp.

#### Motivo
- Melhorar a escaneabilidade, estética e modernidade da Hero com layout dividido.
- Espelhar o catálogo autêntico de serviços do WhatsApp, gerando máxima autoridade e credibilidade com fotos reais.

### 2026-08-21 — Hero Bento Dark Glass com Vitrine de Miniaturas Verticais

#### Alterado
- Seção Hero finalizada com moldura unificada em **Bento Dark Glass** (`.bento-hero-frame`), integrando a coluna de texto/CTA e a galeria sob um fundo sofisticado de estúdio com iluminação radial suave em azul da marca (`#034694`) e vidro fosco (*glassmorphism*).
- Galeria interativa estruturada em **Vitrine com Miniaturas Verticais** à direita da foto principal:
  - Foto principal com proporção vertical perfeita, legenda técnica superior compacta e botão de expansão em tela cheia (Lightbox).
  - Marca d'água autoral `@VOITECHRJ` preservada com 100% de visibilidade e nitidez, sem sobreposição de tarjas escuras inferiores.
  - Coluna lateral de miniaturas fotográficas com destaque luminoso na foto ativa e transição suave ao clique.
- Tagline "Atendimento especializado em Niterói." padronizada na cor `#f8f8f8`.
- Botão "Voltar ao Topo" aprimorado com alto contraste (azul da marca + borda `#3b82f6` + SVG nativo), z-index 999 e detecção universal de rolagem.
- Otimização do botão "Início" e do logotipo para rolagem suave ao topo absoluto (`top: 0`).

#### Motivo
- Atender à preferência do cliente pelo formato de miniaturas verticais da Opção 3 combinado à sofisticação da moldura Bento Glass.
- Destacar e valorizar as fotos autorais e a assinatura `@VOITECHRJ`.

### 2026-08-24 — Atualização Tipográfica para a Família Roboto e Refinamento do Rodapé

#### Alterado
- Substituídas as famílias `Montserrat` e `Open Sans` pela família **`Roboto`** (pesos 300, 400, 500, 700, 900) para todo o corpo e títulos, e **`Roboto Mono`** (pesos 400, 500, 600) para detalhes e tags técnicas.
- Títulos de seções e display ajustados com `letter-spacing: -0.02em` para melhor densidade e leitura em tema escuro.
- Hierarquia semântica de cabeçalhos refinada:
  - Marca `voitechrj` no rodapé e no rodapé de avaliações ajustada para `span` estilizado com classe de display, evitando cabeçalhos dispersos.
  - Títulos de colunas do rodapé (*Entre em Contato* e *Links Rápidos*) promovidos a `<h3>` semânticos.
- Documento `04_IDENTIDADE_VISUAL.md` atualizado na seção de tipografia.

#### Motivo
- Conferir uma linguagem visual mais técnica, direta e enxuta, alinhada à proposta de suporte e manutenção de informática da Voitechrj.
- Garantir uma árvore de headings (`h1` a `h3`) 100% limpa, acessível e otimizada para SEO.

### 2026-08-24 — Ajuste Isolado dos Botões do Hero (Espelhados no Menu)

#### Alterado
- **Restauração Global:** Restauradas as variáveis globais `:root` (`--color-primary: #034694`, etc.) e estilos globais das demais seções da página.
- **Botão Principal do Hero (`Solicitar atendimento` / `.btn-hero-main`):**
  - Espelha exatamente o visual do botão do Menu (`.nav-cta`): cor `#345a87` (hover `#3d6899`), cantos arredondados em `0.45rem`, padding `0.6rem 1rem`, `font-size: 0.92rem` e `font-weight: 500`.
- **Botões Secundários do Hero (`Ver Avaliações` e `Avaliar` / `.btn-secondary`):**
  - Ajustados com o mesmo arredondamento de `0.45rem`, padding proporcional (`0.6rem 0.85rem`), `font-size: 0.875rem` e hover que destaca a borda no azul `#345a87`.

#### Motivo
- Atender ao pedido de replicar o visual exato do botão do Menu exclusivamente para as ações do Hero, mantendo o restante da página com suas configurações originais.

### 2026-08-24 — Redesenho da Seção de Serviços (Grid 2x2 com Carrossel Automático de 5s)

#### Alterado
- **Layout Clean dos Cards de Serviços:** Substituído o padrão antigo (texto sobreposto com gradiente escuro na imagem) por estrutura com imagem ampla em destaque no topo do card e bloco de informações logo abaixo (título em destaque, descrição de alta legibilidade e link de solicitação com rolagem suave).
- **Grid 2x2 Espaçoso:** Serviços organizados em 4 itens por página (2 colunas x 2 linhas no desktop), proporcionando maior destaque visual a cada serviço.
- **Carrossel Automático de 5s:** Sistema de alternância suave entre Página 1 (serviços 1 a 4) e Página 2 (serviços 5 a 8) a cada 5 segundos, com pausa automática no hover e controles interativos (dots numéricos e botões anterior/próximo).
- **Responsividade:** Layout adaptável para 1 coluna fluida em telas mobile.

### 2026-08-24 — Layout Horizontal 2x2 Ocupando a Largura Total (1200px)

#### Alterado
- **Aproveitamento Total da Largura (1200px):** Removida a limitação estreita centralizada; o grid 2x2 agora ocupa harmoniosamente toda a largura do container (`max-width: 1200px`).
- **Cards Horizontais (Texto à Esquerda + Foto ao Lado):** Cada um dos 4 cards por página foi reestruturado com o bloco de texto (título, descrição detalhada e link de ação) à esquerda e a foto em destaque ao lado direito.
- **Fundo Branco #ffffff & Responsividade:** Mantida a integração em `#ffffff` sem emendas nas fotos, com adaptação responsiva fluida para tablets e celulares.
- **Controles Minimalistas (Setas Básicas e Bolinhas):** Substituídos os botões numéricos por duas bolinhas simples discretas (com expansão no estado ativo) e setas limpas com hover suave.
- **Simplificação de Textos do Cabeçalho:** Título simplificado para *"Serviços"* e subtítulo ajustado para *"Montagem e otimização para computadores e notebooks."*.
- **Correção do Botão Voltar ao Topo:** Limpeza de variáveis antigas no JavaScript que causavam interrupção na execução, garantindo exibição instantânea do botão `#back-to-top` ao rolar a página.

#### Motivo
- Corrigir o erro de execução de script e garantir a usabilidade do botão voltar ao topo.

### 2026-08-24 — Seção de Avaliações em Tema Claro Clean (Idêntico a Serviços)

#### Alterado
- **Tema Claro (Light Background #ffffff):** Transição de fundo, bordas sutis e tipografia escura (`#14161b` e `#555c68`) para a seção de Avaliações, espelhando exatamente a harmonia e o acabamento limpo da seção de Serviços.
- **Cards de Avaliação Clean:** Cards em fundo branco com borda suave `rgba(0, 0, 0, 0.08)`, sombra sutil e hover sem borda azul.
- **Controles Minimalistas no Tema Claro:** Setas circulares com contorno neutro e bolinhas (*dots*) de navegação integradas em tons de cinza/preto.
- **Estrutura 2x2 com Carrossel de 5 Páginas (20 Avaliações Reais):** 5 páginas rotativas contendo 4 avaliações por página (total de 20 avaliações de clientes), transição automática a cada 5s, pausa no hover e 5 indicadores de bolinha (*dots*) com navegação por setas.
- **Banner de Prova Social Google (Minimalista):** Removidos o fundo e a caixa delimitadora, integrando o contador diretamente na seção com linha divisória sutil superior, nota 5.0 em `#14161b` e chamada `+150 avaliações<br>no Google.`.
- **Link Oficial Direto do Google Reviews:** Atualizado o link do botão para abrir diretamente o modal/popup oficial de avaliações da Voitechrj no Google Meu Negócio (`#lrd=...`).
- **Dimensões e Simetria Perfeita dos Cards (Desktop & Grid):** Configurado `grid-auto-rows: 1fr`, `height: 100%` e `min-height: 255px` uniforme, garantindo que absolutamente todos os 20 cards das 5 páginas possuam exatamente a mesma largura e a mesma altura milimétrica, sem variações entre linhas ou páginas.

#### Motivo
- Refinar o acabamento visual da seção de avaliações, tornando o banner inferior mais integrado e clean, além de garantir acesso imediato às avaliações oficiais no Google.

### 2026-08-24 — Ajuste Fino da Seção de Avaliações (Inversão, Centralização do 5.0 & Altura Travada em 280px)

#### Alterado
- **Centralização Completa do Bloco de Prova Social (Desktop, Tablet e Mobile):**
  - O bloco de **5.0 estrelas + (+150 avaliações no Google.)** foi perfeitamente centralizado no eixo horizontal.
  - A caixa de texto explicativo fica centralizada no meio da seção com o texto interno alinhado à esquerda (`text-align: left; margin: 0 auto;`), e o botão "Conferir avaliações no Google" centralizado.
- **Inversão de Posição dos Blocos (Todos os Dispositivos):**
  - O bloco de 5.0 estrelas agora fica imediatamente abaixo do grid de avaliações, e os controles de navegação (setas e bolinhas) ficam logo abaixo do banner.
- **Remoção Total da Linha Divisória:** Sem bordas ou caixas delimitadoras em desktop, tablet ou celular, proporcionando máxima fluidez visual.
- **Padronização Rígida de Altura (280px):**
  - Fixada a altura das linhas do grid desktop em `grid-template-rows: repeat(2, minmax(280px, 1fr))` com `min-height: 280px` e `height: 100%` nos cards.
  - Eliminada qualquer oscilação vertical da seção ao alternar de página.

#### Motivo
- Garantir simetria, alinhamento centralizado impecável e estabilidade visual do carrossel em qualquer dispositivo e resolução.

---

## 5. Estado do documento

**Status:** atualizado.

Este arquivo deve ser atualizado conforme alterações relevantes sejam realizadas e validadas no projeto.




