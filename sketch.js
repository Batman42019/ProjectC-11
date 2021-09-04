var path,boy, leftBoundary,rightBoundary,bomb,coin,energyDrink,power;
var pathImg,boyImg,bombImg,coinImg,energyDrinkImg,powerImg;
var i;


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg=loadImage("bomb.png");
  coinImg=loadImage("coin.png");
  energyDrinkImg=loadImage("energyDrink.png");
  powerImg=loadImage("power.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

bomb=createSprite(100,180,10,10);
bomb.addImage(bombImg);
bomb.scale=0.10;

coin=createSprite(200,180,10,10);
coin.addImage(coinImg);
coin.scale=0.5

power=createSprite(200,50,10,10);
power.scale=0.4;
power.addImage(powerImg);


energyDrink=createSprite(320,180,10,10);
energyDrink.addImage(energyDrinkImg);
energyDrink.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);

leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
