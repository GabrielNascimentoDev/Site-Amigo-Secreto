const listaDeAmigos = [];

function adicionarAmigo() {
    const nomes = document.getElementById('amigo').value;
    if (nomes !== '') {
        listaDeAmigos.push(nomes);
        atualizarListaDeAmigos();
        limpaCampo();
    } else {
        alert ('Por favor, insira um nome');
    }
    
}

function atualizarListaDeAmigos() {
    const lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = listaDeAmigos.map(amigo => `<li>${amigo}</li>`).join(''); 
}

function limpaCampo(){
    nomes = document.getElementById('amigo');
    nomes.value = '';
}

function sortearAmigo() {
    const resultadoDiv = document.getElementById("resultado");
  
    if (listaDeAmigos.length === 0) {
      resultadoDiv.innerHTML = "A lista está vazia! Adicione amigos antes de sortear.";
      return;
    }
  
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);

    const amigoSorteado = listaDeAmigos[indiceSorteado];
  
    resultadoDiv.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
  }
  