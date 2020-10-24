
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height+10,width,20);

	bob1 = new bob(width/2,height-20,20);

	rope1 = new rope(bob1,roof);
	rope2 = new rope(bob2,roof);
	rope3 = new rope(bob3,roof);
	rope4 = new rope(bob4,roof);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
}



