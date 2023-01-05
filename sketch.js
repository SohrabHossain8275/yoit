
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, Lside, Rside;
var world;
var r = 40;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {restitution: 0.3, isStatic: false, friction: 0, density: 1.2};
	ball = Bodies.circle(260,100,r/2,ball_options);
	World.add(world, ball);

	ground = new Ground(width/2, 670, width, 20);
	Lside = new Ground(1100, 600, 20, 120);
	Rside = new Ground(1350, 600, 20, 120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, r, r);
  ground.display();
  Lside.display();
  Rside.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:85, y:-85,});
	}
}


