//..........--VARIAVEIS--........../*
var listapricipal =document.querySelector('.listap')

var listaitens = document.querySelector('#lista-folha-itens')

var voltar =document.querySelector('#voltar')

var carrinho=document.querySelector('#carrinho-ext')

var listaInicial= {
    promo : document.querySelector('#promoçoes'),
    porç : document.querySelector('#porçoes'),
    ham : document.querySelector('#hamb'),
    cachorroquen : document.querySelector('#cachorro'),
    bebi : document.querySelector('#bebidas'),
    sucos : document.querySelector('#sucos'),
    vita : document.querySelector('#vitaminas')


}

var promo = document.querySelector('#promoçoes')

var porç = document.querySelector('#porçoes')
 
var ham = document.querySelector('#hamb')

var cachorroquen= document.querySelector('#cachorro')

var bebi = document.querySelector('#bebidas')

var sucos = document.querySelector('#sucos')

var vita = document.querySelector('#vitaminas')




var titulo =document.querySelector('#titulo-cabeçalho-itens')

//----------VARIAVEIS--ITENS-------------//
var item ={
    item1:document.querySelector('.item1'),
    item2 : document.querySelector('.item2'),
    item3 : document.querySelector('.item3'),
    item4 : document.querySelector('.item4'),
    item5 : document.querySelector('.item5'),
    item6 : document.querySelector('.item6'),
    item7 : document.querySelector('.item7'),
    item8 : document.querySelector('.item8'),
    item9 : document.querySelector('.item9'),
    item10 : document.querySelector('.item10')


}

var item1 = document.querySelector('.item1')
var item2 = document.querySelector('.item2')
var item3 = document.querySelector('.item3')
var item4 = document.querySelector('.item4')
var item5 = document.querySelector('.item5')
var item6 = document.querySelector('.item6')
var item7 = document.querySelector('.item7')
var item8 = document.querySelector('.item8')
var item9 = document.querySelector('.item9')
var item10 = document.querySelector('.item10')


//..........--EVENTOS--............


carrinho.addEventListener('click',carrinhocompras)

promo.addEventListener('click',promoçoes)

porç.addEventListener('click', porçoes)

ham.addEventListener('click',hamb )

cachorroquen.addEventListener('click',cachorroquente)

bebi.addEventListener('click',bebidas)

sucos.addEventListener('click',sucosnaturais)

vita.addEventListener('click',vitaminas)


//.........--FUNÇÕES--.............

//.........-- botão entrar nas promoçoes--........

function promoçoes() {
 
    listapricipal.style.display="none"

    listaitens.style.display="block"
    
    titulo.innerHTML='Promoções'
    var promo =[
        { nome:'2 X-tudos',descriçao:'<strong>Descrição:</strong> Pão, carne, queijo, presunto, bacon, ovo, alface, ketchup, maionese temperada, e batata palha.',valor:'R$ 19,99',imagem:"imagens/x-tudo.png"},

        { nome:'Combo X-burguer',descriçao:'<strong>Descrição:</strong> lanche + batata frita + guaravita ou guaracamp.',valor:'R$ 12,00',imagem:"imagens/x-tudo.png"},

        { nome:'Combo Duplo cheddar',descriçao:' <strong>Descrição:</strong> lanche + batata frita + guaravita ou guaracamp.',valor:'R$ 16,00',imagem:"imagens/x-tudo.png"},

        { nome:'Combo X-Tudo ',descriçao:'<strong>Descrição:</strong> lanche + batata frita + guaravita ou guaracamp.',valor:'R$ 16,00',imagem:"imagens/x-tudo.png"},

        { nome:'Combo X-Picanha',descriçao:'<strong>Descrição:</strong>  lanche + batata frita + refrigerante lata.',valor:'R$ 25,00',imagem:"imagens/x-tudo.png"},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''}

    ]
    console.log(promo)
