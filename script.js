/*

[x] A cobra sempre anda na direção que sua cabeça aponta, sem precisar do comando do jogador, até que o jogo acabe

[x] O jogador pode mudar o personagem de direção

[x] O jogador não pode mudar a direção da cobra para a direção oposta à que ela está

[ ] Quando o personagem "comer" a maçã, ela deve sumir e uma nova maçã deve aparecer no mapa em uma posição aleatória

[ ] Ao colidir a cabeça do personagem, com a maçã (comer), o tamanho da cobra será aumentado em uma unidade.

[ ] Quando a cabeça da cobra colide com uma parede, o jogo acaba

[ ] Quando o a cabeça da cobra colide com uma parte de seu corpo, o jogo acaba

[ ] A maçã sempre deve aparecer em uma posição livre do corpo da cobra

*/


// Mapa
let alturaMapa = 15
let larguraMapa = 17

// Maçã
let diametroMaca = 1
let macaX = 12
let macaY = 7

// Cobra
let cobra = [
  { x: 4, y: 7 },
  { x: 3, y: 7 },
  { x: 2, y: 7 },
  { x: 1, y: 7 }
]
let direcaoCabeca = 'DIREITA'

// Estado do jogo
let acabou = false



function setup() {
  createCanvas(larguraMapa * 32, alturaMapa * 32);
  
}

function draw() {
  background('lightgreen')
  scale(32)
  translate(0.5, 0.5)
  rectMode(CENTER)
  frameRate(6)

  // Desenhando a maça  
  fill('red')
  noStroke()
  circle (macaX, macaY, diametroMaca ) 

  // Corpo da cobra
  fill("blue")
  square(cobra[0].x, cobra[0].y, 1)
  
  fill ("black")
  let contador = 1
  while(contador < cobra.length){

    square(cobra[contador].x, cobra[contador].y, 1)
    
    contador++
  }

  // ### Desenhar linas e coordenadas ###
  desenharCoordenadas()

  // Movendo a cobra

  if ( direcaoCabeca == 'DIREITA'){
    
    cobra.unshift({
      x: cobra[0].x + 1,
      y: cobra[0].y
    })
    cobra.pop()
    
  }
  if ( direcaoCabeca == 'CIMA'){
    
    cobra.unshift({
      x: cobra[0].x,
      y: cobra[0].y - 1
    })
    cobra.pop()
    
  }
  
  if(direcaoCabeca == "ESQUERDA"){
 
    cobra.unshift ({ 
      x: cobra[0].x -1,
      y: cobra[0].y 
    })
    cobra.pop()
  }
  
  if(direcaoCabeca == "BAIXO"){
 
    cobra.unshift({ 
      x: cobra[0].x,
      y: cobra[0].y +1 
    })
    cobra.pop()
  }
 
}

function keyPressed(){

  
  if( keyCode == UP_ARROW ){
    if( direcaoCabeca != 'BAIXO'){
      direcaoCabeca = 'CIMA'
    }
  }
  
  if(keyCode == DOWN_ARROW){ 
    if ( direcaoCabeca != 'CIMA'){
      direcaoCabeca = 'BAIXO'
    }
  }
  
  if (keyCode == RIGHT_ARROW){
    if ( direcaoCabeca != 'ESQUERDA'){ 
      direcaoCabeca = 'DIREITA'
    }
  }
  if(keyCode == LEFT_ARROW){
    if (direcaoCabeca !="DIREITA"){
      direcaoCabeca = 'ESQUERDA'
    }
  }

}
//Pra direita aumenta, esquerda diminui 






function desenharCoordenadas() {
  strokeWeight(1/32)

  textSize(0.5)
  textAlign(CENTER, CENTER);
  
  let cabeca = cobra[0]
  
  //Números
  for (let x = 0; x < larguraMapa; x++) {
    if(x == macaX){
      fill('red')
      stroke('red')
    }else if(x == cabeca.x){
      fill('blue')
      stroke('blue')
    }else{
      fill('black')  
      stroke('black')    
    }
    text(`${x}`, x,0)
  }
  for (let y = 0; y < alturaMapa; y++) {
    if(y == macaY){
      fill('red')
      stroke('red')
    }else if(y == cabeca.y){
      fill('blue')
      stroke('blue')
    }else{
      fill('black')  
      stroke('black')    
    }
    text(`${y}`, 0, y)
  }

  translate(-0.5, -0.5)

  stroke('black')  
  
  //Linhas Verticais
  for (let x = 1; x < larguraMapa; x++) {  
    line(x, 0, x, alturaMapa)
  }
  //Linhas Horizontais
  for (let y = 1; y < alturaMapa; y++) {
    line(0, y, larguraMapa, y)
  }

  line()
}
