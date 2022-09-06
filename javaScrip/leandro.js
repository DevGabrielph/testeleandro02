//..........--VARIAVEIS--........../*
var listapricipal =document.querySelector('.listap')

var listaitens = document.querySelector('#lista-itens')

var voltar =document.querySelector('#voltar')

var promo = document.querySelector('#promoçoes')

var porç = document.querySelector('#porçoes')

var ham = document.querySelector('#hamb')

var cachorroquen= document.querySelector('#cachorro')

var bebi = document.querySelector('#bebidas')

var sucos = document.querySelector('#sucos')

var vita = document.querySelector('#vitaminas')

var titulo =document.querySelector('#titulo-cabeçalho-itens')

//----------VARIAVEIS--ITENS-------------//
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

voltar.addEventListener('click',volte)

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
        

    }
    //...........--botão bebidas--................

    function bebidas(){

        listapricipal.style.display="none"

        listaitens.style.display="block"

        titulo.innerHTML='Bebidas'

        //..............--item-1--...............
        var tituloitem1= document.querySelector('.titulo-item1')

        var descriçãoitem1= document.querySelector('.descriçao-item1')
    
        var valoritem1 =document.querySelector('.valor-item1')
        
        
    
        tituloitem1.innerHTML='Água (<strong>com gás</strong>)'
    
        descriçãoitem1.innerHTML=''
    
        valoritem1.innerHTML= 'R$ 2,99'
        
        document.querySelector('.img-item1').src="imagens/agua-com-gas.png"
    
        
    
    
    //..............--item-2--...............
    
    
    var tituloitem2= document.querySelector('.titulo-item2')
    
    var descriçãoitem2= document.querySelector('.descriçao-item2')
    
    var valoritem2 =document.querySelector('.valor-item2')
    
    
    
    tituloitem2.innerHTML=' Água (<strong>sem gás</strong'
    
    descriçãoitem2.innerHTML=''
    
    valoritem2.innerHTML= 'R$ 1,99'
    
    document.querySelector('.img-item2').src="imagens/agua-sem-gas.png"
    
    //..............--item-3--...............
    var tituloitem3= document.querySelector('.titulo-item3')
    
    var descriçãoitem3= document.querySelector('.descriçao-item3')
    
    var valoritem3 =document.querySelector('.valor-item3')
    
    
    
    tituloitem3.innerHTML=' Guaravita '
    
    descriçãoitem3.innerHTML=''
    
    valoritem3.innerHTML= 'R$ 1,99'
    
    document.querySelector('.img-item3').src="imagens/guaravita.png"


    
    //..............--item-4--...............

    var tituloitem4= document.querySelector('.titulo-item4')
    
    var descriçãoitem4= document.querySelector('.descriçao-item4')
    
    var valoritem4 =document.querySelector('.valor-item4')
    
    
    
    tituloitem4.innerHTML='Coca-cola 310ml '
    
    descriçãoitem4.innerHTML=''
    
    valoritem4.innerHTML= ' R$ 5,00'
    
    document.querySelector('.img-item4').src="imagens/coca-cola.png"
    
    
    //..............--item-5--...............
    var tituloitem5= document.querySelector('.titulo-item5')
    
    var descriçãoitem5= document.querySelector('.descriçao-item5')
    
    var valoritem5 =document.querySelector('.valor-item5')
    
    
    
    tituloitem5.innerHTML='Fanta Laranja 350ml'
    
    descriçãoitem5.innerHTML=''
    
    valoritem5.innerHTML= '   R$ 5,00'
    
    document.querySelector('.img-item5').src="imagens/fanta-laranja.png"
    
    
    //..............--item-6--...............
    var tituloitem6= document.querySelector('.titulo-item6')
    
    var descriçãoitem6= document.querySelector('.descriçao-item6')
    
    var valoritem6 =document.querySelector('.valor-item6')
    
    
    
    tituloitem6.innerHTML='Fanta Uva 350ml '
    
    descriçãoitem6.innerHTML=''
    
    valoritem6.innerHTML= 'R$ 5,00'
    
    document.querySelector('.img-item6').src="imagens/fanta-uva.png"
    
    
    
    
    //..............--item-7--...............
    
    
    var tituloitem7= document.querySelector('.titulo-item7')
    
    var descriçãoitem7= document.querySelector('.descriçao-item7')
    
    var valoritem7 =document.querySelector('.valor-item7')
    
    
    
    tituloitem7.innerHTML=' Guaraná Antártica 350ml'
    
    descriçãoitem7.innerHTML=''
    
    valoritem7.innerHTML= 'R$ 5,00'
    
    document.querySelector('.img-item7').src="imagens/guarana-antartica.png"
    
    
    
    //..............--item-8--...............
    var tituloitem8= document.querySelector('.titulo-item8')
    
    var descriçãoitem8= document.querySelector('.descriçao-item8')
    
    var valoritem8 =document.querySelector('.valor-item8')
    
    
    
    tituloitem8.innerHTML='Pepsi 350ml'
    
    descriçãoitem8.innerHTML=' '
    
    valoritem8.innerHTML= 'R$ 5,00'
    
    document.querySelector('.img-item8').src="imagens/pepsi.png"

}
//...........--botão sucos naturais--................

