console.log("Olá, Mundo!"); 


function exibirNome(nome){
    console.log(`Olá, ${nome}`);
}

exibirNome("Alice");

function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);

  function calculoMedia(media){

  }

  function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);

  function encontraMaior(a, b){
    return a > b ? a : b;
  }

  let maiorNumero = encontraMaior(15,9);
  console.log(maiorNumero);

  function dobro(numero){
    return numero * numero
  }

  let calculoDobro = dobro(2);
  console.log(calculoDobro)