console.log("Boas-Vindas");
let nome = prompt("Qual é o seu nome? ");
console.log(`Olá, ${nome}`);
alert(`Olá, ${nome}`)
let linguagem = prompt("Qual sua linguagem de programação favorita? ");
console.log(`${linguagem}`);
let valor1 = 6;
let valor2 = 5;
let resultado = (valor1 + valor2);
console.log(`O resultado de ${valor1} + ${valor2} é ${resultado}`);
let resultado2 = (valor1 - valor2);
console.log(`O resultado de ${valor1} - ${valor2} é ${resultado2} `);
let idade = prompt("Qual é sua idade?");
if(idade >= 18){
    alert("Você já é maior de idade")
    console.log(`O usuário é maior de idade`)
} else{
    alert("Você ainda é menor de idade")
    console.log(`O usuário é menor de idade`)
}
let numero = prompt("Digite um número:");
if(numero % 2 ){
    alert(`O número ${numero} digitado é ímpar`)
}else{
    alert(`O número ${numero} digitado é par`)
};

alert("Se prepare para a contagem regressiva")
let contador = 0;
while (contador < 11){
    alert(`${contador}`);
    contador++
}

let nota = prompt("Qual foi sua nota em Mátematica? ");
if(nota >= 7){
    alert("Meus párabens, você foi aprovado")
} else{
    alert("Burro do KARALHO reprovou")
}

let numeroAl = parseInt(Math.random() * 1000 + 1 );
console.log(`O número aleátorio gereado foi ${numeroAl}`);