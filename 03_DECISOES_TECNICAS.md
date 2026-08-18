# 03 — Decisões Técnicas

## 1. Objetivo deste documento

Este documento registra decisões técnicas permanentes ou relevantes para a evolução do Voitechrj Website.

As decisões aqui registradas complementam o `00_CONTEXT.md`, o `01_PRD.md` e o `02_ARQUITETURA.md`. O objetivo é evitar que decisões já tomadas sejam reavaliadas ou alteradas sem uma justificativa técnica clara.

Uma decisão pode ser revisada no futuro quando os requisitos do produto mudarem. Nesse caso, a nova decisão deve substituir ou atualizar explicitamente a anterior e, quando necessário, os documentos relacionados também devem ser atualizados.

---

## 2. Fonte oficial do código

**Decisão:** o repositório GitHub `voitech-rj/voitech-rj.github.io` é a fonte oficial do código do website.

- Alterações devem considerar o estado atual do repositório antes da implementação.
- O código presente no GitHub deve ser tratado como referência principal para o estado do projeto.
- Arquivos ou versões existentes apenas em ambientes locais ou conversas não são a versão oficial sem serem incorporados ao repositório.

---

## 3. Branch principal e publicação

**Decisão:** a branch principal de desenvolvimento/publicação é `main`, e o website é publicado pelo GitHub Pages.

```text
Alteração → Git → GitHub / main → GitHub Pages → Website publicado
```

Mudanças na estratégia de publicação devem ser tratadas como decisão arquitetural e documentadas antes de serem adotadas.

---

## 4. Arquitetura estática

**Decisão:** o website permanece, no estado atual, como uma página institucional estática de página única (single page).

A implementação utiliza HTML5, CSS3 e JavaScript. Não existe backend próprio, banco de dados, autenticação ou painel administrativo.

**Motivo:** essa estrutura atende aos requisitos atuais com menor complexidade operacional, baixo número de dependências e manutenção simples.

---

## 5. Preferência por tecnologias nativas

**Decisão:** HTML, CSS e JavaScript nativos devem ser preferidos quando forem suficientes para atender aos requisitos.

Frameworks, bibliotecas ou outras tecnologias não devem ser adicionados apenas por modernização ou conveniência pontual. Uma nova dependência deve ser considerada somente quando houver benefício técnico concreto, como redução significativa de complexidade, funcionalidade difícil de implementar de forma nativa, melhoria relevante de manutenção ou requisito de produto que a implementação atual não consiga atender adequadamente.

Quando uma nova dependência principal for adotada, a decisão deve ser registrada neste documento e a arquitetura relacionada deve ser atualizada quando necessário.

---

## 6. Separação entre estrutura, apresentação e comportamento

**Decisão:** manter a separação lógica entre `index.html` (estrutura e conteúdo), `style.css` (apresentação visual) e `script.js` (comportamento e interações).

Essa separação deve ser preservada durante a manutenção sempre que não houver motivo técnico para alterá-la.

---

## 7. Preservação das funcionalidades existentes

**Decisão:** alterações devem preservar funcionalidades existentes que não façam parte da mudança solicitada.

Antes de substituir ou remover código, deve-se identificar sua finalidade, verificar dependências e impactos, confirmar se a funcionalidade ainda é necessária e implementar a alteração sem causar regressões não planejadas.

Uma refatoração não deve ser utilizada como justificativa automática para remover comportamentos existentes.

---

## 8. Evolução incremental

**Decisão:** a evolução deve ocorrer incrementalmente, priorizando a melhoria da implementação existente antes de uma substituição completa.

```text
Melhorar o código existente
        ↓
Reorganizar quando necessário
        ↓
Extrair componentes quando houver repetição real
        ↓
Adicionar dependências quando justificadas
        ↓
Alterar a arquitetura somente quando necessário
```

Uma reescrita completa deve ser considerada somente quando a arquitetura atual deixar de atender aos requisitos ou quando sua manutenção se tornar tecnicamente inadequada.

---

## 9. Dependências e integrações externas

**Decisão:** novas dependências e integrações externas devem ser avaliadas antes da inclusão, considerando necessidade real, desempenho, disponibilidade, privacidade, segurança, manutenção futura e possibilidade de resolver o requisito com recursos nativos.

As integrações atuais, como Google Fonts, Lucide Icons, WhatsApp, Google Maps, Google Reviews e recursos externos de imagem, fazem parte do estado atual do projeto e não devem ser removidas ou substituídas sem análise.

---

## 10. Ausência de backend e persistência

**Decisão:** não introduzir backend, banco de dados ou persistência própria enquanto os requisitos do produto não exigirem essas capacidades.

O formulário de agendamento atualmente monta a mensagem no navegador e direciona o usuário para o WhatsApp. O website não mantém uma base própria de clientes ou solicitações.

A criação de backend ou persistência representa uma mudança arquitetural e deverá ser precedida de uma decisão específica.

---

## 11. WhatsApp como principal canal de conversão

**Decisão:** o WhatsApp permanece como principal canal de conversão enquanto o modelo de atendimento atual continuar baseado no contato direto.

O formulário de agendamento deve continuar funcionando como facilitador desse contato, e não como um sistema independente de agendamento com armazenamento próprio.

---

