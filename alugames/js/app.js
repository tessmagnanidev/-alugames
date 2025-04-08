function  alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Solicita confirmação antes de devolver
        let confirmacao = confirm('Tem certeza que deseja devolver este jogo?');
        if (!confirmacao) return;
        
        
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }

    contarJogosAlugados(); // Chama a função extra que vamos criar a seguir
}

function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    console.log(`Jogos alugados: ${jogosAlugados.length}`);
}
