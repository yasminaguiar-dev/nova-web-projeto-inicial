# Projeto Nova-Web - Especificações de UI/UX (Tela de Login)

## 1. Conceitos de Usabilidade em Formulários

### Labels vs. Placeholders

A **label** é responsável por identificar de forma clara a finalidade de um campo de formulário. Ela deve permanecer visível para que o usuário saiba qual informação deve ser inserida.

O **placeholder** funciona como uma orientação complementar ou exemplo de preenchimento. Ele não deve ser utilizado como substituto da label, pois desaparece quando o usuário começa a digitar. Isso pode dificultar a identificação do campo e a correção de informações. O W3C recomenda fornecer labels ou instruções para que o usuário saiba qual informação deve inserir.

Na tela de login do Nova-Web, serão utilizadas labels visíveis:

* **E-mail**
* **Senha**

Os placeholders serão utilizados somente como exemplos, como:

* `Digite seu e-mail`
* `Digite sua senha`

---

### Hierarquia Visual

A hierarquia visual organiza os elementos de acordo com seu nível de importância.

Na tela de login, o botão **Primary**, representado pela ação **"Entrar"**, terá maior destaque visual porque representa a principal ação que o usuário deve realizar.

As ações secundárias, como **"Esqueci minha senha"** e **"Criar conta"**, terão menor destaque visual.

Essa diferença ajuda o usuário a compreender rapidamente a função de cada elemento e evita que ações secundárias concorram visualmente com a ação principal.

No projeto Nova-Web, o botão principal utilizará a cor rosa queimado da identidade visual, enquanto as ações secundárias terão uma aparência mais discreta.

---

## 2. Estados de Validação dos Campos de Entrada

Os campos de entrada possuirão diferentes estados visuais para indicar ao usuário sua situação durante a interação.

### Default — Padrão

É o estado inicial do campo, antes de qualquer interação.

Características escolhidas:

* Borda neutra;
* Fundo claro;
* Label visível;
* Texto legível;
* Espaçamento adequado.

Esse estado representa um campo disponível para preenchimento.

---

### Focus — Foco

O estado Focus aparece quando o usuário seleciona ou navega até um campo.

Características escolhidas:

* Alteração na cor da borda;
* Destaque visual utilizando a cor rosa queimado;
* Indicador de foco claramente visível.

O indicador de foco é importante para usuários que navegam utilizando o teclado, pois permite identificar visualmente qual elemento está selecionado. As diretrizes WCAG recomendam que elementos que recebem foco pelo teclado possuam um indicador de foco visível.

---

### Error — Erro

O estado Error será utilizado quando uma informação estiver incorreta ou quando houver algum problema no preenchimento.

Características escolhidas:

* Borda em tom vermelho;
* Mensagem explicativa abaixo do campo;
* Texto de erro claro;
* Indicador visual adicional além da cor.

Exemplo:

> E-mail ou senha inválidos.

A mensagem deve explicar o problema de maneira objetiva para ajudar o usuário a corrigir o preenchimento.

---

### Success — Sucesso

O estado Success será utilizado quando o campo tiver sido preenchido corretamente.

Características escolhidas:

* Indicador visual de sucesso;
* Alteração na borda;
* Possibilidade de utilização de um ícone de confirmação;
* Mensagem de apoio quando necessário.

O objetivo é informar ao usuário que o preenchimento foi aceito.

---

### Disabled — Desabilitado

O estado Disabled será utilizado quando um campo ou botão estiver temporariamente indisponível.

Características escolhidas:

* Contraste visual reduzido;
* Aparência diferente dos elementos ativos;
* Indicação clara de que o elemento não está disponível para interação.

Mesmo desabilitado, o elemento deverá continuar identificável.

---

## 3. Padrões de Acessibilidade

### Contraste de Cores

As cores utilizadas na interface devem possuir contraste suficiente para facilitar a leitura.

De acordo com a **WCAG 2.2**, o contraste mínimo recomendado para texto normal é de **4,5:1**. Para textos grandes, o mínimo é de **3:1**.

No Nova-Web, a combinação entre fundo, textos, campos e botões deverá ser verificada para garantir que as informações importantes permaneçam legíveis.

Além disso, informações de erro e sucesso não dependerão somente da cor. Também serão utilizadas mensagens e outros indicadores visuais.

---

### Labels e Instruções

Os campos devem apresentar informações que permitam ao usuário compreender o que precisa ser preenchido.

Por isso, a tela utilizará labels visíveis acima dos campos:

* E-mail;
* Senha.

Essa escolha melhora a compreensão do formulário e também contribui para a acessibilidade. O W3C recomenda fornecer labels ou instruções quando o usuário precisa inserir informações.

---

### Navegação por Teclado

A interface deverá permitir uma navegação lógica utilizando a tecla **Tab**.

A ordem esperada de navegação será:

1. Campo de e-mail;
2. Campo de senha;
3. Opção "Lembrar de mim";
4. Link "Esqueci minha senha";
5. Botão "Entrar";
6. Link "Criar conta".

