//-----VARIAVEIS-PRINCIPAIS
let folhas={
    
    folha1:document.querySelector('.listap'),
    folha2:document.querySelector('#lista-folha-itens'),
    folha3:document.querySelector('.folha-expand-itens'),
    folha4:document.querySelector('#interior-carrinho')
    
    
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
//---VARIAVEIS--DA--FOLHA--ADICIONAIS
//let adicionaisCaixa=document.querySelector('#itens-adicionais')


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
   { nome:'2 X-tudos',descriçao:' Pão, carne, queijo, presunto, bacon, ovo, alface, ketchup, maionese temperada, e batata palha.',valor:19.99,imagem:"imagens/x-tudo.png",obs:'',valorF:''},
    
    { nome:'Combo X-burguer',descriçao:' lanche + batata frita + guaravita ou guaracamp.',valor:11.99,imagem:"imagens/x-tudo.png",obs:'',valorF:''},

    { nome:'Combo Duplo cheddar',descriçao:'  lanche + batata frita + guaravita ou guaracamp.',valor:16.00,imagem:"imagens/x-tudo.png",obs:'',valorF:''},

    { nome:'Combo X-Tudo ',descriçao:' lanche + batata frita + guaravita ou guaracamp.',valor:16.00,imagem:"imagens/x-tudo.png",obs:'',valorF:''},

    { nome:'Combo X-Picanha',descriçao:'  lanche + batata frita + refrigerante lata.',valor:25.00 ,imagem:"imagens/x-tudo.png",obs:'',valorF:''}
]
let por=[
        { nome:' Batata Frita 200g',descriçao:'Batata frita , ketchup, maionese temperada,queijo ralado e orégano.',valor:7.00,imagem:'',obs:'',valorF:''},
        
        { nome:'Batata Frita 400g',descriçao:'Batata frita , calabresa, ketchup, maionese temperada,queijo ralado e orégano.',valor:14.00,imagem:'',obs:'',valorF:''}
    ]
 let Hamb=[
        { nome:'Hambúrguer',descriçao:' Pão, carne, alface, ketchup ,maionese temperada , e batata palha.',valor:5.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
        
        { nome:'X-Búrguer',descriçao:'  Pão, carne, queijo, alface, ketchup ,maionese temperada , e batata palha.',valor:6.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
        
            { nome:'Duplo X-Búrguer ',descriçao:' Pão, 2 carnes, 2 queijos, alface, ketchup ,maionese temperada , e batata palha.',valor:10.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
    
            { nome:'Duplo Cheddar',descriçao:'Pão, 2 carnes, 2 cheddar, alface, ketchup ,maionese temperada , e batata palha.',valor:10.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
            
            { nome:'X-Egg ',descriçao:' Pão, carne, queijo , alface, ketchup ,maionese temperada , e batata palha.',valor:9.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
    
            { nome:'X-Tudo',descriçao:' Pão, carne, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:9.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
    
            { nome:'X-Trovão',descriçao:'   Pão, 2 carnes, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:14.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
    
            { nome:'X-Tudão',descriçao:'  Pão, 2 carnes, 2 queijos, 2 presuntos, bacon, 2 ovos, alface, ketchup ,maionese temperada , e batata palha.',valor:16.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
            
            { nome:'X-Calabresa',descriçao:'Pão, carne, queijo, presunto, calabresa, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:13.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
            
            { nome:'X-Picanha',descriçao:' Pão, carne de picanha 120g, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:16.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''}
] 
let cachorro =[
                { nome:'Linguiça',descriçao:' Pão, salcicha, molho, ketchup, maionese, ovo de codorna, azeite, azeitona, queijo relado, alho torrado,cheddar,catupiry e batta palha .',valor:12.00,imagem:'',obs:'',valorF:''},
                
                { nome:'Salcicha',descriçao:' Pão, salcicha, molho, ketchup, maionese, ovo de codorna, azeite, azeitona, queijo relado, alho torrado,cheddar,catupiry e batta palha',valor:10.00,imagem:'',obs:'',valorF:''}
]
 let bebi=[
                    {nome:'Água (com gás)',valor:2.99,
                    descriçao:'',imagem:"imagens/agua-com-gas.png",obs:'',valorF:''},
                    
                    { nome:' Água (sem gás)',descriçao:'',valor:1.99,imagem:"imagens/agua-sem-gas.png",obs:'',valorF:''},
                    
                    { nome:'Guaravita',descriçao:'',valor:1.99,imagem:'imagens/guaravita.png',obs:'',valorF:''}, 
                    
                    { nome:'Coca-cola 310ml ',descriçao:'',valor:5.00,imagem:'imagens/coca-cola.png',obs:'',valorF:''},
        
                    { nome:'Fanta Larranja 350ml',descriçao:'',valor:5.00,imagem:'imagens/fanta-laranja.png',obs:'',valorF:''},
        
                    { nome:'Fanta Uva 350ml',descriçao:'',valor:5.00,imagem:'imagens/fanta-uva.png',obs:'',valorF:''},
                    
                    { nome:'Guanará Antártica',descriçao:'',valor:5.00,imagem:'imagens/guarana-antartica.png',obs:'',valorF:''},
        
                    { nome:'Pepsi',descriçao:'',valor:5.00,imagem:'imagens/pepsi.png',obs:'',valorF:'',valorF:''},    
                ]       
let sucos =[
                    
                    { nome:'Suco de Abacaxi com Hortelã ',descriçao:'',valor:6.00,imagem:'',obs:'',valorF:''},
                    
                    { nome:'Suco de Maracujá',descriçao:'',valor:6.00,imagem:'',obs:'',valorF:''},
                    
                    { nome:'Cupuaçu',descriçao:'',valor: 6.00,imagem:'',obs:'',valorF:''},

    { nome:'Suco de Manga',descriçao:'',valor:6.00,imagem:'',obs:'',valorF:''},

    { nome:'Suco de Graviola',descriçao:'',valor:6.00,imagem:'',obs:'',valorF:''},

    { nome:'Suco de Caju',descriçao:'',valor: 6.00,imagem:'',obs:'',valorF:''},
    
    { nome:'Suco de Acerola',descriçao:'',valor: 6.00,imagem:'',obs:'',valorF:''}
]     
let vita=[
    
    { nome:'Abacaxi com Hortelã ao Leite',descriçao:'', valor:7.00,imagem:'',valorF:''},
    
    { nome:'Maracujá ao Leite',descriçao:'',valor:7.00,imagem:'',valorF:''},

    { nome:'Cupuaçu ao Leite',descriçao:'',valor:7.00,imagem:'',valorF:''},

    { nome:'Manga ao Leite',descriçao:'',valor:7.00,imagem:'',valorF:''},
    
    { nome:'Morango ao Leite',descriçao:'',valor:7.00,imagem:'',valorF:''}
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
    limparTextoArea()
    
    /*----------------------------------------*/
    itemExpand=[]
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



function clickitem(posiçaoItem){
    //alert('clickitem')
    
    folhas.folha3.style.display='block'
    folhas.folha2.style.display='none'
    itemExpand.push(itens[posiçaoItem])

    renderItemExpand()
    renderAdicionais()

    console.log(itemExpand)
    

}
function renderItemExpand(){

    //if ( itemExpand !=''){

        let tituloExpand=document.querySelector('.nome-expand-itens')
        tituloExpand.innerHTML=itemExpand[0].nome//titulo-expand
        
        let imagemExpand=document.querySelector("#imagem-expand")
        imagemExpand.src=itemExpand[0].imagem
        
        let descriçaoProdutoExpand=document.querySelector('.descriçao-produto-expand')
        descriçaoProdutoExpand.innerHTML=itemExpand[0].descriçao
        
        let valorUnitario=document.querySelector('.valor-unitario')
        let preçoU=itemExpand[0].valor
        let preçoUnitario=String(preçoU.toFixed(2))
        valorUnitario.innerHTML=(`R$ ${preçoUnitario.replace(".",",")}`)
    //}else if ( itemExpand===''){}

}






function limparTextoArea(){
    let textArea=document.querySelector('#caixa-observacao')
    textArea.value=''

    
}



let carrinho = []


function adicionarCarrinho(){
 
  let caixaObservacao= document.querySelector('#caixa-observacao')
  itemExpand[0].obs = caixaObservacao.value

  folhas.folha3.style.display='none'
  folhas.folha4.style.display='block'

  carrinho.push(...itemExpand)
  
  itemExpand=[]
  
  renderCarrinho()

  caixaObservacao.value=''

          //puxar informaçoes do pagamento do itemExpand
          let posicao = carrinho.length -1
          let VI=0
          VI=(carrinho[posicao].valor)
          TP.push(VI)
          VI=''

 renderValorTotal()
  
 
  



}


    function renderCarrinho(){


        let areaCarrinho= document.querySelector("#area-carrinho")
        areaCarrinho.innerHTML=""     
        carrinho.map((item)=>{
      
          
      
            
            let areaItemCarrinho=document.createElement('div')
            areaItemCarrinho.classList.add('area-item-carrinho')
            
            let areaItem = document.createElement('div')
            areaItem.classList.add('area-item')
            
            let imgItem = document.createElement('img')
            imgItem.src=item.imagem
            imgItem.classList.add('img-item-carrinho')
            
            let nomeItem= document.createElement('p')
            nomeItem.innerHTML=item.nome
            nomeItem.classList.add('nome-item-carrinho')
            
            let valorUniCarrinho= document.createElement("p")
            valorUniCarrinho.classList.add('valor-unitario-carrinho')
            let vlor=item.valor
            let vl=String(vlor.toFixed(2))
            valorUniCarrinho.innerHTML=(`R$ ${vl.replace('.',',')}`)
            
            
            let posicaoItemC= carrinho.indexOf(item)
            
            
            
            let imgEdit= document.createElement('img')
            imgEdit.src="imagens/edit.png"
            imgEdit.classList.add('img-edit')
            imgEdit.setAttribute('onclick',`clickEdit(${posicaoItemC})`)
            
            let imgDelet= document.createElement('img')
            imgDelet.src="imagens/delete.png"
            imgDelet.classList.add('img-delete')
            imgDelet.setAttribute('onclick',`clickDelet(${posicaoItemC})`)
            
            
            
            
            
            
            let descriCarrinho= document.createElement('p')
            descriCarrinho.innerHTML=item.obs
            descriCarrinho.classList.add('descri-carrinho')
            
            
            
            areaCarrinho.appendChild(areaItemCarrinho)
            areaItemCarrinho.appendChild(areaItem)
            areaItem.appendChild(imgItem)
            areaItem.appendChild(nomeItem)
            areaItem.appendChild(valorUniCarrinho)
            areaItem.appendChild(imgEdit)
            areaItem.appendChild(imgDelet)
            areaItemCarrinho.appendChild(descriCarrinho)
            
            
            
            
            
            
            
        })
        
    
        
    }
    //console.log(carrinho)
 
    
    let TP= []//TP=todos os preços

function renderValorTotal(){
 
    
    
    
  
    
    if ( TP == '' ) {
    
        let vt= document.querySelector('#valor-final')
      vt.innerHTML=(`R$ 00,00`)
    }else if ( TP !='' ){

        let VTC=  TP.reduce(function(soma,i){
            return soma + i
        })//VTC=valor total do carrinho
        let VTS=String(VTC.toFixed(2))//VTS= Valor total transformado para String
        let vt= document.querySelector('#valor-final')
        vt.innerHTML=(`R$ ${VTS.replace(".",",")}`)
        
        let quantidadeCarrinho= carrinho.length
        let numeroCarrinho= document.querySelector('#numero-de-itens')  
        numeroCarrinho.innerHTML=quantidadeCarrinho

        console.log(TP)
    }

        
    }


    function clickEdit (posicaoItemC){

        folhas.folha4.style.display='none'
        folhas.folha3.style.display='block'
        itemExpand.push(carrinho[posicaoItemC])
        clickDelet(posicaoItemC)
        renderItemExpand()

      //  let caixaObservacao= document.querySelector('#caixa-observacao')
        //caixaObservacao.innerHTML=itemExpand[0].obs

        
        

        console.log (carrinho)
        console.log (itemExpand)
    }

    function clickDelet(posicaoItemC){

        

        carrinho.splice(posicaoItemC,1)
        TP.splice(posicaoItemC,1)

    

        if(carrinho == ""){

            renderCarrinho()
            renderValorTotal()
            cVazio()

             
          

        }else if(carrinho != ""){
            

            renderCarrinho()
            renderValorTotal()
        }
        
       // console.log(TP)
       
       
    }
    function cVazio(){
        let areaCarrinho= document.querySelector("#area-carrinho")

        let CarrinhoVazio= document.createElement('p')
        areaCarrinho.appendChild(CarrinhoVazio)
        CarrinhoVazio.innerHTML='Carrinho Vazio ...'
    }
    


function addItensCarrinho(){


    carrinho.push(itemExpand)


}

function finalizarPedido(){
    renderValorTotal()
}
function continuarComprando(){
    folhas.folha4.style.display='none'
    folhas.folha2.style.display='block'
}

let carrinhoExterno = document.querySelector('#C-ext')

carrinhoExterno.addEventListener('click', cExt)

function cExt(){



if (folhas.folha4.style.display === 'none' ){

    folhas.folha1.style.display='none'
    folhas.folha2.style.display='none'
    folhas.folha3.style.display='none'
    folhas.folha4.style.display='block'

}else if(folhas.folha4.style.display != 'none' ){
    folhas.folha1.style.display='grid'
    folhas.folha2.style.display='none'
    folhas.folha3.style.display='none'
    folhas.folha4.style.display='none'
}

if(carrinho == ""){

    renderCarrinho()
    renderValorTotal()
    cVazio()

     
  

}else if(carrinho != ""){
    

    renderCarrinho()
    renderValorTotal()
}

}

let adicionais = [
    {id:1,item:'carne',quantidade:0,valorU:3,valorFA:''},
    {id:2,item:'ovo',quantidade:0,valorU:2.30,valorFA:''},
    {id:3,item:'queijo',quantidade:0,valorU:1.99,valorFA:''},
    {id:4,item:'bacon',quantidade:0,valorU:1,valorFA:''},
    {id:5,item:'calabresa',quantidade:0,valorU:1.50,valorFA:''},

] 

function renderAdicionais(){

    let caixaAdicionais=document.querySelector('#caixa-adicionais')
    
    caixaAdicionais.innerHTML=""

    adicionais.map((todo)=>{


        let caixaItem=document.createElement('div')

        let caixaText=document.createElement('p')
        let itemText=document.createTextNode(todo.item)

        let valorADC=document.createElement('p')
        let textValor= String(todo.valorU.toFixed(2))
        let text=document.createTextNode(`R$ ${textValor.replace(".",",")} Uni.`)


        let areaBtn= document.createElement('div')
        areaBtn.classList.add('areaBtnQuant')

        let butomMais= document.createElement('button')
        let textBMais= document.createTextNode('+')

        let quantiADC= document.createElement('p')
        quantiADC.classList.add('quantiADC')
        quantiADC.innerHTML=todo.quantidade
    
        
        let butonMenos=document.createElement('button')
        let textBMenos=document.createTextNode('-')



        caixaAdicionais.appendChild(caixaItem)
        caixaItem.appendChild(caixaText)
        caixaText.appendChild(itemText)
        caixaItem.appendChild(valorADC)
        valorADC.appendChild(text)
        caixaItem.appendChild(areaBtn)

        
        areaBtn.appendChild(butonMenos)
        butomMais.appendChild(textBMais)
        areaBtn.appendChild(quantiADC)
        areaBtn.appendChild(butomMais)
        butonMenos.appendChild(textBMenos)

        let posicaoADc= adicionais.indexOf(todo)

        butomMais.setAttribute("onclick",`buttomMaisADC(${posicaoADc})`)

        butonMenos.setAttribute("onclick",`buttoMenosADC(${posicaoADc})`)

    })
    

    

   
//console.log(adicionais)
}
let TA = []

function buttomMaisADC(posicaoADc){
 
    adicionais[posicaoADc].quantidade = adicionais[posicaoADc].quantidade + 1
    
    renderAdicionais()
   
    adicionais[posicaoADc].valorFA = adicionais[posicaoADc].quantidade * adicionais[posicaoADc].valorU

TA.push(adicionais[posicaoADc].valorFA)



/*

    
    let caixaPF= document.querySelector('.valorTotal')
    caixaPF.innerHTML=''
  
   // if(adicionais[posicaoADc].quantidade > 0){

        let text=document.createElement('p')
        text.innerHTML="valor total:"
        caixaPF.appendChild(text)
        let valor=document.createElement('p')
        valor.innerHTML="R$ 20,00"
        caixaPF.appendChild(valor)*/
        



    

    //alert('text')
    //console.log(adicionais[posicaoADc].quantidade)
    //console.log(adicionais[posicaoADc].valorU)
    console.log(TA)
}


function buttoMenosADC(posicaoADc){

    let caixaPF= document.querySelector('.valorTotal')
    caixaPF.innerHTML=''

    if(adicionais[posicaoADc].quantidade == 0 ){

        adicionais[posicaoADc].quantidade = 0
        renderAdicionais()
        alert('1')

    }else{
        adicionais[posicaoADc].quantidade = adicionais[posicaoADc].quantidade - 1
        renderAdicionais()
       alert('2')

    }


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
