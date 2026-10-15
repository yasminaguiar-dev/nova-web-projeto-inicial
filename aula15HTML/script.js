```javascript
/*
Descricao: Capturar o envio do formulario e exibir mensagem de sucesso.
nome_arquivo: script.js
nome_exercicio: Aula 15 - JavaScript aplicado a Formularios
nome_aluno: Yasmin Aguiar
email_aluno: yasmin.aguiar@portalsesisp.org.br
turma: TDE-1BAA-26
*/

function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Cadastrado com sucesso, " + nome + "!";
    mensagem.hidden = false;

    return false;
}
```