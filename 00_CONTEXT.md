# CONTEXTO DO PROJETO — VOITECHRJ WEBSITE

## 1. Identificação

**Projeto:** Voitechrj Website  
**Repositório:** `voitech-rj/voitech-rj.github.io`  
**Tipo:** Website institucional  
**Hospedagem:** GitHub Pages  
**Branch principal:** `main`

## 2. Objetivo

Este projeto é o website institucional da Voitechrj. O objetivo é apresentar a empresa, seus serviços, diferenciais e formas de contato de maneira profissional, clara, responsiva e confiável.

O site deve funcionar como uma vitrine digital e facilitar que potenciais clientes conheçam os serviços e entrem em contato, com foco em clareza, credibilidade, experiência do usuário e conversão.

## 3. Estado atual

O site é uma webpage estática construída com HTML, CSS e JavaScript, publicada pelo GitHub Pages.

A estrutura atual identificada no código inclui:

- `index.html`
- `style.css`
- `script.js`
- `assets/`

Principais seções atualmente presentes:

- Header e navegação;
- Hero (`#hero`);
- Prova social / avaliações (`#social-proof`);
- Diferenciais (`#features`);
- Benefícios;
- Agendamento (`#booking`);
- FAQ (`#faq`);
- Footer.

O site possui navegação por âncoras, menu responsivo, formulário de agendamento direcionado ao WhatsApp, modais para privacidade e termos, botão de voltar ao topo e interações em JavaScript.

## 4. Tecnologias e dependências atuais

- HTML5;
- CSS3;
- JavaScript;
- GitHub Pages;
- Google Fonts: Montserrat e Open Sans;
- Ícones Lucide;
- Imagens locais e imagens externas do Unsplash.

Não adicionar frameworks, bibliotecas ou dependências externas sem necessidade real e sem registrar a decisão técnica correspondente.

## 5. Funcionalidades e integrações atuais

O site possui referências para:

- WhatsApp: `(21) 99447-2406`;
- E-mail: `voitechrj@gmail.com`;
- Google Maps para localização em Niterói/RJ;
- Google para avaliações;
- Link direto para avaliação no Google;
- Navegação interna por âncoras.

O JavaScript atual utiliza, entre outras, as funções `openModal` e `closeModal` e eventos para menu, formulário, FAQ, modais, rolagem e botão de voltar ao topo.

## 6. Identidade visual atual

A implementação atual utiliza principalmente:

- Montserrat para títulos e elementos de destaque;
- Open Sans para textos;
- Logo da Voitechrj em `assets/voitechrj-logo.png`;
- Cards e seções com tratamento visual próprio;
- Imagens relacionadas a manutenção de computadores e serviços de TI.

A identidade visual deve ser tratada como um sistema. Alterações de cor, tipografia, espaçamento, componentes ou estilo devem considerar o conjunto do site e não apenas uma seção isolada.

## 7. Princípios de desenvolvimento

1. Preservar funcionalidades existentes.
2. Analisar o código atual antes de substituí-lo.
3. Priorizar soluções simples e nativas.
4. Não introduzir dependências sem justificativa.
5. Manter o código legível e organizado.
6. Garantir responsividade em desktop e dispositivos móveis.
7. Verificar possíveis regressões após alterações.
8. Evitar duplicação desnecessária de código.
9. Não modificar identidade visual de forma isolada sem considerar o restante do site.
10. Não transformar o website em uma aplicação complexa sem uma decisão explícita.
11. Registrar decisões estruturais ou permanentes na documentação.

## 8. Processo para alterações

Antes de uma alteração significativa:

1. Entender o objetivo;
2. Analisar a implementação existente;
3. Identificar arquivos afetados;
4. Verificar dependências e impactos;
5. Propor a solução quando houver impacto estrutural ou visual relevante;
6. Implementar;
7. Verificar desktop e mobile;
8. Verificar funcionalidades existentes;
9. Registrar a mudança quando necessário.

Alterações diretas no `main` devem ser feitas somente quando forem explicitamente autorizadas.

## 9. Documentação do projeto

A documentação será construída progressivamente. A estrutura planejada é:

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

Os documentos devem conter informações reais do projeto. Não criar documentação artificial apenas para preencher a estrutura.

## 10. Relação com outros projetos

A Voitechrj possui outros projetos, incluindo o `Gestao_de_Servicos_Voitechrj`.

O sistema de gestão e o website possuem objetivos e arquiteturas diferentes. Conceitos da empresa podem ser compartilhados, mas código, arquitetura e regras específicas do WebApp não devem ser incorporados ao website automaticamente.

## 11. Evolução pretendida

O website deve evoluir progressivamente a partir da base existente, buscando:

- apresentação mais profissional;
- melhor experiência do usuário;
- maior clareza na apresentação dos serviços;
- maior capacidade de conversão;
- melhor experiência mobile;
- melhor desempenho;
- melhor SEO;
- maior consistência visual;
- facilidade de manutenção.

Grandes mudanças devem ser planejadas antes da implementação.

## 12. Regra para IA

Qualquer IA que trabalhe neste projeto deve:

1. Ler este arquivo antes de alterações relevantes;
2. Consultar a documentação relacionada ao tipo de alteração;
3. Analisar o código existente antes de substituí-lo;
4. Preservar funcionalidades que não fazem parte da solicitação;
5. Não assumir que uma tecnologia moderna é necessariamente melhor para este projeto;
6. Explicar alterações estruturais antes de executá-las;
7. Atualizar a documentação quando uma decisão permanente for tomada;
8. Usar o GitHub como fonte oficial do código atual.

## 13. Fonte de verdade

**Código:** GitHub — `voitech-rj/voitech-rj.github.io`  
**Contexto e documentação:** arquivos `.md` deste repositório e documentação associada ao Projeto no ChatGPT.