//..............--item-1--...............
    var tituloitem1= document.querySelector('.titulo-item1')

    var descriçãoitem1= document.querySelector('.descriçao-item1')

    var valoritem1 =document.querySelector('.valor-item1')
    
    tituloitem1.innerHTML=promo[0].nome

    descriçãoitem1.innerHTML=promo[0].descriçao

    valoritem1.innerHTML= promo[0].valor
    
    document.querySelector('.img-item1').src=promo[0].imagem

   //..............--item-2--...............

    var tituloitem2= document.querySelector('.titulo-item2')

    var descriçãoitem2= document.querySelector('.descriçao-item2')

    var valoritem2 =document.querySelector('.valor-item2')

    tituloitem2.innerHTML=promo[1].nome

    descriçãoitem2.innerHTML=promo[1].descriçao

    valoritem2.innerHTML= promo[1].valor
    
    document.querySelector('.img-item2').src=promo[1].imagem

    //..............--item-3--...............

    var tituloitem3= document.querySelector('.titulo-item3')

    var descriçãoitem3= document.querySelector('.descriçao-item3')

    var valoritem3 =document.querySelector('.valor-item3')

    tituloitem3.innerHTML=promo[2].nome

    descriçãoitem3.innerHTML=promo[2].descriçao

    valoritem3.innerHTML= promo[2].valor

    document.querySelector('.img-item3').src=promo[2].imagem

    //..............--item-4--...............

    var tituloitem4= document.querySelector('.titulo-item4')

    var descriçãoitem4= document.querySelector('.descriçao-item4')

    var valoritem4 =document.querySelector('.valor-item4')

    tituloitem4.innerHTML=promo[3].nome

    descriçãoitem4.innerHTML=promo[3].descriçao

    valoritem4.innerHTML=promo[3].valor

    document.querySelector('.img-item4').src=promo[3].imagem

    //..............--item-5--...............

    var tituloitem5= document.querySelector('.titulo-item5')

    var descriçãoitem5= document.querySelector('.descriçao-item5')

    var valoritem5 =document.querySelector('.valor-item5')

    tituloitem5.innerHTML=promo[4].nome

    descriçãoitem5.innerHTML=promo[4].descriçao

    valoritem5.innerHTML= promo[4].valor

    document.querySelector('.img-item5').src=promo[4].imagem

    //..............--item-6--...............

    var tituloitem6= document.querySelector('.titulo-item6')

    var descriçãoitem6= document.querySelector('.descriçao-item6')

    var valoritem6 =document.querySelector('.valor-item6')
    
    tituloitem6.innerHTML=promo[5].nome

    descriçãoitem6.innerHTML=promo[5].descriçao

    valoritem6.innerHTML= promo[5].valor
    
    document.querySelector('.img-item6').src=promo[5].imagem

   //..............--item-7--...............

    var tituloitem7= document.querySelector('.titulo-item7')

    var descriçãoitem7= document.querySelector('.descriçao-item7')

    var valoritem7 =document.querySelector('.valor-item7')

    tituloitem7.innerHTML=promo[6].nome

    descriçãoitem7.innerHTML=promo[6].descriçao

    valoritem7.innerHTML= promo[6].valor
    
    document.querySelector('.img-item7').src=promo[6].imagem

    //..............--item-8--...............

    var tituloitem8= document.querySelector('.titulo-item8')

    var descriçãoitem8= document.querySelector('.descriçao-item8')

    var valoritem8 =document.querySelector('.valor-item8')

    tituloitem8.innerHTML=promo[7].nome

    descriçãoitem8.innerHTML=promo[7].descriçao

    valoritem8.innerHTML= promo[7].valor

    document.querySelector('.img-item8').src=promo[7].imagem

    //..............--item-9--...............

    var tituloitem9= document.querySelector('.titulo-item9')

    var descriçãoitem9= document.querySelector('.descriçao-item9')

    var valoritem9 =document.querySelector('.valor-item9')

    tituloitem9.innerHTML=promo[8].nome

    descriçãoitem9.innerHTML=promo[8].descriçao

    valoritem9.innerHTML=promo[8].valor

    document.querySelector('.img-item9').src=promo[8].imagem

    //..............--item-10--...............

    var tituloitem10= document.querySelector('.titulo-item10')

    var descriçãoitem10= document.querySelector('.descriçao-item10')

    var valoritem10 =document.querySelector('.valor-item10')

    tituloitem10.innerHTML=promo[9].nome

    descriçãoitem10.innerHTML=promo[9].descriçao

    valoritem10.innerHTML= promo[9].valor

    document.querySelector('.img-item10').src=promo[9].imagem

}

//...........----------------------------------------------botão proções---------------................

function porçoes(){

    listapricipal.style.display="none"

    listaitens.style.display="block"

    titulo.innerHTML='Porções'

    let porçoes=[
        { nome:' Batata Frita 200g',descriçao:'<strong>Descrição:</strong>Batata frita , ketchup, maionese temperada,queijo ralado e orégano.',valor:'R$ 7,00',imagem:''},
    
        { nome:'Batata Frita 400g',descriçao:'<strong>Descrição:</strong>   Batata frita , calabresa, ketchup, maionese temperada,queijo ralado e orégano.',valor:'R$ 14,00',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},
    ]
//..............--item-1--...............
var tituloitem1= document.querySelector('.titulo-item1')

var descriçãoitem1= document.querySelector('.descriçao-item1')

var valoritem1 =document.querySelector('.valor-item1')

tituloitem1.innerHTML=porçoes[0].nome

descriçãoitem1.innerHTML=porçoes[0].descriçao

valoritem1.innerHTML= porçoes[0].valor

document.querySelector('.img-item1').src=porçoes[0].imagem

//..............--item-2--...............

var tituloitem2= document.querySelector('.titulo-item2')

var descriçãoitem2= document.querySelector('.descriçao-item2')

var valoritem2 =document.querySelector('.valor-item2')

tituloitem2.innerHTML=porçoes[1].nome

descriçãoitem2.innerHTML=porçoes[1].descriçao

valoritem2.innerHTML= porçoes[1].valor

document.querySelector('.img-item2').src=porçoes[1].imagem

//..............--item-3--...............

var tituloitem3= document.querySelector('.titulo-item3')

var descriçãoitem3= document.querySelector('.descriçao-item3')

var valoritem3 =document.querySelector('.valor-item3')

tituloitem3.innerHTML=porçoes[2].nome

descriçãoitem3.innerHTML=porçoes[2].descriçao

valoritem3.innerHTML= porçoes[2].valor

document.querySelector('.img-item3').src=porçoes[2].imagem

//..............--item-4--...............

var tituloitem4= document.querySelector('.titulo-item4')

var descriçãoitem4= document.querySelector('.descriçao-item4')

var valoritem4 =document.querySelector('.valor-item4')

tituloitem4.innerHTML=porçoes[3].nome

descriçãoitem4.innerHTML=porçoes[3].descriçao

valoritem4.innerHTML=porçoes[3].valor

document.querySelector('.img-item4').src=porçoes[3].imagem

//..............--item-5--...............

var tituloitem5= document.querySelector('.titulo-item5')

var descriçãoitem5= document.querySelector('.descriçao-item5')

var valoritem5 =document.querySelector('.valor-item5')

tituloitem5.innerHTML=porçoes[4].nome

descriçãoitem5.innerHTML=porçoes[4].descriçao

valoritem5.innerHTML= porçoes[4].valor

document.querySelector('.img-item5').src=porçoes[4].imagem

//..............--item-6--...............

var tituloitem6= document.querySelector('.titulo-item6')

var descriçãoitem6= document.querySelector('.descriçao-item6')

var valoritem6 =document.querySelector('.valor-item6')

tituloitem6.innerHTML=porçoes[5].nome

descriçãoitem6.innerHTML=porçoes[5].descriçao

valoritem6.innerHTML= porçoes[5].valor

document.querySelector('.img-item6').src=porçoes[5].imagem

//..............--item-7--...............

var tituloitem7= document.querySelector('.titulo-item7')

var descriçãoitem7= document.querySelector('.descriçao-item7')

var valoritem7 =document.querySelector('.valor-item7')

tituloitem7.innerHTML=porçoes[6].nome

descriçãoitem7.innerHTML=porçoes[6].descriçao

valoritem7.innerHTML= porçoes[6].valor

document.querySelector('.img-item7').src=porçoes[6].imagem

//..............--item-8--...............

var tituloitem8= document.querySelector('.titulo-item8')

var descriçãoitem8= document.querySelector('.descriçao-item8')

var valoritem8 =document.querySelector('.valor-item8')

tituloitem8.innerHTML=porçoes[7].nome

descriçãoitem8.innerHTML=porçoes[7].descriçao

valoritem8.innerHTML= porçoes[7].valor

document.querySelector('.img-item8').src=porçoes[7].imagem

//..............--item-9--...............

var tituloitem9= document.querySelector('.titulo-item9')

var descriçãoitem9= document.querySelector('.descriçao-item9')

var valoritem9 =document.querySelector('.valor-item9')

tituloitem9.innerHTML=porçoes[8].nome

descriçãoitem9.innerHTML=porçoes[8].descriçao

valoritem9.innerHTML=porçoes[8].valor

document.querySelector('.img-item9').src=porçoes[8].imagem

//..............--item-10--...............

var tituloitem10= document.querySelector('.titulo-item10')

var descriçãoitem10= document.querySelector('.descriçao-item10')

var valoritem10 =document.querySelector('.valor-item10')

tituloitem10.innerHTML=porçoes[9].nome

descriçãoitem10.innerHTML=porçoes[9].descriçao

valoritem10.innerHTML= porçoes[9].valor

document.querySelector('.img-item10').src=porçoes[9].imagem

   

}

