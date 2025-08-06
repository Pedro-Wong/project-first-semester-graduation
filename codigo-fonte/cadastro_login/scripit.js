const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const dataNascimento = document.getElementById('ano_nascimento');
const sexo = document.getElementsByName('genero');
const senha = document.getElementById('password');
const senhaConfirma = document.getElementById('confirm_password');
const botao = document.getElementById('button-submit');

let cont = localStorage.getItem("usuarioCount") || 0;
let dadosUsuarioObj = {};
//não deixa o array zerar
let dadosUsuario = JSON.parse(localStorage.getItem("usuario")) || [];

botao.addEventListener('click', function(event){
    event.preventDefault();
   
    // console.log(senhaConfirma.value);
    const body = document.getElementById('body');
    let valorRadio = null;

    //pegando o valor do radio 
    for(const radio of sexo)
    {
        if(radio.checked)
        {
            valorRadio = radio.value;
            break;
        }
    }
    // console.log(valorRadio);
    //verificando campos
    if(nome.value === "" || email.value === "" || cpf.value === "" || senha.value === "" || valorRadio === null || dataNascimento.value === "" || senhaConfirma.value === "")
    {
        alert("Campos vazios! Verificar \n");    
    }
    else if(senha.value != senhaConfirma.value)
    {
        alert("Senhas diferentes!");
    }
    else
    {
        //criando obj para o localStorage
        dadosUsuarioObj = {
            nome: nome.value,
            email: email.value,
            cpf: cpf.value,
            senha: senhaConfirma.value,
            sexo: valorRadio,
            nascimento: dataNascimento.value
        }


        dadosUsuario[cont] = dadosUsuarioObj;


        //adicionando dados do usuário no local storage
        localStorage.setItem(`usuario`, JSON.stringify(dadosUsuario));
        cont++;
        localStorage.setItem("usuarioCount", cont);
        
        alert("Cadastro efetuado com sucesso!");
        //redirecionando para a página login e efeito de transição
        body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 500);

        //resetando campos depois de tudo confirmado
        // sexo.forEach(radio => radio.checked = false);
        // nome.value = "";
        // email.value = "";
        // cpf.value = "";
        // senha.value = "";
        // valorRadio = null;
        // dataNascimento.value = "";
        // senhaConfirma.value = ""; 
    }
})


