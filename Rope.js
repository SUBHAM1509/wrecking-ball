class Rope {
    constructor(bodyA,pointB) {
    var options={
   bodyA:bodyA,
   pointB:pointB,
   "stiffness":1,
   "length":300
    
    } 
    this.rope=Constraint.create(options) 
    World.add(world,this.rope)
    
    
    
    }
    display() {
    var pointA=this.rope.bodyA.position
    var pointB=this.rope.pointB

    push();
    strokeWeight(3)
    stroke("orange")
    line(pointB.x,pointB.y,pointA.x,pointA.y)
    pop();
    }
    
    
    }