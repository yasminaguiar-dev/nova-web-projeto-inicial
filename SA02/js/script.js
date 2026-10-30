
/*
    Descricao: Funcoes JavaScript do sistema NovaWeb
    nome_arquivo: script.js
    nome_exercicio: Situacao de Aprendizagem 02
    nome_aluno: Yasmin Aguiar
    email_aluno:
    turma: TDE1BAA-26
*/

/* =====================================
   FORMULARIO DE LOGIN
===================================== */

const formLogin = document.getElementById("form-login");

if (formLogin) {

    formLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email.trim() === "" || senha.trim() === "") {

            alert("Por favor, preencha todos os campos.");

        } else {

            alert("Login realizado com sucesso! Bem-vindo(a) ao NovaWeb.");

            window.location.href = "perfil.html";

        }

    });

}

/* =====================================
   FORMULARIO DE PERFIL
===================================== */

const formPerfil = document.getElementById("form-perfil");

if (formPerfil) {

    formPerfil.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email-perfil").value;
        const cpf = document.getElementById("cpf").value;
        const nascimento = document.getElementById("nascimento").value;
        const tipoUsuario = document.getElementById("tipo-usuario").value;
        const estado = document.getElementById("estado").value;

        if (
            nome.trim() === "" ||
            email.trim() === "" ||
            cpf.trim() === "" ||
            nascimento === "" ||
            tipoUsuario === "" ||
            estado === ""
        ) {

            alert("Por favor, preencha todos os campos obrigatorios.");

        } else {

            alert("Informacoes do perfil preenchidas com sucesso!");

        }

    });

}