//...........----------------------------botão hambugueres------------------------................

function hamb(){

    listapricipal.style.display="none"

    listaitens.style.display="block"

    titulo.innerHTML='Hambúrgueres'

    let Hamburguer=[
        { nome:'Hambúrguer',descriçao:'<strong>Descrição:</strong>   Pão, carne, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 5,00',imagem:'imagens/x-tudo.png'},

        { nome:'X-Búrguer',descriçao:'<strong>Descrição:</strong>   Pão, carne, queijo, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 6,00',imagem:'imagens/x-tudo.png'},

        { nome:'Duplo X-Búrguer ',descriçao:' <strong>Descrição:</strong>  Pão, 2 carnes, 2 queijos, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 10,00',imagem:'imagens/x-tudo.png'},

        { nome:'Duplo Cheddar',descriçao:'<strong>Descrição:</strong>Pão, 2 carnes, 2 cheddar, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 10,00',imagem:'imagens/x-tudo.png'},

        { nome:'X-Egg ',descriçao:' <strong>Descrição:</strong> Pão, carne, queijo , alface, ketchup ,maionese temperada , e batata palha.',valor:' R$ 9,00',imagem:'imagens/x-tudo.png'},

        { nome:'X-Tudo',descriçao:'<strong>Descrição:</strong>   Pão, carne, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 9,00',imagem:'imagens/x-tudo.png'},

        { nome:'X-Trovão',descriçao:'<strong>Descrição:</strong>    Pão, 2 carnes, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 14,00',imagem:'imagens/x-tudo.png'},

        { nome:'X-Tudão',descriçao:' <strong>Descrição:</strong> Pão, 2 carnes, 2 queijos, 2 presuntos, bacon, 2 ovos, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 16,00',imagem:'imagens/x-tudo.png'},

        { nome:'X-Calabresa',descriçao:' <strong>Descrição:</strong> Pão, carne, queijo, presunto, calabresa, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 13,00',imagem:'imagens/x-tudo.png'},

        { nome:'X-Picanha',descriçao:'<strong>Descrição:</strong> Pão, carne de picanha 120g, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 16,0',imagem:'imagens/x-tudo.png'},
    ]
    

    //..............--item-1--...............
    var tituloitem1= document.querySelector('.titulo-item1')

    var descriçãoitem1= document.querySelector('.descriçao-item1')

    var valoritem1 =document.querySelector('.valor-item1')
    
    tituloitem1.innerHTML=Hamburguer[0].nome

    descriçãoitem1.innerHTML=Hamburguer[0].descriçao

    valoritem1.innerHTML= Hamburguer[0].valor
    
    document.querySelector('.img-item1').src=Hamburguer[0].imagem

   //..............--item-2--...............

    var tituloitem2= document.querySelector('.titulo-item2')

    var descriçãoitem2= document.querySelector('.descriçao-item2')

    var valoritem2 =document.querySelector('.valor-item2')

    tituloitem2.innerHTML=Hamburguer[1].nome

    descriçãoitem2.innerHTML=Hamburguer[1].descriçao

    valoritem2.innerHTML= Hamburguer[1].valor

    document.querySelector('.img-item2').src=Hamburguer[1].imagem

    //..............--item-3--...............
   
    var tituloitem3= document.querySelector('.titulo-item3')

    var descriçãoitem3= document.querySelector('.descriçao-item3')

    var valoritem3 =document.querySelector('.valor-item3')

    tituloitem3.innerHTML=Hamburguer[2].nome

    descriçãoitem3.innerHTML=Hamburguer[2].descriçao

    valoritem3.innerHTML= Hamburguer[2].valor

    document.querySelector('.img-item3').src=Hamburguer[2].imagem

    //..............--item-4--...............
    var tituloitem4= document.querySelector('.titulo-item4')

    var descriçãoitem4= document.querySelector('.descriçao-item4')

    var valoritem4 =document.querySelector('.valor-item4')

    tituloitem4.innerHTML=Hamburguer[3].nome

    descriçãoitem4.innerHTML=Hamburguer[3].descriçao

    valoritem4.innerHTML= Hamburguer[3].valor

    document.querySelector('.img-item4').src=Hamburguer[3].imagem

    //..............--item-5--...............
   
    var tituloitem5= document.querySelector('.titulo-item5')

    var descriçãoitem5= document.querySelector('.descriçao-item5')

    var valoritem5 =document.querySelector('.valor-item5')

    tituloitem5.innerHTML=Hamburguer[4].nome

    descriçãoitem5.innerHTML=Hamburguer[4].descriçao

    valoritem5.innerHTML= Hamburguer[4].valor

    document.querySelector('.img-item5').src=Hamburguer[4].imagem

    //..............--item-6--...............
    
    var tituloitem6= document.querySelector('.titulo-item6')

    var descriçãoitem6= document.querySelector('.descriçao-item6')

    var valoritem6 =document.querySelector('.valor-item6')
    
    tituloitem6.innerHTML=Hamburguer[5].nome

    descriçãoitem6.innerHTML=Hamburguer[5].descriçao

    valoritem6.innerHTML= Hamburguer[5].valor
    
    document.querySelector('.img-item6').src=Hamburguer[5].imagem

    //..............--item-7--...............

    var tituloitem7= document.querySelector('.titulo-item7')

    var descriçãoitem7= document.querySelector('.descriçao-item7')

    var valoritem7 =document.querySelector('.valor-item7')

    tituloitem7.innerHTML=Hamburguer[6].nome

    descriçãoitem7.innerHTML=Hamburguer[6].descriçao

    valoritem7.innerHTML= Hamburguer[6].valor

    document.querySelector('.img-item7').src=Hamburguer[6].imagem

    //..............--item-8--...............

    var tituloitem8= document.querySelector('.titulo-item8')

    var descriçãoitem8= document.querySelector('.descriçao-item8')

    var valoritem8 =document.querySelector('.valor-item8')

    tituloitem8.innerHTML=Hamburguer[7].nome

    descriçãoitem8.innerHTML=Hamburguer[7].descriçao

    valoritem8.innerHTML= Hamburguer[7].valor

    document.querySelector('.img-item8').src=Hamburguer[7].imagem

    //..............--item-9--...............

    var tituloitem9= document.querySelector('.titulo-item9')

    var descriçãoitem9= document.querySelector('.descriçao-item9')

    var valoritem9 =document.querySelector('.valor-item9')

    tituloitem9.innerHTML= Hamburguer[8].nome

    descriçãoitem9.innerHTML= Hamburguer[8].descriçao

    valoritem9.innerHTML= Hamburguer[8].valor

    document.querySelector('.img-item9').src=Hamburguer[8].imagem

    //..............--item-10--...............

    var tituloitem10= document.querySelector('.titulo-item10')

    var descriçãoitem10= document.querySelector('.descriçao-item10')

    var valoritem10 =document.querySelector('.valor-item10')

    tituloitem10.innerHTML=Hamburguer[9].nome

    descriçãoitem10.innerHTML=Hamburguer[9].descriçao

    valoritem10.innerHTML= Hamburguer[9].valor

    document.querySelector('.img-item10').src=Hamburguer[9].imagem

    }
    //...........-------------------------------botão Cachorro-quente-------------------------------................

