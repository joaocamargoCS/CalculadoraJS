var nome = prompt("Digite seu nome");
var sobrenome = prompt("Digite seu sobrenome");
var email = prompt("Digite seu email");
var telefone = prompt("Digite seu telefone");
var anoDeNascimento = prompt("Digite seu ano de nascimento");
var idade = 2023 - parseInt(anoDeNascimento);
var nomeComp = nome + " " + sobrenome;

alert("Cliente cadastrado com sucesso!!");
alert("Nome completo: " + nomeComp);
alert("Email: " + email);
alert("Telefone: " + telefone);
alert("Ano de nascimento: " + anoDeNascimento + " (" + idade + " anos)");
