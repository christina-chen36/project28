const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var world, boy;

var constraintObj;

function preload() {
  boy = loadImage("images/boy.png");
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  mango1 = new mango(1100, 100, 30);
  mango2 = new mango(1050, 100, 30);
  mango3 = new mango(1150, 150, 30);
  mango4 = new mango(900, 200, 30);
  mango5 = new mango(1000, 160, 30);
  mango6 = new mango(1100, 170, 30);
  mango7 = new mango(950, 250, 30);

  stoneObj = new Stone(230, 400, 25);
  treeObj = new tree(1050, 580);
  groundObject = new ground(width / 2, 600, width, 20);

  constraintObj = new slingshot(stoneObj.body, { x: 230, y: 400 });
  Engine.run(engine);
}

function draw() {
  background(230);
  //Add code for displaying text here!
  image(boy, 200, 340, 200, 300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  groundObject.display();
  stoneObj.display();
  constraintObj.display();
  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
}

function mouseDragged() {
  Matter.Body.setPosition(stoneObj.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  constraintObj.fly();
}

function detectCollision(stone, mango) {
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;

  var distance = dist(
    stoneBodyPosition.x,
    stoneBodyPosition.y,
    mangoBodyPosition.x,
    mangoBodyPosition.y
  );

  console.log(
    "distance=" + distance + "; mango.r=" + mango.r + "; stone.r=" + stone.r
  );

  if (distance < mango.r + stone.r) {
    Matter.Body.setStatic(mango.body, false);
    console.log("is this fkcing workign ew");
  }
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, { x: 235, y: 420 });
    constraintObj.attach(stoneObj.body);
  }
}
