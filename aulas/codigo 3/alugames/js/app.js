
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let  imagem = gameClicado.querySelector('.dashboard__item__img');
    let  botao = gameClicado.querySelector('.dashboard__item__button');

    quantidadeDeJogos();
    if (imagem.classList.contains('dashboard__item__img--rented')){
        confirmar();
        imagem.classList.remove('dashboard__item__img--rented')
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar'
        
    } else { /*imagem vai retornar como alugado*/ 
        imagem.classList.add('dashboard__item__img--rented')
        botao.textContent = 'Devolver'
        botao.classList.add('dashboard__item__button--return')
       
    }
    
}
/*função para confirmar a devolução*/ 
function confirmar(){
    let confimacao = confirm('Você tem certeza que quer devolver o jogo?');
    if (confimacao) {
        alert('Jogo devolvido')
    } else{
        alert('O jogo não foi devolvido')
        imagem.classList.add('dashboard__item__img--rented')
        botao.textContent = 'Devolver'
        botao.classList.add('dashboard__item__button--return')
    }
}

function quantidadeDeJogos(imagem) {
    let jogo = 0;
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        console.log('O jogo está disponivel');
        jogo++
        let jogoDisponivel = jogo;
        console.log(`tem ${jogo} jogos disponiveis`)
    } else {
        console.log('O jogo está alugado');
        jogo--
        console.log(`tem ${jogo} jogos disponiveis`)
    }
}


function quantidadeDeJogos() {
    // Seleciona todas as imagens de jogos
    let jogos = document.querySelectorAll('.dashboard__item__img');
    // Inicializa a contagem com 1
    let count = 1;
    jogos.forEach(function(jogo) {
        if (jogo.classList.contains('dashboard__item__img--rented')) {
            count++;
        }
    });
    // Imprime a quantidade de jogos alugados no console
    console.log(`Quantidade de jogos alugados: ${count}`);
}