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

    { nome:'Combo X-Tudo ',descriçao:' lanche + batata frita + guaravita ou guaracamp.',valor:16.00,imagem:"imagens/x.tudo.png"},

    { nome:'Combo X-Picanha',descriçao:'  lanche + batata frita + refrigerante lata.',valor:25.00 ,imagem:"imagens/x-tudo.png"}
]
let por=[
        { nome:' Batata Frita 200g',descriçao:'Batata frita , ketchup, maionese temperada,queijo ralado e orégano.',valor:7.00,imagem:''},
        
        { nome:'Batata Frita 400g',descriçao:'Batata frita , calabresa, ketchup, maionese temperada,queijo ralado e orégano.',valor:14.00,imagem:''}
    ]
 let Hamb=[
        { nome:'Hambúrguer',descriçao:' Pão, carne, alface, ketchup ,maionese temperada , e batata palha.',valor:5.00,imagem:'imagens/x-tudo.png'},
        
        { nome:'X-Búrguer',descriçao:'  Pão, carne, queijo, alface, ketchup ,maionese temperada , e batata palha.',valor:6.00,imagem:'imagens/x-tudo.png'},
        
            { nome:'Duplo X-Búrguer ',descriçao:' Pão, 2 carnes, 2 queijos, alface, ketchup ,maionese temperada , e batata palha.',valor:10.00,imagem:'imagens/x-tudo.png'},
    
            { nome:'Duplo Cheddar',descriçao:'Pão, 2 carnes, 2 cheddar, alface, ketchup ,maionese temperada , e batata palha.',valor:10.00,imagem:'imagens/x-tudo.png'},
            
            { nome:'X-Egg ',descriçao:' Pão, carne, queijo , alface, ketchup ,maionese temperada , e batata palha.',valor:9.00,imagem:'imagens/x-tudo.png'},
    
            { nome:'X-Tudo',descriçao:' Pão, carne, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:9.00,imagem:'imagens/x-tudo.png'},
    
            { nome:'X-Trovão',descriçao:'   Pão, 2 carnes, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:14.00,imagem:'imagens/x-tudo.png'},
    
            { nome:'X-Tudão',descriçao:'  Pão, 2 carnes, 2 queijos, 2 presuntos, bacon, 2 ovos, alface, ketchup ,maionese temperada , e batata palha.',valor:16.00,imagem:'imagens/x-tudo.png'},
            
            { nome:'X-Calabresa',descriçao:'Pão, carne, queijo, presunto, calabresa, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:13.00,imagem:'imagens/x-tudo.png'},
            
            { nome:'X-Picanha',descriçao:' Pão, carne de picanha 120g, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:16.00,imagem:'imagens/x-tudo.png'}
] 
let cachorro =[
                { nome:'Linguiça',descriçao:' Pão, salcicha, molho, ketchup, maionese, ovo de codorna, azeite, azeitona, queijo relado, alho torrado,cheddar,catupiry e batta palha .',valor:12.00,imagem:''},
                
                { nome:'Salcicha',descriçao:' Pão, salcicha, molho, ketchup, maionese, ovo de codorna, azeite, azeitona, queijo relado, alho torrado,cheddar,catupiry e batta palha',valor:10.00,imagem:''}
]
 let bebi=[
                    {nome:'Água (com gás)',valor:2.99,
                    descriçao:'',imagem:"imagens/agua-com-gas.png"},
                    
                    { nome:' Água (sem gás)',descriçao:'',valor:1.99,imagem:"imagens/agua-sem-gas.png"},
                    
                    { nome:'Guaravita',descriçao:'',valor:1.99,imagem:'imagens/guaravita.png'}, 
                    
                    { nome:'Coca-cola 310ml ',descriçao:'',valor:5.00,imagem:'imagens/coca-cola.png'},
        
                    { nome:'Fanta Larranja 350ml',descriçao:'',valor:5.00,imagem:'imagens/fanta-laranja.png'},
        
                    { nome:'Fanta Uva 350ml',descriçao:'',valor:5.00,imagem:'imagens/fanta-uva.png'},
                    
                    { nome:'Guanará Antártica',descriçao:'',valor:5.00,imagem:'imagens/guarana-antartica.png'},
        
                    { nome:'Pepsi',descriçao:'',valor:5.00,imagem:'imagens/pepsi.png'},    
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
    
    { nome:'Abacaxi com Hortelã ao Leite',descriçao:'', valor:7.00,imagem:''},
    
    { nome:'Maracujá ao Leite',descriçao:'',valor:7.00,imagem:''},

    { nome:'Cupuaçu ao Leite',descriçao:'',valor:7.00,imagem:''},

    { nome:'Manga ao Leite',descriçao:'',valor:7.00,imagem:''},
    
    { nome:'Morango ao Leite',descriçao:'',valor:7.00,imagem:''}
] 

//arrays com os titulos
let titulos=['Promoções','Porções','Hambúrgueres','Cachorro Quente','Bebidas','Sucos Naturais','Vitaminas']

/// arrays com todos os itens 

        let itens=[]
        
//--------------------FUNÇOES----------------------------



//-------------botão-VOLTAR-lista itens
let volta =document.querySelector('#voltar')
volta.addEventListener('click',voltar)
function voltar(){
    itens.splice(0,100)
    folhas.folha1.style.display='grid'
    folhas.folha2.style.display='none'
    rendeTarefas()
}

//-----------BOTÃO---VOLTAR---ITENS-EXPAND
let voltarExpadItens=document.querySelector('#voltar-folha-itens')
voltarExpadItens.addEventListener('click',voltarExpand)

function voltarExpand() {
    folhas.folha3.style.display='none'
    folhas.folha2.style.display='block'
    itemExpand=[]
    quantidade=1
    
    console.log(itemExpand)
}

function rendeTarefas(){
    listaItemns.innerHTML=""

   

       itens.map((todo)=>{

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

        let posiçaoItem=itens.indexOf(todo)
        
        
        
        divItem.setAttribute("onclick",`clickitem(${posiçaoItem})`)
        
        
    })
    
    
}
let itemExpand=[]//-------array-item-expandido

let quantidade=1//-----quantidade

let qtdMaisExpand=document.querySelector('.qtd-mais')
qtdMaisExpand.setAttribute("onclick","mais()")

let qtdMenosExpand=document.querySelector('.qtd-menos') 
qtdMenosExpand.setAttribute("onclick","menos()")

function mais(){
    quantidade=quantidade+1
    clickitem()
}
function menos(){
    quantidade=quantidade-1
    if(quantidade<1){
        quantidade=1
    }
    clickitem()
    
}

function clickitem(posiçaoItem){
    folhas.folha3.style.display='block'
    folhas.folha2.style.display='none'
    itemExpand.push(itens[posiçaoItem])

    


    let tituloExpand=document.querySelector('.nome-expand-itens')
    tituloExpand.innerHTML=itemExpand[0].nome//titulo-expand

    let imagemExpand=document.querySelector("#imagem-expand")
    imagemExpand.src=itemExpand[0].imagem
    console.log(imagemExpand)

    let descriçaoProdutoExpand=document.querySelector('.descriçao-produto-expand')
    descriçaoProdutoExpand.innerHTML=itemExpand[0].descriçao

    let valorUnitario=document.querySelector('.valor-unitario')
    let preçoU=itemExpand[0].valor
    let preçoUnitario=String(preçoU.toFixed(2))
    valorUnitario.innerHTML=(`R$ ${preçoUnitario.replace(".",",")}`)

    let valorTotalItem=document.querySelector('.valor-total-item')
    let qtd=document.querySelector('.qtd')
    qtd.innerHTML=quantidade
    let resultadoPT=preçoU*quantidade

    let resultadoPTstring=String(resultadoPT.toFixed(2))
    valorTotalItem.innerHTML=(`R$ ${resultadoPTstring.replace(".",",")}`)
   
    console.log(itemExpand)
}
let carrinho=[]
function adicionarCarrinho(){
    
    
}

function promoçoes(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[0]
    itens.push(...promo)
    rendeTarefas()
}

function porçoes(){
   folhas.folha1.style.display='none'
   folhas.folha2.style.display='block'
   tituloFolha2.innerHTML=titulos[1]
   itens.push(...por)
   rendeTarefas()
}

function hamb(){
   folhas.folha1.style.display='none'
   folhas.folha2.style.display='block'
   tituloFolha2.innerHTML=titulos[2]
   itens.push(...Hamb)
   rendeTarefas()
}

function cachorroquente(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[3]
    itens.push(...cachorro)
    rendeTarefas()
}

function bebidas(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[4]
    itens.push(...bebi)
    rendeTarefas()
}

function sucosnaturais(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[5]
    itens.push(...sucos)
    rendeTarefas()


}
function vitaminas(){
    folhas.folha1.style.display='none'
    folhas.folha2.style.display='block'
    tituloFolha2.innerHTML=titulos[6]
    itens.push(...vita)
    rendeTarefas()


}    
