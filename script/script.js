var counter = 0;
let qd1 = document.getElementById("1");
let qd2 = document.getElementById("2");
let qd3 = document.getElementById("3");
let qd4 = document.getElementById("4");
let qd5 = document.getElementById("5");
let qd6 = document.getElementById("6");
let qd7 = document.getElementById("7");
let qd8 = document.getElementById("8");
let qd9 = document.getElementById("9");
let lin1 = document.getElementById("linha1");
let lin2 = document.getElementById("linha2");
let lin3 = document.getElementById("linha3");


function preenche(e){
    counter += 1;
    if(counter%2==1){
        e.style.backgroundColor = "blue";
    }else{
        e.style.backgroundColor = "red";
    }
    if(counter>4){
        checkCasas();
    }   
}

function checkCasas(){

}