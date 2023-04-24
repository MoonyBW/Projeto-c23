
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world, ground, ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.71,
		frictionAir:0

}

	var ground_options ={
	isStatic: true
}

ground = Bodies.rectangle(300,400,500,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background(0);
  fill("white")

  drawSprites();
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x, ground.position.y, 500,20);
 
} 

