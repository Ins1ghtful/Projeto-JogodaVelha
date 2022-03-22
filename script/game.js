//Iniciando minhas variáveis
let casas = ['','','','','','','','',''];
let jogadorDaVez = 0;
let counter = 0;
let simbolos = ['o','x'];
let gameOver = false;
let sequenciasVencedoras = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function executarJogada(posicao){
    //Caso já tenha um vencedor, não será possível executar mais nenhuma ação
    if(gameOver){
        return;
    }

    //Preenchendo as casas com X ou O
    if(casas[posicao]==''){

        casas[posicao] = simbolos[jogadorDaVez];

        gameOver = verificaVencedor();

        //Verificando se houve empate
        if(!gameOver&&counter==9){
            document.body.innerHTML += `<div class='boxMessage'>O JOGO EMPATOU</div>`;
            setTimeout(()=>{
                let elemento = document.querySelector(".boxMessage");
                elemento.parentNode.removeChild(elemento);
            },3700);
        }

        //Passando a vez para o outro jogador
        jogadorDaVez = (jogadorDaVez==0)?1:0;

    //Caso o Usuário selecione uma casa que já foi selecionada
    }else{
        document.body.innerHTML += `<div class='boxMessage'>ESCOLHA OUTRA POSIÇÃO</div>`;
        setTimeout(()=>{
            let elemento = document.querySelector(".boxMessage");
            elemento.parentNode.removeChild(elemento);
        },3700);

        let qds = document.querySelectorAll(".qd");

        qds.forEach((qd)=>{
            qd.addEventListener('click',trabalharItem);
        })
        console.log(casas[posicao]);
    }
    return gameOver;
}


//Verifica se houve algum vencedor
function verificaVencedor(){
    counter++;
    for(let i=0;i<8;i++){
        let seq = sequenciasVencedoras[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(casas[pos1]==casas[pos2]&&casas[pos1]==casas[pos3]&&casas[pos1]!=''){
            return true;
        }
    }
    return false;
}

//Zera o valor das variáveis 
function zeraVariaveis(){
    jogadorDaVez = 0;
    gameOver = false;
    counter = 0;
    for(let i=0;i<=8;i++){
        casas[i] = '';
    }
    document.body.innerHTML += `<div class='boxMessage'>O JOGO FOI REINICIADO</div>`;
    setTimeout(()=>{
        let elemento = document.querySelector(".boxMessage");
        elemento.parentNode.removeChild(elemento);
    },3700);

    let qds = document.querySelectorAll(".qd");

    qds.forEach((qd)=>{
        qd.addEventListener('click',trabalharItem);
    })
}


