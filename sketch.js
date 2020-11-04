 var PLAY = 1;
var END = 0;
var gameState= PLAY;
var ground
var bow
var balloon
var balloon1
var balloon2
var balloon3
var arrow
var edges
var score;
var finish

function preload(){
 //load your images here 
 groundimage = loadImage("background0.png")
 Bow = loadImage("bow0.png")
 Balloon= loadImage("blue.png")
 Balloon1= loadImage("pink.png")
 Balloon2= loadImage("red.png")
 Balloon3= loadImage("green.png")

  
}

function setup() {
  createCanvas(900, 600);
  
  //add code here
 ground= createSprite(500,00,300,10);
  ground. addImage(groundimage)
 
 ground.scale=3.0;
  
  bow= createSprite(615,400,30,30)
  bow. addImage(Bow)
  
blueB= createGroup();
  redB= createGroup();
  greenB= createGroup();
  pinkB= createGroup();
  arrowGroup=createGroup(); 
  
  
  finish= createSprite(600,300,10,600)
  finish.visible=false;
  
 score=0;

  
  edges= createEdgeSprites();
}

function draw() {

  //add code here
 background("white");

 if(gameState === PLAY) {
   if(ground.x<50){
 ground.x = ground.width/2
  } 
   
    ground.velocityX=-5;
   
  if(keyDown('space')){
    createArrows();
  }
    var select_balloon=Math.round(random(1,4))
  console.log(select_balloon)
  
  if(World.frameCount%80===0){
    if(select_balloon == 1){
      redBalloon();
    }else if(select_balloon == 2){
      blueBalloon();
    }else if(select_balloon == 3){
      pinkBalloon();
    }else if(select_balloon == 4){
      greenBalloon();
    }
  }
   
   if(arrowGroup.isTouching(blueB)){
     blueB.destroyEach();
     arrowGroup.destroyEach();
     score=score+1
   }
   
    if(arrowGroup.isTouching(pinkB)){
     pinkB.destroyEach();
     arrowGroup.destroyEach();
     score=score+3
   }
   
    if(arrowGroup.isTouching(greenB)){
     greenB.destroyEach();
     arrowGroup.destroyEach();
     score=score+2
   }
   
    if(arrowGroup.isTouching(redB)){
     redB.destroyEach();
     arrowGroup.destroyEach();
     score=score+1
   }
   
   if(redB.isTouching(finish)){
     redB.destroyEach();
     score=score-10;
   }
   
      if(blueB.isTouching(finish)){
     blueB.destroyEach();
     score=score-10;
   }
   
      if(greenB.isTouching(finish)){
     greenB.destroyEach();
     score=score-10;
   }
   
      if(pinkB.isTouching(finish)){
    pinkB.destroyEach();
     score=score-10;
   }
  
   if(score<=-1){
     gameState = END;
   }
   
 } else if(gameState === END){
   redB.setVelocityXEach(0);
   pinkB.setVelocityXEach(0);
   greenB.setVelocityXEach(0);
   blueB.setVelocityXEach(0);
   ground.velocityX=0;
   redB.destroyEach();
    blueB.destroyEach();
     pinkB.destroyEach();
    greenB.destroyEach();
   

 
 }

 
 
  
  bow.y=mouseY;
  bow.display();
  
  
  
 

  
 
 
  
  drawSprites();

text("Score: "+ score, 500,100);
  
}

function createArrows(){
 Arrow= loadImage("arrow0.png")
  arrow=createSprite(600,300,10,10)
  arrow.addImage(Arrow)
  arrow.scale=0.3;
    arrow . velocityX=-6;
  arrow.y=bow.y;
  arrowGroup.add(arrow)
}


function redBalloon(){
  var red = createSprite(0,Math.round(random(70,370)))
  red.addImage(Balloon2)
  red.velocityX=3;
  red.scale=0.1;
  red.lifetime=200
  redB.add(red)
  red.setCollider("circle",0,0,40);
  red.velocityX=red.velocityX-0.1;
}


function blueBalloon(){
  var blue = createSprite(0,Math.round(random(70,370)))
  blue.addImage(Balloon)
  blue.velocityX=3;
  blue.scale=0.13;
  blue.lifetime=200
  blueB.add(blue)
  blue.setCollider("circle",0,0,40);
  blue.velocityX=blue.velocityX-0.1
 // blue.debug = true
}

function pinkBalloon(){
  var pink = createSprite(0,Math.round(random(70,370)))
  pink.addImage(Balloon1)
  pink.velocityX=3;
  pink.scale=1;
  pink.lifetime=200
  pinkB.add(pink)
 pink.velocityX=pink.velocityX-0.1
  pink.setCollider("circle",0,0,40);
}

function greenBalloon(){
  var green = createSprite(0,Math.round(random(70,370)))
  green.addImage(Balloon3)
  green.velocityX=3;
  green.scale=0.13;
  green.lifetime=250
  greenB.add(green)
  green.velocityX=green.velocityX-0.1
   green.setCollider("circle",0,0,40);
}
