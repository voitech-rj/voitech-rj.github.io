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

### 2026-08-20 — Estrutura inicial de documentação

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

### Próxima etapa — Revisão visual e UX

- Continuar o redesign progressivo do website a partir da Hero.
- Preservar as funcionalidades e regras operacionais já definidas.

---

## 5. Estado do documento

**Status:** documento em manutenção.

Este arquivo deve ser atualizado conforme alterações relevantes sejam realizadas e validadas no projeto.
