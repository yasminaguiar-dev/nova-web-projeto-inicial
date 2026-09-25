const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email == "") {
        alert("Digite seu e-mail.");
        return;
    }

    if (senha == "") {
        alert("Digite sua senha.");
        return;
    }

    alert("Login preenchido corretamente!");

});