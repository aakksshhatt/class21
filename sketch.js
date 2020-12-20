var fixedRect, movingRect;
var a , b

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
a = createSprite(100,100,50,50);
a.shapeColor = "green";
b = createSprite(100,800,50,50);
b.shapeColor = "green";
  b.velocityY = -5;
  a.velocityY = +5;
}
bounceoff(b , a);
function draw() {
  background(0,0,0);  

  
  drawSprites();
}
