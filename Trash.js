class Trash{

    constructor(x,y,r)  {
      var options={
       'isStatic':false,
           'density':1.2,
           'restitution':0.3,
          'friction':0.5
      }  
      this.x=x
      this.y=y
     this.r=r
     this.body=Bodies.circle(this.x,this.y,this.r/2,options);
    
     World.add(world,this.body);   
    } 
   
    display() {
    var pos=this.body.position;
     push();
    translate(pos.x,pos.y);
  
   rectMode(CENTER);
    stroke("white");
    strokeWeight(3);
    fill("blue");
    ellipse(0,0,this.r,this.r);
    pop();
        
    }
   
   }