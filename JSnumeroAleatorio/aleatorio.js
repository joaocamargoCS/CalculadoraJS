var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

while (true) {
  var numeroDado = parseInt(prompt("Tente adivinhar o número entre 1 e 100"));
  if (numeroDado > numeroAleatorio) {
    alert("Seu número é maior que o número secreto");
  } else if (numeroDado < numeroAleatorio) {
    alert("Seu número é menor que o número secreto");
  } else if (numeroDado == numeroAleatorio) {
    break;
  }
}
alert("Você acertou!!! \nO número secreto é " + numeroAleatorio);
