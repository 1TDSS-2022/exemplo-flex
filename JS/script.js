// math é uma classe que no javascript possui métodos
// que retorna valores matemáticos

//Pow()
// alert(Math.pow(2,1))

//Ramdom-retorna números randômico entre 0 e 1
// alert(Math.random())

//Round- arredonda para cima e para baixo
// alert(Math.round(Math.ramdom()))

//Floor arredonda para baixo
// alert(Math.floor(Math.ramdim()))

//Ceil - arredonda para cima
// alert(Math.ceil(Math.random()))

// var nomeAlunos = ["Luan", "Vitor", "Rodrigo","Marcelo"]

// alert(nomeAlunos[Math.round(Math.random() * nomeAlunos.length)])


const divsFilhas = document.querySelectorAll(".box")

// for (const elemento of divsFilhas) {
//     var red = Math.round(Math.random() * 255)
//     var green = Math.round(Math.random() * 255)
//     var blue = Math.round(Math.random() * 255)

//     //elemento.style.backgroundColor = "rgb( "+ red + "," + green + "," + blue +")"
    
//     //Interpolação
//     elemento.style.backgroundColor = 'rgb(${red} ,${green}, ${blue})'
// }
setInterval(trocaCores,1000)

function trocaCores(){
    for (const elemento of divsFilhas) {
        var red = Math.round(Math.random() * 255)
        var green = Math.round(Math.random() * 255)
        var blue = Math.round(Math.random() * 255)
    
        //elemento.style.backgroundColor = "rgb( "+ red + "," + green + "," + blue +")"
        //Interpolação
        elemento.style.backgroundColor = "rgb(${red} ,${green}, ${blue})"
    }   

}