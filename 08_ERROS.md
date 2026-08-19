# 08 — Erros e problemas conhecidos

## 1. Objetivo

Este documento registra erros, problemas, comportamentos inesperados e regressões identificados durante o desenvolvimento, manutenção e validação do website da Voitechrj.

O objetivo é evitar que problemas conhecidos sejam esquecidos, facilitar a investigação e registrar a solução aplicada quando um problema for resolvido.

Este documento deve conter somente problemas realmente identificados no projeto. Não devem ser registrados erros hipotéticos apenas para preencher a documentação.

---

## 2. Relação com a documentação do projeto

Este documento complementa:

- `00_CONTEXT.md` — contexto e regras gerais do projeto;
- `02_ARQUITETURA.md` — estrutura técnica;
- `03_DECISOES_TECNICAS.md` — decisões técnicas permanentes;
- `06_TAREFAS.md` — planejamento e execução das atividades;
- `07_CHANGELOG.md` — histórico de alterações publicadas.

Um problema identificado durante uma tarefa pode ser registrado aqui e também refletido em `06_TAREFAS.md` quando exigir uma ação futura.

Quando a solução de um erro resultar em uma decisão estrutural ou permanente, a decisão correspondente deve ser registrada em `03_DECISOES_TECNICAS.md`.

---

## 3. Status dos problemas

Os status utilizados são:

- **Aberto** — problema confirmado e ainda não resolvido.
- **Em investigação** — causa ou solução ainda está sendo analisada.
- **Em correção** — solução em implementação.
- **Resolvido** — correção realizada e validada.
- **Não reproduzido** — problema relatado, mas que não pôde ser reproduzido.
- **Descartado** — após análise, deixou de ser considerado um problema ou ficou fora do escopo.
- **Adiado** — problema confirmado, mas sua correção foi deliberadamente postergada.

---

## 4. Classificação

Os problemas podem ser classificados como:

- **Funcional** — uma funcionalidade não funciona como esperado.
- **Visual** — problema de layout, aparência ou consistência visual.
- **Responsividade** — comportamento incorreto em determinadas larguras ou dispositivos.
- **JavaScript** — erro ou comportamento inesperado relacionado ao código JavaScript.
- **HTML/CSS** — problema estrutural ou de estilos.
- **Conteúdo** — informação incorreta, incompleta ou desatualizada.
- **SEO** — problema relacionado à indexação ou estrutura básica de SEO.
- **Acessibilidade** — dificuldade de uso relacionada à acessibilidade.
- **Desempenho** — carregamento ou uso excessivo de recursos.
- **Integração** — problema envolvendo serviços externos, como WhatsApp, Google Maps ou Google Fonts.
- **Publicação** — problema relacionado ao GitHub Pages ou ao processo de publicação.

---

## 5. Registro de problemas

Cada problema confirmado deve, sempre que possível, registrar:

```text
ID:
Data:
Status:
Categoria:
Arquivo(s) afetado(s):
Descrição:
Como reproduzir:
Comportamento esperado:
Comportamento atual:
Causa:
Solução:
Validação:
Observações:
```

O registro deve ser objetivo e conter informações suficientes para que outra pessoa consiga entender o problema sem depender do histórico da conversa em que ele foi encontrado.

---

## 6. Problemas conhecidos

### Nenhum problema confirmado registrado até o momento

A documentação inicial do projeto ainda não realizou a auditoria completa de `index.html`, `style.css`, `script.js` e `assets/`. Portanto, não há neste momento uma lista técnica confiável de erros conhecidos que deva ser registrada aqui.

Problemas somente devem ser adicionados após serem observados, reproduzidos ou confirmados por análise do código ou dos recursos publicados.

---

## 7. Processo para tratamento de erros

Quando um problema for identificado:

1. Registrar uma descrição objetiva do problema.
2. Informar como reproduzi-lo, quando aplicável.
3. Identificar os arquivos e funcionalidades envolvidos.
4. Investigar a causa antes de alterar o código.
5. Avaliar se o problema possui impacto em outras funcionalidades.
6. Implementar a correção somente após a análise necessária e autorização quando aplicável.
7. Validar a correção em desktop e mobile quando houver impacto visual ou responsivo.
8. Verificar se funcionalidades existentes continuam funcionando.
9. Registrar a solução e a validação realizada.
10. Atualizar `07_CHANGELOG.md` quando a correção resultar em alteração publicada relevante.
11. Atualizar `06_TAREFAS.md` quando o problema gerar uma tarefa de manutenção ou desenvolvimento.
12. Atualizar `03_DECISOES_TECNICAS.md` quando a correção estabelecer uma decisão técnica permanente.

---

## 8. Regra para regressões

Uma regressão ocorre quando uma alteração introduz um problema em uma funcionalidade que anteriormente funcionava.

Regressões devem receber prioridade adequada ao impacto e, quando possível, devem ser vinculadas à alteração que as introduziu.

Antes de considerar uma alteração concluída, devem ser verificadas as funcionalidades existentes relacionadas ao arquivo ou componente modificado.

---

## 9. Relação com a auditoria

A auditoria prevista em `06_TAREFAS.md` deve servir como uma das principais fontes para a primeira atualização técnica deste documento.

Durante a auditoria, devem ser avaliados pelo menos:

- `index.html`;
- `style.css`;
- `script.js`;
- `assets/`;
- dependências externas;
- funcionalidades JavaScript;
- responsividade;
- acessibilidade;
- SEO técnico básico;
- desempenho;
- links e integrações.

Somente problemas confirmados devem ser registrados como erros.

---

## 10. Estado do documento

**Status:** documento inicial.

Este arquivo será atualizado conforme problemas reais forem identificados, investigados, corrigidos ou descartados durante a evolução do website.
