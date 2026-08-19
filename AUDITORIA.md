# Auditoria do código atual — Voitechrj Website

## 1. Objetivo

Registrar o estado técnico observado no código atual antes de qualquer redesign ou alteração estrutural.

**Data:** 2026-08-19  
**Branch analisada:** `main`  
**Arquivos principais:** `index.html`, `style.css`, `script.js`, `assets/`

A auditoria foi realizada sobre o código oficial do repositório. Nenhum arquivo funcional do website foi alterado nesta etapa.

---

## 2. Resumo executivo

A implementação atual é funcional e coerente com a arquitetura definida: website estático, single page, HTML/CSS/JavaScript nativos, sem backend próprio e com WhatsApp como principal canal de conversão.

A base é adequada para evolução incremental. Não há necessidade identificada de reescrita completa ou introdução de framework.

Foram encontrados, porém, pontos que devem ser tratados antes ou durante o redesign:

- conteúdo de prova social aparentemente demonstrativo;
- link de Google Maps incompleto no Footer;
- ausência de meta description e outros elementos básicos de SEO;
- acessibilidade incompleta em menu, FAQ, modais e elementos clicáveis;
- dependências e recursos externos que podem ser otimizados;
- algumas promessas e informações operacionais que precisam de validação;
- CSS extenso, porém ainda administrável, com oportunidades de limpeza e padronização.

---

## 3. `index.html`

### Estado

**Status:** funcional, mas necessita revisão de conteúdo, SEO e acessibilidade.

### Pontos positivos

- HTML5 e `lang="pt-BR"`.
- `meta viewport` presente.
- Estrutura semântica básica com `header`, `main`, `section` e `footer`.
- Formulário possui `label` associado aos campos.
- Imagens possuem `alt`.
- Links externos importantes utilizam `rel="noopener noreferrer"` em parte dos casos.
- IDs das seções permitem navegação interna.

### Problemas e oportunidades

#### 3.1 SEO técnico básico — prioridade alta

Existe `title`, mas não foi identificada `meta description`.

Também não foram identificados no `<head>`:

- canonical;
- Open Graph;
- Twitter Cards;
- dados estruturados;
- metadados adicionais relevantes para compartilhamento.

**Ação recomendada:** revisar SEO básico antes ou junto da etapa de redesign.

#### 3.2 Logo clicável não é semanticamente um controle

O retorno ao Hero utiliza uma `<div>` com `onclick`. Isso não oferece o mesmo comportamento de teclado e semântica de um link ou botão.

**Ação recomendada:** transformar em link para `#hero` ou controle equivalente acessível.

#### 3.3 Menu mobile

O botão possui comportamento funcional, mas não possui atributos como `aria-label` e `aria-expanded`.

**Ação recomendada:** melhorar semântica e estado acessível do menu.

#### 3.4 FAQ

As perguntas utilizam botões, o que é adequado, mas não há estado ARIA explícito (`aria-expanded`/`aria-controls`).

**Ação recomendada:** adicionar somente os atributos necessários durante a revisão de acessibilidade.

#### 3.5 Modais legais

Os modais possuem abertura, fechamento, clique externo e Escape implementados em JavaScript, porém não há estrutura acessível completa para diálogo, incluindo nomeação semântica e gerenciamento de foco.

Os botões de fechamento também não possuem `aria-label`.

**Ação recomendada:** revisar acessibilidade dos modais sem alterar o comportamento visual desnecessariamente.

#### 3.6 Links externos

Alguns links com `target="_blank"` não possuem `rel="noopener noreferrer"`, por exemplo o link de localização no Footer e o link de crédito.

**Ação recomendada:** padronizar os links externos.

#### 3.7 Google Maps — problema confirmado

O Footer contém `href="https://www.google.com/maps/..."`, que é um endereço incompleto e não representa um link funcional de localização.

**Prioridade:** alta.

#### 3.8 Prova social — conteúdo a validar

Os depoimentos com nomes como Maria Silva, João Pereira, Ana Costa e Carlos Santos aparecem como avaliações reais, mas o próprio documento `05_CONTEUDO.md` os classifica como demonstrativos até confirmação.

A página também exibe `5,0` e `140 avaliações no Google`.

**Ação recomendada:** validar a origem dos depoimentos e a quantidade atual de avaliações antes de tratá-los como prova social definitiva.

