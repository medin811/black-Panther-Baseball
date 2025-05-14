function adicionarJogador(e) {
    e.preventDefault();
    const nome = document.getElementById("nomeJogador").value;
    const posicao = document.getElementById("posicaoJogador").value;
    const numero = document.getElementById("numeroJogador").value;
  
    const tbody = document.getElementById("tabelaJogadores").querySelector("tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${nome}</td><td>${posicao}</td><td>${numero}</td><td><button onclick="this.parentElement.parentElement.remove()">Remover</button></td>`;
    tbody.appendChild(tr);
    e.target.reset();
  }
  
  function adicionarJogo(e) {
    e.preventDefault();
    const data = document.getElementById("dataJogo").value;
    const adversario = document.getElementById("adversarioJogo").value;
    const resultado = document.getElementById("resultadoJogo").value;
  
    const tbody = document.getElementById("tabelaJogos").querySelector("tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${data}</td><td>${adversario}</td><td>${resultado}</td><td><button onclick="this.parentElement.parentElement.remove()">Remover</button></td>`;
    tbody.appendChild(tr);
    e.target.reset();
  }
  
  function adicionarEstatistica(e) {
    e.preventDefault();
    const descricao = document.getElementById("descricaoEstatistica").value;
    const valor = document.getElementById("valorEstatistica").value;
  
    const tbody = document.getElementById("tabelaEstatisticas").querySelector("tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${descricao}</td><td>${valor}</td><td><button onclick="this.parentElement.parentElement.remove()">Remover</button></td>`;
    tbody.appendChild(tr);
    e.target.reset();
  }
  
  function adicionarNoticia(e) {
    e.preventDefault();
    const titulo = document.getElementById("tituloNoticia").value;
    const conteudo = document.getElementById("conteudoNoticia").value;
    const data = new Date().toLocaleDateString();
  
    const tbody = document.getElementById("tabelaNoticias").querySelector("tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${titulo}</td><td>${conteudo}</td><td>${data}</td><td><button onclick="this.parentElement.parentElement.remove()">Remover</button></td>`;
    tbody.appendChild(tr);
    e.target.reset();
  }
  
