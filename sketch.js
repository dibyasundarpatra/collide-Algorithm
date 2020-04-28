function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "red";

  fixRect = createSprite(400,100,50,80);
  fixRect.shapeColor = "red";
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(movingRect.x - fixRect.x < movingRect.width/2 + fixRect.width/2 &&
    fixRect.x - movingRect.x < movingRect.width/2 + fixRect.width/2 &&
    movingRect.y - fixRect.y < movingRect.height/2 + fixRect.height/2 &&
    fixRect.y - movingRect.y < movingRect.height/2 + fixRect.height/2) {
      movingRect.shapeColor = "blue";
      fixRect.shapeColor = "blue";
  }else{
    movingRect.shapeColor = "yellow";
    fixRect.shapeColor = "yellow";
  }
  drawSprites();
}