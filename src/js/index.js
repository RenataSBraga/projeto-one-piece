//Objetivo 1 - quando clicar no botão do personagem na lista marcar o botão como selecionado
//Passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll(".botao");

//Objetivo 2 - quando clicar nno botao do personagem mostrar as informaçãoes do personagem
//Passo 1 - pegar os personagemns no Js pra poder mostrar ou esconder ele
const personagem = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{
        //console.log("clicou no botão",botao);//Para  visualizar em inspecionar

        //Passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        dessselecionarBotao();

        //Passo 2 - adiconar a class "selecionado" no botão que o usuario clicou   
        botao.classList.add("selecionado");
        //Passo 3 - verificar se já existe um personagem slecionado, se sim, devemos remover a seleção dele
        desselecionarPersonagem();


        //Passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
        personagem[indice].classList.add("selecionado");

         
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function dessselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

