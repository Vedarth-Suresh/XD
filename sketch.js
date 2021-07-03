var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf, leafImg;
var number = 1

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup()
{
  
  createCanvas(400,400);
  
 // Moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

 //creating boy running
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);
}


function draw() 
{
  background("white");

  if (number === 1)
  { 
    spawnApple();
  }else if(number === 2)
  {
    spawnLeaf();
  }

  if (keyDown("right"))
  {
    rabbit.velocityX = 5;
  }
  if (keyWentUp("right"))
  {
    rabbit.velocityX = 0;
  }

  if (keyDown("left"))
  {
    rabbit.velocityX = -5;
  }
  if (keyWentUp("left"))
  {
    rabbit.velocityX = 0;
  }



 
  edges= createEdgeSprites();
  rabbit.collide(edges);


  drawSprites();


}

function spawnApple()
{

  if (frameCount % 80 === 0)
  {
   apple = createSprite(random(50,350),-50,20,20);
   apple.addImage("apple",appleImg);
   apple.visible = true
   apple.scale = 0.1;
   apple.velocityY = 2;
   number = 2;
   if (rabbit.isTouching(apple)){
      apple.visible = false;
   }
   
  }
}

function spawnLeaf()
{ if (frameCount % 80 === 0)
  {
   leaf = createSprite(random(50,350),-50,20,20);
   leaf.addImage("apple",leafImg);
   leaf.scale = 0.1;
   leaf.velocityY = 2;
   number = 1;
  }
}