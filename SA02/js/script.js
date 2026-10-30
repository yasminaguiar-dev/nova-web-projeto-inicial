
/*
Descricao: Validação dos formulários e pesquisa de usuários do sistema NovaWeb.
nome_arquivo: script.js
nome_exercicio: SA02 - Sistema Administrativo NovaWeb
nome_aluno: Yasmin Ferreira Aguiar
email_aluno: yasmin.aguiar@portalsesisp.org.br
turma: TDE1BAA-26
*/


/* VALIDAÇÃO DO LOGIN */

const formularioLogin = document.getElementById("form-login");

if (formularioLogin) {

    formularioLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email === "" || senha === "") {

            alert("Preencha todos os campos!");
            return;

        }

        alert("Login realizado com sucesso!");

        window.location.href = "perfil.html";

    });

}


/* VALIDAÇÃO DO PERFIL */

const formularioPerfil = document.getElementById("form-perfil");

if (formularioPerfil) {

    formularioPerfil.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email-perfil").value;
        const cpf = document.getElementById("cpf").value;
        const nascimento = document.getElementById("nascimento").value;
        const tipoUsuario = document.getElementById("tipo-usuario").value;
        const estado = document.getElementById("estado").value;

        if (
            nome === "" ||
            email === "" ||
            cpf === "" ||
            nascimento === "" ||
            tipoUsuario === "" ||
            estado === ""
        ) {

            alert("Preencha todos os campos obrigatórios!");
            return;

        }

        alert("Perfil cadastrado com sucesso!");

    });

}


/* PESQUISA NA TABELA DE USUÁRIOS */

const campoPesquisa = document.getElementById("pesquisa");

if (campoPesquisa) {

    campoPesquisa.addEventListener("input", function() {

        const pesquisa = campoPesquisa.value.toLowerCase();

        const tabela = document.getElementById("tabela-usuarios");
        const linhas = tabela.querySelectorAll("tbody tr");
        const mensagem = document.getElementById("mensagem-pesquisa");

        let quantidadeEncontrada = 0;

        linhas.forEach(function(linha) {

            const texto = linha.textContent.toLowerCase();

            if (texto.includes(pesquisa)) {

                linha.style.display = "";
                quantidadeEncontrada++;

            } else {

                linha.style.display = "none";

            }

        });

        if (quantidadeEncontrada === 0) {

            mensagem.textContent = "Nenhum usuário encontrado.";

        } else {

            mensagem.textContent =
                quantidadeEncontrada + " usuário(s) encontrado(s).";

        }

    });

}
