//-----VARIAVEIS-PRINCIPAIS
let folhas={
    
    folha1:document.querySelector('.listap'),
    folha2:document.querySelector('#lista-folha-itens')
    

}

//----VARIAVEIS-DA-FOLHA-1
let listaInicial={
    promo:document.querySelector('#promoçoes'),
    porç:document.querySelector('#porçoes'),
    hamb:document.querySelector('#hamb'),
    cachorroquen:document.querySelector('#cachorro'),
    bebi:document.querySelector('#bebidas'),
    sucos:document.querySelector('#sucos'),
    vita:document.querySelector('#vitaminas')


}
//-----VARIAVEIS-DA-FOLHA-2
let tituloFolha2= document.querySelector('#titulo-cabeçalho-itens')
let listaItemns=document.querySelector('#lista-itens')

//--------EVENTOS-LISTA-INICIAL---
listaInicial.promo.addEventListener('click',promoçoes)

listaInicial.porç.addEventListener('click', porçoes)

listaInicial.hamb.addEventListener('click',hamb )

listaInicial.cachorroquen.addEventListener('click',cachorroquente)

listaInicial.bebi.addEventListener('click',bebidas)

listaInicial.sucos.addEventListener('click',sucosnaturais)

listaInicial.vita.addEventListener('click',vitaminas)

