/*var marks=[40,45,50,55,60,65]

console.log(marks[0])

function setup()
{
  sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5]
  average=sum/marks.length
  console.log(average)
}*/



var trex;
var edges;
var ground;
function preload()
{
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup()
{
  createCanvas(600,200);
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  trex.x=50;
  ground=createSprite(200,180,400,20);
  edges=createEdgeSprites();
}

function draw()
{
  background("gold");

  ground.velocityX=-2;

  if(keyDown("space"))
  {
    trex.velocityY=-10;
  }

  trex.velocityY=trex.velocityY+0.5;

  trex.collide(ground);
  drawSprites();
}