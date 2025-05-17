function adicionarJogador(event) {
  event.preventDefault();
  const nome = document.getElementById('nomeJogador').value;
  const posicao = document.getElementById('posicaoJogador').value;
  const numero = document.getElementById('numeroJogador').value;

  const tabela = document.getElementById('tabelaJogadores').querySelector('tbody');
  const row = tabela.insertRow();
  row.innerHTML = `<td>${nome}</td><td>${posicao}</td><td>${numero}</td><td><button onclick="this.closest('tr').remove()">Remover</button></td>`;

  event.target.reset();
}

function adicionarJogo(event) {
  event.preventDefault();
  const data = document.getElementById('dataJogo').value;
  const adversario = document.getElementById('adversarioJogo').value;
  const resultado = document.getElementById('resultadoJogo').value;

  const tabela = document.getElementById('tabelaJogos').querySelector('tbody');
  const row = tabela.insertRow();
  row.innerHTML = `<td>${data}</td><td>${adversario}</td><td>${resultado}</td><td><button onclick="this.closest('tr').remove()">Remover</button></td>`;

  event.target.reset();
}

function adicionarEstatistica(event) {
  event.preventDefault();
  const descricao = document.getElementById('descricaoEstatistica').value;
  const valor = document.getElementById('valorEstatistica').value;

  const tabela = document.getElementById('tabelaEstatisticas').querySelector('tbody');
  const row = tabela.insertRow();
  row.innerHTML = `<td>${descricao}</td><td>${valor}</td><td><button onclick="this.closest('tr').remove()">Remover</button></td>`;

  event.target.reset();
}

function adicionarNoticia(event) {
  event.preventDefault();
  const titulo = document.getElementById('tituloNoticia').value;
  const conteudo = document.getElementById('conteudoNoticia').value;
  const data = new Date().toLocaleDateString();

  const tabela = document.getElementById('tabelaNoticias').querySelector('tbody');
  const row = tabela.insertRow();
  row.innerHTML = `<td>${titulo}</td><td>${conteudo}</td><td>${data}</td><td><button onclick="this.closest('tr').remove()">Remover</button></td>`;

  event.target.reset();
}

function adicionarComentario(event) {
  event.preventDefault();
  const nome = document.getElementById('nomeComentario').value;
  const texto = document.getElementById('textoComentario').value;

  const lista = document.getElementById('listaComentarios');
  const div = document.createElement('div');
  div.innerHTML = `<p><strong>${nome}:</strong> ${texto}</p>`;
  lista.appendChild(div);

  event.target.reset();
}


  
