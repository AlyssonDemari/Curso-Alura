let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleBot(){
    console.log('O botão foi clicado')
}

function alertBot(){
    alert('Eu amo JS')
}

function promptBot(){
    let cidade = prompt('Diga uma cidade do Brasil:');
    alert(` Eu estive em ${cidade} e lembrei de você`)
}

function somaBot(){
    let number1 = prompt('Digite um número: ');
    let number2 = prompt('Digite outro número: ');
    let soma = Number(number1) + +(number2);
    alert(`A soma entre ${number1} e ${number2} é ${soma}`) 
}


