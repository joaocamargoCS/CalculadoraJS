let cliente = [];
let add = "";
let remo = "";
let remoInd = "";

while (true) {
  add = prompt("Digite o nome do cliente ou SAIR ");

  if (add == "SAIR") {
    break;
  } else {
    cliente.push(add);
  }

  let listaCliente = "";
  for (let cont = 0; cont < cliente.length; cont++) {
    listaCliente += cont + "- " + cliente[cont] + "\n";
  }

  alert("Lista:\n" + listaCliente);
}

while (true) {
  remo = prompt("Quer remover algum cliente dessa lista? (S/N)");

  if (remo.toUpperCase() === "S") {
    remoInd = parseInt(prompt("Digite o Index do nome que deseja remover"));

    if (remoInd >= 0 && remoInd < cliente.length) {
      cliente.splice(remoInd, 1);
    } else {
      alert("Index inválido. Por favor, insira um index válido.");
    }
  } else {
    break;
  }
}

alert("A nova lista está a seguir");
for (let cont = 0; cont < cliente.length; cont++) {
  alert("INDEX: " + cont + "\nCLIENTE: " + cliente[cont]);
}
