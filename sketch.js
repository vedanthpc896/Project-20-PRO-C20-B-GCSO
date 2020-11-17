var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(20, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor="yellow";

  wall = createSprite(1300,200,60,200);
  wall.shapeColor = color("brown");
}

function draw() {
  background("black");  

  car.collide(wall);

  if(wall.x-car.x < (car.width+wall.width)/2)
  { 
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
       car.shapeColor = color("red");
    }
    if(deformation<180 && deformation>100){
       car.shapeColor = color("blue");
    }
    if(deformation<100){
      car.shapeColor = color("green");
    }
  }

  drawSprites();
}