alert ("Boas-Vindas ao jogo do número secreto");
let numeroSecreto = 2; 
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while ( chute != numeroSecreto) {
    chute = prompt ("Escolha um número de 1 a 10");
    if (chute == numeroSecreto){
        alert(`Você descobriu o número secreto "${numeroSecreto}" com apenas ${tentativas} tentativa(s) `);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}