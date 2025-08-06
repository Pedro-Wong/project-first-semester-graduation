
const nomeLogin = document.getElementById('Nome_login');
const senhaLogin = document.getElementById('senha_login');
const loginButton = document.getElementById('login-button');

let infoUsuario = JSON.parse(localStorage.getItem('usuario'));

// console.log(infoUsuario);

loginButton.addEventListener('click', function(event){
    let flag = 1;
    // console.log(nomeLogin.value);
    // console.log(senhaLogin.value);
    for(let usuario of infoUsuario)
    {
        if(nomeLogin.value !== usuario.nome || senhaLogin.value !== usuario.senha)
        {
            console.log(usuario.nome);
            flag = 0;
        }
        else
        {
            console.log("login exato");
            flag = 1;
            break;
        }
    }

    if(flag === 0)
    {
        alert("login não existente");
    }
    else
    {
        event.preventDefault();
        alert("Login correto, bem vindo!");
        window.location.href = "home/home.html";
        
        // body.classList.add("fade-out");
        // setTimeout(() => {
        //     window.location.href = "../index.html";
        // }, 500);
    }
})















// function entrar() {
//     console.log("Entrando no sistema...");
//     alert("Entrando no sistema...");

//     // Seleciona os inputs e elementos do DOM
//     let Nome_login = document.querySelector("#Nome_login").value;
//     let senha_login = document.querySelector("#senha_login").value;
//     let msgError = document.querySelector("#msgError");
//     let NomeLabel = document.querySelector("#NomeLabel");
//     let senhaLabel = document.querySelector("#senhaLabel");

//     // Usuário fixo para validação simples
//     let userValid = {
//         nome: "Welinton",
//         senha: "0000",
//     };

//     // Limpa mensagens e estilos vermelhos antes de validar
//     msgError.style.display = "none";
//     NomeLabel.style.color = "";
//     senhaLabel.style.color = "";
//     document.querySelector("#Nome_login").style.borderColor = "";
//     document.querySelector("#senha_login").style.borderColor = "";

//     // Validação dos campos não vazios
//     if (Nome_login === "" || senha_login === "") {
//         msgError.style.display = "block";
//         msgError.innerHTML = "Por favor, preencha todos os campos.";
//         if (Nome_login === "") {
//             NomeLabel.style.color = "red";
//             document.querySelector("#Nome_login").style.borderColor = "red";
//         }
//         if (senha_login === "") {
//             senhaLabel.style.color = "red";
//             document.querySelector("#senha_login").style.borderColor = "red";
//         }
//         return; // Para a execução aqui
//     }

//     // Validação do usuário e senha
//     if (Nome_login === userValid.nome && senha_login === userValid.senha) {
//         alert("Usuário válido!");
//         // Aqui você pode redirecionar, salvar token, etc.
//     } else {
//         alert("Usuário inválido!");
//         msgError.style.display = "block";
//         msgError.innerHTML = "Login não encontrado";
//         NomeLabel.style.color = "red";
//         senhaLabel.style.color = "red";
//         document.querySelector("#Nome_login").style.borderColor = "red";
//         document.querySelector("#senha_login").style.borderColor = "red";
//     }
// }
