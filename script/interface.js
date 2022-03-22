document.addEventListener('DOMContentLoaded',()=>{
    let qds = document.querySelectorAll(".qd");

    qds.forEach((qd)=>{
        qd.addEventListener('click',trabalharItem);
    })

})

function trabalharItem(event){
    let posicao = event.target.id;

    if(executarJogada(posicao)){
        setTimeout(()=>{
            jogadorDaVez = (jogadorDaVez==0)?"Espadas":"Escudo";
            window.alert("O jogo terminou - O ganhador foi o jogador de "+jogadorDaVez);
        },100);
    };  

    colocarSimbolo(posicao);
}

function colocarSimbolo(posicao){
    let elemento = document.getElementById(posicao.toString());
    let simbolo = casas[posicao];
    elemento.innerHTML = `<div class="${simbolo}"></div>`;
}

function reiniciarJogo(){
    let qds = document.querySelectorAll(".qd");
    qds.forEach((qd)=>{
        qd.innerHTML = "";
    })
    zeraVariaveis();
}


