# Dia 7 — Introdução a Sistemas Corporativos e Figma

## 1. Introdução

Um sistema corporativo interno é uma aplicação desenvolvida para auxiliar nas atividades e processos de uma empresa. Diferente de um site institucional, que tem como principal objetivo apresentar informações ao público, um sistema interno é utilizado para realizar operações, consultar dados e controlar informações.

No projeto **Nova-Web**, a proposta é representar a transição de uma loja virtual institucional para um sistema interno de gerenciamento. Para isso, foram consideradas três áreas principais: **autenticação, dashboard e consulta de dados**.

---

## 2. Diferença entre Site Institucional e Sistema Corporativo

Um site institucional normalmente possui páginas voltadas para apresentação da empresa, produtos, serviços, informações de contato e outros conteúdos destinados aos visitantes.

Já um sistema corporativo possui uma interface voltada para usuários que precisam realizar tarefas específicas. Por isso, apresenta elementos como menus, formulários, tabelas, filtros, consultas e informações de usuários.

### Site Institucional

* Apresentação da empresa;
* Informações sobre produtos e serviços;
* Conteúdo para visitantes;
* Navegação simples;
* Maior foco em comunicação e identidade visual.

### Sistema Corporativo

* Autenticação de usuários;
* Controle de acesso;
* Dashboard;
* Consultas e tabelas;
* Filtros e pesquisas;
* Informações de usuários;
* Operações internas;
* Maior foco em produtividade e organização.

No Nova-Web, essa mudança é representada pela criação de um sistema interno para gerenciamento de produtos e informações da loja.

---

## 3. Autenticação

A tela de autenticação é utilizada para controlar o acesso ao sistema.

Os principais elementos são:

* Campo de usuário ou e-mail;
* Campo de senha;
* Botão de entrada;
* Opção de recuperação de senha;
* Mensagens de validação.

A tela deve apresentar os elementos de maneira organizada, permitindo que o usuário compreenda rapidamente como acessar o sistema.

No projeto Nova-Web, a tela de login utiliza os campos **E-mail/Usuário** e **Senha**, além do botão **Entrar** e da opção **Esqueci minha senha**.

---

## 4. Dashboard

O dashboard é uma tela utilizada para apresentar informações importantes de forma resumida.

Em um sistema corporativo, ele pode apresentar:

* Informações do usuário;
* Menu de navegação;
* Quantidade de registros;
* Resumos de atividades;
* Acessos recentes;
* Atalhos para outras áreas do sistema.

No Nova-Web, o dashboard possui uma barra lateral com opções como:

* Dashboard;
* Usuários;
* Produtos;
* Consultas;
* Configurações;
* Sair.

Também são apresentadas informações resumidas para facilitar a visualização das atividades do sistema.

---

## 5. Perfis de Usuário

Os sistemas corporativos podem possuir diferentes usuários e níveis de acesso.

Um perfil de usuário pode apresentar informações como:

* Nome;
* Foto ou avatar;
* Cargo;
* Dados cadastrais;
* Permissões de acesso.

As permissões permitem controlar quais áreas e funções podem ser acessadas por cada usuário.

No protótipo do Nova-Web, o dashboard apresenta o nome e o cargo do usuário logado, representando uma situação de acesso a um sistema interno.

---

## 6. Consultas e Tabelas

As tabelas são utilizadas para organizar grandes quantidades de informações de maneira estruturada.

Uma tabela corporativa pode apresentar:

* Código;
* Nome;
* Categoria;
* Preço;
* Status;
* Data;
* Ações.

No projeto Nova-Web, foi escolhida uma tabela de **produtos**, contendo informações fictícias.

A tabela possui pelo menos quatro colunas e cinco registros, conforme solicitado na atividade.

Também foi incluído um campo de busca e um filtro para facilitar a localização dos produtos.

A utilização de filtros, busca e paginação ajuda a evitar que muitas informações sejam apresentadas de uma única vez.

---

## 7. Adaptação para Diferentes Plataformas

Um sistema corporativo pode ser utilizado em diferentes dispositivos, por isso a interface deve considerar as características de cada plataforma.

### Desktop

O desktop oferece uma área maior para apresentar informações.

Nesse caso, é possível utilizar:

* Barra lateral;
* Tabelas com várias colunas;
* Dashboard com vários indicadores;
* Menus completos.

O desktop é a principal plataforma considerada para o protótipo Nova-Web.

### Tablet

Em tablets, existe menos espaço disponível.

Por isso, alguns elementos podem precisar ser reorganizados, como:

* Redução da quantidade de colunas;
* Menu lateral recolhível;
* Botões maiores;
* Maior espaçamento entre elementos.

