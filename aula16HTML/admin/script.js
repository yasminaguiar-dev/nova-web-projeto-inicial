```javascript
/*
Descricao: Integracao dos dados da tabela com o formulario.
nome_arquivo: script.js
nome_exercicio: Aula 16 - Integracao de Componentes de Interface
nome_aluno: Yasmin Ferreira Aguiar
email_aluno: yasmin.aguiar@portalsesisp.org.br
turma: TDE-1BAA-26
*/

function selecionarUsuario(linha) {
    const campos = linha.getElementsByTagName("td");

    document.getElementById("nome").value = campos[0].textContent;
    document.getElementById("email").value = campos[1].textContent;
    document.getElementById("cidade").value = campos[2].textContent;

    document.getElementById("mensagem").textContent =
        "Usuario selecionado para edicao.";
}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cidade = document.getElementById("cidade").value;

    const linhas = document.querySelectorAll("#tabelaUsuarios tr");
    let usuarioEncontrado = false;

    linhas.forEach(function(linha) {
        const campos = linha.getElementsByTagName("td");

        if (campos[0].textContent === nome) {
            campos[1].textContent = email;
            campos[2].textContent = cidade;
            usuarioEncontrado = true;
        }
    });

    if (usuarioEncontrado) {
        document.getElementById("mensagem").textContent =
            "Dados atualizados com sucesso!";
    } else {
        document.getElementById("mensagem").textContent =
            "Usuario nao encontrado na tabela. Selecione uma linha antes de salvar.";
    }
});
```