//-----VARIAVEIS-PRINCIPAIS
let folhas={
    
    folha1:document.querySelector('.listap'),
    folha2:document.querySelector('#lista-folha-itens'),
    folha3:document.querySelector('.folha-expand-itens')
    
    
}
//arrays com os titulos
let titulos=['Promoções','Porções','Hambúrgueres','Cachorro Quente','Bebidas','Sucos Naturais','Vitaminas']

titulos.map(titulo=>{
    
    let divTitulo=document.createElement('div')
    let h1Titulo=document.createElement('h1')
    let textoTitulo=document.createTextNode(titulo)
    
    h1Titulo.appendChild(textoTitulo)
    divTitulo.appendChild(h1Titulo)
    folhas.folha1.appendChild(divTitulo)
    
    let posiçaoTitulos= titulos.indexOf(titulo)

    divTitulo.setAttribute('onclick',`clickListaP(${titulos.indexOf(titulo)})`)
    
    console.log(posiçao)
})


function clickListaP(posiçaoTitulos){
    alert(posiçaoTitulos)
}


