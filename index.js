//select the paint area /diw
let paintArea = document.querySelector('.painting')
let selectedColor = 'blue'

//create DOM querySelector for each color

let blueBox = document.querySelector('#blue')
blueBox.addEventListener('click', function(e){
  selectedColor = 'blue'
})
let redBox = document.querySelector('#red')
redBox.addEventListener('click', function(e){
    selectedColor = 'red'
  })
let yellow = document.querySelector('#yellow')
yellowBox.addEventListener('click', function(e){
    selectedColor = 'yellow'
  })
let green = document.querySelector('#green')
greenBox.addEventListener('click', function(e){
    selectedColor = 'green'
  })



//Listen for user cliks
paintArea.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})
