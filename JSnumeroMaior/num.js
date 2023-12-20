var num1 = parseInt(prompt("Digite o primeiro número"));
var num2 = parseInt(prompt("Digite o segundo número"));

if (num1 > num2) {
  alert("O maior número é " + num1);
} else if (num1 < num2) {
  alert("O maior número é " + num2);
} else {
  alert("Ambos tem o mesmo valor");
}