## 12. Responsividade

**Decisão:** responsividade é requisito estrutural, não uma etapa posterior. Desktop, notebook, tablet e smartphone devem ser considerados durante a implementação.

Navegação, tipografia, espaçamento, cards, formulários, botões, imagens e animações devem ser avaliados em diferentes larguras de tela.

---

## 13. Identidade visual como sistema

**Decisão:** alterações visuais devem considerar o website como um sistema visual único. Cores, tipografia, espaçamentos, componentes, cards, botões e tratamentos de seção não devem ser modificados de forma isolada quando isso causar inconsistência no restante da interface.

A identidade visual específica deve ser detalhada no `04_IDENTIDADE_VISUAL.md` quando esse documento for desenvolvido.

---

## 14. CSS e centralização de valores

**Decisão:** manter o uso de variáveis CSS para valores globais da interface, especialmente cores e tipografia, quando isso já estiver presente na implementação.

Novos valores recorrentes devem preferencialmente utilizar o mecanismo existente em vez de duplicar valores diretamente em diversos seletores.

---

## 15. Acessibilidade

**Decisão:** acessibilidade deve ser considerada durante alterações estruturais, visuais e funcionais.

Devem ser priorizados HTML semântico, navegação por teclado, contraste adequado, textos legíveis, estados visuais claros, uso correto de links e botões, identificação adequada de campos de formulário e recursos ARIA quando realmente necessários.

---

## 16. Desempenho

**Decisão:** desempenho é requisito permanente. A implementação deve priorizar baixo número de dependências, imagens otimizadas, código simples, carregamento rápido, redução de recursos externos desnecessários e evitar processamento JavaScript sem necessidade.

Novos recursos visuais ou animações devem ser avaliados também pelo impacto no desempenho, especialmente em dispositivos móveis.

---

## 17. SEO

**Decisão:** melhorias de SEO devem ser realizadas dentro da arquitetura estática atual sempre que possível.

Devem ser considerados título e descrição da página, hierarquia de headings, conteúdo textual relevante, atributos `alt`, links adequados, desempenho, experiência mobile e contexto local da Voitechrj em Niterói/RJ.

Dados estruturados ou outras técnicas adicionais devem ser adotados somente quando houver benefício claro e compatibilidade com a natureza institucional do site.

---

## 18. Critério para mudança arquitetural

Uma alteração deve ser tratada como arquitetural quando modificar significativamente a stack tecnológica, estrutura principal de arquivos, dependências principais, forma de publicação, fluxo de dados, existência de backend, persistência, modelo de navegação, integrações externas relevantes ou forma de manutenção.

Mudanças desse tipo devem ser propostas, avaliadas e registradas na documentação correspondente.

---

## 19. Regra para alterações no código

Antes de alterações relevantes:

1. consultar o `00_CONTEXT.md`;
2. consultar o documento relacionado ao assunto;
3. analisar o código atual;
4. identificar arquivos e funcionalidades afetados;
5. avaliar impactos e possíveis regressões;
6. definir a solução mais simples que atenda ao requisito;
7. implementar somente após autorização quando a alteração for relevante;
8. verificar desktop e mobile;
9. verificar as funcionalidades existentes;
10. atualizar a documentação quando uma decisão permanente tiver sido tomada.

Alterações diretas na branch `main` exigem autorização explícita.

---

## 20. Documentação como parte do projeto

**Decisão:** a documentação faz parte do projeto e deve acompanhar sua evolução.

```text
00_CONTEXT.md
01_PRD.md
02_ARQUITETURA.md
03_DECISOES_TECNICAS.md
04_IDENTIDADE_VISUAL.md
05_CONTEUDO.md
06_TAREFAS.md
07_CHANGELOG.md
08_ERROS.md
09_MANUTENCAO.md
10_COMO-PEDIR-MUDANCA.md
```

Nem todo documento precisa existir imediatamente. Ele deve ser criado quando houver conteúdo real e útil para o projeto.

---

## 21. Regra para uso de IA

Qualquer IA utilizada no projeto deve consultar a documentação antes de alterações relevantes, analisar o código existente antes de propor substituições, preservar funcionalidades não relacionadas à solicitação, evitar introduzir tecnologias sem justificativa, explicar mudanças estruturais antes da execução, registrar decisões permanentes e utilizar o GitHub como fonte oficial do código.

A IA não deve presumir que uma tecnologia mais moderna é automaticamente uma solução melhor para este projeto.

---

## 22. Decisões que exigem reavaliação futura

As decisões deste documento permanecem válidas enquanto os requisitos atuais forem mantidos.

Devem ser reavaliadas caso o website passe a exigir autenticação, armazenamento de dados de clientes, agendamento com disponibilidade real, painel administrativo, pagamentos online, e-commerce, gerenciamento de solicitações ou integrações que exijam backend.

Nessas situações, deve-se avaliar a arquitetura como um todo e registrar a nova decisão, em vez de adicionar complexidade apenas para contornar um problema local.

---

## 23. Estado das decisões

**Status:** documento inicial.

Este documento consolida as decisões técnicas conhecidas no momento da definição da arquitetura do projeto. As decisões devem ser atualizadas quando houver mudança permanente na arquitetura, stack, integrações, processo de publicação ou princípios técnicos do website.
