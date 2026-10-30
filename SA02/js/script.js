
/*
    Descricao: Funcoes JavaScript do sistema NovaWeb
    nome_arquivo: script.js
    nome_exercicio: Situacao de Aprendizagem 02
    nome_aluno: Yasmin Aguiar
    email_aluno:
    turma: TDE1BAA-26
*/

// Seleciona o formulario de login
const formLogin = document.getElementById("form-login");

// Verifica o envio do formulario
formLogin.addEventListener("submit", function(event) {

    // Impede o envio tradicional do formulario
    event.preventDefault();

    // Captura os valores digitados
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Verifica se os campos foram preenchidos
    if (email.trim() === "" || senha.trim() === "") {

        alert("Por favor, preencha todos os campos.");

    } else {

        // Exibe uma mensagem de demonstracao
        alert("Login realizado com sucesso! Bem-vindo(a) ao NovaWeb.");

        // Direciona para a pagina de perfil
        window.location.href = "perfil.html";

    }

});
