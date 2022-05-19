//mathé é uma classe que no javascript possui metodos
//que retornam valores matemáticos.


//pow()
//alert(Math.pow(2,3))

// RANDOM - Retorna números randômicos entre 0 e 1
//alert(Math.random())

//ROUND - ele arredonda para cima e para baixo
//alert(Math.round(Math.random()))

//floor - arredondar para baixo
//alert(Math.floor(Math.random()))

//ceil - arredondar para cima
//alert(Math.ceil(Math.random))

//var nomeAlunos = ['Eduarda', 'Luan', 'Vitor', 'Rodrigo', 'Samuel', 'Marcelo']

//alert(Math.round(Math.random() * nomeAlunos.length))

const divfilhas = document.querySelectorAll('.box')


for (const elemento of divfilhas){
var red = Math.round(Math.random() * 255)
var green = Math.round(Math.random() * 255)
var blue = Math.round(Math.random() * 255)


//Concatenação
//elemento.style.backgroundColor = "rgb("+ red + " ,"+ green + ","+ blue + ")"

//Interpolação
elemento.style.backgroundColor = 'rgb(red,green,blue)'
}
