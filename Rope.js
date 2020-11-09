
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
	// bob2 = new bob(width/2-10)

	rope1 = new Rope(bob1.body,roof.body,-100,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,-100,0);
	rope4 = new Rope(bob4.body,roof.body,-100,0);

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



