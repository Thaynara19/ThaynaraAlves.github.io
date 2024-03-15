const para = document.querySelector("p");
para.addEventListener("click", atualizarNome);

function atualizarNome(){
    var nome = prompt ("Insira um novo nome");
    para.textContent = "Jogador 1 :" + nome;
    if (nomw == null || nome == ""){
        para.textContent = "Jogador 1";
    }
    else{
        document.querySelector("h1").textContent = "Bem-vindo ao jogo , " + "!";
    }
}
