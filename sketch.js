const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof,rope1,rope2,rope3,rope4,rope5;



function setup() {
	createCanvas(1600, 700);
	fill("black")
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	roof = new Roof(350,100,300,100);
	World.add(world,roof);

	bobObject1 = new bob(250,300);
	bobObject2 = new bob(300,300);
	bobObject3 = new bob(350,300);
	bobObject4 = new bob(400,300);
	bobObject5 = new bob(450,300);

	rope1 = new Rope(bobObject1.body,roof.body,-80,0);
	
	World.add(world,rope1);

	rope2 = new Rope(bobObject2.body,roof.body,-40,0);
	
	World.add(world,rope2);

	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	
	World.add(world,rope3);

	rope4 = new Rope(bobObject4.body,roof.body,+50,0);
	
	World.add(world,rope4);

	rope5 = new Rope(bobObject5.body,roof.body,+100,0);
	
	World.add(world,rope5);

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope5.display();
  
 // drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: -50, y: -45});
	}

}

/*function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
*/