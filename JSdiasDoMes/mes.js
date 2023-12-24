var mes = prompt("Digite o mês que você quer saber a quantidade de dias");

switch (mes) {
  case "janeiro":
  case "marco":
  case "março":
  case "maio":
  case "julho":
  case "agosto":
  case "outubro":
  case "dezembro":
    dias = 31;
    break;
  case "fevereiro":
    dias = 28;
    break;
  case "abril":
  case "junho":
  case "setembro":
  case "novembro":
    dias = 30;
    break;
}

alert("O mês " + mes + " tem " + dias + " dias");
