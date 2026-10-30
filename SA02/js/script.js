
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

/* =====================================
   PESQUISA DE USUARIOS
===================================== */

const campoPesquisa = document.getElementById("pesquisa");
const tabelaUsuarios = document.getElementById("tabela-usuarios");
const mensagemPesquisa = document.getElementById("mensagem-pesquisa");

if (campoPesquisa && tabelaUsuarios && mensagemPesquisa) {

    campoPesquisa.addEventListener("input", function() {

        const textoPesquisa = campoPesquisa.value.toLowerCase().trim();

        const linhas = tabelaUsuarios.querySelectorAll("tbody tr");

        let quantidadeEncontrada = 0;

        linhas.forEach(function(linha) {

            const informacoes = linha.textContent.toLowerCase();

            if (informacoes.includes(textoPesquisa)) {

                linha.style.display = "";

                quantidadeEncontrada++;

            } else {

                linha.style.display = "none";

            }

        });

        if (textoPesquisa === "") {

            mensagemPesquisa.textContent = "";

        } else if (quantidadeEncontrada === 0) {

            mensagemPesquisa.textContent = "Nenhum usuario encontrado.";

        } else {

            mensagemPesquisa.textContent =
                quantidadeEncontrada + " usuario(s) encontrado(s).";

        }

    });

}
