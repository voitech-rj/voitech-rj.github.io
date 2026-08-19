# 09 — Manutenção do projeto

## 1. Objetivo

Este documento define como o website da Voitechrj deve ser mantido depois de publicado, reduzindo alterações desnecessárias, regressões e perda de contexto técnico.

A manutenção deve preservar a estabilidade do site, manter o conteúdo atualizado e facilitar futuras correções e evoluções.

---

## 2. Fonte de verdade

O código oficial do projeto está no repositório:

`voitech-rj/voitech-rj.github.io`

A branch principal é `main` e a publicação é realizada pelo GitHub Pages.

A documentação existente no próprio repositório deve ser consultada antes de alterações relevantes.

---

## 3. Princípios de manutenção

Toda manutenção deve seguir estas regras:

1. Entender o problema antes de alterar o código.
2. Consultar `00_CONTEXT.md` antes de alterações relevantes.
3. Consultar a documentação específica relacionada ao problema.
4. Analisar o código existente antes de substituí-lo.
5. Alterar somente o necessário para resolver o objetivo.
6. Preservar funcionalidades que não fazem parte da solicitação.
7. Priorizar HTML, CSS e JavaScript nativos já utilizados pelo projeto.
8. Evitar dependências externas desnecessárias.
9. Considerar desktop e mobile em alterações visuais ou responsivas.
10. Verificar regressões após alterações relevantes.
11. Registrar problemas reais em `08_ERROS.md`.
12. Registrar alterações relevantes em `07_CHANGELOG.md`.
13. Registrar decisões permanentes em `03_DECISOES_TECNICAS.md`.
14. Manter este documento atualizado quando o processo de manutenção mudar.

---

## 4. Manutenção preventiva

A manutenção preventiva deve ocorrer periodicamente ou sempre que houver uma alteração relevante no projeto.

### 4.1 Código

Verificar, quando aplicável:

- `index.html`;
- `style.css`;
- `script.js`;
- estrutura de `assets/`;
- códigos duplicados;
- código obsoleto;
- referências para arquivos inexistentes;
- funções JavaScript que deixaram de ser utilizadas;
- seletores CSS sem uso conhecido.

Não remover código apenas por parecer desnecessário. A remoção deve ser baseada em análise do uso e validada para evitar regressões.

### 4.2 Conteúdo

Verificar se continuam corretos:

- serviços oferecidos;
- horários de atendimento;
- formas de contato;
- número do WhatsApp;
- endereço e regras de entrega/retirada;
- informações de atendimento remoto;
- formas de pagamento;
- prazos e condições de serviço;
- avaliações e depoimentos;
- FAQ;
- links externos.

Informações operacionais devem ser confirmadas antes de serem publicadas como definitivas.

### 4.3 Recursos externos

Verificar periodicamente:

- Google Fonts;
- biblioteca de ícones Lucide;
- imagens externas;
- links para WhatsApp;
- Google Maps;
- links de avaliações;
- outros serviços externos presentes no código.

Uma dependência externa só deve ser substituída ou removida após verificar seu impacto no site.

---

## 5. Manutenção corretiva

Quando um problema for identificado:

1. Confirmar o problema.
2. Registrar ou atualizar o problema em `08_ERROS.md` quando ele for relevante.
3. Identificar o arquivo ou recurso envolvido.
4. Investigar a causa antes da correção.
5. Avaliar possíveis efeitos colaterais.
6. Definir a menor alteração necessária.
7. Implementar somente após a autorização aplicável.
8. Validar a correção.
9. Verificar funcionalidades relacionadas.
10. Registrar a alteração em `07_CHANGELOG.md` quando publicada.
11. Atualizar `08_ERROS.md` com a solução e validação quando houver registro do problema.

---

## 6. Alterações de conteúdo

Alterações de conteúdo podem envolver textos, contatos, serviços, imagens, FAQ ou informações operacionais.

Antes de publicar:

- verificar se a informação é verdadeira e atual;
- manter consistência entre as diferentes seções do site;
- verificar versão desktop e mobile;
- verificar links e chamadas para ação;
- evitar alterações que contradigam o `01_PRD.md` ou `05_CONTEUDO.md` sem atualizar a documentação correspondente.

Alterações puramente editoriais não devem gerar decisões técnicas desnecessárias.

---

## 7. Alterações visuais

Alterações de identidade visual, layout, tipografia, cores, espaçamento ou componentes devem considerar o sistema visual completo descrito em `04_IDENTIDADE_VISUAL.md`.

Antes de publicar uma alteração visual relevante:

- verificar desktop;
- verificar mobile;
- verificar diferentes larguras de tela;
- verificar contraste e legibilidade;
- verificar estados interativos;
- verificar se o conteúdo continua acessível;
- verificar se a alteração não prejudica conversão ou navegação.

Mudanças estruturais permanentes devem ser registradas em `03_DECISOES_TECNICAS.md` quando aplicável.

---

## 8. JavaScript e funcionalidades interativas

O JavaScript atual possui funcionalidades relacionadas a menu, formulário, FAQ, modais, rolagem e botão de voltar ao topo.

