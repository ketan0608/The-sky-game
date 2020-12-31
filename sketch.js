var background1,backgroundimage;
var player,playerimage;
var obstacle,obatacleimage;
var Edges;
var apple,appleimage;
var gamestate;
var obstaclegroup,applegroup;
var score;
function preload(){
//backgroundimage=loadImage("");
  playerimage=loadImage("Character image.webp");
  obstacleimage=loadImage("obstacle.png");
  appleimage=loadImage("banana.png");
}

function setup() {
   createCanvas(500,440);
  
  //creating the background
 // background1=createSprite(250,200,10000,10000);
 // background1.addImage(backgroundimage);
  
  //creating the player
  player = createSprite(80,350);
  player.addImage(playerimage);
  player.scale=0.2;
  player.debug=true;
  
  score=0;
  
  Edges = createEdgeSprites();
  gamestate=1;
  
  //creating group
  obstaclegroup=createGroup();
  applegroup=createGroup();
}

function draw() {
background("white");
  
   
  if(gamestate===1){
  text("Press p to start",200,200);
    text("press space to go up",200,220)
    text("press s to come down",200,240)
    text("you were in a mission on behave of a seret space agency but your spaceship broke in middle",0,100)
    text("and now you are lost you need to collect fruits so as to keep your booster fuel full",0,120)
    text("if you get crashed with some asteroids you may die and you lose so GOOD LUCK",0,140)
     }
  if(keyDown("p")&&gamestate===1){
    gamestate=2;
  }
  if(gamestate===2){
     if(keyDown("space")){
 player.velocityY=-3;
  }
    
text("Score :"+score,400,10)
    
//  player.velocityY= player.velocityY+0.8;
  
   if(keyDown("s")){
     player.velocityY=3;
   }
 player.collide(Edges);
  
  //calling funtions
  var create = Math.round(random(1,2));
  if(create===1){
    createobstacle();
  }
  if(create===2){
    createapple();
  }
  }
 
if(obstaclegroup.isTouching(player)){
  gamestate=0;
}
  if(gamestate===0){
    text("Press t to start again",200,200)
    text("GAMEOVER",180,190)
    obstaclegroup.destroyEach();
    applegroup.destroyEach();
    player.velocityY=0;
  }
if(keyDown("t")&&gamestate===0){
  gamestate=2;
}
  
  if(applegroup.isTouching(player)){
    score =score+1;
    applegroup.destroyEach();
  }
  
  drawSprites();
}


function createobstacle(){
   if (frameCount % 100 === 0) {
  obstacle=createSprite(800,Math.round(random(50,400)));
  obstacle.addImage(obstacleimage);
     obstacle.velocityX=-3;
obstacle.scale=0.1
     obstacle.lifetime=300;
 obstacle.debug=true;
     obstaclegroup.add(obstacle);
   }
}

function createapple(){
    if (frameCount % 100 === 0) {
  apple=createSprite(800,Math.round(random(50,400)));
  apple.addImage(appleimage);
     apple.velocityX=-3;
apple.scale=0.1
     apple.lifetime=300;
 apple.debug=true;
      applegroup.add(apple);
   }
  
  
}