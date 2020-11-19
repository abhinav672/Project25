const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('box.png');
	boximage.scale=0.2;
}

function setup() {
	
	
	var canvas = createCanvas(800, 500);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	box1 = new Box(533,405,10,150);
	box2 = new Box(620,480,170,10);
	box3 = new Box(705,405,10,150);
	
	ground1 = new Ground(400,490,800,10);
	
	paper1 = new Paper(100,470,15);
	
	 Engine.run(engine);
  
}


function draw() {
	background("green");
	Engine.update(engine);
	
	
	
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,520,285,200,200);
	paper1.display();
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-55});

		}
	}



	