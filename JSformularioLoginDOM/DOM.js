document
  .getElementById("loginEnviar")
  .addEventListener("click", function (event) {
    var email = document.getElementById("loginEmail").value;
    var senha = document.getElementById("loginSenha").value;

    if (!(email === "bob@gmail.com" && senha === "12345")) {
      alert("Usuário ou Senha inválida");
      return;
    }
    autenticarUsuario();

    console.log("loginEnviar clicado");
  });

function autenticarUsuario() {
  document.getElementById("formularioLogin").style.display = "none";
  document.getElementById("autenticadoComSucesso").style.display = "block ";
  document.getElementById("autenticadoComSucessoEmail").innerHTML = email;
}

document
  .getElementById("esqueciMinhaSenhaEnviar")
  .addEventListener("click", function (event) {
    document.getElementById("formularioLogin").style.display = "none";
    document.getElementById("esqueciMinhaSenha").style.display = "block ";
    console.log("esqueciMinhaSenha clicado");
  });

document
  .getElementById("loginEnviarEsqueciMinhaSenha")
  .addEventListener("click", function (event) {
    alert("Sua nova senha foi enviada para seu email");

    document.getElementById("formularioLogin").style.display = "block";
    document.getElementById("esqueciMinhaSenha").style.display = "none ";
    console.log("esqueciMinhaSenha clicado");
  });
