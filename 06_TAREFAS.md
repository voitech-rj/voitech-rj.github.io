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
- [ ] Criar `07_CHANGELOG.md`.
- [ ] Criar `08_ERROS.md`.
- [ ] Criar `09_MANUTENCAO.md`.
- [ ] Criar `10_COMO-PEDIR-MUDANCA.md`.

### Resultado esperado

Ter uma base documental suficiente para orientar o desenvolvimento sem depender exclusivamente do histórico das conversas.

---

## 5. Fase 1 — Auditoria do código atual

**Prioridade:** Alta  
**Status:** Pendente

### Tarefas

- [ ] Analisar `index.html` integralmente.
- [ ] Analisar `style.css` integralmente.
- [ ] Analisar `script.js` integralmente.
- [ ] Mapear a estrutura de `assets/`.
- [ ] Identificar dependências externas utilizadas atualmente.
- [ ] Identificar funcionalidades JavaScript existentes.
- [ ] Identificar possíveis códigos duplicados ou obsoletos.
- [ ] Identificar problemas de responsividade.
- [ ] Identificar problemas de acessibilidade.
- [ ] Identificar problemas básicos de SEO técnico.
- [ ] Identificar imagens e recursos que podem impactar desempenho.
- [ ] Registrar riscos e problemas encontrados antes do redesign.

### Resultado esperado

Obter uma visão objetiva do estado atual do site e evitar alterações baseadas em suposições.

---

## 6. Fase 2 — Validação do conteúdo e operação

**Prioridade:** Alta  
**Status:** Pendente

### Tarefas

- [ ] Validar textos da Hero.
- [ ] Validar serviços realmente oferecidos.
- [ ] Validar diferenciais e promessas comerciais.
- [ ] Validar informações sobre garantia.
- [ ] Validar informações sobre peças e componentes.
- [ ] Validar horários de atendimento.
- [ ] Validar prazo de atendimento.
- [ ] Validar formas de pagamento.
- [ ] Validar endereço e regras de entrega/retirada.
- [ ] Validar disponibilidade de atendimento remoto.
- [ ] Validar quantidade e nota das avaliações exibidas.
- [ ] Substituir ou confirmar depoimentos atualmente demonstrativos.
- [ ] Revisar FAQ com base nas informações operacionais confirmadas.

### Resultado esperado

Garantir que o conteúdo publicado represente a operação real da Voitechrj.

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
Documentação
    ↓
Auditoria do código atual
    ↓
Validação do conteúdo
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

A próxima tarefa de desenvolvimento é a **auditoria do código atual**.

Antes dela, recomenda-se concluir a documentação básica restante somente quando os documentos realmente agregarem informação útil ao projeto.

A auditoria deve analisar principalmente `index.html`, `style.css`, `script.js` e `assets/`, registrando problemas e oportunidades antes de qualquer redesign estrutural.

---

## 15. Estado do documento

**Status:** documento inicial.

Este arquivo representa o roadmap inicial do projeto e deve ser atualizado conforme as tarefas forem executadas, reordenadas ou descartadas.
