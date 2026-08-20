# 04 — Identidade Visual

## 1. Objetivo

Este documento registra a identidade visual definida para o Voitechrj Website e estabelece referências para futuras alterações visuais.

A identidade deve ser tratada como um sistema único, preservando consistência entre seções, componentes e dispositivos.

## 2. Direção visual

A direção visual definida para a Voitechrj é **escura, técnica, profissional e discreta**.

O site deve transmitir:

- confiança;
- competência técnica;
- clareza;
- atendimento direto;
- simplicidade;
- profissionalismo.

A aparência deve se aproximar de um site profissional de manutenção e suporte de informática, e não de uma landing page genérica de SaaS ou de um template visual excessivamente produzido.

O design deve ter personalidade própria e evitar aparência de conteúdo ou layout gerado automaticamente.

### Princípios visuais

1. Menos efeitos decorativos e mais hierarquia visual.
2. Espaço negativo suficiente para melhorar leitura e percepção de qualidade.
3. Azul utilizado como destaque, não como preenchimento indiscriminado da interface.
4. Superfícies escuras com diferenças sutis de profundidade.
5. Imagens e elementos gráficos somente quando contribuírem para a apresentação do serviço.
6. Componentes consistentes entre as diferentes seções.
7. Responsividade tratada como parte do design, não como adaptação posterior.

## 3. Paleta de cores

A nova direção visual utiliza três cores principais:

| Função | Valor |
|---|---|
| Fundo principal | `#222222` |
| Azul institucional / destaque | `#345A87` |
| Texto principal / contraste claro | `#F8F8F8` |

Cores auxiliares podem ser derivadas dessas referências quando necessárias para criar hierarquia, estados de interação, bordas e superfícies, mas não devem descaracterizar a paleta principal.

Sugestões de uso:

- `#222222`: fundo predominante da página;
- `#345A87`: botões primários, links em destaque, indicadores e elementos de interação;
- `#F8F8F8`: títulos, textos principais e elementos de alto contraste;
- variações de cinza: textos secundários, bordas e superfícies intermediárias.

O azul deve ser utilizado com moderação. A interface não deve parecer predominantemente azul.

## 4. Tipografia

O projeto utiliza atualmente duas famílias tipográficas carregadas pelo Google Fonts.

### Montserrat

Utilizada como fonte de display para títulos e elementos de destaque.

`--font-display: "Montserrat", ui-sans-serif, system-ui, sans-serif;`

### Open Sans

Utilizada como fonte principal para textos e interface.

`--font-sans: "Open Sans", ui-sans-serif, system-ui, sans-serif;`

A hierarquia tipográfica deve ser clara, mas sem excesso de tamanhos, pesos ou estilos diferentes.

## 5. Logo e marca

A logo principal está armazenada em `assets/voitechrj-logo.png`.

A logo deve permanecer legível e reconhecível, sem efeitos que prejudiquem sua identidade.

O tratamento da marca deve ser discreto e integrado ao tema escuro.

## 6. Layout e espaçamento

O layout deve priorizar:

- alinhamento consistente;
- espaço negativo;
- leitura confortável;
- hierarquia clara;
- largura adequada de conteúdo;
- adaptação natural entre desktop e mobile.

O contêiner global atual de aproximadamente `1200px` pode ser preservado enquanto continuar adequado ao conteúdo.

Não utilizar espaços exagerados apenas para preencher a tela.

## 7. Botões e ações

Os botões devem ter aparência profissional e objetiva.

O botão primário deve utilizar o `#345A87` como destaque, com texto `#F8F8F8`.

O formato pill (`border-radius: 9999px`) não deve ser tratado como regra obrigatória. O formato dos botões deve ser definido conforme a composição visual e pode utilizar cantos moderadamente arredondados.

Evitar botões excessivamente grandes, chamativos ou com efeitos de brilho.

Estados de hover e foco devem ser perceptíveis sem exagero.

## 8. Cards

Cards podem ser utilizados quando ajudarem a organizar informações, mas não devem transformar toda a página em uma coleção de caixas flutuantes.

Características preferenciais:

- superfícies discretamente diferentes do fundo;
- bordas sutis;
- cantos moderadamente arredondados;
- espaçamento interno adequado;
- pouca ou nenhuma sombra pesada;
- destaque visual somente quando necessário.

Sempre avaliar se determinado conteúdo realmente precisa de um card antes de criar um novo componente.

## 9. Hero

