# 02 — Arquitetura do projeto

## 1. Visão geral

O Voitechrj Website é um website institucional estático de página única (single page). A arquitetura prioriza simplicidade, manutenção fácil, baixo número de dependências, desempenho, responsividade e preservação das funcionalidades existentes.

O projeto não possui backend próprio, banco de dados ou sistema administrativo.

## 2. Stack tecnológica

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

Dependências/recursos externos atuais incluem Google Fonts, Lucide Icons e recursos externos de imagem. Novas dependências devem ser adicionadas somente quando houver justificativa técnica.

## 3. Estrutura principal

```text
/
├── .github/
├── .vscode/
├── assets/
├── 00_CONTEXT.md
├── 01_PRD.md
├── index.html
├── style.css
└── script.js
```

### index.html

Responsável pela estrutura e conteúdo da página, incluindo header, navegação desktop/mobile, hero, prova social, diferenciais, benefícios, agendamento, FAQ, modais legais e footer.

### style.css

Responsável pela apresentação visual, incluindo variáveis CSS, tipografia, layout, componentes, botões, cards, formulários, modais, animações e responsividade.

### script.js

Responsável pelos comportamentos interativos, incluindo inicialização dos ícones Lucide, menu mobile, navegação suave, formulário de agendamento, encaminhamento para WhatsApp, FAQ, modais, animações por rolagem e botão de voltar ao topo.

### assets/

Armazena recursos estáticos utilizados pelo website, incluindo identidade visual e imagens locais.

## 4. Modelo arquitetural

```text
GitHub Repository
       ↓
   GitHub Pages
       ↓
   index.html
    ↙       ↘
style.css  script.js
              ↓
     Interações da interface
              ↓
 WhatsApp / FAQ / Modais / Navegação
```

O HTML representa a estrutura, o CSS controla a apresentação e o JavaScript adiciona comportamento. Não existe camada de backend.

## 5. Arquitetura da página

O website utiliza uma estrutura de página única. A organização principal é:

```text
<header>
    ├── Logo
    ├── Navegação desktop
    └── Menu mobile

<main>
    ├── Hero
    ├── Prova social
    ├── Diferenciais
    ├── Benefícios
    ├── Agendamento
    └── FAQ

<footer>
    ├── Informações institucionais
    ├── Contato
    ├── Redes sociais
    └── Links legais
```

A navegação interna utiliza IDs das seções e rolagem suave.

## 6. Navegação

O header possui logo, navegação desktop e menu mobile. Os destinos de navegação são indicados por `data-scroll` e processados pelo JavaScript. No mobile, o menu utiliza a classe `active`.

A implementação existente deve ser preservada durante alterações, salvo quando uma mudança de navegação for explicitamente planejada.

## 7. Formulário e conversão

A seção de agendamento possui formulário para coleta das informações necessárias ao atendimento. O site não envia os dados para um servidor próprio: o JavaScript monta uma mensagem e abre o WhatsApp.

O WhatsApp é, portanto, o principal canal de conversão do site.

## 8. FAQ e modais

O FAQ utiliza um acordeão implementado em JavaScript. Os modais legais controlam abertura, fechamento, clique fora, tecla `Escape` e bloqueio de rolagem enquanto estiverem abertos.

## 9. CSS e responsividade

O CSS utiliza variáveis em `:root` para centralizar valores da interface, incluindo cores e tipografia. Essa abordagem deve ser preservada para facilitar alterações globais.

A responsividade é implementada por media queries e contempla desktop, notebook, tablet e smartphone. A experiência mobile deve ser tratada como uma experiência própria, não apenas como uma versão reduzida do desktop.

## 10. JavaScript

O `script.js` é inicializado após `DOMContentLoaded` e concentra os comportamentos interativos da página.

Principais responsabilidades:

- inicialização dos ícones Lucide;
- menu mobile;
- navegação suave;
- formulário e WhatsApp;
- FAQ;
- modais;
- animações com `IntersectionObserver`;
- botão de voltar ao topo.

