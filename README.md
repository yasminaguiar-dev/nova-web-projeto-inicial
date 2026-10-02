# Projeto Nova-Web - Especificações de UI/UX (Tela de Login)

## 1. Conceitos de Usabilidade em Formulários

### Labels vs. Placeholders

As **labels** devem ser utilizadas para identificar de forma clara o que deve ser preenchido em cada campo. O placeholder serve apenas como uma orientação ou exemplo de preenchimento.

Não é recomendado utilizar o placeholder como substituto da label, pois o texto desaparece quando o usuário começa a digitar. Isso pode dificultar a identificação do campo e prejudicar a acessibilidade, principalmente para usuários que precisam de mais tempo para preencher o formulário.

Na tela de login, serão utilizadas labels como **"E-mail"** e **"Senha"**, mantendo a identificação dos campos sempre visível.

### Hierarquia Visual

A hierarquia visual ajuda o usuário a identificar quais ações são mais importantes na tela.

O botão **Primary**, representado pela ação **"Entrar"**, terá maior destaque visual, pois é a principal ação da tela de login.

As ações secundárias, como **"Esqueci minha senha"** e **"Criar conta"**, terão um destaque visual menor, utilizando textos ou botões com aparência secundária.

Dessa forma, o usuário consegue identificar rapidamente a ação principal sem confundir as diferentes opções disponíveis.

---

## 2. Estados de Validação dos Campos de Entrada (Input States)

Os campos de entrada terão diferentes estados visuais para informar ao usuário a situação atual do preenchimento.

### Default (Padrão)

O campo terá uma **borda neutra**, fundo claro e uma label visível. Esse será o estado inicial do campo antes de o usuário interagir com ele.

### Focus (Foco)

Quando o usuário selecionar o campo, ele receberá um **destaque visual**, como uma alteração na cor da borda ou um anel de foco.

Esse destaque ajuda o usuário a identificar qual campo está ativo no momento.

### Error (Erro)

Quando houver um preenchimento incorreto, o campo terá a **borda em tom vermelho** e será apresentada uma mensagem explicativa abaixo do campo.

Exemplo:

> E-mail ou senha inválidos.

A mensagem deverá informar o problema de maneira clara, ajudando o usuário a corrigi-lo.

### Success (Sucesso)

Quando o campo for preenchido corretamente, será apresentado um **indicador visual de sucesso**, como uma alteração na cor da borda ou um ícone de confirmação.

Esse estado informa ao usuário que o preenchimento foi aceito.

### Disabled (Desabilitado)

Quando um campo ou botão estiver indisponível, será utilizado um **contraste reduzido**, deixando claro que o elemento não pode ser utilizado naquele momento.

O elemento continuará identificável, mas terá uma aparência visual diferente dos elementos ativos.

---

## 3. Padrões de Acessibilidade

A tela de login deverá seguir boas práticas de acessibilidade para facilitar a utilização por diferentes usuários.

### Contraste de Cores

As cores utilizadas para textos, campos e botões deverão apresentar contraste suficiente entre o primeiro plano e o fundo.

Será buscado o contraste mínimo recomendado pelas diretrizes **WCAG**, garantindo que os textos e informações importantes sejam fáceis de visualizar.

Além da cor, os estados de erro e sucesso também utilizarão mensagens ou indicadores visuais, evitando depender somente da diferença de cores.

### Navegação por Teclado

Os elementos da tela deverão seguir uma ordem lógica de navegação utilizando a tecla **Tab**.

O usuário deverá conseguir acessar os campos de e-mail e senha, o checkbox, os links e o botão de login sem precisar utilizar o mouse.

### Leitores de Tela

Os campos deverão possuir labels claras e informações compreensíveis para usuários que utilizam leitores de tela.

As mensagens de erro também deverão explicar de forma objetiva o problema encontrado, permitindo que o usuário entenda o que precisa ser corrigido.

---

## 4. Estrutura da Tela de Login

A tela de login do projeto Nova-Web será composta pelos seguintes elementos:

* Logotipo ou nome da aplicação;
* Título da tela;
* Campo de e-mail/usuário;
* Campo de senha;
* Opção para exibir ou ocultar a senha;
* Checkbox "Lembrar de mim";
* Link "Esqueci minha senha";
* Botão principal "Entrar";
* Divisor visual para outras formas de acesso;
* Opção para criar uma conta.

A interface seguirá a identidade visual definida para o projeto Nova-Web, mantendo uma aparência simples, organizada e consistente.

---

## 5. Componentes e Variantes no Figma

No Figma serão criados componentes reutilizáveis para a tela de login.

### Componente de Input

O componente de campo de texto possuirá as seguintes variantes:

* Default;
* Focus;
* Error;
* Success.

Cada variante apresentará o estado visual correspondente e poderá possuir um texto de apoio ou mensagem de erro.

### Componente de Botão

O componente de botão possuirá:

**Tipo:**

* Primary;
* Secondary/Outline.

**Estado:**

* Default;
* Hover;
* Disabled.

O botão Primary será utilizado para a ação principal **"Entrar"**, enquanto o botão Secondary será utilizado para ações de menor prioridade.

---

## 6. Protótipo Interativo

O protótipo será desenvolvido no Figma utilizando a aba **Prototype**.

Serão configuradas interações para demonstrar os diferentes estados dos componentes, incluindo a alteração visual dos botões ao passar o cursor e o fluxo de autenticação.

Também será criado um estado de erro de autenticação contendo a mensagem:

> E-mail ou senha inválidos.

O objetivo é demonstrar como a interface responde às ações do usuário e fornece feedback durante a utilização do formulário.
