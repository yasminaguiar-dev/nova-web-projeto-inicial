```javascript
/*
Descricao: Habilitar e desabilitar um campo do formulario.
nome_arquivo: script.js
nome_exercicio: Aula 14 - CSS para Formularios
nome_aluno: Yasmin Ferreira Aguiar
email_aluno: yasmin.aguiar@portalsesisp.org.br
turma: TDE-1BAA-26
*/

const campo = document.getElementById("observacao");
const botao = document.getElementById("habilitar");

botao.addEventListener("click", function() {
    campo.disabled = false;
    campo.focus();
});

campo.addEventListener("blur", function() {
    campo.disabled = true;
});
```