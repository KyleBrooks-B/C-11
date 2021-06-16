var ship;
var seaImage;
function preload(){
shipImg1 = loadAnimation("ship-1.png", "ship-2.png");
seaImg = loadImage("sea.png");
} 

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200)
sea.addImage(seaImg);
sea.velocityX = -5;
sea.scale = 0.3;
  ship = createSprite(50, 160,20,50);
  ship.addAnimation("cruising", shipImg1);
  ship.scale = 0.25;
  

  
}

function draw() {
  background("blue");
  sea.velocityX = -2;

  

if(sea.x <0){
  sea.x = sea.width/8;
}
drawSprites();

}