#### 3.9 Conteúdo operacional

Há afirmações que exigem validação antes de serem consideradas definitivas, incluindo:

- “Até 10x mais velocidade”;
- componentes originais;
- garantia de satisfação;
- resposta de chamados em até 2 horas;
- formas de pagamento;
- serviços descritos no FAQ.

Esses pontos já estão previstos para validação em `05_CONTEUDO.md` e `06_TAREFAS.md`.

---

## 4. `style.css`

### Estado

**Status:** funcional e organizado por seções, com boa base para evolução incremental.

### Pontos positivos

- Variáveis CSS centralizadas em `:root`.
- Separação clara por áreas da página.
- Media queries para diferentes larguras.
- Sistema visual consistente.
- Componentes reutilizados por classes.
- Responsividade implementada sem framework.

### Oportunidades

#### 4.1 Centralização adicional

Existem valores recorrentes ainda escritos diretamente em seletores, principalmente cores e medidas.

**Ação recomendada:** não fazer uma refatoração geral agora. Centralizar somente valores recorrentes quando forem tocados durante futuras alterações.

#### 4.2 Breakpoints

São utilizados vários breakpoints (`640px`, `768px`, `1024px`, `1280px` e outros pontos específicos). Isso funciona, mas pode ser simplificado durante o redesign se houver regras redundantes.

#### 4.3 Regras específicas de ocultação

Há regras como `.testimonial-card:nth-child(n+5)` e `.feature-card:nth-child(n+5)` para esconder elementos em determinadas larguras.

Isso deve ser revisto na etapa de UX/responsividade, pois o conteúdo não deve desaparecer sem uma decisão clara de experiência mobile.

#### 4.4 Animações

As animações são relativamente simples, mas devem considerar `prefers-reduced-motion` em uma futura revisão de acessibilidade.

#### 4.5 Recursos visuais pesados

Existem efeitos de blur/glow e imagens externas de alta resolução. Devem ser avaliados com foco em desempenho mobile.

---

## 5. `script.js`

### Estado

**Status:** funcional e relativamente simples.

### Funcionalidades identificadas

- inicialização Lucide;
- menu mobile;
- navegação suave;
- formulário → WhatsApp;
- FAQ accordion;
- modais legais;
- Intersection Observer para animações;
- botão voltar ao topo.

### Pontos de atenção

#### 5.1 Menu mobile

A lógica funciona, mas o estado visual não é refletido em atributos ARIA.

#### 5.2 FAQ

O comportamento de abrir uma pergunta e fechar as demais é simples e adequado. A principal melhoria necessária é acessibilidade do estado do accordion.

#### 5.3 Modais

A lógica de abertura e fechamento é funcional. O próximo nível de qualidade é gerenciamento de foco e semântica de diálogo.

#### 5.4 Formulário

O JavaScript monta corretamente a mensagem e utiliza o WhatsApp como canal final. Não há backend ou armazenamento, coerente com a arquitetura.

O comportamento deve ser preservado durante o redesign.

#### 5.5 Dependência global do Lucide

O código assume que `lucide` está disponível quando `DOMContentLoaded` é executado. Atualmente isso depende do carregamento do script externo do Unpkg.

**Ação recomendada:** avaliar posteriormente carregamento e estabilidade da dependência, sem substituir a biblioteca apenas por modernização.

---

## 6. `assets/`

A pasta atualmente contém:

- `voitechrj-logo.png` — aproximadamente 4,8 KB;
- `facebook.png` — aproximadamente 50 KB;
- `instagram.png` — aproximadamente 64 KB.

A maior parte das imagens fotográficas usadas no site está sendo carregada diretamente do Unsplash, não da pasta local.

**Ação recomendada:** avaliar posteriormente quais imagens devem ser locais e otimizadas, considerando desempenho, estabilidade e controle dos recursos.

---

## 7. Dependências e recursos externos

Dependências/recursos identificados:

- Google Fonts;
- Lucide via Unpkg;
- imagens do Unsplash;
- Google Reviews;
- Google Maps;
- WhatsApp;
- Facebook;
- Instagram.

Não foi identificado motivo para introduzir novas dependências neste momento.

