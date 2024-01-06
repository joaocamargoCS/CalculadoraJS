let nomeCliente = [];
let clienteDavez = [];
let indRemv = "";
while (true) {
  if (nomeCliente.length > 0) {
    let filaDesc = "";
    for (let cont = 0; cont < nomeCliente.length; cont++) {
      filaDesc += cont + " - " + nomeCliente[cont] + "\n";
    }
    alert("A fila atual do banco é:\n" + filaDesc);
  }

  var pObjetivo = prompt(
    "Digite a mensagem que condiz com seu objetivo: \n\nRetirar uma senha nova ----- NOVASENHA\nChamar o cliente da vez ---- DAVEZ\nRemover um cliente da fila - REMOVER \nEncerrar o programa -------- SAIR"
  );
  if (pObjetivo == "SAIR") {
    break;
  }

  switch (pObjetivo) {
    case "NOVASENHA":
      nomeCliente.push(prompt("Digite o nome do cliente "));
      break;

    case "DAVEZ":
      if (nomeCliente.length > 0) {
        clienteDavez = nomeCliente.shift();
        alert("O cliente da vez é " + clienteDavez);
      } else {
        alert("Não há clientes na fila.");
      }
      break;
    case "REMOVER":
      if (nomeCliente.length > 0) {
        indRemv = parseInt(
          prompt("Digite o índice do cliente que deseja remover da chamada ")
        );
        let clienteRemov = nomeCliente.splice(indRemv, 1);
      } else {
        alert("Não há clientes na fila");
      }
      break;
    case "SAIR":
      break;
  }
}
