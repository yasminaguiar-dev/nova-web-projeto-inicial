
const formulario = document.getElementById("formPerfil");
const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const nascimento = document.getElementById("nascimento");
const mensagem = document.getElementById("mensagem");
const foto = document.getElementById("fotoPerfil");

// Deixa a idade entre 16 e 100 anos
function configurarIdade() {
    const hoje = new Date();

    const idadeMinima = new Date();
    idadeMinima.setFullYear(hoje.getFullYear() - 100);

    const idadeMaxima = new Date();
    idadeMaxima.setFullYear(hoje.getFullYear() - 16);

    nascimento.min = idadeMinima.toISOString().split("T")[0];
    nascimento.max = idadeMaxima.toISOString().split("T")[0];
}

configurarIdade();

// Efeito ao passar o mouse na foto
foto.addEventListener("mouseover", function () {
    foto.style.transform = "scale(1.05)";
});

foto.addEventListener("mouseout", function () {
    foto.style.transform = "scale(1)";
});

// Adiciona os pontos e o hífen no CPF
cpf.addEventListener("input", function () {
    let numeros = cpf.value.replace(/\D/g, "");

    if (numeros.length > 11) {
        numeros = numeros.slice(0, 11);
    }

    if (numeros.length > 9) {
        numeros = numeros.slice(0, 3) + "." +
                  numeros.slice(3, 6) + "." +
                  numeros.slice(6, 9) + "-" +
                  numeros.slice(9, 11);
    } else if (numeros.length > 6) {
        numeros = numeros.slice(0, 3) + "." +
                  numeros.slice(3, 6) + "." +
                  numeros.slice(6);
    } else if (numeros.length > 3) {
        numeros = numeros.slice(0, 3) + "." +
                  numeros.slice(3);
    }

    cpf.value = numeros;
});

// Mostra uma mensagem de erro ou sucesso
function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
    mensagem.hidden = false;
}

// Verifica os campos quando o formulário é enviado
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    mensagem.hidden = true;

    // Verifica o nome
    if (nome.value.trim() === "") {
        mostrarMensagem("Digite seu nome completo.", "erro");
        nome.focus();
        return;
    }

    // Verifica se o CPF tem 11 números
    const numerosCPF = cpf.value.replace(/\D/g, "");

    if (numerosCPF.length !== 11) {
        mostrarMensagem("Digite os 11 números do CPF.", "erro");
        cpf.focus();
        return;
    }

    // Verifica a idade
    const dataNascimento = new Date(nascimento.value + "T00:00:00");
    const hoje = new Date();

    const limiteMinimo = new Date();
    limiteMinimo.setFullYear(hoje.getFullYear() - 100);

    const limiteMaximo = new Date();
    limiteMaximo.setFullYear(hoje.getFullYear() - 16);

    if (!nascimento.value ||
        dataNascimento < limiteMinimo ||
        dataNascimento > limiteMaximo) {
        mostrarMensagem("A idade deve estar entre 16 e 100 anos.", "erro");
        nascimento.focus();
        return;
    }

    // Verifica o tipo de perfil
    const tipoPerfil = formulario.querySelector(
        'input[name="tipoPerfil"]:checked'
    );

    if (!tipoPerfil) {
        mostrarMensagem("Selecione o tipo de perfil.", "erro");
        return;
    }

    // Verifica os interesses
    const interesses = formulario.querySelectorAll(
        'input[name="interesses"]:checked'
    );

    if (interesses.length === 0) {
        mostrarMensagem("Selecione pelo menos um interesse.", "erro");
        return;
    }

    // Verifica o estado
    const estado = document.getElementById("estado");

    if (estado.value === "") {
        mostrarMensagem("Selecione seu estado.", "erro");
        estado.focus();
        return;
    }

    // Se tudo estiver preenchido corretamente
    mostrarMensagem("Perfil validado com sucesso!", "sucesso");
});