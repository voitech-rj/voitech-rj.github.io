# PRD — Voitechrj Website

## 1. Visão do produto

O projeto Voitechrj Website é o website institucional da Voitechrj.

O site funciona como uma vitrine digital da empresa, apresentando seus serviços de manutenção de equipamentos de informática, diferenciais, formas de contato e informações necessárias para que potenciais clientes conheçam a empresa e iniciem um atendimento.

O website deve transmitir profissionalismo, confiança, clareza e facilidade de contato, funcionando principalmente como uma ponte entre o visitante e o atendimento da Voitechrj.

---

## 2. Objetivos

### Objetivo principal

Apresentar a Voitechrj e seus serviços de forma profissional, clara, responsiva e confiável, facilitando a conversão de visitantes em contatos e solicitações de atendimento.

### Objetivos secundários

- Apresentar os principais serviços oferecidos.
- Demonstrar os diferenciais da empresa.
- Transmitir confiança e credibilidade.
- Facilitar o contato pelo WhatsApp.
- Permitir que o visitante encontre rapidamente as informações relevantes.
- Apresentar avaliações e prova social.
- Disponibilizar informações institucionais e legais.
- Oferecer boa experiência em dispositivos móveis.
- Servir como presença digital oficial da Voitechrj.

---

## 3. Público-alvo

O público principal é formado por pessoas que precisam de manutenção ou suporte para computadores e notebooks.

Entre os possíveis visitantes estão:

- usuários domésticos;
- pessoas com computadores lentos ou apresentando problemas;
- usuários que precisam realizar manutenção preventiva;
- pessoas interessadas em upgrade ou instalação de SSD;
- usuários que precisam de formatação;
- pessoas que necessitam de limpeza interna ou troca de pasta térmica;
- potenciais clientes que procuram uma empresa ou profissional de confiança em Niterói/RJ.

---

## 4. Proposta de valor

A Voitechrj busca oferecer manutenção de informática com comunicação clara, atendimento direto, transparência e foco na solução do problema do cliente.

O site deve reforçar principalmente:

- confiança;
- transparência;
- rapidez;
- custo-benefício;
- atendimento dedicado;
- qualidade do serviço;
- facilidade de contato.

A comunicação não deve transmitir a imagem de uma grande assistência técnica ou loja física tradicional quando isso não corresponder à realidade da empresa.

---

## 5. Objetivos de negócio

O website deve contribuir para:

1. aumentar a visibilidade digital da Voitechrj;
2. gerar novos contatos;
3. facilitar solicitações de orçamento ou atendimento;
4. apresentar os serviços de maneira mais profissional;
5. reforçar a credibilidade da empresa;
6. facilitar o acesso às avaliações;
7. melhorar a experiência de potenciais clientes antes do contato.

O site não tem como objetivo principal realizar vendas diretamente pela página.

---

## 6. Estrutura e conteúdo atual

A implementação atual é uma página única (single page).

As principais seções existentes são:

### Header

Contém a identificação da empresa e navegação pelas principais seções.

Possui comportamento responsivo com menu específico para dispositivos móveis.

### Hero

Apresenta a mensagem principal:

> Sua Solução Rápida e Confiável.

Funciona como a principal área de apresentação do serviço.

### Prova social

Área destinada a avaliações e elementos de credibilidade.

### Serviços / Diferenciais

A implementação atual apresenta serviços como:

- Instalação de SSD;
- Limpeza Completa;
- Troca de Pasta Térmica;
- Formatação.

### Diferenciais

A seção apresenta motivos para escolher a Voitechrj, incluindo:

- Transparência;
- Rapidez e Eficiência;
- Custo-Benefício;
- Suporte Dedicado;
- Garantia de Satisfação;
- Peças de Qualidade.

### Benefícios / apresentação

Seção com a mensagem:

> Mais do que Manutenção, Oferecemos Tranquilidade

Destinada a reforçar a proposta da empresa.

### Agendamento

Possui formulário para coleta de informações do cliente.