function cachorroquente(){

        listapricipal.style.display="none"

        listaitens.style.display="block"
        
        titulo.innerHTML='Cachorro'


        var cachorro =[
            { nome:'Linguiça',descriçao:'<strong>Descrição:</strong>    Pão, salcicha, molho, ketchup, maionese, ovo de codorna, azeite, azeitona, queijo relado, alho torrado,cheddar,catupiry e batta palha .',valor:'R$ 12,00',imagem:''},

            { nome:'Salcicha',descriçao:'<strong>Descrição:</strong> Pão, salcicha, molho, ketchup, maionese, ovo de codorna, azeite, azeitona, queijo relado, alho torrado,cheddar,catupiry e batta palha',valor:'R$ 10,00',imagem:''},
    
            { nome:'',descriçao:'',valor:'',imagem:''},
    
            { nome:'',descriçao:'',valor:'',imagem:''},
    
            { nome:'',descriçao:'',valor:'',imagem:''},
    
            { nome:'',descriçao:'',valor:'',imagem:''},
    
            { nome:'',descriçao:'',valor:'',imagem:''},
    
            { nome:'',descriçao:'',valor:'',imagem:''},
            
            { nome:'',descriçao:'',valor:'',imagem:''},
    
            { nome:'',descriçao:'',valor:'',imagem:''}

        ]


        //-------------item -1-----------------
        var tituloitem1= document.querySelector('.titulo-item1')

        var descriçãoitem1= document.querySelector('.descriçao-item1')

        var valoritem1 =document.querySelector('.valor-item1')
        
        

        tituloitem1.innerHTML= cachorro[0].nome

        descriçãoitem1.innerHTML= cachorro[0].descriçao

        valoritem1.innerHTML= cachorro[0].valor
        
        document.querySelector('.img-item1').src=cachorro[0].imagem

    


    //..............--item-2--...............


    var tituloitem2= document.querySelector('.titulo-item2')

    var descriçãoitem2= document.querySelector('.descriçao-item2')

    var valoritem2 =document.querySelector('.valor-item2')



    tituloitem2.innerHTML=cachorro[1].nome

    descriçãoitem2.innerHTML=cachorro[1].descriçao

    valoritem2.innerHTML= cachorro[1].valor

    document.querySelector('.img-item2').src=cachorro[1].imagem

    //..............--item-3--...............

var tituloitem3= document.querySelector('.titulo-item3')

var descriçãoitem3= document.querySelector('.descriçao-item3')

var valoritem3 =document.querySelector('.valor-item3')

tituloitem3.innerHTML=cachorro[2].nome

descriçãoitem3.innerHTML=cachorro[2].descriçao

valoritem3.innerHTML= cachorro[2].valor

document.querySelector('.img-item3').src=cachorrcachorro[2].imagem

//..............--item-4--...............

var tituloitem4= document.querySelector('.titulo-item4')

var descriçãoitem4= document.querySelector('.descriçao-item4')

var valoritem4 =document.querySelector('.valor-item4')

tituloitem4.innerHTML=cachorro[3].nome

descriçãoitem4.innerHTML=cachorro[3].descriçao

valoritem4.innerHTML=cachorro[3].valor

document.querySelector('.img-item4').src=cachorro[3].imagem

//..............--item-5--...............

var tituloitem5= document.querySelector('.titulo-item5')

var descriçãoitem5= document.querySelector('.descriçao-item5')

var valoritem5 =document.querySelector('.valor-item5')

tituloitem5.innerHTML=cachorro[4].nome

descriçãoitem5.innerHTML=cachorro[4].descriçao

valoritem5.innerHTML= cachorro[4].valor

document.querySelector('.img-item5').src=cachorro[4].imagem

//..............--item-6--...............

var tituloitem6= document.querySelector('.titulo-item6')

var descriçãoitem6= document.querySelector('.descriçao-item6')

var valoritem6 =document.querySelector('.valor-item6')

tituloitem6.innerHTML=cachorro[5].nome

descriçãoitem6.innerHTML=cachorro[5].descriçao

valoritem6.innerHTML= cachorro[5].valor

document.querySelector('.img-item6').src=cachorros[5].imagem

//..............--item-7--...............

var tituloitem7= document.querySelector('.titulo-item7')

var descriçãoitem7= document.querySelector('.descriçao-item7')

var valoritem7 =document.querySelector('.valor-item7')

tituloitem7.innerHTML=cachorro[6].nome

descriçãoitem7.innerHTML=cachorro[6].descriçao

valoritem7.innerHTML= cachorro[6].valor

document.querySelector('.img-item7').src=cachorro[6].imagem

//..............--item-8--...............

var tituloitem8= document.querySelector('.titulo-item8')

var descriçãoitem8= document.querySelector('.descriçao-item8')

var valoritem8 =document.querySelector('.valor-item8')

tituloitem8.innerHTML=cachorro[7].nome

descriçãoitem8.innerHTML=cachorro[7].descriçao

valoritem8.innerHTML= cachorro[7].valor

document.querySelector('.img-item8').src=cachorro[7].imagem

//..............--item-9--...............

var tituloitem9= document.querySelector('.titulo-item9')

var descriçãoitem9= document.querySelector('.descriçao-item9')

var valoritem9 =document.querySelector('.valor-item9')

tituloitem9.innerHTML=cachorro[8].nome

descriçãoitem9.innerHTML=cachorro[8].descriçao

valoritem9.innerHTML=cachorro[8].valor

document.querySelector('.img-item9').src=cachorro[8].imagem

//..............--item-10--...............

var tituloitem10= document.querySelector('.titulo-item10')

var descriçãoitem10= document.querySelector('.descriçao-item10')

var valoritem10 =document.querySelector('.valor-item10')

tituloitem10.innerHTML=cachorro[9].nome

descriçãoitem10.innerHTML=cachorro[9].descriçao

valoritem10.innerHTML= cachorro[9].valor

document.querySelector('.img-item10').src=cachorro[9].imagem
        

}
//...........--botão bebidas--................

