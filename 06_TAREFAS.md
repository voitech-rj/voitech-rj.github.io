# 06 — Tarefas do projeto

## 1. Objetivo

Este documento transforma os requisitos, decisões e diretrizes definidos na documentação do projeto em um plano de execução para evolução do website da Voitechrj.

O objetivo é organizar o trabalho por prioridade, reduzir alterações desconectadas e permitir que cada etapa seja executada e validada antes da próxima.

Este documento é um planejamento vivo. As tarefas devem ser atualizadas conforme forem concluídas, alteradas ou substituídas por novas decisões.

---

## 2. Princípios de execução

As tarefas devem seguir estas regras:

1. Consultar a documentação relacionada antes da implementação.
2. Analisar o código existente antes de alterar qualquer arquivo.
3. Preservar funcionalidades que não fazem parte da tarefa.
4. Priorizar soluções simples, nativas e fáceis de manter.
5. Considerar desktop e mobile em alterações de layout.
6. Validar funcionalidades após alterações relevantes.
7. Evitar implementar várias mudanças estruturais simultaneamente sem validação intermediária.
8. Atualizar a documentação quando uma decisão permanente for tomada.
9. Não tratar conteúdo provisório ou não validado como definitivo.
10. Alterações diretas no `main` somente mediante autorização explícita.

---

## 3. Status das tarefas

Os status utilizados neste documento são:

- **Pendente** — ainda não iniciada.
- **Em análise** — sendo estudada antes da implementação.
- **Em desenvolvimento** — implementação em andamento.
- **Em validação** — implementação realizada, aguardando testes.
- **Concluída** — validada e incorporada ao projeto.
- **Bloqueada** — depende de informação, decisão ou recurso externo.
- **Descartada** — deixou de fazer parte do escopo.

---

## 4. Fase 0 — Documentação e preparação

### Tarefas

- [x] Criar `00_CONTEXT.md`.
- [x] Criar `01_PRD.md`.
- [x] Criar `02_ARQUITETURA.md`.
- [x] Criar `03_DECISOES_TECNICAS.md`.
- [x] Criar `04_IDENTIDADE_VISUAL.md`.
- [x] Criar `05_CONTEUDO.md`.
- [x] Criar `06_TAREFAS.md`.
- [x] Criar `07_CHANGELOG.md`.
- [x] Criar `08_ERROS.md`.
- [x] Criar `09_MANUTENCAO.md`.
- [x] Criar `10_COMO-PEDIR-MUDANCA.md`.
- [x] Realizar auditoria inicial do código atual e registrar os achados em `AUDITORIA.md`.

### Resultado esperado

Ter uma base documental suficiente para orientar o desenvolvimento sem depender exclusivamente do histórico das conversas.

**Status da fase:** concluída.

---

## 5. Fase 1 — Auditoria do código atual

**Prioridade:** Alta  
**Status:** Concluída

### Tarefas

- [x] Analisar `index.html` integralmente.
- [x] Analisar `style.css` integralmente.
- [x] Analisar `script.js` integralmente.
- [x] Mapear a estrutura de `assets/`.
- [x] Identificar dependências externas utilizadas atualmente.
- [x] Identificar funcionalidades JavaScript existentes.
- [x] Identificar possíveis códigos duplicados ou obsoletos.
- [x] Identificar problemas de responsividade.
- [x] Identificar problemas de acessibilidade.
- [x] Identificar problemas básicos de SEO técnico.
- [x] Identificar imagens e recursos que podem impactar desempenho.
- [x] Registrar riscos e problemas encontrados antes do redesign em `AUDITORIA.md`.

### Resultado esperado

Obter uma visão objetiva do estado atual do site e evitar alterações baseadas em suposições.

### Resultado da auditoria

A arquitetura atual foi considerada adequada para evolução incremental. Não foi identificada necessidade de reescrita completa ou adoção de framework.

Principais pontos registrados em `AUDITORIA.md`:

- Google Maps do Footer precisa ser corrigido;
- prova social e quantidade/nota das avaliações precisam ser validadas;
- informações e promessas comerciais precisam ser confirmadas;
- SEO técnico básico está incompleto;
- acessibilidade precisa de melhorias incrementais;
- recursos externos devem ser avaliados posteriormente com foco em desempenho e estabilidade;
- refatorações de CSS devem ocorrer somente quando relacionadas a alterações concretas.

---

## 6. Fase 2 — Validação do conteúdo e operação

**Prioridade:** Alta  
**Status:** Em validação

### Tarefas

