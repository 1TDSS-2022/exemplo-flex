//Mathé uma classe que no javascript possui métodos
// que retornam valores matemáticos

//POW()
//alert(Math.pow(2, 3))

//RANDOM - Retorna números randômicos entre 0 e 1
//alert(Math.random())

//ROUND - Arredonda pra cima e pra baixo
//alert(Math.round(Math.random()))

//FLOOR - Arrendar para baixo
//alert(Math.floor(Math.random()))

//CEIL - Arrendar para cima
//alert(Math.ceil(Math.random()))

//var nomesAlunos = ['Eduarda','Luan','Vitor','Rodrigo','Samuel','Marcelo']

//alert(nomesAlunos[Math.round(Math.random() * nomesAlunos.length)])


//valores aleatorios

//setTimeout(alert,1000)
setInterval(trocaCores,100)

function trocaCores(){

    const divsFilhas = document.querySelectorAll(".box")
    for (const elemento of divsFilhas) {
    
        var red = Math.round(Math.random() * 255)
        var green = Math.round(Math.random() * 255)
        var blue = Math.round(Math.random() * 255)
        
        //CONCATENAÇÃO
        //elemento.style.backgroundColor = "rgb("+ red + "," + green + "," + blue + ")"
    
        //INTERPOLAÇÃO
        elemento.style.backgroundColor = `rgb(${red} ,${green} ,${blue})`
    
    }

}

function trocaImagemDoLobo1(){
    const imgLoboCabecalho = document.querySelector(".cabecalho img")
    imgLoboCabecalho.src = "./img/lobo2.jpg"
    setTimeout(trocaImagemDoLobo2, 500)
}

function trocaImagemDoLobo2(){
    const imgLoboCabecalho = document.querySelector(".cabecalho img")
    imgLoboCabecalho.src = "./img/lobo3.jpg"
    setTimeout(trocaImagemDoLobo3, 500)
    
}

function trocaImagemDoLobo3(){
    const imgLoboCabecalho = document.querySelector(".cabecalho img")
    imgLoboCabecalho.src = "./img/lobo1.jpg"
    setTimeout(trocaImagemDoLobo1, 500)
}

trocaImagemDoLobo1()