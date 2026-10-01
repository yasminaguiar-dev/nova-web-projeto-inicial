# PESQUISA, FEEDBACKS E EVOLUÇÃO DO PROJETO NOVA WEB

**Projeto:** Nova Web – Identidade Visual e Desenvolvimento do Site
**Desenvolvedora:** Yasmin Aguiar
**Curso:** Técnico em Desenvolvimento de Sistemas – SENAI
**Ano:** 2026

---

## 1. INTRODUÇÃO

Este documento reúne uma pesquisa sobre HTML, XML e Markdown, além do registro das principais orientações, feedbacks e ajustes realizados durante o desenvolvimento do projeto Nova Web.

O projeto foi desenvolvido com o objetivo de criar um site para uma loja de roupas, trabalhando a estrutura das páginas, identidade visual, organização dos arquivos, navegação, imagens, formulário e documentação.

Durante o desenvolvimento, foram recebidas orientações nas aulas e realizados ajustes para melhorar a organização e a qualidade do projeto.

---

# 2. HTML

## 2.1 O que é HTML?

HTML significa **HyperText Markup Language**, ou **Linguagem de Marcação de Hipertexto**.

É uma linguagem utilizada para criar e organizar o conteúdo de páginas da internet. Por meio do HTML é possível criar títulos, textos, imagens, links, listas, tabelas, formulários e outras partes de uma página.

O HTML utiliza **tags** para identificar a função de cada elemento.

Exemplo:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Minha Página</title>
</head>
<body>

    <h1>Olá, mundo!</h1>
    <p>Esta é uma página HTML.</p>

</body>
</html>
```

## 2.2 Principais tags HTML

Algumas das principais tags utilizadas no desenvolvimento do projeto são:

* `<html>`: representa o documento HTML.
* `<head>`: contém informações sobre a página.
* `<title>`: define o título da página.
* `<body>`: contém o conteúdo que será apresentado ao usuário.
* `<header>`: representa o cabeçalho.
* `<nav>`: representa a área de navegação.
* `<main>`: representa o conteúdo principal.
* `<section>`: organiza o conteúdo em seções.
* `<footer>`: representa o rodapé.
* `<h1>`, `<h2>` e `<h3>`: representam títulos e subtítulos.
* `<p>`: representa parágrafos.
* `<a>`: cria links.
* `<img>`: insere imagens.
* `<form>`: cria formulários.

## 2.3 HTML no projeto Nova Web

O HTML foi utilizado para criar a estrutura das páginas do projeto Nova Web.

As páginas foram organizadas de forma que o usuário consiga navegar entre as diferentes áreas do site. Também foram utilizados elementos semânticos, imagens com texto alternativo e formulário.

A utilização do HTML permitiu estruturar o conteúdo antes da aplicação dos estilos definidos no CSS.

---

# 3. XML

## 3.1 O que é XML?

XML significa **Extensible Markup Language**, ou **Linguagem de Marcação Extensível**.

É uma linguagem utilizada principalmente para organizar, armazenar e transportar informações.

Diferentemente do HTML, que é utilizado principalmente para estruturar o conteúdo de páginas web, o XML tem como principal objetivo representar dados de maneira organizada.

Exemplo:

```xml
<produto>
    <nome>Vestido</nome>
    <preco>99.90</preco>
    <categoria>Vestidos</categoria>
</produto>
```

Nesse exemplo, as informações do produto são organizadas dentro de diferentes tags.

## 3.2 Diferença entre HTML e XML

HTML e XML possuem algumas características semelhantes, pois utilizam tags, mas possuem objetivos diferentes.

O **HTML** é utilizado principalmente para estruturar e apresentar conteúdos em páginas web.

O **XML** é utilizado principalmente para organizar, armazenar e transportar dados.

Exemplo de HTML:

```html
<h1>Vestido</h1>
<p>Preço: R$ 99,90</p>
```

Exemplo de XML:

```xml
<produto>
    <nome>Vestido</nome>
    <preco>99.90</preco>
