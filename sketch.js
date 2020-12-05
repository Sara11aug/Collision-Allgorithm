function setup() {
  //creating the canvas
  createCanvas(1200,800);
  fixedRec=createSprite(600, 400, 80, 50);
  fixedRec.shapeColor="green";
  fixedRec.debug=true;
  movingRec=createSprite(700,400,50,80);
  movingRec.shapeColor="green";
  movingRec.debug=true;
}

function draw() {
  background(255,255,255);  

  movingRec.x=World.mouseX;
  movingRec.y=World.mouseY;

  console.log(movingRec.x-fixedRec.x);

  if (movingRec.x-fixedRec.x<fixedRec.width/2+movingRec.width/2  && 
    fixedRec.x-movingRec.x<fixedRec.width/2+movingRec.width/2  &&
    movingRec.y-fixedRec.y<fixedRec.height/2+movingRec.height/2  && 
    fixedRec.y-movingRec.y<fixedRec.height/2+movingRec.height/2 ) {
    movingRec.shapeColor="red";
    fixedRec.shapeColor="red";
  } else {
    movingRec.shapeColor="green";
    fixedRec.shapeColor="green";
  }
  drawSprites();
}