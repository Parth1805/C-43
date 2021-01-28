var asteroid 
var bg,backgroundImg
var earthImg,earth
var asteroidImg1,asteroid,asteroidImg2,asteroid2
var spaceShipImg,spaceShip

var asteroidGroup;

function preload(){
  backgroundImg=loadImage("Images/Galaxy.jpg");
  earthImg=loadImage("Images/Earth2.png");
  asteroidImg1=loadImage("Images/Asteroid1.png");
  asteroidImg2=loadImage("Images/Asteroid2.png");
  spaceShipImg=loadImage("Images/Rocket.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
   earth=createSprite(displayWidth/2,displayHeight/2,400,400);
   spaceShip=createSprite(200,400,50,50);
   spaceShip.scale=0.1;

   earth.addImage(earthImg);
spaceShip.addImage(spaceShipImg);
 asteroidGroup = new Group();
 //asteroid.addImage(asteroidImg);
 //asteroid2.addImage(asteroid2Img);
}

function draw() {
background(backgroundImg);

spaceShip.x=mouseX;
spaceShip.y=mouseY;

spawnObstacles();

if(keyWentDown(32)){
bullets();
}

  drawSprites();
}

function bullets(){
var bullet=createSprite(200,450,15,10)
bullet.depth=spaceShip.depth-1

bullet.x=spaceShip.x
bullet.y=spaceShip.y

bullet.shapeColor="red";
bullet.velocityY=-5;

}

function spawnObstacles(){
  if(frameCount %  70 === 0){
  var asteroid=createSprite(random(0,displayWidth),0,50,50);
  var rand = Math.round(random(1,2))
  asteroid.velocityY=8;

  switch(rand){
    case 1 :asteroid.addImage(asteroidImg1);
    asteroid.x=random(displayWidth/2,displayWidth);
break;

   case 2:asteroid.addImage(asteroidImg2);
   asteroid.x=random(0,displayWidth/2);
   asteroid.scale=0.5
break;


  }
  asteroidGroup.add(asteroid);
  asteroid.lifetime = displayHeight/5

  }

}

