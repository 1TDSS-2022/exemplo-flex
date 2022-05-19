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

// var nomesAlunos = ['Eduarda','Luan','Vitor','Rodrigo','Samuel','Marcelo']

// alert(nomesAlunos[Math.round(Math.random() * nomesAlunos.length)])

//valor aleatório
const divFilhas = document.querySelectorAll('.box')

for (const elemento of divFilhas) {
    var red = Math.round(Math.random() * 255)
    var green = Math.round(Math.random() * 255)
    var blue = Math.round(Math.random() * 255)
    //CONCATENAÇÃO
    //elemento.style.backgroundColor = "rgb("+ red + "," + green + "," + blue + ")"
    //INTERPOLAÇÃO
    elemento.style.backgroundColor = `rgb(${red} ,${green} ,${blue})`
}

//setTimeout(alert,1000)
setInterval(trocaCores,1000)

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