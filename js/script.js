function pesquisar (){

    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";
    
    for(let dado of dados){
    
        resultados += `
            <a href="${dado.link}" target="_blank">
                    <div class="item-resultado">
                        <img src="${dado.foto}" alt="Penny, personagem de Stardew Valley">
                        <h2>${dado.nomeAldeao}</h2>
                        <div class="descricao-meta">
                            <p>${dado.descricao}</p>
                            <hr>
                            <h3>Aniversário</h3>
                            <p>${dado.aniversario}</p>
                            <hr>
                            <h3>Família</h3>
                            <ul>
                                ${dado.familia.map(membro => `<li>${membro}</li>`).join('')}
                            </ul>
                            <hr>
                            <h3>Melhores presentes</h3>
                            <ul>
                                ${dado.melhoresPresentes.map(presente => `<li>${presente}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </a>
        `
    }
    
    section.innerHTML = resultados;
}