## 11. Integrações externas

As integrações/recursos externos atuais incluem:

- WhatsApp;
- Google Maps;
- Google Reviews;
- Google Fonts;
- Lucide Icons;
- imagens externas do Unsplash.

Novas integrações devem ser avaliadas quanto a desempenho, disponibilidade, privacidade e manutenção.

## 12. Backend e persistência

Atualmente não existe:

- backend próprio;
- banco de dados;
- API própria;
- autenticação;
- painel administrativo;
- sistema próprio de agendamento;
- armazenamento próprio de dados de clientes.

A ausência de backend é uma característica arquitetural atual e não deve ser alterada sem necessidade concreta.

## 13. Hospedagem e publicação

O código oficial está no repositório:

`voitech-rj/voitech-rj.github.io`

A branch principal é `main` e o website é publicado pelo GitHub Pages.

Fluxo:

```text
Alteração → Git → GitHub/main → GitHub Pages → Website publicado
```

O GitHub é a fonte oficial do código do projeto.

## 14. Princípios arquiteturais

1. Preferir HTML, CSS e JavaScript nativos quando forem suficientes.
2. Evitar frameworks sem necessidade real.
3. Evitar dependências externas desnecessárias.
4. Preservar funcionalidades existentes.
5. Analisar o código atual antes de alterações estruturais.
6. Manter separação entre estrutura, apresentação e comportamento.
7. Evitar duplicação de código.
8. Priorizar legibilidade e manutenção.
9. Priorizar desempenho e responsividade.
10. Considerar acessibilidade durante alterações.
11. Não transformar o website em uma aplicação complexa sem decisão explícita.
12. Registrar decisões arquiteturais permanentes na documentação.

## 15. Limites arquiteturais atuais

Não devem ser introduzidos automaticamente:

- framework frontend;
- SPA baseada em framework;
- backend próprio;
- banco de dados;
- CMS;
- autenticação;
- painel administrativo;
- e-commerce;
- sistema completo de agendamento.

Essas mudanças somente devem ocorrer caso exista necessidade concreta do produto e decisão arquitetural específica.

## 16. Estratégia de evolução

A evolução deve ser incremental. A prioridade é melhorar a implementação existente antes de substituí-la.

```text
Melhorar código existente
        ↓
Reorganizar quando necessário
        ↓
Extrair componentes quando houver repetição real
        ↓
Adicionar dependências somente quando justificadas
        ↓
Alterar arquitetura somente quando a necessidade exigir
```

Não deve ser adotada uma tecnologia apenas por ser mais moderna. A solução mais simples que atende aos requisitos deve ser priorizada.

## 17. Critério para mudança arquitetural

Uma mudança deve ser considerada arquitetural quando alterar significativamente:

- estrutura de arquivos;
- forma de publicação;
- stack tecnológica;
- dependências principais;
- fluxo de dados;
- existência de backend;
- persistência de dados;
- modelo de navegação;
- integrações externas;
- forma de manutenção.

Mudanças desse tipo devem ser registradas na documentação correspondente.

## 18. Relação com a documentação

O `00_CONTEXT.md` é o ponto inicial para compreensão geral do projeto.

O `01_PRD.md` define o que o produto deve alcançar.

Este documento define como a implementação está estruturada.

Decisões técnicas específicas e permanentes devem ser registradas no documento correspondente de decisões técnicas.

## 19. Estado arquitetural atual

**Status:** arquitetura simples e estática.

**Modelo:** Single Page Website.

**Frontend:** HTML5 + CSS3 + JavaScript.

**Backend:** inexistente.

**Persistência:** inexistente.

**Hospedagem:** GitHub Pages.

**Código-fonte:** GitHub.

**Principal canal de conversão:** WhatsApp.

A arquitetura atual é considerada adequada enquanto os requisitos permanecerem dentro do escopo definido no PRD.