A recomendação é reduzir dependências somente quando houver benefício concreto de desempenho, estabilidade ou manutenção.

---

## 8. Responsividade

A implementação possui tratamento específico para mobile e desktop.

Pontos positivos:

- menu mobile separado;
- grids adaptativos;
- formulários adaptativos;
- cards ajustados por breakpoint;
- Hero muda de coluna em telas maiores.

Pontos para validação visual futura:

- conteúdo ocultado em cards no mobile;
- tamanho e espaçamento dos CTAs;
- leitura das avaliações;
- altura fixa de alguns cards;
- comportamento dos modais em telas pequenas.

A auditoria de código não substitui teste visual em dispositivos reais. Esses pontos devem ser validados na etapa de UX/testes.

---

## 9. Acessibilidade

### Classificação atual

**Necessita melhoria.**

Principais pontos:

1. Logo clicável implementada com `div` + `onclick`.
2. Menu mobile sem estado ARIA explícito.
3. FAQ sem estado ARIA explícito.
4. Modais sem semântica completa de diálogo.
5. Botões de fechamento de modal sem `aria-label`.
6. Gerenciamento de foco dos modais não implementado.
7. Não foi identificada regra `prefers-reduced-motion` na revisão realizada.

Esses pontos não justificam reescrita. Devem ser corrigidos incrementalmente.

---

## 10. SEO

### Classificação atual

**Básico, porém incompleto.**

Prioridades:

1. `meta description`.
2. Revisão da hierarquia de headings.
3. SEO local relacionado a Niterói/RJ.
4. Links e localização corretos.
5. Open Graph/canonical quando fizer sentido.
6. Avaliação de dados estruturados.

Não implementar todas essas melhorias automaticamente. Primeiro definir a estratégia de SEO da página.

---

## 11. Desempenho

Principais pontos de atenção:

- Google Fonts carregado via `@import` no CSS;
- Lucide carregado externamente;
- várias imagens do Unsplash carregadas diretamente;
- imagem da seção de benefícios utiliza URL de largura potencialmente muito grande;
- efeitos de blur/glow podem ter custo adicional em dispositivos móveis.

**Recomendação:** medir antes de otimizar. Não fazer otimizações prematuras apenas por inspeção do código.

---

## 12. Segurança e estabilidade

Não foi identificada necessidade de backend ou armazenamento.

O principal risco técnico atual relacionado a recursos externos é dependência de serviços de terceiros para fontes, ícones e imagens.

Links com `target="_blank"` devem ser padronizados com `rel="noopener noreferrer"`.

---

## 13. Prioridades encontradas

| Prioridade | Item | Arquivo | Ação |
|---|---|---|---|
| Alta | Google Maps incompleto | `index.html` | Corrigir antes de considerar Footer concluído |
| Alta | Depoimentos demonstrativos | `index.html` | Validar/substituir por avaliações reais |
| Alta | Dados de avaliações | `index.html` | Confirmar nota e quantidade atuais |
| Alta | Conteúdo operacional | `index.html` | Validar antes do redesign definitivo |
| Média | SEO básico | `index.html` | Planejar meta description e estrutura |
| Média | Acessibilidade | `index.html` / `script.js` | Melhorar menu, FAQ e modais |
| Média | Recursos externos | `index.html` / `style.css` | Medir e otimizar posteriormente |
| Baixa | Limpeza/refatoração CSS | `style.css` | Fazer apenas durante alterações relacionadas |

---

## 14. Conclusão

A arquitetura atual deve ser preservada.

Não há justificativa técnica identificada para migrar para React, Vue, outro framework, backend ou CMS.

A melhor estratégia é:

```text
Auditoria concluída
        ↓
Validar conteúdo e operação
        ↓
Corrigir problemas críticos identificados
        ↓
Revisar UX/estrutura
        ↓
Redesign visual incremental
        ↓
SEO + acessibilidade + desempenho
        ↓
Testes
```

A auditoria confirma que o projeto possui uma base adequada para continuar evoluindo sem reescrita completa.

---

## 15. Estado da auditoria

**Status:** concluída.

**Código funcional alterado durante a auditoria:** não.

**Próxima fase recomendada:** validação do conteúdo e operação, com prioridade para prova social, informações comerciais, localização e demais afirmações que precisam representar fielmente a operação real da Voitechrj.