O formulário utiliza JavaScript para montar uma mensagem e direcionar o contato para o WhatsApp.

### FAQ

Área de dúvidas frequentes com comportamento interativo.

### Informações legais

O site possui modais para:

- Política de Privacidade;
- Termos de Serviço.

### Footer

Apresenta informações institucionais e links rápidos.

### Botão voltar ao topo

Permite retornar rapidamente ao início da página.

---

## 7. Funcionalidades atuais

### Navegação

- navegação interna por âncoras;
- menu desktop;
- menu mobile;
- botão de abertura e fechamento do menu.

### Formulário

O formulário de agendamento possui campos para identificação do cliente e resumo da solicitação.

Os dados são utilizados para gerar uma mensagem destinada ao WhatsApp.

### FAQ

As perguntas possuem comportamento de expansão/recolhimento utilizando JavaScript.

### Modais

Abertura e fechamento dos modais de Política de Privacidade e Termos de Serviço.

### Ícones

O projeto utiliza Lucide Icons.

### Animações

O JavaScript atual utiliza recursos de interação e observação de elementos para animações durante a navegação.

---

## 8. Experiência do usuário

O visitante deve conseguir compreender rapidamente:

1. quem é a Voitechrj;
2. quais serviços são oferecidos;
3. por que pode confiar no serviço;
4. como entrar em contato;
5. como solicitar atendimento.

A navegação deve exigir o mínimo possível de esforço.

Informações importantes devem permanecer facilmente acessíveis, principalmente:

- serviços;
- contato;
- WhatsApp;
- localização;
- avaliações;
- dúvidas frequentes.

---

## 9. Requisitos funcionais

O website deve:

- funcionar como página institucional;
- permitir navegação entre as seções;
- possuir navegação responsiva;
- apresentar os serviços;
- apresentar os diferenciais;
- disponibilizar FAQ;
- disponibilizar formulário de contato/agendamento;
- permitir encaminhamento do atendimento para WhatsApp;
- apresentar avaliações/prova social;
- disponibilizar informações legais;
- possuir botão de retorno ao topo;
- manter as funcionalidades existentes durante alterações, salvo quando uma alteração for explicitamente planejada.

---

## 10. Requisitos não funcionais

O projeto deve priorizar:

### Desempenho

- carregamento rápido;
- baixo número de dependências;
- imagens otimizadas;
- código simples;
- evitar bibliotecas desnecessárias.

### Manutenção

- código organizado;
- separação adequada entre HTML, CSS e JavaScript;
- evitar duplicação desnecessária;
- alterações estruturais devem ser documentadas.

### Compatibilidade

O site deve funcionar adequadamente nos principais navegadores modernos e em diferentes tamanhos de tela.

### Segurança

Não devem ser introduzidas dependências ou serviços externos sem necessidade.

Dados enviados pelo usuário devem ser tratados apenas dentro das funcionalidades previstas.

---

## 11. Responsividade

A experiência deve ser adequada para:

- desktop;
- notebook;
- tablet;
- smartphone.

A versão mobile não deve ser tratada apenas como uma versão reduzida do desktop.

Elementos como:

- navegação;
- espaçamentos;
- tipografia;
- cards;
- formulários;
- botões;
- imagens;

devem ser avaliados individualmente em diferentes larguras de tela.

---

## 12. SEO

O website deve manter uma estrutura favorável a mecanismos de busca.

Devem ser considerados:

- título da página;
- meta description;
- headings hierárquicos;
- textos descritivos;
- atributos `alt`;
- URLs e links adequados;
- dados estruturados quando houver justificativa;
- desempenho;
- experiência mobile;
- conteúdo relacionado à atuação da Voitechrj em Niterói/RJ.

Alterações de SEO devem ser registradas quando representarem decisões permanentes.

---

## 13. Acessibilidade

O desenvolvimento deve buscar:

- HTML semântico;
- navegação por teclado;
- contraste adequado;
- textos legíveis;
- estados visuais claros;
- `aria-label` quando necessário;
- botões e links semanticamente corretos;
- formulários com identificação adequada.