- [x] Comparar o conteúdo publicado com `05_CONTEUDO.md` e o código atual.
- [x] Confirmar o WhatsApp utilizado pelo site: `(21) 99447-2406`.
- [x] Confirmar a atuação/localização em Niterói/RJ.
- [x] Confirmar que o site utiliza avaliações Google e identificar o número atualmente exibido.
- [ ] Validar textos da Hero com a operação real.
- [ ] Validar serviços realmente oferecidos.
- [ ] Validar diferenciais e promessas comerciais.
- [ ] Validar informações sobre garantia.
- [ ] Validar informações sobre peças e componentes.
- [ ] Validar horários de atendimento.
- [ ] Validar prazo de atendimento.
- [ ] Validar formas de pagamento.
- [ ] Validar endereço e regras de entrega/retirada.
- [ ] Validar disponibilidade de atendimento remoto.
- [ ] Substituir ou confirmar depoimentos atualmente demonstrativos.
- [ ] Revisar FAQ com base nas informações operacionais confirmadas.

### Resultado parcial da validação — 2026-08-20

A análise do repositório confirmou que o código atual contém:

- WhatsApp `(21) 99447-2406`, também confirmado no cadastro público encontrado para a Voitechrj;
- atuação em Niterói/RJ;
- nota `5,0` e `140 avaliações` exibidas na prova social;
- quatro serviços destacados: instalação de SSD, limpeza completa, troca de pasta térmica e formatação;
- afirmação comercial de `Até 10x mais velocidade` para SSD;
- afirmações sobre garantia de satisfação e componentes originais;
- depoimentos com nomes genéricos/demonstrativos (`Maria Silva`, `João Pereira`, `Ana Costa` e `Carlos Santos`).

A prova social precisa ser tratada com atenção: o cadastro público atualmente encontrado confirma **5,0 e 140 avaliações**, portanto o número exibido no código está coerente com essa fonte no momento da validação. Isso não valida os quatro depoimentos, que continuam sem comprovação de correspondência com avaliações reais.

As informações de garantia, peças/componentes, horários, prazo, pagamentos, regras de entrega/retirada e atendimento remoto não foram consideradas validadas apenas por aparecerem ou não no código. Permanecem pendentes de confirmação operacional antes de serem tratadas como conteúdo definitivo.

### Resultado esperado

Garantir que o conteúdo publicado represente a operação real da Voitechrj.

### Observação

Nenhuma alteração visual definitiva deve ser baseada em informações comerciais ainda não confirmadas.

---

## 7. Fase 3 — Estrutura e UX

**Prioridade:** Alta  
**Status:** Pendente

### Tarefas

- [ ] Revisar hierarquia das seções da página.
- [ ] Revisar fluxo entre Hero, prova social, serviços, diferenciais e contato.
- [ ] Reavaliar navegação do Header.
- [ ] Definir hierarquia clara para chamadas de ação.
- [ ] Priorizar WhatsApp como principal conversão.
- [ ] Simplificar o formulário de contato/agendamento quando necessário.
- [ ] Garantir que o formulário deixe claro que não confirma automaticamente um horário.
- [ ] Revisar FAQ e sua posição na página.
- [ ] Revisar Footer e links legais.
- [ ] Verificar experiência de navegação em telas pequenas.

### Resultado esperado

Criar um fluxo de navegação simples, compreensível e orientado à conversão.

---

## 8. Fase 4 — Redesign visual

**Prioridade:** Alta  
**Status:** Pendente

### Tarefas

- [ ] Aplicar a identidade visual definida na documentação.
- [ ] Revisar tipografia e hierarquia tipográfica.
- [ ] Revisar sistema de cores.
- [ ] Revisar espaçamentos e ritmo visual.
- [ ] Revisar componentes e cards.
- [ ] Revisar Hero.
- [ ] Revisar seção de serviços.
- [ ] Revisar prova social.
- [ ] Revisar diferenciais.
- [ ] Revisar seção de benefícios.
- [ ] Revisar seção de contato/agendamento.
- [ ] Revisar FAQ.
- [ ] Revisar Footer.
- [ ] Garantir consistência visual entre todas as seções.
- [ ] Validar o resultado em desktop e mobile.

### Resultado esperado

Ter uma interface mais profissional, consistente e alinhada à identidade da Voitechrj sem sacrificar desempenho ou manutenção.

---

## 9. Fase 5 — Conversão e contato

**Prioridade:** Alta  
**Status:** Pendente

### Tarefas

