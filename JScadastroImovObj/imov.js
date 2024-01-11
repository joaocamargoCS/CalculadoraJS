let opcMenu = "";
let imovel = {};
let imovelDisplay = "";

while (true) {
  if (imovel.nome && imovel.nome.length > 0) {
    for (let cont = 0; cont < imovel.nome.length; cont++) {
      imovelDisplay +=
        "DESCRIÇÃO DO IMÓVEL " +
        cont +
        ": \n NOME - " +
        imovel.nome[cont] +
        "\n QUANTIDADE DE QUARTOS - " +
        imovel.quartosQtd[cont] +
        "\n QUANTIDADE DE BANHEIROS - " +
        imovel.banheirosQtd[cont] +
        " \n GARAGEM - " +
        imovel.garagem[cont] +
        "\n";
    }
  }

  opcMenu = prompt(
    "Digite a opção que deseja utilizar: \n Salvar um imóvel - (S) \n Mostrar imóveis salvos - (M) \n Sair - (X)"
  );
  opcMenu = opcMenu.toUpperCase();

  if (opcMenu === "X") {
    break;
  }

  switch (opcMenu) {
    case "S":
      imovel.nome = imovel.nome || [];
      imovel.quartosQtd = imovel.quartosQtd || [];
      imovel.banheirosQtd = imovel.banheirosQtd || [];
      imovel.garagem = imovel.garagem || [];

      imovel.nome.push(prompt("Digite o nome do proprietário "));
      imovel.quartosQtd.push(
        parseInt(prompt("Digite a quantidade de quartos "))
      );
      imovel.banheirosQtd.push(
        parseInt(prompt("Digite a quantidade de banheiros "))
      );
      imovel.garagem.push(prompt("Possui garagem ?)"));
      break;

    case "M":
      alert(imovelDisplay);
      break;
  }
}
