const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world,box1,box2,ground,ball

function setup() {
  createCanvas(3000,800);
  engine= Engine.create()
  world=engine.world
  box1=new Box(900,100,70,70)
  box2=new Box(900,100,70,70)
  box3=new Box(900,100,70,70)
  box4=new Box(900,100,70,70)
  box5=new Box(900,100,70,70)
  
  box7=new Box(800,100,70,70)
  box8=new Box(800,100,70,70)
  box9=new Box(800,100,70,70)
  box10=new Box(800,100,70,70)
  box11=new Box(800,100,70,70)
  box12=new Box(800,100,70,70)
  box13=new Box(700,100,70,70)
  box14=new Box(700,100,70,70)
  box15=new Box(700,100,70,70)
  box16=new Box(700,100,70,70)
  box17=new Box(700,100,70,70)
  box18=new Box(700,100,70,70)
  box19=new Box(700,100,70,70)
  ball=new Ball(200,200,80,80)
  rope=new Rope(ball.body,{x:500,y:50})
  ground=new Ground(600,600,width/2,20)
    }
    
    function draw() {
      background(0);  
      Engine.update(engine)
     box1.display()
     box2.display()
     box3.display()
     box4.display()
     box5.display()
    
     box7.display()
     box8.display()
     box9.display()
     box10.display()
     box11.display()
     box12.display()
     box13.display()
     box14.display()
     box15.display()
     box16.display()
     box17.display()
     box18.display()
     box19.display()
     ball.display()
     rope.display()
     ground.display()
      drawSprites()

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}