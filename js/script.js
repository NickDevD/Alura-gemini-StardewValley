function pesquisar (){

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if(!campoPesquisa){
        section.innerHTML = '<p class="error-message"> ❗ Nada foi encontrado. Você precisa digitar o nome de um personagem ou característica.'
        return;
    } else if(campoPesquisa.length < 3){
        section.innerHTML = '<p class="error-message"> ❗ Nada foi encontrado. Você precisa digitar algo com 3 ou mais caracteres. </p>';
        return;
    }
    
    let resultados = "";
    
    for(let dado of dados){
    
        nomeAldeao = dado.nomeAldeao.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (dado.nomeAldeao.toLocaleLowerCase().includes(campoPesquisa) ||
            dado.tags.includes(campoPesquisa)) {

            resultados += `
            <a href="${dado.link}" target="_blank">
                    <div class="item-resultado">
                        <img src="${dado.foto}" alt="${dado.alt}">
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
            `;
        }
        
    }

    if(!resultados){
        resultados = `<p class="error-message"> ❗ Nada foi encontrado. </p>`
    }
    
    section.innerHTML = resultados;
}