</produto>
```

No projeto Nova Web, o XML não foi utilizado como uma das tecnologias principais de desenvolvimento. A pesquisa foi realizada para compreender melhor as diferenças entre as linguagens de marcação estudadas no curso.

---

# 4. MARKDOWN

## 4.1 O que é Markdown?

Markdown é uma linguagem de marcação utilizada para criar documentos de maneira simples e organizada.

Ela utiliza símbolos para criar títulos, listas, links, textos em negrito e outros elementos de formatação.

Exemplo de título:

```markdown
# Título principal
```

Exemplo de subtítulo:

```markdown
## Subtítulo
```

Exemplo de lista:

```markdown
- Item 1
- Item 2
- Item 3
```

Exemplo de texto em negrito:

```markdown
**Texto em negrito**
```

## 4.2 Markdown no projeto Nova Web

O Markdown foi utilizado na documentação do projeto.

Entre os materiais documentados estão informações relacionadas ao planejamento e desenvolvimento do projeto, como:

* README;
* cronograma;
* EAP;
* mapeamento;
* anotações;
* outras documentações.

O Markdown também é bastante utilizado no GitHub, permitindo que os documentos sejam apresentados de forma organizada diretamente na plataforma.

---

# 5. GIT E GITHUB

## 5.1 Git

O Git é um sistema de controle de versão utilizado para acompanhar as alterações realizadas em um projeto.

Por meio dos commits, é possível registrar diferentes momentos do desenvolvimento e acompanhar a evolução dos arquivos.

Durante o projeto Nova Web, o Git foi utilizado para registrar as alterações realizadas ao longo do desenvolvimento.

## 5.2 GitHub

O GitHub é uma plataforma utilizada para armazenar e compartilhar projetos que utilizam Git.

No projeto Nova Web, o GitHub foi utilizado para armazenar os arquivos do site, documentação e materiais relacionados ao desenvolvimento.

O histórico de commits também permite visualizar a evolução do projeto ao longo do tempo.

---

# 6. ORIENTAÇÕES E FEEDBACKS DURANTE O DESENVOLVIMENTO

Durante o desenvolvimento do projeto Nova Web, foram recebidas orientações nas aulas e realizadas alterações para melhorar a organização e a estrutura do projeto.

Os feedbacks foram importantes para identificar pontos que poderiam ser melhorados e para orientar a construção do projeto de acordo com as atividades propostas.

## 6.1 Organização dos arquivos

Uma das orientações foi manter os arquivos organizados em pastas de acordo com sua função.

A partir disso, os arquivos foram separados em diferentes diretórios, como:

* `assets/` para recursos utilizados no projeto;
* `pages/` para as páginas HTML;
* `js/` para arquivos JavaScript;
* `docs/` para documentação;
* pastas específicas dentro de `docs/` para materiais como cronograma, EAP, mapeamento e wireframes.

Essa organização facilita a localização dos arquivos e a manutenção do projeto.

## 6.2 Separação do CSS

Outra orientação importante foi utilizar CSS externo em vez de colocar toda a estilização diretamente nos arquivos HTML.

A separação do CSS permite organizar melhor o código e facilita a alteração da aparência das páginas.

## 6.3 Organização das páginas

As páginas do projeto foram organizadas dentro da pasta `pages/`.

A navegação entre as páginas também foi configurada para permitir que o usuário acesse as diferentes partes do site.

## 6.4 Uso de imagens

As imagens utilizadas no projeto foram organizadas dentro da estrutura de arquivos do projeto.

Também foi utilizado o atributo `alt` nas imagens, permitindo fornecer uma descrição do conteúdo da imagem.

## 6.5 Identidade visual

Durante o desenvolvimento também foram realizadas orientações e ajustes relacionados à identidade visual.

Foi definida uma identidade para o projeto, incluindo:

* cores;
* fontes;
* organização visual;
* estilo dos elementos;
* padrão visual das páginas.

A identidade visual foi utilizada para manter uma aparência mais organizada e consistente no site.

## 6.6 Documentação

Durante o desenvolvimento, também foram criados materiais para documentar o projeto e seu planejamento.

Entre eles estão:

* cronograma;
* EAP;
* mapeamento;
* wireframe;
* guia de estilo;
* README;
* anotações de estudo.

A documentação ajuda a registrar as etapas do desenvolvimento e facilita a compreensão do projeto.

## 6.7 Uso do GitHub

Outra orientação importante foi utilizar o GitHub para armazenar o projeto e registrar sua evolução.

Os commits foram utilizados para identificar alterações realizadas durante o desenvolvimento.

Dessa forma, foi possível manter um histórico das etapas do projeto.

---

# 7. AJUSTES REALIZADOS

A partir das orientações recebidas durante as aulas, foram realizados diversos ajustes no projeto.

Entre os principais ajustes estão:

1. Organização dos arquivos em pastas.
2. Separação das páginas HTML.
3. Utilização de CSS externo.
4. Organização das imagens e outros recursos.
5. Adição de texto alternativo nas imagens.
6. Organização da navegação entre as páginas.
7. Definição e aplicação de uma identidade visual.
8. Criação de documentos de planejamento.
9. Criação de wireframes.
10. Registro da evolução do projeto utilizando Git e GitHub.
11. Revisão da documentação do projeto.

Esses ajustes foram realizados durante o desenvolvimento para melhorar a organização, a apresentação e a estrutura do projeto.

---

# 8. FEEDBACK DA AVALIAÇÃO DO PROJETO

Na avaliação do projeto, foram destacados como pontos positivos a organização geral, as páginas conectadas, o uso de CSS externo, as imagens com texto alternativo, o formulário, a documentação, os wireframes e o histórico de evolução no GitHub.

Também foram indicados alguns pontos para melhorar a documentação do projeto.

Entre as orientações recebidas estavam:

* reunir em uma documentação única a explicação sobre HTML, XML e Markdown;
* registrar de forma mais explícita os feedbacks recebidos e os ajustes realizados;
* manter no repositório final apenas os materiais diretamente relacionados ao projeto.

A partir dessas orientações, este documento foi criado para reunir as informações sobre HTML, XML, Markdown, os feedbacks recebidos e os ajustes realizados durante o desenvolvimento.

---

# 9. CONCLUSÃO

O desenvolvimento do projeto Nova Web permitiu aplicar conhecimentos adquiridos durante as aulas de desenvolvimento web.

Durante o projeto foram utilizados conhecimentos de HTML, CSS, Markdown, Git e GitHub, além de conceitos relacionados à organização de projetos, documentação e identidade visual.

As orientações e feedbacks recebidos durante as aulas contribuíram para melhorar a estrutura e a organização do projeto.

A pesquisa sobre HTML, XML e Markdown também permitiu compreender melhor as diferenças entre as linguagens de marcação e suas formas de utilização.

Com os ajustes realizados, a documentação passa a reunir em um único arquivo as informações sobre as tecnologias pesquisadas, a evolução do projeto, as orientações recebidas e os principais ajustes realizados durante o desenvolvimento.
