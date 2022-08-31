//..........--VARIAVEIS--..........

var listapricipal =document.querySelector('.listap')

var listaitens = document.querySelector('#lista-itens')

var voltar =document.querySelector('#voltar')

var promo = document.querySelector('#promoçoes')

var porç = document.querySelector('#porçoes')

var ham = document.querySelector('#hamb')

var cachorro= document.querySelector('#cachorro')

var bebi = document.querySelector('#bebidas')

var sucos = document.querySelector('#sucos')

var vita = document.querySelector('#vitaminas')


//..........--EVENTOS--............

voltar.addEventListener('click',volte)

promo.addEventListener('click',promoçoes)

porç.addEventListener('click', porçoes)

ham.addEventListener('click',hamb )

cachorro.addEventListener('click',cachorroquente)

bebi.addEventListener('click',bebidas)

sucos.addEventListener('click',sucosnaturais)

vita.addEventListener('click',vitaminas)


//.........--FUNÇÕES--.............

//.........-- botão entrar nas promoçoes--........

function promoçoes() {
 
    listapricipal.style.display="none"

    listaitens.style.display="grid"

    
}

//...........--botão proções--................

function porçoes(){

    listapricipal.style.display="none"

    listaitens.style.display="grid"

}

//...........--botão hambugueres--................

function hamb(){

    listapricipal.style.display="none"

    listaitens.style.display="grid"

}
//...........--botão Cachorro-quente--................

function cachorroquente(){

    listapricipal.style.display="none"

    listaitens.style.display="grid"

}
//...........--botão bebidas--................

function bebidas(){

    listapricipal.style.display="none"

    listaitens.style.display="grid"

}
//...........--botão sucos naturais--................

function sucosnaturais(){

    listapricipal.style.display="none"

    listaitens.style.display="grid"

}
//...........--botão vitaminas--................

function vitaminas(){

    listapricipal.style.display="none"

    listaitens.style.display="grid"

}


//...........--botão voltar--.................


function volte(){
    listapricipal.style.display="grid"

    listaitens.style.display="none"

}




