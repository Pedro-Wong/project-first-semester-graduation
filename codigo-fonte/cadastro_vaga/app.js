var form = document.getElementById('vaga-form');
var vagasList = document.getElementById('vagas-list');
var vagas = [];

const botaoHome = document.getElementById('button-home');
let localStorageFilter = {};
//se o localstorage tiver vazio começa com zero, senão pega o item armazenado
let count = localStorage.getItem("count") || 0;
//não deixa o array zerar
let dadosCard = JSON.parse(localStorage.getItem("card")) || [];

form.addEventListener('submit', function (event) {
 
  event.preventDefault(); 

  var titulo = form.titulo.value;
  var tipo = form.tipo.value;
  var quantidade = form.quantidade.value;
  var experiencia = form.experiencia.value;
  var salario = form.salario.value;
  var comissao = form.comissao.value;
  var modalidade = form.modalidade.value;
  var descricao = form.descricao.value;
  
  // criando obj que ficara dentro do array no localstorage
  localStorageFilter = {
      titulo : form.titulo.value,
      tipo : form.tipo.value,
      experiencia : form.experiencia.value,
      salario : form.salario.value,
      modalidade : form.modalidade.value,
      descricao : form.descricao.value,
      categoria: form.categoria.value
  };

  dadosCard[count] = localStorageFilter;
  // lógica local storage para a página de vagas
  localStorage.setItem(`card`, JSON.stringify(dadosCard));
  count++;
  localStorage.setItem("count", count);
  console.log(count);

  var vaga = {
    titulo: titulo, //1
    tipo: tipo,//2
    quantidade: quantidade,
    experiencia: experiencia,//3
    salario: salario, //4
    comissao: comissao,
    modalidade: modalidade, //5
    descricao: descricao//6
  };

  vagas.push(vaga);

  mostrarVagas();

  form.reset();
});

//Botao voltar para login
botaoHome.addEventListener("click", function(event){
  event.preventDefault();
  window.location.href = "../home/home.html";
})




function mostrarVagas() {
  vagasList.innerHTML = '';

  for (var i = 0; i < vagas.length; i++) {
    var vaga = vagas[i];

    var div = document.createElement('div');
    div.style.background = '#fff';
    div.style.padding = '10px';
    div.style.margin = '10px 0';
    div.style.borderRadius = '8px';

    div.innerHTML = '<strong>' + vaga.titulo + '</strong> - ' + vaga.tipo + ' - ' + vaga.modalidade + '<br>' +
                    '<small>' + vaga.descricao + '</small><br>' +
                    '<button onclick="editarVaga(' + i + ')">Editar</button> ' +
                    '<button onclick="excluirVaga(' + i + ')">Excluir</button>';

    vagasList.appendChild(div);
  }
}

function excluirVaga(indice) {
  vagas.splice(indice, 1);
  mostrarVagas();
}

function editarVaga(indice) {
  var vaga = vagas[indice];

  form.titulo.value = vaga.titulo;
  form.tipo.value = vaga.tipo;
  form.quantidade.value = vaga.quantidade;
  form.experiencia.value = vaga.experiencia;
  form.salario.value = vaga.salario;
  form.comissao.value = vaga.comissao;
  form.modalidade.value = vaga.modalidade;
  form.descricao.value = vaga.descricao;

  excluirVaga(indice);
}