A Hero é a principal área de apresentação do site e deve estabelecer imediatamente a identidade da Voitechrj.

A direção preferencial é:

- fundo escuro;
- título forte e direto;
- descrição curta e clara;
- ação principal evidente;
- informação secundária sem competir com a ação principal;
- elemento visual relacionado à informática somente quando agregar valor.

Evitar:

- excesso de gradientes;
- glow azul espalhado pela composição;
- excesso de cards sobrepostos;
- ilustrações genéricas de tecnologia;
- aparência de template SaaS.

A mensagem deve ter prioridade sobre os efeitos visuais.

## 10. Header e navegação

O header deve ser limpo e discreto.

A navegação deve utilizar o fundo escuro como base e o azul somente para estados de destaque.

O header não deve competir visualmente com a Hero.

No mobile, o menu deve manter a mesma linguagem visual, com interação simples e clara.

## 11. Imagens e tratamentos visuais

Imagens devem possuir relação direta com manutenção, computadores, notebooks ou atendimento técnico.

Evitar imagens genéricas de banco que transmitam uma sensação artificial ou pouco relacionada à realidade da Voitechrj.

Quando uma imagem não acrescentar informação ou personalidade à seção, é preferível utilizar composição tipográfica e elementos da própria interface.

Overlays, zoom e efeitos similares devem ser discretos.

## 12. Bordas, sombras e profundidade

A profundidade da interface deve ser construída principalmente através de pequenas diferenças entre fundo, superfícies e bordas.

Sombras devem ser moderadas.

Glow, blur e efeitos luminosos devem ser utilizados apenas quando houver uma justificativa visual clara.

A interface não deve parecer excessivamente futurista.

## 13. Animações e transições

As animações devem ser sutis e funcionais.

Prioridades:

- indicar interação;
- melhorar percepção de navegação;
- dar continuidade à experiência.

Evitar animações apenas decorativas ou excessivas.

Também devem ser consideradas acessibilidade e desempenho em dispositivos móveis.

## 14. Responsividade visual

A identidade deve permanecer consistente em desktop, notebook, tablet e smartphone.

A versão mobile não deve ser simplesmente uma versão comprimida do desktop. Elementos secundários podem ser reduzidos ou reorganizados para preservar a hierarquia.

## 15. Acessibilidade visual

Alterações visuais devem considerar:

- contraste adequado;
- legibilidade;
- tamanho de texto;
- estados de foco;
- navegação por teclado;
- não dependência exclusiva de cor para comunicar estados.

O `#345A87` não deve ser usado em textos pequenos sobre fundos escuros se o contraste resultante prejudicar a leitura.

## 16. O que evitar

A identidade visual da Voitechrj deve evitar deliberadamente:

- aparência genérica de IA;
- estética de dashboard/SaaS sem relação com o negócio;
- excesso de gradientes;
- excesso de neon ou glow;
- excesso de cards;
- excesso de elementos arredondados;
- ilustrações tecnológicas genéricas;
- excesso de ícones decorativos;
- animações chamativas;
- linguagem visual excessivamente corporativa ou impessoal.

## 17. Regras para futuras alterações

1. Preservar a identidade escura e técnica.
2. Priorizar `#222222`, `#345A87` e `#F8F8F8`.
3. Evitar introduzir novas cores sem necessidade clara.
4. Usar o azul com moderação.
5. Priorizar clareza e hierarquia sobre efeitos decorativos.
6. Evitar soluções com aparência genérica de template ou IA.
7. Avaliar desktop e mobile antes de considerar uma alteração visual concluída.
8. Preservar a legibilidade e o reconhecimento da logo.
9. Considerar desempenho ao adicionar imagens, blur ou animações.
10. Registrar neste documento qualquer decisão visual permanente.

## 18. Próxima etapa visual

O redesign será realizado progressivamente, começando por:

1. Header;
2. Hero;
3. Serviços e diferenciais;
4. Prova social;
5. Benefícios;
6. Formulário;
7. FAQ;
8. Footer;
9. Revisão mobile;
10. Revisão final de consistência.

Nenhuma dessas etapas deve alterar as regras operacionais ou o conteúdo já validado sem decisão específica.

## 19. Estado do documento

**Status:** direção visual definida para o próximo redesign.

Este documento substitui a descrição anterior da identidade visual quando houver conflito entre as duas. A implementação no `style.css` ainda deverá ser ajustada progressivamente conforme o redesign for executado.
