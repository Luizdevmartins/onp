const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

// Adicionado o selecionado no botão que o usuário está selecionando
botoes.forEach((botao,  indice)=>  {
    botao.addEventlistener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        

        const personagemSelecionado = document.querySelectorAll(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarBotao(){
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
function desselecionarPersonagem(){
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}
