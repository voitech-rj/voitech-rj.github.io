# 10 — Como pedir uma mudança

## 1. Objetivo

Este documento define uma forma simples e consistente de solicitar alterações no website da Voitechrj.

O objetivo é reduzir ambiguidades, preservar funcionalidades existentes e permitir que qualquer alteração seja analisada no contexto correto antes da implementação.

---

## 2. Regra principal

Uma solicitação de mudança deve explicar **o que precisa mudar e qual resultado é esperado**.

Não é necessário saber programar ou indicar previamente como a alteração deve ser feita. A implementação técnica deve ser analisada a partir do código e da documentação atuais do projeto.

Quando a solicitação envolver uma alteração relevante, a IA deve:

1. Consultar `00_CONTEXT.md`.
2. Consultar a documentação relacionada ao assunto.
3. Analisar o código atual no GitHub.
4. Identificar os arquivos provavelmente afetados.
5. Explicar a solução proposta quando houver impacto estrutural, visual ou funcional relevante.
6. Aguardar autorização explícita antes de alterar o código, quando aplicável.
7. Implementar somente o escopo autorizado.
8. Validar o resultado.
9. Atualizar a documentação quando uma decisão permanente ou alteração relevante exigir registro.

---

## 3. Como escrever um pedido

Uma solicitação pode ser curta. O ideal é informar, quando possível:

- **O que mudar:** elemento, seção ou funcionalidade.
- **Onde:** página, seção ou componente afetado.
- **Problema atual:** o que está errado ou insatisfatório.
- **Resultado esperado:** como deve funcionar ou aparecer depois da mudança.
- **Restrições:** algo que não pode ser alterado.
- **Referência:** imagem, exemplo, site ou descrição visual, quando houver.

### Exemplo simples

> Quero aumentar o destaque do botão de WhatsApp no Hero, mas sem alterar o restante do layout.

### Exemplo mais completo

> Na seção de serviços, os cards estão muito grandes no celular. Quero reduzir o espaço ocupado por eles, mantendo os mesmos textos, ícones e funcionalidades. A alteração deve funcionar também no desktop sem prejudicar o layout atual.

---

## 4. Tipos de solicitação

### 4.1 Correção de problema

Use quando algo existente não funciona como deveria.

Exemplo:

> O menu mobile abre, mas não fecha quando clico em um link. Corrija o comportamento sem alterar o restante do menu.

A IA deve investigar a causa antes de propor uma correção.

---

### 4.2 Alteração visual

Use quando a aparência deve ser modificada.

Exemplo:

> Quero deixar os cards da seção de serviços mais modernos, mantendo a identidade visual atual.

Quando a alteração for relevante, deve ser considerada em conjunto com `04_IDENTIDADE_VISUAL.md` e `09_MANUTENCAO.md`.

---

### 4.3 Alteração de conteúdo

Use para textos, informações, contatos, serviços, FAQ ou outros conteúdos publicados.

Exemplo:

> Atualize o horário de atendimento para o novo horário informado abaixo.

Informações operacionais devem ser confirmadas antes da publicação.

---

### 4.4 Nova funcionalidade

Use quando algo que ainda não existe deve ser adicionado.

Exemplo:

> Quero adicionar uma seção de depoimentos abaixo dos diferenciais.

A IA deve verificar primeiro se a funcionalidade pode ser implementada de forma simples utilizando a arquitetura atual.

Mudanças que introduzam novas dependências ou alterem significativamente a arquitetura devem ser explicadas antes da implementação.

---

### 4.5 Remoção

Use quando um elemento ou funcionalidade deve deixar de existir.

Exemplo:

> Remova a seção X da página, mas mantenha os links de navegação funcionando corretamente.

A remoção deve considerar referências existentes no HTML, CSS, JavaScript e navegação.

---

## 5. Quando o pedido for apenas uma ideia

Nem toda mensagem representa uma autorização para alterar o código.

Frases como:

- "O que você acha de..."
- "Seria melhor se..."
- "Como poderíamos fazer..."
- "Me mostre uma opção..."
- "Tenho uma ideia..."

devem ser tratadas inicialmente como **planejamento ou discussão**, e não como autorização automática para modificar o projeto.

Quando houver dúvida sobre a intenção, a IA deve apresentar a proposta antes de executar uma alteração relevante.

---

## 6. Autorização para implementação

A autorização deve ser explícita quando o contexto do projeto exigir confirmação antes da alteração.

Exemplos de autorização clara:

> Pode implementar.

> Faça a alteração e dê o push.

> Pode criar o arquivo e fazer o commit.

> Pode aplicar essa solução no projeto.

Uma autorização para uma alteração específica não deve ser interpretada como autorização para mudanças não relacionadas.

---

## 7. Quando pedir análise antes de alterar

Se o usuário quiser apenas entender o problema, pode solicitar:

> Analise primeiro e não altere nada.

Nesse caso, a IA deve consultar o código e a documentação necessários, apresentar o diagnóstico e não realizar alterações.

