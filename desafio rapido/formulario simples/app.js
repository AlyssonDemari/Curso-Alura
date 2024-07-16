function nome(){
    let nomeDigitado = document.getElementById('batata').value;
    alert(`Olá ${nomeDigitado} `)
}

function limpar(){
    
    document.getElementById('batata').value = '';
}

function mudei(){
    document.getElementById('euQueVouMuda').textContent = 'Agora não tem mais volta :/';
}

function calcular(){
    document.getElementById('soma').textContent = `2 + 2 = 4 `
}

let normal = "Hello - Wolrd!";
let dividido = normal.split('-')[0];
let dividido2 = normal.split('-')[1];
console.log(dividido);
console.log(dividido2);

let numeros = "20 , 40";
let numero1 = numeros.split(',')[0];
let numero2 = numeros.split(',')[1];
console.log(numero1);
console.log(numero2);
