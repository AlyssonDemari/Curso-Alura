// desafio 1 
function parOuImpar(){
    let numero = document.getElementById('parImpar').value;

    if (numero == ''){
        alert('Não foi inserido nenhum número')
    } else if(numero == 0){
        alert('O número digitado é Zero')
    } else if(numero % 2 == 0){
            alert('o número é par');
        } else {
            alert('o número é impar ');
        }
    document.getElementById('parImpar').value = '';
}

// Desafio 2

function idade(){
    let idadeDigitada = document.getElementById('idadeUsuario').value;
    if(idadeDigitada >= 18){
        alert('Vocé é maior de idade! ');
    } else {
        alert('Você é menor de idade :/');
    }
    document.getElementById('idadeUsuario').value = '';
}

// Desafio 3 

function verificarAleatorio(){
    let valorDigitado = document.getElementById('aleatorio').value;
    if (valorDigitado == ''){
        alert('A string está vazia! Você pode digitar nela');
    } else{
        alert(`Foi digitado na string "${valorDigitado}"`)
    }
    document.getElementById('aleatorio').value = '';
}

// Desafio 4 

function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2025))
