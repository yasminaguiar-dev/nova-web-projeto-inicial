# Projeto NovaWeb - Sistema Administrativo

**Desenvolvedora:** Yasmin Aguiar  
**Curso:** Técnico em Desenvolvimento de Sistemas  
**Instituição:** SENAI  
**Turma:** TDE1BAA-26  
**Repositório:** novaweb-projeto-inicial  
**Pasta do projeto:** SA02

---

## 1. Apresentação do projeto

O NovaWeb é um projeto de desenvolvimento de um sistema administrativo web, criado como parte das atividades do curso Técnico em Desenvolvimento de Sistemas.

O projeto reúne três páginas principais: login, perfil do usuário e consulta de usuários. A proposta é desenvolver uma interface organizada, agradável e fácil de utilizar, aplicando os conhecimentos adquiridos durante as aulas e as atividades práticas do curso.

## 2. Objetivo

O objetivo do projeto é desenvolver a parte visual e as funcionalidades básicas de um sistema administrativo web, utilizando HTML, CSS e JavaScript.

O sistema permite a navegação entre as páginas, o preenchimento de formulários e a pesquisa de usuários em uma tabela.

O projeto também tem como objetivo praticar a organização de arquivos e pastas, a estruturação de páginas web e o desenvolvimento de interfaces responsivas.

## 3. Base de desenvolvimento

O desenvolvimento do NovaWeb foi baseado nos conteúdos estudados nas aulas do curso Técnico em Desenvolvimento de Sistemas e nas atividades práticas realizadas durante a formação.

Os conhecimentos adquiridos foram aplicados na construção das páginas, na organização dos arquivos, na estilização das interfaces e na implementação das funcionalidades com JavaScript.

Entre os principais conteúdos aplicados estão:

- HTML para estruturar páginas, formulários, campos de entrada e tabelas.
- CSS para estilizar as páginas, organizar os elementos visuais, aplicar cores e adaptar o layout a diferentes tamanhos de tela.
- JavaScript para realizar validações básicas de formulários, apresentar mensagens e implementar a pesquisa na tabela de usuários.
- Organização de projetos para separar os arquivos de acordo com suas funções.
- Git e GitHub para o controle de versões e a organização do código durante o desenvolvimento.

O projeto representa a aplicação prática desses conhecimentos na construção de um sistema administrativo web.

## 4. Tecnologias utilizadas

### HTML

Utilizado para criar a estrutura das páginas, os formulários, os campos de preenchimento, os menus de navegação e a tabela de usuários.

### CSS

Utilizado para definir as cores, os espaçamentos, a disposição dos elementos, a aparência dos formulários e da tabela e a adaptação das páginas a diferentes tamanhos de tela.

### JavaScript

Utilizado para implementar as funcionalidades básicas do sistema, como a validação dos campos dos formulários, a apresentação de mensagens e a pesquisa de usuários na tabela.

### Git e GitHub

Utilizados no processo de versionamento e organização do projeto. O Git permite acompanhar as alterações realizadas nos arquivos, enquanto o GitHub pode ser utilizado para armazenar e compartilhar a versão remota do repositório.

## 5. Estrutura de pastas e arquivos

O projeto está organizado dentro da pasta `SA02`, localizada no repositório principal `novaweb-projeto-inicial`.

A estrutura utilizada é a seguinte:

```text
novaweb-projeto-inicial/
|
|-- SA02/
|   |
|   |-- assets/
|   |   |
|   |   |-- images/
|   |       |
|   |       |-- avatar-usuario.png
|   |       |-- consulta-ilustration.png
|   |       |-- login-ilustration.png
|   |
|   |-- css/
|   |   |
|   |   |-- estilo.css
|   |
|   |-- js/
|   |   |
|   |   |-- script.js
|   |
|   |-- login.html
|   |-- perfil.html
|   |-- consulta.html
|   |-- README.md
|
|-- outros arquivos e atividades do repositório
```

### Descrição das pastas

- `assets/images/`: contém as imagens utilizadas nas páginas do sistema.
- `css/`: contém o arquivo responsável pela estilização das páginas.
- `js/`: contém o arquivo JavaScript responsável pelas funcionalidades do sistema.

### Descrição dos arquivos

- `login.html`: página de acesso ao sistema.
- `perfil.html`: página com o formulário de perfil do usuário.
- `consulta.html`: página que apresenta a tabela de usuários e o campo de pesquisa.
- `estilo.css`: arquivo com os estilos visuais compartilhados pelas páginas.
- `script.js`: arquivo com as validações e funcionalidades implementadas em JavaScript.
- `README.md`: arquivo de documentação do projeto.

Essa organização facilita a localização dos arquivos, a manutenção do código e a continuidade do desenvolvimento.

## 6. Páginas desenvolvidas

### 6.1. Página de login

O arquivo `login.html` apresenta a tela inicial de acesso ao sistema.

A página contém:

- Campo para preenchimento do e-mail.
- Campo para preenchimento da senha.
- Opção para lembrar os dados de acesso.
- Link para recuperação de senha.
- Botão para entrar no sistema.
- Ilustração relacionada à tela de login.

O JavaScript realiza uma validação básica dos campos e apresenta uma mensagem quando os dados são preenchidos.

**Observação:** a tela de login é demonstrativa. O projeto não possui autenticação real, banco de dados ou verificação de credenciais em um servidor.

### 6.2. Página de perfil do usuário

O arquivo `perfil.html` apresenta um formulário para preenchimento de informações do usuário.

