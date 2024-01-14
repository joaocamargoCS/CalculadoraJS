let cliente = {};
let clienteValidado = [];
let menuOpc = "";

while (true) {
  if (clienteValidado.length > 0) {
    let display = "";
    for (let cont = 0; cont < clienteValidado.length; cont++) {
      display +=
        cont +
        " - Nome: " +
        clienteValidado[cont].nome +
        ", Sexo: " +
        clienteValidado[cont].sexo +
        ", Idade: " +
        clienteValidado[cont].idade +
        "\n";
    }
    alert(display);
  }
  menuOpc = prompt(
    "Digite NOVO para novo cadastro ou SAIR para sair do programa "
  );
  if (menuOpc == "SAIR") {
    break;
  } else if (menuOpc == "NOVO") {
    cliente.nome = prompt("Digite o nome ");
    cliente.sexo = prompt(
      "Digite M para sexo masculino ou F para sexo feminino "
    );
    cliente.idade = prompt("Digite a idade ");
    function validacao(sexo, idade) {
      if (cliente.sexo == "F" || (cliente.sexo == "M" && cliente.idade >= 18)) {
        clienteValidado.push({
          nome: cliente.nome,
          sexo: cliente.sexo,
          idade: cliente.idade,
        });
      } else {
        alert("Homens só podem se cadastrar se forem maiores de 18 anos ");
      }
    }
    validacao(cliente.sexo, cliente.idade);
  }
}