function bebidas(){

        listapricipal.style.display="none"

        listaitens.style.display="block"

        titulo.innerHTML='Bebidas'

        var bebida=[
            {nome:'Água (<strong>com gás</strong>)',valor:'R$ 2,99',
            descriçao:'',imagem:"imagens/agua-com-gas.png"},
            
            { nome:' Água (<strong>sem gás</strong',descriçao:'',valor:'R$ 1,99',imagem:"imagens/agua-sem-gas.png"},

            { nome:'Guaravita',descriçao:'',valor:'R$ 1,99',imagem:'imagens/guaravita.png'}, 

            { nome:'Coca-cola 310ml ',descriçao:'',valor:'R$5,00',imagem:'imagens/coca-cola.png'},

            { nome:'Fanta Larranja 350ml',descriçao:'',valor:'R$5,00',imagem:'imagens/fanta-laranja.png'},

            { nome:'Fanta Uva 350ml',descriçao:'',valor:'R$5,00',imagem:'imagens/fanta-uva.png'},

            { nome:'Guanará Antártica',descriçao:'',valor:'R$5,00',imagem:'imagens/guarana-antartica.png'},

            { nome:'Pepsi',descriçao:'',valor:'R$ 5,00',imagem:'imagens/pepsi.png'},
            { nome:'',descriçao:'',valor:'',imagem:''},
            { nome:'',descriçao:'',valor:'',imagem:''},
        ]


        //..............--item-1--...............

        var tituloitem1= document.querySelector('.titulo-item1')

        var descriçãoitem1= document.querySelector('.descriçao-item1')
    
        var valoritem1 =document.querySelector('.valor-item1')
        
        tituloitem1.innerHTML=bebida[0].nome
    
        descriçãoitem1.innerHTML=''
    
        valoritem1.innerHTML= bebida[0].valor
        
        document.querySelector('.img-item1').src=bebida[0].imagem
    
        //..............--item-2--...............
    
        var tituloitem2= document.querySelector('.titulo-item2')
    
        var descriçãoitem2= document.querySelector('.descriçao-item2')
    
        var valoritem2 =document.querySelector('.valor-item2')
    
        tituloitem2.innerHTML= bebida[1].nome
    
        descriçãoitem2.innerHTML=bebida[1].descriçao
    
        valoritem2.innerHTML= bebida[1].valor
    
        document.querySelector('.img-item2').src=bebida[1].imagem
    
        //..............--item-3--...............

        var tituloitem3= document.querySelector('.titulo-item3')
    
        var descriçãoitem3= document.querySelector('.descriçao-item3')
    
        var valoritem3 =document.querySelector('.valor-item3')
    
        tituloitem3.innerHTML=bebida[2].nome
    
        descriçãoitem3.innerHTML=bebida[2].descriçao
    
        valoritem3.innerHTML= bebida[2].valor
    
        document.querySelector('.img-item3').src=bebida[2].imagem

        //..............--item-4--...............

        var tituloitem4= document.querySelector('.titulo-item4')
    
        var descriçãoitem4= document.querySelector('.descriçao-item4')
    
        var valoritem4 =document.querySelector('.valor-item4')
     
        tituloitem4.innerHTML=bebida[3].nome
    
        descriçãoitem4.innerHTML=bebida[3].descriçao
    
        valoritem4.innerHTML= bebida[3].valor
    
        document.querySelector('.img-item4').src=bebida[3].imagem
    
      //..............--item-5--...............

        var tituloitem5= document.querySelector('.titulo-item5')
    
        var descriçãoitem5= document.querySelector('.descriçao-item5')
    
        var valoritem5 =document.querySelector('.valor-item5')
    
       tituloitem5.innerHTML= bebida[4].nome
    
        descriçãoitem5.innerHTML=bebida[4].descriçao
    
        valoritem5.innerHTML= bebida[4].valor
    
        document.querySelector('.img-item5').src=bebida[4].imagem
    
        //..............--item-6--...............

        var tituloitem6= document.querySelector('.titulo-item6')
    
        var descriçãoitem6= document.querySelector('.descriçao-item6')
    
        var valoritem6 =document.querySelector('.valor-item6')
    
        tituloitem6.innerHTML=bebida[5].nome
    
        descriçãoitem6.innerHTML=bebida[5].descriçao
    
        valoritem6.innerHTML= bebida[5].valor
    
        document.querySelector('.img-item6').src=bebida[5].imagem
    
        //..............--item-7--...............
    
        var tituloitem7= document.querySelector('.titulo-item7')
    
        var descriçãoitem7= document.querySelector('.descriçao-item7')
    
        var valoritem7 =document.querySelector('.valor-item7')
    
        tituloitem7.innerHTML=bebida[6].nome
    
        descriçãoitem7.innerHTML=bebida[6].descriçao
    
        valoritem7.innerHTML= bebida[6].valor
    
        document.querySelector('.img-item7').src=bebida[6].imagem
    
        //..............--item-8--...............

        var tituloitem8= document.querySelector('.titulo-item8')
    
        var descriçãoitem8= document.querySelector('.descriçao-item8')
    
        var valoritem8 =document.querySelector('.valor-item8')
    
        tituloitem8.innerHTML=bebida[7].nome
    
        descriçãoitem8.innerHTML=bebida[7].descriçao
    
        valoritem8.innerHTML= bebida[7].valor
    
        document.querySelector('.img-item8').src=bebida[7].imagem

        //..............--item-9--...............

        var tituloitem9= document.querySelector('.titulo-item9')
    
        var descriçãoitem9= document.querySelector('.descriçao-item9')
    
        var valoritem9 =document.querySelector('.valor-item9')
    
        tituloitem9.innerHTML=bebida[8].nome
    
        descriçãoitem9.innerHTML=bebida[8].descriçao
    
        valoritem9.innerHTML= bebida[8].valor
    
        document.querySelector('.img-item9').src=bebida[8].imagem

        //..............--item-10--...............

        var tituloitem10= document.querySelector('.titulo-item10')
    
        var descriçãoitem10= document.querySelector('.descriçao-item10')
    
        var valoritem10 =document.querySelector('.valor-item10')
    
        tituloitem10.innerHTML=bebida[9].nome
    
        descriçãoitem10.innerHTML=bebida[9].descriçao
    
        valoritem10.innerHTML= bebida[9].valor
    
        document.querySelector('.img-item10').src=bebida[9].imagem

        

}
//...........--botão sucos naturais--................

