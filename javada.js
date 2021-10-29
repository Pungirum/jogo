
var papai = new Audio("papai.ogg")
var arthur = new Audio("arthur.ogg")
var vovo = new Audio("vovo.ogg")
var alvaro = new Audio("alvaro.ogg")
var daniel = new Audio("daniel.ogg")
var azeem = new Audio("azeem.ogg")
var imagens = ["paulo.jpg",
    "tutuco.jpg",
    "vovo.jpg",
    "alvaro.jpg",
    "daniel.jpg",
    "azeem.jpg"
];
var cartaAF = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var fechada = 0;
var imgCartas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
for (var i = 0; i < imgCartas.length; i++) {  //Embaralhar as cartas
    var sorte = parseInt(Math.random() * imgCartas.length);
    var aux = imgCartas[sorte];
    imgCartas[sorte] = imgCartas[i]
    imgCartas[i] = aux
}
//alert(imgCartas)
//============================================
function somaArray(arg) {
    return arg.reduce((total, currentElement) => total + currentElement);
}
//===========================================
//==========================================
function mudarImg(arg) {
    //alert(imgCartas)
    //alert(arg);
    if (cartaAF[arg] === 0) { //Verifia se a carta clicada está fechada
        if (somaArray(cartaAF) < 2) {  //Se não tem duas cartas abertas abre a carta clicada
            var mudarCarta = document.getElementById(arg);
            mudarCarta.src = imagens[imgCartas[arg]];
            pos = cartaAF.indexOf(1); //verifica antes de abrir a carta atual se ja existia uma aberta
            cartaAF[arg] = 1; //Marca a carta atual como aberta
            if (imgCartas[cartaAF.indexOf(1)] == 0) {
                papai.play()
            } else if (imgCartas[cartaAF.indexOf(1)] == 1) {
                arthur.play()
            } else if (imgCartas[cartaAF.indexOf(1)] == 2) {
                vovo.play()
            } else if (imgCartas[cartaAF.indexOf(1)] == 3) {
                alvaro.play()
            } else if (imgCartas[cartaAF.indexOf(1)] == 4) {
                daniel.play()
            } else if (imgCartas[cartaAF.indexOf(1)] == 5) {
                azeem.play()
            }
        }
        if (somaArray(cartaAF) == 2) {
            setTimeout(function () {
                var primeira = cartaAF.indexOf(1);
                var segunda = cartaAF.indexOf(1, primeira + 1)
                if (imgCartas[primeira] == imgCartas[segunda]) {
                    document.getElementById(primeira).style.display = "none"
                    document.getElementById(segunda).style.display = "none"
                    cartaAF[primeira] = fechada
                    cartaAF[segunda] = fechada
                } else {
                    document.getElementById(primeira).src = "carta.jpg"
                    document.getElementById(segunda).src = "carta.jpg"
                    cartaAF[primeira] = fechada
                    cartaAF[segunda] = fechada
                }
            }, 1000)
        }
        //}else{
        //alert("Carta já aberta! beep");
    }
}