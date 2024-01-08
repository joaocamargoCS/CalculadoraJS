let cliente = {
  nome: [],
  email: [],
  telefone: [],
};
let selecao = "";
let clienteDisplay = "";
let cont = 0;
let clienteRem = "";
let clienteRemovidos = "";

while (true) {
  clienteDisplay = "";
  if (cliente.nome.length > 0) {
    for (cont = 0; cont < cliente.nome.length; cont++) {
      clienteDisplay +=
        cont +
        " - Nome: " +
        cliente.nome[cont] +
        ", Email: " +
        cliente.email[cont] +
        ", Telefone: " +
        cliente.telefone[cont] +
        "\n";
    }
    alert("A lista de clientes é:\n" + clienteDisplay);
  }
  selecao = prompt(
    "Digite a mensagem conforme seu objetivo \n-(NOVOCLIENTE)\n-(REMOVER)\n-(SAIR)"
  );
  if (selecao == "SAIR") {
    break;
  } else if (selecao == "NOVOCLIENTE") {
    cliente.nome.push(prompt("Digite o nome do cliente"));
    cliente.email.push(prompt("Digite o email do cliente"));
    cliente.telefone.push(prompt("Digite o telefone do cliente"));
  } else if (selecao == "REMOVER") {
    clienteRem = parseInt(
      prompt("Digite o índice do item que deseja remover ")
    );
    if (clienteRem >= 0 && clienteRem < cliente.nome.length) {
      let clienteRemovidoNome = cliente.nome.splice(clienteRem, 1);
      let clienteRemovidoEmail = cliente.email.splice(clienteRem, 1);
      let clienteRemovidoTelefone = cliente.telefone.splice(clienteRem, 1);

      alert(
        "O cliente removido foi:\n" +
          "Nome: " +
          clienteRemovidoNome +
          "\n" +
          "Email: " +
          clienteRemovidoEmail +
          "\n" +
          "Telefone: " +
          clienteRemovidoTelefone
      );
    } else {
      alert("Índice inválido. Nenhum cliente removido.");
    }
  }
}
