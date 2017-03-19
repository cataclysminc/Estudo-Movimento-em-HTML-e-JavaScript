var canvas;
var contexto;
var velocidadex=5;
var velocidadey=5;
var posicaox=250;
var posicaoy=100;
var lado1 = 500;
var lado2 = 500;

function Circulo(){
    contexto.beginPath();
    contexto.fillStyle = "red";
    contexto.arc(posicaox, posicaoy, 10, 0, Math.PI*2, true);
    contexto.fill()
}

function LimparTela(){
    contexto.fillStyle = "white";
    contexto.strokeStyle = "black";
    contexto.beginPath();
    contexto.rect(0, 0, lado1, lado2);
    contexto.closePath();
    contexto.fill();
    contexto.stroke();
}

function TeclaPressionada(evt){
    switch (evt.keyCode){
        case 38:
            if (posicaoy - velocidadey > 0){
                posicaoy -= velocidadey;
            }
            break;
        case 40:
            if (posicaoy + velocidadey < lado2 ){
                posicaoy += velocidadey;
            }
            break;
        case 37:
            if (posicaox - velocidadex > 0){
                posicaox -= velocidadex;
            }
            break;
        case 39:
            if (posicaox + velocidadex < lado1){
                posicaox += velocidadex;
            }
            break;
    }
}

function Atualizar(){
    LimparTela();
    Circulo();
}

function Iniciar(){
    canvas = document.getElementById("canvas");
    contexto = canvas.getContext("2d");
    return setInterval(Atualizar, 10);
}

window.addEventListener('keydown', TeclaPressionada,true);
Iniciar();

