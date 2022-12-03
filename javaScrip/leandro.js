//-----VARIAVEIS-PRINCIPAIS
let folhas={
    
    folha1:document.querySelector('.listap'),
    folha2:document.querySelector('#lista-folha-itens'),
    folha3:document.querySelector('.folha-expand-itens')
    
    
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

//--------------EVENTOS--FOLHA--2-------------------




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

        let itens={}
        
//-------FUNÇOES






//-------------botão-VOLTAR-lista itens
let volta =document.querySelector('#voltar')
volta.addEventListener('click',voltar)
function voltar(){
    itens.splice(0,1)
    folhas.folha1.style.display='grid'
    folhas.folha2.style.display='none'
    rendeTarefas()
}
//-----------BOTÃO---VOLTAR---ITENS-EXPAND
let voltarExpadItens=document.querySelector('#voltar-folha-itens')
voltarExpadItens.addEventListener('click',voltar2)
function voltar2() {
    folhas.folha3.style.display='none'
    folhas.folha2.style.display='block'
}
function rendeTarefas(){
    listaItemns.innerHTML=""

   

       itens[0].map((todo)=>{

        let divItem=document.createElement('div')
        divItem.classList.add('item')

        let imagemItem=document.createElement('img')
        imagemItem.classList.add('img-item')
        imagemItem.src=todo.imagem

        let descriItem=document.createElement('div')
        descriItem.classList.add('descri-item')

        let h1Item=document.createElement('h1')
        h1Item.classList.add('titulo-item')
        let tituloItem=document.createTextNode(todo.nome)
        h1Item.appendChild(tituloItem)

        let caixaDescriçao=document.createElement('div')
        caixaDescriçao.classList.add('descriçao-produto')
        let textoDescriçao=document.createTextNode(todo.descriçao)
        caixaDescriçao.appendChild(textoDescriçao)

        let caixaValor= document.createElement('div')
        caixaValor.classList.add('valor')

        let valorItem=document.createElement('div')
        valorItem.classList.add('valor-item')
        caixaValor.appendChild(valorItem)

        let preço=todo.valor//variavel que recebe o valor
        let valor=String(preço)//variavel que converte para string
        let textoValor=document.createTextNode(`R$ ${valor.replace(".",",")}`)//criando texto covertendo "." para ","
        valorItem.appendChild(textoValor)//inserindo texto dentro da caixa
        

        divItem.appendChild(imagemItem)
        divItem.appendChild(descriItem)
        descriItem.appendChild(h1Item)
        descriItem.appendChild(caixaDescriçao)
        descriItem.appendChild(caixaValor)

        listaItemns.appendChild(divItem)

        let posiçao=itens[0].indexOf(todo)
        
        
        
        divItem.setAttribute("onclick",`click2(${posiçao})`)
        
    })
    
    
}

function click2(posiçao){
    folhas.folha3.style.display='block'
    folhas.folha2.style.display='none'
    console.log(posiçao)
    console.log(itens[0].nome[0])
}
    

function promoçoes(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[0]
    itens.push(promo)
    rendeTarefas()
  

}

function porçoes(){
   folhas.folha1.style.display='none'
   folhas.folha2.style.display='block'
   tituloFolha2.innerHTML=titulos[1]
   


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