
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var ground, invisibleGround;
var Background,BackgrounD;
var monkeyJumpImage, monkeyJump;
var Score = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  Background = loadImage ("download.jpg");
 
}



function setup() {
  
 createCanvas (400,350) 
 
 BackgrounD = createSprite (285,173,100,10);
 BackgrounD.addImage ("Background", Background);
 BackgrounD.velocityX = -3; 
 BackgrounD.scale = 2; 
 //BackgrounD.visible = false; 
  
 monkey = createSprite (80,260,20,20);
 monkey.addAnimation ("moving",monkey_running);
 monkey.scale = 0.1; 
  
 ground = createSprite (100,295,800,10);
 //ground.velocityX = -4;
 //ground.x = ground.width/2;
 ground.visible = false; 
 console.log (ground.x);
  
  bananaGroup = new Group ();
  obstacleGroup = new Group ();
  
  Score = 0;
  
}


function draw() {
  
  

  if (BackgrounD.x <120){
      BackgrounD.x = BackgrounD.width/1;
  }
  
  if (keyDown("space") && monkey.y > 250){
      monkey.velocityY = -15;
      
      }
   
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide (ground);
  
 if (monkey.isTouching (bananaGroup)){
   bananaGroup.destroyEach ();
   Score = Score + 50;
 }
 if (monkey.isTouching (obstacleGroup)){
   Score = 0;
   
 }
   
    
    
  
  drawSprites ();
  obstacles ();
  SpawnBananas ();
  
  fill ("white");
  text ("Score: " + Score,300,50);
  

}
function SpawnBananas (){
  
if (frameCount % 100 === 0){
   var banana = createSprite (400,250,1,1);
   banana.addImage (bananaImage);
   banana.y = random (120,200);
   banana.scale = 0.08;
   banana.velocityX = -12;
   banana.lifetime = 100;
   monkey.depth = banana.depth + 1;
   banana.depth = BackgrounD.depth + 1;
   bananaGroup.add (banana);
    }
  
}
 
 function obstacles (){
   
  if (frameCount % 300 === 0){
    
   var obstacle = createSprite (300,277,1,1);
   obstacle.addImage (obstacleImage);
   obstacle.scale = 0.07;
   obstacle.velocityX = -4;
   obstacle.lifetime = 100;
   
   obstacleGroup.add (obstacle); 
 
 }
   
 


 }