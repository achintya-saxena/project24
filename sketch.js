
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1;
var ground1;
var bottomBody,leftWallBody,rightWallBody;
var up,upImage;

function preload()
{
upImage=loadImage("upImage.jpg")	;
}

function setup() {
	createCanvas(1200,400);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   trash1=new Trash(100,300,50);
   ground1=new Ground(600,350,1200,20);

rightWallBody=new Dustbin(1000,295,20,100);
rightWallBody.shapeColor="yellow";

bottomBody=new Dustbin(900,335,200,20);
bottomBody.shapeColor="yellow";

leftWallBody=new Dustbin(800,295,20,100);
leftWallBody.shapeColor="yellow";

up=createSprite(450,200,20,20);
up.addImage(upImage);
up.scale=0.2;
	
	
	Engine.run(engine);
  }

  function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

trash1.display();
ground1.display();

rightWallBody.display();
bottomBody.display();
leftWallBody.display();

  drawSprites();
  fill("white");
  textSize(30);
  text("Trash Throwing Game",400,35);
 }

function keyPressed() {
	if(keyCode===UP_ARROW) {
  Matter.Body.applyForce(trash1.body,trash1.body.position,{x:115,y:-115})
  up.visible=false;
	}
	  
	}
  
  