### Dispositivos móveis e coletores

Em dispositivos móveis, a interface precisa priorizar as informações mais importantes.

É recomendado utilizar:

* Botões maiores;
* Campos fáceis de tocar;
* Menos informações por tela;
* Navegação simplificada;
* Tabelas adaptadas ou com rolagem.

---

## 8. Capacidade da Plataforma Computacional

As características do dispositivo influenciam a forma como as informações podem ser apresentadas.

Em uma tela grande, é possível apresentar mais informações simultaneamente. Já em uma tela pequena, uma tabela muito extensa pode dificultar a leitura e a interação.

Por esse motivo, o projeto deve equilibrar a **densidade de informações** com a facilidade de utilização.

Também é importante considerar o tamanho dos botões e das áreas de clique. Elementos muito pequenos podem dificultar a utilização em telas sensíveis ao toque.

No Nova-Web, os elementos foram organizados com espaçamentos e tamanhos que facilitam a identificação e a interação do usuário.

---

## 9. Componentes no Figma

Componentes são elementos que podem ser reutilizados dentro de um projeto. No Figma, eles ajudam a manter a consistência visual entre diferentes partes da interface.

No projeto Nova-Web foram definidos componentes reutilizáveis para:

* Botões;
* Linhas da tabela.

A utilização de componentes evita a necessidade de criar novamente o mesmo elemento várias vezes.

Quando um componente principal é atualizado, suas instâncias podem receber essas alterações, facilitando a manutenção do projeto.

---

## 10. Variantes

As variantes permitem organizar diferentes versões de um mesmo componente.

Por exemplo, um botão pode possuir diferentes estados:

* Default;
* Hover;
* Disabled.

O Figma permite reunir essas variações em um conjunto de componentes, facilitando sua organização e utilização.

No projeto Nova-Web, as variantes podem ser utilizadas para representar diferentes estados dos elementos da interface.

---

## 11. Alinhamento e Distribuição

O alinhamento é importante para manter uma interface organizada.

Durante a criação das telas, devem ser utilizadas as ferramentas de alinhamento e distribuição disponíveis no Figma.

Entre os recursos utilizados estão:

* Alinhar à esquerda;
* Centralizar;
* Alinhar à direita;
* Distribuir horizontalmente;
* Distribuir verticalmente.

Esses recursos ajudam a manter espaçamentos consistentes e facilitam a leitura da interface.

---

## 12. Princípios de Usabilidade

O sistema foi planejado considerando alguns princípios importantes:

### Consistência

Elementos que possuem a mesma função devem apresentar aparência semelhante.

### Organização

As informações devem ser agrupadas de maneira lógica para facilitar a navegação.

### Clareza

Os textos, botões e campos devem apresentar funções fáceis de compreender.

### Feedback

O sistema deve informar ao usuário quando uma ação foi realizada ou quando ocorreu algum erro.

### Facilidade de navegação

O usuário deve conseguir encontrar as principais funções do sistema sem dificuldade.

---

## 13. Aplicação no Projeto Nova-Web

A pesquisa realizada serviu como base para a criação do protótipo de um sistema corporativo interno da Nova-Web.

O protótipo foi dividido em três telas principais:

1. **Tela de Login:** responsável pela autenticação do usuário.
2. **Dashboard:** apresenta informações resumidas e o menu de navegação.
3. **Tela de Consulta:** apresenta produtos em uma tabela com busca e filtro.

A estrutura permite demonstrar a diferença entre uma interface voltada para visitantes e uma interface destinada à operação interna de uma empresa.

---

## 14. Conclusão

A criação de um sistema corporativo exige uma organização diferente daquela utilizada em um site institucional. Enquanto o site institucional prioriza apresentação e comunicação, o sistema interno precisa priorizar produtividade, organização das informações e facilidade de operação.

No projeto Nova-Web, esses conceitos foram aplicados por meio de uma tela de login, um dashboard e uma tela de consulta de produtos.

O uso de componentes reutilizáveis, alinhamento, distribuição e organização das informações no Figma contribui para uma interface mais consistente e facilita futuras alterações no projeto. A utilização de componentes e variantes também permite estruturar melhor os elementos reutilizáveis do protótipo.

## Referências

* Figma Learn — Guia de componentes no Figma.
  https://help.figma.com/hc/pt-br/articles/360038662654-Guia-de-componentes-no-Figma

* Figma Learn — Criar e usar variantes.
  https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants

* Figma Learn — Criar componentes para reutilização em designs.
  https://help.figma.com/hc/en-us/articles/360038663154-Create-components-to-reuse-in-designs