function sucosnaturais(){

    listapricipal.style.display="none"

    listaitens.style.display="block"

    titulo.innerHTML='Sucos Naturais'


        //..............--item-1--...............
        var tituloitem1= document.querySelector('.titulo-item1')

        var descriçãoitem1= document.querySelector('.descriçao-item1')
    
        var valoritem1 =document.querySelector('.valor-item1')
        
        
    
        tituloitem1.innerHTML='Suco de Abacaxi com Hortelã'
    
        descriçãoitem1.innerHTML=''
    
        valoritem1.innerHTML= 'R$ 6,00'
        
        document.querySelector('.img-item1').src="imagens/"
    
       
    
    
    //..............--item-2--...............
    
    
    var tituloitem2= document.querySelector('.titulo-item2')
    
    var descriçãoitem2= document.querySelector('.descriçao-item2')
    
    var valoritem2 =document.querySelector('.valor-item2')
    
    
    
    tituloitem2.innerHTML=' Suco de Maracujá'
    
    descriçãoitem2.innerHTML=''
    
    valoritem2.innerHTML= 'R$ 6,00'
    
    document.querySelector('.img-item2').src="imagens/"
    
    //..............--item-3--...............
    var tituloitem3= document.querySelector('.titulo-item3')
    
    var descriçãoitem3= document.querySelector('.descriçao-item3')
    
    var valoritem3 =document.querySelector('.valor-item3')
    
    
    
    tituloitem3.innerHTML=' Cupuaçu '
    
    descriçãoitem3.innerHTML=''
    
    valoritem3.innerHTML= 'R$ 6,00'
    
    document.querySelector('.img-item3').src="imagens/"
   
   
    
    //..............--item-4--...............
   
    var tituloitem4= document.querySelector('.titulo-item4')
    
    var descriçãoitem4= document.querySelector('.descriçao-item4')
    
    var valoritem4 =document.querySelector('.valor-item4')
    
    
    
    tituloitem4.innerHTML='Suco de Manga'
    
    descriçãoitem4.innerHTML=''
    
    valoritem4.innerHTML= ' R$ 6,00'
    
    document.querySelector('.img-item4').src="imagens/"
    
    
    //..............--item-5--...............
    var tituloitem5= document.querySelector('.titulo-item5')
    
    var descriçãoitem5= document.querySelector('.descriçao-item5')
    
    var valoritem5 =document.querySelector('.valor-item5')
    
    
    
    tituloitem5.innerHTML='Suco de Graviola'
    
    descriçãoitem5.innerHTML=''
    
    valoritem5.innerHTML= '   R$ 6,00'
    
    document.querySelector('.img-item5').src="imagens/"
    
    
     //..............--item-6--...............
     var tituloitem6= document.querySelector('.titulo-item6')
    
     var descriçãoitem6= document.querySelector('.descriçao-item6')
    
     var valoritem6 =document.querySelector('.valor-item6')
     
     
    
     tituloitem6.innerHTML='Suco de Cajú '
    
     descriçãoitem6.innerHTML=''
    
     valoritem6.innerHTML= 'R$ 6,00'
     
     document.querySelector('.img-item6').src="imagens/"
    
    
    
    
    //..............--item-7--...............
    
    
    var tituloitem7= document.querySelector('.titulo-item7')
    
    var descriçãoitem7= document.querySelector('.descriçao-item7')
    
    var valoritem7 =document.querySelector('.valor-item7')
    
    
    
    tituloitem7.innerHTML=' Suco de Acerola '
    
    descriçãoitem7.innerHTML=''
    
    valoritem7.innerHTML= 'R$ 6,00'
    
    document.querySelector('.img-item7').src="imagens/"

}
//...........---------------------botão vitaminas---------------................





