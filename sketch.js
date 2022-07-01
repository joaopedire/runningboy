var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage("path.png");
  boyImg = loadAnimation ("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
}

function setup(){
  
  createCanvas(400,400);

  path = createSprite (200,200)
  path.addImage(pathImg);
  if(path.y > 400 ){
    path.y = height/4;
  }
  path.scale=2;

boy = createSprite(200,350)
 boy.addAnimation("running", boyImg);
boy.scale=0.7;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
 
  
  drawSprites();
}