Também é possível solicitar uma proposta:

> Analise o código e proponha a melhor solução antes de implementar.

---

## 8. Solicitações envolvendo imagens ou referências visuais

Quando houver uma imagem, captura de tela ou referência visual, ela deve ser usada como apoio para entender o resultado desejado.

O pedido deve deixar claro se a imagem é:

- apenas uma inspiração;
- uma referência de layout;
- uma referência de identidade visual;
- uma indicação precisa do que deve ser alterado.

A referência não deve ser interpretada automaticamente como autorização para substituir elementos existentes.

---

## 9. Pedidos de alteração de código

Quando o usuário fornecer um trecho de código, isso não significa necessariamente que todo o código deva ser substituído.

A IA deve:

1. Comparar o trecho com a implementação atual.
2. Identificar diferenças e impactos.
3. Preservar funcionalidades não relacionadas ao pedido.
4. Alterar somente o necessário.
5. Evitar duplicação ou soluções paralelas desnecessárias.

O código oficial deve ser consultado no GitHub antes de assumir que um trecho fornecido representa a versão atual.

---

## 10. Pedidos de commit e push

Quando o usuário solicitar explicitamente commit e push, a alteração deve ser registrada no repositório oficial `voitech-rj/voitech-rj.github.io`.

A mensagem de commit deve ser objetiva e seguir o padrão utilizado pelo projeto.

Exemplos:

```text
docs: adiciona guia para solicitar mudanças
fix: corrige menu mobile
style: ajusta cards de serviços
content: atualiza informações de atendimento
```

Antes do push, deve-se confirmar que a alteração corresponde ao escopo autorizado.

---

## 11. Solicitações ambíguas

Quando o pedido não permitir determinar com segurança o resultado esperado, a IA deve esclarecer a intenção ou apresentar as interpretações possíveis antes de realizar uma alteração relevante.

Não deve escolher uma interpretação que possa causar uma mudança estrutural ou visual importante sem confirmação.

---

## 12. Escopo da autorização

A autorização deve ser interpretada de acordo com o pedido.

Por exemplo:

> Corrija o botão do WhatsApp.

autoriza a correção relacionada ao botão, mas não autoriza automaticamente:

- refazer o Header;
- alterar a identidade visual;
- substituir bibliotecas;
- reorganizar a arquitetura;
- modificar outras seções sem relação com o problema.

Se uma solução exigir uma alteração fora do escopo original, essa alteração deve ser apresentada antes de ser executada.

---

## 13. Documentação relacionada

| Necessidade | Documento |
|---|---|
| Contexto geral e regras do projeto | `00_CONTEXT.md` |
| Requisitos e objetivos | `01_PRD.md` |
| Estrutura técnica | `02_ARQUITETURA.md` |
| Decisões técnicas permanentes | `03_DECISOES_TECNICAS.md` |
| Identidade visual | `04_IDENTIDADE_VISUAL.md` |
| Conteúdo publicado | `05_CONTEUDO.md` |
| Tarefas e planejamento | `06_TAREFAS.md` |
| Histórico de alterações | `07_CHANGELOG.md` |
| Problemas conhecidos | `08_ERROS.md` |
| Processo de manutenção | `09_MANUTENCAO.md` |
| Como solicitar alterações | `10_COMO-PEDIR-MUDANCA.md` |

A documentação relacionada deve ser consultada conforme o tipo de solicitação.

---

## 14. Modelo recomendado

Quando quiser fazer uma solicitação mais detalhada, pode utilizar este modelo:

```text
OBJETIVO:
[O que quero mudar]

LOCAL:
[Seção, componente ou arquivo, se souber]

PROBLEMA ATUAL:
[O que está acontecendo hoje]

RESULTADO ESPERADO:
[Como deve ficar ou funcionar]

NÃO ALTERAR:
[Funcionalidades, elementos ou comportamentos que devem ser preservados]

REFERÊNCIA:
[Imagem, exemplo ou observação, se houver]

AUTORIZAÇÃO:
[Analisar apenas / propor solução / implementar / implementar e dar push]
```

O modelo é opcional. Uma solicitação simples e clara também é suficiente.

---

## 15. Regra para IA

Ao receber uma solicitação de mudança, a IA deve priorizar:

1. Entender a intenção do usuário.
2. Consultar a documentação relevante.
3. Verificar o código atual no GitHub.
4. Separar ideia, análise, proposta e autorização de implementação.
5. Preservar funcionalidades existentes.
6. Evitar mudanças fora do escopo.
7. Preferir a solução mais simples e compatível com a arquitetura atual.
8. Registrar decisões permanentes quando necessário.
9. Validar alterações antes de considerá-las concluídas.
10. Usar o repositório oficial como fonte de verdade do código.

---

## 16. Estado do documento

**Status:** documento inicial.

Este arquivo define o processo inicial para solicitar alterações no website. Deve ser atualizado caso o fluxo de planejamento, autorização, implementação ou publicação do projeto seja alterado de forma relevante.