A página contém campos para:

- Nome.
- E-mail.
- CPF.
- Data de nascimento.
- Tipo de usuário.
- Interesses.
- Estado.
- Descrição sobre o usuário.

A página também apresenta uma imagem de perfil e utiliza JavaScript para realizar validações básicas antes de apresentar uma mensagem de confirmação.

**Observação:** as informações preenchidas não são armazenadas permanentemente. O formulário é utilizado para demonstrar o funcionamento da interface e das validações.

### 6.3. Página de consulta de usuários

O arquivo `consulta.html` apresenta uma tabela com dados fictícios de usuários.

A tabela contém informações como:

- Nome.
- E-mail.
- Tipo de usuário.
- Estado.

A página possui um campo de pesquisa que permite filtrar os registros da tabela de acordo com o texto digitado.

O JavaScript realiza a pesquisa diretamente na tabela e apresenta uma mensagem quando nenhum resultado é encontrado.

Os dados exibidos são fictícios e utilizados somente para demonstrar o funcionamento da consulta.

## 7. Identidade visual

O projeto utiliza uma identidade visual baseada em tons claros, bege e rosa, buscando criar uma interface agradável, organizada e consistente entre as páginas.

A paleta de cores utilizada é composta por:

| Cor | Código hexadecimal | Aplicação |
|---|---|---|
| Branco quente | `#FFFDF9` | Fundo principal das páginas |
| Bege | `#EDE1D3` | Elementos de apoio e áreas de destaque |
| Rosa queimado | `#C98291` | Botões, detalhes e elementos de destaque |

A utilização dessas cores contribui para manter a unidade visual entre a tela de login, o perfil do usuário e a página de consulta.

O arquivo `estilo.css` reúne as regras de aparência utilizadas nas páginas, evitando a repetição desnecessária de estilos.

## 8. Funcionalidades implementadas

As principais funcionalidades desenvolvidas no projeto são:

- Navegação entre as páginas do sistema.
- Preenchimento dos campos da tela de login.
- Validação básica dos campos de login.
- Apresentação de mensagens para o usuário.
- Preenchimento e validação básica do formulário de perfil.
- Exibição de usuários fictícios em uma tabela.
- Pesquisa de registros na tabela de usuários.
- Apresentação de mensagem quando a pesquisa não encontra resultados.
- Adaptação do layout para diferentes tamanhos de tela.
- Organização dos arquivos HTML, CSS, JavaScript e imagens em pastas específicas.

As funcionalidades foram desenvolvidas com foco na prática dos conceitos de desenvolvimento web estudados durante o curso.

## 9. Organização do projeto e versionamento

Os arquivos do NovaWeb estão organizados na pasta `SA02`, dentro do repositório principal `novaweb-projeto-inicial`.

A organização em pastas facilita a identificação das páginas, dos estilos, dos scripts e das imagens utilizadas no sistema.

O projeto também faz parte do processo de aprendizagem sobre versionamento de código com Git e GitHub.

O Git permite registrar as alterações realizadas durante o desenvolvimento, enquanto o GitHub permite manter uma cópia remota do repositório e compartilhar o projeto.

Para que a versão disponível no GitHub corresponda à versão mais recente dos arquivos locais, é necessário adicionar as alterações, criar um commit e enviá-las ao repositório remoto com o comando `git push`.

A publicação das alterações mais recentes deve ser verificada no GitHub para confirmar que todos os arquivos da SA02 estão disponíveis no repositório remoto.

## 10. Como executar o projeto

Para visualizar o sistema, siga estas etapas:

1. Abra a pasta `novaweb-projeto-inicial` no Visual Studio Code.
2. Entre na pasta `SA02`.
3. Localize o arquivo `login.html`.
4. Abra o arquivo no navegador ou utilize uma extensão do Visual Studio Code, como o Live Server.
5. Teste os campos do formulário e o botão de acesso.
6. Navegue até a página de perfil e teste o preenchimento do formulário.
7. Acesse a página de consulta e digite informações no campo de pesquisa para verificar o filtro da tabela.

Para garantir o funcionamento correto das páginas, mantenha a estrutura das pastas e os nomes dos arquivos utilizados nos caminhos das imagens, do CSS e do JavaScript.

## 11. Observações importantes

Este projeto foi desenvolvido com foco na interface e nas funcionalidades básicas do front-end.

Por isso, algumas funcionalidades são demonstrativas e não representam um sistema administrativo completo.

O projeto não possui:

- Banco de dados integrado.
- Autenticação real de usuários.
- Armazenamento permanente das informações dos formulários.
- Recuperação de senha funcional.
- Integração com um servidor para consultar ou cadastrar usuários.

Esses recursos poderiam ser implementados em etapas futuras, caso o projeto seja ampliado para incluir um back-end e um banco de dados.

## 12. Considerações finais

O desenvolvimento do NovaWeb permitiu aplicar conhecimentos de HTML, CSS e JavaScript na construção de um sistema administrativo web com páginas organizadas e funcionalidades básicas.

A criação das telas de login, perfil e consulta possibilitou praticar a estruturação de formulários, a estilização de interfaces, a validação de campos e a pesquisa de informações em tabelas.

A organização dos arquivos em pastas e o uso de ferramentas de versionamento também fazem parte do processo de desenvolvimento e contribuem para a manutenção e a evolução do projeto.

Dessa forma, o NovaWeb reúne os conhecimentos trabalhados nas aulas e nas atividades práticas do curso em uma aplicação que pode ser testada e aprimorada futuramente.