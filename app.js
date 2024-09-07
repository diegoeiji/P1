function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
      
let campoPesquisa = document.getElementById("campo-pesquisa").value

// se o campoPesquisa for uma string vazia
if (!campoPesquisa) {
    section.innerHTML = "<p>Pesquise um Hyper Car</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

 // Inicializa a string que armazenará os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";  

    // Itera sobre os dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Leia a matéria completa sobre o carro mais caro do Brasil</a>
        </div>
      `;
        }
    }
  
if (!resultados) {
    resultados = "<p>Pesquise um Hyper Car</p>"
}

    // Atribui o HTML gerado à seção
    section.innerHTML = resultados;
  }