function sucosnaturais(){

    listapricipal.style.display="none"

    listaitens.style.display="block"

    titulo.innerHTML='Sucos Naturais'
    
    var sucos =[

        { nome:'Suco de Abacaxi com Hortelã ',descriçao:'',valor:'RS6,00',imagem:''},

        { nome:'Suco de Maracujá',descriçao:'',valor:'R$ 6,00',imagem:''},

        { nome:'Cupuaçu',descriçao:'',valor:'R$ 6,00',imagem:''},

        { nome:'Suco de Manga',descriçao:'',valor:'R$ 6,00',imagem:''},

        { nome:'Suco de Graviola',descriçao:'',valor:'R$ 6,00',imagem:''},

        { nome:'Suco de Caju',descriçao:'',valor:'R$ 6,00',imagem:''},

        { nome:'Suco de Acerola',descriçao:'',valor:'R$ 6,00',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''}
    ]

        //..............--item-1--...............

        var tituloitem1= document.querySelector('.titulo-item1')

        var descriçãoitem1= document.querySelector('.descriçao-item1')
    
        var valoritem1 =document.querySelector('.valor-item1')
        
        tituloitem1.innerHTML=sucos[0].nome
    
        descriçãoitem1.innerHTML=sucos[0].descriçao
    
        valoritem1.innerHTML=sucos[0].valor
        
        document.querySelector('.img-item1').src=sucos[0].imagem
    
        //..............--item-2--...............
    
    var tituloitem2= document.querySelector('.titulo-item2')
    
    var descriçãoitem2= document.querySelector('.descriçao-item2')
    
    var valoritem2 =document.querySelector('.valor-item2')
    
    tituloitem2.innerHTML=sucos[1].nome
    
    descriçãoitem2.innerHTML=sucos[1].descriçao
    
    valoritem2.innerHTML= sucos[1].valor
    
    document.querySelector('.img-item2').src=sucos[1].imagem
    
    //..............--item-3--...............
    var tituloitem3= document.querySelector('.titulo-item3')
    
    var descriçãoitem3= document.querySelector('.descriçao-item3')
    
    var valoritem3 =document.querySelector('.valor-item3')
    
    tituloitem3.innerHTML=sucos[2].nome
    
    descriçãoitem3.innerHTML=sucos[2].descriçao
    
    valoritem3.innerHTML= sucos[2].valor
    
    document.querySelector('.img-item3').src=sucos[2].imagem
   
    //..............--item-4--...............
   
    var tituloitem4= document.querySelector('.titulo-item4')
    
    var descriçãoitem4= document.querySelector('.descriçao-item4')
    
    var valoritem4 =document.querySelector('.valor-item4')
    
    tituloitem4.innerHTML=sucos[3].nome
    
    descriçãoitem4.innerHTML=sucos[3].descriçao
    
    valoritem4.innerHTML= sucos[3].valor
    
    document.querySelector('.img-item4').src=sucos[3].imagem
    
    //..............--item-5--...............

    var tituloitem5= document.querySelector('.titulo-item5')
    
    var descriçãoitem5= document.querySelector('.descriçao-item5')
    
    var valoritem5 =document.querySelector('.valor-item5')
    
    tituloitem5.innerHTML=sucos[4].nome
    
    descriçãoitem5.innerHTML=sucos[4].descriçao
    
    valoritem5.innerHTML= sucos[4].valor
    
    document.querySelector('.img-item5').src=sucos[4].imagem
    
     //..............--item-6--...............
     
     var tituloitem6= document.querySelector('.titulo-item6')
    
     var descriçãoitem6= document.querySelector('.descriçao-item6')
    
     var valoritem6 =document.querySelector('.valor-item6')
     
     
    
     tituloitem6.innerHTML=sucos[5].nome
    
     descriçãoitem6.innerHTML=sucos[5].descriçao
    
     valoritem6.innerHTML= sucos[5].valor
     
     document.querySelector('.img-item6').src=sucos[5].imagem
    
    
    
    
    //..............--item-7--...............
    
    
    var tituloitem7= document.querySelector('.titulo-item7')
    
    var descriçãoitem7= document.querySelector('.descriçao-item7')
    
    var valoritem7 =document.querySelector('.valor-item7')
    
    
    
    tituloitem7.innerHTML=sucos[6].nome
    
    descriçãoitem7.innerHTML=sucos[6].descriçao
    
    valoritem7.innerHTML= sucos[6].valor
    
    document.querySelector('.img-item7').src=sucos[6].imagem

    //..............--item-8--...............
    
    
    var tituloitem8= document.querySelector('.titulo-item8')
    
    var descriçãoitem8= document.querySelector('.descriçao-item8')
    
    var valoritem8 =document.querySelector('.valor-item8')
    
    tituloitem8.innerHTML=sucos[7].nome
    
    descriçãoitem8.innerHTML=sucos[7].descriçao
    
    valoritem8.innerHTML= sucos[7].valor
    
    document.querySelector('.img-item8').src=sucos[7].imagem

    //..............--item-9--...............
    
    var tituloitem9= document.querySelector('.titulo-item9')
    
    var descriçãoitem9= document.querySelector('.descriçao-item9')
    
    var valoritem7 =document.querySelector('.valor-item9')
    
    tituloitem9.innerHTML=sucos[8].nome
    
    descriçãoitem9.innerHTML=sucos[8].descriçao
    
    valoritem9.innerHTML= sucos[8].valor
    
    document.querySelector('.img-item9').src=sucos[8].imagem

    //..............--item-10--...............
    
    var tituloitem10= document.querySelector('.titulo-item10')
    
    var descriçãoitem10= document.querySelector('.descriçao-item10')
    
    var valoritem10 =document.querySelector('.valor-item10')
    
    tituloitem10.innerHTML=sucos[9].nome
    
    descriçãoitem10.innerHTML=sucos[9].descriçao
    
    valoritem10.innerHTML= sucos[9].valor
    
    document.querySelector('.img-item10').src=sucos[9].imagem

}
//...........---------------------botão vitaminas---------------................

