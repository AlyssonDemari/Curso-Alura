alert ("Boas-Vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1 );

console.log(numeroSecreto);
let chute;
let tentativas = 1;

while ( chute != numeroSecreto) {
    chute = prompt ("Escolha um número de 1 a 100");
    if (chute == numeroSecreto){
        break;
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

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto "${numeroSecreto}" com apenas ${tentativas} ${palavraTentativa} `);

// if(tentativas < 1){
//     alert(`Você descobriu o número secreto "${numeroSecreto}" com apenas ${tentativas} tentativa(s) `);
// } else {
//     alert(`Você descobriu o número secreto "${numeroSecreto}" com apenas ${tentativas} tentativa`);
// } 