Ao alterar `script.js`:

1. Identificar as funções e eventos afetados.
2. Verificar dependências entre elementos HTML e JavaScript.
3. Evitar alterar comportamentos não relacionados à tarefa.
4. Testar os componentes interativos afetados.
5. Verificar o console do navegador.
6. Testar desktop e mobile quando houver impacto responsivo.

Especial atenção deve ser dada a:

- `openModal`;
- `closeModal`;
- menu responsivo;
- formulário de agendamento;
- montagem da mensagem para WhatsApp;
- FAQ;
- modais legais;
- botão voltar ao topo.

---

## 9. Publicação

O site é publicado a partir do GitHub Pages.

Antes de uma publicação relevante, utilizar como referência o checklist de testes definido em `06_TAREFAS.md`.

O mínimo recomendado é verificar:

- carregamento da página;
- navegação interna;
- menu mobile;
- formulário;
- WhatsApp;
- e-mail;
- Google Maps;
- FAQ;
- modais legais;
- botão voltar ao topo;
- imagens;
- console do navegador;
- links quebrados;
- comportamento em desktop e mobile.

Após a publicação, confirmar que a versão disponibilizada corresponde à alteração pretendida.

---

## 10. Git e histórico

As alterações devem ser pequenas e coerentes sempre que possível.

Mensagens de commit devem indicar claramente o objetivo da alteração.

Exemplos:

```text
docs: atualiza documentação de manutenção
fix: corrige comportamento do menu mobile
style: ajusta espaçamento da seção de serviços
content: atualiza informações de contato
refactor: reorganiza código JavaScript sem alterar comportamento
```

Não utilizar commits genéricos como `update`, `teste` ou `mudanças` quando uma descrição objetiva for possível.

---

## 11. Documentação durante a manutenção

A documentação deve acompanhar a evolução real do projeto.

| Situação | Documento relacionado |
|---|---|
| Contexto geral ou regra fundamental | `00_CONTEXT.md` |
| Requisito ou objetivo do produto | `01_PRD.md` |
| Estrutura técnica | `02_ARQUITETURA.md` |
| Decisão técnica permanente | `03_DECISOES_TECNICAS.md` |
| Identidade visual | `04_IDENTIDADE_VISUAL.md` |
| Conteúdo e informações publicadas | `05_CONTEUDO.md` |
| Planejamento e tarefas | `06_TAREFAS.md` |
| Histórico de alterações | `07_CHANGELOG.md` |
| Erros e problemas conhecidos | `08_ERROS.md` |
| Processo de manutenção | `09_MANUTENCAO.md` |
| Forma de solicitar mudanças | `10_COMO-PEDIR-MUDANCA.md` |

Não atualizar documentos apenas para registrar alterações triviais que não mudem o conhecimento necessário para manutenção do projeto.

---

## 12. Backup e recuperação

O repositório GitHub é a fonte oficial do código e mantém o histórico das alterações versionadas.

Antes de alterações de maior risco:

- confirmar que o estado atual está versionado;
- identificar o commit de referência;
- evitar alterações destrutivas sem necessidade;
- manter uma forma clara de identificar a versão anterior.

Em caso de regressão, a prioridade deve ser identificar a alteração responsável e restaurar uma versão estável quando necessário, em vez de realizar várias alterações simultâneas sem diagnóstico.

---

## 13. Frequência recomendada

Não é necessário estabelecer uma manutenção automática para todas as verificações. A frequência deve acompanhar o nível de alteração do site.

### Rotina contínua

- Corrigir problemas confirmados.
- Atualizar informações operacionais quando houver mudança.
- Registrar alterações relevantes.

### Após alterações relevantes

- Executar o checklist de testes.
- Verificar desktop e mobile.
- Verificar console e links.
- Confirmar ausência de regressões conhecidas.

### Revisão periódica

Quando houver tempo ou necessidade de evolução do projeto:

- revisar código obsoleto;
- revisar dependências externas;
- revisar imagens e recursos;
- revisar SEO básico;
- revisar acessibilidade;
- revisar desempenho;
- revisar documentação.

---

## 14. Regra para manutenção futura por IA

Uma IA que atuar no projeto deve:

1. Consultar `00_CONTEXT.md`.
2. Consultar este documento e os documentos relacionados à tarefa.
3. Verificar o estado atual do código no GitHub.
4. Identificar os arquivos afetados antes de propor alterações.
5. Explicar alterações estruturais quando houver impacto relevante.
6. Não modificar funcionalidades fora do escopo solicitado.
7. Não criar dependências sem justificativa.
8. Não alterar o código diretamente sem autorização explícita quando essa autorização for exigida pelo contexto do projeto.
9. Registrar decisões permanentes na documentação correspondente.
10. Validar o resultado antes de considerar a manutenção concluída.

---

## 15. Estado do documento

**Status:** documento inicial.

Este arquivo define o processo inicial de manutenção do website e deve ser atualizado quando o processo de desenvolvimento, publicação, validação ou recuperação do projeto mudar de forma relevante.
