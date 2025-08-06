//logica video

//pegando o array do localStorage
let vagasFilter = JSON.parse(localStorage.getItem('card'));
//pegando o elemento pai html onde está os cards
const cardContainer = document.getElementById('card-container');
//pegando o botão limpar filtro
const limparFiltro = document.getElementById('button-filtro');
//pegando o input do titulo da seçao de filtro
const tituloFilter = document.getElementById('titulo-filter');
const salarioFilter = document.getElementById('salario-filter');
const categoriaFilter = document.getElementById('categoria-filter');
const tipoFilter = document.getElementById('filter-tipo');
const modalidadeFilter = document.getElementById('modalidade-filter');
const experienciaFilter = document.getElementById('experiencia-filter');

console.log(vagasFilter);
//mostrando os card no html e pegando as informações do localStorage
const displayData = data => {
    
    cardContainer.innerHTML = "";

    data.forEach(e => {
        cardContainer.innerHTML += `
                <div class="card-style">
                    <div>
                        <h3 id="card-title" id="card-titulo">${e.titulo}</h3>
                    </div>
                    <div>
                        <h3 class="card-text" >Tipo: </h3>
                        <p class="card-text" id="card-tipo">${e.tipo}</p>  
                    </div>
                    <div>
                        <h3 class="card-text">Experiência: </h3>
                        <p class="card-text" id="card-experiencia">${e.experiencia}</p>
                    </div>
                    <div>
                        <h3 class="card-text">Salário: </h3>
                        <p class="card-text" id="card-salario">R$ ${e.salario},00</p>
                    </div>
                    <div>
                        <h3 class="card-text">Modalidade: </h3>
                        <p class="card-text" id="card-presencial">${e.modalidade}</p>
                    </div>
                    <div>
                        <h3>Descrição breve da vaga: </h3>
                        <p id="card-descricao">${e.descricao}</p>
                    </div>
                    <div>
                        <h3>Categoria: </h3>
                        <ul id="card-categoria">
                            <li>${e.categoria}</li>
                        </ul>
                    </div>
                    <div class="button-style">
                        <button>Candidatar</button>
                    </div>
                </div>

        `
    })
}

window.addEventListener("load", displayData.bind(null, vagasFilter));

limparFiltro.addEventListener("click", function(event) {
   
    document.getElementById('form-filter').reset();
})

tituloFilter.addEventListener("keyup", (e) => {
    const search = vagasFilter.filter(i => i.titulo.toLowerCase().includes(e.target.value.toLowerCase()));
    displayData(search);
});
//lógica filtro salario
salarioFilter.addEventListener("keyup", (e) =>{
    const search = vagasFilter.filter(i => i.salario.toLowerCase().includes(e.target.value.toLowerCase()));
    displayData(search);
});

categoriaFilter.addEventListener("change", (e) => {
    const search = vagasFilter.filter(i => i.categoria.toLowerCase().includes(e.target.value.toLowerCase()));
    displayData(search);

});

tipoFilter.addEventListener("change", (e) => {
    const search = vagasFilter.filter(i => i.tipo.toLowerCase().includes(e.target.value.toLowerCase()));
    displayData(search);

});

modalidadeFilter.addEventListener("change", (e) => {
    const search = vagasFilter.filter(i => i.modalidade.toLowerCase().includes(e.target.value.toLowerCase()));
    displayData(search);

});


experienciaFilter.addEventListener("change", (e) => {
    const search = vagasFilter.filter(i => i.experiencia.toLowerCase().includes(e.target.value.toLowerCase()));
    displayData(search);
});