function vitaminas(){

    listapricipal.style.display="none"

    listaitens.style.display="block"

    titulo.innerHTML='Vitaminas'

    var vita=[

        { nome:'Abacaxi com Hortelã ao Leite',descriçao:'', valor:`R$ 7,00`,imagem:''},

        { nome:'Maracujá ao Leite',descriçao:'',valor:'R$ 7,00',imagem:''},

        { nome:'Cupuaçu ao Leite',descriçao:'',valor:'R$ 7,00',imagem:''},

        { nome:'Manga ao Leite',descriçao:'',valor:'R$ 7,00',imagem:''},

        { nome:'Morango ao Leite',descriçao:'',valor:'R$ 7,00',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''}
        
    ]


     //..............--item-1--...............

     var tituloitem1= document.querySelector('.titulo-item1')

     var descriçãoitem1= document.querySelector('.descriçao-item1')
 
     var valoritem1= document.querySelector('.valor-item1')
     
     tituloitem1.innerHTML=vita[0].nome
 
     descriçãoitem1.innerHTML=vita[0].descriçao
 
     valoritem1.innerHTML = vita[0].valor
     
     document.querySelector('.img-item1').src=vita[0].imagem

      //..............--item-2--...............
     
      var tituloitem2= document.querySelector('.titulo-item2')

      var descriçãoitem2= document.querySelector('.descriçao-item2')
  
      var valoritem2 =document.querySelector('.valor-item2')
      
      tituloitem2.innerHTML=vita[1].nome
  
      descriçãoitem2.innerHTML=vita[1].descriçao
  
      valoritem2.innerHTML= vita[1].valor
      
      document.querySelector('.img-item2').src=vita[1].imagem

       //..............--item-3--...............
     
     var tituloitem3= document.querySelector('.titulo-item3')

     var descriçãoitem3= document.querySelector('.descriçao-item3')
 
     var valoritem3 =document.querySelector('.valor-item3')
     
     tituloitem3.innerHTML=vita[2].nome
 
     descriçãoitem3.innerHTML=vita[2].descriçao
 
     valoritem3.innerHTML= vita[2].valor
     
     document.querySelector('.img-item3').src=vita[2].imagem

      //..............--item-4--...............
     
      var tituloitem4= document.querySelector('.titulo-item4')

      var descriçãoitem4= document.querySelector('.descriçao-item4')
  
      var valoritem4 =document.querySelector('.valor-item4')
      
      tituloitem4.innerHTML=vita[3].nome
  
      descriçãoitem4.innerHTML=vita[3].descriçao
  
      valoritem4.innerHTML= vita[3].valor
      
      document.querySelector('.img-item4').src=vita[3].imagem

       //..............--item-5--...............
     
     var tituloitem5= document.querySelector('.titulo-item5')

     var descriçãoitem5= document.querySelector('.descriçao-item5')
 
     var valoritem5 =document.querySelector('.valor-item5')
     
     tituloitem5.innerHTML=vita[4].nome
 
     descriçãoitem5.innerHTML=vita[4].descriçao
 
     valoritem5.innerHTML= vita[4].valor
     
     document.querySelector('.img-item5').src=vita[4].imagem

      //..............--item-6--...............
     
      var tituloitem6= document.querySelector('.titulo-item6')

      var descriçãoitem6= document.querySelector('.descriçao-item6')
  
      var valoritem6 =document.querySelector('.valor-item6')
      
      tituloitem6.innerHTML=vita[5].nome
  
      descriçãoitem6.innerHTML=vita[5].descriçao
  
      valoritem6.innerHTML= vita[5].valor
      
      document.querySelector('.img-item6').src=vita[5].imagem

       //..............--item-7--...............
     
     var tituloitem7= document.querySelector('.titulo-item7')

     var descriçãoitem7= document.querySelector('.descriçao-item7')
 
     var valoritem7 =document.querySelector('.valor-item7')
     
     tituloitem7.innerHTML=vita[6].nome
 
     descriçãoitem7.innerHTML=vita[6].descriçao
 
     valoritem7.innerHTML= vita[6].valor
     
     document.querySelector('.img-item7').src=vita[6].imagem

      //..............--item-8--...............
     
      var tituloitem8= document.querySelector('.titulo-item8')

      var descriçãoitem8= document.querySelector('.descriçao-item8')
  
      var valoritem8 =document.querySelector('.valor-item8')
      
      tituloitem8.innerHTML=vita[7].nome
  
      descriçãoitem8.innerHTML=vita[7].descriçao
  
      valoritem8.innerHTML= vita[7].valor
      
      document.querySelector('.img-item8').src=vita[7].imagem
      
       //..............--item-9--...............
     
     var tituloitem9= document.querySelector('.titulo-item9')

     var descriçãoitem9= document.querySelector('.descriçao-item9')
 
     var valoritem9 =document.querySelector('.valor-item9')
     
     tituloitem9.innerHTML=vita[8].nome
 
     descriçãoitem9.innerHTML=vita[8].descriçao
 
     valoritem1.innerHTML= vita[8].valor
     
     document.querySelector('.img-item9').src=vita[8].imagem

      //..............--item-10--...............
     
      var tituloitem10= document.querySelector('.titulo-item10')

      var descriçãoitem10= document.querySelector('.descriçao-item10')
  
      var valoritem10 =document.querySelector('.valor-item10')
      
      tituloitem10.innerHTML=vita[9].nome
  
      descriçãoitem10.innerHTML=vita[9].descriçao
  
      valoritem10.innerHTML= vita[9].valor
      
      document.querySelector('.img-item10').src=vita[9].image2
 
    
}





//............botão carrinho.............

var interiorcarrinho=document.querySelector('#interior-carrinho') 

function carrinhocompras(){
    interiorcarrinho.style.display='block'
    listaitens.style.display="none"
    listapricipal.style.display="none"
}
//...........--botão voltar--.................

var voltar = [
    document.querySelector('#voltar'),document.querySelector('#voltar-carrinho')
]
voltar[0].addEventListener('click',volte)
voltar[1].addEventListener('click',voltecarrinho)

function volte(){
    
    listapricipal.style.display="grid"
    listaitens.style.display="none";
}
function voltecarrinho(){
    listapricipal.style.display="grid"
    listaitens.style.display="none"
    interiorcarrinho.style.display='none'

}


    

    
    
    


    



    