Os elementos que receberem foco deverão possuir um indicador visual.

---

### Leitores de Tela

Os campos devem possuir labels claras para que sua finalidade seja compreendida por usuários que utilizam leitores de tela.

As mensagens de erro também devem ser objetivas e informar o problema encontrado.

A interface não deve depender exclusivamente de cores ou elementos visuais para transmitir informações importantes.

---

# 4. Design System do Formulário

## Componente de Input

O componente de Input será criado utilizando **Auto Layout** no Figma.

O Auto Layout permite organizar os elementos de forma automática, controlando direção, espaçamento, preenchimento e alinhamento. Ele também facilita a adaptação do componente quando o conteúdo é alterado.

O componente possuirá as seguintes variantes:

* Default;
* Focus;
* Error;
* Success.

Cada estado apresentará uma alteração visual correspondente.

---

## Componente de Botão

Será criado um componente reutilizável de botão.

O componente possuirá dois tipos:

### Primary

Utilizado para a ação principal:

**Entrar**

### Secondary

Utilizado para ações secundárias:

**Criar conta**

ou

**Esqueci minha senha**

Os botões também possuirão estados:

* Default;
* Hover;
* Disabled.

---

## Componentes e Variantes

Componentes são elementos reutilizáveis que ajudam a manter a consistência visual de um projeto. No Figma, um componente principal pode possuir instâncias reutilizáveis em diferentes partes do design.

As variantes permitem organizar diferentes versões de um mesmo componente, como diferentes estados e tipos de botões ou campos.

No projeto Nova-Web, os componentes serão utilizados para evitar a criação manual repetida dos mesmos elementos e para manter uma aparência consistente.

---

# 5. Estrutura da Tela de Login

A tela de login será composta por:

* Logotipo ou nome **Nova-Web**;
* Título da página;
* Campo de E-mail;
* Campo de Senha;
* Opção de mostrar ou ocultar senha;
* Checkbox "Lembrar de mim";
* Link "Esqueci minha senha";
* Botão principal "Entrar";
* Divisor visual;
* Link "Criar conta".

A estrutura será centralizada e organizada para facilitar a compreensão e utilização.

---

# 6. Identidade Visual

A tela de login seguirá a identidade visual já definida para o projeto Nova-Web.

### Paleta de cores

* **Branco quente:** `#FFFDF9`
* **Bege:** `#EDE1D3`
* **Rosa queimado:** `#C98291`

### Tipografia

* **DM Serif Display:** utilizada no nome da aplicação e títulos;
* **Poppins:** utilizada em labels, campos, botões, links e textos.

A interface terá uma aparência limpa, delicada, moderna e organizada.

---

# 7. Protótipo Interativo

No Figma será criada uma segunda versão da tela representando o estado de erro de autenticação.

O fluxo principal será:

```text
Tela de Login
      ↓
   Entrar
      ↓
Tela de Login — Erro
```

Na tela de erro será apresentada a mensagem:

**E-mail ou senha inválidos.**

Também serão configuradas interações para demonstrar os estados dos componentes.

Os componentes interativos podem utilizar variantes para realizar mudanças de estado dentro do próprio protótipo. O Figma permite utilizar a ação **"Mudar para"** para conectar variantes de um mesmo conjunto de componentes.

---

# 8. Configuração do Frame e Grid

O protótipo será desenvolvido inicialmente em um frame:

**Desktop — 1440 × 900 px**

Será utilizado um sistema de grid com:

* 12 colunas;
* Gutter de 24 px;
* Margens de 80 px.

O grid será utilizado para auxiliar no alinhamento e na organização dos elementos.

---

# 9. Objetivo do Projeto

O objetivo do projeto é desenvolver uma tela de login de alta fidelidade para o Nova-Web, aplicando princípios de UI/UX, usabilidade e acessibilidade.

A interface deverá apresentar uma estrutura clara, componentes reutilizáveis, diferentes estados de interação e um protótipo funcional no Figma.

A documentação apresentada neste README servirá como base para as decisões tomadas durante a construção do protótipo.

---

# 10. Referências

* **W3C — WCAG 2.2: Labels ou Instruções**
  https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions

* **W3C — WCAG 2.2: Contraste Mínimo**
  https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum

* **W3C — WCAG 2.2: Foco Visível**
  https://www.w3.org/WAI/WCAG22/Understanding/focus-visible

* **W3C — WAI: Labeling Controls**
  https://www.w3.org/WAI/tutorials/forms/labels/

* **Figma Learn — Guia de componentes**
  https://help.figma.com/hc/pt-br/articles/360038662654-Guia-de-componentes-no-Figma

* **Figma Learn — Criar e usar variantes**
  https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants

* **Figma Learn — Layout automático**
  https://help.figma.com/hc/pt-br/articles/360040451373-Guia-do-layout-automático

* **Figma Learn — Componentes interativos com variantes**
  https://help.figma.com/hc/pt-br/articles/360061175334-Criar-componentes-interativos-com-variantes
