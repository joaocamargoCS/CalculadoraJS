var nom = prompt("Digite seu nome");
var visit = prompt("Você já visitou alguma cidade? (sim / nao)");
var contador = 0;
var cidade = "";
var cidades = "";
while (true) {
  if (visit == "sim") {
    var cidade = prompt("Digite o nome da cidade que você visitou");
    visit = prompt("Você visitou mais alguma cidade?");
    contador = contador + 1;
    var cidades = cidades + cidade + " , ";
  } else if (visit == "nao") {
    break;
  }
}

alert(
  nom +
    " já viajou " +
    contador +
    " vezes.\n As cidades visitadas foram: " +
    cidades
);
