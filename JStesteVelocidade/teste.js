var veic1 = prompt("Digite o nome do primeiro veículo");
var velo1 = parseInt(prompt("Digite a velocidade do primeiro veículo"));
var veic2 = prompt("Digite o nome do segundo veículo");
var velo2 = parseInt(prompt("Digite a velocidade do segundo veículo"));

if (velo1 > velo2) {
  alert(veic1 + " é o veículo mais rápido");
} else if (velo1 < velo2) {
  alert(veic2 + " é o veículo mais rápido");
} else {
  alert(veic1 + " e " + veic2 + " têm a mesma velocidade");
}