Acessibilidade deve ser considerada durante alterações visuais e funcionais, e não apenas posteriormente.

---

## 14. Integrações atuais

O website possui referências e integrações relacionadas a:

- WhatsApp;
- Google Maps;
- Google Reviews;
- Google Fonts;
- Lucide Icons;
- imagens externas do Unsplash.

Integrações externas devem ser avaliadas quanto à necessidade, desempenho e impacto na manutenção antes de novas inclusões.

---

## 15. Tecnologia atual

O website atualmente utiliza:

- HTML5;
- CSS3;
- JavaScript;
- GitHub;
- GitHub Pages;
- Google Fonts;
- Lucide Icons.

Não devem ser introduzidos frameworks ou bibliotecas adicionais sem uma justificativa técnica documentada.

---

## 16. Escopo

### Dentro do escopo

- evolução visual do website;
- melhoria da experiência do usuário;
- melhoria da responsividade;
- melhoria das animações e interações;
- reorganização de seções;
- melhoria de textos e conteúdo;
- melhoria de componentes existentes;
- melhorias de SEO;
- melhorias de acessibilidade;
- otimização de desempenho;
- manutenção do código;
- correção de problemas existentes;
- criação de novas funcionalidades relacionadas ao objetivo institucional do site.

### Fora do escopo atual

Não fazem parte do objetivo principal do website:

- sistema completo de vendas;
- loja virtual;
- sistema completo de gerenciamento de clientes;
- sistema próprio de agendamento com banco de dados;
- painel administrativo complexo;
- transformação do projeto em uma aplicação web complexa sem decisão explícita.

Caso algum desses objetivos seja necessário futuramente, deverá ser realizada uma decisão arquitetural específica.

---

## 17. Critérios de sucesso

Uma evolução do website será considerada adequada quando:

- melhorar a experiência do usuário;
- preservar funcionalidades existentes importantes;
- funcionar corretamente em desktop e mobile;
- não introduzir complexidade desnecessária;
- manter ou melhorar o desempenho;
- manter consistência visual;
- facilitar o contato com a Voitechrj;
- melhorar a clareza da apresentação dos serviços;
- não criar problemas de manutenção futura.

---

## 18. Evolução futura

O website deve evoluir progressivamente a partir da implementação atual.

Possíveis evoluções incluem:

- redesign visual;
- melhoria da Hero;
- melhoria da apresentação dos serviços;
- novas animações;
- melhoria da prova social;
- aprimoramento do formulário;
- melhorias na experiência mobile;
- otimizações de desempenho;
- aprimoramento de SEO;
- refinamento da identidade visual;
- novas funcionalidades de conversão.

Novas funcionalidades devem ser avaliadas antes da implementação e, quando representarem decisões estruturais ou permanentes, devem ser registradas na documentação correspondente.

---

## 19. Relação com a documentação

Este documento descreve o produto e seus objetivos.

Ele deve ser utilizado em conjunto com:

- `00_CONTEXT.md` — contexto geral e estado do projeto;
- `02_ARQUITETURA.md` — estrutura técnica;
- `03_DECISOES_TECNICAS.md` — decisões técnicas permanentes;
- `04_IDENTIDADE_VISUAL.md` — identidade e sistema visual;
- `05_CONTEUDO.md` — conteúdo e textos;
- `06_TAREFAS.md` — tarefas e evolução planejada;
- `07_CHANGELOG.md` — histórico de alterações;
- `08_ERROS.md` — problemas conhecidos e soluções;
- `09_MANUTENCAO.md` — procedimentos de manutenção;
- `10_COMO-PEDIR-MUDANCA.md` — processo para solicitar alterações.

A documentação deve ser atualizada conforme o projeto evoluir.

---

## 20. Status

**Status:** Documento inicial.

Este PRD representa o estado e os objetivos conhecidos do projeto no momento de sua criação.

Ele não deve impedir mudanças futuras. Quando o produto, seus objetivos ou seu escopo forem alterados de forma relevante, este documento deverá ser atualizado.
