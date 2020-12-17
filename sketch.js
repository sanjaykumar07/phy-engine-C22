const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var myengine,myworld,ball,ground;

function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;
var balloption={
  isStatic:false,
  restitution : 0.8
}

  ball=Bodies.circle(200,200,40,balloption)
  World.add(myworld,ball)

 var groundOption={
   isStatic : true
 } 
  ground = Bodies.rectangle(200,390,400,5,groundOption)
  World.add(myworld,ground)

  

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("yellow"); 
  Engine.update(myengine) ;
  console.log(ball)
  ellipseMode(RADIUS)
   ellipse(ball.position.x,ball.position.y,40,40)

   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,5);
  drawSprites();
}