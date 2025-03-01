// Array para armazenar os nomes dos amigos
let amigos = [];
// Array para armazenar os nomes já sorteados
let amigosSorteados = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        inputAmigo.value = ''; // Limpa o campo de input
        atualizarListaAmigos();
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    const buttonSortear = document.querySelector('.button-draw');

    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    if (amigosSorteados.length === amigos.length) {
        resultado.innerHTML = `<li>Todos os nomes já foram sorteados!</li>`;
        buttonSortear.disabled = true; // Desabilita o botão de sortear
        return;
    }

    // Sorteia um amigo aleatório que ainda não foi sorteado
    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigosSorteados.includes(amigoSorteado));

    // Adiciona o amigo sorteado à lista de sorteados
    amigosSorteados.push(amigoSorteado);

    // Esconde a lista de nomes
    listaAmigos.style.display = 'none';

    // Exibe o amigo sorteado
    resultado.innerHTML = `<li>O amigo secreto sorteado é o: <strong>${amigoSorteado}</strong></li>`;

    // Verifica se todos os nomes foram sorteados
    if (amigosSorteados.length === amigos.length) {
        resultado.innerHTML += `<li>Todos os nomes já foram sorteados!</li>`;
        buttonSortear.disabled = true; // Desabilita o botão de sortear
    }
}