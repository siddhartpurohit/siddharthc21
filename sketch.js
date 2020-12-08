var wall ,bullet;
var   thickness,speed,weight;

function setup() {
  
  createCanvas(1200,400);
  
  speed = random(223,310);
  weight = random(30,52);
  thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 5);
bullet.velocityX = speed;
bullet.shapeColor = "white";


  wall = createSprite (1000,200,thickness,height/2);
  wall.shapeColor = color (255,250,250);
}

function draw() {
  background(0,0,0);  

  if(hasCollided(bullet,wall)){
bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
 
if(damage>10){
  wall.shapeColor = color (255,0,0);
}

if(damage<10){
  wall.shapeColor = color (0,255,0);

}
  }

function hasCollided(bullet,wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge>= wallLeftEdge){
  return true
}
return false
}










  drawSprites();
}