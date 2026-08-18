# 04 — Identidade Visual

## 1. Objetivo

Este documento registra a identidade visual atualmente implementada no Voitechrj Website e estabelece referências para futuras alterações visuais.

A identidade deve ser tratada como um sistema único, preservando consistência entre seções, componentes e dispositivos.

## 2. Direção visual atual

O website utiliza uma estética predominantemente escura, tecnológica e institucional, combinando fundo preto/cinza muito escuro com azul como cor principal de destaque.

A interface utiliza superfícies escuras em diferentes níveis, azul institucional para ações e destaques, tipografia sem serifa, cards com bordas discretas, cantos arredondados, sombras, efeitos de brilho pontuais, transições suaves e imagens relacionadas a serviços de informática.

A direção visual deve transmitir profissionalismo, confiança, tecnologia e clareza sem transformar o site em uma interface excessivamente complexa.

## 3. Paleta de cores

As cores globais são centralizadas em variáveis CSS no `:root` do `style.css`.

| Função | Variável | Valor atual |
|---|---|---|
| Primária | `--color-primary` | `#034694` |
| Primária hover | `--color-primary-hover` | `#023675` |
| Secundária | `--color-secondary` | `#1f2937` |
| Fundo | `--color-background` | `#0a0a0a` |
| Superfície | `--color-surface` | `#171717` |
| Superfície clara | `--color-surface-light` | `#1e1e1e` |
| Superfície mais clara | `--color-surface-lighter` | `#2a2a2a` |
| Texto principal | `--color-text` | `#f3f4f6` |
| Texto secundário | `--color-text-muted` | `#9ca3af` |
| Borda | `--color-border` | `rgba(255, 255, 255, 0.1)` |
| Borda destacada | `--color-border-light` | `rgba(255, 255, 255, 0.2)` |

Valores recorrentes devem continuar centralizados nas variáveis CSS quando fizer sentido.

## 4. Tipografia

O projeto utiliza duas famílias tipográficas carregadas pelo Google Fonts.

### Montserrat

Utilizada como fonte de display para títulos e elementos de destaque.

`--font-display: "Montserrat", ui-sans-serif, system-ui, sans-serif;`

### Open Sans

Utilizada como fonte principal para textos e interface.

`--font-sans: "Open Sans", ui-sans-serif, system-ui, sans-serif;`

A hierarquia tipográfica deve ser preservada para manter contraste entre títulos, textos auxiliares e elementos de ação.

## 5. Logo e marca

A logo principal está armazenada em `assets/voitechrj-logo.png`.

No header, a imagem é apresentada dentro de um contêiner circular de aproximadamente `2rem`, com borda discreta e fundo preto.

A marca não deve receber efeitos ou alterações que prejudiquem sua legibilidade ou reconhecimento.

## 6. Layout e espaçamento

O layout utiliza um contêiner global com largura máxima de `1200px`.

Em telas menores, o contêiner utiliza padding horizontal de `1rem`. A partir de `768px`, a implementação atual utiliza largura de `80%`.

As seções utilizam espaçamentos verticais amplos, principalmente em áreas institucionais e de destaque. A organização deve priorizar hierarquia visual clara, leitura confortável, alinhamento consistente e adaptação adequada para telas pequenas.

## 7. Botões e ações

O botão primário utiliza fundo azul `--color-primary`, texto branco, padding consistente, formato pill com `border-radius: 9999px`, peso tipográfico `600`, ícones alinhados ao texto quando utilizados e transição de aproximadamente `0.3s`.

No hover, o botão altera a cor para `--color-primary-hover` e utiliza leve deslocamento vertical.

Botões secundários utilizam superfícies escuras, bordas discretas e o azul como destaque no hover.

## 8. Cards

Os cards são utilizados em diferentes áreas do site, incluindo serviços e prova social.

Características visuais recorrentes:

- fundo em superfície escura;
- borda sutil;
- cantos arredondados;
- espaçamento interno proporcional ao dispositivo;
- transições discretas;
- destaque azul em estados de interação quando aplicável.

