
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone,box;
var rubber;
var ironparticles1,ironparticles2,ironparticles3,ironparticles4,ironparticles5;
var ironparticles6,ironparticles7,ironparticles8,ironparticles9,ironparticles10;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	ground = new Ground(400,height,800,20);
	hammer = new Hammer(100,100,100,50);
  stone = new Stone(350,320,70,70);
	rubber = new Rubber(400,320,70,70);
  box = new Box(400,350,20,20);
  ironparticles1 = new IronParticles(340,350,20,20);
  ironparticles2 = new IronParticles(340,350,20,20);
  ironparticles3 = new IronParticles(340,350,20,20);
  ironparticles4 = new IronParticles(340,350,20,20);
  ironparticles5 = new IronParticles(340,350,20,20);
  ironparticles6 = new IronParticles(340,350,20,20);
  ironparticles7 = new IronParticles(340,350,20,20);
  ironparticles8 = new IronParticles(340,350,20,20);
  ironparticles9 = new IronParticles(340,350,20,20);
  ironparticles10 = new IronParticles(340,350,20,20);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);
  
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  box.display();
  ironparticles1.display();
  ironparticles2.display();
  ironparticles3.display();
  ironparticles4.display();
  ironparticles5.display();
  ironparticles6.display();
  ironparticles7.display();
  ironparticles8.display();
  ironparticles9.display();
  ironparticles10.display();

}



