
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
	roof = new Roof(width/2,10,250,20);

	bob1 = new bob(width/2-80,height-120,20);
	bob2 = new bob(width/2-40,height-120,20);
	bob3 = new bob(width/2,height-120,20);
	bob4 = new bob(width/2+40,height-120,20);
	bob5 = new bob(width/2+80,height-120,20);

	// rope1 = new Rope(bob1.body,roof.body,-100,0);
	// rope2 = new Rope(bob2.body,roof.body,-100,0);
	// rope3 = new Rope(bob3.body,roof.body,-100,0);
	// rope4 = new Rope(bob4.body,roof.body,-100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-65, y:-65})
	}
}