function vitaminas(){

    listapricipal.style.display="none"

    listaitens.style.display="block"

    titulo.innerHTML='Vitaminas'


     //..............--item-1--...............
     var tituloitem1= document.querySelector('.titulo-item1')

     var descriçãoitem1= document.querySelector('.descriçao-item1')
 
     var valoritem1 =document.querySelector('.valor-item1')
     
     
 
     tituloitem1.innerHTML='Suco de Abacaxi com Hortelã  ao leite'
 
     descriçãoitem1.innerHTML=''
 
     valoritem1.innerHTML= 'R$ 6,00'
     
     document.querySelector('.img-item1').src="imagens/"
 
    
 
 
 //..............--item-2--...............
 
 
 var tituloitem2= document.querySelector('.titulo-item2')
 
 var descriçãoitem2= document.querySelector('.descriçao-item2')
 
 var valoritem2 =document.querySelector('.valor-item2')
 
 
 
 tituloitem2.innerHTML=' Suco de Maracujá ao leite'
 
 descriçãoitem2.innerHTML=''
 
 valoritem2.innerHTML= 'R$ 7,00'
 
 document.querySelector('.img-item2').src="imagens/"
 
 //..............--item-3--...............
 var tituloitem3= document.querySelector('.titulo-item3')
 
 var descriçãoitem3= document.querySelector('.descriçao-item3')
 
 var valoritem3 =document.querySelector('.valor-item3')
 
 
 
 tituloitem3.innerHTML=' vitamina de Cupuaçu '
 
 descriçãoitem3.innerHTML=''
 
 valoritem3.innerHTML= 'R$ 7,00'
 
 document.querySelector('.img-item3').src="imagens/"


 
 //..............--item-4--...............

 var tituloitem4= document.querySelector('.titulo-item4')
 
 var descriçãoitem4= document.querySelector('.descriçao-item4')
 
 var valoritem4 =document.querySelector('.valor-item4')
 
 
 
 tituloitem4.innerHTML='Suco de Manga  ao leite'
 
 descriçãoitem4.innerHTML=''
 
 valoritem4.innerHTML= ' R$ 7,00'
 
 document.querySelector('.img-item4').src="imagens/"
 
 
 //..............--item-5--...............
 var tituloitem5= document.querySelector('.titulo-item5')
 
 var descriçãoitem5= document.querySelector('.descriçao-item5')
 
 var valoritem5 =document.querySelector('.valor-item5')
 
 
 
 tituloitem5.innerHTML='Suco de Morango ao leite'
 
 descriçãoitem5.innerHTML=''
 
 valoritem5.innerHTML= '   R$ 7,00'
 
 document.querySelector('.img-item5').src="imagens/"
 
 
  //..............--item-6--...............
  var tituloitem6= document.querySelector('.titulo-item6')
 
  var descriçãoitem6= document.querySelector('.descriçao-item6')
 
  var valoritem6 =document.querySelector('.valor-item6')
  
  
 
 tituloitem7.innerHTML=' Suco de Goiaba ao leite'
 
  descriçãoitem6.innerHTML=''
 
  valoritem6.innerHTML= 'R$ 7,00'
  
  document.querySelector('.img-item6').src="imagens/"
 
 
 
 
 //..............--item-7--...............
 
 
 var tituloitem7= document.querySelector('.titulo-item7')
 
 var descriçãoitem7= document.querySelector('.descriçao-item7')
 
 var valoritem7 =document.querySelector('.valor-item7')
 
 
 
 tituloitem7.innerHTML=' Suco de Acerola ao leite'
 
 descriçãoitem7.innerHTML=''
 
 valoritem7.innerHTML= 'R$ 7,00'
 
 document.querySelector('.img-item7').src="imagens/"
}


//...........--botão voltar--.................


function volte(){
    listapricipal.style.display="grid"

    listaitens.style.display="none"

}