- [ ] Revisar todas as chamadas para WhatsApp.
- [ ] Padronizar textos de CTA.
- [ ] Garantir que os links para WhatsApp funcionem em desktop e mobile.
- [ ] Revisar montagem automática da mensagem pelo formulário.
- [ ] Validar campos obrigatórios e mensagens de erro.
- [ ] Validar comportamento após envio.
- [ ] Garantir que nenhuma alteração visual quebre o fluxo de contato.
- [ ] Revisar links de e-mail e localização.

### Resultado esperado

Reduzir atrito entre a intenção do visitante e o início do atendimento.

---

## 10. Fase 6 — SEO e desempenho

**Prioridade:** Média  
**Status:** Pendente

### Tarefas

- [ ] Revisar `title` da página.
- [ ] Revisar meta description.
- [ ] Revisar estrutura de headings.
- [ ] Revisar textos para SEO local em Niterói/RJ.
- [ ] Revisar atributos `alt` das imagens.
- [ ] Verificar imagens externas e locais.
- [ ] Reduzir recursos desnecessários.
- [ ] Verificar fontes e bibliotecas externas.
- [ ] Verificar carregamento e tamanho dos principais recursos.
- [ ] Validar desempenho após o redesign.

### Resultado esperado

Melhorar descoberta orgânica e desempenho sem inserir SEO artificial ou dependências desnecessárias.

---

## 11. Fase 7 — Acessibilidade e qualidade

**Prioridade:** Média  
**Status:** Pendente

### Tarefas

- [ ] Revisar contraste de textos e elementos interativos.
- [ ] Revisar navegação por teclado.
- [ ] Revisar foco de elementos interativos.
- [ ] Revisar labels e campos do formulário.
- [ ] Revisar semântica HTML.
- [ ] Revisar atributos ARIA somente onde forem necessários.
- [ ] Verificar modais de privacidade e termos.
- [ ] Verificar menu mobile.
- [ ] Verificar FAQ e demais componentes interativos.

### Resultado esperado

Melhorar a acessibilidade sem adicionar complexidade desnecessária.

---

## 12. Fase 8 — Testes e publicação

**Prioridade:** Alta  
**Status:** Pendente

### Checklist mínimo antes de publicar alterações relevantes

- [ ] Testar desktop.
- [ ] Testar mobile.
- [ ] Testar navegação interna.
- [ ] Testar menu responsivo.
- [ ] Testar formulário.
- [ ] Testar WhatsApp.
- [ ] Testar e-mail.
- [ ] Testar Google Maps.
- [ ] Testar FAQ.
- [ ] Testar modais legais.
- [ ] Testar botão voltar ao topo.
- [ ] Verificar imagens e recursos.
- [ ] Verificar console do navegador.
- [ ] Verificar links quebrados.
- [ ] Confirmar que funcionalidades existentes continuam operacionais.
- [ ] Registrar alterações relevantes no changelog.

### Resultado esperado

Publicar somente versões verificadas e sem regressões conhecidas.

---

## 13. Ordem recomendada de execução

A ordem preferencial para o desenvolvimento é:

```text
Documentação ✓
    ↓
Auditoria do código atual ✓
    ↓
Validação do conteúdo ← EM VALIDAÇÃO
    ↓
Estrutura e UX
    ↓
Redesign visual
    ↓
Conversão e contato
    ↓
SEO e desempenho
    ↓
Acessibilidade
    ↓
Testes
    ↓
Publicação
```

Essa ordem evita investir tempo em detalhes visuais antes de conhecer limitações do código e validar o conteúdo que será apresentado.

---

## 14. Próxima tarefa recomendada

A auditoria do código atual foi concluída e registrada em `AUDITORIA.md`.

A Fase 2 está em validação. A análise do código e das informações públicas confirmou o canal de WhatsApp, a atuação em Niterói/RJ e os dados atuais da prova social, mas ainda existem informações operacionais que precisam ser confirmadas antes de avançar para mudanças estruturais ou redesign visual significativo.

O próximo bloqueio é a confirmação das condições comerciais e operacionais que não podem ser inferidas com segurança apenas pelo código: garantia, peças/componentes, horários, prazo, pagamentos, regras de entrega/retirada e atendimento remoto. Os depoimentos também precisam ser confirmados ou substituídos por avaliações reais.

---

## 15. Estado do documento

**Status:** atualizado em 2026-08-20 após a primeira rodada de validação do conteúdo e da operação.

Este arquivo representa o roadmap atual do projeto e deve ser atualizado conforme as tarefas forem executadas, reordenadas ou descartadas.