Cards não devem receber estilos completamente diferentes entre seções sem uma necessidade de design clara.

## 9. Hero

A Hero é visualmente mais rica que as demais seções.

A implementação atual utiliza fundo em gradiente escuro, brilhos azuis desfocados, conteúdo sobreposto ao fundo, título de grande destaque, descrição secundária, ações principais e cards visuais relacionados aos serviços.

O efeito visual deve continuar subordinado à mensagem principal e às ações de conversão.

## 10. Header e navegação

O header utiliza posicionamento sticky e fundo escuro com transparência, blur e borda inferior discreta.

A navegação desktop utiliza links simples com destaque azul no hover. No mobile, a navegação é substituída por menu específico, mantendo a identidade visual das superfícies escuras.

A navegação deve continuar clara e funcional sem competir visualmente com a Hero.

## 11. Imagens e tratamentos visuais

As imagens utilizadas em cards de serviço ocupam integralmente o espaço disponível, utilizando `object-fit: cover`.

Os cards possuem overlay em gradiente escuro para preservar a legibilidade dos textos sobre as imagens. Em hover, as imagens de serviço utilizam zoom suave.

Imagens futuras devem seguir o princípio de relevância ao serviço, boa qualidade, otimização de tamanho e coerência com a identidade tecnológica/institucional.

## 12. Bordas, sombras e profundidade

A interface utiliza bordas com baixa opacidade para separar superfícies sem criar divisões visuais pesadas.

Sombras são utilizadas de maneira moderada, principalmente em elementos de navegação e ações.

Efeitos de blur e glow devem ser utilizados com parcimônia, especialmente em dispositivos móveis, considerando desempenho e legibilidade.

## 13. Animações e transições

As animações atuais são predominantemente sutis e funcionais, incluindo transições de hover, entrada do menu mobile, zoom de imagens, animações associadas à rolagem e pequenos deslocamentos de botões e elementos.

Novas animações devem melhorar a percepção de interação ou hierarquia. Não devem existir apenas como efeito decorativo. Também devem ser avaliadas quanto a desempenho e acessibilidade.

## 14. Responsividade visual

A identidade visual deve permanecer consistente em desktop, notebook, tablet e smartphone.

A implementação atual utiliza breakpoints, entre outros, em `640px`, `768px`, `1024px` e `1280px`.

Em telas menores podem ocorrer adaptações específicas, como redução de tamanhos, alteração de disposição dos elementos e simplificação de informações secundárias. Essas adaptações devem preservar a hierarquia visual e a conversão.

## 15. Acessibilidade visual

Alterações visuais devem considerar contraste entre texto e fundo, tamanho adequado de textos, estados claros de hover/foco, legibilidade em telas pequenas, navegação por teclado e não dependência exclusiva de cor para comunicar estados.

O azul utilizado como identidade não deve ser aplicado indiscriminadamente em textos ou fundos quando comprometer contraste.

## 16. Regras para futuras alterações

1. Preservar a identidade escura e azul enquanto ela continuar adequada ao posicionamento da empresa.
2. Utilizar as variáveis CSS existentes para cores e fontes recorrentes.
3. Evitar introduzir novas cores sem necessidade visual clara.
4. Evitar misturar estilos de design incompatíveis entre seções.
5. Priorizar consistência entre componentes semelhantes.
6. Avaliar desktop e mobile antes de considerar uma alteração visual concluída.
7. Considerar desempenho ao adicionar imagens, blur, glow ou animações.
8. Não alterar a logo sem uma decisão específica de identidade visual.
9. Alterações permanentes ou estruturais devem ser refletidas neste documento.

## 17. Estado atual

**Status:** documento inicial baseado na implementação visual existente no `style.css`.

Este documento representa a identidade visual atual conhecida do projeto. Ele poderá ser atualizado quando ocorrer um redesign ou quando novos padrões visuais forem definidos de forma permanente.