//-------------botão-VOLTAR
let volta =document.querySelector('#voltar')
volta.addEventListener('click',voltar)
function voltar(){
    
    folhas.folha1.style.display='grid'
    folhas.folha2.style.display='none'
}
///-------------ITENS-EMPLIHADOS(arrays)
let promo=[
    { nome:'2 X-tudos',descriçao:' Pão, carne, queijo, presunto, bacon, ovo, alface, ketchup, maionese temperada, e batata palha.',valor:19.99,imagem:"imagens/x-tudo.png"},

    { nome:'Combo X-burguer',descriçao:' lanche + batata frita + guaravita ou guaracamp.',valor:11.99,imagem:"imagens/x-tudo.png"},

    { nome:'Combo Duplo cheddar',descriçao:'  lanche + batata frita + guaravita ou guaracamp.',valor:16.00,imagem:"imagens/x-tudo.png"},

    { nome:'Combo X-Tudo ',descriçao:' lanche + batata frita + guaravita ou guaracamp.',valor:16.00,imagem:"imagens/x-tudo.png"},

    { nome:'Combo X-Picanha',descriçao:'  lanche + batata frita + refrigerante lata.',valor:25.00 ,imagem:"imagens/x-tudo.png"}
]
let por=[
        { nome:' Batata Frita 200g',descriçao:'<strong>Descrição:</strong>Batata frita , ketchup, maionese temperada,queijo ralado e orégano.',valor:'R$ 7,00',imagem:''},
    
        { nome:'Batata Frita 400g',descriçao:'<strong>Descrição:</strong>   Batata frita , calabresa, ketchup, maionese temperada,queijo ralado e orégano.',valor:'R$ 14,00',imagem:''}
]
let Hamb=[
            { nome:'Hambúrguer',descriçao:'<strong>Descrição:</strong>   Pão, carne, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 5,00',imagem:'imagens/x-tudo.png'},
    
            { nome:'X-Búrguer',descriçao:'<strong>Descrição:</strong>   Pão, carne, queijo, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 6,00',imagem:'imagens/x-tudo.png'},
    
            { nome:'Duplo X-Búrguer ',descriçao:' <strong>Descrição:</strong>  Pão, 2 carnes, 2 queijos, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 10,00',imagem:'imagens/x-tudo.png'},
    
            { nome:'Duplo Cheddar',descriçao:'<strong>Descrição:</strong>Pão, 2 carnes, 2 cheddar, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 10,00',imagem:'imagens/x-tudo.png'},
    
            { nome:'X-Egg ',descriçao:' <strong>Descrição:</strong> Pão, carne, queijo , alface, ketchup ,maionese temperada , e batata palha.',valor:' R$ 9,00',imagem:'imagens/x-tudo.png'},
    
            { nome:'X-Tudo',descriçao:'<strong>Descrição:</strong>   Pão, carne, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 9,00',imagem:'imagens/x-tudo.png'},
    
            { nome:'X-Trovão',descriçao:'<strong>Descrição:</strong>    Pão, 2 carnes, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 14,00',imagem:'imagens/x-tudo.png'},
    
            { nome:'X-Tudão',descriçao:' <strong>Descrição:</strong> Pão, 2 carnes, 2 queijos, 2 presuntos, bacon, 2 ovos, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 16,00',imagem:'imagens/x-tudo.png'},
    
            { nome:'X-Calabresa',descriçao:' <strong>Descrição:</strong> Pão, carne, queijo, presunto, calabresa, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 13,00',imagem:'imagens/x-tudo.png'},
    
            { nome:'X-Picanha',descriçao:'<strong>Descrição:</strong> Pão, carne de picanha 120g, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:'R$ 16,0',imagem:'imagens/x-tudo.png'}
] 
 let cachorro =[
                { nome:'Linguiça',descriçao:'<strong>Descrição:</strong>    Pão, salcicha, molho, ketchup, maionese, ovo de codorna, azeite, azeitona, queijo relado, alho torrado,cheddar,catupiry e batta palha .',valor:'R$ 12,00',imagem:''},
    
                { nome:'Salcicha',descriçao:'<strong>Descrição:</strong> Pão, salcicha, molho, ketchup, maionese, ovo de codorna, azeite, azeitona, queijo relado, alho torrado,cheddar,catupiry e batta palha',valor:'R$ 10,00',imagem:''}
]
 let bebida=[
                    {nome:'Água (<strong>com gás</strong>)',valor:'R$ 2,99',
                    descriçao:'',imagem:"imagens/agua-com-gas.png"},
                    
                    { nome:' Água (<strong>sem gás</strong',descriçao:'',valor:'R$ 1,99',imagem:"imagens/agua-sem-gas.png"},
        
                    { nome:'Guaravita',descriçao:'',valor:'R$ 1,99',imagem:'imagens/guaravita.png'}, 
        
                    { nome:'Coca-cola 310ml ',descriçao:'',valor:'R$5,00',imagem:'imagens/coca-cola.png'},
        
                    { nome:'Fanta Larranja 350ml',descriçao:'',valor:'R$5,00',imagem:'imagens/fanta-laranja.png'},
        
                    { nome:'Fanta Uva 350ml',descriçao:'',valor:'R$5,00',imagem:'imagens/fanta-uva.png'},
        
                    { nome:'Guanará Antártica',descriçao:'',valor:'R$5,00',imagem:'imagens/guarana-antartica.png'},
        
                    { nome:'Pepsi',descriçao:'',valor:'R$ 5,00',imagem:'imagens/pepsi.png'},    
]       
let sucos =[

    { nome:'Suco de Abacaxi com Hortelã ',descriçao:'',valor:'RS6,00',imagem:''},

    { nome:'Suco de Maracujá',descriçao:'',valor:'R$ 6,00',imagem:''},

    { nome:'Cupuaçu',descriçao:'',valor:'R$ 6,00',imagem:''},

    { nome:'Suco de Manga',descriçao:'',valor:'R$ 6,00',imagem:''},

    { nome:'Suco de Graviola',descriçao:'',valor:'R$ 6,00',imagem:''},

    { nome:'Suco de Caju',descriçao:'',valor:'R$ 6,00',imagem:''},

    { nome:'Suco de Acerola',descriçao:'',valor:'R$ 6,00',imagem:''}
]     
let vita=[

    { nome:'Abacaxi com Hortelã ao Leite',descriçao:'', valor:`R$ 7,00`,imagem:''},

    { nome:'Maracujá ao Leite',descriçao:'',valor:'R$ 7,00',imagem:''},

    { nome:'Cupuaçu ao Leite',descriçao:'',valor:'R$ 7,00',imagem:''},

    { nome:'Manga ao Leite',descriçao:'',valor:'R$ 7,00',imagem:''},

    { nome:'Morango ao Leite',descriçao:'',valor:'R$ 7,00',imagem:''}
] 

//arrays com os titulos
let titulos=['Promoções','Porções','Hambúrgueres','Cachorro Quente','Bebidas','Sucos Naturais','Vitaminas']

/// arrays com todos os itens 

        let itens=[]

//-------FUNÇOES

function promoçoes(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[0]
    itens.push(promo)

    itens[0].map((pro)=>{
    
console.log(itens)

        let divElement=document.createElement('div')//criando caixa de cada item
        divElement.classList.add('item')//inserindo a classe dos itens 
        listaItemns.appendChild(divElement)//inserindo caixa do item dentro da lista de itens


        let imagemItem=document.createElement('img')//criando 'img'
        imagemItem.src=pro.imagem//dando caminho a imagem 
        imagemItem.classList.add('img-item')//inserindo classe
        divElement.appendChild(imagemItem) //inserindo imagem dentro da caixa do item

        
        let descriItem=document.createElement('div')//criando div de descrição
        descriItem.classList.add('descri-item')//inserindo a classe 
        divElement.appendChild(descriItem)//inserindo caixa de descrição dentro da caixa do item 

        
        let h1Element=document.createElement('h1')//criando titulo do item
        h1Element.classList.add('titulo-item')//adicionando a classe do titulo
        descriItem.appendChild(h1Element)//inserindo 'h1' dentro da descrição
        let textoTitluloItem=document.createTextNode(pro.nome)//criando texto do titulo
        h1Element.appendChild(textoTitluloItem)//inserindo texto dentro do item 


        let descriçaoProduto=document.createElement('div')//criando caixa de descrição do produto
        descriçaoProduto.classList.add('descrição-produto')//inserindo classe
        descriItem.appendChild(descriçaoProduto)//inserindo descrição do produto dentro da descrição do item 
        let textoDescriçao=document.createTextNode(pro.descriçao)//criando texto descrição
        descriçaoProduto.appendChild(textoDescriçao)//inserindo texto

        let caixaValor=document.createElement('div')//criando caixa valor
        caixaValor.classList.add('valor')//inserindo classe
        descriItem.appendChild(caixaValor)//inserindo caixa valor dentro da descrição do item 

        let valorItem=document.createElement('div')
        valorItem.classList.add('valor-item')
        caixaValor.appendChild(valorItem)
        let preço=pro.valor
        let valor=String(preço)
        let textoValor=document.createTextNode(`R$ ${valor.replace(".",",")}`)
        valorItem.appendChild(textoValor)

        console.log(preço)
        console.log(valor)
    
        

    })
    
   



    


}

function porçoes(){
   folhas.folha1.style.display='none'
   folhas.folha2.style.display='block'
   tituloFolha2.innerHTML=titulos[1]

   let teste=[
    {nome:'Água (<strong>com gás</strong>)',valor:'2,99',descriçao:'',imagem:"imagens/agua-com-gas.png"},
    
    { nome:' Água (<strong>sem gás</strong',descriçao:'',valor:'1,99',imagem:"imagens/agua-sem-gas.png"},

    { nome:'Guaravita',descriçao:'',valor:'1,99',imagem:'imagens/guaravita.png'}, 

    { nome:'Coca-cola 310ml ',descriçao:'',valor:'5,00',imagem:'imagens/coca-cola.png'},

    { nome:'Fanta Larranja 350ml',descriçao:'',valor:'5,00',imagem:'imagens/fanta-laranja.png'},

    { nome:'Fanta Uva 350ml',descriçao:'',valor:'5,00',imagem:'imagens/fanta-uva.png'},

    { nome:'Guanará Antártica',descriçao:'',valor:'5,00',imagem:'imagens/guarana-antartica.png'},

    { nome:'Pepsi',descriçao:'',valor:'5,00',imagem:'imagens/pepsi.png'},    
]

teste.map((pro)=>{
    let n= pro.valor
    let n1=parseFloat(n.replace(",","."))
   // let=n2=parseFloat(n1.replace(".",","))

  //  console.log(n1)
   // console.log(n2)
})

}

function hamb(){
   folhas.folha1.style.display='none'
   folhas.folha2.style.display='block'
   tituloFolha2.innerHTML=titulos[2]

}

function cachorroquente(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[3]

}

function bebidas(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[4]

}

function sucosnaturais(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[5]

}
function vitaminas(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[6]

}









/*
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


    
      
//


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


    

    */
    
    


    



    









