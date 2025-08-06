const form = document.getElementById("form-curriculo");
let curriculo = {};
let curriculoLocalStorage = JSON.parse(localStorage.getItem("curriculo")) || [];

// variaveis de curriculo
let nome = document.getElementById("nome");
let dataNascimento = document.getElementById("data_nascimento");
let genero = document.getElementById("genero");
let estadoCivil = document.getElementById("estado_civil")
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let cidade = document.getElementById("cidade");
let linkedin = document.getElementById("linkedin");
let portfolio = document.getElementById("portfolio");
let cargoDesejado = document.getElementById("cargo");
let tipoVaga = document.getElementById("tipo_vaga");
let instituicao = document.getElementById("instituicao");
let curso = document.getElementById("curso");
let statusForm = document.getElementById("status_curso");
let empresa = document.getElementById("empresa");
let cargo = document.getElementById("cargo_experiencia");
let periodo = document.getElementById("periodo");
let atividades = document.getElementById("atividades");
let cursos = document.getElementById("cursos");
let habilidades = document.getElementById("habilidades"); // transforma em array .value.split(",").map(h => h.trim()
let idioma = document.getElementById("idioma");
let nivel = document.getElementById("nivel_idioma");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    curriculo = {
        nome: document.getElementById("nome").value,
        dataNascimento: document.getElementById("data_nascimento").value,
        genero: document.getElementById("genero").value,
        estadoCivil: document.getElementById("estado_civil").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        cidade: document.getElementById("cidade").value,
        linkedin: document.getElementById("linkedin").value,
        portfolio: document.getElementById("portfolio").value,
        cargoDesejado: document.getElementById("cargo").value,
        tipoVaga: document.getElementById("tipo_vaga").value,
        instituicao: document.getElementById("instituicao").value,
        curso: document.getElementById("curso").value,
        status: document.getElementById("status_curso").value,
        empresa: document.getElementById("empresa").value,
        cargo: document.getElementById("cargo_experiencia").value,
        periodo: document.getElementById("periodo").value,
        atividades: document.getElementById("atividades").value,
        cursos: document.getElementById("cursos").value,
        habilidades: document.getElementById("habilidades").value, // transforma em array .value.split(",").map(h => h.trim())
        idioma: document.getElementById("idioma").value,
        nivel: document.getElementById("nivel_idioma").value
    };

    console.log("Dados do currículo:", curriculo);
    curriculoLocalStorage[0] = curriculo
    
    localStorage.setItem("curriculo", JSON.stringify(curriculoLocalStorage));


    alert("Currículo salvo com sucesso!");

});


window.addEventListener("DOMContentLoaded", () => {
    const dadosSalvos = JSON.parse(localStorage.getItem("curriculo")) || [];
    nome.value = dadosSalvos[0].nome;
    dataNascimento.value = dadosSalvos[0].dataNascimento;
    genero.value = dadosSalvos[0].genero;
    estadoCivil.value = dadosSalvos[0].estadoCivil;
    email.value = dadosSalvos[0].email;
    telefone.value = dadosSalvos[0].telefone;
    cidade.value = dadosSalvos[0].cidade;
    linkedin.value = dadosSalvos[0].linkedin;
    portfolio.value = dadosSalvos[0].portfolio;
    cargoDesejado.value = dadosSalvos[0].cargoDesejado;
    tipoVaga.value = dadosSalvos[0].tipoVaga;
    instituicao.value = dadosSalvos[0].instituicao;
    curso.value = dadosSalvos[0].curso;
    statusForm.value = dadosSalvos[0].status;
    empresa.value = dadosSalvos[0].empresa;
    cargo.value = dadosSalvos[0].cargo;
    periodo.value = dadosSalvos[0].periodo;
    atividades.value = dadosSalvos[0].atividades;
    cursos.value = dadosSalvos[0].cursos;
    habilidades.value = dadosSalvos[0].habilidades;
    idioma.value = dadosSalvos[0].idioma;
    nivel.value = dadosSalvos[0].nivel;

})


